"use client";

import { useEffect, useState } from "react";

const QUOTES = [
  {
    text: "Perpetuum Havel je poctou disidentkám a disidentům včerejška i dneška.",
    source: "naja21.com",
  },
  {
    text: "Režie je naprosto bezchybná – čistá a přesná jako ostří gilotiny.",
    source: "Madinin'Art",
  },
  {
    text: "Roman Zotov-Mikshin tuto pohybovou partituru ztvárňuje s mimořádnou intenzitou.",
    source: "La Terrasse",
  },
  {
    text: "Roman Zotov-Mikshin předvádí výkon, do něhož vkládá celé své bytí.",
    source: "Sceneweb.fr",
  },
];

const INTERVAL = 6000;
const FADE = 600;

export default function Ticker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const hold = setTimeout(() => setVisible(false), INTERVAL - FADE);
    const swap = setTimeout(() => {
      setIndex((i) => (i + 1) % QUOTES.length);
      setVisible(true);
    }, INTERVAL);
    return () => {
      clearTimeout(hold);
      clearTimeout(swap);
    };
  }, [index, paused]);

  const quote = QUOTES[index];

  return (
    <div
      className="w-full py-7 border-t border-b border-[#1a1a1a] my-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Pevná výška podle nejdelší citace — pás nesmí poskakovat při střídání */}
      <div className="max-w-2xl mx-auto px-6 min-h-[104px] sm:min-h-[92px] flex flex-col items-center justify-center text-center">
        <div
          className="transition-opacity ease-in-out"
          style={{ opacity: visible ? 1 : 0, transitionDuration: `${FADE}ms` }}
        >
          {/* Stín drží text čitelný i tam, kde je fotka za pásem světlá */}
          <p
            className="font-montserrat text-[15px] md:text-base leading-relaxed"
            style={{ color: "#ffffff", textShadow: "0 1px 6px rgba(0,0,0,0.85)" }}
          >
            „{quote.text}“
          </p>
          <p
            className="font-montserrat text-[10px] tracking-[0.25em] uppercase font-medium mt-3"
            style={{ color: "#00ac93", textShadow: "0 1px 5px rgba(0,0,0,0.85)" }}
          >
            {quote.source}
          </p>
        </div>
      </div>

      {/* Indikátor pořadí */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {QUOTES.map((q, i) => (
          <button
            key={q.source}
            aria-label={`Citace ${i + 1} z ${QUOTES.length}`}
            onClick={() => {
              setIndex(i);
              setVisible(true);
            }}
            className="w-1.5 h-1.5 rounded-full transition-opacity duration-300"
            style={{ background: "#00ac93", opacity: i === index ? 1 : 0.25 }}
          />
        ))}
      </div>
    </div>
  );
}
