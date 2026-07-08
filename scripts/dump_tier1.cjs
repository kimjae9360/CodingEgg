const fs = require('fs');
const file = fs.readFileSync('src/data/curriculum/tier1.jsx', 'utf8');

// A simple regex approach to find sections and nodes
const sections = file.match(/title:\s*'UNIT[^\]]+\]\s*\}/g);

if (sections) {
  sections.forEach((sec, i) => {
    const titleMatch = sec.match(/title:\s*'([^']+)'/);
    console.log(`\nSection ${i+1}: ${titleMatch ? titleMatch[1] : 'Unknown'}`);
    
    const nodes = sec.match(/id:\s*'node_[^']+',\s*title:\s*'([^']+)'/g);
    if (nodes) {
      nodes.forEach(n => {
        console.log(`  - ${n}`);
      });
    }
  });
}
