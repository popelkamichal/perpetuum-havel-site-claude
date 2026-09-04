"use client";

import { useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { members } from "@/lib/prisoners";

function Avatar({ member, size = 80 }: { member: { initials: string; name: string; photo?: string }; size?: number }) {
  if (member.photo) {
    return (
      <img
        src={`/vezni/${member.photo}`}
        alt={member.name}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "top",
          flexShrink: 0,
          border: "2px solid #C89A2A",
        }}
      />
    );
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C89A2A",
        color: "#000",
        fontFamily: "var(--font-bebas), serif",
        fontSize: size * 0.28,
        flexShrink: 0,
      }}
    >
      {member.initials}
    </div>
  );
}

export default function VezniPage() {
  // Seed by day — same prisoner all day, changes at midnight
  const dayIndex = useMemo(() => {
    const daysSinceEpoch = Math.floor(Date.now() / 86400000);
    return daysSinceEpoch % members.length;
  }, []);

  const featured = members[dayIndex];

  return (
    <main className="min-h-screen pt-14" style={{ background: "#060606" }}>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px" style={{ backgroundColor: "#8b1a1a" }} />
          <span className="text-[9px] tracking-[0.35em] uppercase font-inter font-medium" style={{ color: "#8b1a1a" }}>
            Amnesty International
          </span>
        </div>
        <h1 className="font-bebas text-4xl md:text-5xl text-white mb-2 tracking-wide">
          Současní političtí vězni
        </h1>
        <p className="font-inter text-sm mb-12" style={{ color: "#555" }}>
          {members.length} osob&nbsp;·&nbsp;vězni svědomí sledovaní Amnesty International
        </p>

        {/* Vězeň dne */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "#C89A2A" }} />
            <span className="text-[9px] tracking-[0.35em] uppercase font-inter font-medium" style={{ color: "#C89A2A" }}>
              Vězeň dne
            </span>
          </div>
          <div
            style={{
              background: "rgba(200,154,42,0.04)",
              border: "1px solid rgba(200,154,42,0.2)",
              borderTop: "2px solid #C89A2A",
              padding: "1.5rem",
              display: "flex",
              gap: "1.5rem",
              alignItems: "flex-start",
            }}
          >
            <Avatar member={featured} size={100} />
            <div style={{ minWidth: 0 }}>
              <p className="text-white font-inter font-bold text-lg leading-snug mb-1">
                {featured.name}
              </p>
              <p className="font-inter text-[10px] uppercase tracking-widest mb-3" style={{ color: "#C89A2A" }}>
                {featured.role}
              </p>
              {featured.bio && (
                <p className="font-inter text-sm leading-relaxed" style={{ color: "#9a8e80" }}>
                  {featured.bio}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Grid všech vězňů */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#111" }}>
          {members.map((m, i) => {
            const isToday = i === dayIndex;
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-5"
                style={{
                  background: isToday ? "rgba(200,154,42,0.06)" : "#060606",
                  borderLeft: isToday ? "2px solid #C89A2A" : "2px solid transparent",
                }}
              >
                <Avatar member={m} size={80} />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-white font-inter font-bold text-sm leading-snug">
                      {m.name}
                    </p>
                    {isToday && (
                      <span
                        className="font-inter text-[8px] font-bold tracking-widest uppercase px-1.5 py-0.5"
                        style={{ background: "rgba(200,154,42,0.15)", color: "#C89A2A", border: "1px solid rgba(200,154,42,0.3)" }}
                      >
                        dnes
                      </span>
                    )}
                  </div>
                  <p className="font-inter text-[10px] uppercase tracking-widest mt-0.5 mb-2" style={{ color: "#C89A2A" }}>
                    {m.role}
                  </p>
                  {m.bio && (
                    <p className="font-inter text-[11px] leading-relaxed" style={{ color: "#888" }}>
                      {m.bio}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#1a1a1a" }}>
          <Link
            href="/"
            className="font-inter text-[11px] tracking-[0.2em] uppercase hover:text-white transition-colors duration-200"
            style={{ color: "#555" }}
          >
            ← Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </main>
  );
}
