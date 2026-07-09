import React, { useMemo } from 'react';
import { Trophy, Store, Flame, Gem, Heart, Snowflake, ArrowUp, ArrowDown, Check } from 'lucide-react';
import { LEAGUE_TIERS, PROMOTE_COUNT, DEMOTE_COUNT, BOT_COUNT, getWeekId, getLeagueStandings } from '../lib/league';

export function LeaderboardScreen({ theme = 'light', xp = 0, leagueTier = 0, weeklyXp = 0, profileName = '나', friends = [] }) {
  const isDark = theme === 'dark';
  const tier = LEAGUE_TIERS[leagueTier] || LEAGUE_TIERS[0];
  const weekId = getWeekId();
  const totalParticipants = BOT_COUNT + 1;

  const standings = useMemo(
    () => getLeagueStandings(weekId, leagueTier, weeklyXp, profileName, friends),
    [weekId, leagueTier, weeklyXp, profileName, friends]
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

      <div className={`rounded-3xl border-2 overflow-hidden ${isDark ? 'bg-[#334155] border-[#475569]' : 'bg-white border-gray-100 shadow-md'}`}>
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
                className={`flex items-center gap-3 px-5 py-3 border-b last:border-b-0 ${isDark ? 'border-[#475569]' : 'border-gray-100'}
                  ${row.isUser ? (isDark ? 'bg-[#FFB300]/15' : 'bg-[#FFB300]/10') : (row.isFriend ? (isDark ? 'bg-[#1cb0f6]/15' : 'bg-[#1cb0f6]/10') : '')}`}
              >
                <div className={`w-7 text-center font-black text-sm ${
                  row.rank === 1 ? 'text-[#FFB300]' : isPromoteZone ? 'text-emerald-500' : isDemoteZone ? 'text-red-400' : isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  {row.rank}
                </div>
                <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-xl flex-none">
                  {row.avatar}
                </div>
                <div className={`flex-1 font-bold text-sm truncate ${row.isUser ? (isDark ? 'text-[#FFB300]' : 'text-[#CC8F00]') : row.isFriend ? (isDark ? 'text-[#1cb0f6]' : 'text-[#1899d6]') : isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  {row.isUser ? `${row.name} (나)` : row.isFriend ? `${row.name} (친구)` : row.name}
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

export function StoreScreen({ theme = 'light', xp = 0, gems = 0, hearts = 0, maxHearts = 5, streakFreezeAvailable = false, isPremium = false, premiumExpiryDate = null, onBuyHeartRefill, onBuyStreakFreeze, onTogglePremium, onBuyGemsWithXp }) {
  const isDark = theme === 'dark';
  const [checkoutStep, setCheckoutStep] = React.useState(null); // null | 'confirm' | 'processing'
  const heartCost = 50;
  const freezeCost = 200;
  const heartsFull = hearts >= maxHearts;
  
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardClass = isDark ? 'bg-[#334155] border-[#475569]' : 'bg-white border-gray-100 shadow-md';

  const handleSubscribeClick = () => {
    setCheckoutStep('confirm');
  };

  const handleConfirmSubscribe = () => {
    setCheckoutStep('processing');
    setTimeout(() => {
      onTogglePremium();
      setCheckoutStep(null);
    }, 1500);
  };

  const formattedExpiry = premiumExpiryDate
    ? new Date(premiumExpiryDate).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) 
    : '';

  return (
    <>
      <div className="w-full max-w-2xl mx-auto pt-8 px-4 animate-pop pb-20">
      <div className="bg-[#B96CE8] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 mb-8 shadow-[0_4px_0_0_#9A50C9]">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
            <Store size={32} className="text-white" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-black text-white text-3xl tracking-wide mb-1">상점</h1>
            <p className="text-white/90 font-bold text-sm">보석으로 다양한 아이템을 구매하세요!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white text-[#B96CE8] font-black px-5 py-2.5 rounded-xl shadow-sm text-lg">
          <Gem size={22} fill="currentColor" /> {gems}
        </div>
      </div>
      
      <h2 className={`font-black text-xl mb-4 px-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>보석 충전</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className={`rounded-3xl p-6 border-2 flex flex-col items-center ${cardClass}`}>
          <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mb-4">
            <Gem size={40} className="text-[#B96CE8]" fill="currentColor" />
          </div>
          <h3 className={`font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>XP로 교환하기</h3>
          <p className={`font-bold text-sm mb-4 text-center h-10 ${textMuted}`}>열심히 모은 500 XP를 50 보석으로 교환하세요.</p>
          <button
            onClick={onBuyGemsWithXp}
            disabled={xp < 500}
            className="bg-[#B96CE8] hover:bg-[#9A50C9] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition w-full flex items-center justify-center gap-2 text-lg"
          >
            <span className="font-black text-sm drop-shadow-sm">500 XP</span> → <Gem size={20} fill="currentColor" /> 50
          </button>
        </div>
        <div className={`rounded-3xl p-6 border-2 flex flex-col items-center ${cardClass}`}>
          <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
            <Gem size={40} className="text-emerald-500" fill="currentColor" />
          </div>
          <h3 className={`font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>현금 결제 (테스트)</h3>
          <p className={`font-bold text-sm mb-4 text-center h-10 ${textMuted}`}>₩5,000를 결제하여 500 보석을 충전하세요.</p>
          <button
            onClick={() => setCheckoutStep('cash_test')}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition w-full flex items-center justify-center gap-2 text-lg cursor-pointer"
          >
            ₩5,000 결제하기
          </button>
        </div>
      </div>

      <h2 className={`font-black text-xl mb-4 px-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>아이템</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className={`rounded-3xl p-6 border-2 flex flex-col items-center ${cardClass}`}>
          <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
            {isPremium ? <span className="text-4xl">♾️</span> : <Heart size={40} className="text-[#ff4b4b]" fill="currentColor" />}
          </div>
          <h3 className={`font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>하트 충전</h3>
          <p className={`font-bold text-sm mb-4 text-center h-10 ${textMuted}`}>{isPremium ? '프리미엄 혜택으로 하트가 무제한입니다.' : (heartsFull ? '이미 하트가 가득 찼어요!' : '하트를 가득 채워 계속 학습하세요.')}</p>
          <button
            onClick={onBuyHeartRefill}
            disabled={isPremium || heartsFull || gems < heartCost}
            className="bg-[#FFB300] hover:bg-[#E6A100] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition w-full flex items-center justify-center gap-2 text-lg"
          >
            {isPremium ? '무제한 하트' : <><Gem size={20} fill="currentColor" /> {heartCost}</>}
          </button>
        </div>
        <div className={`rounded-3xl p-6 border-2 flex flex-col items-center ${cardClass}`}>
          <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
            <Snowflake size={40} className="text-[#1cb0f6]" fill="currentColor" />
          </div>
          <h3 className={`font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>스트릭 프리즈</h3>
          <p className={`font-bold text-sm mb-4 text-center h-10 ${textMuted}`}>{streakFreezeAvailable ? '이미 프리즈를 장착하고 있어요!' : '하루 결석해도 불꽃을 지켜줍니다.'}</p>
          <button
            onClick={onBuyStreakFreeze}
            disabled={streakFreezeAvailable || gems < freezeCost}
            className="bg-[#FFB300] hover:bg-[#E6A100] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition w-full flex items-center justify-center gap-2 text-lg"
          >
            <Gem size={20} fill="currentColor" /> {freezeCost}
          </button>
        </div>
      </div>

      <h2 className={`font-black text-xl mb-4 px-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>프리미엄 혜택</h2>
      <div className={`rounded-3xl p-6 border-2 flex items-center gap-6 ${isPremium ? (isDark ? 'border-pink-500 bg-[#334155]' : 'border-pink-400 bg-pink-50') : cardClass}`}>
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center flex-none relative">
          <span className="text-4xl text-white font-black">S</span>
          {isPremium && <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs px-2 py-1 rounded-full font-black border-2 border-white text-yellow-900">PRO</div>}
        </div>
        <div className="flex-1">
          <h3 className={`font-black text-xl mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>Super CodingEgg</h3>
          <p className={`font-bold text-sm mb-3 ${textMuted}`}>무제한 하트, 맞춤형 오답노트, 무제한 스킵 등 강력한 혜택을 누리세요.</p>
          {!isPremium ? (
            <button onClick={handleSubscribeClick} className="bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90 text-white font-black py-2.5 px-6 rounded-xl transition shadow-md cursor-pointer">
              슈퍼 구독하기
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <button onClick={() => { setCheckoutStep('cancel_confirm'); }} className={`font-bold text-sm py-2.5 px-6 rounded-xl transition ${isDark ? 'bg-[#0B1120] text-gray-400 hover:text-gray-200' : 'bg-white text-gray-500 hover:text-gray-800'} border-2 ${isDark ? 'border-[#475569]' : 'border-gray-200'} cursor-pointer`}>
                구독 관리 (활성중)
              </button>
              <span className={`text-sm font-bold ${textMuted}`}>구독 만료일: {formattedExpiry}</span>
            </div>
          )}
        </div>
      </div>
      </div>

      {checkoutStep === 'confirm' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setCheckoutStep(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-pop border-2 border-pink-200" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-black mb-4 text-gray-800">Super CodingEgg 구독</h2>
            <p className="text-gray-600 font-bold mb-6 text-sm">월 ₩9,900에 무제한 혜택을 누리시겠습니까?</p>
            <button onClick={handleConfirmSubscribe} className="bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90 text-white font-black py-3 px-6 rounded-xl transition w-full mb-3 cursor-pointer">
              ₩9,900 결제하기
            </button>
            <button onClick={() => setCheckoutStep(null)} className="text-gray-500 font-bold py-2 w-full hover:text-gray-700 cursor-pointer">
              취소
            </button>
          </div>
        </div>
      )}

      {checkoutStep === 'cancel_confirm' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setCheckoutStep(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-pop" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-black mb-4 text-gray-800">정말 구독을 취소하시겠습니까?</h2>
            <button onClick={() => { onTogglePremium(); setCheckoutStep(null); }} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-black py-3 px-6 rounded-xl transition w-full mb-3 cursor-pointer">
              구독 해지하기
            </button>
            <button onClick={() => setCheckoutStep(null)} className="text-gray-500 font-bold py-2 w-full hover:text-gray-700 cursor-pointer">
              유지하기
            </button>
          </div>
        </div>
      )}

      {checkoutStep === 'processing' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-pop">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 mx-auto mb-4 flex items-center justify-center animate-spin" style={{ animationDuration: '2s' }}>
              <Store size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-black mb-2 text-gray-800">결제 진행 중...</h2>
            <p className="text-gray-500 font-bold mb-4 text-sm">잠시만 기다려주세요.</p>
          </div>
        </div>
      )}

      {checkoutStep === 'cash_test' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setCheckoutStep(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-pop border-2 border-emerald-200" onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Gem size={32} className="text-emerald-500" fill="currentColor" />
            </div>
            <h2 className="text-2xl font-black mb-2 text-gray-800">현금 결제 (준비 중)</h2>
            <p className="text-gray-500 font-bold mb-6 text-sm">현재 결제 모듈이 연동되지 않은 테스트 환경입니다.</p>
            <button onClick={() => setCheckoutStep(null)} className="bg-emerald-500 hover:bg-emerald-600 text-white font-black py-3 px-6 rounded-xl transition w-full cursor-pointer">
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function ProfileScreen({ theme = 'light', profileName = '코딩 꿈나무', joinDate, streak = 0, xp = 0, gems = 0, isPremium = false, wrongAnswers = [], friends = [], claimedAchievements = [], onUpdateProfile, onAddFriend, onResolveWrongAnswer, onStartReview, onClaimAchievement }) {
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = React.useState('stats'); // 'stats' | 'mistakes' | 'friends'
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showFriendModal, setShowFriendModal] = React.useState(false);
  const [editName, setEditName] = React.useState(profileName);
  const [friendName, setFriendName] = React.useState('');

  const cardClass = isDark ? 'bg-[#334155] border-[#475569]' : 'bg-white border-gray-100 shadow-md';
  const statCardClass = isDark ? 'bg-[#0B1120] border-[#334155]' : 'bg-gray-50 border-gray-100';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';

  const unresolvedMistakes = wrongAnswers.filter(a => !a.resolved);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto pt-8 px-4 animate-pop pb-20">
      {/* Profile Header */}
      <div className={`rounded-3xl p-8 border-2 flex flex-col md:flex-row items-center gap-6 mb-6 ${cardClass}`}>
        <div className={`w-28 h-28 rounded-full flex items-center justify-center text-5xl relative ${isDark ? 'bg-[#0B1120]' : 'bg-gray-50'}`}>
          🥚
          {isPremium && (
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-xs px-2 py-1 rounded-full font-black border-2 border-white text-yellow-900 shadow-sm">PRO</div>
          )}
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className={`font-black text-3xl mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>{profileName}</h1>
          <p className={`font-bold text-sm mb-4 ${textMuted}`}>가입일: {joinDate}</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button onClick={() => setShowFriendModal(true)} className={`px-4 py-2 rounded-xl font-bold text-sm border-2 transition hover:opacity-80 ${isDark ? 'bg-[#0B1120] border-[#475569] text-gray-300' : 'bg-gray-50 border-gray-100 text-gray-600'}`}>
              친구 추가하기
            </button>
            <button onClick={() => { setEditName(profileName); setShowEditModal(true); }} className={`px-4 py-2 rounded-xl font-bold text-sm border-2 transition hover:opacity-80 ${isDark ? 'bg-[#0B1120] border-[#475569] text-gray-300' : 'bg-gray-50 border-gray-100 text-gray-600'}`}>
              프로필 수정
            </button>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar">
        <button onClick={() => setActiveTab('stats')} className={`px-5 py-2.5 rounded-full font-black text-sm whitespace-nowrap transition ${activeTab === 'stats' ? 'bg-[#FFB300] text-white shadow-md' : (isDark ? 'bg-[#334155] text-gray-400' : 'bg-gray-100 text-gray-500 hover:bg-gray-200')}`}>
          통계 및 업적
        </button>
        <button onClick={() => setActiveTab('mistakes')} className={`px-5 py-2.5 rounded-full font-black text-sm whitespace-nowrap transition ${activeTab === 'mistakes' ? 'bg-pink-500 text-white shadow-md' : (isDark ? 'bg-[#334155] text-gray-400' : 'bg-gray-100 text-gray-500 hover:bg-gray-200')}`}>
          오답노트 {unresolvedMistakes.length > 0 && <span className="ml-1 bg-white text-pink-500 px-1.5 py-0.5 rounded-full text-xs">{unresolvedMistakes.length}</span>}
        </button>
        <button onClick={() => setActiveTab('friends')} className={`px-5 py-2.5 rounded-full font-black text-sm whitespace-nowrap transition ${activeTab === 'friends' ? 'bg-[#1cb0f6] text-white shadow-md' : (isDark ? 'bg-[#334155] text-gray-400' : 'bg-gray-100 text-gray-500 hover:bg-gray-200')}`}>
          친구 목록
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'stats' && (
        <div className="animate-fade-in">
          <h2 className={`text-2xl font-black mb-4 px-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>통계</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className={`rounded-2xl p-5 border-2 ${statCardClass}`}>
              <div className="flex items-center gap-2 text-[#FFB300] font-black text-2xl mb-2">
                <Flame size={26} fill="currentColor" /> {streak}
              </div>
              <div className={`font-bold text-sm ${textMuted}`}>연속 학습일</div>
            </div>
            <div className={`rounded-2xl p-5 border-2 ${statCardClass}`}>
              <div className="flex items-center gap-2 text-[#FFB300] font-black text-2xl mb-2">
                <Trophy size={26} fill="currentColor" /> {xp}
              </div>
              <div className={`font-bold text-sm ${textMuted}`}>총 누적 XP</div>
            </div>
            <div className={`rounded-2xl p-5 border-2 ${statCardClass}`}>
              <div className="flex items-center gap-2 text-[#B96CE8] font-black text-2xl mb-2">
                <Gem size={26} fill="currentColor" /> {gems}
              </div>
              <div className={`font-bold text-sm ${textMuted}`}>보유 보석</div>
            </div>
          </div>

          <h2 className={`text-2xl font-black mb-4 px-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>업적</h2>
          <div className={`rounded-3xl border-2 ${cardClass} divide-y-2 ${isDark ? 'divide-[#475569]' : 'divide-gray-100'}`}>
            <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="flex items-center gap-5 flex-1 w-full">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-3xl shrink-0">🔥</div>
                <div className="flex-1">
                  <h3 className={`font-black text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>불꽃 전사</h3>
                  <p className={`font-bold text-sm mb-3 ${textMuted}`}>7일 연속 학습을 달성하세요.</p>
                  <div className={`w-full h-3 rounded-full overflow-hidden ${isDark ? 'bg-[#0B1120]' : 'bg-gray-100'}`}>
                    <div className="bg-[#FFB300] h-full" style={{ width: `${Math.min(100, (streak / 7) * 100)}%` }}></div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0 flex justify-center">
                {streak >= 7 && !claimedAchievements.includes('streak_7') && (
                  <button onClick={() => onClaimAchievement('streak_7', 50)} className="w-full md:w-auto bg-[#FFB300] hover:bg-[#E6A100] text-white px-5 py-2.5 rounded-xl font-black text-sm transition shadow-sm">보상 받기 (💎 50)</button>
                )}
                {claimedAchievements.includes('streak_7') && (
                  <div className="px-5 py-2.5 text-[#FFB300] font-black text-sm flex items-center justify-center gap-1"><Check size={18} strokeWidth={3} /> 획득 완료</div>
                )}
              </div>
            </div>
            <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="flex items-center gap-5 flex-1 w-full">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shrink-0 ${xp >= 1000 ? 'bg-teal-100' : 'bg-teal-50 opacity-50 grayscale'}`}>🏆</div>
                <div className="flex-1">
                  <h3 className={`font-black text-lg mb-1 ${xp >= 1000 ? (isDark ? 'text-white' : 'text-gray-800') : (isDark ? 'text-gray-400' : 'text-gray-500')}`}>경험치 마스터</h3>
                  <p className={`font-bold text-sm mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>총 1,000 XP를 획득하세요.</p>
                  <div className={`w-full h-3 rounded-full overflow-hidden ${isDark ? 'bg-[#0B1120]' : 'bg-gray-100'}`}>
                    <div className="bg-[#FFB300] h-full" style={{ width: `${Math.min(100, (xp / 1000) * 100)}%` }}></div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0 flex justify-center">
                {xp >= 1000 && !claimedAchievements.includes('xp_1000') && (
                  <button onClick={() => onClaimAchievement('xp_1000', 100)} className="w-full md:w-auto bg-[#FFB300] hover:bg-[#E6A100] text-white px-5 py-2.5 rounded-xl font-black text-sm transition shadow-sm">보상 받기 (💎 100)</button>
                )}
                {claimedAchievements.includes('xp_1000') && (
                  <div className="px-5 py-2.5 text-[#FFB300] font-black text-sm flex items-center justify-center gap-1"><Check size={18} strokeWidth={3} /> 획득 완료</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'mistakes' && (
        <div className="animate-fade-in">
          {!isPremium ? (
            <div className={`rounded-3xl border-2 p-8 text-center ${cardClass}`}>
              <div className="w-20 h-20 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-3xl mx-auto mb-4">
                🔒
              </div>
              <h2 className={`text-xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>프리미엄 전용 기능</h2>
              <p className={`font-bold text-sm mb-6 ${textMuted}`}>맞춤형 오답노트는 Super CodingEgg 구독자만 이용할 수 있습니다.<br/>상점에서 구독을 활성화하고 오답을 완벽히 복습하세요!</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between px-2 mb-4">
                <h2 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-gray-800'}`}>복습할 문제 ({unresolvedMistakes.length})</h2>
                <button
                  onClick={onStartReview}
                  disabled={unresolvedMistakes.length === 0}
                  className="bg-pink-500 hover:bg-pink-600 disabled:opacity-50 text-white px-4 py-2 rounded-xl font-black text-sm transition shadow-sm"
                >
                  모두 풀기 🚀
                </button>
              </div>

              {unresolvedMistakes.length === 0 ? (
                <div className={`rounded-3xl border-2 p-8 text-center ${cardClass}`}>
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className={`text-lg font-black mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>복습할 문제가 없습니다!</h3>
                  <p className={`font-bold text-sm ${textMuted}`}>모든 오답을 완벽히 이해하셨군요. 대단해요!</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {unresolvedMistakes.map(ans => (
                    <div key={ans.id} className={`rounded-2xl border-2 p-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between ${cardClass}`}>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-black px-2 py-0.5 rounded-md ${isDark ? 'bg-[#0B1120] text-gray-400' : 'bg-gray-100 text-gray-500'}`}>{ans.dateMissed}</span>
                          <span className={`text-xs font-black ${isDark ? 'text-pink-400' : 'text-pink-500'}`}>{ans.questionData.type}</span>
                        </div>
                        <p className={`font-bold text-sm line-clamp-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                          {ans.questionData.question || '코드 작성 문제'}
                        </p>
                      </div>
                      <button
                        onClick={() => onResolveWrongAnswer(ans.id)}
                        className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-black border-2 transition ${isDark ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10' : 'border-emerald-200 text-emerald-600 hover:bg-emerald-50'}`}
                      >
                        완벽히 이해함 ✔️
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}

      {activeTab === 'friends' && (
        <div className="animate-fade-in">
          <div className="flex items-center justify-between px-2 mb-4">
            <h2 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-gray-800'}`}>내 친구 ({friends.length})</h2>
            <button onClick={() => setShowFriendModal(true)} className="bg-[#1cb0f6] hover:bg-[#1899d6] text-white px-4 py-2 rounded-xl font-black text-sm transition shadow-sm">
              친구 추가
            </button>
          </div>
          {friends.length === 0 ? (
            <div className={`rounded-3xl border-2 p-8 text-center ${cardClass}`}>
              <div className="text-4xl mb-4">👋</div>
              <h3 className={`text-lg font-black mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>아직 친구가 없어요</h3>
              <p className={`font-bold text-sm ${textMuted}`}>친구를 추가하고 리더보드에서 함께 경쟁해보세요.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {friends.map((f, i) => (
                <div key={i} className={`rounded-2xl border-2 p-4 flex items-center gap-4 ${cardClass}`}>
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-xl shrink-0">😎</div>
                  <div className="flex-1">
                    <h3 className={`font-black text-lg ${isDark ? 'text-white' : 'text-gray-800'}`}>{f.name}</h3>
                    <p className={`font-bold text-sm ${textMuted}`}>{f.xp} XP</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      </div>

      {/* Profile Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" onClick={() => setShowEditModal(false)}>
          <div className={`w-full max-w-sm rounded-3xl p-6 border-2 animate-pop ${isDark ? 'bg-[#1E293B] border-[#334155]' : 'bg-white border-gray-100 shadow-xl'}`} onClick={(e) => e.stopPropagation()}>
            <h2 className={`text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>프로필 수정</h2>
            <div className="mb-4">
              <label className={`block text-sm font-bold mb-2 ${textMuted}`}>이름 (닉네임)</label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 font-bold focus:outline-none focus:border-[#1cb0f6] transition ${isDark ? 'bg-[#0B1120] border-[#334155] text-white' : 'bg-gray-50 border-gray-200 text-gray-800'}`}
                placeholder="이름을 입력하세요"
              />
            </div>
            <div className="flex gap-2">
              <button onClick={() => setShowEditModal(false)} className={`flex-1 py-3 rounded-xl font-bold transition ${isDark ? 'bg-[#334155] text-white hover:bg-[#475569]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                취소
              </button>
              <button onClick={() => { onUpdateProfile(editName); setShowEditModal(false); }} className="flex-1 py-3 rounded-xl font-bold bg-[#1cb0f6] text-white hover:bg-[#1899d6] transition">
                저장
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Friend Modal */}
      {showFriendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" onClick={() => setShowFriendModal(false)}>
          <div className={`w-full max-w-sm rounded-3xl p-6 border-2 animate-pop ${isDark ? 'bg-[#1E293B] border-[#334155]' : 'bg-white border-gray-100 shadow-xl'}`} onClick={(e) => e.stopPropagation()}>
            <h2 className={`text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>친구 추가</h2>
            <div className="mb-4">
              <label className={`block text-sm font-bold mb-2 ${textMuted}`}>친구 이름 또는 ID</label>
              <input
                type="text"
                value={friendName}
                onChange={(e) => setFriendName(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 font-bold focus:outline-none focus:border-[#1cb0f6] transition ${isDark ? 'bg-[#0B1120] border-[#334155] text-white' : 'bg-gray-50 border-gray-200 text-gray-800'}`}
                placeholder="친구의 이름을 입력하세요"
              />
            </div>
            <div className="flex gap-2">
              <button onClick={() => { setShowFriendModal(false); setFriendName(''); }} className={`flex-1 py-3 rounded-xl font-bold transition ${isDark ? 'bg-[#334155] text-white hover:bg-[#475569]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                취소
              </button>
              <button onClick={() => { if(friendName.trim()){ onAddFriend(friendName); setShowFriendModal(false); setFriendName(''); } }} className="flex-1 py-3 rounded-xl font-bold bg-[#1cb0f6] text-white hover:bg-[#1899d6] transition">
                추가
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
