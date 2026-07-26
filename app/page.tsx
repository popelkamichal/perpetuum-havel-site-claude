import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";
import ContentPair from "@/components/ContentPair";
import VideoSection from "@/components/VideoSection";
import TeamSection from "@/components/TeamSection";
import PrisonersSection from "@/components/PrisonersSection";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">

      <Navbar />

      <div
        className="relative"
        style={{
          backgroundImage: "url('/hero-bg-w-z.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundColor: "#080808",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.82) 72%, rgba(8,8,8,0.97) 90%, #080808 100%)",
          }}
        />

        <div className="relative z-10">
          <div
            className="header-strip"
            style={{
              background: "rgba(0,0,0,0.8)",
              marginLeft: "calc(50% - 50vw)",
              width: "100vw",
              paddingTop: "16px",
              paddingBottom: "16px",
            }}
          >
            <div className="max-w-4xl mx-auto px-6">
              <Image
                src="/HAVEL-TITLE.svg"
                alt="Perpetuum Havel"
                width={800}
                height={200}
                className="w-full h-auto select-none"
                style={{ opacity: 0.8 }}
                draggable={false}
                priority
              />
            </div>
          </div>
          <Hero />

          <ContentPair
            sectionLabel="Kontext, rozhovory a svědectví"
            article1={{
              title: "Téma: O kontextu vzniku Perpetuum mobile",
              href: "/clanek/kontext-vzniku",
              image: "/1766237746-perpetuum-3.jpg",
            }}
            article2={{
              title: "Téma: Političtí vězni současnosti",
              href: "/clanek/politicti-vezni",
              image: "/1766237746-perpetuum-6.jpg",
            }}
            reelId="SjevFk_0Txo"
            reelLabel="Short z Avignonu"
          />
        </div>
      </div>

      <div className="w-full border-t border-[#111]" />
      <FadeInSection>
        <VideoSection />
      </FadeInSection>
      <div className="w-full border-t border-[#111]" />

      <FadeInSection delay={100}>
        <ContentPair
          article1={{
            title: "Téma: Václav Havel jako disident a dramatik",
            href: "/clanek/havel-dramatik",
            image: "/1766237746-perpetuum-3.jpg",
          }}
          article2={{
            title: "Téma: Roman Zotov-Mikshin",
            href: "/clanek/roman-zotov-mikshin",
            image: "/1766237746-perpetuum-6.jpg",
          }}
          instagramUrl="https://www.instagram.com/p/DX_7UqUScK7/"
          reelLabel="Instagram"
        />
      </FadeInSection>

      <div id="politicti-vezni" className="scroll-mt-20">
        <FadeInSection delay={150}>
          <PrisonersSection />
        </FadeInSection>
      </div>

      <div className="w-full border-t border-[#111]" />

      <div id="tvurci" className="scroll-mt-20">
        <FadeInSection delay={100}>
          <TeamSection />
        </FadeInSection>
      </div>
      <Footer />
    </main>
  );
}
