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
    <header className="w-full max-w-2xl mx-auto pt-4 pb-2 px-4 select-none">
      {/* Top Difficulty Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-[#22222d] pb-2 text-xs font-semibold tracking-wider text-[#7e7e90]">
        <div className="flex items-center space-x-4 sm:space-x-8 overflow-x-auto no-scrollbar py-1">
          {DIFFICULTIES.map(d => {
            const isActive = difficulty === d.key;
            return (
              <button
                key={d.key}
                onClick={() => onSelectDifficulty(d.key)}
                className={`transition-colors duration-200 relative pb-1 whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-white font-bold' : 'hover:text-gray-300'
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
        <div className="flex items-center space-x-1 pl-2">
          <button
            onClick={() => onSelectGameMode(gameMode === 'match' ? 'daily' : 'match')}
            className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#1c1c24] hover:bg-[#282834] text-[11px] text-gray-300 transition-colors border border-white/5"
            title="Switch Game Mode"
          >
            <Sparkles size={12} className="text-[#1DB954]" />
            <span className="capitalize">{gameMode === 'daily' ? 'Daily' : '5-Round'}</span>
          </button>
        </div>
      </div>

      {/* Subheader Status: Score, Round, Actions */}
      <div className="flex items-center justify-between mt-4 text-sm">
        {/* Score indicator */}
        <div className="flex items-baseline space-x-1">
          <span className="text-xl font-bold text-white tracking-tight">
            {currentScore.toLocaleString()}
          </span>
          <span className="text-xs text-[#8e8ea0]">/ {maxPossibleScore.toLocaleString()}</span>
        </div>

        {/* Center / Round Tracker */}
        <div className="text-xs font-medium text-[#8e8ea0] tracking-wide">
          {gameMode === 'match' ? (
            <span>Round <strong className="text-white">{currentRound}</strong> / {totalRounds}</span>
          ) : (
            <span className="text-emerald-400 font-semibold">Today's Daily Challenge</span>
          )}
        </div>

        {/* Action icons */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button
            onClick={onResetGame}
            className="p-1.5 rounded-lg text-[#8e8ea0] hover:text-white hover:bg-[#1f1f2a] transition-colors"
            title="Restart Match"
          >
            <RotateCcw size={16} />
          </button>
          <button
            onClick={onOpenStats}
            className="p-1.5 rounded-lg text-[#8e8ea0] hover:text-white hover:bg-[#1f1f2a] transition-colors"
            title="Statistics & Streaks"
          >
            <BarChart3 size={16} />
          </button>
          <button
            onClick={onOpenSettings}
            className="p-1.5 rounded-lg text-[#8e8ea0] hover:text-white hover:bg-[#1f1f2a] transition-colors"
            title="Settings & Audio"
          >
            <Settings2 size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};
