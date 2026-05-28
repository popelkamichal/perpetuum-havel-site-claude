import YoutubeEmbed from "./YoutubeEmbed";
import Ticker from "./Ticker";

export default function Hero() {
  return (
    <section className="w-full px-4 pb-20 pt-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-[#aaa] font-inter text-xs md:text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Scénická meditace o moci, paměti a svobodě. Inscenace inspirovaná
          odkazem Václava Havla, premiéra v hlavní sezóně Národního divadla.
        </p>

        {/* Video embed — bez pozadí, jen pulsující tlačítko přes foto */}
        <div className="w-full max-w-3xl mx-auto rounded-3xl overflow-hidden">
          <YoutubeEmbed
            videoId="D0_T1T1eQC0"
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
