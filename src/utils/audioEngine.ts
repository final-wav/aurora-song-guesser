/**
 * Precision Web Audio API Engine for AURORA Song Guesser
 * Handles millisecond-exact snippet slicing, click-free micro-fades,
 * peak extraction for waveforms, and instant buffer caching.
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  private currentSource: AudioBufferSourceNode | null = null;
  private currentGain: GainNode | null = null;
  private bufferCache = new Map<string, AudioBuffer>();
  private masterGainNode: GainNode | null = null;
  private volume: number = 0.8;
  private isPlaying: boolean = false;
  private playTimeoutId: number | null = null;
  private progressIntervalId: number | null = null;

  private onPlaybackStateChange?: (playing: boolean) => void;
  private onProgressUpdate?: (currentTime: number, progressRatio: number) => void;

  constructor() {
    // Lazy AudioContext initialization on first user interaction
  }

  public setCallbacks(
    onStateChange: (playing: boolean) => void,
    onProgress: (currentTime: number, progressRatio: number) => void
  ) {
    this.onPlaybackStateChange = onStateChange;
    this.onProgressUpdate = onProgress;
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();
      this.masterGainNode = this.ctx.createGain();
      this.masterGainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
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
   * Loads and decodes an audio file from URL with caching
   */
  public async loadAudio(url: string): Promise<AudioBuffer> {
    this.initContext();

    if (this.bufferCache.has(url)) {
      return this.bufferCache.get(url)!;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load audio stream (${response.status})`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const decodedBuffer = await this.ctx!.decodeAudioData(arrayBuffer);
    this.bufferCache.set(url, decodedBuffer);
    return decodedBuffer;
  }

  /**
   * Generates normalized peak heights (0.0 - 1.0) from an AudioBuffer for drawing waveforms
   */
  public extractWaveformPeaks(buffer: AudioBuffer, numBars: number = 70): number[] {
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
  }

  /**
   * Plays exact snippet slice with micro fade-in and fade-out to eliminate clicks
   */
  public async playSnippet(
    url: string,
    duration: number,
    startOffset: number = 0
  ): Promise<void> {
    this.stop();
    this.initContext();

    const buffer = await this.loadAudio(url);
    if (!this.ctx || !this.masterGainNode) return;

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
