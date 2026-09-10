import React from 'react';
import { UserStats } from '../utils/stats';
import { X, Flame, Trophy } from 'lucide-react';
import { STEP_INTERVALS } from '../utils/gameLogic';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
}

export const StatsModal: React.FC<StatsModalProps> = ({ isOpen, onClose, stats }) => {
  if (!isOpen) return null;

  const winRate = stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0;
  const maxGuessCount = Math.max(1, ...Object.values(stats.guessesDistribution));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md select-none">
      <div className="w-full max-w-md max-h-[90dvh] overflow-y-auto bg-[#16161f] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl relative text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#8e8ea0] hover:text-white rounded-lg hover:bg-white/5 cursor-pointer"
        >
          <X size={18} />
        </button>

        <h3 className="text-xl font-bold text-white mb-6">Your Statistics</h3>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="flex flex-col items-center p-2.5 rounded-xl bg-[#1c1c27] border border-white/5">
            <span className="text-xl font-bold text-white font-mono">{stats.gamesPlayed}</span>
            <span className="text-[10px] text-[#8e8ea0] uppercase tracking-wider mt-0.5">Played</span>
          </div>

          <div className="flex flex-col items-center p-2.5 rounded-xl bg-[#1c1c27] border border-white/5">
            <span className="text-xl font-bold text-white font-mono">{winRate}%</span>
            <span className="text-[10px] text-[#8e8ea0] uppercase tracking-wider mt-0.5">Win Rate</span>
          </div>

          <div className="flex flex-col items-center p-2.5 rounded-xl bg-[#1c1c27] border border-white/5">
            <span className="text-xl font-bold text-white font-mono flex items-center">
              <Flame size={16} className="fill-current mr-0.5" />
              {stats.currentStreak}
            </span>
            <span className="text-[10px] text-[#8e8ea0] uppercase tracking-wider mt-0.5">Streak</span>
          </div>

          <div className="flex flex-col items-center p-2.5 rounded-xl bg-[#1c1c27] border border-white/5">
            <span className="text-xl font-bold text-amber-400 font-mono flex items-center">
              <Trophy size={16} className="mr-0.5" />
              {stats.maxStreak}
            </span>
            <span className="text-[10px] text-[#8e8ea0] uppercase tracking-wider mt-0.5">Max Streak</span>
          </div>
        </div>

        {/* Guess Distribution Chart */}
        <div className="text-left mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8e8ea0] mb-3 block">
            Guess Distribution (by Interval)
          </span>

          <div className="space-y-1.5">
            {STEP_INTERVALS.slice(0, 5).map((step, idx) => {
              const count = stats.guessesDistribution[idx] || 0;
              const barWidth = Math.max(8, Math.round((count / maxGuessCount) * 100));

              return (
                <div key={idx} className="flex items-center text-xs space-x-2">
                  <span className="w-10 text-right font-mono text-[#8e8ea0]">{step.label}</span>
                  <div className="flex-1 bg-[#121217] rounded-full h-5 overflow-hidden flex items-center px-1">
                    <div
                      className={`h-4 rounded-full flex items-center justify-end pr-2 text-[10px] font-bold font-mono transition-all duration-500 ${
                        count > 0 ? 'bg-white text-black' : 'bg-transparent text-gray-500'
                      }`}
                      style={{ width: `${barWidth}%` }}
                    >
                      {count}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highscore & Total Score Banner */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-[#121218] border border-white/5 text-xs text-[#8e8ea0]">
          <span>Best Match Score: <strong className="text-white font-mono font-bold">{stats.highScore.toLocaleString()} pts</strong></span>
          <span>Total Score: <strong className="text-white font-mono font-bold">{stats.totalScore.toLocaleString()} pts</strong></span>
        </div>
      </div>
    </div>
  );
};
