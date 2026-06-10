import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 relative flex items-center justify-center">
      <Link
        href="/"
        className="text-[#00ac93] text-xs tracking-[0.3em] uppercase font-inter hover:opacity-70 transition-opacity duration-200"
      >
        Laterna Magika&nbsp;&nbsp;/&nbsp;&nbsp;Národní divadlo
      </Link>

      <div className="absolute right-6 flex items-center gap-1 font-inter text-[10px] tracking-[0.2em] uppercase">
        <span className="text-white">CS</span>
        <span className="text-[#444] mx-1">|</span>
        <span
          className="text-[#444] cursor-not-allowed"
          title="Anglická verze připravujeme"
        >
          EN
        </span>
      </div>
    </nav>
  );
}
