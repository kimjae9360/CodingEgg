// Simulated weekly league (Duolingo-style) — no backend, no other real users.
// Every "opponent" is a deterministically-generated bot whose weekly XP is
// derived from a seed of (ISO week id + league tier), so the standings are
// stable for everyone looking at the same week/tier, but reshuffle every
// Monday when a new week id kicks in.

export const LEAGUE_TIERS = [
  { name: '브론즈', emoji: '🥉', color: '#CD7F32', gradient: 'linear-gradient(135deg, #CD7F32 0%, #E8A868 100%)' },
  { name: '실버', emoji: '🥈', color: '#9CA3AF', gradient: 'linear-gradient(135deg, #9CA3AF 0%, #E5E7EB 100%)' },
  { name: '골드', emoji: '🥇', color: '#F5C518', gradient: 'linear-gradient(135deg, #F5C518 0%, #FFE58A 100%)' },
  { name: '사파이어', emoji: '💎', color: '#2997E5', gradient: 'linear-gradient(135deg, #1CB0F6 0%, #2997E5 100%)' },
  { name: '다이아몬드', emoji: '👑', color: '#B96CE8', gradient: 'linear-gradient(135deg, #CE82FF 0%, #B96CE8 100%)' },
];

const PROMOTE_COUNT = 7; // top N (including the learner) advance a tier
const DEMOTE_COUNT = 5;  // bottom N drop a tier
const BOT_COUNT = 29;    // + the learner = a 30-person league, like Duolingo

const ADJECTIVES = ['용감한', '졸린', '배고픈', '행복한', '신비한', '작은', '거대한', '귀여운', '똑똑한', '씩씩한', '반짝이는', '느긋한', '부지런한', '수줍은'];
const NOUNS = ['판다', '여우', '고양이', '호랑이', '펭귄', '토끼', '거북이', '부엉이', '다람쥐', '고래', '개구리', '코알라', '사자', '오리'];
const AVATARS = ['🐼', '🦊', '🐱', '🐯', '🐧', '🐰', '🐢', '🦉', '🐿️', '🐳', '🐸', '🐨', '🦁', '🦆'];

function hashSeed(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return h;
}

// mulberry32 — small, fast, deterministic PRNG from a 32-bit seed.
function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ISO 8601 week id, e.g. "2026-W28". Stable Mon–Sun grouping.
export function getWeekId(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = (d.getUTCDay() + 6) % 7; // Monday = 0 ... Sunday = 6
  d.setUTCDate(d.getUTCDate() - dayNum + 3);
  const firstThursday = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  const week = 1 + Math.round(((d - firstThursday) / 86400000 - 3 + ((firstThursday.getUTCDay() + 6) % 7)) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

// 1 (Monday) .. 7 (Sunday) — how far into the current week "today" is.
function isoDayOfWeek(date = new Date()) {
  return ((date.getDay() + 6) % 7) + 1;
}

// Deterministic bot roster for a given week + tier. `finalXp` is what the
// bot ends the week with; `currentXp` is a live, day-scaled snapshot so the
// board fills in gradually as the real week progresses instead of showing
// every bot at full strength on day one.
function generateBots(weekId, tierIndex, now = new Date()) {
  const rand = mulberry32(hashSeed(`${weekId}::tier${tierIndex}`));
  const dayFraction = Math.min(1, isoDayOfWeek(now) / 7);
  const tierBase = 120 + tierIndex * 110; // higher leagues grind harder

  const bots = [];
  for (let i = 0; i < BOT_COUNT; i++) {
    const adjective = ADJECTIVES[Math.floor(rand() * ADJECTIVES.length)];
    const noun = NOUNS[Math.floor(rand() * NOUNS.length)];
    const avatar = AVATARS[Math.floor(rand() * AVATARS.length)];
    const finalXp = Math.round(tierBase * (0.4 + rand() * 1.4));
    const jitter = 0.85 + rand() * 0.3;
    const currentXp = Math.min(finalXp, Math.round(finalXp * dayFraction * jitter));
    bots.push({ name: `${adjective} ${noun}`, avatar, finalXp, currentXp });
  }
  return bots;
}

// Live standings for display while the week is still in progress.
export function getLeagueStandings(weekId, tierIndex, userWeeklyXp, userName) {
  const bots = generateBots(weekId, tierIndex);
  const rows = [
    ...bots.map((b) => ({ name: b.name, avatar: b.avatar, xp: b.currentXp, isUser: false })),
    { name: userName || '나', avatar: '🥚', xp: userWeeklyXp || 0, isUser: true },
  ];
  rows.sort((a, b) => b.xp - a.xp);
  return rows.map((row, i) => ({ ...row, rank: i + 1 }));
}

// Called once a new week id is detected: resolves the *previous* week using
// full-strength bot totals and returns the learner's new tier.
export function resolveWeekEnd(prevWeekId, tierIndex, userFinalXp) {
  const bots = generateBots(prevWeekId, tierIndex);
  const rows = [
    ...bots.map((b) => ({ xp: b.finalXp, isUser: false })),
    { xp: userFinalXp || 0, isUser: true },
  ];
  rows.sort((a, b) => b.xp - a.xp);
  const total = rows.length;
  const rank = rows.findIndex((r) => r.isUser) + 1;

  let newTier = tierIndex;
  if (tierIndex < LEAGUE_TIERS.length - 1 && rank <= PROMOTE_COUNT) {
    newTier = tierIndex + 1;
  } else if (tierIndex > 0 && rank > total - DEMOTE_COUNT) {
    newTier = tierIndex - 1;
  }
  return { newTier, rank, total, promoted: newTier > tierIndex, demoted: newTier < tierIndex };
}

export { PROMOTE_COUNT, DEMOTE_COUNT, BOT_COUNT };
