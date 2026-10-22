/**
 * =========================================================================
 * MOLECULAR / SCIENTIFIC PARTICLE CANVAS
 * =========================================================================
 * Renders a subtle, elegant constellation of molecular nodes and delicate
 * bonds in the background. Designed to be lightweight, respectful of system
 * resources, and responsive to user preferences (prefers-reduced-motion).
 */

(function () {
  'use strict';

  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    // If reduced motion is requested, do not run the animation loop
    canvas.style.display = 'none';
    return;
  }

  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrameId = null;
  let isTabActive = true;

  // Particle configuration
  const particles = [];
  const particleCount = 38; // Elegant and minimal, avoiding clutter
  const maxDistance = 140;   // Distance threshold for molecular bonds

  const colors = [
    'rgba(13, 148, 136, 0.45)', // Teal
    'rgba(16, 185, 129, 0.40)', // Mint Green
    'rgba(56, 189, 248, 0.35)', // Soft Blue
    'rgba(11, 26, 48, 0.25)'    // Deep Navy
  ];

  const mouse = {
    x: -9999,
    y: -9999,
    radius: 120
  };

  class Particle {
    constructor() {
      this.reset();
      // Distribute evenly on initial load
      this.x = Math.random() * width;
      this.y = Math.random() * height;
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 2.2 + 1.2;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.baseAlpha = Math.random() * 0.3 + 0.3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges smoothly
      if (this.x < -10) this.x = width + 10;
      else if (this.x > width + 10) this.x = -10;

      if (this.y < -10) this.y = height + 10;
      else if (this.y > height + 10) this.y = -10;

      // Mouse interactive gentle push
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.hypot(dx, dy);

      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * force * 1.5;
        this.y -= Math.sin(angle) * force * 1.5;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.scale(dpr, dpr);

    // Re-initialize particles if empty
    if (particles.length === 0) {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(13, 148, 136, ${alpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    if (!isTabActive) return;

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    drawLines();

    animationFrameId = requestAnimationFrame(animate);
  }

  // Event Listeners
  window.addEventListener('resize', () => {
    resize();
  }, { passive: true });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isTabActive = false;
      cancelAnimationFrame(animationFrameId);
    } else {
      isTabActive = true;
      animate();
    }
  });

  // Initialize
  resize();
  animate();
})();
