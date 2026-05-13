# rec.group — CLAUDE.md

## Project Overview
Agenzia di soluzioni digitali per freelancers.
Industry: Digital agency / SaaS services
UI Language: Italian
Deploy: Vercel

## Tech Stack
- Next.js App Router (TypeScript)
- Tailwind CSS 4
- lucide-react for icons
- No auth, no database — pure static landing page

## Architecture
- `app/page.tsx` — assembles all sections
- `components/Nav.tsx` — sticky navbar with mobile hamburger
- `components/Hero.tsx` — full-screen hero with stats
- `components/Services.tsx` — 6 service cards grid
- `components/Portfolio.tsx` — EventMaître + TrainerPro showcase
- `components/Cta.tsx` — contact section with email + WhatsApp
- `components/Footer.tsx` — minimal footer

## Color Palette
- Accent: #C9A84C
- Accent Light: #E8CC7A
- Accent Dark: #9A7B2E
- Background: #1A1610 (dark warm brown)
- Text: #F5F0E8

## CSS Classes (from globals.css)
- `.accent-text` — gradient text in gold
- `.accent-btn` — primary CTA button (gold fill)
- `.outline-btn` — secondary button (gold outline)
- `.glass` — frosted glass card
- `.glass-dark` — darker frosted glass (navbar)
- `.card-luxury` — dark elevated card with hover lift

## Contact Info (update in components/Cta.tsx)
- Email: recgroup.business@gmail.com
- WhatsApp: update `whatsappNumber` constant with real number

## Portfolio (update in components/Portfolio.tsx)
- EventMaître: update `href` with real URL when live
- TrainerPro: update `href` with real URL when live

## Key Patterns
- All UI strings in Italian
- Sections linked via anchor IDs: #servizi, #portfolio, #contatti
- Smooth scroll enabled in globals.css
