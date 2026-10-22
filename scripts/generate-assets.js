const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'assets', 'images');
fs.mkdirSync(imgDir, { recursive: true });

// 1. Favicon SVG
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1A30"/>
      <stop offset="100%" stop-color="#0D9488"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="url(#favGrad)"/>
  <circle cx="32" cy="32" r="22" fill="none" stroke="#10B981" stroke-width="2" stroke-dasharray="4 2" opacity="0.8"/>
  <circle cx="32" cy="18" r="3.5" fill="#6EE7B7"/>
  <circle cx="44" cy="28" r="3" fill="#34D399"/>
  <circle cx="40" cy="44" r="3.5" fill="#14B8A6"/>
  <circle cx="24" cy="44" r="3" fill="#6EE7B7"/>
  <circle cx="20" cy="28" r="3.5" fill="#34D399"/>
  <path d="M32 18 L44 28 L40 44 L24 44 L20 28 Z" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.6"/>
  <text x="32" y="37" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Rx</text>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'favicon.svg'), favicon, 'utf8');

// 2. Editorial Portrait Placeholder SVG
const portraitPlaceholder = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 720" width="600" height="720">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0F7F9"/>
      <stop offset="50%" stop-color="#E6F4F1"/>
      <stop offset="100%" stop-color="#DCEEEA"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="15" cy="15" r="1" fill="#0D9488" opacity="0.15"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="600" height="720" rx="28" fill="url(#bgGrad)"/>
  <rect width="600" height="720" rx="28" fill="url(#grid)"/>

  <!-- Subtle Geometric & Botanical Elements -->
  <g opacity="0.45">
    <!-- Molecular Hexagons -->
    <polygon points="500,80 540,103 540,149 500,172 460,149 460,103" fill="none" stroke="#0D9488" stroke-width="1.5"/>
    <polygon points="500,172 540,195 540,241 500,264 460,241 460,195" fill="none" stroke="#10B981" stroke-width="1.5"/>
    <circle cx="500" cy="80" r="4" fill="#0D9488"/>
    <circle cx="540" cy="103" r="3" fill="#10B981"/>
    <circle cx="460" cy="149" r="3" fill="#0B1A30"/>

    <!-- Botanical leaf arc on bottom left -->
    <path d="M40 680 C 80 580, 120 540, 180 520 C 130 560, 90 620, 60 700 Z" fill="#0D9488" opacity="0.3"/>
    <path d="M90 690 C 140 600, 190 560, 240 550 C 190 590, 150 640, 120 710 Z" fill="#10B981" opacity="0.25"/>
  </g>

  <!-- Center Decorative Frame -->
  <circle cx="300" cy="270" r="160" fill="#FFFFFF" stroke="#0D9488" stroke-width="2" stroke-dasharray="6 6" opacity="0.4"/>
  <circle cx="300" cy="270" r="145" fill="#FFFFFF" opacity="0.95"/>

  <!-- Stylized Academic Silhouette / Figure -->
  <g transform="translate(150, 120)">
    <!-- Head -->
    <circle cx="150" cy="100" r="48" fill="#0B1A30" opacity="0.85"/>
    <!-- Gentle hair contour -->
    <path d="M108 98 C 108 60, 192 60, 192 98 C 192 120, 175 145, 150 148 C 125 145, 108 120, 108 98 Z" fill="#071324"/>
    <!-- Lab Coat / Collar -->
    <path d="M90 220 C 90 160, 120 152, 150 152 C 180 152, 210 160, 210 220 L 235 290 L 65 290 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
    <!-- Stethoscope / Lapel -->
    <path d="M132 154 L 140 220 L 150 240 L 160 220 L 168 154" fill="none" stroke="#0D9488" stroke-width="3" stroke-linecap="round"/>
    <circle cx="150" cy="242" r="5" fill="#10B981"/>
  </g>

  <!-- Camera / Swap indicator badge -->
  <g transform="translate(300, 385)">
    <rect x="-135" y="-18" width="270" height="36" rx="18" fill="#0B1A30" opacity="0.95"/>
    <path d="M-105 -5 h6 l3 -5 h12 l3 5 h6 a3 3 0 0 1 3 3 v12 a3 3 0 0 1 -3 3 h-27 a3 3 0 0 1 -3 -3 v-12 a3 3 0 0 1 3 -3 Z" fill="none" stroke="#6EE7B7" stroke-width="1.8"/>
    <circle cx="-91.5" cy="3" r="4" fill="none" stroke="#6EE7B7" stroke-width="1.8"/>
    <text x="-65" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF" letter-spacing="0.5">REPLACE WITH PORTRAIT</text>
  </g>

  <!-- Editorial Info Card at Bottom -->
  <g transform="translate(45, 465)">
    <rect width="510" height="200" rx="20" fill="#FFFFFF" filter="drop-shadow(0 10px 25px rgba(11,26,48,0.08))"/>
    <rect x="20" y="20" width="6" height="160" rx="3" fill="url(#accentGrad)"/>
    
    <text x="42" y="50" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#0D9488" letter-spacing="1.5">ACADEMIC PROFILE · USJ</text>
    <text x="42" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="#0B1A30">[Her Full Name]</text>
    <text x="42" y="115" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#475569">Third-Year Undergraduate · University of Sri Jayewardenepura</text>
    
    <!-- Subject Pills -->
    <g transform="translate(42, 140)">
      <rect width="84" height="28" rx="14" fill="#ECFDF5"/>
      <text x="42" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="600" fill="#065F46" text-anchor="middle">Zoology</text>

      <rect x="92" width="108" height="28" rx="14" fill="#F0FDFA"/>
      <text x="146" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="600" fill="#0F766E" text-anchor="middle">Microbiology</text>

      <rect x="208" width="94" height="28" rx="14" fill="#EFF6FF"/>
      <text x="255" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="600" fill="#1E40AF" text-anchor="middle">Chemistry</text>

      <rect x="310" width="140" height="28" rx="14" fill="#FEF3C7"/>
      <text x="380" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="600" fill="#92400E" text-anchor="middle">CMCC Target 2028</text>
    </g>
  </g>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'portrait-placeholder.svg'), portraitPlaceholder, 'utf8');

// 3. Microscopy Feature SVG
const microscopySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bgM" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1A30"/>
      <stop offset="100%" stop-color="#09233A"/>
    </linearGradient>
    <radialGradient id="lensGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#34D399" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#0D9488" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="500" rx="24" fill="url(#bgM)"/>
  
  <circle cx="560" cy="250" r="180" fill="url(#lensGlow)"/>
  <circle cx="560" cy="250" r="150" fill="none" stroke="#0D9488" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.6"/>
  
  <!-- Cellular specimen inside lens -->
  <g transform="translate(560, 250)" opacity="0.8">
    <circle cx="-40" cy="-30" r="22" fill="#0D9488" opacity="0.35"/>
    <circle cx="-40" cy="-30" r="8" fill="#34D399"/>
    <circle cx="30" cy="-20" r="28" fill="#0D9488" opacity="0.25"/>
    <circle cx="30" cy="-20" r="10" fill="#6EE7B7"/>
    <circle cx="0" cy="40" r="25" fill="#0D9488" opacity="0.3"/>
    <circle cx="0" cy="40" r="9" fill="#10B981"/>
    <circle cx="-50" cy="35" r="18" fill="#0D9488" opacity="0.2"/>
    <path d="M-40 -30 L 30 -20 L 0 40 L -50 35 Z" fill="none" stroke="#34D399" stroke-width="1" opacity="0.5"/>
    <line x1="-80" y1="100" x2="-20" y2="100" stroke="#FFFFFF" stroke-width="2"/>
    <text x="-50" y="116" font-family="sans-serif" font-size="10" fill="#94A3B8" text-anchor="middle">20 µm</text>
  </g>

  <!-- Microscope Body Left Side -->
  <g transform="translate(180, 80)">
    <rect x="40" y="320" width="160" height="24" rx="6" fill="#1E293B" stroke="#334155" stroke-width="2"/>
    <path d="M60 320 L 100 240 L 140 240 L 180 320 Z" fill="#1E293B"/>
    <rect x="20" y="210" width="160" height="14" rx="3" fill="#334155"/>
    <rect x="70" y="204" width="60" height="6" rx="2" fill="#64748B"/>
    <line x1="50" y1="207" x2="80" y2="207" stroke="#38BDF8" stroke-width="2"/>
    <path d="M140 240 C 220 240, 220 90, 140 90 L 110 90" fill="none" stroke="#334155" stroke-width="28" stroke-linecap="round"/>
    <rect x="80" y="70" width="44" height="100" rx="4" fill="#0F766E" stroke="#14B8A6" stroke-width="2"/>
    <circle cx="102" cy="175" r="18" fill="#1E293B"/>
    <rect x="88" y="178" width="10" height="26" fill="#CBD5E1"/>
    <rect x="104" y="178" width="12" height="30" fill="#F59E0B"/>
    <rect x="86" y="36" width="32" height="35" rx="3" fill="#1E293B"/>
    <circle cx="180" cy="230" r="18" fill="#0D9488"/>
    <circle cx="180" cy="230" r="9" fill="#1E293B"/>
    <ellipse cx="100" cy="295" rx="16" ry="8" fill="#FDE047" opacity="0.9"/>
    <path d="M90 295 L 98 215 L 106 215 L 110 295 Z" fill="#FEF08A" opacity="0.25"/>
  </g>

  <g transform="translate(48, 430)">
    <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#14B8A6" letter-spacing="1.5">MICROSCOPY &amp; OBSERVATION</text>
    <text x="0" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="#F8FAFC">Cellular &amp; Biological Specimen Practical Studies</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'microscopy.svg'), microscopySvg, 'utf8');

// 4. Microbiology Feature SVG
const microbiologySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bgMicro" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#09233A"/>
      <stop offset="100%" stop-color="#063538"/>
    </linearGradient>
    <radialGradient id="agarGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#CCFBF1"/>
      <stop offset="80%" stop-color="#99F6E4"/>
      <stop offset="100%" stop-color="#5EEAD4"/>
    </radialGradient>
  </defs>
  <rect width="800" height="500" rx="24" fill="url(#bgMicro)"/>

  <!-- Petri Dish -->
  <g transform="translate(380, 240)">
    <ellipse cx="0" cy="20" rx="190" ry="140" fill="rgba(0,0,0,0.3)"/>
    <ellipse cx="0" cy="0" rx="180" ry="130" fill="#FFFFFF" opacity="0.15" stroke="#5EEAD4" stroke-width="2"/>
    <ellipse cx="0" cy="5" rx="165" ry="115" fill="url(#agarGrad)" opacity="0.85"/>

    <!-- Quadrant Streaks -->
    <path d="M-110 -20 Q -90 -60, -40 -70 Q -60 -40, -100 -10" fill="none" stroke="#0F766E" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
    <path d="M-100 0 Q -80 -40, -30 -50" fill="none" stroke="#0F766E" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
    <path d="M-25 -55 Q 30 -60, 70 -30 Q 30 -40, -10 -40" fill="none" stroke="#10B981" stroke-width="2.5" opacity="0.85"/>
    <path d="M65 -20 Q 90 20, 60 50" fill="none" stroke="#0D9488" stroke-width="2" stroke-dasharray="3 5"/>
    
    <!-- Colonies -->
    <circle cx="30" cy="50" r="5" fill="#065F46"/>
    <circle cx="10" cy="65" r="4" fill="#065F46"/>
    <circle cx="-20" cy="60" r="5.5" fill="#065F46"/>
    <circle cx="-50" cy="50" r="4.5" fill="#065F46"/>
    <circle cx="0" cy="35" r="4" fill="#047857"/>
    <circle cx="50" cy="40" r="4" fill="#047857"/>
    <ellipse cx="0" cy="-25" rx="150" ry="90" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.35"/>
  </g>

  <!-- Inoculation loop -->
  <g transform="translate(640, 160) rotate(35)">
    <line x1="0" y1="0" x2="0" y2="200" stroke="#94A3B8" stroke-width="5" stroke-linecap="round"/>
    <line x1="0" y1="200" x2="0" y2="260" stroke="#E2E8F0" stroke-width="2"/>
    <circle cx="0" cy="266" r="6" fill="none" stroke="#E2E8F0" stroke-width="2"/>
  </g>

  <g transform="translate(48, 430)">
    <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#34D399" letter-spacing="1.5">MICROBIOLOGY &amp; BIOLOGICAL SCIENCE</text>
    <text x="0" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="#F8FAFC">Aseptic Culturing, Microorganism Studies &amp; Biology</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'microbiology.svg'), microbiologySvg, 'utf8');

// 5. Chemistry Feature SVG
const chemistrySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bgChem" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1A30"/>
      <stop offset="100%" stop-color="#162544"/>
    </linearGradient>
    <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2DD4BF"/>
      <stop offset="100%" stop-color="#0F766E"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="24" fill="url(#bgChem)"/>

  <g opacity="0.25" stroke="#38BDF8" stroke-width="1.5" fill="none">
    <polygon points="550,80 580,97 580,131 550,148 520,131 520,97"/>
    <circle cx="550" cy="114" r="16"/>
    <line x1="580" y1="114" x2="620" y2="114"/>
    <polygon points="650,97 680,114 680,148 650,165 620,148 620,114"/>
  </g>

  <g transform="translate(360, 110)">
    <path d="M-55 210 L 55 210 L 35 120 L -35 120 Z" fill="url(#liquidGrad)" opacity="0.85"/>
    <circle cx="-15" cy="160" r="5" fill="#CCFBF1" opacity="0.7"/>
    <circle cx="20" cy="175" r="4" fill="#CCFBF1" opacity="0.6"/>
    <circle cx="5" cy="140" r="3" fill="#CCFBF1" opacity="0.8"/>
    <circle cx="-25" cy="190" r="6" fill="#CCFBF1" opacity="0.5"/>
    <path d="M-18 20 L -18 70 L -70 215 C -74 225, -66 235, -55 235 L 55 235 C 66 235, 74 225, 70 215 L 18 70 L 18 20 Z" fill="none" stroke="#94A3B8" stroke-width="3"/>
    <rect x="-24" y="14" width="48" height="8" rx="4" fill="none" stroke="#94A3B8" stroke-width="2.5"/>
    <line x1="-45" y1="180" x2="-30" y2="180" stroke="#E2E8F0" stroke-width="2"/>
    <line x1="-40" y1="155" x2="-28" y2="155" stroke="#E2E8F0" stroke-width="1.5"/>
    <line x1="-35" y1="130" x2="-25" y2="130" stroke="#E2E8F0" stroke-width="1.5"/>
    <ellipse cx="0" cy="120" rx="35" ry="6" fill="#5EEAD4" opacity="0.6"/>
  </g>

  <g transform="translate(180, 160)">
    <rect x="-40" y="60" width="80" height="150" rx="6" fill="none" stroke="#64748B" stroke-width="2.5"/>
    <rect x="-38" y="110" width="76" height="98" rx="4" fill="#0284C7" opacity="0.5"/>
    <line x1="-35" y1="130" x2="-20" y2="130" stroke="#FFFFFF" stroke-width="1.5"/>
    <line x1="-35" y1="150" x2="-20" y2="150" stroke="#FFFFFF" stroke-width="1.5"/>
    <line x1="-35" y1="170" x2="-20" y2="170" stroke="#FFFFFF" stroke-width="1.5"/>
  </g>

  <g transform="translate(570, 200)">
    <rect x="-60" y="60" width="120" height="10" rx="2" fill="#475569"/>
    <rect x="-60" y="120" width="120" height="12" rx="2" fill="#334155"/>
    <line x1="-50" y1="70" x2="-50" y2="120" stroke="#334155" stroke-width="4"/>
    <line x1="50" y1="70" x2="50" y2="120" stroke="#334155" stroke-width="4"/>
    <path d="M-35 0 L -35 110 C -35 120, -15 120, -15 110 L -15 0 Z" fill="none" stroke="#94A3B8" stroke-width="2"/>
    <path d="M-33 60 L -33 108 C -33 118, -17 118, -17 108 L -17 60 Z" fill="#F59E0B" opacity="0.7"/>
    <path d="M-10 0 L -10 110 C -10 120, 10 120, 10 110 L 10 0 Z" fill="none" stroke="#94A3B8" stroke-width="2"/>
    <path d="M-8 40 L -8 108 C -8 118, 8 118, 8 108 L 8 40 Z" fill="#10B981" opacity="0.7"/>
    <path d="M15 0 L 15 110 C 15 120, 35 120, 35 110 L 35 0 Z" fill="none" stroke="#94A3B8" stroke-width="2"/>
    <path d="M17 75 L 17 108 C 17 118, 33 118, 33 108 L 33 75 Z" fill="#38BDF8" opacity="0.7"/>
  </g>

  <g transform="translate(48, 430)">
    <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#38BDF8" letter-spacing="1.5">CHEMISTRY &amp; LABORATORY PRINCIPLES</text>
    <text x="0" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="#F8FAFC">Solution Chemistry, Analytical Technique &amp; Reaction Principles</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'chemistry.svg'), chemistrySvg, 'utf8');

// 6. Botanical & Zoology SVG
const botanicalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bgBot" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#062822"/>
      <stop offset="100%" stop-color="#0B1A30"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="24" fill="url(#bgBot)"/>

  <g opacity="0.35" stroke="#34D399" stroke-width="1.5" fill="none">
    <path d="M200 150 Q 250 100, 300 150 Q 250 200, 200 150 Z"/>
    <path d="M300 150 Q 350 100, 400 150 Q 350 200, 300 150 Z"/>
    <path d="M250 200 Q 300 150, 350 200 Q 300 250, 250 200 Z"/>
    <circle cx="250" cy="150" r="4" fill="#6EE7B7"/>
    <circle cx="350" cy="150" r="4" fill="#6EE7B7"/>
    <circle cx="300" cy="200" r="4" fill="#6EE7B7"/>
  </g>

  <g transform="translate(520, 220)" stroke="#10B981" fill="none">
    <path d="M-140 120 C -60 40, 40 -40, 140 -120" stroke-width="4" stroke-linecap="round"/>
    <path d="M-90 85 C -80 50, -60 30, -30 20" stroke-width="2"/>
    <path d="M-50 50 C -40 15, -20 -5, 10 -15" stroke-width="2"/>
    <path d="M-10 15 C 0 -20, 20 -40, 50 -50" stroke-width="2"/>
    <path d="M30 -20 C 40 -55, 60 -75, 90 -85" stroke-width="2"/>
    <path d="M-80 90 C -50 100, -30 120, -20 150" stroke-width="2"/>
    <path d="M-40 55 C -10 65, 10 85, 20 115" stroke-width="2"/>
    <path d="M0 20 C 30 30, 50 50, 60 80" stroke-width="2"/>
    <path d="M40 -15 C 70 -5, 90 15, 100 45" stroke-width="2"/>
  </g>

  <g transform="translate(48, 430)">
    <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#6EE7B7" letter-spacing="1.5">ZOOLOGY &amp; BIOLOGICAL DIVERSITY</text>
    <text x="0" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="#F8FAFC">Cellular Structures, Invertebrate Form &amp; Functional Biology</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'botanical.svg'), botanicalSvg, 'utf8');

// 7. CMCC Badge SVG
const cmccBadge = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="goldBadge" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1A30"/>
      <stop offset="100%" stop-color="#0D9488"/>
    </linearGradient>
  </defs>
  <circle cx="200" cy="200" r="185" fill="#FFFFFF" stroke="#0D9488" stroke-width="3"/>
  <circle cx="200" cy="200" r="170" fill="url(#goldBadge)"/>
  <circle cx="200" cy="200" r="158" fill="none" stroke="#34D399" stroke-width="1.5" stroke-dasharray="4 3"/>

  <!-- Mortar & Pestle Symbol -->
  <g transform="translate(200, 190)">
    <path d="M-50 -10 C -50 45, 50 45, 50 -10 Z" fill="#FFFFFF" opacity="0.95"/>
    <rect x="-55" y="-16" width="110" height="10" rx="4" fill="#6EE7B7"/>
    <rect x="-25" y="42" width="50" height="8" rx="3" fill="#FFFFFF" opacity="0.95"/>
    <path d="M-15 -45 L 25 15 L 35 10 L 0 -50 Z" fill="#34D399"/>
    <text x="0" y="24" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="#0B1A30" text-anchor="middle">Rx</text>
  </g>

  <!-- Institution Title -->
  <text x="200" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#ECFDF5" text-anchor="middle" letter-spacing="1.5">CEYLON MEDICAL COLLEGE COUNCIL</text>
  <text x="200" y="105" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600" fill="#99F6E4" text-anchor="middle" letter-spacing="2">EXTERNAL PHARMACIST</text>

  <!-- Target Badge Ribbon -->
  <g transform="translate(200, 315)">
    <rect x="-110" y="-16" width="220" height="32" rx="16" fill="#0B1A30" stroke="#34D399" stroke-width="1.5"/>
    <text x="0" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">TARGET YEAR: 2028</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'cmcc-badge.svg'), cmccBadge, 'utf8');

// 8. Laboratory Overview SVG
const laboratorySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bgLab" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#08182D"/>
      <stop offset="100%" stop-color="#0B2B3E"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="24" fill="url(#bgLab)"/>
  
  <!-- Bench top line -->
  <rect x="0" y="340" width="800" height="160" fill="#071324"/>
  <line x1="0" y1="340" x2="800" y2="340" stroke="#0D9488" stroke-width="3"/>

  <!-- Analytical Balance -->
  <g transform="translate(180, 240)">
    <rect x="-60" y="50" width="120" height="50" rx="4" fill="#334155" stroke="#475569" stroke-width="2"/>
    <rect x="-50" y="65" width="40" height="20" rx="2" fill="#0F172A"/>
    <text x="-30" y="80" font-family="monospace" font-size="11" fill="#34D399" text-anchor="middle">0.000 g</text>
    <rect x="-55" y="-30" width="110" height="80" rx="4" fill="none" stroke="#94A3B8" stroke-width="2" stroke-dasharray="2 2"/>
    <rect x="-25" y="45" width="50" height="6" fill="#CBD5E1"/>
  </g>

  <!-- Volumetric Glassware and Stand -->
  <g transform="translate(420, 160)">
    <rect x="50" y="160" width="100" height="20" rx="3" fill="#1E293B"/>
    <line x1="60" y1="160" x2="60" y2="-40" stroke="#94A3B8" stroke-width="4"/>
    <!-- Clamp -->
    <rect x="58" y="20" width="30" height="8" rx="2" fill="#475569"/>
    <!-- Burette -->
    <line x1="88" y1="-20" x2="88" y2="120" stroke="#38BDF8" stroke-width="5" opacity="0.8"/>
    <ellipse cx="88" cy="140" rx="20" ry="12" fill="#0D9488" opacity="0.6"/>
  </g>

  <!-- Lab Notebook -->
  <g transform="translate(620, 310) rotate(-6)">
    <rect x="-60" y="-30" width="120" height="60" rx="4" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
    <line x1="-50" y1="-15" x2="40" y2="-15" stroke="#94A3B8" stroke-width="1.5"/>
    <line x1="-50" y1="-5" x2="30" y2="-5" stroke="#94A3B8" stroke-width="1.5"/>
    <line x1="-50" y1="5" x2="45" y2="5" stroke="#94A3B8" stroke-width="1.5"/>
    <line x1="-50" y1="15" x2="10" y2="15" stroke="#94A3B8" stroke-width="1.5"/>
  </g>

  <g transform="translate(48, 430)">
    <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#10B981" letter-spacing="1.5">UNIVERSITY LABORATORY ENVIRONMENT</text>
    <text x="0" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="#F8FAFC">USJ Faculty Practicals, Scientific Rigor &amp; Experimental Safety</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'laboratory.svg'), laboratorySvg, 'utf8');

console.log('Successfully generated all 8 SVG assets in assets/images/!');
