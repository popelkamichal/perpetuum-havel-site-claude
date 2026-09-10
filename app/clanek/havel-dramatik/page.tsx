import ArticlePage from "@/components/ArticlePage";
import { articleMetadata } from "@/lib/articleMeta";

export const metadata = articleMetadata({
  slug: "havel-dramatik",
  title: "Slovo beze slov za vězně bez slávy",
  description:
    "České jaro 1989. Nadějeplné jaro. Obavplné jaro. Jako předtím jaro 1968 a jaro 1945 a jaro 1848 a třeba také jaro 1620. Bude lépe? Většinou nebylo. Píše Martin C. Putna.",
  image: "/FOTO1.jpg",
  width: 2000,
  height: 1333,
});

const ODSTAVCE = [
  "České jaro 1989. Nadějeplné jaro. Řada disidentských spisovatelů a dramatiků už smí být vydávána a hrána. Řada povolených umělců už více či méně otevřeně podporuje proměnu společnosti. Ale i obavplné jaro. V lednu byly tvrdě potlačeny demonstrace u příležitosti výročí sebeupálení Jana Palacha, který protestoval ani ne přímo proti ruským tankům, ale proti českým srabům, kolaborujícím s okupací. V lednu byl během těchto demonstrací zatčen a ve vězení znovu sedí Václav Havel.",
  "Už zase ve vězení. Stálo mu to za to? Stín vězení provází jeho rodinu už od počátků komunistické vlády, od stíhání jeho dědečka Hugo Vavrečky a strýce Miloše Havla. První se vyhnul vězení „včasným“ úmrtím, druhý si odseděl dva roky za pokus o emigraci – načež emigroval.",
  "Václav Havel by mohl býval také emigrovat. Komunisté by byli bývali rádi. Ale raději zůstal a riskoval vězení. Seděl už dvakrát, nepočítaje kratší zadržení a vězení domácí. Je toto už opravdu naposledy?",
  "Stín vězení – a téma vězení. Václav Havel proměnil svoji vězeňskou zkušenost v amatérsky filosofující knihu Dopisy Olze, která mu paradoxně vynesla světovou pověst myslitele, v sebeironickou hru Largo desolato, líčící paradoxní tíži svobody bývalého vězně, a v další texty. I z tohoto věznění na jaře 1989, o kterém se mohlo doufat, ale nikoli vědět, že je poslední, se zrodily texty – i když jaksi „mimokanonické“. Když Václava Havla v únoru soudili, nahráli jeho bratr Ivan a jeho švagrová Dagmar tajně ono soudní jednání a doslovně přepsali, jako by to byla divadelní hra. Tato „téměř Havlova“ hra s názvem Podněcování a trest už ale nestihla vyjít během onoho zrychlujícího se roku – došlo na ni až přesně po dvaceti letech. Když pak tedy Václav Havel naposledy seděl, napsal Olze do dopisu text pro novou hru o vězení – tentokrát paradoxně hru beze slov.",
  "Když pak tedy Václav Havel…",
  "…a dost!",
  "Co když už dost bylo Václava Havla?",
  "Protože čím více se znovu a znovu a znovu mluví o Václavu Havlovi a jeho souzení a jeho věznění, tím více jsou jakoby zapomínáni „ti ostatní“. Ti, kdo byli stejně jako on zatčeni a souzeni o Palachově týdnu – Petr Placák, Jana Petrová, Stanislav Penc, Alexandr Vondra… „a další“. A zase to nespravedlivé „a další“! Z nich dokonce leckteří seděli déle než Havel. Některé vysvobodila z vězení až podzimní revoluce. A vždycky jsou ještě „ti ostatní“, „a další“. A dnes sedí tolik lidí například v Bělorusku – v té zemi, jejíž svobodymilovní občané se tolik upínali k modelu české sametové revoluce a konkrétně k Václavu Havlovi, a svět na ně téměř úplně zapomněl.",
  "Ne, není tento svět svět spravedlivý. Nejen že málokdy nadějeplné jaro dozraje v podzimní žeň svobody. Ještě navíc jsou vždycky ti málokteří, jejichž boje a strasti jsou předmětem zájmu a starostí a petic a biografií a hagiografií – a „ti ostatní“, „ti další“.",
  "Když byl Havel vězněn na počátku osmdesátých let, napsal Ivan Martin Jirous – ten, který si odseděl ještě mnohem více – ve sbírce Magorovo borágo:",
  "„Na to si nestěžuju,“ dalo by se navázat na Magorovu dávnou supliku pro spisovatele Heinricha Bölla, jenž býval v západní Evropě jedním z hlasů bránících pronásledované spisovatele z Evropy podrobené Rusku. „Na to si nestěžuju“ – tak to ve světě jest. Jsou různé role v dramatu tohoto světa, role protagonistů a role přihrávačů a role chóru. Tak praví i apoštol Pavel v prvním listě Korinťanům: „Jsou různé dary, ale tentýž Duch, jsou různé služby, ale tentýž Pán, jsou různá působení, ale všechno ve všech působí tentýž Bůh. (…) Tělo se přece neskládá z jedné části, ale z mnoha. (…) Bůh ale složil tělo tak, že dal větší pozornost těm podřadnějším, aby v těle nevládlo rozdělení, ale aby si jeho jednotlivé části navzájem prokazovaly stejnou péči. Vždyť trpí-li jedna část, všechny části trpí s ní, a je-li jedna část poctěna, všechny části se s ní radují.“ (1K 12,4-6.14.24-26)",
  "„Na to si nestěžuju.“ Těžko si stěžovat, že Václav Havel dostal onu roli protagonisty, a jiní nikoliv. Jiní třeba byli ještě statečnější; jiní třeba byli stíháni ještě mnohem, mnohem víc; jiní třeba byli ještě lepšími spisovateli, natož mysliteli. Možná to byla absurdní hra souvislostí a náhod. Takto však byla rozehrána. Jde tedy o to, co Václav Havel s tou rolí, která mu připadla, udělal.",
  "Když si tedy někdo bude stěžovat, že Václav Havel mluví ve svých hrách a pak i esejích a pak i prezidentských projevech až příliš o Václavu Havlovi a jeho vězeňské i jiné zkušenosti – snad právě tato drobná hra o vězni anonymním, neprivilegovaném, nepodporovaném je určitou korekcí, ba určitým pokáním za svou sebesvětastřednost. A fakt, že jde – u Havla tak protismyslně, tak „protihavlovsky“ – o hru beze slov, lze chápat jako symbolický: Havel, který téhož roku píše svou erbovní esej Slovo o slovu, se zde vzdává slov, aby prostředky jinými-než-svými vzdal hold „těm ostatním“. Nevědomky tak vzdává hold i Pavlovu verši „Bůh ale složil tělo tak, že dal větší pozornost těm podřadnějším, aby v těle nevládlo rozdělení, ale aby si jeho jednotlivé části navzájem prokazovaly stejnou péči.“",
];

const BASEN = [
  "Sovětský svaz",
  "požírá nejlepší z nás.",
  "Teď se rozhodl sežrat Václava Havla.",
  "Pravda,",
  "žere i jiné, žere desítky a desítky milionů jiných,",
  "o nichž si myslí, že je žere bezejmenně.",
  "A žere je bezejmenně.",
  "Naše slabost, netečnost a lhostejnost",
  "mu to umožňuje (…)",
  "Dávno jsme na ně zapomněli.",
  "Sežral Ukrajinu.",
  "Žere pomalu, byzantsky, plíživě, celej svět.",
  "Je horší než plíseň.",
  "Ale, Heinrichu Bölle,",
  "na to si nestěžuju.",
  "Když jste se rozhodli mu to dát, dejte mu to.",
  "Vy, Západ.",
  "ALE AŤ NÁM NEŽERE VÁCLAVA HAVLA!",
];

export default function Page() {
  return (
    <ArticlePage
      slug="havel-dramatik"
      imagePosition="center 85%"
      tema="Slovo beze slov za vězně bez slávy"
      autor="Martin C. Putna"
      image="/FOTO1.jpg"
      perex="České jaro 1989. Nadějeplné jaro. Obavplné jaro. Jako předtím jaro 1968 a jaro 1945 a jaro 1848 a třeba také jaro 1620. Bude lépe? Většinou nebylo. Roku 1968 přijely ruské tanky, roku 1848 generál Windischgrätz, roku 1620 žoldnéři, kterým dle habsburských legend velela sama pomstychtivá Panna Maria. Roku 1945 byly ruské tanky většinou zprvu vítány, a jen menší část si uvědomovala, že i to jsou tanky okupační."
    >
      {ODSTAVCE.slice(0, 10).map((t, i) => <p key={i}>{t}</p>)}

      <blockquote
        className="pl-5 border-l-2 my-8 not-italic"
        style={{ borderColor: "#00ac93" }}
      >
        {BASEN.map((v, i) => (
          <span key={i} className="block leading-relaxed text-[#aaa]">{v}</span>
        ))}
      </blockquote>

      {ODSTAVCE.slice(10).map((t, i) => <p key={i + 10}>{t}</p>)}
    </ArticlePage>
  );
}
