function TickerContent() {
  const words = ["PERPETUUM", "HAVEL"];
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="inline-flex items-center gap-4 pr-8 font-inter font-medium text-xs tracking-[0.25em] uppercase">
          <span style={{ color: "#ffffff" }}>{words[0]}</span>
          <span style={{ color: "#00ac93" }}>{words[1]}</span>
          <span style={{ color: "#00ac93", opacity: 0.5 }}>·</span>
        </span>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className="w-full overflow-hidden py-4 border-t border-b border-[#1a1a1a] my-8">
      <div className="flex whitespace-nowrap ticker-track">
        <TickerContent />
        <span aria-hidden="true" className="inline-flex">
          <TickerContent />
        </span>
      </div>
    </div>
  );
}
