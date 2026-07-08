// Lightweight localStorage-backed save system for Coding Egg.
// Keeps progress, currency, and profile info across page reloads.

import { getWeekId, resolveWeekEnd } from './league';

const STORAGE_KEY = 'codingegg_save_v1';
const DAILY_QUEST_GOAL = 1; // lessons to complete today for the quest bar
const XP_PER_LESSON = 20;
const GEMS_PER_LESSON = 10;
const MAX_HEARTS = 5;
const HEART_REGEN_MS = 30 * 60 * 1000; // 1 heart every 30 minutes

const todayStr = () => new Date().toISOString().slice(0, 10); // YYYY-MM-DD

function defaultState() {
  return {
    profileName: null,        // null until the user picks a name on first login
    selectedCourseId: null,    // null until the user picks a course (Python, SQL, ...)
    joinDate: todayStr(),
    theme: 'light',
    completedNodes: [],
    nodeProgress: {},         // Tracks lesson index progress for each node (e.g. { 'node_1_1': 2 })
    xp: 0,
    gems: 0,
    streak: 0,
    lastActiveDate: null,     // last calendar day the user completed a lesson
    streakFreezeAvailable: false,
    lessonsCompletedToday: 0,
    lessonsCompletedTodayDate: todayStr(),
    hearts: MAX_HEARTS,
    heartsUpdatedAt: Date.now(),
    leagueTier: 0,             // index into LEAGUE_TIERS (lib/league.js) — starts at Bronze
    weeklyXp: 0,               // XP earned in the current league week
    weeklyWeekId: getWeekId(), // ISO week id the weeklyXp figure belongs to
  };
}

// Detects a new league week and, if one has started, resolves the previous
// week's simulated standings (promotion/demotion) before resetting the
// weekly XP counter. Cheap no-op when still inside the same week.
export function checkWeekRollover(state) {
  const currentWeekId = getWeekId();
  if (state.weeklyWeekId === currentWeekId) return state;
  const { newTier } = resolveWeekEnd(state.weeklyWeekId || currentWeekId, state.leagueTier ?? 0, state.weeklyXp ?? 0);
  return { ...state, leagueTier: newTier, weeklyXp: 0, weeklyWeekId: currentWeekId };
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return regenHearts({ ...defaultState(), ...parsed });
  } catch {
    return defaultState();
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — fail silently
  }
}

// Refill hearts based on elapsed time since the last update. Call this on
// load and periodically while the app is open.
export function regenHearts(state) {
  state = checkWeekRollover(state);
  if (state.hearts >= MAX_HEARTS) {
    return { ...state, heartsUpdatedAt: Date.now() };
  }
  const elapsed = Date.now() - (state.heartsUpdatedAt || Date.now());
  const gained = Math.floor(elapsed / HEART_REGEN_MS);
  if (gained <= 0) return state;
  const hearts = Math.min(MAX_HEARTS, state.hearts + gained);
  const leftoverMs = elapsed % HEART_REGEN_MS;
  return { ...state, hearts, heartsUpdatedAt: Date.now() - leftoverMs };
}

export function loseHeart(state) {
  const next = regenHearts(state);
  if (next.hearts <= 0) return next;
  const wasFull = next.hearts >= MAX_HEARTS;
  return {
    ...next,
    hearts: next.hearts - 1,
    // Start the regen countdown the moment the pool drops below max.
    heartsUpdatedAt: wasFull ? Date.now() : next.heartsUpdatedAt,
  };
}

export function refillHearts(state) {
  return { ...state, hearts: MAX_HEARTS, heartsUpdatedAt: Date.now() };
}

// Call when a lesson is completed. Handles XP, gems, streak, and the
// daily-quest counter. Returns the updated state (does not mutate input).
export function applyLessonCompletion(state) {
  const today = todayStr();
  const next = checkWeekRollover({ ...state });

  next.xp += XP_PER_LESSON;
  next.gems += GEMS_PER_LESSON;
  next.weeklyXp = (next.weeklyXp || 0) + XP_PER_LESSON;

  // Daily quest counter resets when the day changes.
  if (next.lessonsCompletedTodayDate !== today) {
    next.lessonsCompletedTodayDate = today;
    next.lessonsCompletedToday = 0;
  }
  next.lessonsCompletedToday = Math.min(DAILY_QUEST_GOAL, next.lessonsCompletedToday + 1);

  // Streak: increment once per calendar day, protect with a freeze if a day was missed.
  if (next.lastActiveDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().slice(0, 10);

    if (next.lastActiveDate === yesterdayStr || next.lastActiveDate === null) {
      next.streak += 1;
    } else if (next.streakFreezeAvailable) {
      // A day (or more) was missed, but a freeze absorbs it.
      next.streak += 1;
      next.streakFreezeAvailable = false;
    } else {
      // Streak broken — restart at 1 for today's lesson.
      next.streak = 1;
    }
    next.lastActiveDate = today;
  }

  return next;
}

export { DAILY_QUEST_GOAL, XP_PER_LESSON, GEMS_PER_LESSON, MAX_HEARTS, HEART_REGEN_MS, todayStr };
