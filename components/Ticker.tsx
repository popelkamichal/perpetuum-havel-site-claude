export default function Ticker() {
  const text = "PERPETUUM HAVEL · ";

  // Zdvojíme text pro plynulou smyčku
  const repeated = text.repeat(3);

  return (
    <div className="w-full overflow-hidden py-4 border-t border-b border-[#1a1a1a] my-8">
      <div className="flex whitespace-nowrap ticker-track">
        <span
          className="text-xs tracking-[0.25em] uppercase font-inter font-medium pr-8"
          style={{ color: "#0ECECE" }}
        >
          {repeated}
        </span>
        {/* Duplikát pro bezešvou smyčku */}
        <span
          className="text-xs tracking-[0.25em] uppercase font-inter font-medium pr-8"
          style={{ color: "#0ECECE" }}
          aria-hidden="true"
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}
