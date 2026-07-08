import React, { useMemo } from 'react';
import { Trophy, Store, Flame, Gem, Heart, Snowflake, ArrowUp, ArrowDown } from 'lucide-react';
import { LEAGUE_TIERS, PROMOTE_COUNT, DEMOTE_COUNT, BOT_COUNT, getWeekId, getLeagueStandings } from '../lib/league';

export function LeaderboardScreen({ theme = 'light', xp = 0, leagueTier = 0, weeklyXp = 0, profileName = '나' }) {
  const isDark = theme === 'dark';
  const tier = LEAGUE_TIERS[leagueTier] || LEAGUE_TIERS[0];
  const weekId = getWeekId();
  const totalParticipants = BOT_COUNT + 1;

  const standings = useMemo(
    () => getLeagueStandings(weekId, leagueTier, weeklyXp, profileName),
    [weekId, leagueTier, weeklyXp, profileName]
  );

  const daysLeft = useMemo(() => {
    const dow = ((new Date().getDay() + 6) % 7) + 1; // Monday=1..Sunday=7
    return Math.max(0, 7 - dow);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto pt-8 px-4 pb-12 animate-pop">
      <div
        className="rounded-2xl p-6 flex items-center gap-4 mb-6 shadow-xl text-white relative overflow-hidden"
        style={{ background: tier.gradient }}
      >
        <div className="text-5xl">{tier.emoji}</div>
        <div className="flex-1">
          <h1 className="font-black text-2xl md:text-3xl tracking-wide">{tier.name} 리그</h1>
          <p className="text-white/90 font-bold text-sm">
            {daysLeft > 0 ? `이번 주 종료까지 ${daysLeft}일 남았어요` : '오늘이 이번 주 마지막 날이에요!'}
          </p>
        </div>
        <div className="text-right">
          <div className="text-white/70 text-xs font-bold uppercase tracking-wide">이번 주 XP</div>
          <div className="text-3xl font-black">{weeklyXp}</div>
        </div>
        <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      <p className={`text-xs font-bold text-center mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        상위 {PROMOTE_COUNT}명은 다음 리그로 승급, 하위 {DEMOTE_COUNT}명은 강등돼요 · 총 {totalParticipants}명
        {leagueTier === LEAGUE_TIERS.length - 1 ? ' · 최고 리그예요, 강등만 조심하세요!' : ''}
      </p>

      <div className={`rounded-3xl border-2 overflow-hidden ${isDark ? 'bg-[#2b3a42] border-[#3b4a52]' : 'bg-white border-gray-100 shadow-md'}`}>
        {standings.map((row, i) => {
          const isPromoteZone = leagueTier < LEAGUE_TIERS.length - 1 && row.rank <= PROMOTE_COUNT;
          const isDemoteZone = leagueTier > 0 && row.rank > totalParticipants - DEMOTE_COUNT;
          const showPromoteDivider = leagueTier < LEAGUE_TIERS.length - 1 && row.rank === PROMOTE_COUNT + 1;
          const showDemoteDivider = leagueTier > 0 && row.rank === totalParticipants - DEMOTE_COUNT + 1;

          return (
            <React.Fragment key={i}>
              {showPromoteDivider && (
                <div className="flex items-center gap-2 px-5 py-1.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-wide">
                  <ArrowUp size={12} /> 승급 라인
                </div>
              )}
              {showDemoteDivider && (
                <div className="flex items-center gap-2 px-5 py-1.5 bg-red-500/10 text-red-400 text-[10px] font-black uppercase tracking-wide">
                  <ArrowDown size={12} /> 강등 라인
                </div>
              )}
              <div
                className={`flex items-center gap-3 px-5 py-3 border-b last:border-b-0 ${isDark ? 'border-[#3b4a52]' : 'border-gray-100'}
                  ${row.isUser ? (isDark ? 'bg-[#00C4B5]/15' : 'bg-[#00C4B5]/10') : ''}`}
              >
                <div className={`w-7 text-center font-black text-sm ${
                  row.rank === 1 ? 'text-[#FFB300]' : isPromoteZone ? 'text-emerald-500' : isDemoteZone ? 'text-red-400' : isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  {row.rank}
                </div>
                <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-xl flex-none">
                  {row.avatar}
                </div>
                <div className={`flex-1 font-bold text-sm truncate ${row.isUser ? (isDark ? 'text-[#00C4B5]' : 'text-[#00A396]') : isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  {row.isUser ? `${row.name} (나)` : row.name}
                </div>
                <div className={`font-black text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{row.xp} XP</div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export function StoreScreen({ theme = 'light', gems = 0, hearts = 5, maxHearts = 5, streakFreezeAvailable = false, onBuyHeartRefill, onBuyStreakFreeze }) {
  const isDark = theme === 'dark';
  const heartCost = 50;
  const freezeCost = 200;
  const heartsFull = hearts >= maxHearts;
  const cardClass = isDark ? 'bg-[#2b3a42] border-[#3b4a52]' : 'bg-white border-gray-100 shadow-md';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className="w-full max-w-2xl mx-auto pt-8 px-4 animate-pop">
      <div className="bg-[#FFB300] rounded-2xl p-6 flex items-center justify-between gap-4 mb-8 shadow-[0_4px_0_0_#E59F00]">
        <div className="flex items-center gap-4">
          <Store size={40} className="text-white" />
          <div>
            <h1 className="font-black text-white text-3xl tracking-wide">상점</h1>
            <p className="text-white/90 font-bold">학습으로 모은 보석으로 아이템을 구매하세요.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/20 text-white font-black px-4 py-2 rounded-xl">
          <Gem size={20} /> {gems}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`rounded-3xl p-6 border-2 flex flex-col items-center ${cardClass}`}>
          <Heart size={40} className="mb-4 text-[#ff4b4b]" fill="currentColor" />
          <h3 className={`font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>하트 충전</h3>
          <p className={`font-bold mb-4 text-center ${textMuted}`}>{heartsFull ? '이미 하트가 가득 찼어요!' : '하트를 가득 채웁니다.'}</p>
          <button
            onClick={onBuyHeartRefill}
            disabled={heartsFull || gems < heartCost}
            className="bg-[#00C4B5] hover:bg-[#15d8c9] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded-xl transition w-full flex items-center justify-center gap-2"
          >
            <Gem size={16} /> 보석 {heartCost}개
          </button>
        </div>
        <div className={`rounded-3xl p-6 border-2 flex flex-col items-center ${cardClass}`}>
          <Snowflake size={40} className="mb-4 text-[#1cb0f6]" />
          <h3 className={`font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>스트릭 프리즈</h3>
          <p className={`font-bold mb-4 text-center ${textMuted}`}>{streakFreezeAvailable ? '이미 프리즈를 보유 중이에요!' : '하루 결석을 막아줍니다.'}</p>
          <button
            onClick={onBuyStreakFreeze}
            disabled={streakFreezeAvailable || gems < freezeCost}
            className="bg-[#00C4B5] hover:bg-[#15d8c9] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded-xl transition w-full flex items-center justify-center gap-2"
          >
            <Gem size={16} /> 보석 {freezeCost}개
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProfileScreen({ theme = 'light', profileName = '코딩 꿈나무', joinDate, streak = 0, xp = 0, gems = 0 }) {
  const isDark = theme === 'dark';
  const cardClass = isDark ? 'bg-[#2b3a42] border-[#3b4a52]' : 'bg-white border-gray-100 shadow-md';
  const statCardClass = isDark ? 'bg-[#181A20] border-[#2b3a42]' : 'bg-gray-50 border-gray-100';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className="w-full max-w-2xl mx-auto pt-8 px-4 animate-pop">
      <div className={`rounded-3xl p-8 border-2 flex items-center gap-6 mb-8 ${cardClass}`}>
        <div className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl ${isDark ? 'bg-[#181A20]' : 'bg-gray-50'}`}>
          🥚
        </div>
        <div>
          <h1 className={`font-black text-3xl mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>{profileName}</h1>
          <p className={`font-bold ${textMuted}`}>가입일: {joinDate}</p>
        </div>
      </div>
      <h2 className={`text-2xl font-black mb-4 px-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>통계</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className={`rounded-2xl p-6 border-2 ${statCardClass}`}>
          <div className="flex items-center gap-2 text-[#FFB300] font-black text-2xl mb-1">
            <Flame size={24} fill="currentColor" /> {streak}
          </div>
          <div className={`font-bold ${textMuted}`}>연속 학습일</div>
        </div>
        <div className={`rounded-2xl p-6 border-2 ${statCardClass}`}>
          <div className="flex items-center gap-2 text-[#00C4B5] font-black text-2xl mb-1">
            <Trophy size={24} /> {xp}
          </div>
          <div className={`font-bold ${textMuted}`}>총 누적 XP</div>
        </div>
        <div className={`rounded-2xl p-6 border-2 ${statCardClass}`}>
          <div className="flex items-center gap-2 text-[#B96CE8] font-black text-2xl mb-1">
            <Gem size={24} /> {gems}
          </div>
          <div className={`font-bold ${textMuted}`}>보유 보석</div>
        </div>
      </div>
    </div>
  );
}
