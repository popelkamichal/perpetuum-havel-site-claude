import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentPair from "@/components/ContentPair";
import VideoSection from "@/components/VideoSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navbar />
      <Hero />

      {/* Pair 1 — photo background, Reel z Avignonu */}
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
        withPhotoBg
      />

      {/* Thin divider */}
      <div className="w-full border-t border-[#1a1a1a]" />

      {/* Full-width interview video */}
      <VideoSection />

      {/* Thin divider */}
      <div className="w-full border-t border-[#1a1a1a]" />

      {/* Pair 2 — dark background, Reel ze zkoušení */}
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
