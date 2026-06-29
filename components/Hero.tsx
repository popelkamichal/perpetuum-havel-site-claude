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
        <div className="hero-video w-full rounded-3xl overflow-hidden relative" style={{ border: "1px solid rgba(255,255,255,0.6)" }}>
          {/* Poloprůhledné pozadí — prosvítá hero foto za ním */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-background-video1.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ opacity: 0.45 }}
          />
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
