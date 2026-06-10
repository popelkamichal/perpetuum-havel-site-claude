import Link from "next/link";

function LangSwitcher() {
  return (
    <div className="flex items-center gap-1 font-inter text-[10px] tracking-[0.2em] uppercase">
      <span className="text-white">CS</span>
      <span className="text-[#444] mx-1">|</span>
      <span className="text-[#444] cursor-not-allowed" title="Anglická verze připravujeme">
        EN
      </span>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="w-full px-6">
      {/* Mobil: přepínač nahoře vpravo, link pod ním vycentrovaný */}
      <div className="flex justify-end py-2 md:hidden">
        <LangSwitcher />
      </div>
      <div className="flex items-center justify-center py-2 md:hidden">
        <Link
          href="/"
          className="text-[#00ac93] text-xs tracking-[0.3em] uppercase font-inter hover:opacity-70 transition-opacity duration-200"
        >
          Laterna Magika&nbsp;&nbsp;/&nbsp;&nbsp;Národní divadlo
        </Link>
      </div>

      {/* Desktop: vše v jedné řadě */}
      <div className="hidden md:flex relative items-center justify-center py-4">
        <Link
          href="/"
          className="text-[#00ac93] text-xs tracking-[0.3em] uppercase font-inter hover:opacity-70 transition-opacity duration-200"
        >
          Laterna Magika&nbsp;&nbsp;/&nbsp;&nbsp;Národní divadlo
        </Link>
        <div className="absolute right-0">
          <LangSwitcher />
        </div>
      </div>
    </nav>
  );
}
