const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.cwd(), 'src');

const regexMap = [
  // Gradients
  [/from-\[\#00C4B5\] to-\[\#FFB300\]/gi, 'from-[#FFB300] to-[#FF6B00]'],
  [/from-\[\#00C4B5\] via-\[\#FFB300\]/gi, 'from-[#FFB300] via-[#FF8C00]'],
  
  // Brand Colors
  [/#00C4B5/gi, '#FFB300'], // Cyan -> Yolk
  [/#15d8c9/gi, '#E6A100'], // Hover Cyan -> Dark Yolk
  [/#00A396/gi, '#CC8F00'], // Border Cyan -> Darker Yolk
  
  // Backgrounds (Dark Navy Theme)
  [/#111111/gi, '#0B1120'], // Deepest Navy
  [/#161616/gi, '#1E293B'], // Panel Navy
  [/#181A20/gi, '#0B1120'], // Deepest Navy
  [/#2b3a42/gi, '#334155'], // Light Panel
  [/#3b4a52/gi, '#475569'], // Hover Panel
  [/bg-\[\#222\]/gi, 'bg-[#1E293B]'] // Specific badge bg
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  for (const [regex, newStr] of regexMap) {
    content = content.replace(regex, newStr);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated: ' + filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(directoryPath);
console.log('Color replacement complete.');
