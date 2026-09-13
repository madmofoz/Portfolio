'use client';

import { useRef, useEffect } from 'react';

function hexToRgb(hex) {
  const m = hex.replace('#', '').match(/.{1,2}/g);
  if (!m || m.length < 3) return [0, 0, 0];
  return [parseInt(m[0], 16), parseInt(m[1], 16), parseInt(m[2], 16)];
}

export default function DotGrid({
  dotSize = 4,
  gap = 30,
  baseColor = '#d4d4d8',
  activeColor = '#000000',
  proximity = 100,
  shockStrength = 2,
  // PROPS FISIKA PEGAS:
  stiff = 0.01, // Makin KECIL = makin lambat & elastis balik ke posisinya
  damp = 0.93,   // Makin BESAR (0.90 - 0.96) = makin membal / osilasi goyang
  className = '',
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const baseRgb = hexToRgb(baseColor);
    const activeRgb = hexToRgb(activeColor);

    // Setup Grid Berdasarkan Dimensi Kontainer
    const initGrid = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      const cell = dotSize + gap;
      const cols = Math.floor(rect.width / cell);
      const rows = Math.floor(rect.height / cell);
      const offsetX = (rect.width - cols * cell + gap) / 2;
      const offsetY = (rect.height - rows * cell + gap) / 2;

      const dots = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cx = offsetX + x * cell;
          const cy = offsetY + y * cell;
          dots.push({
            cx, cy,
            x: cx, y: cy,
            vx: 0, vy: 0
          });
        }
      }
      dotsRef.current = dots;
    };

    initGrid();
    window.addEventListener('resize', initGrid);

    // Render Loop + Spring Physics
    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const proxSq = proximity * proximity;

      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i];

        // Hitung jarak ke cursor
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const distSq = dx * dx + dy * dy;

        // Gaya tolak mouse
        if (distSq < proxSq && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / proximity) * shockStrength;
          dot.vx += (dx / dist) * force;
          dot.vy += (dy / dist) * force;
        }

        // Hooke's Law Spring
  dot.vx += (dot.cx - dot.x) * stiff;
  dot.vy += (dot.cy - dot.y) * stiff;
  dot.vx *= damp;
  dot.vy *= damp;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Interpolasi Warna
        let fillColor = baseColor;
        if (distSq < proxSq) {
          const t = 1 - Math.sqrt(distSq) / proximity;
          const r = Math.round(baseRgb[0] + (activeRgb[0] - baseRgb[0]) * t);
          const g = Math.round(baseRgb[1] + (activeRgb[1] - baseRgb[1]) * t);
          const b = Math.round(baseRgb[2] + (activeRgb[2] - baseRgb[2]) * t);
          fillColor = `rgb(${r},${g},${b})`;
        }

        // Gambar Dot Tunggal
        ctx.beginPath();
        ctx.arc(dot.x * dpr, dot.y * dpr, (dotSize / 2) * dpr, 0, Math.PI * 2);
        ctx.fillStyle = fillColor;
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    // Mouse Tracking
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', initGrid);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dotSize, gap, baseColor, activeColor, proximity, shockStrength]);

  return (
    <div ref={containerRef} className={`w-full h-full relative overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}