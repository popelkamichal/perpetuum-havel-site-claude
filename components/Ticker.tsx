"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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

const SLIDE = 900;   // ms — příjezd i odjezd
const HOLD = 4600;   // ms — jak dlouho citace stojí a dá se přečíst
const SHADOW = "0 1px 6px rgba(0,0,0,0.85)";

type Phase = "in" | "hold" | "out";

export default function Ticker() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("in");
  const paused = useRef(false);

  useEffect(() => {
    // Kdo má vypnuté animace, dostane citace bez posunu
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (phase === "in") {
      const t = setTimeout(() => setPhase("hold"), reduce ? 0 : SLIDE);
      return () => clearTimeout(t);
    }
    if (phase === "hold") {
      const t = setTimeout(() => {
        if (!paused.current) setPhase("out");
        else setPhase("hold");
      }, HOLD);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setIndex(i => (i + 1) % QUOTES.length);
      setPhase("in");
    }, reduce ? 0 : SLIDE);
    return () => clearTimeout(t);
  }, [phase, index]);

  const goTo = useCallback((i: number) => {
    setIndex(i);
    setPhase("in");
  }, []);

  const q = QUOTES[index];

  // "in" se vykreslí jedním snímkem odsazené, aby měl prohlížeč co animovat
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    if (phase !== "in") return;
    setEntered(false);
    const r = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(r);
  }, [phase, index]);

  const offset = phase === "out" ? "-45%" : phase === "in" && !entered ? "45%" : "0%";
  const opacity = phase === "out" || (phase === "in" && !entered) ? 0 : 1;

  return (
    <div
      className="w-full overflow-hidden py-7 rounded-2xl my-8"
      style={{
        // Tmavý podklad oddělí citace od fotky pod nimi
        background: "rgba(0,0,0,0.15)",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
        border: "1px solid #222",
      }}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="px-6 min-h-[76px] sm:min-h-[58px] flex items-center justify-center">
        <div
          className="text-center"
          style={{
            transform: `translateX(${offset})`,
            opacity,
            transition: `transform ${SLIDE}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${SLIDE}ms ease`,
          }}
        >
          {/* Na širokém displeji se celá citace vejde na jeden řádek */}
          <p
            className="font-din text-[15px] md:text-[17px] leading-relaxed md:whitespace-nowrap"
            style={{ color: "#ffffff", textShadow: SHADOW }}
          >
            „{q.text}“
            <span
              className="font-din text-[10px] tracking-[0.2em] uppercase font-medium md:ml-4 block md:inline"
              style={{ color: "#00ac93", textShadow: SHADOW }}
            >
              {q.source}
            </span>
          </p>
        </div>
      </div>

      {/* Proužky ukazují, kolik času citaci zbývá */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {QUOTES.map((item, i) => (
          <button
            key={item.source}
            onClick={() => goTo(i)}
            aria-label={`Citace ${i + 1} ze ${QUOTES.length}`}
            className="block h-[3px] rounded-full overflow-hidden"
            style={{ width: 26, background: "rgba(0,172,147,0.22)" }}
          >
            <span
              className="block h-full"
              style={{
                background: "#00ac93",
                transformOrigin: "left",
                transform: `scaleX(${i === index ? 1 : 0})`,
                transition:
                  i === index && phase === "hold" ? `transform ${HOLD}ms linear` : "none",
                ...(i === index && phase !== "hold" ? { transform: "scaleX(0)" } : {}),
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
