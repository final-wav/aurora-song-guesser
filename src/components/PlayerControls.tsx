import React, { useState, useEffect, useRef } from 'react';
import { STEP_INTERVALS, StepInterval } from '../utils/gameLogic';
import { Play, Square, FastForward, Plus, Clock } from 'lucide-react';

interface PlayerControlsProps {
  currentStepIndex: number;
  onSelectStepIndex?: (index: number) => void;
  onPlaySnippet: () => void;
  onStopSnippet: () => void;
  onUnlockNextStep: () => void;
  onSkipRound: () => void;
  isPlaying: boolean;
  isLoadingAudio: boolean;
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  currentStepIndex,
  onPlaySnippet,
  onStopSnippet,
  onUnlockNextStep,
  onSkipRound,
  isPlaying,
  isLoadingAudio,
}) => {
  const currentInterval: StepInterval = STEP_INTERVALS[currentStepIndex] || STEP_INTERVALS[0];
  const canUnlockMore = currentStepIndex < STEP_INTERVALS.length - 1;

  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);
  const cooldownTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Reset cooldown on new round / step 0
  useEffect(() => {
    if (currentStepIndex === 0) {
      setCooldownRemaining(0);
      if (cooldownTimerRef.current) {
        clearInterval(cooldownTimerRef.current);
        cooldownTimerRef.current = null;
      }
    }
  }, [currentStepIndex]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current) {
        clearInterval(cooldownTimerRef.current);
      }
    };
  }, []);

  const handleMoreClick = () => {
    if (cooldownRemaining > 0 || !canUnlockMore) return;

    onUnlockNextStep();

    // 2-second safety cooldown timer with live countdown
    setCooldownRemaining(2);
    if (cooldownTimerRef.current) {
      clearInterval(cooldownTimerRef.current);
    }

    const startTime = Date.now();
    const durationMs = 2000;

    cooldownTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remainingSec = Math.max(0, Math.ceil((durationMs - elapsed) / 1000));
      setCooldownRemaining(remainingSec);

      if (elapsed >= durationMs) {
        if (cooldownTimerRef.current) {
          clearInterval(cooldownTimerRef.current);
          cooldownTimerRef.current = null;
        }
        setCooldownRemaining(0);
      }
    }, 100);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-2 sm:px-4 flex flex-col items-center select-none">
      {/* WORTH NOW Points Counter */}
      <div className="flex flex-col items-center mb-3 sm:mb-6">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#8e8ea0] uppercase">
          WORTH NOW
        </span>
        <span className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-0.5 sm:mt-1 font-mono">
          {currentInterval.points.toLocaleString()}
        </span>
      </div>

      {/* Interval Progress Badges (0.10s, 0.50s, 1.0s, 3.0s...) */}
      <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
        {STEP_INTERVALS.slice(0, 5).map((interval, idx) => {
          const isPassed = idx < currentStepIndex;
          const isCurrent = idx === currentStepIndex;

          return (
            <div
              key={interval.step}
              className={`px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 select-none ${
                isCurrent
                  ? 'bg-white text-black shadow-[0_4px_16px_rgba(255,255,255,0.3)] scale-105 font-bold border border-white'
                  : isPassed
                  ? 'bg-white/15 text-white/80 border border-white/15 backdrop-blur-md'
                  : 'bg-white/5 text-white/25 border border-white/5 opacity-60'
              }`}
            >
              {interval.label}
            </div>
          );
        })}
      </div>

      {/* Primary Action Buttons Row */}
      <div className="w-full flex items-center justify-center gap-2 sm:gap-3">
        {/* Big White Play / Pause Button */}
        <button
          onClick={isPlaying ? onStopSnippet : onPlaySnippet}
          disabled={isLoadingAudio}
          className={`flex-1 min-w-0 max-w-[280px] h-11 sm:h-12 rounded-full font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-200 shadow-[0_8px_24px_rgba(0,0,0,0.3)] cursor-pointer active:scale-95 border border-white/30 ${
            isPlaying
              ? 'bg-white text-black shadow-[0_0_24px_rgba(255,255,255,0.4)] animate-pulse'
              : isLoadingAudio
              ? 'bg-white/60 text-black cursor-wait'
              : 'bg-white hover:bg-white/90 text-black hover:scale-[1.02]'
          }`}
        >
          {isLoadingAudio ? (
            <div className="flex items-center gap-2 text-black font-semibold text-xs sm:text-sm truncate">
              <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin shrink-0" />
              <span>Loading Audio...</span>
            </div>
          ) : isPlaying ? (
            <>
              <Square size={15} className="fill-current shrink-0" />
              <span className="truncate">Stop ({currentInterval.label})</span>
              <div className="flex items-center gap-0.5 ml-1 shrink-0">
                <span className="w-1 bg-black rounded-full animate-bar-1" />
                <span className="w-1 bg-black rounded-full animate-bar-2" />
                <span className="w-1 bg-black rounded-full animate-bar-3" />
              </div>
            </>
          ) : (
            <>
              <Play size={16} className="fill-current ml-0.5 shrink-0" />
              <span className="truncate">Play {currentInterval.label}</span>
            </>
          )}
        </button>

        {/* +1s / Next Interval Button */}
        {canUnlockMore && (
          <button
            onClick={handleMoreClick}
            disabled={cooldownRemaining > 0}
            className={`h-11 sm:h-12 px-3.5 sm:px-4 rounded-full border font-semibold text-[11px] sm:text-xs flex items-center gap-1 sm:gap-1.5 transition-all duration-200 select-none shrink-0 backdrop-blur-xl ${
              cooldownRemaining > 0
                ? 'bg-white/5 text-white/30 border-white/5 cursor-not-allowed'
                : 'bg-white/15 hover:bg-white/25 text-white border-white/20 shadow-lg hover:scale-105 active:scale-95 cursor-pointer'
            }`}
            title={
              cooldownRemaining > 0
                ? `Please wait ${cooldownRemaining}s...`
                : 'Unlock more seconds (reduces points)'
            }
          >
            {cooldownRemaining > 0 ? (
              <>
                <Clock size={12} className="text-white/40 animate-spin shrink-0" />
                <span>More ({cooldownRemaining}s)</span>
              </>
            ) : (
              <>
                <Plus size={13} className="text-white shrink-0" />
                <span>More</span>
              </>
            )}
          </button>
        )}

        {/* Skip / Next Attempt Button */}
        <button
          onClick={onSkipRound}
          className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-xl shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          title="Skip / Give up this round"
        >
          <FastForward size={15} />
        </button>
      </div>

      {/* Subtle iPhone Silent Switch Reminder */}
      <div className="mt-3.5 sm:mt-4 text-[10px] sm:text-[11px] text-white/40 flex items-center justify-center gap-1.5 text-center px-2 font-medium">
        <span className="opacity-70">🔇</span>
        <span>iPhone: Falls kein Ton ertönt, bitte Stummschalter an der Geräteseite ausschalten</span>
      </div>
    </div>
  );
};
