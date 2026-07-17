interface Member {
  initials: string;
  name: string;
  role: string;
  href?: string;
}

const team: Member[] = [
  {
    initials: "PB",
    name: "Petr Boháč",
    role: "Námět, scénář a režie",
    href: "https://www.narodni-divadlo.cz/cs/profil/petr-bohac-Av4PuxCESv6gxfTq0mGI2w",
  },
  {
    initials: "RZ",
    name: "Roman Zotov-Mikshin",
    role: "Spolupráce na scénáři",
    href: "https://www.narodni-divadlo.cz/cs/profil/roman-zotov-mikshin-KFqQzepjQqaeeWHt78UIAg",
  },
  {
    initials: "RV",
    name: "Radim Vizváry",
    role: "Pohybová spolupráce",
    href: "https://www.narodni-divadlo.cz/cs/profil/radim-vizvary-1609468",
  },
  {
    initials: "PČ",
    name: "Pavlína Chroňáková",
    role: "Scéna a kostýmy",
    href: "https://www.narodni-divadlo.cz/cs/profil/pavlina-chronakova-eZF3YRxtQzWKeGDRLFIJLQ",
  },
  {
    initials: "MH",
    name: "Martin Hůla",
    role: "Video, hudba a zvukový design",
    href: "https://www.narodni-divadlo.cz/cs/profil/martin-hula-JAxNGFvTTQOu1NIpeRxxzw",
  },
  {
    initials: "FH",
    name: "Filip Horn",
    role: "Světelný design",
    href: "https://www.narodni-divadlo.cz/cs/profil/filip-horn-KRPcCcwAR42ONPuf2PjIFg",
  },
];

const politicalPrisoners: Member[] = [
  { initials: "AM", name: "Alexej Morozov",     role: "Novinář, Rusko" },
  { initials: "NK", name: "Natalija Koval",      role: "Aktivistka, Bělorusko" },
  { initials: "ZW", name: "Zhang Wei",           role: "Student, Čína" },
  { initials: "FH", name: "Farid Hosseini",      role: "Právník, Írán" },
  { initials: "MK", name: "Maryam Khalili",      role: "Blogerka, Írán" },
  { initials: "DP", name: "Dmitrij Petrov",      role: "Spisovatel, Rusko" },
  { initials: "LA", name: "Leila Ahmadi",        role: "Novinářka, Írán" },
  { initials: "VS", name: "Viktor Savčenko",     role: "Poslanec, Rusko" },
  { initials: "YR", name: "Yusuf Al-Rashid",    role: "Aktivista, Saúdská Arábie" },
  { initials: "AK", name: "Anna Kowalczyk",      role: "Fotografka, Bělorusko" },
  { initials: "IH", name: "Ibrahim Hassan",      role: "Novinář, Egypt" },
  { initials: "SM", name: "Sofija Melnyk",       role: "Učitelka, Rusko" },
  { initials: "BD", name: "Batyr Dzhaksybekov", role: "Ekolog, Kazachstán" },
  { initials: "ML", name: "Mei Lin",             role: "Umělkyně, Čína" },
  { initials: "RN", name: "Rustam Nazarov",      role: "Právník, Uzbekistán" },
  { initials: "TB", name: "Tamar Beridze",       role: "Novinářka, Gruzie" },
  { initials: "HM", name: "Hassan Mortazavi",    role: "Básník, Írán" },
  { initials: "EV", name: "Elena Voronova",      role: "Lékařka, Rusko" },
  { initials: "SP", name: "Sang-jun Park",       role: "Student, Severní Korea" },
  { initials: "YD", name: "Yildiz Demir",        role: "Aktivistka, Turecko" },
  { initials: "KZ", name: "Kirill Zaitsev",      role: "Programátor, Bělorusko" },
  { initials: "AD", name: "Amina Diallo",        role: "Novinářka, Eritrea" },
  { initials: "PH", name: "Pavel Hrušov",        role: "Akademik, Rusko" },
  { initials: "SČ", name: "Selin Çelik",         role: "Právnička, Turecko" },
  { initials: "TK", name: "Timur Bekzod",        role: "Básník, Uzbekistán" },
  { initials: "OM", name: "Olena Marchuk",       role: "Učitelka, Krym" },
  { initials: "JP", name: "Jonas Petrauskas",    role: "Aktivista, Rusko" },
  { initials: "FR", name: "Farida Ruziyeva",     role: "Novinářka, Tádžikistán" },
  { initials: "MD", name: "Mikhail Denisov",     role: "Ekolog, Rusko" },
  { initials: "YN", name: "Yasmin Al-Nouri",    role: "Lékařka, Sýrie" },
  { initials: "LX", name: "Ling Xiaofeng",       role: "Profesor, Čína" },
  { initials: "VB", name: "Vira Bondarenko",     role: "Filmařka, Krym" },
];

function AvatarCard({ initials, name, role, href }: Member) {
  const inner = (
    <>
      <div
        className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center font-bebas text-black text-xl md:text-2xl tracking-wide"
        style={{ backgroundColor: "#C89A2A" }}
      >
        {initials}
      </div>
      <div className="text-center">
        <p className="text-white font-inter font-bold text-xs uppercase tracking-wider leading-snug group-hover:text-[#C89A2A] transition-colors duration-200">
          {name}
        </p>
        <div
          className="mt-1 h-px origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          style={{ backgroundColor: "#00ac93" }}
        />
        <p className="text-[#444] font-inter text-[10px] uppercase tracking-widest mt-1">
          {role}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-3 group transition-transform duration-300 hover:scale-105"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 group transition-transform duration-300 hover:scale-105">
      {inner}
    </div>
  );
}

export default function TeamSection({
  title = "Tvůrci",
  members,
  variant,
}: {
  title?: string;
  members?: Member[];
  variant?: "team" | "prisoners";
}) {
  const data = members ?? (variant === "prisoners" ? politicalPrisoners : team);

  if (variant === "prisoners") {
    return (
      <section className="relative w-full px-4 py-16 overflow-hidden">
        {/* Tmavší pozadí */}
        <div className="absolute inset-0" style={{ background: "#060606" }} />

        {/* Mříž — vertikální tyče přes celou sekci */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 10,
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0px, transparent 50px, rgba(0,0,0,0.72) 50px, rgba(0,0,0,0.18) 53px, rgba(0,0,0,0.72) 56px, transparent 58px)",
          }}
        />
        {/* Horizontální příčle */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 10,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 110px, rgba(0,0,0,0.55) 110px, rgba(0,0,0,0.1) 113px, rgba(0,0,0,0.55) 116px, transparent 118px)",
          }}
        />
        {/* Horní a spodní vigneta */}
        <div className="absolute inset-x-0 top-0 h-20 pointer-events-none" style={{ zIndex: 11, background: "linear-gradient(to bottom, #060606 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none" style={{ zIndex: 11, background: "linear-gradient(to top, #060606 0%, transparent 100%)" }} />

        {/* Obsah */}
        <div className="relative max-w-4xl mx-auto" style={{ zIndex: 2 }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ backgroundColor: "#8b1a1a" }} />
            <span
              className="text-[9px] tracking-[0.35em] uppercase font-inter font-medium"
              style={{ color: "#8b1a1a" }}
            >
              {title}
            </span>
            <span className="text-[8px] font-inter tracking-[0.2em] uppercase" style={{ color: "#2a2a2a" }}>
              — fiktivní data
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-6">
            {data.map((member, i) => (
              <AvatarCard key={`${member.initials}-${i}`} {...member} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px" style={{ backgroundColor: "#00ac93" }} />
          <span
            className="text-[9px] tracking-[0.35em] uppercase font-inter font-medium"
            style={{ color: "#00ac93" }}
          >
            {title}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          {data.map((member, i) => (
            <AvatarCard key={`${member.initials}-${i}`} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
