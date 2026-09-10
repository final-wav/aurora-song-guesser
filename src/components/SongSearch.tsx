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
      return titleMatch || albumMatch || artistMatch || yearMatch;
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
          className="w-full h-11 sm:h-12 pl-10 pr-10 bg-[#15151c] text-white placeholder-[#6e6e80] rounded-xl border border-white/10 focus:border-[#1DB954] focus:ring-1 focus:ring-[#1DB954] outline-none text-base sm:text-sm transition-all shadow-inner disabled:opacity-50"
        />

        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#8e8ea0] hover:text-white cursor-pointer active:scale-95"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Autocomplete Results Dropdown */}
      {isOpen && filteredSongs.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute left-2 right-2 sm:left-4 sm:right-4 mt-2 bg-[#181822] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 max-h-56 sm:max-h-80 overflow-y-auto touch-pan-y overscroll-contain"
        >
          {filteredSongs.map((song, idx) => {
            const isSelected = idx === selectedIndex;
            const isAlreadyGuessed = wrongGuesses.includes(song.id);

            return (
              <div
                key={song.id}
                onClick={() => !isAlreadyGuessed && handleChoose(song)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between px-3 py-2 sm:px-3.5 sm:py-2.5 cursor-pointer border-b border-white/5 transition-colors ${
                  isAlreadyGuessed
                    ? 'opacity-40 line-through cursor-not-allowed bg-[#14141a]'
                    : isSelected
                    ? 'bg-[#252533] text-white'
                    : 'text-gray-300 hover:bg-[#20202c]'
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
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover bg-black/40 shrink-0"
                    loading="lazy"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-semibold text-xs sm:text-sm truncate text-white">
                      {song.title}
                    </span>
                    <div className="flex items-center space-x-1 sm:space-x-1.5 text-[10px] sm:text-xs text-[#8e8ea0] truncate">
                      <span className="truncate">{song.artist}</span>
                      <span>•</span>
                      <span className="truncate">{song.album}</span>
                      <span>•</span>
                      <span>{song.year}</span>
                    </div>
                  </div>
                </div>

                {/* Collab / Soundtrack Badge */}
                <div className="flex items-center space-x-1 shrink-0 ml-1.5">
                  {song.isFeature && (
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Collab
                    </span>
                  )}
                  {song.isSoundtrack && (
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      OST
                    </span>
                  )}
                  {song.isCover && (
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
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
          <span className="text-[10px] sm:text-xs text-[#8e8ea0] mr-1">Tries:</span>
          {wrongGuesses.map(id => {
            const song = AURORA_SONGS.find(s => s.id === id);
            return (
              <span
                key={id}
                className="inline-flex items-center space-x-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-red-950/40 border border-red-500/20 text-red-300 text-[10px] sm:text-xs line-through"
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
