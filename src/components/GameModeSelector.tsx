import React from 'react';
import { Difficulty, GameMode } from '../utils/gameLogic';
import { CheckCircle2 } from 'lucide-react';

interface GameModeSelectorProps {
  gameMode: GameMode;
  onSelectMode: (mode: GameMode) => void;
  difficulty: Difficulty;
  onSelectDifficulty: (diff: Difficulty) => void;
  isDailyCompletedToday?: boolean;
}

const DIFFICULTIES: { key: Difficulty; label: string }[] = [
  { key: 'easy', label: 'EASY' },
  { key: 'medium', label: 'MEDIUM' },
  { key: 'hard', label: 'HARD' },
  { key: 'expert', label: 'EXPERT' },
  { key: 'brutal', label: 'BRUTAL' },
];

export const GameModeSelector: React.FC<GameModeSelectorProps> = ({
  gameMode,
  onSelectMode,
  difficulty,
  onSelectDifficulty,
  isDailyCompletedToday = false,
}) => {
  return (
    <div className="w-full max-w-md mx-auto px-3 mb-2 select-none flex flex-col items-center">
      {/* Mode Switcher */}
      <div className="w-full grid grid-cols-2 gap-1 p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <button
          onClick={() => onSelectMode('daily')}
          className={`flex items-center justify-center space-x-1.5 py-1.5 px-3 rounded-lg transition-all cursor-pointer text-xs font-semibold ${
            gameMode === 'daily'
              ? 'bg-white text-black shadow-sm font-bold'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <span>Daily</span>
          {isDailyCompletedToday && (
            <CheckCircle2
              size={12}
              className={gameMode === 'daily' ? 'text-emerald-700' : 'text-emerald-400'}
            />
          )}
        </button>

        <button
          onClick={() => onSelectMode('match')}
          className={`flex items-center justify-center py-1.5 px-3 rounded-lg transition-all cursor-pointer text-xs font-semibold ${
            gameMode === 'match'
              ? 'bg-white text-black shadow-sm font-bold'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <span>5-Round</span>
        </button>
      </div>

      {/* Difficulty Tabs - Only displayed when 5-Round Match is active */}
      {gameMode === 'match' && (
        <div className="flex items-center justify-center space-x-3 sm:space-x-5 pt-2 text-[11px] font-semibold tracking-wider text-[#8e8ea0] animate-fade-in">
          {DIFFICULTIES.map((d) => {
            const isActive = difficulty === d.key;
            return (
              <button
                key={d.key}
                onClick={() => onSelectDifficulty(d.key)}
                className={`transition-colors duration-200 relative pb-1 whitespace-nowrap cursor-pointer shrink-0 active:scale-95 ${
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
      )}
    </div>
  );
};

