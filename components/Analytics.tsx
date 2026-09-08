"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, getConsent } from "@/lib/consent";

/**
 * Google Analytics 4 — načte se výhradně po souhlasu „Přijmout vše“.
 *
 * Zapne se, jakmile je v prostředí nastavené NEXT_PUBLIC_GA_ID
 * (např. NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX). Bez něj se nenačte nic.
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(getConsent() === "all");
    const onChange = (e: Event) => setAllowed((e as CustomEvent).detail === "all");
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (!id) return;
    const w = window as any;

    // Odvolání souhlasu: gtag necháme vypnutý do příštího načtení stránky.
    // Skript už z paměti odstranit nelze, ale přestane cokoli odesílat.
    w[`ga-disable-${id}`] = !allowed;
    if (!allowed || w.__gaLoaded) return;

    const s = document.createElement("script");
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    s.async = true;
    document.head.appendChild(s);

    w.dataLayer = w.dataLayer || [];
    function gtag(...args: any[]) { w.dataLayer.push(args); }
    gtag("js", new Date());
    gtag("config", id, { anonymize_ip: true });
    w.__gaLoaded = true;
  }, [allowed, id]);

  return null;
}
