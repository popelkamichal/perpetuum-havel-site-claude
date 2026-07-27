"use client";

import { useState, useRef, type TouchEvent } from "react";

interface Member {
  initials: string;
  name: string;
  role: string;
  href?: string;
}

const members: Member[] = [
  { initials: "PB", name: "Petr Boháč",          role: "Námět, scénář a režie",        href: "https://www.narodni-divadlo.cz/cs/profil/petr-bohac-Av4PuxCESv6gxfTq0mGI2w" },
  { initials: "RZ", name: "Roman Zotov-Mikshin", role: "Spolupráce na scénáři",         href: "https://www.narodni-divadlo.cz/cs/profil/roman-zotov-mikshin-KFqQzepjQqaeeWHt78UIAg" },
  { initials: "RV", name: "Radim Vizváry",        role: "Pohybová spolupráce",           href: "https://www.narodni-divadlo.cz/cs/profil/radim-vizvary-1609468" },
  { initials: "PČ", name: "Pavlína Chroňáková",  role: "Scéna a kostýmy",               href: "https://www.narodni-divadlo.cz/cs/profil/pavlina-chronakova-eZF3YRxtQzWKeGDRLFIJLQ" },
  { initials: "MH", name: "Martin Hůla",          role: "Video, hudba a zvukový design", href: "https://www.narodni-divadlo.cz/cs/profil/martin-hula-JAxNGFvTTQOu1NIpeRxxzw" },
  { initials: "FH", name: "Filip Horn",           role: "Světelný design",               href: "https://www.narodni-divadlo.cz/cs/profil/filip-horn-KRPcCcwAR42ONPuf2PjIFg" },
  { initials: "AM", name: "Alexej Morozov",       role: "Novinář, Rusko" },
  { initials: "NK", name: "Natalija Koval",       role: "Aktivistka, Bělorusko" },
  { initials: "ZW", name: "Zhang Wei",            role: "Student, Čína" },
  { initials: "FX", name: "Farid Hosseini",       role: "Právník, Írán" },
  { initials: "MK", name: "Maryam Khalili",       role: "Blogerka, Írán" },
  { initials: "DP", name: "Dmitrij Petrov",       role: "Spisovatel, Rusko" },
  { initials: "LA", name: "Leila Ahmadi",         role: "Novinářka, Írán" },
  { initials: "VS", name: "Viktor Savčenko",      role: "Poslanec, Rusko" },
  { initials: "YR", name: "Yusuf Al-Rashid",     role: "Aktivista, Saúdská Arábie" },
  { initials: "AK", name: "Anna Kowalczyk",       role: "Fotografka, Bělorusko" },
  { initials: "IH", name: "Ibrahim Hassan",       role: "Novinář, Egypt" },
  { initials: "SM", name: "Sofija Melnyk",        role: "Učitelka, Rusko" },
  { initials: "BD", name: "Batyr Dzhaksybekov",  role: "Ekolog, Kazachstán" },
  { initials: "ML", name: "Mei Lin",              role: "Umělkyně, Čína" },
  { initials: "RN", name: "Rustam Nazarov",       role: "Právník, Uzbekistán" },
  { initials: "TB", name: "Tamar Beridze",        role: "Novinářka, Gruzie" },
  { initials: "HM", name: "Hassan Mortazavi",     role: "Básník, Írán" },
  { initials: "EV", name: "Elena Voronova",       role: "Lékařka, Rusko" },
  { initials: "SP", name: "Sang-jun Park",        role: "Student, Severní Korea" },
  { initials: "YD", name: "Yildiz Demir",         role: "Aktivistka, Turecko" },
  { initials: "KZ", name: "Kirill Zaitsev",       role: "Programátor, Bělorusko" },
  { initials: "AD", name: "Amina Diallo",         role: "Novinářka, Eritrea" },
  { initials: "PV", name: "Pavel Hrušov",         role: "Akademik, Rusko" },
  { initials: "SČ", name: "Selin Çelik",          role: "Právnička, Turecko" },
  { initials: "OM", name: "Olena Marchuk",        role: "Učitelka, Krym" },
  { initials: "VB", name: "Vira Bondarenko",      role: "Filmařka, Krym" },
];

const SPACING = 175;

function itemStyle(d: number): { scale: number; opacity: number; zIndex: number } {
  const a = Math.abs(d);
  if (a === 0) return { scale: 1.00, opacity: 1.00, zIndex: 10 };
  if (a === 1) return { scale: 0.62, opacity: 0.75, zIndex: 8 };
  if (a === 2) return { scale: 0.42, opacity: 0.45, zIndex: 6 };
  if (a === 3) return { scale: 0.28, opacity: 0.22, zIndex: 4 };
  return              { scale: 0.18, opacity: 0.08, zIndex: 2 };
}

export default function PrisonersSection({ title = "Současní političtí vězni" }: { title?: string }) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef<number | null>(null);
  const n = members.length;

  const go = (dir: 1 | -1) => setCurrent(i => (i + dir + n) % n);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
    touchStart.current = null;
  };

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Tmavé pozadí */}
      <div className="absolute inset-0" style={{ background: "#060606" }} />

      {/* Bílá mříž */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Vignety — mříž mizí ke krajům */}
      <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: "linear-gradient(to right, #060606, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: "linear-gradient(to left, #060606, transparent)" }} />
      <div className="absolute inset-x-0 top-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, #060606, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, #060606, transparent)" }} />

      {/* Záhlaví */}
      <div className="relative max-w-4xl mx-auto px-4 mb-10" style={{ zIndex: 2 }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-px" style={{ backgroundColor: "#8b1a1a" }} />
          <span className="text-[9px] tracking-[0.35em] uppercase font-inter font-medium" style={{ color: "#8b1a1a" }}>
            {title}
          </span>
          <span className="text-[8px] font-inter tracking-[0.2em] uppercase" style={{ color: "#2a2a2a" }}>
            — fiktivní data
          </span>
        </div>
      </div>

      {/* Karusel */}
      <div
        className="relative overflow-hidden"
        style={{ height: 300 }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {members.map((m, i) => {
            let d = i - current;
            const half = Math.floor(n / 2);
            if (d > half) d -= n;
            if (d < -half) d += n;
            if (Math.abs(d) > 5) return null;

            const { scale, opacity, zIndex } = itemStyle(d);
            const x = d * SPACING;

            return (
              <button
                key={i}
                className="absolute flex flex-col items-center gap-2"
                style={{
                  transform: `translateX(${x}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
                onClick={() => setCurrent(i)}
                aria-label={m.name}
              >
                <div
                  className="w-40 h-40 rounded-full flex items-center justify-center font-bebas text-black text-5xl flex-shrink-0"
                  style={{ backgroundColor: "#C89A2A" }}
                >
                  {m.initials}
                </div>
                <div className="text-center" style={{ width: 160 }}>
                  <p className="text-white font-inter font-bold text-xs uppercase tracking-wider leading-snug">
                    {m.name}
                  </p>
                  <p className="font-inter text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#555" }}>
                    {m.role}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Šipky — pouze desktop */}
        <button
          onClick={() => go(-1)}
          className="hidden md:flex absolute left-8 top-[45%] -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full transition-colors duration-200"
          style={{ border: "1px solid #2a2a2a", color: "#555" }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "#fff"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#555"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "#555"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2a2a"; }}
          aria-label="Předchozí"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => go(1)}
          className="hidden md:flex absolute right-8 top-[45%] -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full transition-colors duration-200"
          style={{ border: "1px solid #2a2a2a", color: "#555" }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "#fff"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#555"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "#555"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2a2a"; }}
          aria-label="Následující"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Počítadlo */}
      <div className="relative flex justify-center mt-4" style={{ zIndex: 2 }}>
        <span className="text-[9px] font-inter tracking-[0.3em] uppercase" style={{ color: "#2a2a2a" }}>
          {current + 1} / {n}
        </span>
      </div>
    </section>
  );
}
