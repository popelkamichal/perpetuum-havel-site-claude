import YoutubeEmbed from "./YoutubeEmbed";

interface Article {
  title: string;
  href?: string;
}

interface ContentPairProps {
  article1: Article;
  article2: Article;
  reelId: string;
  reelLabel: string;
  withPhotoBg?: boolean;
  sectionLabel?: string;
}

function ArticleBox({ title, href }: Article) {
  return (
    <a
      href={href || "#"}
      target={href && href !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex-1 bg-white rounded-3xl p-6 flex flex-col justify-between hover:bg-gray-50 transition-colors duration-200 group"
    >
      <p className="text-[#111] font-inter font-semibold text-sm leading-snug">
        {title}
      </p>
      <span className="mt-5 text-[9px] tracking-[0.25em] uppercase font-inter text-[#bbb] group-hover:text-[#0ECECE] transition-colors duration-200">
        Číst článek →
      </span>
    </a>
  );
}

export default function ContentPair({
  article1,
  article2,
  reelId,
  reelLabel,
  withPhotoBg,
  sectionLabel,
}: ContentPairProps) {
  return (
    <section
      className="w-full px-6 py-12 relative"
      style={
        withPhotoBg
          ? {
              backgroundImage: "url('/hero-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#080808",
            }
          : {}
      }
    >
      {withPhotoBg && (
        <div
          className="absolute inset-0"
          style={{ background: "rgba(8,8,8,0.72)" }}
        />
      )}

      <div className="relative z-10 max-w-4xl mx-auto">
        {sectionLabel && (
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ backgroundColor: "#0ECECE" }} />
            <span
              className="text-[9px] tracking-[0.35em] uppercase font-inter font-medium"
              style={{ color: "#0ECECE" }}
            >
              {sectionLabel}
            </span>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {/* Left: 2 stacked article boxes — stretch to reel height */}
          <div className="flex flex-col gap-4">
            <ArticleBox {...article1} />
            <ArticleBox {...article2} />
          </div>

          {/* Right: portrait reel in white rounded box */}
          <div className="flex flex-col">
            <div className="bg-white rounded-3xl overflow-hidden flex-1">
              <YoutubeEmbed videoId={reelId} title={reelLabel} aspect="portrait" />
            </div>
            <p
              className="mt-3 text-[9px] tracking-[0.3em] uppercase font-inter text-center"
              style={{ color: "#0ECECE" }}
            >
              {reelLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
