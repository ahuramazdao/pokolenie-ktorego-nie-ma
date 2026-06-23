"use client";

import { useEffect, useRef } from "react";

// Realistic Poland polygon (normalized 0-1)
const poly = [
  [0.02,0.18],[0.05,0.16],[0.08,0.14],[0.12,0.12],[0.16,0.11],
  [0.20,0.09],[0.24,0.08],[0.28,0.07],[0.32,0.06],[0.36,0.05],
  [0.40,0.04],[0.44,0.05],[0.47,0.06],[0.50,0.04],[0.52,0.02],
  [0.54,0.00],[0.55,0.02],[0.56,0.06],[0.58,0.05],[0.60,0.06],
  [0.62,0.08],[0.64,0.07],[0.66,0.06],[0.68,0.05],[0.71,0.06],
  [0.74,0.04],[0.77,0.05],[0.79,0.07],[0.80,0.10],
  [0.82,0.12],[0.84,0.14],[0.86,0.16],[0.88,0.18],[0.90,0.20],
  [0.92,0.22],[0.93,0.25],[0.94,0.28],[0.95,0.31],[0.96,0.34],
  [1.00,0.37],[0.98,0.40],[0.96,0.43],[0.95,0.46],[0.94,0.50],
  [0.93,0.54],[0.92,0.58],[0.90,0.62],[0.88,0.66],[0.87,0.69],
  [0.86,0.72],[0.85,0.75],[0.84,0.78],[0.82,0.80],[0.80,0.82],
  [0.78,0.84],[0.76,0.86],[0.74,0.88],[0.72,0.90],[0.70,0.92],
  [0.68,0.93],[0.65,0.94],[0.62,0.95],[0.60,0.96],[0.57,0.97],
  [0.54,0.98],[0.51,0.99],[0.48,1.00],[0.45,0.99],[0.42,0.98],
  [0.39,0.96],[0.36,0.95],[0.33,0.93],[0.30,0.92],[0.27,0.90],
  [0.24,0.88],[0.22,0.86],[0.20,0.84],[0.18,0.82],[0.16,0.80],
  [0.14,0.78],[0.12,0.80],[0.10,0.82],[0.08,0.84],[0.06,0.82],
  [0.05,0.78],[0.04,0.74],[0.03,0.70],[0.02,0.66],[0.03,0.62],
  [0.04,0.58],[0.05,0.54],[0.04,0.50],[0.03,0.46],[0.02,0.42],
  [0.01,0.38],[0.00,0.34],[0.01,0.30],[0.02,0.26],[0.01,0.22],
  [0.02,0.18],
];

interface Dot {
  bx: number;
  by: number;
  r: number;
  phase: number;
  speed: number;
}

function pointInPoly(px: number, py: number, vs: number[][]): boolean {
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i][0], yi = vs[i][1];
    const xj = vs[j][0], yj = vs[j][1];
    if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) {
      inside = !inside;
    }
  }
  return inside;
}

export default function PolandDotMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let W = 0, H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animId: number;

    const mapOX = 0.42, mapOY = 0.05, mapScale = 0.55;

    function sizeMap() {
      W = canvas!.clientWidth;
      H = canvas!.clientHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildMap();
    }

    function buildMap() {
      dots = [];
      const spacing = Math.max(12, Math.min(18, W / 70));
      const mapW = W * mapScale;
      const mapH = H * 0.9;
      const oX = W * mapOX;
      const oY = H * mapOY;

      for (let gx = 0; gx < mapW; gx += spacing) {
        for (let gy = 0; gy < mapH; gy += spacing) {
          const nx = gx / mapW;
          const ny = gy / mapH;
          if (pointInPoly(nx, ny, poly)) {
            dots.push({
              bx: oX + gx,
              by: oY + gy,
              r: Math.random() * 0.6 + 0.8,
              phase: Math.random() * Math.PI * 2,
              speed: Math.random() * 0.3 + 0.15,
            });
          }
        }
      }
    }

    const t0 = performance.now();
    function frame() {
      ctx!.clearRect(0, 0, W, H);
      const elapsed = (performance.now() - t0) / 1000;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const wave = elapsed * d.speed;
        const dx = Math.sin(wave * 1.7 + d.phase) * 2.5;
        const dy = Math.cos(wave * 1.3 + d.phase * 0.7) * 2.5;
        ctx!.beginPath();
        ctx!.arc(d.bx + dx, d.by + dy, d.r, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(255,255,255,0.7)";
        ctx!.fill();
      }
      animId = requestAnimationFrame(frame);
    }

    sizeMap();
    frame();
    window.addEventListener("resize", sizeMap);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", sizeMap);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
    />
  );
}
