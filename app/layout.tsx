import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import ScrollIndicator from "@/components/ScrollIndicator";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

const SITE_URL = "https://www.perpetuumhavel.cz";
const TITLE = "Perpetuum Havel | Laterna Magika | Národní divadlo";
const DESCRIPTION =
  "Jedna cela a politický vězeň jako symbol vzdoru. Na motivy jediné předlohy pro pohybové divadlo z pera Václava Havla.";

export const metadata: Metadata = {
  // Bez metadataBase by náhledy odkazů dostaly relativní cesty a obrázek by se nezobrazil
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: SITE_URL,
    siteName: "Perpetuum Havel",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/perpetuum-havel-thumb.jpg", width: 2560, height: 1440, alt: "Perpetuum Havel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/perpetuum-havel-thumb.jpg"],
  },
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
        <Analytics />
      </body>
    </html>
  );
}
