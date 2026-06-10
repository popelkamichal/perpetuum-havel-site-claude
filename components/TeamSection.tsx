const team = [
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

function AvatarCard({
  initials,
  name,
  role,
  href,
}: {
  initials: string;
  name: string;
  role: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3 group transition-transform duration-300 hover:scale-105"
    >
      <div
        className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center font-bebas text-black text-xl md:text-2xl tracking-wide"
        style={{ backgroundColor: "#C89A2A" }}
      >
        {initials}
      </div>
      <div className="text-center">
        <p className="text-white font-inter font-bold text-[10px] uppercase tracking-wider leading-snug group-hover:text-[#C89A2A] transition-colors duration-200">
          {name}
        </p>
        <div
          className="mt-1 h-px origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          style={{ backgroundColor: "#00ac93" }}
        />
        <p className="text-[#444] font-inter text-[9px] uppercase tracking-widest mt-1">
          {role}
        </p>
      </div>
    </a>
  );
}

export default function TeamSection({ title = "Tvůrci" }: { title?: string }) {
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
          {team.map((member) => (
            <AvatarCard key={member.initials} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
