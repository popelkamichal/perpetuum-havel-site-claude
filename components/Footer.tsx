import Image from "next/image";

const MECENASI =
  "prof. Dr. Dadje Altenburg-Kohl, Janu Fagerbergovi, Olze Foglarové, " +
  "Martě Guthové, Evě Hnilicové, Silke Horákové, Zuzaně Janeček, " +
  "Karlu Janečkovi, Vítu Kučerovi, Jiřímu Kyrianovi, Romaně Leitgebové, " +
  "Miroslavu Lukešovi, Haně Malešové, Romanu Malivánkovi, Barboře Marečkové, " +
  "Romanu Mytryukovi, Ditě Pacourkové, Jitce Pantůčkové, Marcele Růzhové, " +
  "Janisi Sidovskému, Ladislavu Smejkalovi, Marii Sorokině, Magdaleně Souček, " +
  "Evženu a Nikolaji Steinovým, Alici Šikošové, Davidu Šilarovi, Jiřímu Šilerovi, " +
  "Alexandře a Ivu Šlosarčíkovým, Pavle Šmídové, Petru Šobotníkovi, Ditě Šulcové, " +
  "Lucii Valešové a Petru Kuchařovi, Zdislavu Vaněčkovi, Ondřeji Vozárovi, " +
  "Věře a Františku Výtvarovým, Berenice Wünschové, Kateřině Zapletalové " +
  "a Luboru Žalmanovi, členům Mecenášského klubu ND.";

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
          <p className="font-montserrat font-bold text-[13px] leading-relaxed mb-4" style={{ color: "#e2e2e2" }}>
            Partnerem inscenace je Mecenášský klub ND, Národní divadlo děkuje za
            významnou podporu
          </p>
          {/* Souvislá věta se jmény ve 3. pádu — nelze rozdělit do sloupců */}
          <p
            className="font-montserrat text-[12px] leading-relaxed max-w-4xl"
            style={{ color: "#6b6b6b" }}
          >
            {MECENASI}
          </p>
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
