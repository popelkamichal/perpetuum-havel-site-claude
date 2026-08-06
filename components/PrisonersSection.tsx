"use client";

import { useState, useRef, useEffect, useCallback, type TouchEvent } from "react";

interface Member {
  initials: string;
  name: string;
  role: string;
  photo?: string; // cesta k /vezni/nazev.jpg v public/
}

const members: Member[] = [
  // Rusko
  { initials: "IS", name: "Ivan Safronov",              role: "Novinář, Rusko",             photo: "ivan-safronov.jpg" },
  { initials: "AG", name: "Aleksei Gorinov",            role: "Zastupitel, Rusko",           photo: "aleksei-gorinov.jpg" },
  { initials: "MP", name: "Maria Ponomarenko",          role: "Novinářka, Rusko",            photo: "maria-ponomarenko.jpg" },
  // Bělorusko
  { initials: "VC", name: "Vital Chopik",               role: "Aktivista, Bělorusko",        photo: "vital-chopik.jpg" },
  // Kuba
  { initials: "LO", name: "Luis Manuel Otero Alcántara",role: "Umělec, Kuba",                photo: "luis-otero-alcantara.jpg" },
  { initials: "MC", name: "Maykel Castillo Pérez",      role: "Hudebník, Kuba",              photo: "maykel-castillo.jpg" },
  { initials: "FN", name: "Félix Navarro Rodríguez",   role: "Disident, Kuba",              photo: "felix-navarro.jpg" },
  { initials: "SN", name: "Sayli Navarro Álvarez",     role: "Aktivistka, Kuba",            photo: "sayli-navarro.jpg" },
  { initials: "RP", name: "Roberto Pérez Fonseca",      role: "Aktivista, Kuba",             photo: "roberto-perez-fonseca.jpg" },
  { initials: "LH", name: "Loreto Hernández García",   role: "Aktivista, Kuba",             photo: "loreto-hernandez.jpg" },
  { initials: "DP", name: "Donaida Pérez Paseiro",      role: "Aktivistka, Kuba",            photo: "donaida-perez.jpg" },
  { initials: "JF", name: "José Daniel Ferrer García",  role: "Opoziční vůdce, Kuba",        photo: "jose-daniel-ferrer.jpg" },
  // Hongkong / Čína
  { initials: "JL", name: "Jimmy Lai",                  role: "Novinář, Hongkong",           photo: "jimmy-lai.jpg" },
  { initials: "CH", name: "Chow Hang-tung",             role: "Právnička, Hongkong",         photo: "chow-hang-tung.jpg" },
  { initials: "DJ", name: "Ding Jiaxi",                 role: "Právník, Čína",               photo: "ding-jiaxi.jpg" },
  { initials: "XZ", name: "Xu Zhiyong",                 role: "Akademik, Čína",              photo: "xu-zhiyong.jpg" },
  { initials: "IT", name: "Ilham Tohti",                role: "Ekonom, Čína",                photo: "ilham-tohti.jpg" },
  { initials: "ZZ", name: "Zhang Zhan",                 role: "Novinářka, Čína",             photo: "zhang-zhan.jpg" },
  { initials: "SH", name: "Sophia Huang Xueqin",       role: "Novinářka, Čína",             photo: "sophia-huang-xueqin.jpg" },
  // Turecko
  { initials: "ÇM", name: "Çiğdem Mater",              role: "Dokumentaristka, Turecko",    photo: "cigdem-mater.jpg" },
  { initials: "TK", name: "Tayfun Kahraman",            role: "Urbanista, Turecko",          photo: "tayfun-kahraman.jpg" },
  { initials: "MÖ", name: "Mine Özerden",              role: "Dokumentaristka, Turecko",    photo: "mine-ozerden.jpg" },
  { initials: "OK", name: "Osman Kavala",               role: "Filantrop, Turecko",          photo: "osman-kavala.jpg" },
  { initials: "CA", name: "Can Atalay",                 role: "Právník a poslanec, Turecko", photo: "can-atalay.jpg" },
  // Saúdská Arábie
  { initials: "WA", name: "Waleed Abu al-Khair",       role: "Právník, Saúdská Arábie",     photo: "waleed-abu-al-khair.jpg" },
  // Írán
  { initials: "NM", name: "Narges Mohammadi",           role: "Aktivistka, Írán",            photo: "narges-mohammadi.jpg" },
  { initials: "SM", name: "Sharifeh Mohammadi",         role: "Aktivistka, Írán",            photo: "sharifeh-mohammadi.jpg" },
  { initials: "PA", name: "Pakhshan Azizi",             role: "Aktivistka, Írán",            photo: "pakhshan-azizi.jpg" },
  // Vietnam
  { initials: "CT", name: "Cấn Thị Thêu",              role: "Aktivistka, Vietnam",         photo: "can-thi-theu.jpg" },
  { initials: "ĐB", name: "Đặng Đình Bách",            role: "Ekologický právník, Vietnam", photo: "dang-dinh-bach.jpg" },
  { initials: "HB", name: "Hoàng Đức Binh",            role: "Ekologický aktivista, Vietnam",photo: "hoang-duc-binh.jpg" },
  // Kambodža
  { initials: "TR", name: "Thun Ratha",                 role: "Aktivista, Kambodža",         photo: "thun-ratha.jpg" },
  { initials: "LK", name: "Long Kunthea",               role: "Aktivistka, Kambodža",        photo: "long-kunthea.jpg" },
  { initials: "PK", name: "Phuon Keoraksmey",          role: "Aktivistka, Kambodža",        photo: "phuon-keoraksmey.jpg" },
  { initials: "LC", name: "Ly Chandaravuth",            role: "Aktivista, Kambodža",         photo: "ly-chandaravuth.jpg" },
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

function Avatar({ member, index, brokenPhotos, onBroken }: {
  member: Member;
  index: number;
  brokenPhotos: Set<number>;
  onBroken: (i: number) => void;
}) {
  const showPhoto = member.photo && !brokenPhotos.has(index);

  if (showPhoto) {
    return (
      <img
        src={`/vezni/${member.photo}`}
        alt={member.name}
        className="w-40 h-40 rounded-full object-cover object-top flex-shrink-0"
        style={{ border: "3px solid #C89A2A" }}
        onError={() => onBroken(index)}
        draggable={false}
      />
    );
  }

  return (
    <div
      className="w-40 h-40 rounded-full flex items-center justify-center font-bebas text-black text-4xl flex-shrink-0"
      style={{ backgroundColor: "#C89A2A" }}
    >
      {member.initials}
    </div>
  );
}

export default function PrisonersSection({ title = "Současní političtí vězni" }: { title?: string }) {
  const [current, setCurrent] = useState(0);
  const [brokenPhotos, setBrokenPhotos] = useState<Set<number>>(new Set());
  const touchStart = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = members.length;

  const resetAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrent(i => (i + 1) % n), 3000);
  }, [n]);

  const pauseAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [resetAutoPlay]);

  const go = (dir: 1 | -1) => {
    setCurrent(i => (i + dir + n) % n);
    resetAutoPlay();
  };

  const goTo = (i: number) => {
    setCurrent(i);
    resetAutoPlay();
  };

  const onBroken = (i: number) => setBrokenPhotos(prev => { const s = new Set(prev); s.add(i); return s; });

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
      <div className="absolute inset-0" style={{ background: "#060606" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: "linear-gradient(to right, #060606, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: "linear-gradient(to left, #060606, transparent)" }} />
      <div className="absolute inset-x-0 top-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, #060606, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, #060606, transparent)" }} />

      <div className="relative max-w-4xl mx-auto px-4 mb-10" style={{ zIndex: 2 }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-px" style={{ backgroundColor: "#8b1a1a" }} />
          <span className="text-[9px] tracking-[0.35em] uppercase font-inter font-medium" style={{ color: "#8b1a1a" }}>
            {title}
          </span>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{ height: 300 }}
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resetAutoPlay}
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
                className="absolute flex flex-col items-center gap-3"
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
                onClick={() => goTo(i)}
                aria-label={m.name}
              >
                <Avatar member={m} index={i} brokenPhotos={brokenPhotos} onBroken={onBroken} />
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

      <div className="relative flex justify-center mt-4" style={{ zIndex: 2 }}>
        <span className="text-[9px] font-inter tracking-[0.3em] uppercase" style={{ color: "#2a2a2a" }}>
          {current + 1} / {n}
        </span>
      </div>
    </section>
  );
}
