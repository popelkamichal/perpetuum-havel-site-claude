import YoutubeEmbed from "./YoutubeEmbed";

export default function VideoSection() {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* White box around video — matches Canva design */}
        <div className="bg-white p-3">
          <YoutubeEmbed
            videoId="INTERVIEW_VIDEO_ID"
            title="Video rozhovor s Petrem Boháčem – Perpetuum Havel"
          />
        </div>
        <p
          className="mt-3 text-[9px] tracking-[0.35em] uppercase font-inter text-center"
          style={{ color: "#0ECECE" }}
        >
          Video rozhovor s Petrem Boháčem
        </p>
      </div>
    </section>
  );
}
