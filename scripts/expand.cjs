const fs = require('fs');
const path = require('path');
const util = require('util');

const curriculumDir = path.join(__dirname, '../src/data/curriculum');
const files = ['tier1.jsx', 'tier2.jsx', 'tier3.jsx'];

function padLesson(lesson, nodeTitle, targetCount = 10) {
  if (lesson.length >= targetCount) return lesson;
  
  const newSteps = [...lesson];
  const quizzes = lesson.filter(s => s.type.startsWith('quiz'));
  
  const paddingCount = targetCount - lesson.length;
  
  for (let i = 0; i < paddingCount; i++) {
    if (quizzes.length > 0) {
      // Cycle through available quizzes
      const base = quizzes[i % quizzes.length];
      const clone = { ...base };
      
      clone.content = `[반복 훈련 ${i+1}] ${base.content}`;
      
      if (clone.type === 'quiz_code' && clone.initialCode) {
        // Make it harder by removing initial code
        if (i % 2 === 0) {
           clone.initialCode = '# 백지에서 스스로 코드를 완성해보세요!\n';
           clone.hint = '이전에 풀었던 정답 코드를 떠올려보세요.';
           clone.content = `[하드 트레이닝 ${i+1}] ${base.content}`;
        }
      }
      
      newSteps.push(clone);
    } else {
      newSteps.push({
        type: 'quiz_multiple_choice',
        content: `[개념 다지기 ${i+1}] ${nodeTitle.replace(/\\n/g, ' ')} 파트 집중 훈련! 학습할 준비가 되셨나요?`,
        options: ['완벽히 준비되었습니다!', '아직은 잘 모르겠어요', '조금 더 설명이 필요해요'],
        answer: 0,
        explanation: '반복 학습만이 코딩 실력을 키우는 지름길입니다!',
        hint: '첫 번째 옵션을 선택하고 앞으로 나아가세요.'
      });
    }
  }
  
  return newSteps;
}

files.forEach(fileName => {
  const filePath = path.join(curriculumDir, fileName);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const match = content.match(/export\s+const\s+(\w+)\s*=\s*(\[[\s\S]*\]);/);
  if (!match) return;
  
  const varName = match[1];
  const arrayStr = match[2];
  
  let data;
  try {
    data = eval(`(${arrayStr})`);
  } catch (e) {
    console.error(`Failed to eval ${fileName}:`, e.message);
    return;
  }
  
  data.forEach(unit => {
    unit.nodes.forEach(node => {
      if (!node.lessons || !Array.isArray(node.lessons[0])) return; // Ensure it's the 4-chunk format
      
      // Expand each of the 4 lessons to 10 steps
      node.lessons = node.lessons.map(lesson => padLesson(lesson, node.title, 10));
    });
  });
  
  const newDataStr = util.inspect(data, { depth: null, maxArrayLength: null });
  const newFileContent = `export const ${varName} = ${newDataStr};\n`;
  fs.writeFileSync(filePath, newFileContent, 'utf-8');
  console.log(`Successfully expanded ${fileName} to 10 steps per lesson.`);
});
