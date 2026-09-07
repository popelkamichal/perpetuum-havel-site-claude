import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import ScrollIndicator from "@/components/ScrollIndicator";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Perpetuum Havel | Laterna Magika | Národní divadlo",
  description:
    "Scénická meditace o moci, paměti a svobodě. Inscenace inspirovaná odkazem Václava Havla, premiéra v hlavní sezóně Národního divadla.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={`${montserrat.variable} font-montserrat bg-[#080808] text-white`}>
        <ScrollIndicator />
        {children}
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
