import React, { useState } from 'react';
import { Difficulty, GameMode, RoundResult, getRankTitle, generateShareText } from '../utils/gameLogic';
import { Trophy, Share2, RotateCcw, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GameCompleteModalProps {
  isOpen: boolean;
  finalScore: number;
  maxPossibleScore: number;
  roundResults: RoundResult[];
  difficulty: Difficulty;
  gameMode: GameMode;
  onPlayAgain: () => void;
}

export const GameCompleteModal: React.FC<GameCompleteModalProps> = ({
  isOpen,
  finalScore,
  maxPossibleScore,
  roundResults,
  difficulty,
  gameMode,
  onPlayAgain,
}) => {
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const rank = getRankTitle(finalScore);

  const handleShare = () => {
    const text = generateShareText(gameMode, finalScore, maxPossibleScore, roundResults, difficulty);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="w-full max-w-lg bg-[#16161f] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center max-h-[90vh] overflow-y-auto">
        {/* Trophy icon & Final Score */}
        <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
          <Trophy size={28} className="text-amber-400" />
        </div>

        <span className="text-xs font-semibold tracking-widest text-[#8e8ea0] uppercase">
          Match Completed
        </span>

        <h2 className="text-4xl font-extrabold text-white tracking-tight my-1 font-mono">
          {finalScore.toLocaleString()} <span className="text-lg text-[#8e8ea0]">/ {maxPossibleScore.toLocaleString()}</span>
        </h2>

        {/* Rank Title */}
        <div className="my-2 p-3 rounded-xl bg-[#1c1c27] border border-white/5 w-full">
          <span className={`text-base font-bold ${rank.color} flex items-center justify-center gap-1.5`}>
            <Sparkles size={16} />
            {rank.title}
          </span>
          <p className="text-xs text-[#8e8ea0] mt-1">{rank.subtitle}</p>
        </div>

        {/* Breakdown of 5 Rounds */}
        <div className="w-full my-4 flex flex-col gap-2">
          <span className="text-[11px] font-semibold tracking-wider text-[#8e8ea0] uppercase text-left">
            Song Breakdown
          </span>
          {roundResults.map((r, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#121218] border border-white/5 text-left text-xs"
            >
              <div className="flex items-center space-x-2.5 overflow-hidden">
                <img
                  src={r.song.artwork}
                  alt={r.song.title}
                  className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-white truncate">{r.song.title}</span>
                  <span className="text-[#8e8ea0] truncate">{r.song.album}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 flex-shrink-0">
                <span className="font-mono font-bold text-gray-300">
                  {r.guessed ? (
                    r.unlockedStep === 0 ? '0.10s' : `${r.unlockedStep === 1 ? '0.50s' : `${r.unlockedStep === 2 ? '1.0s' : '3.0s+'}`}`
                  ) : (
                    'Missed'
                  )}
                </span>
                <span className={`font-mono font-bold ${r.pointsEarned > 0 ? 'text-[#1DB954]' : 'text-rose-400'}`}>
                  {r.pointsEarned > 0 ? `+${r.pointsEarned.toLocaleString()}` : '0'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons: Share & Play Again */}
        <div className="w-full flex flex-col sm:flex-row gap-2.5 mt-2">
          <button
            onClick={handleShare}
            className="flex-1 h-12 rounded-xl bg-[#22222f] hover:bg-[#2c2c3d] text-white border border-white/10 font-bold text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={16} className="text-[#1DB954]" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Share2 size={16} />
                <span>Share Result</span>
              </>
            )}
          </button>

          <button
            onClick={onPlayAgain}
            className="flex-1 h-12 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold text-xs flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] cursor-pointer shadow-lg"
          >
            <RotateCcw size={16} />
            <span>Play Again</span>
          </button>
        </div>
      </div>
    </div>
  );
};
