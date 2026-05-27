"use client";

import { useState } from "react";

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
  aspect?: "landscape" | "portrait";
  /** Vlastní URL náhledového obrázku */
  thumbnail?: string;
  /** Facade režim — zobrazí náhled, iframe načte až po kliknutí (výchozí: true) */
  facade?: boolean;
  /**
   * "default" = červené play tlačítko + thumbnail
   * "ghost"   = průhledné pozadí, tmavý trojúhelník — pro použití v bílém průhledném containeru
   */
  variant?: "default" | "ghost";
}

export default function YoutubeEmbed({
  videoId,
  title = "YouTube video",
  aspect = "landscape",
  thumbnail,
  facade = true,
  variant = "default",
}: YoutubeEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const paddingBottom = aspect === "portrait" ? "177.78%" : "56.25%";
  const thumbUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Po kliknutí nebo facade=false → iframe
  if (!facade || playing) {
    return (
      <div className="relative w-full" style={{ paddingBottom }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-sm"
          src={`https://www.youtube.com/embed/${videoId}${playing ? "?autoplay=1" : ""}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Ghost variant — průhledný, jednoduchý tmavý trojúhelník
  if (variant === "ghost") {
    return (
      <div
        className="relative w-full cursor-pointer group"
        style={{ paddingBottom }}
        onClick={() => setPlaying(true)}
        role="button"
        aria-label={`Přehrát video: ${title}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-14 h-14 md:w-20 md:h-20 opacity-60 group-hover:opacity-90 transition-opacity duration-200"
            fill="rgba(0,0,0,0.75)"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    );
  }

  // Default variant — thumbnail + červené play tlačítko
  return (
    <div
      className="relative w-full cursor-pointer group rounded-sm overflow-hidden"
      style={{ paddingBottom }}
      onClick={() => setPlaying(true)}
      role="button"
      aria-label={`Přehrát video: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbUrl}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-200" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 group-hover:bg-red-700 transition-colors duration-200 flex items-center justify-center shadow-xl">
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 md:w-9 md:h-9 ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
