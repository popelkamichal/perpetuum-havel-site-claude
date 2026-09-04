"use client";

import { useState, useEffect } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import InstagramEmbed from "./InstagramEmbed";

interface Article {
  title: string;
  author?: string;
  href?: string;
  /** Cesta k obrázku na pozadí karty */
  image?: string;
  /** Pozice obrázku, např. "center top", "60% 20%" */
  imagePosition?: string;
  /** Split layout: fotka vlevo, barevný panel vpravo */
  splitAccent?: boolean;
  /** Krátký perex zobrazený v modalu */
  perex?: string;
  /** Text článku zobrazený v modalu */
  body?: string;
  /** Otevřít v popup okně místo externího odkazu */
  modal?: boolean;
}

interface ContentPairProps {
  article1: Article;
  article2: Article;
  reelId?: string;
  instagramUrl?: string;
  reelLabel: string;
  sectionLabel?: string;
}

function ArticleModal({ article, onClose }: { article: Article; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(0,0,0,0.88)" }}
      onClick={onClose}
    >
      <div
        className="bg-[#111] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Foto header */}
        {article.image && (
          <div className="w-full h-56 overflow-hidden rounded-t-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
        )}
        {!article.image && (
          <div className="w-full h-32 rounded-t-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
        )}

        {/* Zavřít */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white/40 hover:text-white text-3xl leading-none transition-colors duration-150"
          aria-label="Zavřít"
        >
          ×
        </button>

        {/* Obsah */}
        <div className="p-6 md:p-8">
          <h2 className="text-white font-inter font-bold text-lg md:text-xl leading-snug mb-4">
            {article.title}
          </h2>
          {article.perex && (
            <p
              className="font-inter text-sm italic leading-relaxed mb-5 pl-4 border-l-2 text-[#ccc]"
              style={{ borderColor: "#00ac93" }}
            >
              {article.perex}
            </p>
          )}
          {article.body && (
            <p className="font-inter text-sm leading-relaxed text-[#888]">
              {article.body}
            </p>
          )}
          <div className="mt-6 pt-5 border-t border-[#222] flex justify-end">
            <button
              onClick={onClose}
              className="text-[9px] tracking-[0.3em] uppercase font-inter transition-colors duration-200"
              style={{ color: "#00ac93" }}
            >
              Zavřít ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const [modalOpen, setModalOpen] = useState(false);

  const card = article.splitAccent ? (
    /* Split layout: fotka vlevo, tyrkysový panel vpravo */
    <div className="relative flex-1 overflow-hidden group cursor-pointer min-h-[180px] rounded-2xl flex flex-row"
         style={{ border: "1px solid #00ac93" }}>
      {/* Levá fotka */}
      <div className="relative" style={{ width: "45%" }}>
        {article.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: article.imagePosition ?? "center top" }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#060606]" />
        )}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.25)" }} />
      </div>
      {/* Pravý tyrkysový panel */}
      <div className="flex-1 flex flex-col justify-center px-5 py-5" style={{ background: "#00ac93" }}>
        <p className="font-inter font-bold text-xl leading-snug" style={{ color: "#000000", whiteSpace: "pre-line" }}>
          {article.author ? `${article.author}: ` : ""}{article.title}
        </p>
      </div>
    </div>
  ) : (
    /* Standardní layout: fotka na pozadí, text dole */
    <div className="relative flex-1 overflow-hidden group cursor-pointer min-h-[180px] rounded-2xl"
         style={{ border: "1px solid #00ac93" }}>
      {article.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: article.imagePosition ?? "center top" }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] to-[#0d0d0d]" />
      )}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.38)" }} />
      <div className="absolute bottom-0 left-0 right-0 px-4 py-4"
           style={{ background: "rgba(0,0,0,0.82)" }}>
        {article.author && (
          <p className="font-inter text-xs font-normal mb-1.5" style={{ color: "#ffffff" }}>
            {article.author}:
          </p>
        )}
        <p className="font-inter font-bold text-2xl leading-tight" style={{ color: article.author ? "#00ac93" : "#fff", whiteSpace: "pre-line" }}>
          {article.title}
        </p>
      </div>
    </div>
  );

  if (article.modal) {
    return (
      <>
        <div className="flex-1 flex flex-col" onClick={() => setModalOpen(true)}>
          {card}
        </div>
        {modalOpen && <ArticleModal article={article} onClose={() => setModalOpen(false)} />}
      </>
    );
  }

  const isExternal = article.href && article.href.startsWith("http");
  return (
    <a
      href={article.href || "#"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex-1 flex flex-col"
    >
      {card}
    </a>
  );
}

export default function ContentPair({
  article1,
  article2,
  reelId,
  instagramUrl,
  reelLabel,
  sectionLabel,
}: ContentPairProps) {
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {sectionLabel && (
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ backgroundColor: "#00ac93" }} />
            <span
              className="text-[9px] tracking-[0.35em] uppercase font-inter font-medium"
              style={{ color: "#00ac93" }}
            >
              {sectionLabel}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Levý sloupec: 2 karty na výšku */}
          <div className="flex flex-col gap-4 min-h-[400px]">
            <ArticleCard article={article1} />
            <ArticleCard article={article2} />
          </div>

          {/* Pravý sloupec: reel */}
          <div className="flex flex-col max-w-sm mx-auto w-full md:max-w-none md:mx-0">
            <div className="bg-white rounded-3xl overflow-hidden flex-1">
              {instagramUrl ? (
                <InstagramEmbed url={instagramUrl} />
              ) : reelId ? (
                <YoutubeEmbed videoId={reelId} title={reelLabel} aspect="portrait" />
              ) : null}
            </div>
            <p
              className="mt-3 text-[9px] tracking-[0.3em] uppercase font-inter text-center"
              style={{ color: "#00ac93" }}
            >
              {reelLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
