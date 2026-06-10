"use client";

import { useEffect, useRef } from "react";

export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SIZE = 256;
    canvas.width = SIZE;
    canvas.height = SIZE;

    let last = 0;
    let animId: number;
    const INTERVAL = 1000 / 15; // 15 fps — filmový rytmus

    const render = (timestamp: number) => {
      animId = requestAnimationFrame(render);
      if (timestamp - last < INTERVAL) return;
      last = timestamp;

      const imageData = ctx.createImageData(SIZE, SIZE);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 55;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9998,
        opacity: 0.18,
        mixBlendMode: "screen",
      }}
    />
  );
}
