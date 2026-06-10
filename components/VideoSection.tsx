import YoutubeEmbed from "./YoutubeEmbed";

export default function VideoSection() {
  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <YoutubeEmbed
            videoId="ZAPgtShs3dY"
            title="Video rozhovor s Petrem Boháčem – Perpetuum Havel"
            variant="ghost"
            label="Přehrát rozhovor"
          />
        </div>
        <p
          className="mt-3 text-[9px] tracking-[0.35em] uppercase font-inter text-center"
          style={{ color: "#00ac93" }}
        >
          Video rozhovor s Petrem Boháčem
        </p>
      </div>
    </section>
  );
}
