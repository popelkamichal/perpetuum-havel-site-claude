import type { Metadata } from "next";

/**
 * Metadata jednoho článku. Bez nich by sdílený odkaz na článek ukazoval
 * titulek, popis i náhledový obrázek hlavní stránky.
 * Absolutní adresy dopočítá metadataBase z app/layout.tsx.
 */
export function articleMetadata({
  slug,
  title,
  description,
  image,
  width = 1400,
  height = 933,
}: {
  slug: string;
  title: string;
  description: string;
  image: string;
  width?: number;
  height?: number;
}): Metadata {
  const url = `/clanek/${slug}`;
  const images = [{ url: image, width, height, alt: title }];

  return {
    title: `${title} | Perpetuum Havel`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "cs_CZ",
      url,
      siteName: "Perpetuum Havel",
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
