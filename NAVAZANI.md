# Navázání na projekt — Perpetuum Havel

Doprovodný web k inscenaci **Perpetuum Havel** (Laterna magika / Národní divadlo).
Statický propagační microsite v češtině.

- **Živý web:** https://www.perpetuumhavel.cz
- **Repozitář:** `popelkamichal/perpetuum-havel-site-claude`
- **Stav dokumentu:** 20. 11. 2026

---

## 1. Rychlá orientace

| | |
|---|---|
| **Produkční větev** | `cloudflare` — **jen tahle větev jde na web** |
| **Hosting** | Cloudflare Workers (statické soubory) |
| **Framework** | Next.js 16 (App Router), statický export |
| **Styly** | Tailwind CSS |
| **Písmo** | Montserrat (Google Fonts, s `latin-ext` kvůli češtině) |
| **Akcentní barva** | `#00ac93` (tyrkysová), pozadí `#080808` |
| **Měření** | Google Analytics 4, `G-ZL8SGX59RM` — až po souhlasu |

### Větve

| Větev | K čemu je | Stav |
|---|---|---|
| **`cloudflare`** | **produkce** — vše, co je na webu; zároveň výchozí větev | aktuální |
| `varianta-din` | záloha s písmem DIN Next LT Pro | zmrazená, viz §6 |

Jiné větve repozitář nemá. Původní větev pro Vercel (`claude/cool-albattani-C67qZ`)
byla 20. 11. 2026 smazána — viz §3.

---

## 2. Jak se nasazuje (Cloudflare — reálná cesta)

Nasazení je plně automatické:

```
push do větve cloudflare  →  Cloudflare si sám stáhne zdrojáky
                          →  npm ci + next build
                          →  obsah ./out nasadí jako statické soubory
                          →  za pár minut je to na www.perpetuumhavel.cz
```

Žádný build se neposílá z počítače, žádné `wrangler deploy` ručně. Stačí `git push`.

**Konfigurace** je ve `wrangler.jsonc` — jmenuje worker a říká, že se servíruje
adresář `./out`. Build parametry (příkaz, výstupní adresář) jsou nastavené
v Cloudflare dashboardu, ne v repozitáři.

### Domény

- **`www.perpetuumhavel.cz` je primární** adresa.
- `perpetuumhavel.cz` (apex) se na `www` přesměrovává pravidlem *Redirect Rule*.
- Zapnuté *Always Use HTTPS* — bez něj požadavky přes `http://` na pravidlo
  nesedly a apex přes HTTP hlásil „Nezabezpečeno".
- Doména je registrovaná u **WEDOS**, DNS obsluhuje Cloudflare.
  `.cz` domény používají u CZ.NIC objekt **NSSET**, ne prostá pole pro nameservery.

### Jak vrátit nasazení zpět

1. **Nejrychleji:** Cloudflare dashboard → Workers & Pages → projekt →
   *Deployments* → u staršího nasazení *Rollback to this deployment*. Do 30 sekund.
2. **Čistě přes Git:** `git revert <commit>` a push. Zůstane poctivá historie.

---

## 3. Vercel — jak to funguje a proč se nepoužívá

Projekt na Vercelu **vznikl** a je pořád propojený, ale **produkce tam neběží**.
Kdyby se k němu někdo vracel, tady je stav:

### Na produkční větvi je Vercel záměrně vypnutý

`vercel.json` na větvi `cloudflare`:

```json
{
  "framework": "nextjs",
  "ignoreCommand": "exit 0"
}
```

`ignoreCommand` s návratovým kódem 0 říká Vercelu **„tenhle build přeskoč"**.
Díky tomu push do `cloudflare` nespouští paralelní nasazení na Vercelu.
Kdyby se to mělo obnovit, stačí `ignoreCommand` odstranit.

### Větev pro Vercel už neexistuje

`claude/cool-albattani-C67qZ` byla **20. 11. 2026 smazána**. Byla to do té doby
výchozí větev repozitáře, takže se nejdřív musela výchozí přepnout na `cloudflare`
(Settings → General → Default branch) — GitHub výchozí větev smazat nedovolí.

Důvod: měla poslední commit z **8. 9. 2026**, zatímco produkce z 18. 9., a byla
oproti ní **striktně pozadu** — 27 commitů navíc v historii, ale v obsahu nic,
co by produkce neměla. Chybělo jí:

- `components/Analytics.tsx` — měření GA4
- `lib/consent.ts`, `components/ConsentControls.tsx`, `app/zasady-cookies/` — souhlas s cookies
- `components/ShareButtons.tsx` — sdílecí tlačítka pod články
- `lib/articleMeta.ts` — náhledy článků při sdílení
- `app/sitemap.ts`, `app/robots.ts` — mapa webu a robots
- `public/FOTO1–4.jpg` — fotky v článcích
- aktualizovaná data vězňů, patička, ticker, karty na úvodu

Spolu s ní se smazala i funkce **„Vězeň dne"** (denní rotace vybraného vězně
na `/vezni`), která existovala jen tam. Na produkci se záměrně nikdy nenasadila
a bylo rozhodnuto, že není potřeba.

### Kdyby se někdo na Vercel vracel

Konfigurace by se musela přepnout zpátky — produkce je stavěná pro statický
export na Cloudflare:

| | `cloudflare` (produkce) | co by Vercel potřeboval |
|---|---|---|
| `next.config.js` | `output: "export"` | bez exportu (běží na serveru) |
| HTTP hlavičky | `public/_headers` | `headers()` v `next.config.js` |
| `wrangler.jsonc` | je | nepotřebný |
| `vercel.json` | build vypnutý (`ignoreCommand`) | `ignoreCommand` odstranit |

**Pozor:** funkce `headers()` v `next.config.js` se statickým exportem
**nedělá vůbec nic** — proto jsou na produkci hlavičky v `public/_headers`.

Navíc je tu licenční háček: free tarif Vercelu („Hobby") je určený jen pro
**nekomerční osobní projekty**. Web Národního divadla by pod to nespadal a
vyžadoval by placený tarif. Cloudflare tohle omezení nemá.

---

## 4. Co je hotové

### Obsah

- **Úvodní stránka** — hero s trailerem, ticker se čtyřmi citacemi z recenzí,
  čtyři článkové karty, dvě YouTube Shorts, rozhovor, tvůrci, karusel vězňů, patička
- **Čtyři články** v `app/clanek/` — kompletní texty, každý s vlastní fotkou
- **`/vezni`** — 38 politických vězňů, u každého jméno + země + text
- **`/zasady-cookies`** — vlastní stránka se zásadami a ovládáním souhlasu

### Funkce

- **Souhlas s cookies** — lišta, `localStorage` pod klíčem `cookie-consent`,
  vlastní událost `cookie-consent-change`, aby komponenty reagovaly hned
- **GA4 až po souhlasu** — vkládá se doslova oficiální úryvek od Googlu,
  ale spustí se teprve po „Přijmout vše"; odvolání souhlasu měření vypne
- **Sdílecí tlačítka** pod každým článkem — Facebook, X, LinkedIn, WhatsApp,
  e-mail, kopírování odkazu a nativní sdílení na mobilu
- **Náhledy při sdílení** — každý článek má vlastní titulek, popis a fotku
- **SEO** — `sitemap.xml`, `robots.txt`, kanonické odkazy na `www`
- **Mobil** — ověřeno na 360, 412 a 915 px, na výšku i na šířku

### Fotky v článcích

| Článek | Soubor | Ořez |
|---|---|---|
| Slovo beze slov za vězně bez slávy (Putna) | `FOTO1.jpg` | `center 85%` |
| Vězení a bdělost (Glanc) | `FOTO2.jpg` | `center 25%` |
| Pantomima Václava Havla (Petišková) | `FOTO3.jpg` | střed |
| Roman Zotov-Mikshin (Sedláková) | `FOTO4.jpg` | střed |

Ořez se posouvá vlastností `imagePosition` v `components/ArticlePage.tsx`.
Hero je široký a nízký (max 50 % výšky okna), takže u fotky 3:2 je vidět jen
prostřední pás — u FOTO1 a FOTO2 by jinak padly hlavy mimo záběr.
**Na mobilu na výšku se neořezává nic**, je vidět celá fotka.

---

## 5. Otevřené úkoly

| | Co | Poznámka |
|---|---|---|
| 1 | **Kredit Petra Boháče** | Má „Námět, scénář a režie", Radim Vizváry má „Námět". Slovo *Námět* je tak dvakrát. Ptal jsem se, jestli má Boháčovi zůstat jen „Scénář a režie" — **nezodpovězeno**. Soubor `components/TeamSection.tsx`. |
| 2 | **Popisky videí** | První short má „Short z Avignonu", druhý jen „Short". Druhý by si zasloužil konkrétnější název. `app/page.tsx`, `reelLabel`. |
| 3 | **Mrtvý kód: Instagram** | `components/InstagramEmbed.tsx` se už nepoužívá, ale `ContentPair.tsx` ho pořád importuje a má prop `instagramUrl`. Instagram se z webu vypustil. Lze smazat. |
| 4 | **Nepoužité fonty DIN** | `public/fonts/DINNextLTPro-*.woff` nejsou nikde v kódu použité, ale **nasazují se a jsou veřejně stažitelné**. Je to komerčně licencované písmo — stojí za zvážení je z `public/` odstranit (záloha zůstane na větvi `varianta-din`). |
| 5 | **Aktualizace Next.js** | Zamčeno na 16.3.0, k dispozici je 16.3.5 (jen opravy chyb). Záměrně neaktualizováno — viz §7. |
| 6 | **Google Search Console** | Web do ní ještě není přidaný. Ověření projde přes stejný účet jako GA4, pak vložit `sitemap.xml`. Urychlí indexaci. |

> **Hotovo 20. 11. 2026:** zastaralá větev pro Vercel smazána a výchozí větví
> repozitáře je nově `cloudflare` (viz §3).

---

## 6. Rozhodnutí, která padla (a proč)

**Písmo Montserrat, ne DIN.** Nejdřív Montserrat, pak se na přání zkusil DIN Next
LT Pro, ale grafikovi se víc líbil Montserrat. Vrátilo se zpět a varianta s DIN
zůstala zmrazená na větvi `varianta-din`, kdyby ji někdo vyžadoval. Montserrat je
asi o 20 % širší než DIN — po přepnutí se musely doladit velikosti písma
v kartách, aby se titulky nelámaly na moc řádků.

**Měření až po souhlasu.** Lišta i stránka se zásadami návštěvníkovi slibují, že
se měření spustí teprve se souhlasem. Kdyby GA běželo hned všem, byl by to na webu
Národního divadla nepravdivý údaj o zpracování osobních údajů. Proto se oficiální
úryvek od Googlu vkládá až po kliknutí na „Přijmout vše".

**YouTube bez souhlasové brány.** Videa se načítají technikou „fasáda" — do kliknutí
je vidět jen náhledový obrázek, žádný požadavek na YouTube neodejde. Proto
přehrávač nemusí čekat na souhlas. **Instagram** bránu potřeboval, a nakonec se
z webu vypustil úplně.

**Sdílení přes obyčejné odkazy, ne oficiální widgety.** Widgety od Facebooku a X
načítají cizí skripty a nastavují cookies — musely by za souhlasovou bránu.
Obyčejné `<a href>` odkazy na sdílecí adresy nenačítají nic. Ověřeno: **nula
požadavků na cizí servery**.

**Data vězňů sjednocená podle Excelu.** U každého jen **jméno + země + text**,
žádné funkce ani zastávané pozice. Zdroj je `lib/prisoners.ts` a je **jediný** —
`PrisonersSection.tsx` si kdysi držel vlastní kopii, která se rozešla s pravdou
a na úvodní stránce se zobrazovaly staré texty.

**„Vězeň dne" na produkci není.** Funkce se zkoušela, ale na `cloudflare` se
záměrně nenasadila.

**Fotky zmenšené na 2000 px.** Originály měly 6000×4000 px (24 Mpx), což musí
telefon celé dekódovat. Po zmenšení a kompresi: 1 855 kB → 397 kB, bez viditelné
ztráty kvality. Komprimovalo se z originálů, ne z už zmenšených verzí.

**Zamčená verze Next.js.** `package-lock.json` drží 16.3.0, takže Cloudflare staví
pokaždé stejnou verzi. Nasazení je deterministické a nepřepne se samo.

---

## 7. Na co si dát pozor

### ⚠️ Nikdy nepřidávat domény do `wrangler.jsonc`

**Tohle shodilo web dvakrát.** Domény `perpetuumhavel.cz` i `www.perpetuumhavel.cz`
jsou připojené přes **Cloudflare dashboard** a patří tam. Když se přidají i do
`wrangler.jsonc` jako `routes` s `custom_domain: true`, wrangler je zkusí vytvořit
znovu, build spadne a **worker zůstane bez jakékoli verze** — web přestane
existovat, i když je zóna ve stavu Active. Varování je i v komentáři přímo
v `wrangler.jsonc`. Nemazat ho.

### ⚠️ `NEXT_PUBLIC_*` se dosazuje při buildu

Proměnné prostředí nastavené jako runtime proměnné workeru se do statického
exportu **nikdy nedostanou**. Proto je měřicí ID GA4 napsané přímo v kódu —
je to stejně veřejný údaj, putuje v HTML každé stránky.

### ⚠️ `next build` si sám přepisuje konfiguraci

Po lokálním buildu bývají změněné `tsconfig.json` (Next mění `jsx`, doplňuje
`target`, přeformátuje) a někdy `package.json` + `package-lock.json` (npm povýší
Next). **Tyhle změny necommitovat** — nejsou to obsahové úpravy a měnily by
nastavení překladu a verzi frameworku na živém webu bez jakékoli kontroly:

```bash
git restore package.json package-lock.json tsconfig.json
```

### ⚠️ Hlavičky patří do `public/_headers`

`headers()` v `next.config.js` se statickým exportem nefunguje. Cache hlavičky
pro obrázky a fonty jsou v `public/_headers`.

### Další drobnosti

- **Pracovní stránky** `/preview`, `/preview-scroll` a `/countdown` fungují, ale
  jsou v `robots.txt` zakázané pro vyhledávače. Nejsou ani v mapě webu.
- **Kanonická adresa je `www`.** Odkazy pro sdílení i metadata se skládají
  z konstanty `SITE_URL` v `app/layout.tsx` a `lib/articleMeta.ts`.
- **Čeština potřebuje `latin-ext`** — bez té podmnožiny Montserratu chybí
  háčky a čárky.
- **Nové fotky** patří do `public/`, pak se přiřadí v `app/clanek/*/page.tsx`
  (vlastnosti `image` a případně `imagePosition`) **a zároveň** v metadatech
  pro sdílení v témže souboru.

---

## 8. Lokální vývoj

```bash
npm install
npm run dev          # vývojový server na http://localhost:3000
npm run build        # statický export do ./out
npx serve out        # náhled hotového buildu
```

Před nasazením se vyplatí projít build v prohlížeči, hlavně na mobilních
šířkách — hero fotky a karty na úvodu se v různých šířkách ořezávají jinak.

---

## 9. Kam se dívat, když něco nefunguje

| Potíž | Kde hledat |
|---|---|
| Web hlásí „There is nothing here yet" | Spadl build. Skoro jistě `routes` ve `wrangler.jsonc` — viz §7. |
| GA4 nic neměří | DevTools → Síť → filtr `collect`. Chybí-li, nebyl dán souhlas, nebo blokuje rozšíření prohlížeče. Odpověď **204 neznamená**, že se zapsalo do konkrétní vlastnosti — Google odpovídá 204 i na neplatné ID. |
| Změna se neprojevila | Jde o správnou větev? Produkce je **jen** `cloudflare`. |
| „Nezabezpečeno" na apexu | Zkontrolovat *Always Use HTTPS*. Často je to ale jen cache prohlížeče a doplnění `http://` z historie. |
| Náhled sdílení ukazuje úvodní stránku | Článku chybí vlastní metadata — `articleMetadata()` v `app/clanek/*/page.tsx`. |
