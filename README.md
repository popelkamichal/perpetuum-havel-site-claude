# Perpetuum Havel – web

Next.js + Tailwind CSS, nasazeno na Vercel.

## Hero fotografie

Vlož fotografii do `public/hero-bg.jpg` — zobrazí se jako pozadí hlavní sekce
s tmavým overlayem. Bez fotky zůstane pozadí tmavé.

Doporučená fotografie: černobílý nebo desaturovaný záběr z inscenace.

## YouTube videa

V souborech `components/Hero.tsx`, `components/ArticlesSection.tsx`
a `components/VideoSection.tsx` nahraď placeholder ID skutečnými:

| Placeholder           | Sekce                        |
|-----------------------|------------------------------|
| `D0_T1T1eQC0`         | Trailer (hero)               |
| `REHEARSAL_VIDEO_ID`  | Hraj ze zkoušení             |
| `INTERVIEW_VIDEO_ID`  | Rozhovor s Petrem Boháčem    |

## Vývoj

```bash
npm install
npm run dev
```
