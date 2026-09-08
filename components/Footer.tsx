import Image from "next/image";

const MECENASI = [
  "prof. Dr. Dadja Altenburg-Kohl", "Jan Fagerberg", "Olga a Václav Foglarovi",
  "Marta Guthová", "Silke Horáková", "Eva Hnilicová", "Zuzana Janeček",
  "Karel Janeček", "Naďa Kalinovská Vanišová", "Vít Kučera", "Jiří Kyrian",
  "Romana Leitgebová", "Hana Malešová", "Roman Malivánek", "Barbora Marečková",
  "Roman Mytryuk", "Dita a Karel Pacourkovi", "Jitka Pantůčková",
  "Jana Poljaková", "Marcela Růzhová", "Marie Sorokina", "Magdalena Souček",
  "Evžen a Nikolaj Steinovi", "David Šilar a Tibor Rozsnyó", "Alice Šikošová",
  "Jiří Šiler", "Pavla Šmídová", "Petr Šobotník", "Dita Šulcová",
  "Michael Trask", "Lucie Valešová a Petr Kuchař", "Zdislav Vaněček",
  "Ondřej Vozár", "Věra a František Výtvarovi", "Berenika Wünschová",
  "Kateřina Zapletalová", "Lubor Žalman",
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-px flex-shrink-0" style={{ backgroundColor: "#00ac93" }} />
      <span
        className="text-[9px] tracking-[0.35em] uppercase font-montserrat font-medium"
        style={{ color: "#00ac93" }}
      >
        {children}
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1a1a1a]">

      <div className="max-w-5xl mx-auto px-6 pt-14 pb-12">

        {/* Poděkování pamětnicím */}
        <section className="mb-12">
          <Label>Poděkování</Label>
          <p className="font-montserrat text-[13px] leading-relaxed max-w-3xl" style={{ color: "#7d7d7d" }}>
            Na vzniku inscenace se svými autentickými vzpomínkami a zkušenostmi
            podílely také bývalé politické vězenkyně z Běloruska{" "}
            <span style={{ color: "#cfcfcf" }}>
              Palina Šarenda-Panasjuk, Maria Nesterova, Iryna Harashyna
              a Volha Kukushkina
            </span>
            . Děkujeme jim za odvahu sdílet své zkušenosti a za důvěru, kterou
            nám daly.
          </p>
        </section>

        {/* Mecenášský klub ND */}
        <section>
          <Label>Partner inscenace</Label>
          <p className="font-montserrat text-[13px] leading-relaxed mb-4" style={{ color: "#cfcfcf" }}>
            Mecenášský klub ND
          </p>
          <ul
            className="font-montserrat text-[11px] leading-[1.9] columns-2 sm:columns-3 lg:columns-4 gap-x-8"
            style={{ color: "#6b6b6b" }}
          >
            {MECENASI.map((m) => (
              <li key={m} className="break-inside-avoid">{m}</li>
            ))}
          </ul>
        </section>

      </div>

      {/* Logo a copyright */}
      <div className="border-t border-[#141414]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center gap-3">
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
              className="h-9 w-auto"
            />
          </a>
          <p className="text-gray-600 font-montserrat text-[10px] tracking-[0.25em] uppercase">
            © Národní divadlo&nbsp;&nbsp;|&nbsp;&nbsp;Laterna Magika
          </p>
        </div>
      </div>

    </footer>
  );
}
