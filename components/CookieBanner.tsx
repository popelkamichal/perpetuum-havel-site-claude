"use client";

import { useEffect, useState } from "react";

const texts = {
  cs: {
    message:
      "Tento web používá cookies pro zajištění základní funkčnosti a analýzu návštěvnosti.",
    accept: "Přijmout vše",
    reject: "Pouze nezbytné",
    policy: "Zásady cookies",
  },
  en: {
    message:
      "This website uses cookies to ensure basic functionality and analyse traffic.",
    accept: "Accept all",
    reject: "Necessary only",
    policy: "Cookie policy",
  },
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState<"cs" | "en">("cs");

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
    const browserLang = navigator.language?.toLowerCase() ?? "";
    setLang(browserLang.startsWith("cs") || browserLang.startsWith("sk") ? "cs" : "en");
  }, []);

  const handle = (value: "all" | "necessary") => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  const t = texts[lang];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 md:py-5"
      style={{ background: "rgba(10,10,10,0.97)", borderTop: "1px solid #1f1f1f" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Text */}
        <p className="flex-1 font-inter text-[11px] leading-relaxed text-[#888]">
          {t.message}{" "}
          <a
            href="#"
            className="underline underline-offset-2 transition-colors duration-200"
            style={{ color: "#00ac93" }}
          >
            {t.policy}
          </a>
        </p>

        {/* Tlačítka */}
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => handle("necessary")}
            className="font-inter text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-colors duration-200 hover:border-white hover:text-white"
            style={{ borderColor: "#333", color: "#666" }}
          >
            {t.reject}
          </button>
          <button
            onClick={() => handle("all")}
            className="font-inter text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-200"
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
