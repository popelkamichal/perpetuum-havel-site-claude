import type { Metadata } from "next";
import localFont from "next/font/local";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import ScrollIndicator from "@/components/ScrollIndicator";
import "./globals.css";

const din = localFont({
  src: [
    { path: "../public/fonts/DINNextLTPro-Regular.woff", weight: "400", style: "normal" },
    { path: "../public/fonts/DINNextLTPro-Medium.woff", weight: "500", style: "normal" },
    { path: "../public/fonts/DINNextLTPro-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-din",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Perpetuum Havel | Laterna Magika | Národní divadlo",
  description:
    "Jedna cela a politický vězeň jako symbol vzdoru. Na motivy jediné předlohy pro pohybové divadlo z pera Václava Havla.",
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
      <body className={`${din.variable} font-din bg-[#080808] text-white`}>
        <ScrollIndicator />
        {children}
        <BackToTop />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
