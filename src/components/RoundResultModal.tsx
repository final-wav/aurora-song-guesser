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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in select-none">
      <div className="w-full max-w-md bg-[#16161f] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center">
        {/* Result Header Badge */}
        <div className="flex items-center space-x-2 mb-4">
          {isGuessed ? (
            <>
              <CheckCircle2 size={24} className="text-[#1DB954]" />
              <span className="text-xl font-bold text-white">CORRECT!</span>
            </>
          ) : (
            <>
              <XCircle size={24} className="text-rose-500" />
              <span className="text-xl font-bold text-white">ROUND OVER</span>
            </>
          )}
        </div>

        {/* Album Cover Art */}
        <div className="relative group my-2">
          <img
            src={song.artwork}
            alt={song.album}
            className="w-44 h-44 rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
          />
          <button
            onClick={isPlayingFull ? onStopAudio : onPlayFullSnippet}
            className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-transform group-hover:scale-110 cursor-pointer shadow-lg"
            title="Listen to 30s preview"
          >
            {isPlayingFull ? (
              <Square size={18} className="fill-current text-[#1DB954]" />
            ) : (
              <Play size={20} className="fill-current ml-0.5" />
            )}
          </button>
        </div>

        {/* Song Info */}
        <h3 className="text-lg font-bold text-white mt-3 leading-tight">{song.title}</h3>
        <p className="text-sm text-[#8e8ea0] mt-0.5">
          {song.artist} • <span className="text-gray-300">{song.album}</span> ({song.year})
        </p>

        {/* Points & Duration Summary Chip */}
        <div className="flex items-center justify-center space-x-3 my-4 py-2 px-4 rounded-xl bg-[#1f1f2c] border border-white/5 w-full">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#8e8ea0]">Points Earned</span>
            <span className={`text-lg font-mono font-bold ${pointsEarned > 0 ? 'text-[#1DB954]' : 'text-gray-400'}`}>
              +{pointsEarned.toLocaleString()}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-white/10" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#8e8ea0]">Unlocked Time</span>
            <span className="text-lg font-mono font-bold text-white">
              {unlockedDuration < 1 ? `0.${Math.round(unlockedDuration * 100)}s` : `${unlockedDuration.toFixed(1)}s`}
            </span>
          </div>
        </div>

        {/* Streaming links */}
        <div className="flex items-center space-x-3 text-xs text-[#8e8ea0] mb-5">
          <a
            href={spotifySearchUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1DB954] flex items-center space-x-1 transition-colors"
          >
            <span>Open on Spotify</span>
            <ExternalLink size={12} />
          </a>
          <span>•</span>
          <a
            href={appleMusicSearchUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-rose-400 flex items-center space-x-1 transition-colors"
          >
            <span>Apple Music</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Continue / Next Round Button */}
        <button
          onClick={onNextRound}
          className="w-full h-12 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold text-sm flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] cursor-pointer shadow-lg"
        >
          <span>{isMatchFinished ? 'View Final Results' : `Next Song (${currentRound + 1}/${totalRounds})`}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
