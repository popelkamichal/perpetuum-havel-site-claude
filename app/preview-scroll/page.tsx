"use client";

import { useEffect, useState } from "react";

const TEAL = "#00ac93";
const PROGRESS = 62; // ukázková hodnota

function DemoBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-inter text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: TEAL }}>
        {label}
      </p>
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ height: 200, background: "#0d0d0d", border: "1px solid #1a1a1a" }}
      >
        {children}
        {/* fake page content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-2 rounded" style={{ width: `${60 + i * 5}%`, background: "#fff" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PreviewScroll() {
  const [live, setLive] = useState(0);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setLive(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <main className="min-h-[300vh] bg-[#080808] px-8 py-12">
      <p className="font-inter text-[10px] tracking-[0.4em] uppercase text-white mb-2">
        Scroll indikátor — varianty
      </p>
      <p className="font-inter text-[9px] text-[#444] mb-10 tracking-widest uppercase">
        scrolluj stránku — varianty jsou živé
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">

        {/* A — Horní linka (současná) */}
        <DemoBox label="A — Horní linka + glow">
          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div
              className="h-full"
              style={{ width: `${live}%`, background: TEAL, boxShadow: `0 0 8px rgba(0,172,147,0.8)` }}
            />
          </div>
        </DemoBox>

        {/* B — Svislý pruh vlevo */}
        <DemoBox label="B — Svislý pruh vlevo">
          <div className="absolute top-0 left-0 bottom-0 w-[3px]" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div
              className="w-full"
              style={{ height: `${live}%`, background: TEAL, boxShadow: `0 0 8px rgba(0,172,147,0.8)` }}
            />
          </div>
        </DemoBox>

        {/* C — Kruhový progress vpravo dole */}
        <DemoBox label="C — Kruhový progress">
          {(() => {
            const r = 18;
            const circ = 2 * Math.PI * r;
            const offset = circ - (live / 100) * circ;
            return (
              <div className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" className="-rotate-90">
                  <circle cx="24" cy="24" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2.5" />
                  <circle
                    cx="24" cy="24" r={r} fill="none"
                    stroke={TEAL} strokeWidth="2.5"
                    strokeDasharray={circ}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ filter: "drop-shadow(0 0 4px rgba(0,172,147,0.7))" }}
                  />
                </svg>
                <span className="absolute font-inter text-[8px] font-bold" style={{ color: TEAL }}>
                  {Math.round(live)}%
                </span>
              </div>
            );
          })()}
        </DemoBox>

        {/* D — Segmenty vpravo */}
        <DemoBox label="D — Segmenty vpravo">
          <div className="absolute top-1/2 right-3 -translate-y-1/2 flex flex-col gap-1.5">
            {[...Array(8)].map((_, i) => {
              const threshold = (i / 8) * 100;
              const active = live >= threshold;
              return (
                <div
                  key={i}
                  className="w-[3px] rounded-full transition-all duration-300"
                  style={{
                    height: 16,
                    background: active ? TEAL : "rgba(255,255,255,0.1)",
                    boxShadow: active ? `0 0 6px rgba(0,172,147,0.7)` : "none",
                  }}
                />
              );
            })}
          </div>
        </DemoBox>

      </div>

      {/* spacer pro scrollování */}
      <div className="h-[200vh]" />
    </main>
  );
}
