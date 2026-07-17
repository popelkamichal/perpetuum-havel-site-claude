"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Odkaz 1", href: "#" },
  { label: "Tvůrci", href: "#tvurci" },
  { label: "Současní političtí vězni", href: "#politicti-vezni" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-3">
        {/* Logo */}
        <a
          href="https://www.narodni-divadlo.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity duration-200 flex-shrink-0"
        >
          <Image
            src="/logoND_bila.png"
            alt="Národní divadlo"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white font-inter text-[11px] tracking-[0.2em] uppercase hover:text-[#00ac93] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://www.narodni-divadlo.cz/cs/predstaveni/perpetuum-havel-UmymnrWnRvC2a_KyhqKeWQ"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-[11px] tracking-[0.2em] uppercase text-white px-4 py-2 rounded transition-opacity duration-200 hover:opacity-80"
            style={{ backgroundColor: "#8a732e" }}
          >
            Koupit vstupenky
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-black border-t border-[#1a1a1a] px-6 py-4 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white font-inter text-[11px] tracking-[0.2em] uppercase hover:text-[#00ac93] transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://www.narodni-divadlo.cz/cs/predstaveni/perpetuum-havel-UmymnrWnRvC2a_KyhqKeWQ"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-[11px] tracking-[0.2em] uppercase text-white text-center px-4 py-2 rounded transition-opacity duration-200 hover:opacity-80"
            style={{ backgroundColor: "#8a732e" }}
            onClick={() => setOpen(false)}
          >
            Koupit vstupenky
          </a>
        </div>
      )}
    </nav>
  );
}
