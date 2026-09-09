"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, getConsent, setConsent } from "@/lib/consent";

const texts = {
  cs: {
    message:
      "Kromě údajů nutných pro provoz webu měříme návštěvnost pomocí Google Analytics. To se spustí až s vaším souhlasem.",
    accept: "Přijmout vše",
    reject: "Pouze nezbytné",
    policy: "Zásady cookies",
  },
  en: {
    message:
      "Beyond what the site needs to run, we measure traffic with Google Analytics. That starts only with your consent.",
    accept: "Accept all",
    reject: "Necessary only",
    policy: "Cookie policy",
  },
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState<"cs" | "en">("cs");

  useEffect(() => {
    if (!getConsent()) setVisible(true);
    const browserLang = navigator.language?.toLowerCase() ?? "";
    setLang(browserLang.startsWith("cs") || browserLang.startsWith("sk") ? "cs" : "en");

    // Odvolání souhlasu na stránce se zásadami banner zase vyvolá
    const onChange = (e: Event) => setVisible(!(e as CustomEvent).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!visible) return null;

  const t = texts[lang];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 md:py-5"
      style={{ background: "rgba(10,10,10,0.97)", borderTop: "1px solid #1f1f1f" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Text */}
        <p className="flex-1 font-montserrat text-[11px] leading-relaxed text-[#888]">
          {t.message}{" "}
          <Link
            href="/zasady-cookies"
            className="underline underline-offset-2 transition-colors duration-200"
            style={{ color: "#00ac93" }}
          >
            {t.policy}
          </Link>
        </p>

        {/* Tlačítka */}
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => setConsent("necessary")}
            className="font-montserrat text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-colors duration-200 hover:border-white hover:text-white"
            style={{ borderColor: "#333", color: "#666" }}
          >
            {t.reject}
          </button>
          <button
            onClick={() => setConsent("all")}
            className="font-montserrat text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-200"
            style={{ background: "#00ac93", color: "#000" }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 16px rgba(0,172,147,0.6)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
