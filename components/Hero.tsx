import YoutubeEmbed from "./YoutubeEmbed";
import Ticker from "./Ticker";

export default function Hero() {
  return (
    <section className="w-full px-6 pb-20 pt-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-[#aaa] font-inter text-xs md:text-sm max-w-md mx-auto mb-7 leading-relaxed">
          Scénická meditace o moci, paměti a svobodě. Inscenace inspirovaná
          odkazem Václava Havla, premiéra v hlavní sezóně Národního divadla.
        </p>

        {/* Premiéra + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
          <div
            className="inline-block px-6 py-3"
            style={{ border: "1px solid rgba(0,172,147,0.35)" }}
          >
            <p className="text-[8px] tracking-[0.45em] uppercase font-inter mb-1" style={{ color: "#00ac93" }}>
              Premiéra
            </p>
            <p className="text-white font-inter font-bold text-sm tracking-[0.15em]">
              15. září 2025
            </p>
          </div>
          <a
            href="#"
            className="font-inter text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 transition-all duration-200 hover:shadow-[0_0_18px_rgba(0,172,147,0.6)]"
            style={{ background: "#00ac93", color: "#000" }}
          >
            → Koupit vstupenky
          </a>
        </div>

        {/* Video embed */}
        <div className="w-full rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.6)" }}>
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
