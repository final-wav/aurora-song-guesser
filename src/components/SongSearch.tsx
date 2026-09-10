import React, { useState, useMemo, useRef, useEffect } from 'react';
import { AURORA_SONGS, Song } from '../data/auroraSongs';
import { Search, X } from 'lucide-react';

interface SongSearchProps {
  onSelectSong: (song: Song) => void;
  wrongGuesses: string[]; // song ids already guessed this round
  disabled?: boolean;
}

export const SongSearch: React.FC<SongSearchProps> = ({
  onSelectSong,
  wrongGuesses,
  disabled = false,
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filtered list of songs matching the query
  const filteredSongs = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase().trim();
    return AURORA_SONGS.filter(s => {
      const titleMatch = s.title.toLowerCase().includes(q);
      const albumMatch = s.album.toLowerCase().includes(q);
      const artistMatch = s.artist.toLowerCase().includes(q);
      const yearMatch = s.year.toString().includes(q);
      const tagMatch = s.tags ? s.tags.some(t => t.toLowerCase().includes(q)) : false;
      return titleMatch || albumMatch || artistMatch || yearMatch || tagMatch;
    }).slice(0, 8); // Top 8 matches
  }, [query]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || filteredSongs.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredSongs.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredSongs.length) % filteredSongs.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredSongs[selectedIndex]) {
        handleChoose(filteredSongs[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleChoose = (song: Song) => {
    if (wrongGuesses.includes(song.id)) return; // already tried
    onSelectSong(song);
    setQuery('');
    setIsOpen(false);
    setSelectedIndex(0);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !inputRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto px-2 sm:px-4 mt-4 sm:mt-6 relative select-none">
      {/* Search Input Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8e8ea0]">
          <Search size={16} />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setIsOpen(true);
            setSelectedIndex(0);
          }}
          onFocus={() => {
            if (query.trim()) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={disabled ? "Round complete" : "Search songs..."}
          className="w-full h-11 sm:h-12 pl-10 pr-10 bg-white/10 backdrop-blur-xl text-white placeholder-white/50 rounded-xl border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/30 outline-none text-base sm:text-sm transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)] disabled:opacity-50"
        />

        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/60 hover:text-white cursor-pointer active:scale-95 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Autocomplete Results Dropdown */}
      {isOpen && filteredSongs.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute left-2 right-2 sm:left-4 sm:right-4 mt-2 bg-black/60 backdrop-blur-3xl border border-white/15 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.5)] overflow-hidden z-50 max-h-56 sm:max-h-80 overflow-y-auto touch-pan-y overscroll-contain"
        >
          {filteredSongs.map((song, idx) => {
            const isSelected = idx === selectedIndex;
            const isAlreadyGuessed = wrongGuesses.includes(song.id);

            return (
              <div
                key={song.id}
                onClick={() => !isAlreadyGuessed && handleChoose(song)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between px-3 py-2 sm:px-3.5 sm:py-2.5 cursor-pointer border-b border-white/10 transition-colors ${
                  isAlreadyGuessed
                    ? 'opacity-40 line-through cursor-not-allowed bg-black/30'
                    : isSelected
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-2.5 sm:space-x-3 overflow-hidden min-w-0">
                  {/* Album artwork thumbnail */}
                  <img
                    src={song.artwork || 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/22/02/0f22026c-d2c6-4d0f-faa1-c0ef0be18bfe/24UMGIM27788.rgb.jpg/600x600bb.jpg'}
                    alt={song.album}
                    onError={(e) => {
                      e.currentTarget.src = 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/22/02/0f22026c-d2c6-4d0f-faa1-c0ef0be18bfe/24UMGIM27788.rgb.jpg/600x600bb.jpg';
                    }}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover bg-black/40 shrink-0 border border-white/10"
                    loading="lazy"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-semibold text-xs sm:text-sm truncate text-white">
                      {song.title}
                    </span>
                    <div className="flex items-center space-x-1 sm:space-x-1.5 text-[10px] sm:text-xs text-white/50 truncate">
                      <span className="truncate">{song.artist}</span>
                      <span>•</span>
                      <span className="truncate">{song.album}</span>
                      <span>•</span>
                      <span>{song.year}</span>
                    </div>
                  </div>
                </div>

                {/* Collab / Soundtrack / TOMORA Badge */}
                <div className="flex items-center space-x-1 shrink-0 ml-1.5">
                  {song.tags?.includes('TOMORA') ? (
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded-md bg-white/20 text-white border border-white/30">
                      TOMORA
                    </span>
                  ) : song.isFeature ? (
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded-md bg-white/15 text-white/90 border border-white/20">
                      Collab
                    </span>
                  ) : null}
                  {song.isSoundtrack && (
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded-md bg-white/15 text-white/90 border border-white/20">
                      OST
                    </span>
                  )}
                  {song.isCover && (
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded-md bg-white/15 text-white/90 border border-white/20">
                      Cover
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Wrong Guesses Pill Tray */}
      {wrongGuesses.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2.5 items-center">
          <span className="text-[10px] sm:text-xs text-white/60 mr-1">Tries:</span>
          {wrongGuesses.map(id => {
            const song = AURORA_SONGS.find(s => s.id === id);
            return (
              <span
                key={id}
                className="inline-flex items-center space-x-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-200 text-[10px] sm:text-xs line-through"
              >
                <span className="truncate max-w-[150px]">{song?.title || id}</span>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
