import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsentControls from "@/components/ConsentControls";

export const metadata: Metadata = {
  title: "Zásady cookies | Perpetuum Havel",
  description:
    "Jaké údaje web Perpetuum Havel ukládá, jaký obsah třetích stran načítá a jak lze souhlas kdykoli změnit.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-din font-bold text-white text-lg mt-10 mb-3">
      {children}
    </h2>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#080808] pt-14">
      <Navbar />

      <article className="max-w-2xl mx-auto px-6 pt-14 pb-20">

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px" style={{ backgroundColor: "#00ac93" }} />
          <Link
            href="/"
            className="text-[9px] tracking-[0.3em] uppercase font-din hover:opacity-70 transition-opacity duration-200"
            style={{ color: "#00ac93" }}
          >
            ← Zpět
          </Link>
        </div>

        <h1
          className="text-white font-din font-bold leading-tight mb-8"
          style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)" }}
        >
          Zásady cookies
        </h1>

        <div className="font-din text-[15px] leading-relaxed text-[#8d8d8d] space-y-4">
          <p>
            Tyto stránky provozuje Národní divadlo jako doprovodný web
            k inscenaci Perpetuum Havel. Snažíme se na nich shromažďovat co
            nejméně údajů — níže je popsáno vše, co se ve vašem prohlížeči
            ukládá a jaký obsah se načítá odjinud.
          </p>

          <H2>Co web ukládá</H2>
          <p>
            Jediný údaj, který web sám ukládá, je vaše volba v liště se
            souhlasem. Ukládá se do úložiště prohlížeče (localStorage) pod
            názvem <code className="text-[#cfcfcf]">cookie-consent</code>, aby
            se vás lišta neptala při každé návštěvě znovu. Zůstává ve vašem
            zařízení, nikam se neodesílá a neumožňuje vás identifikovat.
          </p>
          <p>
            Žádné vlastní cookies web nenastavuje.
          </p>

          <H2>Měření návštěvnosti</H2>
          <p>
            Web v tuto chvíli návštěvnost neměří a nepoužívá žádné reklamní
            systémy. Připravené je měření pomocí služby Google Analytics 4;
            pokud ho zapneme, načte se výhradně poté, co zvolíte „Přijmout
            vše“. Při volbě „Pouze nezbytné“ se nespustí vůbec a odvoláním
            souhlasu se vypne. IP adresa se v něm anonymizuje.
          </p>

          <H2>Obsah třetích stran</H2>
          <p>
            Součástí stránek je vložené video z YouTube a příspěvek
            z Instagramu. Obojí jsou služby provozované jinými společnostmi,
            které při načtení mohou nastavit vlastní cookies a zpracovávat
            údaje podle vlastních pravidel.
          </p>
          <p>
            Proto se nenačítají samy od sebe:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="text-[#cfcfcf]">YouTube</span> — dokud
              nekliknete na tlačítko přehrávání, zobrazuje se pouze náhledový
              obrázek. Přehrávač se načte až po kliknutí.
            </li>
            <li>
              <span className="text-[#cfcfcf]">Instagram</span> — příspěvek se
              načte, jen když v liště zvolíte „Přijmout vše“, nebo když u něj
              kliknete na „Zobrazit příspěvek“. Bez toho se na servery
              Instagramu nic neodesílá.
            </li>
          </ul>
          <p>
            Zvolíte-li „Pouze nezbytné“, vložený obsah zůstane skrytý a web
            funguje beze změny.
          </p>

          <H2>Změna volby</H2>
          <p>
            Souhlas můžete kdykoli změnit nebo odvolat. Odvoláním se lišta
            zobrazí znovu a vložený obsah se přestane načítat.
          </p>

          <ConsentControls />

          <p className="pt-2">
            Uložený údaj můžete také smazat sami — vymazáním dat webu
            v nastavení prohlížeče.
          </p>

          <H2>Kontakt</H2>
          <p>
            Web provozuje{" "}
            <a
              href="https://www.narodni-divadlo.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: "#00ac93" }}
            >
              Národní divadlo
            </a>
            . Informace o zpracování osobních údajů a kontaktní údaje najdete
            na jeho webu.
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1a1a1a]">
          <Link
            href="/"
            className="text-[9px] tracking-[0.3em] uppercase font-din hover:opacity-70 transition-opacity duration-200"
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
