import React, { useState, useEffect } from 'react';

interface AuroraBackgroundProps {
  activeArtwork?: string;
  isPlaying: boolean;
  albumName?: string;
}

const DEFAULT_AURORA_PORTRAIT = 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/22/02/0f22026c-d2c6-4d0f-faa1-c0ef0be18bfe/24UMGIM27788.rgb.jpg/1200x1200bb.jpg';

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  activeArtwork,
  isPlaying,
}) => {
  const [currentBg, setCurrentBg] = useState<string>(activeArtwork || DEFAULT_AURORA_PORTRAIT);
  const [prevBg, setPrevBg] = useState<string | null>(null);

  useEffect(() => {
    if (activeArtwork && activeArtwork !== currentBg) {
      setPrevBg(currentBg);
      setCurrentBg(activeArtwork);
      const timeout = setTimeout(() => {
        setPrevBg(null);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [activeArtwork, currentBg]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg/[#08080c]">
      {/* Previous Artwork Layer for smooth Cross-fade */}
      {prevBg && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out scale-125 filter blur-[80px] sm:blur-[110px] brightness-[0.35] saturate-200 opacity-0"
          style={{ backgroundImage: `url(${prevBg})` }}
        />
      )}

      {/* Primary Dynamic Artwork Blur Layer (Apple Music Sing / Album backdrop) */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out scale-125 filter blur-[70px] sm:blur-[100px] animate-slow-zoom ${
          isPlaying
            ? 'brightness-[0.55] saturate-[220%] opacity-70'
            : 'brightness-[0.38] saturate-[180%] opacity-50'
        }`}
        style={{ backgroundImage: `url(${currentBg})` }}
      />

      {/* Floating Aurora Borealis Light Mesh Orbs */}
      {/* 1. Emerald / Nordic Forest Glow */}
      <div className={`absolute -top-[15%] -left-[10%] w-[60vw] h-[60vw] max-w-[650px] max-h-[650px] rounded-full filter blur-[90px] sm:blur-[140px] pointer-events-none animate-aurora-orb-1 transition-opacity duration-700 ${isPlaying ? 'opacity-40 bg-emerald-500/30' : 'opacity-25 bg-emerald-600/20'}`} />

      {/* 2. Ethereal Celestial Violet / Lavender Glow */}
      <div className={`absolute top-[20%] -right-[15%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full filter blur-[100px] sm:blur-[150px] pointer-events-none animate-aurora-orb-2 transition-opacity duration-700 ${isPlaying ? 'opacity-35 bg-purple-600/30' : 'opacity-20 bg-purple-700/20'}`} />

      {/* 3. Golden Heart & Sunset Ember / Cyan Aurora Wave */}
      <div className={`absolute -bottom-[20%] left-[20%] w-[70vw] h-[50vw] max-w-[800px] max-h-[500px] rounded-full filter blur-[110px] sm:blur-[160px] pointer-events-none animate-aurora-orb-3 transition-opacity duration-700 ${isPlaying ? 'opacity-30 bg-amber-500/25' : 'opacity-15 bg-teal-500/15'}`} />

      {/* Vignette Overlay for High-Contrast Readability */}
      <div className="absolute inset-0 bg-[navy-vignette] opacity-90" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(7,7,10,0.55) 60%, rgba(7,7,10,0.92) 100%)' }} />

      {/* Subtle Stardust / Shimmer Texture */}
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
    </div>
  );
};
