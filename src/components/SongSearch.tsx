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
    <div className="w-full max-w-xl mx-auto px-4 mt-6 relative select-none">
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
          placeholder={disabled ? "Round complete" : "Search AURORA songs, albums, features..."}
          className="w-full h-12 pl-10 pr-10 bg-[#0f141e]/90 text-white placeholder-[#68738a] rounded-2xl border border-emerald-500/20 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none text-sm transition-all shadow-[0_4px_25px_-5px_rgba(0,0,0,0.6)] focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] disabled:opacity-50"
        />

        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#8e8ea0] hover:text-white cursor-pointer"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Autocomplete Results Dropdown */}
      {isOpen && filteredSongs.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute left-4 right-4 mt-2 bg-[#0d121c]/95 backdrop-blur-xl border border-emerald-500/25 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.15)] overflow-hidden z-50 max-h-80 overflow-y-auto"
        >
          {filteredSongs.map((song, idx) => {
            const isSelected = idx === selectedIndex;
            const isAlreadyGuessed = wrongGuesses.includes(song.id);

            return (
              <div
                key={song.id}
                onClick={() => !isAlreadyGuessed && handleChoose(song)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between px-3.5 py-2.5 cursor-pointer border-b border-white/5 transition-colors ${
                  isAlreadyGuessed
                    ? 'opacity-40 line-through cursor-not-allowed bg-[#080b10]'
                    : isSelected
                    ? 'bg-gradient-to-r from-emerald-950/60 to-teal-950/40 text-white border-l-2 border-l-emerald-400'
                    : 'text-gray-300 hover:bg-[#131926]'
                }`}
              >
                <div className="flex items-center space-x-3 overflow-hidden">
                  {/* Album artwork thumbnail */}
                  <img
                    src={song.artwork || 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/22/02/0f22026c-d2c6-4d0f-4fa1-c0ef0be18bfe/24UMGIM27788.rgb.jpg/600x600bb.jpg'}
                    alt={song.album}
                    onError={(e) => {
                      e.currentTarget.src = 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/22/02/0f22026c-d2c6-4d0f-4fa1-c0ef0be18bfe/24UMGIM27788.rgb.jpg/600x600bb.jpg';
                    }}
                    className="w-10 h-10 rounded-lg object-cover bg-black/40 flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-semibold text-sm truncate text-white">
                      {song.title}
                    </span>
                    <div className="flex items-center space-x-1.5 text-xs text-[#8e8ea0] truncate">
                      <span>{song.artist}</span>
                      <span>•</span>
                      <span className="truncate">{song.album}</span>
                      <span>•</span>
                      <span>{song.year}</span>
                    </div>
                  </div>
                </div>

                {/* Collab / Soundtrack Badge */}
                <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
                  {song.isFeature && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Collab
                    </span>
                  )}
                  {song.isSoundtrack && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      OST
                    </span>
                  )}
                  {song.isCover && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
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
        <div className="flex flex-wrap gap-2 mt-3 items-center">
          <span className="text-xs text-[#8e8ea0] mr-1">Tries:</span>
          {wrongGuesses.map(id => {
            const song = AURORA_SONGS.find(s => s.id === id);
            return (
              <span
                key={id}
                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-red-950/40 border border-red-500/20 text-red-300 text-xs line-through"
              >
                <span>{song?.title || id}</span>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
