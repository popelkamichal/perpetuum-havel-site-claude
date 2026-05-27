import YoutubeEmbed from "./YoutubeEmbed";

const articles = [
  {
    category: "Kontext vzniku",
    title: "Perpetuum Mobile – od Petiškovy předlohy k jevišti Laterny magiky",
    description:
      "Jak se z dětské knížky Ludvíka Petiška staly scénická meditace o moci, paměti a politickém disentu. Cesta materiálu, který hledal svou formu třicet let.",
  },
  {
    category: "Rozhovor",
    title: "Roman Zotov Mikshin: Tělo jako poslední svobodný prostor",
    description:
      "Choreograf a performer Laterna magiky o pohybové partituře inscenace, ruské emigraci a o tom, proč Havel stím dnes naléhavěji než kdy dřív. Pro magazín Foyer.",
  },
  {
    category: "Svědectví",
    title: "Rozhovor s bývalou vězenkyní z Běloruska",
    description:
      "Politické vězenkyně nejsou minulostí. Osobní výpověď ženy, která prošla vězením, a dokonný text o loučících politických vězeňkáních ve střední a Východní Evropě.",
  },
  {
    category: "Esej",
    title: "Václav Havel – dramatik, disident, prezident",
    description:
      "Tři role jedné biografie a jejich nečekané průniky. Proč jsou Havlovy absurdní hry stále aktuálním klíčem ke čtení dnešní politické scény.",
  },
];

function ArticleCard({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#111111] border border-[#1e1e1e] p-5 group cursor-pointer hover:border-[#2a2a2a] transition-colors duration-200">
      <div className="flex justify-between items-start mb-3">
        <span
          className="text-[9px] tracking-[0.3em] uppercase font-inter font-semibold"
          style={{ color: "#0ECECE" }}
        >
          {category}
        </span>
        <span className="text-[#333] group-hover:text-[#0ECECE] transition-colors duration-200 text-sm leading-none">
          ↗
        </span>
      </div>
      <h3 className="text-white font-inter font-bold text-[13px] leading-snug mb-3 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-[#555] font-inter text-[11px] leading-relaxed mb-4">
        {description}
      </p>
      <a
        href="#"
        className="text-[9px] tracking-[0.25em] uppercase font-inter text-[#444] group-hover:text-[#0ECECE] transition-colors duration-200"
      >
        Číst dál →
      </a>
    </div>
  );
}

export default function ArticlesSection() {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px" style={{ backgroundColor: "#0ECECE" }} />
          <span
            className="text-[9px] tracking-[0.35em] uppercase font-inter font-medium"
            style={{ color: "#0ECECE" }}
          >
            Kontext, rozhovory a svědectví
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 md:gap-10 items-start">
          {/* Articles column — cards share border so no gap between them */}
          <div className="flex flex-col">
            {articles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>

          {/* Video column */}
          <div className="sticky top-8">
            <YoutubeEmbed
              videoId="REHEARSAL_VIDEO_ID"
              title="Hraj ze zkoušení – Perpetuum Havel"
              aspect="portrait"
            />
            <p
              className="mt-3 text-[9px] tracking-[0.3em] uppercase font-inter text-center"
              style={{ color: "#0ECECE" }}
            >
              Hraj ze zkoušení
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
