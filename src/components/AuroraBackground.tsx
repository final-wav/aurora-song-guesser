import React, { useState, useEffect, useRef } from 'react';
import { AURORA_SONGS } from '../data/auroraSongs';

// Get all unique artwork URLs from catalog
const ALL_COVER_ARTWORKS: string[] = Array.from(
  new Set(AURORA_SONGS.map((s) => s.artwork).filter(Boolean))
);

function shuffleArray(array: string[]): string[] {
  const list = [...array];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

export const AuroraBackground: React.FC = () => {
  const listRef = useRef<string[]>(shuffleArray(ALL_COVER_ARTWORKS));
  const indexRef = useRef<number>(0);

  const [currentCover, setCurrentCover] = useState<string>(() => {
    return listRef.current[0] || ALL_COVER_ARTWORKS[0];
  });
  const [previousCover, setPreviousCover] = useState<string | null>(null);

  // Rotate smoothly through all covers randomly & independently of current playing song
  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current >= listRef.current.length) {
        listRef.current = shuffleArray(ALL_COVER_ARTWORKS);
        indexRef.current = 0;
      }
      const nextCover = listRef.current[indexRef.current] || ALL_COVER_ARTWORKS[0];

      setCurrentCover((prevCurrent) => {
        setPreviousCover(prevCurrent);
        setTimeout(() => setPreviousCover(null), 1200);
        return nextCover;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#0a0a0e]">
      {/* Previous cover crossfade layer */}
      {previousCover && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out scale-105 filter blur-[18px] sm:blur-[24px] opacity-0 brightness-95"
          style={{ backgroundImage: `url(${previousCover})` }}
        />
      )}

      {/* Current cover layer - clearly visible with soft blur, purely random */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out scale-105 filter blur-[18px] sm:blur-[24px] opacity-85 brightness-95"
        style={{ backgroundImage: `url(${currentCover})` }}
      />

      {/* Soft dark gradient vignette so UI text & controls remain perfectly clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />
    </div>
  );
};


