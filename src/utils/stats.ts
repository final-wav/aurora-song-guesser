export interface UserStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  totalScore: number;
  highScore: number;
  guessesDistribution: { [step: number]: number }; // count per step index 0..6
  lastPlayedDate?: string;
  dailyCompleted?: { [date: string]: { score: number; won: boolean } };
}

const STATS_KEY = 'aurora_guesser_user_stats_v1';

const defaultStats: UserStats = {
  gamesPlayed: 0,
  gamesWon: 0,
  currentStreak: 0,
  maxStreak: 0,
  totalScore: 0,
  highScore: 0,
  guessesDistribution: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  dailyCompleted: {},
};

export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return defaultStats;
    return { ...defaultStats, ...JSON.parse(raw) };
  } catch {
    return defaultStats;
  }
}

export function saveGameMatchResult(finalScore: number, roundsWon: number, totalRounds: number): UserStats {
  const stats = loadUserStats();
  const wonMatch = roundsWon >= Math.ceil(totalRounds / 2);

  stats.gamesPlayed += 1;
  if (wonMatch) {
    stats.gamesWon += 1;
    stats.currentStreak += 1;
    if (stats.currentStreak > stats.maxStreak) {
      stats.maxStreak = stats.currentStreak;
    }
  } else {
    stats.currentStreak = 0;
  }

  stats.totalScore += finalScore;
  if (finalScore > stats.highScore) {
    stats.highScore = finalScore;
  }

  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.warn('Could not save stats to localStorage', e);
  }

  return stats;
}

export function recordGuessStep(stepIndex: number) {
  const stats = loadUserStats();
  stats.guessesDistribution[stepIndex] = (stats.guessesDistribution[stepIndex] || 0) + 1;
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.warn('Could not update guess distribution', e);
  }
}

export function recordDailyResult(score: number, won: boolean, dateStr?: string): UserStats {
  const stats = loadUserStats();
  const date = dateStr || new Date().toISOString().split('T')[0];
  if (!stats.dailyCompleted) {
    stats.dailyCompleted = {};
  }
  stats.dailyCompleted[date] = { score, won };
  stats.gamesPlayed += 1;
  if (won) {
    stats.gamesWon += 1;
    stats.currentStreak += 1;
    if (stats.currentStreak > stats.maxStreak) {
      stats.maxStreak = stats.currentStreak;
    }
  } else {
    stats.currentStreak = 0;
  }
  stats.totalScore += score;
  if (score > stats.highScore) {
    stats.highScore = score;
  }
  stats.lastPlayedDate = date;

  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.warn('Could not save daily stats', e);
  }
  return stats;
}

export function getTodayDailyResult(dateStr?: string): { score: number; won: boolean } | null {
  const stats = loadUserStats();
  const date = dateStr || new Date().toISOString().split('T')[0];
  return stats.dailyCompleted?.[date] || null;
}

