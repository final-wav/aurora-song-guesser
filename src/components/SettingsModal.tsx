import React from 'react';
import { X, Volume2, VolumeX, ShieldCheck, Sparkles } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  volume: number;
  onVolumeChange: (vol: number) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  volume,
  onVolumeChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md select-none animate-fade-in">
      <div className="w-full max-w-md bg-black/60 backdrop-blur-3xl border border-white/15 rounded-3xl p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.6)] relative text-left max-h-[90dvh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors cursor-pointer active:scale-95"
        >
          <X size={16} />
        </button>

        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2 tracking-tight">
          <Sparkles size={20} className="text-white" />
          <span>Game Settings & Info</span>
        </h3>

        {/* Master Volume Slider */}
        <div className="mb-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white/60 mb-3">
            <span>Master Volume</span>
            <span className="font-mono text-white">{Math.round(volume * 100)}%</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onVolumeChange(volume === 0 ? 0.8 : 0)}
              className="text-white/70 hover:text-white cursor-pointer active:scale-95 transition-transform"
            >
              {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={e => onVolumeChange(parseFloat(e.target.value))}
              className="flex-1 accent-white cursor-pointer h-1.5 bg-white/20 rounded-lg"
            />
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="mb-6 space-y-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/60 block">
            Difficulty Modes
          </span>

          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-xs">
            <strong className="text-white block mb-0.5 tracking-wider font-bold">EASY</strong>
            <span className="text-white/60 leading-relaxed">Greatest hits & singles (Runaway, Cure for Me, Into the Unknown). Starts at song intro.</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-xs">
            <strong className="text-white block mb-0.5 tracking-wider font-bold">MEDIUM</strong>
            <span className="text-white/60 leading-relaxed">All major album tracks, TOMORA songs, and notable collaborations. Starts at intro.</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-xs">
            <strong className="text-white block mb-0.5 tracking-wider font-bold">HARD</strong>
            <span className="text-white/60 leading-relaxed">Includes rare EPs, soundtrack cuts, B-sides & deep album tracks.</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-xs">
            <strong className="text-white block mb-0.5 tracking-wider font-bold">EXPERT</strong>
            <span className="text-white/60 leading-relaxed">Snippets start at a random second inside the song instead of the intro!</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-xs">
            <strong className="text-white block mb-0.5 tracking-wider font-bold">BRUTAL</strong>
            <span className="text-white/60 leading-relaxed">Random micro-slices anywhere across the entire complete catalog + collabs.</span>
          </div>
        </div>

        {/* Audio Source & Legal Credits */}
        <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-[11px] text-white/50 space-y-1.5">
          <div className="flex items-center space-x-1.5 text-white/80 font-semibold">
            <ShieldCheck size={14} className="text-white" />
            <span>Audio & Copyright Disclaimer</span>
          </div>
          <p className="leading-relaxed">
            This is a non-profit fan-made tribute game for AURORA. All audio snippets are streamed via Apple Music / iTunes Store official 30s preview endpoints. All rights belong to AURORA, Petroleum Records, Decca, and Universal Music Group.
          </p>
        </div>
      </div>
    </div>
  );
};
