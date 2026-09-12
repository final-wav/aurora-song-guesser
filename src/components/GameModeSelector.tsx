import React from 'react';
import { GameMode } from '../utils/gameLogic';
import { CheckCircle2 } from 'lucide-react';

interface GameModeSelectorProps {
  gameMode: GameMode;
  onSelectMode: (mode: GameMode) => void;
  isDailyCompletedToday?: boolean;
}

export const GameModeSelector: React.FC<GameModeSelectorProps> = ({
  gameMode,
  onSelectMode,
  isDailyCompletedToday = false,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 mb-2 sm:mb-3 select-none">
      <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
        {/* Daily Challenge Tab */}
        <button
          onClick={() => onSelectMode('daily')}
          className={`flex flex-col items-center justify-center py-2 sm:py-2.5 px-3 rounded-xl transition-all cursor-pointer text-left relative ${
            gameMode === 'daily'
              ? 'bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.25)] font-bold'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <div className="flex items-center space-x-1.5">
            <span className="text-xs sm:text-sm tracking-wide font-extrabold uppercase">
              Daily Challenge
            </span>
            {isDailyCompletedToday && (
              <span title="Completed Today" className="flex items-center">
                <CheckCircle2
                  size={14}
                  className={gameMode === 'daily' ? 'text-emerald-600' : 'text-emerald-400'}
                />
              </span>
            )}
          </div>
          <span
            className={`text-[10px] sm:text-[11px] mt-0.5 tracking-tight font-medium ${
              gameMode === 'daily' ? 'text-black/70' : 'text-white/40'
            }`}
          >
            {isDailyCompletedToday ? 'Completed today • 1 attempt' : '1 song daily • Global rank'}
          </span>
        </button>

        {/* 5-Round Match Tab */}
        <button
          onClick={() => onSelectMode('match')}
          className={`flex flex-col items-center justify-center py-2 sm:py-2.5 px-3 rounded-xl transition-all cursor-pointer text-left ${
            gameMode === 'match'
              ? 'bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.25)] font-bold'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <div className="flex items-center space-x-1.5">
            <span className="text-xs sm:text-sm tracking-wide font-extrabold uppercase">
              5-Round Match
            </span>
          </div>
          <span
            className={`text-[10px] sm:text-[11px] mt-0.5 tracking-tight font-medium ${
              gameMode === 'match' ? 'text-black/70' : 'text-white/40'
            }`}
          >
            5 random songs • Unlimited replay
          </span>
        </button>
      </div>
    </div>
  );
};
