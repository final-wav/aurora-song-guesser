import React, { useState, useEffect } from 'react';
import { GameMode } from '../utils/gameLogic';
import { LeaderboardEntry, fetchLeaderboard, getSavedUsername, saveUsername } from '../utils/leaderboard';
import { X, Trophy, User, Edit2, Check, Sparkles, Calendar } from 'lucide-react';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: GameMode;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'daily',
}) => {
  const [activeTab, setActiveTab] = useState<GameMode>(initialMode);
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Username edit state
  const [username, setUsername] = useState<string>(getSavedUsername);
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>(username);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialMode);
      setUsername(getSavedUsername());
      setNameInput(getSavedUsername());
      loadScores(initialMode);
    }
  }, [isOpen, initialMode]);

  const loadScores = async (mode: GameMode) => {
    setIsLoading(true);
    try {
      const data = await fetchLeaderboard(mode);
      setEntries(data);
    } catch {
      setEntries([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabChange = (mode: GameMode) => {
    setActiveTab(mode);
    loadScores(mode);
  };

  const handleSaveName = () => {
    const saved = saveUsername(nameInput);
    setUsername(saved);
    setIsEditingName(false);
  };

  if (!isOpen) return null;

  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);
  const userRankIndex = entries.findIndex(e => username && e.username.toLowerCase() === username.toLowerCase());

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md select-none animate-fade-in">
      <div className="w-full max-w-lg max-h-[92dvh] overflow-hidden bg-black/60 backdrop-blur-3xl border border-white/15 rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.6)] flex flex-col relative text-center">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 pb-3 border-b border-white/10 flex items-center justify-between relative">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Trophy size={16} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">Global Leaderboard</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors cursor-pointer active:scale-95"
          >
            <X size={16} />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="px-5 pt-3 flex gap-2">
          <button
            onClick={() => handleTabChange('daily')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center space-x-1.5 cursor-pointer active:scale-95 ${
              activeTab === 'daily'
                ? 'bg-white text-black border-white shadow-[0_4px_16px_rgba(255,255,255,0.2)]'
                : 'bg-white/10 text-white/70 border-white/10 hover:bg-white/15 hover:text-white'
            }`}
          >
            <Calendar size={13} />
            <span>Today's Daily</span>
          </button>

          <button
            onClick={() => handleTabChange('match')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center space-x-1.5 cursor-pointer active:scale-95 ${
              activeTab === 'match'
                ? 'bg-white text-black border-white shadow-[0_4px_16px_rgba(255,255,255,0.2)]'
                : 'bg-white/10 text-white/70 border-white/10 hover:bg-white/15 hover:text-white'
            }`}
          >
            <Sparkles size={13} />
            <span>5-Round Matches</span>
          </button>
        </div>

        {/* Scrollable Leaderboard Area */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4 touch-pan-y overscroll-contain">
          {isLoading ? (
            <div className="py-12 flex flex-col items-center justify-center space-y-3 text-white/50">
              <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              <span className="text-xs">Loading rankings...</span>
            </div>
          ) : (
            <>
              {/* Top 3 Podium Cards */}
              {top3.length > 0 && (
                <div className="grid grid-cols-3 gap-2 pt-2 pb-1">
                  {/* 2nd Place */}
                  {top3[1] && (
                    <div className="flex flex-col items-center p-2.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 relative mt-3 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-slate-300 text-black font-extrabold text-[11px] flex items-center justify-center absolute -top-3 shadow-md">
                        2
                      </div>
                      <span className="text-[11px] font-bold text-white truncate max-w-[80px] mt-1">
                        {top3[1].username}
                      </span>
                      <span className="text-xs font-extrabold text-white font-mono mt-0.5">
                        {top3[1].score.toLocaleString()}
                      </span>
                      <span className="text-[9px] text-white/50 font-mono">
                        {activeTab === 'daily' ? `${top3[1].unlockedDuration}s` : (top3[1].difficulty?.toUpperCase() || '5 RND')}
                      </span>
                    </div>
                  )}

                  {/* 1st Place (Center / Taller) */}
                  {top3[0] && (
                    <div className="flex flex-col items-center p-3 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 relative shadow-lg">
                      <div className="w-7 h-7 rounded-full bg-amber-300 text-black font-extrabold text-xs flex items-center justify-center absolute -top-3.5 shadow-md ring-2 ring-amber-300/40">
                        👑
                      </div>
                      <span className="text-xs font-extrabold text-white truncate max-w-[90px] mt-1.5">
                        {top3[0].username}
                      </span>
                      <span className="text-sm font-extrabold text-white font-mono mt-0.5">
                        {top3[0].score.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-amber-200/80 font-mono font-semibold">
                        {activeTab === 'daily' ? `${top3[0].unlockedDuration}s` : (top3[0].difficulty?.toUpperCase() || 'CHAMPION')}
                      </span>
                    </div>
                  )}

                  {/* 3rd Place */}
                  {top3[2] && (
                    <div className="flex flex-col items-center p-2.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 relative mt-4 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-amber-700 text-white font-extrabold text-[11px] flex items-center justify-center absolute -top-3 shadow-md">
                        3
                      </div>
                      <span className="text-[11px] font-bold text-white truncate max-w-[80px] mt-1">
                        {top3[2].username}
                      </span>
                      <span className="text-xs font-extrabold text-white font-mono mt-0.5">
                        {top3[2].score.toLocaleString()}
                      </span>
                      <span className="text-[9px] text-white/50 font-mono">
                        {activeTab === 'daily' ? `${top3[2].unlockedDuration}s` : (top3[2].difficulty?.toUpperCase() || '5 RND')}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Position 4-50 List */}
              <div className="space-y-1.5 text-left">
                {rest.map((entry, idx) => {
                  const rank = idx + 4;
                  const isCurrentUser = username && entry.username.toLowerCase() === username.toLowerCase();

                  return (
                    <div
                      key={entry.id || idx}
                      className={`flex items-center justify-between p-2.5 rounded-xl border transition-colors text-xs ${
                        isCurrentUser
                          ? 'bg-white/20 border-white/30 shadow-sm'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        <span className="w-6 text-center font-mono font-bold text-white/50 text-[11px]">
                          #{rank}
                        </span>
                        <div className="flex flex-col min-w-0">
                          <span className={`font-bold truncate ${isCurrentUser ? 'text-white' : 'text-white/90'}`}>
                            {entry.username} {isCurrentUser && <span className="text-[10px] text-white/60">(You)</span>}
                          </span>
                          <span className="text-[10px] text-white/40">
                            {activeTab === 'daily' ? `Time: ${entry.unlockedDuration}s` : `${entry.difficulty?.toUpperCase() || 'Match'}`}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        <span className="font-mono font-extrabold text-white text-xs">
                          {entry.score.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Bottom Bar: Player Username Configuration */}
        <div className="p-3 sm:p-4 bg-black/40 border-t border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 flex-1 min-w-0 mr-2">
            <User size={15} className="text-white/60 shrink-0" />
            {isEditingName ? (
              <div className="flex items-center space-x-1.5 flex-1 min-w-0">
                <input
                  type="text"
                  value={nameInput}
                  onChange={e => setNameInput(e.target.value)}
                  maxLength={20}
                  placeholder="Enter username..."
                  className="bg-white/10 border border-white/20 rounded-lg px-2.5 py-1 text-xs text-white placeholder-white/40 outline-none w-full"
                  autoFocus
                  onKeyDown={e => e.key === 'Enter' && handleSaveName()}
                />
                <button
                  onClick={handleSaveName}
                  className="p-1 rounded-lg bg-white text-black font-bold cursor-pointer active:scale-95"
                >
                  <Check size={14} />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-1.5 truncate">
                <span className="text-white/60">Player:</span>
                <strong className="text-white truncate">{username || 'Anonymous Warrior'}</strong>
                <button
                  onClick={() => setIsEditingName(true)}
                  className="text-white/50 hover:text-white p-1 rounded-md hover:bg-white/10 cursor-pointer transition-colors"
                  title="Edit Player Name"
                >
                  <Edit2 size={12} />
                </button>
              </div>
            )}
          </div>

          {userRankIndex !== -1 && (
            <div className="shrink-0 px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/20 font-bold text-[10px] tracking-wider font-mono">
              Your Rank: #{userRankIndex + 1}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
