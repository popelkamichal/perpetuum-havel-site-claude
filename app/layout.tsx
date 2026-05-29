import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Perpetuum Havel | Laterna Magika | Národní divadlo",
  description:
    "Scénická meditace o moci, paměti a svobodě. Inscenace inspirovaná odkazem Václava Havla, premiéra v hlavní sezóně Národního divadla.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={`${bebasNeue.variable} ${inter.variable} bg-[#080808] text-white`}>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/4577d1e0be9d2d9ed6745f6d697bc730/script.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
