/**
 * Precision Web Audio API Engine for AURORA Song Guesser
 * Handles millisecond-exact snippet slicing, click-free micro-fades,
 * peak extraction for waveforms, and instant buffer caching.
 */

export function resolveAudioUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:') || url.startsWith('data:')) {
    return url;
  }
  const cleanPath = url.replace(/^\.\//, '');
  const base = import.meta.env.BASE_URL || './';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}

class AudioEngine {
  private ctx: AudioContext | null = null;
  private currentSource: AudioBufferSourceNode | null = null;
  private currentGain: GainNode | null = null;
  private bufferCache = new Map<string, AudioBuffer>();
  private inFlightLoads = new Map<string, Promise<AudioBuffer>>();
  private masterGainNode: GainNode | null = null;
  private volume: number = 0.8;
  private isPlaying: boolean = false;
  private playTimeoutId: number | null = null;
  private progressIntervalId: number | null = null;

  private onPlaybackStateChange?: (playing: boolean) => void;
  private onProgressUpdate?: (currentTime: number, progressRatio: number) => void;

  private htmlAudio: HTMLAudioElement | null = null;
  private isUnlocked: boolean = false;
  private silentAudioElement: HTMLAudioElement | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      const unlock = () => {
        this.unlockForIOS();
      };
      window.addEventListener('touchstart', unlock, { passive: true, once: true });
      window.addEventListener('pointerdown', unlock, { passive: true, once: true });
      window.addEventListener('click', unlock, { passive: true, once: true });
    }
  }

  /**
   * Unlocks iOS Safari Web Audio API and forces iOS audio session from Ambient to Playback,
   * enabling audio through speakers even if the hardware silent switch is active.
   */
  public unlockForIOS(): void {
    if (this.isUnlocked) return;
    this.isUnlocked = true;

    try {
      // 1. Play a 0.1s silent WAV to switch iOS session to Playback (Media)
      if (!this.silentAudioElement && typeof Audio !== 'undefined') {
        const silentWav = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
        const audio = new Audio(silentWav);
        audio.volume = 0.01;
        audio.play().then(() => {
          audio.pause();
        }).catch(() => {});
        this.silentAudioElement = audio;
      }

      // 2. Initialize and unlock Web Audio AudioContext synchronously
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass && !this.ctx) {
        this.ctx = new AudioCtxClass();
        this.masterGainNode = this.ctx.createGain();
        this.masterGainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGainNode.connect(this.ctx.destination);
      }

      if (this.ctx) {
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        const buffer = this.ctx.createBuffer(1, 1, 22050);
        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(this.ctx.destination);
        source.start(0);
      }
    } catch (e) {
      console.warn('iOS audio unlock warning:', e);
    }
  }

  public isCached(url: string): boolean {
    const resolvedUrl = resolveAudioUrl(url);
    return this.bufferCache.has(resolvedUrl);
  }

  public setCallbacks(
    onStateChange: (playing: boolean) => void,
    onProgress: (currentTime: number, progressRatio: number) => void
  ) {
    this.onPlaybackStateChange = onStateChange;
    this.onProgressUpdate = onProgress;
  }

  private async initContext(): Promise<void> {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
        this.masterGainNode = this.ctx.createGain();
        this.masterGainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGainNode.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      try {
        await this.ctx.resume();
      } catch (e) {
        console.warn('Could not resume AudioContext:', e);
      }
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGainNode && this.ctx) {
      this.masterGainNode.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  /**
   * Preload a batch of songs in background for 0ms zero-latency instant playback
   */
  public preloadBatch(urls: string[]): void {
    urls.forEach((url) => {
      if (url && !this.isCached(url)) {
        this.loadAudio(url).catch(() => {});
      }
    });
  }

  /**
   * Loads and decodes an audio file from URL with in-flight deduplication and caching
   */
  public async loadAudio(url: string): Promise<AudioBuffer> {
    const resolvedUrl = resolveAudioUrl(url);
    if (this.bufferCache.has(resolvedUrl)) {
      return this.bufferCache.get(resolvedUrl)!;
    }

    if (this.inFlightLoads.has(resolvedUrl)) {
      return this.inFlightLoads.get(resolvedUrl)!;
    }

    const loadPromise = (async () => {
      await this.initContext();
      const response = await fetch(resolvedUrl);
      if (!response.ok) {
        throw new Error(`Failed to load audio stream (${response.status})`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const decodedBuffer = await this.ctx!.decodeAudioData(arrayBuffer);
      this.bufferCache.set(resolvedUrl, decodedBuffer);
      this.inFlightLoads.delete(resolvedUrl);
      return decodedBuffer;
    })().catch((err) => {
      this.inFlightLoads.delete(resolvedUrl);
      throw err;
    });

    this.inFlightLoads.set(resolvedUrl, loadPromise);
    return loadPromise;
  }

  /**
   * Generates normalized peak heights (0.0 - 1.0) from an AudioBuffer for drawing waveforms
   */
  public extractWaveformPeaks(buffer: AudioBuffer, numBars: number = 70): number[] {
    try {
      const channelData = buffer.getChannelData(0);
      const blockSize = Math.floor(channelData.length / numBars);
      const peaks: number[] = [];

      for (let i = 0; i < numBars; i++) {
        const start = i * blockSize;
        let max = 0;
        for (let j = 0; j < blockSize; j += 10) {
          const val = Math.abs(channelData[start + j] || 0);
          if (val > max) max = val;
        }
        peaks.push(Math.max(0.12, Math.min(1.0, max * 1.8)));
      }

      return peaks;
    } catch {
      return Array(numBars).fill(0.3);
    }
  }

  /**
   * Plays exact snippet slice with micro fade-in and fade-out to eliminate clicks.
   * Seamlessly falls back to HTML5 Audio if Web Audio API decode encounters any issue.
   */
  public async playSnippet(
    url: string,
    duration: number,
    startOffset: number = 0
  ): Promise<void> {
    this.unlockForIOS();
    this.stop();
    await this.initContext();

    try {
      const buffer = await this.loadAudio(url);
      if (!this.ctx || !this.masterGainNode) throw new Error('No AudioContext');

      const source = this.ctx.createBufferSource();
      source.buffer = buffer;

      const gainNode = this.ctx.createGain();
      const now = this.ctx.currentTime;
      const fadeTime = Math.min(0.015, duration / 4); // 15ms anti-click micro-envelope

      // Envelope: 0 -> 1 -> 1 -> 0
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(1, now + fadeTime);
      gainNode.gain.setValueAtTime(1, now + duration - fadeTime);
      gainNode.gain.linearRampToValueAtTime(0, now + duration);

      source.connect(gainNode);
      gainNode.connect(this.masterGainNode);

      // Schedule exact playback window
      const safeOffset = Math.min(startOffset, Math.max(0, buffer.duration - duration));
      source.start(0, safeOffset, duration);

      this.currentSource = source;
      this.currentGain = gainNode;
      this.isPlaying = true;
      this.onPlaybackStateChange?.(true);

      const startTime = performance.now();
      const totalDurationMs = duration * 1000;

      // Smooth UI progress updates
      this.progressIntervalId = window.setInterval(() => {
        const elapsed = (performance.now() - startTime) / 1000;
        const ratio = Math.min(1.0, elapsed / duration);
        this.onProgressUpdate?.(elapsed, ratio);
      }, 16);

      // Precise timeout for UI state reset
      this.playTimeoutId = window.setTimeout(() => {
        this.stop();
      }, totalDurationMs + 20);

      source.onended = () => {
        if (this.currentSource === source) {
          this.stop();
        }
      };
    } catch (err) {
      console.warn('Web Audio playback fallback to HTMLAudio:', err);
      this.playSnippetHTMLAudioFallback(url, duration, startOffset);
    }
  }

  /**
   * Universal HTML5 Audio element fallback ensuring 100% playback reliability
   */
  private playSnippetHTMLAudioFallback(url: string, duration: number, startOffset: number = 0) {
    try {
      const resolvedUrl = resolveAudioUrl(url);
      const audio = new Audio(resolvedUrl);
      audio.volume = this.volume;
      audio.currentTime = startOffset;
      this.htmlAudio = audio;
      this.isPlaying = true;
      this.onPlaybackStateChange?.(true);

      audio.play().then(() => {
        const startTime = performance.now();
        this.progressIntervalId = window.setInterval(() => {
          const elapsed = (performance.now() - startTime) / 1000;
          const ratio = Math.min(1.0, elapsed / duration);
          this.onProgressUpdate?.(elapsed, ratio);
        }, 16);

        this.playTimeoutId = window.setTimeout(() => {
          this.stop();
        }, duration * 1000);
      }).catch((e) => {
        console.error('HTMLAudio fallback failed:', e);
        this.stop();
      });
    } catch (e) {
      console.error('Audio initialization failed:', e);
      this.stop();
    }
  }

  /**
   * Stops any currently playing audio immediately
   */
  public stop(): void {
    if (this.playTimeoutId) {
      window.clearTimeout(this.playTimeoutId);
      this.playTimeoutId = null;
    }
    if (this.progressIntervalId) {
      window.clearInterval(this.progressIntervalId);
      this.progressIntervalId = null;
    }

    if (this.htmlAudio) {
      try {
        this.htmlAudio.pause();
        this.htmlAudio.currentTime = 0;
      } catch {}
      this.htmlAudio = null;
    }

    if (this.currentGain && this.ctx) {
      try {
        this.currentGain.gain.cancelScheduledValues(this.ctx.currentTime);
        this.currentGain.gain.setValueAtTime(0, this.ctx.currentTime);
      } catch {
        // Gain already disconnected
      }
    }

    if (this.currentSource) {
      try {
        this.currentSource.stop();
        this.currentSource.disconnect();
      } catch {
        // Source already stopped
      }
      this.currentSource = null;
    }

    if (this.isPlaying) {
      this.isPlaying = false;
      this.onPlaybackStateChange?.(false);
      this.onProgressUpdate?.(0, 0);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const audioEngine = new AudioEngine();
