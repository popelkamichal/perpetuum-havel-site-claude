import YoutubeEmbed from "./YoutubeEmbed";

export default function Hero() {
  return (
    <section className="w-full px-4 pb-20 pt-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Big title */}
        <h1
          className="font-bebas leading-[0.88] tracking-tight uppercase mb-8 select-none"
          style={{ fontSize: "clamp(5.5rem, 20vw, 15rem)" }}
        >
          {/* PERP = bílá, E = teal převrácené, TUUM = bílá */}
          <div>
            <span style={{ color: "#ffffff" }}>PERP</span>
            <span style={{ color: "#0ECECE", display: "inline-block", transform: "scaleX(-1)" }}>E</span>
            <span style={{ color: "#ffffff" }}>TUUM</span>
          </div>
          {/* HAV = teal, E = bílé, L = teal */}
          <div>
            <span style={{ color: "#0ECECE" }}>HAV</span>
            <span style={{ color: "#ffffff" }}>E</span>
            <span style={{ color: "#0ECECE" }}>L</span>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-[#aaa] font-inter text-xs md:text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Scénická meditace o moci, paměti a svobodě. Inscenace inspirovaná
          odkazem Václava Havla, premiéra v hlavní sezóně Národního divadla.
        </p>

        {/* Video embed */}
        <div className="w-full max-w-3xl mx-auto">
          <YoutubeEmbed
            videoId="D0_T1T1eQC0"
            title="Perpetuum Havel – trailer k inscenaci"
          />
        </div>

        <p
          className="mt-3 text-[9px] tracking-[0.35em] uppercase font-inter"
          style={{ color: "#0ECECE" }}
        >
          Trailer k inscenaci
        </p>
      </div>
    </section>
  );
}
