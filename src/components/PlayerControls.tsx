import React, { useState, useEffect, useRef } from 'react';
import { STEP_INTERVALS, StepInterval } from '../utils/gameLogic';
import { Play, Square, FastForward, Plus, Clock } from 'lucide-react';

interface PlayerControlsProps {
  currentStepIndex: number;
  onSelectStepIndex: (index: number) => void;
  onPlaySnippet: () => void;
  onStopSnippet: () => void;
  onUnlockNextStep: () => void;
  onSkipRound: () => void;
  isPlaying: boolean;
  isLoadingAudio: boolean;
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  currentStepIndex,
  onSelectStepIndex,
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
    <div className="w-full max-w-xl mx-auto px-4 flex flex-col items-center select-none">
      {/* WORTH NOW Points Counter */}
      <div className="flex flex-col items-center mb-6">
        <span className="text-[11px] font-bold tracking-[0.25em] text-emerald-400/80 uppercase">
          WORTH NOW
        </span>
        <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-1 font-mono text-aurora-glow">
          {currentInterval.points.toLocaleString()}
        </span>
      </div>

      {/* Interval Selector Pills (0.10s, 0.50s, 1.0s, 3.0s...) */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-6">
        {STEP_INTERVALS.slice(0, 5).map((interval, idx) => {
          const isUnlocked = idx <= currentStepIndex;
          const isSelected = idx === currentStepIndex;

          return (
            <button
              key={interval.step}
              onClick={() => isUnlocked && onSelectStepIndex(idx)}
              disabled={!isUnlocked}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-300 text-black font-bold shadow-[0_0_15px_rgba(52,211,153,0.5)] scale-105'
                  : isUnlocked
                  ? 'bg-[#151c28] text-emerald-100 hover:bg-[#1f2a3c] border border-emerald-500/20'
                  : 'bg-[#0e121a]/80 text-gray-600 cursor-not-allowed opacity-40 border border-white/5'
              }`}
            >
              {interval.label}
            </button>
          );
        })}
      </div>

      {/* Primary Action Buttons Row */}
      <div className="w-full flex items-center justify-center gap-3">
        {/* Big Aurora Gradient Play / Pause Button */}
        <button
          onClick={isPlaying ? onStopSnippet : onPlaySnippet}
          disabled={isLoadingAudio}
          className={`flex-1 max-w-[280px] h-12 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer ${
            isPlaying
              ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white animate-pulse'
              : isLoadingAudio
              ? 'bg-emerald-600/60 text-black cursor-wait'
              : 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 hover:from-emerald-300 hover:to-teal-200 text-black hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(52,211,153,0.6)]'
          }`}
        >
          {isLoadingAudio ? (
            <div className="flex items-center gap-2 text-black font-semibold">
              <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              <span>Loading Audio...</span>
            </div>
          ) : isPlaying ? (
            <>
              <Square size={16} className="fill-current" />
              <span>Stop ({currentInterval.label})</span>
              <div className="flex items-center gap-0.5 ml-2">
                <span className="w-1 bg-black rounded-full animate-bar-1" />
                <span className="w-1 bg-black rounded-full animate-bar-2" />
                <span className="w-1 bg-black rounded-full animate-bar-3" />
              </div>
            </>
          ) : (
            <>
              <Play size={18} className="fill-current ml-0.5" />
              <span>Play {currentInterval.label}</span>
            </>
          )}
        </button>

        {/* +1s / Next Interval Button */}
        {canUnlockMore && (
          <button
            onClick={handleMoreClick}
            disabled={cooldownRemaining > 0}
            className={`h-12 px-4 rounded-full border font-semibold text-xs flex items-center gap-1.5 transition-all duration-200 select-none ${
              cooldownRemaining > 0
                ? 'bg-[#10141d] text-gray-500 border-white/5 cursor-not-allowed opacity-60'
                : 'bg-[#151c28] hover:bg-[#1f2a3c] text-white border-emerald-500/20 hover:scale-105 active:scale-95 shadow-[0_0_12px_rgba(16,185,129,0.15)] cursor-pointer'
            }`}
            title={
              cooldownRemaining > 0
                ? `Please wait ${cooldownRemaining}s...`
                : 'Unlock more seconds (reduces points)'
            }
          >
            {cooldownRemaining > 0 ? (
              <>
                <Clock size={13} className="text-gray-500 animate-spin" />
                <span>More ({cooldownRemaining}s)</span>
              </>
            ) : (
              <>
                <Plus size={14} className="text-emerald-400" />
                <span>More</span>
              </>
            )}
          </button>
        )}

        {/* Skip / Next Attempt Button */}
        <button
          onClick={onSkipRound}
          className="h-12 w-12 rounded-full bg-[#151c28] hover:bg-[#1f2a3c] text-[#8e8ea0] hover:text-white border border-emerald-500/15 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-pointer"
          title="Skip / Give up this round"
        >
          <FastForward size={16} />
        </button>
      </div>
    </div>
  );
};
