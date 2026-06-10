import YoutubeEmbed from "./YoutubeEmbed";
import Ticker from "./Ticker";

export default function Hero() {
  return (
    <section className="w-full px-6 pb-20 pt-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-[#aaa] font-inter text-xs md:text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Scénická meditace o moci, paměti a svobodě. Inscenace inspirovaná
          odkazem Václava Havla, premiéra v hlavní sezóně Národního divadla.
        </p>

        {/* Video embed */}
        <div className="w-full rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          <YoutubeEmbed
            videoId="qZKGOPEbhmo"
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
