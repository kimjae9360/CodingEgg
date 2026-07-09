// Lightweight localStorage-backed save system for Coding Egg.
// Keeps progress, currency, and profile info across page reloads.

import { getWeekId, resolveWeekEnd } from './league';

const STORAGE_KEY = 'codingegg_save_v1';
const DAILY_QUEST_GOAL = 1; // lessons to complete today for the quest bar
const XP_PER_LESSON = 20;
const GEMS_PER_LESSON = 10;
const MAX_HEARTS = 5;
const HEART_REGEN_MS = 5 * 60 * 1000; // 1 heart every 5 minutes

const todayStr = () => new Date().toISOString().slice(0, 10); // YYYY-MM-DD

function defaultState() {
  return {
    profileName: null,        // null until the user picks a name on first login
    selectedCourseId: null,    // null until the user picks a course (Python, SQL, ...)
    enrolledCourses: [],      // list of course IDs the user has enrolled in
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
    isPremium: false,
    wrongAnswers: [],          // { id, questionData, dateMissed, resolved }
    friends: [],               // { name, xp, tier }
    claimedAchievements: [],
    perfectNodes: [],          // track nodes cleared with 0 mistakes
  };
}

export function claimAchievement(state, id, gemReward) {
  if (state.claimedAchievements?.includes(id)) return state;
  return {
    ...state,
    claimedAchievements: [...(state.claimedAchievements || []), id],
    gems: state.gems + gemReward
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

export function checkPremiumExpiry(state) {
  if (state.isPremium) {
    if (state.premiumExpiryDate) {
      if (new Date(state.premiumExpiryDate) < new Date()) {
        return { ...state, isPremium: false, premiumExpiryDate: null };
      }
    } else {
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + 30);
      return { ...state, premiumExpiryDate: expiry.toISOString() };
    }
  }
  return state;
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    let state = regenHearts({ ...defaultState(), ...parsed });
    state = checkPremiumExpiry(state);
    return state;
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
export function applyLessonCompletion(state, earnedXp = XP_PER_LESSON, earnedGems = GEMS_PER_LESSON) {
  const today = todayStr();
  const next = checkWeekRollover({ ...state });

  next.xp += earnedXp;
  next.gems += earnedGems;
  next.weeklyXp = (next.weeklyXp || 0) + earnedXp;

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

export function addWrongAnswer(state, questionData) {
  const newAnswer = {
    id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
    questionData,
    dateMissed: todayStr(),
    resolved: false
  };
  return { ...state, wrongAnswers: [...(state.wrongAnswers || []), newAnswer] };
}

export function resolveWrongAnswer(state, answerId) {
  return {
    ...state,
    wrongAnswers: (state.wrongAnswers || []).map(ans => 
      ans.id === answerId ? { ...ans, resolved: true } : ans
    )
  };
}

export function togglePremium(state) {
  if (state.isPremium) {
    return { ...state, isPremium: false, premiumExpiryDate: null };
  } else {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 30);
    return { ...state, isPremium: true, premiumExpiryDate: expiry.toISOString() };
  }
}

export function updateProfile(state, { profileName, avatar }) {
  // We can add avatar to state later if needed. For now just update name.
  return { ...state, profileName };
}

export function addFriend(state, friendName) {
  const newFriend = {
    name: friendName,
    xp: Math.floor(Math.random() * 500) + 100, // random mock XP
    tier: Math.floor(Math.random() * 3)
  };
  return { ...state, friends: [...(state.friends || []), newFriend] };
}

export { DAILY_QUEST_GOAL, XP_PER_LESSON, GEMS_PER_LESSON, MAX_HEARTS, HEART_REGEN_MS, todayStr };
