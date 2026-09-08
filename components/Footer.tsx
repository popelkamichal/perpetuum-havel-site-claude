import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-4 py-10 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">

        {/* Poděkování pamětnicím */}
        <p className="max-w-2xl mx-auto text-center font-montserrat text-[13px] leading-relaxed mb-6" style={{ color: "#8a8a8a" }}>
          Na vzniku inscenace se svými autentickými vzpomínkami a zkušenostmi
          podílely také bývalé politické vězenkyně z Běloruska Palina
          Šarenda-Panasjuk, Maria Nesterova, Iryna Harashyna a Volha Kukushkina.
          Děkujeme jim za odvahu sdílet své zkušenosti a za důvěru, kterou nám daly.
        </p>

        {/* Mecenášský klub ND */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="font-montserrat text-[13px] leading-relaxed mb-3" style={{ color: "#8a8a8a" }}>
            Partnerem inscenace je Mecenášský klub ND, členové Mecenášského klubu ND:
          </p>
          <p className="font-montserrat text-[11px] leading-relaxed" style={{ color: "#666" }}>
            prof. Dr. Dadja Altenburg-Kohl, Jan Fagerberg, Olga a Václav Foglarovi,
            Marta Guthová, Silke Horáková, Eva Hnilicová, Zuzana Janeček,
            Karel Janeček, Naďa Kalinovská Vanišová, Vít Kučera, Jiří Kyrian,
            Romana Leitgebová, Hana Malešová, Roman Malivánek, Barbora Marečková,
            Roman Mytryuk, Dita a Karel Pacourkovi, Jitka Pantůčková, Jana Poljaková,
            Marcela Růzhová, Marie Sorokina, Magdalena Souček, Evžen a Nikolaj Steinovi,
            David Šilar a Tibor Rozsnyó, Alice Šikošová, Jiří Šiler, Pavla Šmídová,
            Petr Šobotník, Dita Šulcová, Michael Trask, Lucie Valešová a Petr Kuchař,
            Zdislav Vaněček, Ondřej Vozár, Věra a František Výtvarovi,
            Berenika Wünschová, Kateřina Zapletalová, Lubor Žalman
          </p>
        </div>

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

        <p className="text-gray-600 font-montserrat text-[10px] tracking-[0.25em] uppercase">
          © Národní divadlo&nbsp;&nbsp;|&nbsp;&nbsp;Laterna Magika
        </p>

      </div>
    </footer>
  );
}
