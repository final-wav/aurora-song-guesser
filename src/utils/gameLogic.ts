import { AURORA_SONGS, Song } from '../data/auroraSongs';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert' | 'brutal';
export type GameMode = 'match' | 'daily' | 'endless';

export interface StepInterval {
  step: number;
  duration: number; // in seconds
  label: string;
  points: number;
}

export const STEP_INTERVALS: StepInterval[] = [
  { step: 0, duration: 0.10, label: '0.10s', points: 10000 },
  { step: 1, duration: 0.50, label: '0.50s', points: 8000 },
  { step: 2, duration: 1.00, label: '1.0s',  points: 6000 },
  { step: 3, duration: 3.00, label: '3.0s',  points: 4000 },
  { step: 4, duration: 5.00, label: '5.0s',  points: 2000 },
  { step: 5, duration: 10.0, label: '10.0s', points: 1000 },
  { step: 6, duration: 30.0, label: '30.0s', points: 500 },
];

export interface RoundResult {
  round: number;
  song: Song;
  guessed: boolean;
  unlockedStep: number;
  pointsEarned: number;
  guessAttempts: string[];
}

/**
 * Filter songs based on chosen difficulty
 */
export function getSongsForDifficulty(difficulty: Difficulty): Song[] {
  switch (difficulty) {
    case 'easy':
      return AURORA_SONGS.filter(s => s.difficulty === 'easy');
    case 'medium':
      return AURORA_SONGS.filter(s => s.difficulty === 'easy' || s.difficulty === 'medium');
    case 'hard':
      return AURORA_SONGS.filter(s => s.difficulty === 'easy' || s.difficulty === 'medium' || s.difficulty === 'hard');
    case 'expert':
    case 'brutal':
    default:
      return [...AURORA_SONGS];
  }
}

/**
 * Pick 5 unique random songs for a match session
 */
export function generateMatchPlaylist(difficulty: Difficulty, count: number = 5): Song[] {
  const pool = getSongsForDifficulty(difficulty);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Generates a deterministic daily song based on the calendar date (YYYY-MM-DD)
 */
export function getDailySong(dateStr?: string): { song: Song; dayIndex: number } {
  const targetDate = dateStr || new Date().toISOString().split('T')[0];
  let hash = 0;
  for (let i = 0; i < targetDate.length; i++) {
    hash = (hash << 5) - hash + targetDate.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % AURORA_SONGS.length;
  // Day counter since game start (e.g. Day #1, #2)
  const epoch = new Date('2025-01-01').getTime();
  const todayMs = new Date(targetDate).getTime();
  const dayNumber = Math.max(1, Math.floor((todayMs - epoch) / (1000 * 60 * 60 * 24)));

  return {
    song: AURORA_SONGS[index],
    dayIndex: dayNumber,
  };
}

/**
 * Calculate start offset in seconds for expert and brutal modes
 */
export function calculateSongStartOffset(difficulty: Difficulty): number {
  if (difficulty === 'expert') {
    // Random start between 5s and 18s
    return Math.floor(Math.random() * 14) + 5;
  }
  if (difficulty === 'brutal') {
    // Random slice anywhere in 30s
    return Math.floor(Math.random() * 25);
  }
  return 0; // Starts at intro for Easy, Medium, Hard
}

/**
 * Rank title based on total 5-round score (Max 50,000)
 */
export function getRankTitle(score: number): { title: string; subtitle: string; color: string } {
  if (score >= 48000) {
    return { title: '👑 Queendom Empress', subtitle: 'Unbelievable! You know every single millisecond of AURORA.', color: 'text-amber-400' };
  }
  if (score >= 40000) {
    return { title: '🏹 Warrior of Light', subtitle: 'True devotee! Instincts as sharp as a warrior.', color: 'text-emerald-400' };
  }
  if (score >= 30000) {
    return { title: '🌌 Different Kind of Human', subtitle: 'Impressive! You easily recognize the subtle melodies.', color: 'text-cyan-400' };
  }
  if (score >= 18000) {
    return { title: '🌙 Daydreamer', subtitle: 'Solid performance! Keep exploring the discography.', color: 'text-purple-400' };
  }
  return { title: '🌱 Seedling', subtitle: 'A great journey begins with a single note.', color: 'text-gray-300' };
}

/**
 * Generates an emoji share card for Heardle / Wordle style social sharing
 */
export function generateShareText(
  mode: GameMode,
  score: number,
  maxScore: number,
  results: RoundResult[],
  difficulty: Difficulty
): string {
  const modeHeader = mode === 'daily' ? `AURORA Guesser Daily 🌸` : `AURORA Guesser [${difficulty.toUpperCase()}] 🌸`;
  const scoreLine = `Score: ${score.toLocaleString()} / ${maxScore.toLocaleString()}`;

  const squares = results.map(r => {
    if (!r.guessed) return '⬛';
    if (r.unlockedStep === 0) return '🟩'; // 0.10s
    if (r.unlockedStep <= 2) return '🟨'; // 0.5s - 1.0s
    return '🟧'; // 3.0s+
  }).join('');

  return `${modeHeader}\n${scoreLine}\n${squares}\n\nPlay at: https://aurora-guesser.pages.dev`;
}
