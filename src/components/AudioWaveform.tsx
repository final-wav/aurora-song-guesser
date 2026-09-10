import React, { useMemo } from 'react';

interface AudioWaveformProps {
  unlockedDuration: number; // e.g. 0.10, 0.50, 1.0, 3.0, 5.0, 10.0, 30.0
  totalMaxDuration?: number; // 30s
  playbackProgressRatio: number; // 0.0 to 1.0 of the current playing snippet
  isPlaying: boolean;
  peaks?: number[];
  startOffset?: number;
}

export const AudioWaveform: React.FC<AudioWaveformProps> = ({
  unlockedDuration,
  totalMaxDuration = 30.0,
  playbackProgressRatio,
  isPlaying,
  peaks,
  startOffset = 0,
}) => {
  // Default authentic-looking waveform peaks if not yet extracted
  const defaultPeaks = useMemo(() => {
    const bars: number[] = [];
    const count = 65;
    for (let i = 0; i < count; i++) {
      // Natural organic wave shape with dynamic peaks
      const sine = Math.sin((i / count) * Math.PI * 3);
      const noise = (Math.sin(i * 12.3) + Math.cos(i * 4.7)) * 0.25;
      const height = Math.max(0.18, Math.min(0.95, 0.35 + Math.abs(sine) * 0.45 + noise));
      bars.push(height);
    }
    return bars;
  }, []);

  const barData = peaks && peaks.length > 0 ? peaks : defaultPeaks;

  // Calculate percentage width of the unlocked audio zone across the 30s spectrum
  const unlockedRatio = Math.min(1.0, (startOffset + unlockedDuration) / totalMaxDuration);
  const startRatio = startOffset / totalMaxDuration;

  // Calculate scrubber position in percentage across the entire 30s width
  const currentPlayRatio = isPlaying
    ? startRatio + (unlockedDuration / totalMaxDuration) * playbackProgressRatio
    : startRatio;

  return (
    <div className="w-full max-w-xl mx-auto px-4 my-6 select-none">
      {/* Waveform Box */}
      <div className="relative h-20 bg-[#0e121a]/90 rounded-2xl border border-emerald-500/15 p-3.5 flex items-center justify-between overflow-hidden shadow-[0_4px_30px_-5px_rgba(0,0,0,0.7),inset_0_0_20px_rgba(16,185,129,0.05)]">
        {/* Unlocked audio highlight background glow */}
        <div
          className="absolute top-0 bottom-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-cyan-500/10 transition-all duration-300 pointer-events-none"
          style={{
            left: `${startRatio * 100}%`,
            width: `${(unlockedRatio - startRatio) * 100}%`,
          }}
        />

        {/* Waveform Bars */}
        <div className="w-full h-full flex items-center justify-between gap-[2px] z-10">
          {barData.map((peak, idx) => {
            const barRatio = idx / (barData.length - 1);
            const isUnlocked = barRatio >= startRatio && barRatio <= unlockedRatio;
            const isPlayed = isPlaying && barRatio <= currentPlayRatio;

            let barColor = 'bg-[#1e2433]'; // locked / inactive
            if (isPlayed) {
              barColor = 'bg-gradient-to-t from-emerald-400 via-teal-300 to-cyan-200 shadow-[0_0_10px_rgba(52,211,153,0.8)]'; // actively playing
            } else if (isUnlocked) {
              barColor = 'bg-gradient-to-t from-emerald-700/80 to-teal-500/80 hover:from-emerald-400 hover:to-teal-300'; // unlocked
            }

            return (
              <div
                key={idx}
                className="flex-1 flex items-center justify-center h-full"
              >
                <div
                  className={`w-full rounded-full transition-all duration-150 ${barColor}`}
                  style={{
                    height: `${Math.round(peak * 100)}%`,
                    minHeight: '4px',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Moving Scrubber Line */}
        <div
          className="absolute top-0 bottom-0 w-[2.5px] bg-gradient-to-b from-white via-cyan-200 to-emerald-300 z-20 pointer-events-none transition-[left] duration-75 shadow-[0_0_12px_rgba(52,211,153,0.9)]"
          style={{
            left: `${Math.min(99.5, Math.max(0.5, currentPlayRatio * 100))}%`,
          }}
        >
          <div className="w-2.5 h-2.5 bg-white rounded-full -ml-[3.5px] -mt-1 shadow-[0_0_8px_white]" />
        </div>
      </div>

      {/* Time indicators below the waveform */}
      <div className="flex justify-between items-center mt-2 px-1 text-xs text-[#8e8ea0] font-mono">
        <span>{unlockedDuration < 1 ? `0.${Math.round(unlockedDuration * 100)}s` : `${unlockedDuration.toFixed(1)}s`}</span>
        <span className="text-white font-semibold text-sm">
          {unlockedDuration >= 1 ? `${unlockedDuration.toFixed(2)}s` : `${unlockedDuration.toFixed(2)}s`}
        </span>
        <span>30s</span>
      </div>
    </div>
  );
};
