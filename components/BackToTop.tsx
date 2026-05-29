"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Zpět nahoru"
      className="fixed right-5 bottom-8 z-40 flex flex-col items-center gap-2 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      {/* Kroužek se šipkou */}
      <div
        className="w-9 h-9 rounded-full border flex items-center justify-center"
        style={{ borderColor: "rgba(255,255,255,0.5)" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </div>
      {/* Svislý text */}
      <span
        className="font-inter text-[7px] tracking-[0.3em] uppercase"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
          color: "rgba(255,255,255,0.5)",
          letterSpacing: "0.3em",
        }}
      >
        Back to top
      </span>
    </button>
  );
}
