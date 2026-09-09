"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, getConsent } from "@/lib/consent";

/**
 * Google Analytics 4.
 *
 * Vkládá se doslova oficiální úryvek z Google Analytics — obě značky
 * i kód mezi nimi jsou znak po znaku stejné. Jediný rozdíl je, kdy se
 * spustí: až po volbě „Přijmout vše“, ne hned při načtení stránky.
 * Tak to slibuje lišta se souhlasem i stránka se zásadami cookies.
 *
 * ID měření je uvedené přímo zde, ne v proměnné prostředí: NEXT_PUBLIC_*
 * se dosazuje při buildu, takže by ho stejně nešlo měnit za běhu, a jde
 * o veřejný údaj — putuje v HTML každé stránky.
 */
const GA_ID = "G-ZL8SGX59RM";

/* eslint-disable no-useless-concat */
const SNIPPET = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GA_ID}');
`;

export default function Analytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(getConsent() === "all");
    const onChange = (e: Event) => setAllowed((e as CustomEvent).detail === "all");
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;

    // Odvolání souhlasu: gtag necháme vypnutý do příštího načtení stránky.
    // Skript už z paměti odstranit nelze, ale přestane cokoli odesílat.
    w[`ga-disable-${GA_ID}`] = !allowed;
    if (!allowed || w.__gaLoaded) return;

    // <script async src="https://www.googletagmanager.com/gtag/js?id=…">
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(tag);

    // <script> … </script> — prohlížeč ho provede stejně, jako by stál v <head>
    const init = document.createElement("script");
    init.text = SNIPPET;
    document.head.appendChild(init);

    w.__gaLoaded = true;
  }, [allowed]);

  return null;
}
