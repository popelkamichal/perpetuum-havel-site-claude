"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, clearConsent, getConsent, setConsent, type Consent } from "@/lib/consent";

const POPIS: Record<Consent, string> = {
  all: "Přijmout vše — vložený obsah se načítá.",
  necessary: "Pouze nezbytné — vložený obsah se nenačítá.",
};

export default function ConsentControls() {
  const [consent, setState] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(getConsent());
    setReady(true);
    const onChange = (e: Event) => setState((e as CustomEvent).detail ?? null);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  // Do prvního načtení v prohlížeči stav neznáme — ať se text nepřepisuje před očima
  if (!ready) return <div className="h-[92px]" aria-hidden="true" />;

  return (
    <div className="border border-[#1f1f1f] rounded-lg p-5 my-6 bg-[#0d0d0d]">
      <p className="font-montserrat text-[13px] mb-4" style={{ color: "#cfcfcf" }}>
        {consent ? `Vaše nastavení: ${POPIS[consent]}` : "Zatím jste volbu neprovedli."}
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setConsent("all")}
          className="font-montserrat text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-opacity duration-200 hover:opacity-80"
          style={{ background: "#00ac93", color: "#000" }}
        >
          Přijmout vše
        </button>
        <button
          onClick={() => setConsent("necessary")}
          className="font-montserrat text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-colors duration-200 hover:border-white hover:text-white"
          style={{ borderColor: "#333", color: "#888" }}
        >
          Pouze nezbytné
        </button>
        {consent && (
          <button
            onClick={clearConsent}
            className="font-montserrat text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-colors duration-200 hover:border-white hover:text-white"
            style={{ borderColor: "#333", color: "#888" }}
          >
            Odvolat souhlas
          </button>
        )}
      </div>
    </div>
  );
}
