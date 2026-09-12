import React, { useState, useEffect } from 'react';
import { Trophy, Clock, Sparkles } from 'lucide-react';
import { getDailySong } from '../utils/gameLogic';

interface DailyCompletedViewProps {
  score: number;
  won: boolean;
  onPlayMatch: () => void;
  onOpenLeaderboard: () => void;
}

export const DailyCompletedView: React.FC<DailyCompletedViewProps> = ({
  score,
  won,
  onPlayMatch,
  onOpenLeaderboard,
}) => {
  const [timeLeft, setTimeLeft] = useState<string>('');
  const { song, dayIndex } = getDailySong();

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      // Midnight tomorrow UTC or local
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);

      const diffMs = tomorrow.getTime() - now.getTime();
      if (diffMs <= 0) {
        setTimeLeft('00:00:00');
        return;
      }

      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diffMs % (1000 * 60)) / 1000);

      const pad = (n: number) => n.toString().padStart(2, '0');
      setTimeLeft(`${pad(hours)}:${pad(mins)}:${pad(secs)}`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full glass-panel border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl flex flex-col items-center text-center select-none animate-fade-in">
      {/* Badge / Day index */}
      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold tracking-wider uppercase text-white/80 mb-3">
        <Sparkles size={12} className="text-white" />
        <span>Daily #{dayIndex} Completed</span>
      </div>

      {/* Song Reveal Card */}
      <div className="w-full max-w-sm my-2 p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-3.5 text-left">
        <img
          src={song.artwork}
          alt={song.title}
          className="w-14 h-14 rounded-xl object-cover border border-white/15 shrink-0 shadow-md"
        />
        <div className="flex flex-col min-w-0">
          <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">Today's Track</span>
          <span className="text-base font-bold text-white truncate">{song.title}</span>
          <span className="text-xs text-white/60 truncate">{song.album} ({song.year})</span>
        </div>
      </div>

      {/* Score Summary Card */}
      <div className="w-full max-w-sm my-3 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-between">
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Result</span>
          <span className={`text-base font-bold ${won ? 'text-white' : 'text-red-400'}`}>
            {won ? 'Solved' : 'Missed'}
          </span>
        </div>

        <div className="flex flex-col text-right">
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Score</span>
          <span className="text-2xl font-mono font-extrabold text-white">
            {score.toLocaleString()} <span className="text-xs text-white/40 font-normal">/ 10,000</span>
          </span>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="flex items-center justify-center space-x-2 my-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-white/70">
        <Clock size={14} className="text-white/60" />
        <span className="text-xs font-medium">Next daily song in:</span>
        <span className="text-xs font-mono font-bold text-white tracking-widest">{timeLeft}</span>
      </div>

      {/* Call to Actions */}
      <div className="w-full max-w-sm flex flex-col sm:flex-row gap-2.5 mt-4">
        <button
          onClick={onOpenLeaderboard}
          className="flex-1 h-12 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/15 font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer active:scale-95"
        >
          <Trophy size={15} />
          <span>View Daily Board</span>
        </button>

        <button
          onClick={onPlayMatch}
          className="flex-1 h-12 rounded-2xl bg-white hover:bg-white/90 text-black font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer active:scale-95 shadow-md"
        >
          <span>Play 5-Round Match</span>
        </button>
      </div>
    </div>
  );
};
