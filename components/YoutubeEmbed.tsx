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
  /** Popisek zobrazený pod play tlačítkem v ghost variantě */
  label?: string;
}

export default function YoutubeEmbed({
  videoId,
  title = "YouTube video",
  aspect = "landscape",
  thumbnail,
  facade = true,
  variant = "default",
  label,
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

  // Ghost variant — thumbnail na pozadí + ghost play tlačítko s kroužkem
  if (variant === "ghost") {
    return (
      <div
        className="relative w-full cursor-pointer group overflow-hidden"
        style={{ paddingBottom }}
        onClick={() => setPlaying(true)}
        role="button"
        aria-label={`Přehrát video: ${title}`}
      >
        {/* Thumbnail na pozadí — černobílý */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ filter: "grayscale(1)" }}
        />
        {/* Tmavý overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          {/* Kroužek s trojúhelníkem — pulzuje */}
          <div className="relative flex items-center justify-center">
            {/* Pulzující ring */}
            <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/60 animate-ping" />
            {/* Hlavní kruh */}
            <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/90 bg-white/20 group-hover:bg-white/35 transition-colors duration-200 flex items-center justify-center backdrop-blur-sm">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="w-8 h-8 md:w-11 md:h-11 ml-1 drop-shadow-lg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {/* Popis */}
          {label !== "" && (
            <span className="text-white/80 text-[10px] tracking-[0.3em] uppercase font-inter">
              {label ?? "Přehrát trailer"}
            </span>
          )}
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
