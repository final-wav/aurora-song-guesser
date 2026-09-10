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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md select-none animate-fade-in">
      <div className="w-full max-w-md max-h-[90dvh] overflow-y-auto bg-black/60 backdrop-blur-3xl border border-white/15 rounded-3xl p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.6)] relative text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors cursor-pointer active:scale-95"
        >
          <X size={16} />
        </button>

        <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Your Statistics</h3>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-4 gap-2 sm:gap-2.5 mb-6">
          <div className="flex flex-col items-center p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-sm">
            <span className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight">{stats.gamesPlayed}</span>
            <span className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-semibold mt-1">Played</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-sm">
            <span className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight">{winRate}%</span>
            <span className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-semibold mt-1">Win Rate</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-sm">
            <span className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight flex items-center">
              <Flame size={18} className="fill-current text-white mr-0.5" />
              {stats.currentStreak}
            </span>
            <span className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-semibold mt-1">Streak</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-sm">
            <span className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight flex items-center">
              <Trophy size={18} className="text-white mr-0.5" />
              {stats.maxStreak}
            </span>
            <span className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-semibold mt-1">Max</span>
          </div>
        </div>

        {/* Guess Distribution Chart */}
        <div className="text-left mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-3 block">
            Guess Distribution (by Interval)
          </span>

          <div className="space-y-2">
            {STEP_INTERVALS.slice(0, 5).map((step, idx) => {
              const count = stats.guessesDistribution[idx] || 0;
              const barWidth = Math.max(8, Math.round((count / maxGuessCount) * 100));

              return (
                <div key={idx} className="flex items-center text-xs space-x-2">
                  <span className="w-10 text-right font-mono text-white/60">{step.label}</span>
                  <div className="flex-1 bg-white/10 rounded-full h-5 overflow-hidden flex items-center px-1 border border-white/10">
                    <div
                      className={`h-4 rounded-full flex items-center justify-end pr-2 text-[10px] font-bold font-mono transition-all duration-500 ${
                        count > 0 ? 'bg-white text-black shadow-sm' : 'bg-transparent text-white/30'
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
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 text-xs text-white/70">
          <span>Best Match: <strong className="text-white font-mono font-bold">{stats.highScore.toLocaleString()} pts</strong></span>
          <span>Total: <strong className="text-white font-mono font-bold">{stats.totalScore.toLocaleString()} pts</strong></span>
        </div>
      </div>
    </div>
  );
};
