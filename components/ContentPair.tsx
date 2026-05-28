import YoutubeEmbed from "./YoutubeEmbed";
import InstagramEmbed from "./InstagramEmbed";

interface Article {
  title: string;
  href?: string;
}

interface ContentPairProps {
  article1: Article;
  article2: Article;
  /** YouTube video ID — použij buď reelId NEBO instagramUrl */
  reelId?: string;
  /** Přímý odkaz na Instagram Reel — použij buď reelId NEBO instagramUrl */
  instagramUrl?: string;
  reelLabel: string;
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
      <span className="mt-5 text-[9px] tracking-[0.25em] uppercase font-inter text-[#bbb] group-hover:text-[#00ac93] transition-colors duration-200">
        Číst článek →
      </span>
    </a>
  );
}

export default function ContentPair({
  article1,
  article2,
  reelId,
  instagramUrl,
  reelLabel,
  sectionLabel,
}: ContentPairProps) {
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {sectionLabel && (
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ backgroundColor: "#00ac93" }} />
            <span
              className="text-[9px] tracking-[0.35em] uppercase font-inter font-medium"
              style={{ color: "#00ac93" }}
            >
              {sectionLabel}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: 2 stacked article boxes */}
          <div className="flex flex-col gap-4">
            <ArticleBox {...article1} />
            <ArticleBox {...article2} />
          </div>

          {/* Right: reel — na mobilu plná šířka, na desktopu vedle článků */}
          <div className="flex flex-col max-w-sm mx-auto w-full md:max-w-none md:mx-0">
            <div className="bg-white rounded-3xl overflow-hidden flex-1">
              {instagramUrl ? (
                <InstagramEmbed url={instagramUrl} />
              ) : reelId ? (
                <YoutubeEmbed videoId={reelId} title={reelLabel} aspect="portrait" />
              ) : null}
            </div>
            <p
              className="mt-3 text-[9px] tracking-[0.3em] uppercase font-inter text-center"
              style={{ color: "#00ac93" }}
            >
              {reelLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
