import type { MetadataRoute } from "next";

const SITE_URL = "https://www.perpetuumhavel.cz";

/** Veřejné stránky. /preview, /preview-scroll a /countdown sem nepatří —
 *  jsou to pracovní stránky, které nemá smysl nabízet vyhledávačům. */
const PAGES = [
  { path: "/", priority: 1 },
  { path: "/vezni", priority: 0.8 },
  { path: "/clanek/havel-dramatik", priority: 0.7 },
  { path: "/clanek/kontext-vzniku", priority: 0.7 },
  { path: "/clanek/politicti-vezni", priority: 0.7 },
  { path: "/clanek/roman-zotov-mikshin", priority: 0.7 },
  { path: "/zasady-cookies", priority: 0.2 },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    priority,
  }));
}
