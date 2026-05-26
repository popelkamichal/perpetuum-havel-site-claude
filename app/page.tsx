import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArticlesSection from "@/components/ArticlesSection";
import VideoSection from "@/components/VideoSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navbar />
      <Hero />
      <ArticlesSection />
      <VideoSection />
      <TeamSection />
      <Footer />
    </main>
  );
}
