import React, { useEffect } from 'react';
import { Song } from '../data/auroraSongs';
import { Play, Square, ArrowRight, CheckCircle2, XCircle, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RoundResultModalProps {
  isOpen: boolean;
  isGuessed: boolean;
  song: Song;
  pointsEarned: number;
  unlockedDuration: number;
  currentRound: number;
  totalRounds: number;
  isMatchFinished: boolean;
  onNextRound: () => void;
  onPlayFullSnippet: () => void;
  onStopAudio: () => void;
  isPlayingFull: boolean;
}

export const RoundResultModal: React.FC<RoundResultModalProps> = ({
  isOpen,
  isGuessed,
  song,
  pointsEarned,
  unlockedDuration,
  currentRound,
  totalRounds,
  isMatchFinished,
  onNextRound,
  onPlayFullSnippet,
  onStopAudio,
  isPlayingFull,
}) => {
  useEffect(() => {
    if (isOpen && isGuessed) {
      // Fire festive confetti
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#1DB954', '#ffffff', '#e11d48', '#38bdf8'],
      });
    }
  }, [isOpen, isGuessed]);

  if (!isOpen) return null;

  const appleMusicSearchUrl = `https://music.apple.com/search?term=${encodeURIComponent(`AURORA ${song.title}`)}`;
  const spotifySearchUrl = `https://open.spotify.com/search/${encodeURIComponent(`AURORA ${song.title}`)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in select-none">
      <div className="w-full max-w-md max-h-[90dvh] overflow-y-auto bg-black/60 backdrop-blur-3xl border border-white/15 rounded-3xl p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.6)] flex flex-col items-center text-center">
        {/* Result Header Badge */}
        <div className="mb-4">
          {isGuessed ? (
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-xl shadow-sm">
              <CheckCircle2 size={16} className="text-white" />
              <span className="text-xs sm:text-sm font-bold tracking-wider">CORRECT!</span>
            </div>
          ) : (
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-red-500/20 text-red-200 border border-red-500/30 backdrop-blur-xl shadow-sm">
              <XCircle size={16} className="text-red-300" />
              <span className="text-xs sm:text-sm font-bold tracking-wider">ROUND OVER</span>
            </div>
          )}
        </div>

        {/* Album Cover Art */}
        <div className="relative group my-2">
          <img
            src={song.artwork || 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/22/02/0f22026c-d2c6-4d0f-faa1-c0ef0be18bfe/24UMGIM27788.rgb.jpg/600x600bb.jpg'}
            alt={song.album}
            onError={(e) => {
              e.currentTarget.src = 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/22/02/0f22026c-d2c6-4d0f-faa1-c0ef0be18bfe/24UMGIM27788.rgb.jpg/600x600bb.jpg';
            }}
            className="w-44 h-44 rounded-2xl object-cover shadow-2xl ring-1 ring-white/20 bg-black/40"
          />
          <button
            onClick={isPlayingFull ? onStopAudio : onPlayFullSnippet}
            className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xl text-white border border-white/30 flex items-center justify-center transition-transform group-hover:scale-110 cursor-pointer shadow-lg active:scale-95"
            title="Listen to 30s preview"
          >
            {isPlayingFull ? (
              <Square size={16} className="fill-current text-white" />
            ) : (
              <Play size={18} className="fill-current ml-0.5" />
            )}
          </button>
        </div>

        {/* Song Info */}
        <h3 className="text-lg sm:text-xl font-bold text-white mt-3 leading-tight tracking-tight">{song.title}</h3>
        <p className="text-xs sm:text-sm text-white/60 mt-0.5">
          {song.artist} • <span className="text-white/80">{song.album}</span> ({song.year})
        </p>

        {/* Points & Duration Summary Chip */}
        <div className="flex items-center justify-center space-x-3 my-4 py-3 px-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 w-full shadow-sm">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">Points Earned</span>
            <span className={`text-lg font-mono font-bold ${pointsEarned > 0 ? 'text-white' : 'text-white/40'}`}>
              +{pointsEarned.toLocaleString()}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-white/15" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">Unlocked Time</span>
            <span className="text-lg font-mono font-bold text-white">
              {unlockedDuration < 1 ? `0.${Math.round(unlockedDuration * 100)}s` : `${unlockedDuration.toFixed(1)}s`}
            </span>
          </div>
        </div>

        {/* Streaming links */}
        <div className="flex items-center space-x-3 text-xs text-white/50 mb-5">
          <a
            href={spotifySearchUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white flex items-center space-x-1 transition-colors"
          >
            <span>Open on Spotify</span>
            <ExternalLink size={12} />
          </a>
          <span>•</span>
          <a
            href={appleMusicSearchUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white flex items-center space-x-1 transition-colors"
          >
            <span>Apple Music</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Continue / Next Round Button */}
        <button
          onClick={onNextRound}
          className="w-full h-12 rounded-2xl bg-white hover:bg-white/90 text-black font-bold text-sm flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-white/30"
        >
          <span>{isMatchFinished ? 'View Final Results' : `Next Song (${currentRound + 1}/${totalRounds})`}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
