import YoutubeEmbed from "./YoutubeEmbed";

type LetterVariant = "outline" | "solid" | "teal";

function TitleLetter({
  char,
  variant,
}: {
  char: string;
  variant: LetterVariant;
}) {
  if (variant === "teal") {
    return (
      <span style={{ color: "#0ECECE", display: "inline-block" }}>{char}</span>
    );
  }
  if (variant === "outline") {
    return (
      <span
        style={{
          WebkitTextStroke: "2px #ffffff",
          color: "transparent",
          display: "inline-block",
        }}
      >
        {char}
      </span>
    );
  }
  return (
    <span style={{ color: "#ffffff", display: "inline-block" }}>{char}</span>
  );
}

export default function Hero() {
  return (
    <section
      className="w-full px-4 pb-20 pt-4 relative overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#080808",
      }}
    >
      {/* Dark overlay over photo */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(8,8,8,0.72)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Big title */}
        <h1
          className="font-bebas leading-[0.88] tracking-tight uppercase mb-8 select-none"
          style={{ fontSize: "clamp(5.5rem, 20vw, 15rem)" }}
        >
          {/* P-E-R-P-E-T-U-U-M */}
          <div>
            <TitleLetter char="P" variant="outline" />
            <TitleLetter char="E" variant="teal" />
            <TitleLetter char="R" variant="outline" />
            <TitleLetter char="P" variant="outline" />
            <TitleLetter char="E" variant="teal" />
            <TitleLetter char="T" variant="solid" />
            <TitleLetter char="U" variant="solid" />
            <TitleLetter char="U" variant="solid" />
            <TitleLetter char="M" variant="solid" />
          </div>
          {/* H-A-V-Ǝ-L */}
          <div>
            <TitleLetter char="H" variant="outline" />
            <TitleLetter char="A" variant="outline" />
            <TitleLetter char="V" variant="outline" />
            {/* Reversed E in teal */}
            <span
              style={{
                color: "#0ECECE",
                display: "inline-block",
                transform: "scaleX(-1)",
              }}
            >
              E
            </span>
            <TitleLetter char="L" variant="solid" />
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-[#888] font-inter text-xs md:text-sm max-w-md mx-auto mb-10 leading-relaxed">
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
