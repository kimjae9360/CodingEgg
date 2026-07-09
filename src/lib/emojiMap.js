export function getEmojiForTitle(title, courseId, nodeId, index = 0) {
  const t = title.toLowerCase();

  // Helper to pick an emoji based on index to prevent duplicates within a unit
  const pick = (arr) => arr[index % arr.length];

  // Data Analysis (Pandas, Visualization)
  if (t.includes('pandas') || t.includes('데이터프레임') || t.includes('시리즈') || t.includes('정렬') || t.includes('합치기')) return pick(['🐼', '📊', '📉', '📋']);
  if (t.includes('시각화') || t.includes('그래프') || t.includes('matplotlib') || t.includes('산점도')) return pick(['📈', '🎨', '🖌️', '🖼️']);

  // Deep Learning (PyTorch)
  if (t.includes('딥러닝') || t.includes('인공신경망') || t.includes('퍼셉트론')) return pick(['🧠', '🤖', '🦾', '💡']);
  if (t.includes('tensor') || t.includes('텐서')) return pick(['🔢', '🎲', '🧩', '🧱']);
  if (t.includes('파이토치') || t.includes('pytorch')) return pick(['🔥', '🚀', '⚡', '☄️']);
  if (t.includes('dataset') || t.includes('dataloader')) return pick(['🗂️', '📂', '📚', '📦']);
  if (t.includes('활성화') || t.includes('relu') || t.includes('sigmoid')) return pick(['⚡', '💡', '🔌', '🔋']);
  if (t.includes('순전파') || t.includes('역전파') || t.includes('전파')) return pick(['🌊', '〰️', '🔄', '🔁']);
  if (t.includes('모델') || t.includes('model') || t.includes('저장')) return pick(['💾', '💿', '💽', '📁']);
  if (t.includes('옵티마이저') || t.includes('손실') || t.includes('성능 개선') || t.includes('최적화')) return pick(['🛠️', '🔧', '⚙️', '🔨']);
  if (t.includes('과적합') || t.includes('dropout') || t.includes('정규화')) return pick(['🛡️', '✂️', '⚖️', '🚧']);

  // Web Crawling
  if (t.includes('크롤링') || t.includes('crawling') || t.includes('수집')) return pick(['🕷️', '🕸️', '🛒', '🎣']);
  if (t.includes('requests') || t.includes('요청') || t.includes('네트워크')) return pick(['🌐', '📡', '📨', '📞']);
  if (t.includes('beautifulsoup') || t.includes('파싱') || t.includes('html')) return pick(['🥣', '🍲', '🔪', '🔍']);
  if (t.includes('selenium') || t.includes('동적') || t.includes('브라우저')) return pick(['🤖', '🕹️', '👀', '🎮']);
  if (t.includes('페이지') || t.includes('pagination') || t.includes('리스트')) return pick(['📑', '📖', '📜', '🗞️']);
  if (t.includes('매너') || t.includes('sleep') || t.includes('에러')) return pick(['⏳', '💤', '🛑', '🛡️']);

  // LLM & AI Agent (NLP, LangChain, RAG)
  if (t.includes('자연어') || t.includes('언어 모델') || t.includes('nlp')) return pick(['🗣️', '💬', '📖', '🧠']);
  if (t.includes('토큰') || t.includes('token') || t.includes('전처리')) return pick(['🧩', '✂️', '🧱', '📝']);
  if (t.includes('임베딩') || t.includes('embedding') || t.includes('벡터')) return pick(['🔢', '🎯', '📍', '🌌']);
  if (t.includes('트랜스포머') || t.includes('transformer') || t.includes('어텐션')) return pick(['🤖', '⚡', '👀', '🎯']);
  if (t.includes('langchain') || t.includes('랭체인') || t.includes('체인') || t.includes('lcel')) return pick(['🔗', '⛓️', '🚂', '🧩']);
  if (t.includes('프롬프트') || t.includes('prompt')) return pick(['📝', '🗣️', '💡', '⌨️']);
  if (t.includes('파서') || t.includes('parser') || t.includes('형태')) return pick(['🗂️', '📋', '✅', '🔧']);
  if (t.includes('rag') || t.includes('검색') || t.includes('증강') || t.includes('retriever')) return pick(['🐕', '🔍', '📚', '🔎']);
  if (t.includes('분할') || t.includes('split') || t.includes('청크')) return pick(['✂️', '🔪', '🍰', '📏']);
  if (t.includes('에이전트') || t.includes('agent') || t.includes('비서')) return pick(['🕵️‍♂️', '🤖', '🤵', '🦸']);
  if (t.includes('도구') || t.includes('tool')) return pick(['🛠️', '🧰', '🔧', '🔨']);
  if (t.includes('메모리') || t.includes('memory') || t.includes('기억')) return pick(['🧠', '💾', '📼', '📓']);

  // General / Boss
  if (t.includes('보스전') || t.includes('테스트') || t.includes('시험') || t.includes('마스터') || t.includes('클리어')) {
    return pick(['🏆', '🎓', '🏅', '🥇', '👑']);
  }
  if (t.includes('종합')) return pick(['🎓', '📜', '🎒', '📚', '🏫']);

  // Python Keywords
  if (t.includes('print') || t.includes('출력')) return pick(['🖨️', '🖥️', '📺', '📠', '📟']);
  if (t.includes('변수') || t.includes('variable')) return pick(['📦', '🏷️', '📥', '🧰', '🎒']);
  if (t.includes('연산') || t.includes('계산')) return pick(['🧮', '➕', '➖', '✖️', '➗']);
  if (t.includes('문자열') || t.includes('string')) return pick(['📝', '✒️', '🖋️', '✏️', '✍️']);
  if (t.includes('인덱싱') || t.includes('슬라이싱')) return pick(['✂️', '🔪', '🗡️', '📏', '📐']);
  if (t.includes('참과 거짓') || t.includes('boolean') || t.includes('불리언')) return pick(['⚖️', '✅', '❌', '☯️', '☑️']);
  if (t.includes('if') || t.includes('만약') || t.includes('조건')) return pick(['🔀', '🤔', '❓', '🛤️', '🛣️']);
  if (t.includes('else') || t.includes('그렇지 않으면')) return pick(['🚦', '🛑', '⛔', '🚧', '⚠️']);
  if (t.includes('elif')) return pick(['🚥', '🛣️', '🛤️', '🔀', '🔄']);
  if (t.includes('반복') || t.includes('while') || t.includes('for')) return pick(['🔁', '🔄', '🔃', '♻️', '🌀']);
  if (t.includes('range') || t.includes('숫자')) return pick(['🔢', '💯', '🔟', '🔢', '📈']);
  if (t.includes('리스트') || t.includes('list')) return pick(['📋', '🧾', '🛒', '🎒', '🗂️']);
  if (t.includes('튜플') || t.includes('tuple')) return pick(['🔒', '🔐', '🔏', '🛡️', '📦']);
  if (t.includes('딕셔너리') || t.includes('dict')) return pick(['📖', '📕', '📗', '📘', '📙']);
  if (t.includes('집합') || t.includes('set')) return pick(['⭕', ' Venn ', '🌀', '🎯', '🔘']);
  if (t.includes('함수') || t.includes('def')) return pick(['⚙️', '🔧', '🔨', '🛠️', '🪛']);
  if (t.includes('매개변수') || t.includes('args') || t.includes('kwargs')) return pick(['📥', '📨', '📩', '📦', '🛒']);
  if (t.includes('return') || t.includes('반환')) return pick(['📤', '📬', '📦', '🚀', '🎁']);
  if (t.includes('람다') || t.includes('lambda')) return pick(['⚡', '✨', '🔥', '☄️', '💫']);
  if (t.includes('클래스') || t.includes('class') || t.includes('객체')) return pick(['🏗️', '🏭', '🏛️', '🧱', '🏠']);
  if (t.includes('상속')) return pick(['🧬', '👨‍👦', '🌳', '🌱', '🌿']);
  if (t.includes('모듈') || t.includes('import') || t.includes('패키지')) return pick(['🧩', '📦', '🧱', '🔗', '🔌']);
  if (t.includes('예외') || t.includes('에러') || t.includes('try') || t.includes('except')) return pick(['🚨', '🚑', '🚒', '🩹', '🛡️']);
  if (t.includes('파일') || t.includes('file')) return pick(['📁', '📂', '📄', '📃', '📑']);
  if (t.includes('정규표현식') || t.includes('regex')) return pick(['🔎', '🔍', '👁️', '🕵️', '👓']);
  if (t.includes('제너레이터') || t.includes('yield')) return pick(['🔋', '🪫', '🔌', '⚡', '⏳']);
  if (t.includes('데코레이터')) return pick(['🎀', '🎁', '✨', '🎩', '🪄']);
  
  // SQL Keywords
  if (t.includes('select') || t.includes('조회')) return pick(['🔍', '👀', '🔎', '🔦', '🔭']);
  if (t.includes('insert') || t.includes('추가')) return pick(['➕', '📥', '🆕', '⬆️', '✅']);
  if (t.includes('update') || t.includes('수정')) return pick(['✏️', '📝', '✒️', '🔄', '🔧']);
  if (t.includes('delete') || t.includes('삭제')) return pick(['🗑️', '❌', '✂️', '🔥', '💥']);
  if (t.includes('join') || t.includes('조인')) return pick(['🔗', '🤝', '➕', '🖇️', '🧩']);
  if (t.includes('group') || t.includes('그룹')) return pick(['🗂️', '📊', '📦', '📁', '👥']);
  if (t.includes('테이블') || t.includes('table')) return pick(['📊', '🗄️', '📅', '🗓️', '📋']);
  if (t.includes('데이터베이스') || t.includes('database') || t.includes('sql')) return pick(['🗄️', '💾', '💿', ' 서버', '🗃️']);

  // Crawling Keywords
  if (t.includes('크롤링') || t.includes('crawling') || t.includes('수집')) return pick(['🕷️', '🕸️', '🎣', '🧲', '📥']);
  if (t.includes('beautifulsoup') || t.includes('bs4') || t.includes('파싱')) return pick(['🥣', '🍲', '🍽️', '🥢', '🥄']);
  if (t.includes('selenium') || t.includes('셀레니움') || t.includes('동적')) return pick(['🤖', '🦾', '🚗', '🕹️', '🎮']);
  if (t.includes('html') || t.includes('css')) return pick(['🌐', '🌍', '🖥️', '🎨', '🖌️']);
  if (t.includes('요청') || t.includes('requests')) return pick(['📨', '💌', '📡', '📞', '🔌']);

  // ML / Data Keywords
  if (t.includes('pandas') || t.includes('판다스') || t.includes('데이터프레임')) return pick(['🐼', '📊', '📈', '📉', '📋']);
  if (t.includes('머신러닝') || t.includes('ml')) return pick(['🧠', '🤖', '🦾', '🔮', '✨']);
  if (t.includes('예측') || t.includes('모델')) return pick(['🔮', '🎯', '🎲', '🎱', '📈']);
  if (t.includes('데이터') || t.includes('전처리')) return pick(['🧹', '🧼', '🧽', '🚿', '🧺']);

  // Fallback: Use index to pick a unique emoji for the course
  const fallbacks = {
    python: ['🐍', '💻', '💡', '🔥', '✨', '🚀', '🌟', '⚡', '💫', '⭐'],
    sql: ['🐬', '📈', '🔑', '🛡️', '💾', '📋', '🗄️', '📊', '🔍', '⚙️'],
    crawling: ['🕸️', '🌍', '📄', '📥', '👀', '📌', '🕷️', '🔍', '🤖', '🧹'],
    ml: ['📈', '📉', '🧪', '🔬', '🧬', '📊', '🧠', '🤖', '🔮', '⚙️']
  };

  const map = fallbacks[courseId] || fallbacks.python;
  
  // Use index + hash to ensure variety even if multiple fallbacks occur
  let hash = 0;
  if (nodeId) {
    for (let i = 0; i < nodeId.length; i++) {
      hash = nodeId.charCodeAt(i) + ((hash << 5) - hash);
    }
  }
  return map[(Math.abs(hash) + index) % map.length];
}
