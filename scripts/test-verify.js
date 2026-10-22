const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
console.log('=== STARTING PORTFOLIO VERIFICATION ===');
console.log('Root directory:', rootDir);

// 1. Verify JS files syntax
const jsFiles = ['js/portfolio-data.js', 'js/canvas-particles.js', 'js/main.js'];
jsFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  const code = fs.readFileSync(filePath, 'utf8');
  try {
    new Function(code);
    console.log('✓ JS Syntax OK: ' + file);
  } catch (err) {
    console.error('✗ JS Syntax Error in ' + file + ':', err);
  }
});

// 2. Verify all referenced file paths in index.html
const htmlPath = path.join(rootDir, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const assetRegex = /(?:src|href)="([^"]+\.(?:css|js|svg|png|jpg|jpeg|webp|pdf))"/g;
let match;
const foundAssets = new Set();
while ((match = assetRegex.exec(html)) !== null) {
  const target = match[1];
  if (!target.startsWith('http')) {
    foundAssets.add(target);
  }
}

console.log('\nChecking ' + foundAssets.size + ' local file references from index.html:');
let missing = 0;
foundAssets.forEach(asset => {
  const p = path.join(rootDir, asset);
  if (fs.existsSync(p)) {
    console.log('  ✓ Found: ' + asset);
  } else {
    console.error('  ✗ MISSING: ' + asset);
    missing++;
  }
});

// 3. Verify assets from portfolio-data.js
const portfolioDataPath = path.join(rootDir, 'js/portfolio-data.js');
const portfolioData = fs.readFileSync(portfolioDataPath, 'utf8');
const dataAssetRegex = /"(assets\/[^"]+\.[a-zA-Z0-9]+)"/g;
const dataAssets = new Set();
while ((match = dataAssetRegex.exec(portfolioData)) !== null) {
  dataAssets.add(match[1]);
}

console.log('\nChecking ' + dataAssets.size + ' asset references from portfolio-data.js:');
dataAssets.forEach(asset => {
  const p = path.join(rootDir, asset);
  if (fs.existsSync(p)) {
    console.log('  ✓ Found: ' + asset);
  } else {
    console.error('  ✗ MISSING: ' + asset);
    missing++;
  }
});

// 4. Verify CSS files exist and are readable
const cssFiles = ['css/style.css', 'css/responsive.css'];
cssFiles.forEach(css => {
  const p = path.join(rootDir, css);
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    console.log('✓ CSS File exists: ' + css + ' (' + stat.size + ' bytes)');
  } else {
    console.error('✗ Missing CSS: ' + css);
    missing++;
  }
});

// 5. Verify PDF file validity
const pdfPath = path.join(rootDir, 'assets/docs/cv.pdf');
if (fs.existsSync(pdfPath)) {
  const buf = fs.readFileSync(pdfPath);
  const header = buf.slice(0, 8).toString('utf8');
  if (header.startsWith('%PDF-')) {
    console.log('✓ Valid PDF header confirmed for assets/docs/cv.pdf (' + buf.length + ' bytes)');
  } else {
    console.error('✗ Invalid PDF header in assets/docs/cv.pdf');
    missing++;
  }
} else {
  console.error('✗ Missing assets/docs/cv.pdf');
  missing++;
}

console.log('\n=======================================');
if (missing === 0) {
  console.log('ALL VERIFICATIONS PASSED PERFECTLY! (0 errors)');
} else {
  console.error('VERIFICATION FAILED: ' + missing + ' issues detected.');
}
console.log('=======================================');
