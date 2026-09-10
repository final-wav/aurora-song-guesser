import React from 'react';
import { Difficulty, GameMode } from '../utils/gameLogic';
import { BarChart3, Settings2, RotateCcw, Sparkles } from 'lucide-react';

interface HeaderProps {
  difficulty: Difficulty;
  onSelectDifficulty: (diff: Difficulty) => void;
  gameMode: GameMode;
  onSelectGameMode: (mode: GameMode) => void;
  currentScore: number;
  maxPossibleScore: number;
  currentRound: number;
  totalRounds: number;
  onResetGame: () => void;
  onOpenStats: () => void;
  onOpenSettings: () => void;
}

const DIFFICULTIES: { key: Difficulty; label: string }[] = [
  { key: 'easy', label: 'EASY' },
  { key: 'medium', label: 'MEDIUM' },
  { key: 'hard', label: 'HARD' },
  { key: 'expert', label: 'EXPERT' },
  { key: 'brutal', label: 'BRUTAL' },
];

export const Header: React.FC<HeaderProps> = ({
  difficulty,
  onSelectDifficulty,
  gameMode,
  onSelectGameMode,
  currentScore,
  maxPossibleScore,
  currentRound,
  totalRounds,
  onResetGame,
  onOpenStats,
  onOpenSettings,
}) => {
  return (
    <header className="w-full max-w-2xl mx-auto pt-3 sm:pt-4 pb-2 px-3 sm:px-4 select-none">
      {/* Top Difficulty Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-xs font-semibold tracking-wider text-[#8e8ea0] gap-2">
        <div className="flex items-center space-x-3 sm:space-x-7 overflow-x-auto no-scrollbar py-1 touch-pan-x flex-1 min-w-0">
          {DIFFICULTIES.map(d => {
            const isActive = difficulty === d.key;
            return (
              <button
                key={d.key}
                onClick={() => onSelectDifficulty(d.key)}
                className={`transition-colors duration-200 relative pb-1 whitespace-nowrap cursor-pointer text-[11px] sm:text-xs shrink-0 active:scale-95 ${
                  isActive ? 'text-white font-bold' : 'hover:text-gray-300 text-gray-400'
                }`}
              >
                {d.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Game Mode Switcher */}
        <div className="flex items-center pl-1 shrink-0">
          <button
            onClick={() => onSelectGameMode(gameMode === 'match' ? 'daily' : 'match')}
            className="flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/15 text-[10px] sm:text-[11px] font-medium text-gray-300 transition-colors border border-white/10 cursor-pointer active:scale-95 shrink-0"
            title="Switch Game Mode"
          >
            <Sparkles size={11} className="text-gray-300" />
            <span className="capitalize">{gameMode === 'daily' ? 'Daily' : '5-Round'}</span>
          </button>
        </div>
      </div>

      {/* Subheader Status: Score, Round, Actions */}
      <div className="flex items-center justify-between mt-3 sm:mt-4 text-sm gap-2">
        {/* Score indicator */}
        <div className="flex items-baseline space-x-1 shrink-0">
          <span className="text-lg sm:text-xl font-bold text-white tracking-tight font-mono">
            {currentScore.toLocaleString()}
          </span>
          <span className="text-[10px] sm:text-xs text-[#8e8ea0]">/ {maxPossibleScore.toLocaleString()}</span>
        </div>

        {/* Center / Round Tracker */}
        <div className="text-[11px] sm:text-xs font-medium text-[#8e8ea0] tracking-wide text-center truncate">
          {gameMode === 'match' ? (
            <span>Round <strong className="text-white">{currentRound}</strong> / {totalRounds}</span>
          ) : (
            <span className="text-emerald-400 font-semibold">Today's Daily</span>
          )}
        </div>

        {/* Action icons */}
        <div className="flex items-center space-x-1 shrink-0">
          <button
            onClick={onResetGame}
            className="p-1.5 sm:p-2 rounded-lg text-[#8e8ea0] hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            title="Restart Match"
          >
            <RotateCcw size={15} />
          </button>
          <button
            onClick={onOpenStats}
            className="p-1.5 sm:p-2 rounded-lg text-[#8e8ea0] hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            title="Statistics & Streaks"
          >
            <BarChart3 size={15} />
          </button>
          <button
            onClick={onOpenSettings}
            className="p-1.5 sm:p-2 rounded-lg text-[#8e8ea0] hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            title="Settings & Audio"
          >
            <Settings2 size={15} />
          </button>
        </div>
      </div>
    </header>
  );
};
