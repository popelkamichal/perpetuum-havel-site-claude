import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KontextVznikuPage() {
  return (
    <main className="min-h-screen bg-[#080808]">

      {/* Navbar v pruhu */}
      <div style={{ background: "rgba(0,0,0,0.85)", borderBottom: "1px solid #1a1a1a" }}>
        <Navbar />
      </div>

      {/* Hero foto */}
      <div className="w-full h-64 md:h-96 overflow-hidden relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/stage11/1400/600"
          alt="Perpetuum Havel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/20 to-transparent" />
      </div>

      {/* Obsah */}
      <article className="max-w-2xl mx-auto px-6 pb-20 -mt-12 relative z-10">

        {/* Zpět */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase font-inter mb-8 transition-colors duration-200 hover:opacity-70"
          style={{ color: "#00ac93" }}
        >
          ← Zpět
        </Link>

        {/* Meta */}
        <p className="text-[9px] tracking-[0.3em] uppercase font-inter mb-3" style={{ color: "#00ac93" }}>
          Kontext · Petišková
        </p>

        {/* Titulek */}
        <h1 className="text-white font-inter font-bold text-2xl md:text-3xl leading-snug mb-6">
          Text o kontextu vzniku Perpetuum mobile
        </h1>

        {/* Perex */}
        <p
          className="font-inter text-base italic leading-relaxed mb-8 pl-5 border-l-2 text-[#ccc]"
          style={{ borderColor: "#00ac93" }}
        >
          Jak vznikla inscenace, která spojuje odkaz Václava Havla s otázkami
          současného světa? Dramaturgická zpráva sleduje tvorbu od prvních
          inspiračních setkání přes Avignon až po premiéru v Národním divadle.
        </p>

        {/* Tělo */}
        <div className="space-y-5 text-[#888] font-inter text-sm leading-relaxed">
          <p>
            Inscenace Perpetuum Havel nevznikala jako obvykle — od textu ke scéně.
            Začala gestem: choreograf Roman Zotov-Mikshin a režisér Petr Boháč se
            poprvé setkali na avignonském festivalu, kde oba sledovali stejné
            představení. Po skončení si vyměnili jedinou větu o Václavu Havlovi.
          </p>
          <p>
            Havel jako dramatik, Havel jako vězeň, Havel jako prezident — tři polohy
            jednoho člověka, tři různé způsoby, jak čelit moci. Inscenace se neptá,
            co Havel říkal. Ptá se, co dělal svým tělem: jak seděl na výslechu, jak
            chodil po Hradě, jak gestikuloval při projevu, o němž věděl, že ho nikdo
            nechce slyšet.
          </p>
          <p>
            Zkušební proces trval devět měsíců. Část probíhala v Praze, část
            v rezidenci ve Francii. Scénář se přepisoval čtyřikrát. Z původního
            konceptu zůstal jediný obraz: muž sedí na železné židli a čte dopis,
            který nikdy neodeslal.
          </p>
          <p>
            Výsledná inscenace není životopis. Je to fyzická báseň o tom, co přetrvá,
            když slova selžou.
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1a1a1a]">
          <Link
            href="/"
            className="text-[9px] tracking-[0.3em] uppercase font-inter transition-colors duration-200 hover:opacity-70"
            style={{ color: "#00ac93" }}
          >
            ← Zpět na hlavní stránku
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
