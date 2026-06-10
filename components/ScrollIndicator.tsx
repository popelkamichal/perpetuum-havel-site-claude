"use client";

import { useEffect, useState } from "react";

const SEGMENTS = 8;

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const r = 18;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;

  return (
    <>
      {/* Segmenty — vpravo uprostřed */}
      <div className="fixed top-1/2 right-3 -translate-y-1/2 z-[10000] flex flex-col gap-1.5 pointer-events-none">
        {[...Array(SEGMENTS)].map((_, i) => {
          const active = progress >= (i / SEGMENTS) * 100;
          return (
            <div
              key={i}
              className="w-[3px] rounded-full transition-all duration-300"
              style={{
                height: 16,
                background: active ? "#00ac93" : "rgba(255,255,255,0.1)",
                boxShadow: active ? "0 0 6px rgba(0,172,147,0.7)" : "none",
              }}
            />
          );
        })}
      </div>

      {/* Kruh — vpravo dole */}
      <div className="fixed bottom-20 right-3 z-[10000] w-11 h-11 flex items-center justify-center pointer-events-none">
        <svg width="44" height="44" viewBox="0 0 48 48" className="-rotate-90">
          <circle cx="24" cy="24" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2.5" />
          <circle
            cx="24" cy="24" r={r} fill="none"
            stroke="#00ac93" strokeWidth="2.5"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 4px rgba(0,172,147,0.7))", transition: "stroke-dashoffset 0.1s linear" }}
          />
        </svg>
        <span
          className="absolute font-inter font-bold"
          style={{ fontSize: 8, color: "#00ac93" }}
        >
          {Math.round(progress)}%
        </span>
      </div>
    </>
  );
}
