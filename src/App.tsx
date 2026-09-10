import React, { useState, useEffect, useCallback } from 'react';
import {
  Difficulty,
  GameMode,
  STEP_INTERVALS,
  RoundResult,
  generateMatchPlaylist,
  getDailySong,
  calculateSongStartOffset,
} from './utils/gameLogic';
import { Song, AURORA_SONGS } from './data/auroraSongs';
import { audioEngine } from './utils/audioEngine';
import { loadUserStats, saveGameMatchResult, recordGuessStep, UserStats } from './utils/stats';

import { Header } from './components/Header';
import { AuroraBackground } from './components/AuroraBackground';
import { AudioWaveform } from './components/AudioWaveform';
import { PlayerControls } from './components/PlayerControls';
import { SongSearch } from './components/SongSearch';
import { RoundResultModal } from './components/RoundResultModal';
import { GameCompleteModal } from './components/GameCompleteModal';
import { StatsModal } from './components/StatsModal';
import { SettingsModal } from './components/SettingsModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { submitScore } from './utils/leaderboard';

const LAST_DIFFICULTY_KEY = 'aurora_last_difficulty';
const LAST_MODE_KEY = 'aurora_last_game_mode';
const VALID_DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard', 'expert', 'brutal'];

const getSavedDifficulty = (): Difficulty => {
  try {
    const saved = localStorage.getItem(LAST_DIFFICULTY_KEY) as Difficulty;
    if (saved && VALID_DIFFICULTIES.includes(saved)) {
      return saved;
    }
  } catch {}
  return 'easy';
};

const getSavedGameMode = (): GameMode => {
  try {
    const saved = localStorage.getItem(LAST_MODE_KEY) as GameMode;
    if (saved === 'daily' || saved === 'match') {
      return saved;
    }
  } catch {}
  return 'match';
};

export const App: React.FC = () => {
  // Game Setup State (remembering where the player left off)
  const [difficulty, setDifficulty] = useState<Difficulty>(getSavedDifficulty);
  const [gameMode, setGameMode] = useState<GameMode>(getSavedGameMode);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [startOffset, setStartOffset] = useState<number>(0);

  // Persist difficulty & gameMode whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(LAST_DIFFICULTY_KEY, difficulty);
    } catch {}
  }, [difficulty]);

  useEffect(() => {
    try {
      localStorage.setItem(LAST_MODE_KEY, gameMode);
    } catch {}
  }, [gameMode]);

  // Round State
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);
  const [roundResults, setRoundResults] = useState<RoundResult[]>([]);
  const [matchScore, setMatchScore] = useState<number>(0);

  // Audio Playback State
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPlayingFull, setIsPlayingFull] = useState<boolean>(false);
  const [playbackRatio, setPlaybackRatio] = useState<number>(0);
  const [peaks, setPeaks] = useState<number[]>([]);
  const [isLoadingAudio, setIsLoadingAudio] = useState<boolean>(false);
  const [activeAudioUrl, setActiveAudioUrl] = useState<string>('');
  const [volume, setVolume] = useState<number>(0.8);

  // Modal Dialogs
  const [isRoundModalOpen, setIsRoundModalOpen] = useState<boolean>(false);
  const [isLastGuessCorrect, setIsLastGuessCorrect] = useState<boolean>(false);
  const [isGameCompleteModalOpen, setIsGameCompleteModalOpen] = useState<boolean>(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState<boolean>(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState<boolean>(false);
  const [leaderboardInitialMode, setLeaderboardInitialMode] = useState<GameMode>('daily');
  const [userStats, setUserStats] = useState<UserStats>(loadUserStats());

  const currentSong: Song | undefined = playlist[currentSongIndex];
  const totalRounds = gameMode === 'daily' ? 1 : 5;
  const maxPossibleScore = totalRounds * 10000;

  // Initialize audio engine callbacks
  useEffect(() => {
    audioEngine.setCallbacks(
      (playing) => {
        setIsPlaying(playing);
        if (!playing) setIsPlayingFull(false);
      },
      (_time, ratio) => {
        setPlaybackRatio(ratio);
      }
    );
  }, []);

  // Initialize or reset playlist
  const initGame = useCallback((diff: Difficulty, mode: GameMode) => {
    audioEngine.stop();
    setCurrentStepIndex(0);
    setWrongGuesses([]);
    setRoundResults([]);
    setMatchScore(0);
    setCurrentSongIndex(0);
    setIsRoundModalOpen(false);
    setIsGameCompleteModalOpen(false);

    if (mode === 'daily') {
      const { song } = getDailySong();
      setPlaylist([song]);
      setStartOffset(0);
    } else {
      const matchTracks = generateMatchPlaylist(diff, 5);
      setPlaylist(matchTracks);
      setStartOffset(calculateSongStartOffset(diff));
    }
  }, []);

  // Load game on mount or when mode/difficulty change
  useEffect(() => {
    initGame(difficulty, gameMode);
  }, [difficulty, gameMode, initGame]);

  // Load and decode audio buffer whenever current song changes
  useEffect(() => {
    if (!currentSong) return;

    let isCancelled = false;
    const url = currentSong.previewUrl;
    setActiveAudioUrl(url);
    setIsLoadingAudio(false);
    setPeaks([]);
    audioEngine.stop();

    // Preload audio buffer in background for waveform and instant playback
    audioEngine.loadAudio(url).then((buffer) => {
      if (!isCancelled) {
        const extractedPeaks = audioEngine.extractWaveformPeaks(buffer, 65);
        setPeaks(extractedPeaks);
      }
    }).catch((err) => {
      console.warn('Audio background decode fallback:', err);
    });

    return () => {
      isCancelled = true;
    };
  }, [currentSong]);

  // Play snippet for currently active step
  const handlePlaySnippet = async () => {
    const urlToPlay = activeAudioUrl || currentSong?.previewUrl;
    if (!urlToPlay) return;
    const interval = STEP_INTERVALS[currentStepIndex] || STEP_INTERVALS[0];
    try {
      await audioEngine.playSnippet(urlToPlay, interval.duration, startOffset);
    } catch (err) {
      console.error('Playback failed', err);
    }
  };

  // Stop snippet
  const handleStopSnippet = () => {
    audioEngine.stop();
  };

  // Play full 30s track preview (in modal)
  const handlePlayFullSnippet = async () => {
    if (!activeAudioUrl) return;
    setIsPlayingFull(true);
    try {
      await audioEngine.playSnippet(activeAudioUrl, 30.0, 0);
    } catch (err) {
      console.error('Full snippet playback failed', err);
    }
  };

  // Unlock next time interval (+1s / more)
  const handleUnlockNextStep = () => {
    if (currentStepIndex < STEP_INTERVALS.length - 1) {
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      // Automatically play the newly unlocked snippet slice
      const interval = STEP_INTERVALS[nextIdx];
      audioEngine.playSnippet(activeAudioUrl, interval.duration, startOffset);
    }
  };

  // Skip / Give up round
  const handleSkipRound = () => {
    if (!currentSong) return;
    audioEngine.stop();

    const result: RoundResult = {
      round: currentSongIndex + 1,
      song: currentSong,
      guessed: false,
      unlockedStep: currentStepIndex,
      pointsEarned: 0,
      guessAttempts: [...wrongGuesses],
    };

    setRoundResults((prev) => [...prev, result]);
    setIsLastGuessCorrect(false);
    setIsRoundModalOpen(true);
  };

  // Handle user selecting a song guess
  const handleSelectSong = (guessedSong: Song) => {
    if (!currentSong) return;

    // Check if correct match
    const isCorrect = guessedSong.id === currentSong.id;

    if (isCorrect) {
      audioEngine.stop();
      const interval = STEP_INTERVALS[currentStepIndex] || STEP_INTERVALS[0];
      const points = interval.points;

      setMatchScore((prev) => prev + points);
      recordGuessStep(currentStepIndex);

      const result: RoundResult = {
        round: currentSongIndex + 1,
        song: currentSong,
        guessed: true,
        unlockedStep: currentStepIndex,
        pointsEarned: points,
        guessAttempts: [...wrongGuesses, guessedSong.id],
      };

      setRoundResults((prev) => [...prev, result]);
      setIsLastGuessCorrect(true);
      setIsRoundModalOpen(true);

      // Auto-submit daily score if daily mode
      if (gameMode === 'daily') {
        submitScore({
          score: points,
          mode: 'daily',
          unlockedDuration: interval.duration,
          totalRoundsWon: 1,
        });
      }
    } else {
      // Wrong guess
      const updatedWrongs = [...wrongGuesses, guessedSong.id];
      setWrongGuesses(updatedWrongs);

      // If more steps available, advance to next step automatically
      if (currentStepIndex < STEP_INTERVALS.length - 1) {
        const nextIdx = currentStepIndex + 1;
        setCurrentStepIndex(nextIdx);
        // Play the newly unlocked longer snippet
        const interval = STEP_INTERVALS[nextIdx];
        audioEngine.playSnippet(activeAudioUrl, interval.duration, startOffset);
      } else {
        // Out of attempts / 30s exhausted
        audioEngine.stop();
        const result: RoundResult = {
          round: currentSongIndex + 1,
          song: currentSong,
          guessed: false,
          unlockedStep: currentStepIndex,
          pointsEarned: 0,
          guessAttempts: updatedWrongs,
        };
        setRoundResults((prev) => [...prev, result]);
        setIsLastGuessCorrect(false);
        setIsRoundModalOpen(true);

        // Auto-submit daily score (0 pts) if daily mode
        if (gameMode === 'daily') {
          submitScore({
            score: 0,
            mode: 'daily',
            unlockedDuration: 30.0,
            totalRoundsWon: 0,
          });
        }
      }
    }
  };

  // Proceed to next round or finish match
  const handleNextRound = () => {
    setIsRoundModalOpen(false);
    audioEngine.stop();

    if (currentSongIndex + 1 < totalRounds) {
      // Advance to next song in playlist
      const nextIndex = currentSongIndex + 1;
      setCurrentSongIndex(nextIndex);
      setCurrentStepIndex(0);
      setWrongGuesses([]);
      setStartOffset(calculateSongStartOffset(difficulty));
    } else {
      // Match Finished!
      const wonCount = roundResults.filter((r) => r.guessed).length;
      const updatedStats = saveGameMatchResult(
        matchScore,
        wonCount,
        totalRounds
      );
      setUserStats(updatedStats);
      setIsGameCompleteModalOpen(true);

      // Submit match score to leaderboard
      if (gameMode === 'match') {
        submitScore({
          score: matchScore,
          mode: 'match',
          difficulty: difficulty,
          totalRoundsWon: wonCount,
        });
      }
    }
  };

  const currentInterval = STEP_INTERVALS[currentStepIndex] || STEP_INTERVALS[0];

  return (
    <div className="min-h-[100dvh] bg-[#08080c] text-white flex flex-col justify-between relative overflow-x-hidden">
      {/* Clean blurred cover / Aurora backdrop */}
      <AuroraBackground />

      {/* Top Header */}
      <div className="relative z-10 w-full">
        <Header
          difficulty={difficulty}
          onSelectDifficulty={(diff) => {
            setDifficulty(diff);
            initGame(diff, gameMode);
          }}
          gameMode={gameMode}
          onSelectGameMode={(mode) => {
            setGameMode(mode);
            initGame(difficulty, mode);
          }}
          currentScore={matchScore}
          maxPossibleScore={maxPossibleScore}
          currentRound={currentSongIndex + 1}
          totalRounds={totalRounds}
          onResetGame={() => initGame(difficulty, gameMode)}
          onOpenStats={() => setIsStatsModalOpen(true)}
          onOpenSettings={() => setIsSettingsModalOpen(true)}
          onOpenLeaderboard={() => {
            setLeaderboardInitialMode(gameMode);
            setIsLeaderboardOpen(true);
          }}
        />
      </div>

      {/* Main Interactive Stage */}
      <main className="relative z-30 flex-1 flex flex-col items-center justify-center py-2 sm:py-6 px-2 sm:px-4 pb-16 sm:pb-20 w-full max-w-2xl mx-auto">
        <div className="w-full glass-panel border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl flex flex-col items-center">
          {/* Audio Waveform Scrubber */}
          <AudioWaveform
            unlockedDuration={currentInterval.duration}
            totalMaxDuration={30.0}
            playbackProgressRatio={playbackRatio}
            isPlaying={isPlaying}
            peaks={peaks}
            startOffset={startOffset}
          />

          {/* Player Controls (Pills, Play/Stop Button, +1s, Skip) */}
          <PlayerControls
            currentStepIndex={currentStepIndex}
            onPlaySnippet={handlePlaySnippet}
            onStopSnippet={handleStopSnippet}
            onUnlockNextStep={handleUnlockNextStep}
            onSkipRound={handleSkipRound}
            isPlaying={isPlaying}
            isLoadingAudio={isLoadingAudio}
          />

          {/* Real-time Song Search & Autocomplete Dropdown */}
          <SongSearch
            onSelectSong={handleSelectSong}
            wrongGuesses={wrongGuesses}
            disabled={isRoundModalOpen || isGameCompleteModalOpen}
          />
        </div>
      </main>

      {/* Footer Branding & Track Count */}
      <footer className="relative z-10 w-full py-2.5 sm:py-4 text-center text-[10px] sm:text-xs text-[#8e8ea0] border-t border-white/5 select-none bg-black/20 backdrop-blur-md">
        <p className="tracking-wide">
          <strong className="text-white font-semibold tracking-wider">AURORA</strong> Song Guesser • {AURORA_SONGS.length} Songs, EPs & Collaborations
        </p>
      </footer>

      {/* Modals */}
      {currentSong && (
        <RoundResultModal
          isOpen={isRoundModalOpen}
          isGuessed={isLastGuessCorrect}
          song={currentSong}
          pointsEarned={isLastGuessCorrect ? currentInterval.points : 0}
          unlockedDuration={currentInterval.duration}
          currentRound={currentSongIndex + 1}
          totalRounds={totalRounds}
          isMatchFinished={currentSongIndex + 1 >= totalRounds}
          onNextRound={handleNextRound}
          onPlayFullSnippet={handlePlayFullSnippet}
          onStopAudio={() => audioEngine.stop()}
          isPlayingFull={isPlayingFull}
        />
      )}

      <GameCompleteModal
        isOpen={isGameCompleteModalOpen}
        finalScore={matchScore}
        maxPossibleScore={maxPossibleScore}
        roundResults={roundResults}
        difficulty={difficulty}
        gameMode={gameMode}
        onPlayAgain={() => initGame(difficulty, gameMode)}
        onOpenLeaderboard={() => {
          setLeaderboardInitialMode(gameMode);
          setIsLeaderboardOpen(true);
        }}
      />

      <StatsModal
        isOpen={isStatsModalOpen}
        onClose={() => setIsStatsModalOpen(false)}
        stats={userStats}
      />

      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        volume={volume}
        onVolumeChange={(vol) => {
          setVolume(vol);
          audioEngine.setVolume(vol);
        }}
      />

      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        initialMode={leaderboardInitialMode}
      />
    </div>
  );
};

export default App;
