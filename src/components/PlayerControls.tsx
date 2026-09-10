import React from 'react';
import { STEP_INTERVALS, StepInterval } from '../utils/gameLogic';
import { Play, Square, FastForward, Plus } from 'lucide-react';

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

  return (
    <div className="w-full max-w-xl mx-auto px-4 flex flex-col items-center select-none">
      {/* WORTH NOW Points Counter */}
      <div className="flex flex-col items-center mb-6">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#8e8ea0] uppercase">
          WORTH NOW
        </span>
        <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-1 font-mono">
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
                  ? 'bg-white text-black shadow-lg scale-105'
                  : isUnlocked
                  ? 'bg-[#22222d] text-gray-200 hover:bg-[#2e2e3c]'
                  : 'bg-[#15151b] text-gray-600 cursor-not-allowed opacity-50'
              }`}
            >
              {interval.label}
            </button>
          );
        })}
      </div>

      {/* Primary Action Buttons Row */}
      <div className="w-full flex items-center justify-center gap-3">
        {/* Big Green Play / Pause Button */}
        <button
          onClick={isPlaying ? onStopSnippet : onPlaySnippet}
          disabled={isLoadingAudio}
          className={`flex-1 max-w-[280px] h-12 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 shadow-lg cursor-pointer ${
            isPlaying
              ? 'bg-emerald-600 text-white animate-pulse'
              : isLoadingAudio
              ? 'bg-[#1DB954]/60 text-black cursor-wait'
              : 'bg-[#1DB954] hover:bg-[#1ed760] text-black hover:scale-[1.02]'
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
            onClick={onUnlockNextStep}
            className="h-12 px-4 rounded-full bg-[#1c1c24] hover:bg-[#282834] text-white border border-white/5 font-semibold text-xs flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Unlock more seconds (reduces points)"
          >
            <Plus size={14} className="text-[#1DB954]" />
            <span>More</span>
          </button>
        )}

        {/* Skip / Next Attempt Button */}
        <button
          onClick={onSkipRound}
          className="h-12 w-12 rounded-full bg-[#1c1c24] hover:bg-[#282834] text-[#8e8ea0] hover:text-white border border-white/5 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Skip / Give up this round"
        >
          <FastForward size={16} />
        </button>
      </div>
    </div>
  );
};
