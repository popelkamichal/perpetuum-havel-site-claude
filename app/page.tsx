import Navbar from "@/components/Navbar";
import Image from "next/image";
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
          {/* Černý průhledný pruh — od vrchu přes Navbar + titul, vyjede shora */}
          <div
            className="header-strip"
            style={{
              background: "rgba(0,0,0,0.8)",
              marginLeft: "calc(50% - 50vw)",
              width: "100vw",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 mt-2">
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

          {/* Pair 1 — Reel z Avignonu, na foto pozadí */}
          <ContentPair
            sectionLabel="Kontext, rozhovory a svědectví"
            article1={{
              title: "Text o kontextu vzniku Perpetuum mobile (Petišková)",
              href: "/clanek/kontext-vzniku",
              image: "/1766237746-perpetuum-3.jpg",
              perex: "Jak vznikla inscenace, která spojuje odkaz Václava Havla s otázkami současného světa?",
              body: "Dramaturgická zpráva sleduje tvorbu od prvních inspiračních setkání přes Avignon až po premiéru v Národním divadle. Text vychází z rozhovorů s tvůrci a ze zápisků ze zkušebního procesu.",
            }}
            article2={{
              title: "Text: Rozhovor s Romanem Zotovem Mikshinem (z Foyer)",
              modal: true,
              image: "/1766237746-perpetuum-6.jpg",
              perex: "Choreograf a spoluautor scénáře Roman Zotov-Mikshin o práci s tělem, pamětí a politickým gestem.",
              body: `„Tělo si pamatuje věci, které mysl zapomněla. Přesně o tom je Perpetuum Havel — o tom, jak se gesto stane odkazem, jak pohyb přetrvá slovo.“ Roman Zotov-Mikshin přišel do projektu z Avignonu. Jeho pohybový jazyk vychází z ruské taneční tradice, ale vědomě ji rozkládá. V rozhovoru pro Foyer mluví o svobodě jako fyzickém zážitku, o Havlovi, kterého nikdy neviděl živě, a o tom, proč inscenace nemůže mít šťastný konec.`,
            }}
            reelId="LNGYQmUdYAc"
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
        instagramUrl="https://www.instagram.com/reel/DIQB-djM309/"
        reelLabel="Reel z Avignonu"
      />

      <TeamSection />
      <Footer />
    </main>
  );
}
