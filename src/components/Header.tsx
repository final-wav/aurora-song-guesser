import React from 'react';
import { GameMode } from '../utils/gameLogic';
import { BarChart3, Settings2, RotateCcw, Trophy } from 'lucide-react';

interface HeaderProps {
  gameMode: GameMode;
  currentScore: number;
  maxPossibleScore: number;
  currentRound: number;
  totalRounds: number;
  onResetGame: () => void;
  onOpenStats: () => void;
  onOpenSettings: () => void;
  onOpenLeaderboard: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  gameMode,
  currentScore,
  maxPossibleScore,
  currentRound,
  totalRounds,
  onResetGame,
  onOpenStats,
  onOpenSettings,
  onOpenLeaderboard,
}) => {
  return (
    <header className="w-full max-w-2xl mx-auto pt-3 sm:pt-4 pb-1 px-3 sm:px-4 select-none">

      {/* Subheader Status: Score, Round, Actions */}
      <div className="flex items-center justify-between mt-3 sm:mt-4 text-sm gap-2">
        {/* Score indicator */}
        <div className="flex items-baseline space-x-1.5 shrink-0">
          <span className="text-lg sm:text-2xl font-extrabold text-white tracking-tight font-mono">
            {currentScore.toLocaleString()}
          </span>
          <span className="text-[10px] sm:text-xs text-white/40 font-mono">/ {maxPossibleScore.toLocaleString()}</span>
        </div>

        {/* Center / Round Tracker */}
        <div className="text-[11px] sm:text-xs font-medium text-white/60 tracking-wide text-center truncate">
          {gameMode === 'match' ? (
            <span>Round <strong className="text-white font-bold">{currentRound}</strong> of {totalRounds}</span>
          ) : (
            <span className="text-white font-bold tracking-wide">Today's Daily Challenge</span>
          )}
        </div>

        {/* Action icons */}
        <div className="flex items-center space-x-1.5 shrink-0">
          <button
            onClick={onOpenLeaderboard}
            className="p-2 rounded-xl text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 active:scale-95 transition-all cursor-pointer backdrop-blur-md shadow-sm"
            title="Global Leaderboard"
          >
            <Trophy size={15} />
          </button>
          {gameMode === 'match' && (
            <button
              onClick={onResetGame}
              className="p-2 rounded-xl text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 active:scale-95 transition-all cursor-pointer backdrop-blur-md shadow-sm"
              title="Restart Match"
            >
              <RotateCcw size={15} />
            </button>
          )}
          <button
            onClick={onOpenStats}
            className="p-2 rounded-xl text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 active:scale-95 transition-all cursor-pointer backdrop-blur-md shadow-sm"
            title="Statistics & Streaks"
          >
            <BarChart3 size={15} />
          </button>
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-xl text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 active:scale-95 transition-all cursor-pointer backdrop-blur-md shadow-sm"
            title="Settings & Audio"
          >
            <Settings2 size={15} />
          </button>
        </div>
      </div>
    </header>
  );
};
