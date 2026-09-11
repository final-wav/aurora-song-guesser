import React, { useState } from 'react';
import { Difficulty, GameMode, RoundResult, getRankTitle, generateShareText } from '../utils/gameLogic';
import { Trophy, Share2, RotateCcw, Check, Sparkles, Edit2 } from 'lucide-react';
import { getSavedUsername, saveUsername, submitScore } from '../utils/leaderboard';
import confetti from 'canvas-confetti';

interface GameCompleteModalProps {
  isOpen: boolean;
  finalScore: number;
  maxPossibleScore: number;
  roundResults: RoundResult[];
  difficulty: Difficulty;
  gameMode: GameMode;
  unlockedDuration?: number;
  onPlayAgain: () => void;
  onOpenLeaderboard?: () => void;
}

export const GameCompleteModal: React.FC<GameCompleteModalProps> = ({
  isOpen,
  finalScore,
  maxPossibleScore,
  roundResults,
  difficulty,
  gameMode,
  unlockedDuration,
  onPlayAgain,
  onOpenLeaderboard,
}) => {
  const [copied, setCopied] = useState(false);
  const [username, setUsername] = useState<string>(() => {
    const s = getSavedUsername();
    return s && s.toLowerCase() !== 'anonymous warrior' ? s : '';
  });
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>(username);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(() => {
    const s = getSavedUsername();
    return !!(s && s.toLowerCase() !== 'anonymous warrior');
  });

  React.useEffect(() => {
    if (isOpen) {
      const saved = getSavedUsername();
      const valid = saved && saved.toLowerCase() !== 'anonymous warrior' ? saved : '';
      setUsername(valid);
      setNameInput(valid);
      setIsSubmitted(!!valid);
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

  const handleSubmitName = (nameToSave: string) => {
    const clean = saveUsername(nameToSave);
    if (!clean || clean.toLowerCase() === 'anonymous warrior') return;
    setUsername(clean);
    setNameInput(clean);
    setIsEditingName(false);
    setIsSubmitted(true);
    submitScore({
      username: clean,
      score: finalScore,
      mode: gameMode,
      difficulty: difficulty,
      unlockedDuration: unlockedDuration,
      totalRoundsWon: roundResults.filter((r) => r.guessed).length,
    }).catch(() => {});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in select-none">
      <div className="w-full max-w-lg bg-black/60 backdrop-blur-3xl border border-white/15 rounded-3xl p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.6)] flex flex-col items-center text-center max-h-[90vh] overflow-y-auto">
        {/* Trophy icon & Final Score */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-3 shadow-lg">
          <Trophy size={28} className="text-white" />
        </div>

        <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">
          {gameMode === 'daily' ? 'Daily Completed' : 'Match Completed'}
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight my-1 font-mono">
          {finalScore.toLocaleString()} <span className="text-base sm:text-lg text-white/50">/ {maxPossibleScore.toLocaleString()}</span>
        </h2>

        {/* Rank Title */}
        <div className="my-2 p-3.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 w-full shadow-sm">
          <span className="text-base font-bold text-white flex items-center justify-center gap-1.5 tracking-wide">
            <Sparkles size={16} className="text-white" />
            {rank.title}
          </span>
          <p className="text-xs text-white/60 mt-1">{rank.subtitle}</p>
        </div>

        {/* Leaderboard Submission & Player Name Input */}
        {!username || !isSubmitted ? (
          <div className="w-full my-2 p-3.5 rounded-2xl bg-white/10 border border-white/20 flex flex-col gap-2 text-left">
            <span className="text-xs font-semibold text-white/90">
              Enter your username to submit score:
            </span>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                maxLength={20}
                autoFocus
                placeholder="Choose username..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && nameInput.trim()) {
                    handleSubmitName(nameInput.trim());
                  }
                }}
                className="flex-1 bg-white/10 border border-white/25 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 outline-none focus:border-white/50"
              />
              <button
                onClick={() => nameInput.trim() && handleSubmitName(nameInput.trim())}
                disabled={!nameInput.trim()}
                className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs cursor-pointer active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full my-1 p-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              <Trophy size={14} className="text-white/70 shrink-0" />
              {isEditingName ? (
                <div className="flex items-center space-x-1.5 flex-1 min-w-0">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    maxLength={20}
                    autoFocus
                    placeholder="Your username..."
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && nameInput.trim()) {
                        handleSubmitName(nameInput.trim());
                      }
                    }}
                    className="bg-white/10 border border-white/20 rounded-lg px-2 py-0.5 text-xs text-white outline-none w-full"
                  />
                  <button
                    onClick={() => nameInput.trim() && handleSubmitName(nameInput.trim())}
                    disabled={!nameInput.trim()}
                    className="p-1 rounded-lg bg-white text-black font-bold cursor-pointer active:scale-95 text-[10px] disabled:opacity-40"
                  >
                    <Check size={12} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-1.5 truncate">
                  <span className="text-white/50">Leaderboard:</span>
                  <strong className="text-white truncate">{username}</strong>
                  <button
                    onClick={() => {
                      setNameInput(username);
                      setIsEditingName(true);
                    }}
                    className="text-white/50 hover:text-white p-1 rounded-md hover:bg-white/10 cursor-pointer transition-colors"
                    title="Change player name on leaderboard"
                  >
                    <Edit2 size={11} />
                  </button>
                </div>
              )}
            </div>

            {!isEditingName && (
              <span className="text-[10px] text-white/40 font-mono shrink-0 ml-2">Score submitted ✓</span>
            )}
          </div>
        )}

        {/* Breakdown of 5 Rounds */}
        <div className="w-full my-4 flex flex-col gap-2">
          <span className="text-[11px] font-semibold tracking-wider text-white/50 uppercase text-left">
            Song Breakdown
          </span>
          {roundResults.map((r, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 text-left text-xs hover:bg-white/15 transition-all"
            >
              <div className="flex items-center space-x-2.5 overflow-hidden">
                <img
                  src={r.song.artwork || 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/22/02/0f22026c-d2c6-4d0f-faa1-c0ef0be18bfe/24UMGIM27788.rgb.jpg/600x600bb.jpg'}
                  alt={r.song.title}
                  onError={(e) => {
                    e.currentTarget.src = 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/22/02/0f22026c-d2c6-4d0f-faa1-c0ef0be18bfe/24UMGIM27788.rgb.jpg/600x600bb.jpg';
                  }}
                  className="w-8 h-8 rounded-lg object-cover flex-shrink-0 border border-white/10"
                />
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-white truncate">{r.song.title}</span>
                  <span className="text-white/50 truncate text-[11px]">{r.song.album}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 flex-shrink-0">
                <span className="font-mono font-semibold text-white/70">
                  {r.guessed ? (
                    r.unlockedStep === 0 ? '0.10s' : `${r.unlockedStep === 1 ? '0.50s' : `${r.unlockedStep === 2 ? '1.0s' : '3.0s+'}`}`
                  ) : (
                    'Missed'
                  )}
                </span>
                <span className={`font-mono font-bold ${r.pointsEarned > 0 ? 'text-white' : 'text-red-300'}`}>
                  {r.pointsEarned > 0 ? `+${r.pointsEarned.toLocaleString()}` : '0'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="w-full flex flex-col sm:flex-row gap-2.5 mt-2">
          {onOpenLeaderboard && (
            <button
              onClick={onOpenLeaderboard}
              className="w-full sm:flex-1 h-12 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-white/20 font-bold text-xs flex items-center justify-center space-x-2 transition-all backdrop-blur-xl cursor-pointer active:scale-95 shadow-sm"
            >
              <Trophy size={15} />
              <span>Leaderboard</span>
            </button>
          )}

          <button
            onClick={handleShare}
            className="w-full sm:flex-1 h-12 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/15 font-bold text-xs flex items-center justify-center space-x-2 transition-all backdrop-blur-xl cursor-pointer active:scale-95 shadow-sm"
          >
            {copied ? (
              <>
                <Check size={16} className="text-white" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Share2 size={16} />
                <span>Share</span>
              </>
            )}
          </button>

          <button
            onClick={onPlayAgain}
            className="w-full sm:flex-1 h-12 rounded-2xl bg-white hover:bg-white/90 text-black font-bold text-xs flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-white/30"
          >
            <RotateCcw size={15} />
            <span>Play Again</span>
          </button>
        </div>
      </div>
    </div>
  );
};
