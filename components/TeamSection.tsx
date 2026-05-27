const team = [
  { initials: "PB", name: "Petr Boháč", role: "Režie" },
  { initials: "RZ", name: "Roman Zotov Mikshin", role: "Choreografie" },
  { initials: "JK", name: "Jakub Kubláč", role: "Hudba" },
  { initials: "AČ", name: "Adriana Černá", role: "Dramaturgie" },
  { initials: "PK", name: "Pavla Kamanová", role: "Scéna" },
  { initials: "SR", name: "Simona Rybáková", role: "Kostýmy" },
  { initials: "DT", name: "Daniel Tesař", role: "Světelný design" },
  { initials: "LK", name: "Lukáš Kochinka", role: "Zvuk" },
];

function AvatarCard({
  initials,
  name,
  role,
}: {
  initials: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 group cursor-pointer">
      <div
        className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center font-bebas text-black text-xl md:text-2xl tracking-wide transition-transform duration-200 group-hover:scale-105"
        style={{ backgroundColor: "#C89A2A" }}
      >
        {initials}
      </div>
      <div className="text-center">
        <p className="text-white font-inter font-bold text-[10px] uppercase tracking-wider leading-snug">
          {name}
        </p>
        <p className="text-[#444] font-inter text-[9px] uppercase tracking-widest mt-1">
          {role}
        </p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px" style={{ backgroundColor: "#0ECECE" }} />
          <span
            className="text-[9px] tracking-[0.35em] uppercase font-inter font-medium"
            style={{ color: "#0ECECE" }}
          >
            Medailony tvůrců
          </span>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-4 gap-6 md:gap-10">
          {team.map((member) => (
            <AvatarCard key={member.initials} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
