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

// Preload helper ensuring image is completely cached before crossfading
function preloadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    if (img.complete) {
      resolve();
    } else {
      img.onload = () => resolve();
      img.onerror = () => resolve();
    }
  });
}

export const AuroraBackground: React.FC = () => {
  const listRef = useRef<string[]>(shuffleArray(ALL_COVER_ARTWORKS));
  const indexRef = useRef<number>(0);

  // Dual-layer state for guaranteed 100% flicker-free crossfade
  const [layerA, setLayerA] = useState<string>(() => listRef.current[0] || ALL_COVER_ARTWORKS[0]);
  const [layerB, setLayerB] = useState<string>(() => listRef.current[1] || ALL_COVER_ARTWORKS[0]);
  const [activeLayer, setActiveLayer] = useState<'A' | 'B'>('A');

  // Preload all cover images on mount into browser cache
  useEffect(() => {
    ALL_COVER_ARTWORKS.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  // Rotate smoothly through all covers randomly with preloaded crossfade
  useEffect(() => {
    let isMounted = true;

    const interval = setInterval(async () => {
      indexRef.current += 1;
      if (indexRef.current >= listRef.current.length) {
        listRef.current = shuffleArray(ALL_COVER_ARTWORKS);
        indexRef.current = 0;
      }

      const nextCover = listRef.current[indexRef.current] || ALL_COVER_ARTWORKS[0];

      // Wait until target image is completely in memory
      await preloadImage(nextCover);
      if (!isMounted) return;

      setActiveLayer((currentActive) => {
        if (currentActive === 'A') {
          setLayerB(nextCover);
          return 'B';
        } else {
          setLayerA(nextCover);
          return 'A';
        }
      });
    }, 28000); // Calm 28-second ambient rotation interval

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#0a0a0e]">
      {/* Layer A */}
      <div
        className={`absolute inset-0 bg-cover bg-center scale-105 filter blur-[28px] sm:blur-[36px] brightness-90 transition-opacity duration-[3000ms] ease-in-out transform-gpu ${
          activeLayer === 'A' ? 'opacity-75 z-10' : 'opacity-0 z-0'
        }`}
        style={{ backgroundImage: `url(${layerA})` }}
      />

      {/* Layer B */}
      <div
        className={`absolute inset-0 bg-cover bg-center scale-105 filter blur-[28px] sm:blur-[36px] brightness-90 transition-opacity duration-[3000ms] ease-in-out transform-gpu ${
          activeLayer === 'B' ? 'opacity-75 z-10' : 'opacity-0 z-0'
        }`}
        style={{ backgroundImage: `url(${layerB})` }}
      />

      {/* Soft dark gradient vignette so UI text & controls remain crystal clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70 z-20" />
    </div>
  );
};


