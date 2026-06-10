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

  return (
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
  );
}
