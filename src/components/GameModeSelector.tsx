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
    <div className="w-full max-w-md mx-auto px-3 mb-1 select-none">
      <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
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
    </div>
  );
};
