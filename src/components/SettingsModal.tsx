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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md select-none">
      <div className="w-full max-w-md bg-[#16161f] border border-white/10 rounded-2xl p-6 shadow-2xl relative text-left max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#8e8ea0] hover:text-white rounded-lg hover:bg-white/5 cursor-pointer"
        >
          <X size={18} />
        </button>

        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
          <Sparkles size={20} className="text-[#1DB954]" />
          <span>Game Settings & Info</span>
        </h3>

        {/* Master Volume Slider */}
        <div className="mb-6 p-3.5 rounded-xl bg-[#1c1c27] border border-white/5">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#8e8ea0] mb-3">
            <span>Master Volume</span>
            <span className="font-mono text-white">{Math.round(volume * 100)}%</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onVolumeChange(volume === 0 ? 0.8 : 0)}
              className="text-[#8e8ea0] hover:text-white cursor-pointer"
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
              className="flex-1 accent-[#1DB954] cursor-pointer"
            />
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="mb-6 space-y-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8e8ea0] block">
            Difficulty Modes
          </span>

          <div className="p-2.5 rounded-xl bg-[#121218] border border-white/5 text-xs">
            <strong className="text-emerald-400 block mb-0.5">EASY</strong>
            <span className="text-[#8e8ea0]">Greatest hits & singles (Runaway, Cure for Me, Into the Unknown). Starts at song intro.</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#121218] border border-white/5 text-xs">
            <strong className="text-blue-400 block mb-0.5">MEDIUM</strong>
            <span className="text-[#8e8ea0]">All major album tracks and notable collaborations. Starts at intro.</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#121218] border border-white/5 text-xs">
            <strong className="text-amber-400 block mb-0.5">HARD</strong>
            <span className="text-[#8e8ea0]">Includes rare EPs, soundtrack cuts, B-sides & deep album tracks.</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#121218] border border-white/5 text-xs">
            <strong className="text-purple-400 block mb-0.5">EXPERT</strong>
            <span className="text-[#8e8ea0]">Snippets start at a random second inside the song instead of the intro!</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#121218] border border-white/5 text-xs">
            <strong className="text-rose-400 block mb-0.5">BRUTAL</strong>
            <span className="text-[#8e8ea0]">Random micro-slices anywhere across the entire complete catalog + collabs.</span>
          </div>
        </div>

        {/* Audio Source & Legal Credits */}
        <div className="p-3 rounded-xl bg-[#121218] border border-white/5 text-[11px] text-[#8e8ea0] space-y-1.5">
          <div className="flex items-center space-x-1.5 text-gray-300 font-semibold">
            <ShieldCheck size={14} className="text-[#1DB954]" />
            <span>Audio & Copyright Disclaimer</span>
          </div>
          <p>
            This is a non-profit fan-made tribute game for AURORA. All audio snippets are streamed via Apple Music / iTunes Store official 30s preview endpoints. All rights belong to AURORA, Petroleum Records, Decca, and Universal Music Group.
          </p>
        </div>
      </div>
    </div>
  );
};
