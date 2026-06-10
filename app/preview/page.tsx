"use client";

const VIDEO_ID = "qZKGOPEbhmo";
const THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

function GhostButton() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 rounded-full border-2 border-white/60 animate-ping" />
        <div className="relative w-14 h-14 rounded-full border-2 border-white/90 bg-white/20 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <span className="text-white/70 text-[8px] tracking-[0.3em] uppercase font-inter">
        Přehrát trailer
      </span>
    </div>
  );
}

function VideoBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-inter text-[9px] tracking-[0.35em] uppercase mb-3" style={{ color: "#00ac93" }}>
        {label}
      </p>
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ paddingBottom: "56.25%", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.15)" }}
      >
        {children}
        <GhostButton />
      </div>
    </div>
  );
}

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-8 py-12">
      <p className="font-inter text-[10px] tracking-[0.4em] uppercase text-white mb-10">
        Varianty náhledu v traileru
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* A — Filmový pásek */}
        <VideoBox label="A — Filmový pásek (levý okraj)">
          <div className="absolute top-0 left-0 bottom-0 flex flex-col" style={{ width: "22%" }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex-1 overflow-hidden" style={{ borderBottom: "3px solid #080808" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={THUMB} alt="" className="w-full h-full object-cover" style={{ filter: "grayscale(0.5)", opacity: 0.75 }} />
              </div>
            ))}
          </div>
          {/* fade do černa */}
          <div className="absolute top-0 bottom-0 left-[22%] w-10" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.9), transparent)" }} />
        </VideoBox>

        {/* B — Polaroid */}
        <VideoBox label="B — Polaroid (natočený)">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={THUMB}
            alt=""
            className="absolute object-cover"
            style={{
              top: "12%",
              left: "4%",
              width: "32%",
              aspectRatio: "4/3",
              filter: "grayscale(0.4)",
              padding: "8px 8px 24px",
              background: "white",
              transform: "rotate(-4deg)",
              boxShadow: "0 6px 24px rgba(0,0,0,0.7)",
            }}
          />
        </VideoBox>

        {/* C — Vpravo dole */}
        <VideoBox label="C — Náhled vpravo dole">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={THUMB}
            alt=""
            className="absolute bottom-4 right-4 object-cover rounded-lg"
            style={{
              width: "38%",
              aspectRatio: "16/9",
              filter: "grayscale(0.5)",
              opacity: 0.65,
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          />
        </VideoBox>

        {/* D — Větší roh vlevo nahoře */}
        <VideoBox label="D — Větší roh vlevo nahoře">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={THUMB}
            alt=""
            className="absolute top-4 left-4 object-cover rounded"
            style={{
              width: "36%",
              aspectRatio: "16/9",
              filter: "grayscale(0.5)",
              opacity: 0.65,
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          />
        </VideoBox>

      </div>
    </main>
  );
}
