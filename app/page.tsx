import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentPair from "@/components/ContentPair";
import VideoSection from "@/components/VideoSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">

      {/* ── FOTO POZADÍ ── pokrývá Navbar + Hero + ContentPair1, plynule přechází do černé */}
      <div
        className="relative"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundColor: "#080808",
        }}
      >
        {/* Gradient overlay: průhledný nahoře → plná černá dole */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.82) 72%, rgba(8,8,8,0.97) 90%, #080808 100%)",
          }}
        />

        <div className="relative z-10">
          <Navbar />
          <Hero />

          {/* Pair 1 — Reel z Avignonu, na foto pozadí */}
          <ContentPair
            sectionLabel="Kontext, rozhovory a svědectví"
            article1={{
              title: "Text o kontextu vzniku Perpetuum mobile (Petišková)",
              href: "#",
            }}
            article2={{
              title: "Text: Rozhovor s Romanem Zotovem Mikshinem (z Foyer)",
              href: "#",
            }}
            reelId="AVIGNON_REEL_ID"
            reelLabel="Reel z Avignonu"
          />
        </div>
      </div>

      {/* ── ČERNÉ POZADÍ ── zbytek stránky */}
      <div className="w-full border-t border-[#111]" />
      <VideoSection />
      <div className="w-full border-t border-[#111]" />

      {/* Pair 2 — Reel ze zkoušení */}
      <ContentPair
        article1={{
          title:
            "Text: rozhovor s bývalou vězenkyní z Běloruska / odborný text na téma politických vězňů současnosti",
          href: "#",
        }}
        article2={{
          title: "Text: Václav Havel jako dramatik, disident a prezident",
          href: "#",
        }}
        reelId="REHEARSAL_VIDEO_ID"
        reelLabel="Reel ze zkoušení Perpetuua"
      />

      <TeamSection />
      <Footer />
    </main>
  );
}
