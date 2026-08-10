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
    bio: "Vězeň svědomí; novinář odsouzený na 22 let vězení za velezradu. Amnesty International uvádí, že trest byl udělen za jeho novinářskou práci a svobodné vyjadřování názorů.",
  },
  {
    initials: "AG", name: "Aleksei Gorinov", role: "Zastupitel, Rusko", photo: "aleksei-gorinov.jpg",
    bio: "Místní zastupitel uvězněný za veřejnou kritiku války na Ukrajině. Amnesty ho dlouhodobě řadí mezi osoby nespravedlivě odsouzené za pokojné vyjadřování.",
  },
  {
    initials: "MP", name: "Maria Ponomarenko", role: "Novinářka, Rusko", photo: "maria-ponomarenko.jpg",
    bio: "Novinářka serveru RussNews, zatčená za protiválečný článek o Mariupolu. Amnesty její případ sleduje v rámci kriminalizace pokojných projevů.",
  },
  // Bělorusko
  {
    initials: "VC", name: "Vital Chopik", role: "Aktivista, Bělorusko", photo: "vital-chopik.jpg",
    bio: "Amnesty ho řadí mezi osoby, které mají být okamžitě a bezpodmínečně propuštěny.",
  },
  // Kuba
  {
    initials: "LO", name: "Luis Manuel Otero Alcántara", role: "Umělec, Kuba", photo: "luis-otero-alcantara.jpg",
    bio: "Umělec a vůdce hnutí San Isidro; vězeň svědomí odsouzený na 5 let vězení za pokojné vyjadřování prostřednictvím umění a občanské angažovanosti.",
  },
  {
    initials: "MC", name: "Maykel Castillo Pérez", role: "Hudebník, Kuba", photo: "maykel-castillo.jpg",
    bio: "Hudebník a aktivista; vězeň svědomí odsouzený na 9 let vězení.",
  },
  {
    initials: "FN", name: "Félix Navarro Rodríguez", role: "Disident, Kuba", photo: "felix-navarro.jpg",
    bio: "Politický disident; vězeň svědomí odsouzený na 9 let vězení. Amnesty oznámila jeho návrat do vězení po zrušení podmíněného propuštění.",
  },
  {
    initials: "SN", name: "Sayli Navarro Álvarez", role: "Aktivistka, Kuba", photo: "sayli-navarro.jpg",
    bio: "Aktivistka a spoluzakladatelka hnutí Dámy v bílém; vězeňkyně svědomí odsouzená na 8 let vězení.",
  },
  {
    initials: "RP", name: "Roberto Pérez Fonseca", role: "Aktivista, Kuba", photo: "roberto-perez-fonseca.jpg",
    bio: "Aktivista zatčený po protestech 11. července 2021 za pokojné vyjadřování. Vězeň svědomí odsouzený na 10 let vězení.",
  },
  {
    initials: "LH", name: "Loreto Hernández García", role: "Aktivista, Kuba", photo: "loreto-hernandez.jpg",
    bio: "Afrokubánský aktivista za náboženská práva a lidská práva; vězeň svědomí odsouzený na 7 let vězení.",
  },
  {
    initials: "DP", name: "Donaida Pérez Paseiro", role: "Aktivistka, Kuba", photo: "donaida-perez.jpg",
    bio: "Afrokubánská aktivistka za náboženská práva a lidská práva; vězeňkyně svědomí odsouzená na 8 let vězení.",
  },
  {
    initials: "JF", name: "José Daniel Ferrer García", role: "Opoziční vůdce, Kuba", photo: "jose-daniel-ferrer.jpg",
    bio: "Lídr kubánské opozice; Amnesty ho po návratu do vězení znovu řadí mezi vězně svědomí.",
  },
  // Hongkong / Čína
  {
    initials: "JL", name: "Jimmy Lai", role: "Novinář, Hongkong", photo: "jimmy-lai.jpg",
    bio: "Vydavatel a obhájce svobody tisku; Amnesty ho označila za vězně svědomí.",
  },
  {
    initials: "CH", name: "Chow Hang-tung", role: "Právnička, Hongkong", photo: "chow-hang-tung.jpg",
    bio: "Advokátka a aktivistka bojující za připomínku represe na Náměstí nebeského klidu; Amnesty ji označila za vězeňkyni svědomí.",
  },
  {
    initials: "DJ", name: "Ding Jiaxi", role: "Právník, Čína", photo: "ding-jiaxi.jpg",
    bio: "Právník specializující se na lidská práva; vězeň svědomí odsouzený na 12 let vězení za 'podrývání státní moci'.",
  },
  {
    initials: "XZ", name: "Xu Zhiyong", role: "Akademik, Čína", photo: "xu-zhiyong.jpg",
    bio: "Akademik a aktivista hnutí Noví občané; odsouzený na 14 let vězení za 'podrývání státní moci'.",
  },
  {
    initials: "IT", name: "Ilham Tohti", role: "Ekonom, Čína", photo: "ilham-tohti.jpg",
    bio: "Ujgurský akademik; vězeň svědomí odsouzený na doživotí za údajný 'separatismus'.",
  },
  {
    initials: "ZZ", name: "Zhang Zhan", role: "Novinářka, Čína", photo: "zhang-zhan.jpg",
    bio: "Občanská novinářka; Amnesty ji zmiňuje v souvislosti s novým zatčením a odsouzením za pokojné šíření informací.",
  },
  {
    initials: "SH", name: "Sophia Huang Xueqin", role: "Novinářka, Čína", photo: "sophia-huang-xueqin.jpg",
    bio: "Novinářka a aktivistka hnutí #MeToo; uvězněná za pokojný aktivismus a obhajobu svobody projevu.",
  },
  // Turecko
  {
    initials: "ÇM", name: "Çiğdem Mater", role: "Dokumentaristka, Turecko", photo: "cigdem-mater.jpg",
    bio: "Filmová producentka, účastnice protestů v parku Gezi; vězeňkyně svědomí odsouzená na 18 let vězení.",
  },
  {
    initials: "TK", name: "Tayfun Kahraman", role: "Urbanista, Turecko", photo: "tayfun-kahraman.jpg",
    bio: "Urbanista, účastník protestů v parku Gezi; vězeň svědomí odsouzený na 18 let vězení.",
  },
  {
    initials: "MÖ", name: "Mine Özerden", role: "Dokumentaristka, Turecko", photo: "mine-ozerden.jpg",
    bio: "Dokumentaristka a kulturní aktivistka, účastnice protestů v parku Gezi; vězeňkyně svědomí odsouzená na 18 let vězení.",
  },
  {
    initials: "OK", name: "Osman Kavala", role: "Filantrop, Turecko", photo: "osman-kavala.jpg",
    bio: "Filantrop a kulturní aktivista, účastník protestů v parku Gezi; vězeň svědomí odsouzený na doživotí bez možnosti zkrácení.",
  },
  {
    initials: "CA", name: "Can Atalay", role: "Právník a poslanec, Turecko", photo: "can-atalay.jpg",
    bio: "Právník a poslanec, účastník protestů v parku Gezi; vězeň svědomí odsouzený na 18 let vězení.",
  },
  // Saúdská Arábie
  {
    initials: "WA", name: "Waleed Abu al-Khair", role: "Právník, Saúdská Arábie", photo: "waleed-abu-al-khair.jpg",
    bio: "Právník a obhájce lidských práv; Amnesty ho považuje za vězně svědomí odsouzeného na 15 let vězení.",
  },
  // Írán
  {
    initials: "NM", name: "Narges Mohammadi", role: "Aktivistka, Írán", photo: "narges-mohammadi.jpg",
    bio: "Obhájkyně lidských práv, laureátka Nobelovy ceny míru; Amnesty upozorňuje na její nové uvěznění a rizika pro její zdraví.",
  },
  {
    initials: "SM", name: "Sharifeh Mohammadi", role: "Aktivistka, Írán", photo: "sharifeh-mohammadi.jpg",
    bio: "Obhájkyně lidských a pracovních práv; Amnesty oznámila její odsouzení k trestu smrti za aktivismus v oblasti lidských práv.",
  },
  {
    initials: "PA", name: "Pakhshan Azizi", role: "Aktivistka, Írán", photo: "pakhshan-azizi.jpg",
    bio: "Kurdská humanitární pracovnice; Amnesty ji řadí mezi ženy ohrožené popravou.",
  },
  // Vietnam
  {
    initials: "CT", name: "Cấn Thị Thêu", role: "Aktivistka, Vietnam", photo: "can-thi-theu.jpg",
    bio: "Obhájkyně práva na půdu; Amnesty ji považuje za vězeňkyni svědomí uvězněnou za uplatňování svých práv.",
  },
  {
    initials: "ĐB", name: "Đặng Đình Bách", role: "Ekologický právník, Vietnam", photo: "dang-dinh-bach.jpg",
    bio: "Environmentální právník odsouzený na 5 let vězení za údajný daňový podvod; Amnesty ho zahrnula do kampaně 'Write for Rights'.",
  },
  {
    initials: "HB", name: "Hoàng Đức Binh", role: "Ekologický aktivista, Vietnam", photo: "hoang-duc-binh.jpg",
    bio: "Aktivista za životní prostředí a pracovní práva; odsouzený na 14 let vězení. Amnesty ho řadí mezi uvězněné obránce lidských práv.",
  },
  // Kambodža
  {
    initials: "TR", name: "Thun Ratha", role: "Aktivista, Kambodža", photo: "thun-ratha.jpg",
    bio: "Aktivista organizace Mother Nature Cambodia, stíhaný za ekologický aktivismus; odsouzen na 6 let vězení.",
  },
  {
    initials: "LK", name: "Long Kunthea", role: "Aktivistka, Kambodža", photo: "long-kunthea.jpg",
    bio: "Členka organizace Mother Nature Cambodia, ekologická aktivistka; odsouzena na 6 let vězení.",
  },
  {
    initials: "PK", name: "Phuon Keoraksmey", role: "Aktivistka, Kambodža", photo: "phuon-keoraksmey.jpg",
    bio: "Členka organizace Mother Nature Cambodia, ekologická aktivistka; odsouzena na 6 let vězení.",
  },
  {
    initials: "LC", name: "Ly Chandaravuth", role: "Aktivista, Kambodža", photo: "ly-chandaravuth.jpg",
    bio: "Člen organizace Mother Nature Cambodia, ekologický aktivista; odsouzen na 6 let vězení.",
  },
];
