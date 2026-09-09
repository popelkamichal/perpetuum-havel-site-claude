import YoutubeEmbed from "./YoutubeEmbed";
import Ticker from "./Ticker";

export default function Hero() {
  return (
    <section className="w-full px-6 pb-20 pt-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-[#aaa] font-din text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          Jedna cela a politický vězeň jako symbol vzdoru. Na motivy jediné
          předlohy pro pohybové divadlo z pera Václava Havla.
        </p>

        {/* Video embed */}
        <div className="hero-video w-full rounded-3xl overflow-hidden relative" style={{ border: "1px solid rgba(255,255,255,0.6)" }}>
          <YoutubeEmbed
            videoId="FMct6jwJaxY"
            title="Perpetuum Havel – trailer k inscenaci"
            variant="ghost"
          />
        </div>

        {/* Ticker pod videem */}
        <Ticker />
      </div>
    </section>
  );
}
