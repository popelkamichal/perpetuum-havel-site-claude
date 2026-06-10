import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-4 py-10 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* Logo ND */}
        <a
          href="https://www.narodni-divadlo.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-50 hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src="/logoND_bila.png"
            alt="Národní divadlo"
            width={120}
            height={48}
            className="h-10 w-auto"
          />
        </a>

        {/* Copyright */}
        <p className="text-gray-600 font-inter text-[10px] tracking-[0.25em] uppercase text-center">
          © Národní divadlo&nbsp;&nbsp;|&nbsp;&nbsp;Laterna Magika
        </p>

        {/* Odkaz */}
        <a
          href="https://www.narodni-divadlo.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#00ac93] font-inter text-[10px] tracking-[0.25em] uppercase transition-colors duration-200"
        >
          narodni-divadlo.cz
        </a>

      </div>
    </footer>
  );
}
