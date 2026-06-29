import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ArticlePageProps {
  tema: string;
  autor: string;
  image: string;
  perex: string;
  children: React.ReactNode;
}

export default function ArticlePage({ tema, autor, image, perex, children }: ArticlePageProps) {
  return (
    <main className="min-h-screen bg-[#080808]">

      <div style={{ background: "rgba(0,0,0,0.85)", borderBottom: "1px solid #1a1a1a" }}>
        <Navbar />
      </div>

      {/* Hero foto — max 50vh na desktopu */}
      <div className="w-full overflow-hidden relative" style={{ maxHeight: "50vh", minHeight: "220px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={tema} className="w-full h-full object-cover" style={{ maxHeight: "50vh" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/10 to-transparent" />
      </div>

      <article className="max-w-2xl mx-auto px-6 pb-20 -mt-16 relative z-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-4 h-px" style={{ backgroundColor: "#00ac93" }} />
          <Link href="/" className="text-[9px] tracking-[0.3em] uppercase font-inter hover:opacity-70 transition-opacity duration-200" style={{ color: "#00ac93" }}>
            ← Zpět
          </Link>
        </div>

        {/* Titulek */}
        <h1 className="text-white font-inter font-bold leading-tight mb-3"
            style={{ fontSize: "clamp(1.75rem, 5vw, 2.75rem)" }}>
          Téma: {tema}
        </h1>

        {/* Autor */}
        <p className="font-inter text-[11px] tracking-[0.2em] uppercase mb-6" style={{ color: "#00ac93" }}>
          {autor}
        </p>

        {/* Perex */}
        <p className="font-inter text-lg md:text-xl leading-relaxed mb-8 text-[#bbb]">
          {perex}
        </p>

        <div className="w-full h-px mb-8" style={{ backgroundColor: "#1a1a1a" }} />

        {/* Tělo */}
        <div className="space-y-5 text-[#888] font-inter text-base md:text-[17px] leading-relaxed">
          {children}
        </div>

        <div className="mt-12 pt-6 border-t border-[#1a1a1a]">
          <Link href="/" className="text-[9px] tracking-[0.3em] uppercase font-inter hover:opacity-70 transition-opacity duration-200" style={{ color: "#00ac93" }}>
            ← Zpět na hlavní stránku
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
