import Link from "next/link";
import Navbar from "@/components/Navbar";
import { members } from "@/lib/prisoners";

function Avatar({ member }: { member: { initials: string; name: string; photo?: string } }) {
  if (member.photo) {
    return (
      <img
        src={`/vezni/${member.photo}`}
        alt={member.name}
        className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0"
        style={{ border: "2px solid #C89A2A" }}
      />
    );
  }
  return (
    <div
      className="w-20 h-20 rounded-full flex items-center justify-center font-bebas text-black text-2xl flex-shrink-0"
      style={{ backgroundColor: "#C89A2A" }}
    >
      {member.initials}
    </div>
  );
}

export default function VezniPage() {
  return (
    <main className="min-h-screen pt-14" style={{ background: "#060606" }}>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#111" }}>
          {members.map((m, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5"
              style={{ background: "#060606" }}
            >
              <Avatar member={m} />
              <div className="min-w-0">
                <p className="text-white font-inter font-bold text-sm leading-snug">
                  {m.name}
                </p>
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
          ))}
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
