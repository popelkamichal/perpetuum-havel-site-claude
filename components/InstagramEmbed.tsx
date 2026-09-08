"use client";

import { useCallback, useEffect, useState } from "react";
import { CONSENT_EVENT, getConsent } from "@/lib/consent";

interface InstagramEmbedProps {
  url: string;
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  // Skript Instagramu smí načíst až se souhlasem — jinak by Meta mohla
  // nastavovat cookies dřív, než návštěvník cokoli odklikne.
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(getConsent() === "all");
    const onChange = (e: Event) => setAllowed((e as CustomEvent).detail === "all");
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (!allowed) return;
    const w = window as any;
    if (w.instgrm) {
      w.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [allowed, url]);

  const showOnce = useCallback(() => setAllowed(true), []);

  if (!allowed) {
    return (
      <div className="w-full aspect-[4/5] flex flex-col items-center justify-center text-center px-6 gap-4 bg-[#111]">
        <p className="font-montserrat text-[12px] leading-relaxed text-[#888] max-w-xs">
          Zde je vložený příspěvek z Instagramu. Jeho zobrazením se načte obsah
          ze serverů Instagramu, který může nastavit cookies.
        </p>
        <button
          onClick={showOnce}
          className="font-montserrat text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-200"
          style={{ background: "#00ac93", color: "#000" }}
        >
          Zobrazit příspěvek
        </button>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-montserrat text-[10px] tracking-[0.2em] uppercase underline underline-offset-2"
          style={{ color: "#00ac93" }}
        >
          Otevřít na Instagramu
        </a>
      </div>
    );
  }

  return (
    <div className="w-full">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: 0,
          borderRadius: "24px",
          margin: 0,
          padding: 0,
          width: "100%",
          minWidth: "100%",
        }}
      />
    </div>
  );
}
