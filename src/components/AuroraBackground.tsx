import React, { useState, useEffect } from 'react';
import { AURORA_SONGS } from '../data/auroraSongs';

interface AuroraBackgroundProps {
  activeArtwork?: string;
}

// Get all unique artwork URLs from catalog
const ALL_COVER_ARTWORKS: string[] = Array.from(
  new Set(AURORA_SONGS.map((s) => s.artwork).filter(Boolean))
);

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  activeArtwork,
}) => {
  // Shuffle list so all covers appear with equal frequency
  const [shuffledList] = useState<string[]>(() => {
    const list = [...ALL_COVER_ARTWORKS];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  });

  const [, setCurrentIndex] = useState<number>(0);
  const [currentCover, setCurrentCover] = useState<string>(
    activeArtwork || shuffledList[0] || ALL_COVER_ARTWORKS[0]
  );
  const [previousCover, setPreviousCover] = useState<string | null>(null);

  // If activeArtwork changes (e.g. round change), prioritize it
  useEffect(() => {
    if (activeArtwork && activeArtwork !== currentCover) {
      setPreviousCover(currentCover);
      setCurrentCover(activeArtwork);
      const timeout = setTimeout(() => setPreviousCover(null), 1000);
      return () => clearTimeout(timeout);
    }
  }, [activeArtwork, currentCover]);

  // Rotate smoothly through all covers every 7 seconds if idle
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIdx) => {
        const nextIdx = (prevIdx + 1) % shuffledList.length;
        const nextCover = shuffledList[nextIdx];
        setPreviousCover(currentCover);
        setCurrentCover(nextCover);
        setTimeout(() => setPreviousCover(null), 1000);
        return nextIdx;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [shuffledList, currentCover]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#0a0a0e]">
      {/* Previous cover crossfade layer */}
      {previousCover && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out scale-105 filter blur-[18px] sm:blur-[24px] opacity-0 brightness-95"
          style={{ backgroundImage: `url(${previousCover})` }}
        />
      )}

      {/* Current cover layer - clearly visible with soft blur */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out scale-105 filter blur-[18px] sm:blur-[24px] opacity-85 brightness-95"
        style={{ backgroundImage: `url(${currentCover})` }}
      />

      {/* Soft dark gradient vignette so UI text & controls remain perfectly clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />
    </div>
  );
};


