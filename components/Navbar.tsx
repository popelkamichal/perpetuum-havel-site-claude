import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 flex justify-center">
      <Link
        href="/"
        className="text-[#00ac93] text-xs tracking-[0.3em] uppercase font-inter hover:opacity-70 transition-opacity duration-200"
      >
        Laterna Magika&nbsp;&nbsp;/&nbsp;&nbsp;Národní divadlo
      </Link>
    </nav>
  );
}
