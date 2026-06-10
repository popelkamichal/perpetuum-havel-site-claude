"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[10000] h-[2px] pointer-events-none">
      <div
        className="h-full transition-none"
        style={{ width: `${progress}%`, background: "#00ac93" }}
      />
    </div>
  );
}
