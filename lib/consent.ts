export type Consent = "all" | "necessary";

const KEY = "cookie-consent";

/** Událost, kterou si komponenty hlídají, aby na změnu souhlasu reagovaly hned */
export const CONSENT_EVENT = "cookie-consent-change";

export function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(KEY);
    return v === "all" || v === "necessary" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* localStorage může být zakázaný — souhlas pak platí jen pro tuto návštěvu */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function clearConsent() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* nevadí */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}
