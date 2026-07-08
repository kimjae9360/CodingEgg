const fs = require('fs');
const path = require('path');
const util = require('util');

const curriculumDir = path.join(__dirname, '../src/data/curriculum');
const files = ['tier1.jsx', 'tier2.jsx', 'tier3.jsx'];

function generateReviewStep(nodeTitle, i) {
  return {
    type: 'quiz_multiple_choice',
    content: `[복습] ${nodeTitle.replace(/\\n/g, ' ')} 파트의 핵심을 잘 이해하셨나요?`,
    options: ['네, 이해했습니다!', '조금 헷갈려요', '아직 어려워요'],
    answer: 0,
    explanation: '훌륭합니다! 듀오링고 스타일의 반복 학습으로 개념을 탄탄하게 다져보세요.',
    hint: '첫 번째 옵션을 선택해보세요.'
  };
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
      const oldLessons = node.lessons;
      if (!oldLessons || oldLessons.length === 0) return;
      if (Array.isArray(oldLessons[0])) return; // Already migrated
      
      const newLessons = [[], [], [], []];
      
      if (oldLessons.length === 1) {
        newLessons[0].push(oldLessons[0]);
        newLessons[1].push(generateReviewStep(node.title, 1));
        newLessons[2].push(generateReviewStep(node.title, 2));
        newLessons[3].push(generateReviewStep(node.title, 3));
      } else if (oldLessons.length === 2) {
        newLessons[0].push(oldLessons[0]);
        newLessons[1].push(oldLessons[1]);
        newLessons[2].push(generateReviewStep(node.title, 2));
        newLessons[3].push(generateReviewStep(node.title, 3));
      } else if (oldLessons.length === 3) {
        newLessons[0].push(oldLessons[0]);
        newLessons[1].push(oldLessons[1]);
        newLessons[2].push(oldLessons[2]);
        newLessons[3].push(generateReviewStep(node.title, 3));
      } else if (oldLessons.length === 4) {
        newLessons[0].push(oldLessons[0]);
        newLessons[1].push(oldLessons[1]);
        newLessons[2].push(oldLessons[2]);
        newLessons[3].push(oldLessons[3]);
      } else {
        newLessons[0].push(oldLessons[0], oldLessons[1]);
        newLessons[1].push(oldLessons[2]);
        if (oldLessons.length > 3) newLessons[1].push(oldLessons[3]);
        if (oldLessons.length > 4) newLessons[2].push(oldLessons[4]);
        else newLessons[2].push(generateReviewStep(node.title, 2));
        
        for (let i = 5; i < oldLessons.length; i++) {
          newLessons[2].push(oldLessons[i]);
        }
        newLessons[3].push(generateReviewStep(node.title, 3));
      }
      
      node.lessons = newLessons;
    });
  });
  
  const newDataStr = util.inspect(data, { depth: null, maxArrayLength: null });
  const newFileContent = `export const ${varName} = ${newDataStr};\n`;
  fs.writeFileSync(filePath, newFileContent, 'utf-8');
  console.log(`Successfully migrated ${fileName}`);
});
