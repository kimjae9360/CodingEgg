// Local LLM tutor via Ollama — no API key, no cloud cost, runs entirely on
// the developer's/user's own machine.
//
// SETUP (one-time):
//   1. Install Ollama: https://ollama.com
//   2. Pull a 7~8GB-class model, e.g.:  ollama pull llama3
//   3. IMPORTANT — Ollama blocks browser requests by default (CORS). Start
//      it with browser access allowed:
//        macOS/Linux:  OLLAMA_ORIGINS=* ollama serve
//        Windows (PowerShell):  $env:OLLAMA_ORIGINS="*"; ollama serve
//      (If you normally just double-click the Ollama app, quit it first,
//       then run the command above from a terminal instead.)
//   4. Leave Ollama running in the background while using Coding Egg.
//
// If Ollama isn't reachable, the app automatically falls back to the
// built-in rule-based tutor — nothing breaks for users who don't have it.

const OLLAMA_URL = 'http://localhost:11434';
export const OLLAMA_MODEL = 'llama3'; // change to whatever you `ollama pull`-ed (see `ollama list`)

const SYSTEM_PROMPT = `당신은 "에그 튜터"입니다. 코딩 학습 앱 "코딩에그"에서 파이썬을 가르치는 귀엽고 친근한 캐릭터예요.
규칙:
- 항상 한국어로, 짧고 다정하게 답하세요 (3~5문장 이내).
- 학습자가 지금 풀고 있는 문제의 정답을 그대로 알려주지 마세요. 대신 힌트와 질문으로 스스로 생각하게 유도하세요.
- 이론 개념은 쉬운 비유를 들어 설명해주세요.
- 이모지를 가끔 섞어 친근하게 표현하되 과하지 않게 하세요.`;

let availabilityCache = null; // null = unknown, true/false = checked

export async function checkOllamaAvailable(timeoutMs = 1500) {
  if (availabilityCache !== null) return availabilityCache;
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch(`${OLLAMA_URL}/api/tags`, { signal: controller.signal });
    clearTimeout(id);
    availabilityCache = res.ok;
  } catch {
    availabilityCache = false;
  }
  return availabilityCache;
}

// recentHistory: array of { sender: 'user'|'egg', content: string }
// stepContext: short string describing what the learner is currently working on
export async function askOllamaTutor(userMessage, { recentHistory = [], stepContext = '' } = {}) {
  const messages = [
    { role: 'system', content: stepContext ? `${SYSTEM_PROMPT}\n\n현재 학습자가 풀고 있는 문제/이론: ${stepContext}` : SYSTEM_PROMPT },
    ...recentHistory.slice(-6).map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.content })),
    { role: 'user', content: userMessage },
  ];

  const res = await fetch(`${OLLAMA_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: OLLAMA_MODEL, messages, stream: false }),
  });

  if (!res.ok) throw new Error(`Ollama request failed: ${res.status}`);
  const data = await res.json();
  return data?.message?.content?.trim() || null;
}
