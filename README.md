# Terrace Metrics

A Next.js marketing + onboarding site for Terrace Metrics — a science-backed resilience platform.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + a small layer of CSS variables for design tokens
- **GSAP** for the hero entrance animations
- IntersectionObserver-based fade-up reveals for everything else

## Pages

- `/` — landing page (hero, goal-picker, outcomes, journey, features, testimonials, pricing, CTA wizard, big CTA)
- `/personalized-results` — goal-driven results screen (set after picking goals on `/`)
- `/assessment` — assessment intro
- `/login` — split-screen login with marble panel

Selected goals persist across routes via `sessionStorage`.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Project structure

```
app/                    Next.js App Router pages + globals.css
components/sections/    Each landing-page section
components/ui/          Icon, LogoGlyph
lib/                    goalData (typed), useReveal hook, sessionStorage helper
public/assets/          logonotext.png (column-glyph logo)
```

## Notes

- The `.design-source/` folder (the original Claude Design HTML/CSS bundle this was built from) is gitignored.
- No backend yet — login submits are placeholders. Supabase wiring is next.
