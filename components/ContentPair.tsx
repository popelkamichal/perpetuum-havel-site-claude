"use client";

import { useState, useEffect } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import InstagramEmbed from "./InstagramEmbed";

interface Article {
  title: string;
  href?: string;
  /** Cesta k obrázku na pozadí karty */
  image?: string;
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

  const card = (
    <div className="flex-1 flex flex-col rounded-2xl overflow-hidden group cursor-pointer"
         style={{ border: "1px solid rgba(255,255,255,0.18)", background: "#0f0f0f" }}>
      {/* Foto nahoře */}
      <div className="w-full h-36 overflow-hidden flex-shrink-0">
        {article.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1c1c1c] to-[#0d0d0d]" />
        )}
      </div>
      {/* Text pod fotkou */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Kategorie — styl "— Kontext" */}
        <p className="text-[9px] tracking-[0.25em] uppercase font-inter flex items-center gap-2"
           style={{ color: "#00ac93" }}>
          <span className="w-3 h-px inline-block" style={{ backgroundColor: "#00ac93" }} />
          {article.modal ? "Rozhovor" : "Kontext"}
        </p>
        {/* Velký titulek */}
        <p className="text-white font-inter font-bold text-sm md:text-[15px] leading-snug group-hover:underline underline-offset-2">
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
