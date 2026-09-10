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

const DIFFICULTIES: { key: Difficulty; label: string; activeColor: string }[] = [
  { key: 'easy', label: 'EASY', activeColor: 'text-emerald-400 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]' },
  { key: 'medium', label: 'MEDIUM', activeColor: 'text-cyan-400 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]' },
  { key: 'hard', label: 'HARD', activeColor: 'text-purple-400 border-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.5)]' },
  { key: 'expert', label: 'EXPERT', activeColor: 'text-amber-400 border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]' },
  { key: 'brutal', label: 'BRUTAL', activeColor: 'text-rose-400 border-rose-400 shadow-[0_0_12px_rgba(251,113,133,0.5)]' },
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
    <header className="w-full max-w-2xl mx-auto pt-3 pb-2 px-4 select-none relative z-10">
      {/* Brand Header Banner */}
      <div className="flex items-center justify-between mb-3 pb-1 border-b border-emerald-500/10">
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-purple-500 p-[1.5px] shadow-[0_0_12px_rgba(16,185,129,0.35)]">
            <div className="w-full h-full rounded-full bg-[#090b10] flex items-center justify-center">
              <span className="text-xs font-serif font-black text-emerald-300">A</span>
            </div>
          </div>
          <div>
            <h1 className="text-sm font-extrabold tracking-[0.28em] text-white uppercase text-aurora-glow">
              A U R O R A
            </h1>
            <p className="text-[9px] font-semibold tracking-[0.2em] text-emerald-400/80 uppercase -mt-0.5">
              Song Guesser
            </p>
          </div>
        </div>

        {/* Game Mode Switcher */}
        <button
          onClick={() => onSelectGameMode(gameMode === 'match' ? 'daily' : 'match')}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#141a24] to-[#1c2230] hover:from-[#1c2433] hover:to-[#252f44] text-[11px] font-medium text-emerald-300 transition-all border border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)] cursor-pointer"
          title="Switch Game Mode"
        >
          <Sparkles size={12} className="text-emerald-400 animate-pulse" />
          <span className="capitalize">{gameMode === 'daily' ? 'Daily Challenge' : '5-Round Match'}</span>
        </button>
      </div>

      {/* Difficulty Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs font-semibold tracking-wider text-[#7e859a]">
        <div className="flex items-center space-x-4 sm:space-x-8 overflow-x-auto no-scrollbar py-0.5 w-full justify-between">
          {DIFFICULTIES.map(d => {
            const isActive = difficulty === d.key;
            return (
              <button
                key={d.key}
                onClick={() => onSelectDifficulty(d.key)}
                className={`transition-all duration-200 relative pb-1 whitespace-nowrap cursor-pointer text-[11px] sm:text-xs tracking-wider ${
                  isActive ? `${d.activeColor} font-bold scale-105` : 'hover:text-gray-200 opacity-60 hover:opacity-100'
                }`}
              >
                {d.label}
                {isActive && (
                  <span className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-current`} />
                )}
              </button>
            );
          })}
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
