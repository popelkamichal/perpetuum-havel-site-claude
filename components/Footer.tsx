import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-4 py-10 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">

        <a
          href="https://www.narodni-divadlo.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity duration-200"
        >
          <Image
            src="/logoND_bila.png"
            alt="Národní divadlo"
            width={120}
            height={48}
            className="h-10 w-auto"
          />
        </a>

        <p className="text-gray-600 font-inter text-[10px] tracking-[0.25em] uppercase">
          © Národní divadlo&nbsp;&nbsp;|&nbsp;&nbsp;Laterna Magika
        </p>

      </div>
    </footer>
  );
}
