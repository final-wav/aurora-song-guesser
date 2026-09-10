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
import { Song, fetchLiveTrackPreview, AURORA_SONGS } from './data/auroraSongs';
import { audioEngine } from './utils/audioEngine';
import { loadUserStats, saveGameMatchResult, recordGuessStep, UserStats } from './utils/stats';

import { Header } from './components/Header';
import { AudioWaveform } from './components/AudioWaveform';
import { PlayerControls } from './components/PlayerControls';
import { SongSearch } from './components/SongSearch';
import { RoundResultModal } from './components/RoundResultModal';
import { GameCompleteModal } from './components/GameCompleteModal';
import { StatsModal } from './components/StatsModal';
import { SettingsModal } from './components/SettingsModal';

export const App: React.FC = () => {
  // Game Setup State
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameMode, setGameMode] = useState<GameMode>('match');
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [startOffset, setStartOffset] = useState<number>(0);

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
    setIsLoadingAudio(true);
    setPeaks([]);
    audioEngine.stop();

    fetchLiveTrackPreview(currentSong).then(async (url) => {
      if (isCancelled) return;
      setActiveAudioUrl(url);

      try {
        const buffer = await audioEngine.loadAudio(url);
        if (!isCancelled) {
          const extractedPeaks = audioEngine.extractWaveformPeaks(buffer, 65);
          setPeaks(extractedPeaks);
          setIsLoadingAudio(false);
        }
      } catch (err) {
        console.warn('Audio stream decode error:', err);
        if (!isCancelled) {
          setIsLoadingAudio(false);
        }
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [currentSong]);

  // Play snippet for currently active step
  const handlePlaySnippet = async () => {
    if (!activeAudioUrl || isLoadingAudio) return;
    const interval = STEP_INTERVALS[currentStepIndex] || STEP_INTERVALS[0];
    try {
      await audioEngine.playSnippet(activeAudioUrl, interval.duration, startOffset);
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
      const updatedStats = saveGameMatchResult(
        matchScore,
        roundResults.filter((r) => r.guessed).length,
        totalRounds
      );
      setUserStats(updatedStats);
      setIsGameCompleteModalOpen(true);
    }
  };

  const currentInterval = STEP_INTERVALS[currentStepIndex] || STEP_INTERVALS[0];

  return (
    <div className="min-h-screen bg-[#07080c] text-white flex flex-col justify-between aurora-bg relative overflow-x-hidden">
      {/* Ambient Animated Northern Lights Curtain Glow */}
      <div className="aurora-curtain" />

      {/* Decorative Aurora Ethereal Light Spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/8 to-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-0" />

      {/* Top Header */}
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
      />

      {/* Main Interactive Stage */}
      <main className="flex-1 flex flex-col items-center justify-center py-4 sm:py-8 w-full max-w-2xl mx-auto relative z-10">
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
          onSelectStepIndex={(idx) => {
            setCurrentStepIndex(idx);
            const intv = STEP_INTERVALS[idx];
            audioEngine.playSnippet(activeAudioUrl, intv.duration, startOffset);
          }}
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
      </main>

      {/* Footer Branding & Track Count */}
      <footer className="w-full py-4 text-center text-xs text-[#788299] border-t border-emerald-500/10 select-none relative z-10 backdrop-blur-md bg-[#07090e]/40">
        <p className="flex items-center justify-center gap-2">
          <span className="text-emerald-400">✦</span>
          <span><strong className="text-white font-semibold">AURORA</strong> Song Guesser</span>
          <span>•</span>
          <span className="text-emerald-300/80">{AURORA_SONGS.length} Songs & Collaborations</span>
          <span className="text-emerald-400">✦</span>
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
    </div>
  );
};

export default App;
