export interface Member {
  initials: string;
  name: string;
  role: string;
  photo?: string;
  bio?: string;
}

export const members: Member[] = [
  // Rusko
  {
    initials: "IS", name: "Ivan Safronov", role: "Novinář, Rusko", photo: "ivan-safronov.jpg",
    bio: "Vězeň svědomí; novinář odsouzený na 22 let za údajnou velezradu. Amnesty uvádí, že jde o trest za novinářskou práci a svobodu projevu.",
  },
  {
    initials: "AG", name: "Aleksei Gorinov", role: "Zastupitel, Rusko", photo: "aleksei-gorinov.jpg",
    bio: "Protiválečný komunální politik; vězněn za veřejnou kritiku války proti Ukrajině. Amnesty jej dlouhodobě uvádí mezi nespravedlivě vězněnými za pokojný projev.",
  },
  {
    initials: "MP", name: "Maria Ponomarenko", role: "Novinářka, Rusko", photo: "maria-ponomarenko.jpg",
    bio: "Novinářka RusNews; vězněná za protiválečný příspěvek o Mariupolu. Amnesty ji uvádí v kontextu ruské kriminalizace protiválečného projevu.",
  },
  // Bělorusko
  {
    initials: "VC", name: "Vital Chopik", role: "Aktivista, Bělorusko", photo: "vital-chopik.jpg",
    bio: "Běloruský případ zmiňovaný Amnesty mezi osobami, které mají být okamžitě a bezpodmínečně propuštěny.",
  },
  // Kuba
  {
    initials: "LO", name: "Luis Manuel Otero Alcántara", role: "Umělec, Kuba", photo: "luis-otero-alcantara.jpg",
    bio: "Umělec a lídr hnutí San Isidro; vězeň svědomí, 5 let vězení za pokojný umělecký a občanský projev.",
  },
  {
    initials: "MC", name: "Maykel Castillo Pérez", role: "Hudebník, Kuba", photo: "maykel-castillo.jpg",
    bio: "Hudebník a aktivista; vězeň svědomí, 9 let vězení.",
  },
  {
    initials: "FN", name: "Félix Navarro Rodríguez", role: "Disident, Kuba", photo: "felix-navarro.jpg",
    bio: "Politický disident; vězeň svědomí, 9 let vězení; Amnesty zmiňuje návrat do vězení po zrušení podmínky.",
  },
  {
    initials: "SN", name: "Sayli Navarro Álvarez", role: "Aktivistka, Kuba", photo: "sayli-navarro.jpg",
    bio: "Aktivistka a spoluzakladatelka Damas de Blanco; vězeňkyně svědomí, 8 let vězení.",
  },
  {
    initials: "RP", name: "Roberto Pérez Fonseca", role: "Aktivista, Kuba", photo: "roberto-perez-fonseca.jpg",
    bio: "Aktivista; odsouzen po protestech 11J, mimo jiné za pokojný projev; vězeň svědomí, 10 let vězení.",
  },
  {
    initials: "LH", name: "Loreto Hernández García", role: "Aktivista, Kuba", photo: "loreto-hernandez.jpg",
    bio: "Afro-kubánský náboženský a lidskoprávní aktivista; vězeň svědomí, 7 let vězení.",
  },
  {
    initials: "DP", name: "Donaida Pérez Paseiro", role: "Aktivistka, Kuba", photo: "donaida-perez.jpg",
    bio: "Afro-kubánská náboženská a lidskoprávní aktivistka; vězeňkyně svědomí, 8 let vězení.",
  },
  {
    initials: "JF", name: "José Daniel Ferrer García", role: "Opoziční vůdce, Kuba", photo: "jose-daniel-ferrer.jpg",
    bio: "Opoziční lídr; Amnesty jej znovu označuje za vězně svědomí po návratu do vězení.",
  },
  // Hongkong / Čína
  {
    initials: "JL", name: "Jimmy Lai", role: "Novinář, Hongkong", photo: "jimmy-lai.jpg",
    bio: "Vydavatel a obhájce svobody médií; Amnesty jej označila za vězně svědomí.",
  },
  {
    initials: "CH", name: "Chow Hang-tung", role: "Právnička, Hongkong", photo: "chow-hang-tung.jpg",
    bio: "Právnička a aktivistka připomínající Tchien-an-men; Amnesty ji označila za vězeňkyni svědomí.",
  },
  {
    initials: "DJ", name: "Ding Jiaxi", role: "Právník, Čína", photo: "ding-jiaxi.jpg",
    bio: "Lidskoprávní právník; vězeň svědomí, 12 let za „podvracení státní moci“.",
  },
  {
    initials: "XZ", name: "Xu Zhiyong", role: "Akademik, Čína", photo: "xu-zhiyong.jpg",
    bio: "Právní vědec a aktivista New Citizens Movement; 14 let za „podvracení státní moci“.",
  },
  {
    initials: "IT", name: "Ilham Tohti", role: "Ekonom, Čína", photo: "ilham-tohti.jpg",
    bio: "Ujgurský akademik; vězeň svědomí, doživotí za údajný separatismus.",
  },
  {
    initials: "ZZ", name: "Zhang Zhan", role: "Novinářka, Čína", photo: "zhang-zhan.jpg",
    bio: "Občanská novinářka; Amnesty ji zmiňuje v souvislosti s opětovným zadržením/odsouzením za pokojné informování.",
  },
  {
    initials: "SH", name: "Sophia Huang Xueqin", role: "Novinářka, Čína", photo: "sophia-huang-xueqin.jpg",
    bio: "Novinářka a #MeToo aktivistka; vězněná za pokojný aktivismus a svobodu projevu.",
  },
  // Turecko
  {
    initials: "ÇM", name: "Çiğdem Mater", role: "Dokumentaristka, Turecko", photo: "cigdem-mater.jpg",
    bio: "Filmová producentka; Gezi, vězeňkyně svědomí, 18 let.",
  },
  {
    initials: "TK", name: "Tayfun Kahraman", role: "Urbanista, Turecko", photo: "tayfun-kahraman.jpg",
    bio: "Urbanista; Gezi, vězeň svědomí, 18 let.",
  },
  {
    initials: "MÖ", name: "Mine Özerden", role: "Dokumentaristka, Turecko", photo: "mine-ozerden.jpg",
    bio: "Kulturní pracovnice a dokumentaristka; Gezi, vězeňkyně svědomí, 18 let.",
  },
  {
    initials: "OK", name: "Osman Kavala", role: "Filantrop, Turecko", photo: "osman-kavala.jpg",
    bio: "Filantrop a kulturní činitel; Gezi, vězeň svědomí, doživotí bez podmíněného propuštění.",
  },
  {
    initials: "CA", name: "Can Atalay", role: "Právník a poslanec, Turecko", photo: "can-atalay.jpg",
    bio: "Právník a zvolený poslanec; Gezi, vězeň svědomí, 18 let.",
  },
  // Saúdská Arábie
  {
    initials: "WA", name: "Waleed Abu al-Khair", role: "Právník, Saúdská Arábie", photo: "waleed-abu-al-khair.jpg",
    bio: "Právník a obránce lidských práv; Amnesty jej dlouhodobě označuje za vězně svědomí, 15 let.",
  },
  // Írán
  {
    initials: "NM", name: "Narges Mohammadi", role: "Aktivistka, Írán", photo: "narges-mohammadi.jpg",
    bio: "Obránkyně lidských práv a nositelka Nobelovy ceny; Amnesty uvádí její znovuvěznění a ohrožení zdraví.",
  },
  {
    initials: "SM", name: "Sharifeh Mohammadi", role: "Aktivistka, Írán", photo: "sharifeh-mohammadi.jpg",
    bio: "Obhájkyně práv žen a pracujících; Amnesty uvádí trest smrti v souvislosti s její lidskoprávní činností.",
  },
  {
    initials: "PA", name: "Pakhshan Azizi", role: "Aktivistka, Írán", photo: "pakhshan-azizi.jpg",
    bio: "Kurdská humanitární pracovnice; Amnesty ji uvádí mezi ženami ohroženými popravou.",
  },
  // Vietnam
  {
    initials: "CT", name: "Cấn Thị Thêu", role: "Aktivistka, Vietnam", photo: "can-thi-theu.jpg",
    bio: "Obhájkyně pozemkových práv; Amnesty ji uvádí jako vězeňkyni svědomí, vězněnou za výkon práv.",
  },
  {
    initials: "ĐB", name: "Đặng Đình Bách", role: "Ekologický právník, Vietnam", photo: "dang-dinh-bach.jpg",
    bio: "Environmentální právník; odsouzen na 5 let za údajné daňové úniky, Amnesty jej vede v kampani Write for Rights.",
  },
  {
    initials: "HB", name: "Hoàng Đức Binh", role: "Ekologický aktivista, Vietnam", photo: "hoang-duc-binh.jpg",
    bio: "Environmentální a pracovněprávní aktivista; 14 let vězení, Amnesty jej uvádí mezi vězněnými obránci práv.",
  },
  // Kambodža
  {
    initials: "TR", name: "Thun Ratha", role: "Aktivista, Kambodža", photo: "thun-ratha.jpg",
    bio: "Mother Nature Cambodia; odsouzen za environmentální aktivismus, 6 let vězení.",
  },
  {
    initials: "LK", name: "Long Kunthea", role: "Aktivistka, Kambodža", photo: "long-kunthea.jpg",
    bio: "Mother Nature Cambodia; environmentální aktivistka, 6 let vězení.",
  },
  {
    initials: "PK", name: "Phuon Keoraksmey", role: "Aktivistka, Kambodža", photo: "phuon-keoraksmey.jpg",
    bio: "Mother Nature Cambodia; environmentální aktivistka, 6 let vězení.",
  },
  {
    initials: "LC", name: "Ly Chandaravuth", role: "Aktivista, Kambodža", photo: "ly-chandaravuth.jpg",
    bio: "Mother Nature Cambodia; environmentální aktivista, 6 let vězení.",
  },
];
