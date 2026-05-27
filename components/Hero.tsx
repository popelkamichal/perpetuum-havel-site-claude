import YoutubeEmbed from "./YoutubeEmbed";

export default function Hero() {
  return (
    <section className="w-full px-4 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Big title */}
        <h1
          className="font-bebas leading-none tracking-tight uppercase mb-6"
          style={{ fontSize: "clamp(5rem, 18vw, 14rem)" }}
        >
          <div>
            <span className="text-white">PERP</span>
            <span style={{ color: "#0ECECE" }}>E</span>
            <span className="text-white">TUUM</span>
          </div>
          <div>
            <span className="text-white">HAV</span>
            <span
              style={{
                color: "#0ECECE",
                display: "inline-block",
                transform: "scaleX(-1)",
              }}
            >
              E
            </span>
            <span className="text-white">L</span>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 font-inter text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Scénická meditace o moci, paměti a svobodě. Inscenace inspirovaná
          odkazem Václava Havla, premiéra v hlavní sezóně Národního divadla.
        </p>

        {/* Video embed */}
        <div className="w-full">
          <YoutubeEmbed
            videoId="D0_T1T1eQC0"
            title="Perpetuum Havel – trailer k inscenaci"
          />
        </div>

        <p
          className="mt-3 text-xs tracking-[0.25em] uppercase font-inter"
          style={{ color: "#0ECECE" }}
        >
          Trailer k inscenaci
        </p>
      </div>
    </section>
  );
}
