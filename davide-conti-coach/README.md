# Davide Conti — Coach

Sito portfolio / acquisizione clienti per **Davide Conti**, personal trainer e online coach.
Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · nessun database, nessun backend.

---

## Avvio locale

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build di produzione
```

---

## Dove si modificano i contenuti

**Tutto il testo del sito vive in un unico file: [`content/site.ts`](content/site.ts).**
Non serve toccare i componenti: si cambia quel file e il sito si aggiorna.

| Blocco | Cosa contiene |
|---|---|
| `identity` | nome, ruolo, città, email, numero WhatsApp, Instagram, P.IVA, dominio |
| `hero` | badge, titolo, sottotitolo, CTA, i 3 numeri in evidenza |
| `marquee` | parole della fascia scorrevole |
| `method` | le 4 fasi del metodo |
| `transformations` | casi prima/dopo (nome, età, settimane, risultato, foto) |
| `programs` | i 3 percorsi con prezzi e feature |
| `about` | biografia, citazione, certificazioni, foto ritratto |
| `numbers` | i 4 contatori animati |
| `testimonials` | recensioni |
| `faq` | domande e risposte |
| `contact` | testi del modulo di candidatura |
| `footer` | claim e crediti |

### Il flag `DRAFT`

In cima a `content/site.ts` c'è:

```ts
export const DRAFT = true;
```

Finché è `true`, sopra le sezioni **Numeri**, **Risultati** e **Testimonianze** compare
un piccolo avviso "contenuti dimostrativi". Serve a non spacciare per reali dei
placeholder. **Appena i dati veri sono dentro, metterlo a `false`.**

---

## Cosa serve da Davide per andare online

- [ ] Numero **WhatsApp** reale (`identity.whatsapp`, formato `39XXXXXXXXXX` senza `+`)
- [ ] **Email** di contatto (`identity.email`)
- [ ] **Città** / zona di lavoro (`identity.city`)
- [ ] **P.IVA** se attività individuale (`identity.vatId`)
- [ ] **Biografia reale** (`about.paragraphs`) e **certificazioni con ente e anno** (`about.credentials`)
- [ ] **Foto ritratto** in `public/` → percorso in `about.portrait` (consigliato 1200×1500, verticale)
- [ ] **Foto prima/dopo** in `public/trasformazioni/` → percorsi in `transformations.cases[].before` / `.after`
      (con **liberatoria scritta** dei clienti ritratti)
- [ ] **Testimonianze reali e autorizzate** (`testimonials.items`)
- [ ] **Listino reale** (`programs.items[].price`)
- [ ] **Numeri reali** (`hero.stats`, `numbers.items`)
- [ ] Poi: `DRAFT = false`

Finché una foto manca, il sito mostra un segnaposto grafico coerente col design:
non si rompe nulla.

---

## Deploy su Vercel

Il progetto sta in una sottocartella del repo `recgroup-marketing`, quindi in fase
di import va indicata la **Root Directory**.

1. [vercel.com/new](https://vercel.com/new) → importa il repo `Ralph-arch4/recgroup-marketing`
2. **Root Directory** → `davide-conti-coach`
3. Framework: Next.js (rilevato in automatico) · Build: `next build` · nessuna variabile d'ambiente
4. Deploy

Dopo il primo deploy, aggiornare `identity.siteUrl` in `content/site.ts` con il dominio
definitivo: serve a canonical, Open Graph, sitemap e dati strutturati.

---

## Cosa c'è dentro

- Hero a tutto schermo con contatori animati e ritratto
- Fascia scorrevole delle specializzazioni
- Metodo in 4 fasi
- Contatori animati on-scroll
- **Slider prima/dopo trascinabile** (mouse, touch e tastiera)
- Tre percorsi con CTA che aprono WhatsApp con il messaggio già scritto
- Sezione biografia con citazione editoriale
- Testimonianze, FAQ ad accordion
- **Modulo di candidatura che compone un messaggio WhatsApp** — nessun dato transita
  o viene salvato dal sito
- Barra di avanzamento lettura, pulsante WhatsApp flottante, grana filmica
- SEO: metadata completi, Open Graph generato a build time, `sitemap.xml`, `robots.txt`,
  JSON-LD `ProfessionalService`
- Accessibilità: `prefers-reduced-motion`, target touch ≥ 44px, slider comandabile da tastiera
- Zero overflow orizzontale da 390px in su

## Struttura

```
app/
  layout.tsx           metadata, font, JSON-LD
  page.tsx             composizione delle sezioni
  globals.css          design token e utility
  icon.tsx             favicon generata
  opengraph-image.tsx  immagine social generata
  sitemap.ts robots.ts
components/            una sezione per file
content/site.ts        TUTTI i contenuti
```

## Palette

| Token | Valore |
|---|---|
| Fondo | `#0A0A0B` |
| Superficie | `#111113` |
| Testo | `#F4F3F0` |
| Accento | `#FF4A1C` |
| Accento caldo | `#FFB020` |

Font: **Archivo** (display), **Instrument Serif** (corsivi editoriali), **Inter** (testo).
