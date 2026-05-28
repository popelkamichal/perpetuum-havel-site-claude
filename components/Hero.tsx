import YoutubeEmbed from "./YoutubeEmbed";
import Ticker from "./Ticker";

export default function Hero() {
  return (
    <section className="w-full px-4 pb-20 pt-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Big title — SVG with full-width black translucent strip */}
        <h1 className="mb-8 select-none" style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)", width: "100vw" }}>
          <div
            className="w-full py-[30px] px-6"
            style={{ background: "rgba(0,0,0,0.8)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/HAVEL-TITLE.svg"
              alt="Perpetuum Havel"
              className="w-full max-w-4xl mx-auto"
              draggable={false}
            />
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-[#aaa] font-inter text-xs md:text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Scénická meditace o moci, paměti a svobodě. Inscenace inspirovaná
          odkazem Václava Havla, premiéra v hlavní sezóně Národního divadla.
        </p>

        {/* Video embed — bílý průhledný box s kulatými rohy */}
        <div className="w-full max-w-3xl mx-auto rounded-3xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.45)" }}>
          <YoutubeEmbed
            videoId="D0_T1T1eQC0"
            title="Perpetuum Havel – trailer k inscenaci"
            variant="ghost"
          />
        </div>

        <p
          className="mt-3 text-[9px] tracking-[0.35em] uppercase font-inter"
          style={{ color: "#0ECECE" }}
        >
          Trailer k inscenaci
        </p>

        {/* Ticker pod videem */}
        <Ticker />
      </div>
    </section>
  );
}
