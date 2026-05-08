# Terrace Metrics — Project Specs

## What the app does and who uses it
Terrace Metrics is a marketing + onboarding website for a science-backed resilience platform. The audience is individuals, parents, and families looking to understand and improve their mental fitness. This first build is the **public marketing site + a login page**, plus a goal-selection → personalized-results → assessment-intro flow that sets up the eventual paid product.

## Tech stack
- **Language:** TypeScript
- **Framework:** Next.js (latest, App Router)
- **Styling:** Tailwind CSS + a small layer of CSS variables (the design tokens from `colors_and_type.css` and `marble.css` ported into `globals.css`)
- **Animations:** GSAP (`gsap` + `@gsap/react`) — used sparingly:
  - Hero: text/CTA fade-and-rise on mount, hero widget number counter
  - Section reveals on scroll (ScrollTrigger) — small fade-up only, not bouncy
  - Pricing cards: subtle stagger on enter
  - Testimonials: cross-fade slides (already in design)
- **Micro-interactions (vanilla CSS / Tailwind transitions, no GSAP needed):**
  - Buttons: hover lift (translateY -1px) + shadow grow + color shift
  - Inputs: focus ring transitions (already in design tokens)
  - Goal/plan cards: hover border + background tint + subtle scale
  - Nav links: animated underline on hover
- **Backend:** None in this build. Login submit + "Get started" buttons are placeholders for now (visual only). Supabase integration is **not** part of this scope — happy to add it next.
- **Hosting:** Vercel (config-ready, not deployed by me)

## Pages and user flows
Public — no auth required:
- `/` — Landing page. Sections (in scroll order, all wired to nav anchors):
  1. **Nav** (sticky, glass)
  2. **Hero** — green marble panel with headline, dual CTA, score-widget mockup
  3. **Personalize** ("What's most on your mind right now?") — 8 goal cards, multi-select
  4. **Outcomes** — "What changes" — 5 column-cards (Doric capital + shaft + base motif)
  5. **Journey** — 4-step process
  6. **Features** ("Everything you need in one place") — 9-card grid → linked from nav "Resources"
  7. **Testimonials** — quote carousel + 5M+/97%/40+ stats → linked from nav "About"
  8. **Pricing** — 3 column-cards (Child/Adult/Family) → linked from nav "Plans"
  9. **CTAFlow** — 4-step "Begin your resilience journey" wizard (goal → plan → account → ready)
  10. **BigCTA** — green marble closing CTA
  11. **Footer**
- `/personalized-results` — In-app view (state-driven, not a separate route in the design — but I'll make it a real route for shareability + scroll restoration). Shown after user picks goals and clicks Continue.
- `/assessment` — Assessment intro page (final step before the actual assessment, which is out of scope).

Login — own page:
- `/login` — split-screen: form left, marble panel + quote/stats right.

Nav anchor mapping (matches what user wrote in chat1):
- Plans → `#pricing`
- Resources → `#features`
- Science → `#outcomes`
- About → `#about` (testimonials)

## Data models and where data is stored
None for this build. Goal definitions and copy live in a typed `lib/goalData.ts` module (ported verbatim from the design's `goalData.jsx`). All state is in-component React state (selected goals, wizard step, carousel index).

## Third-party services
- **Google Fonts** — DM Serif Display + DM Sans (already in design tokens)
- **GSAP** — npm package
- No Stripe, no Supabase, no analytics in this scope.

## File structure (delta from CLAUDE.md template)
```
/app
  /(marketing)/page.tsx           ← Landing page composition
  /(marketing)/personalized-results/page.tsx
  /(marketing)/assessment/page.tsx
  /login/page.tsx
  layout.tsx
  globals.css                     ← design tokens (ported from colors_and_type.css + marble.css)
/components
  /sections                       ← Hero, Nav, Personalize, Outcomes, Journey, Features,
                                    Testimonials, Pricing, CTAFlow, BigCTA, Footer,
                                    PersonalizedResults, AssessmentIntro
  /ui                             ← Icon, LogoGlyph, TempleCard, Button, Input
/lib
  goalData.ts                     ← typed copy of goalData.jsx
  gsap.ts                         ← shared GSAP registration (ScrollTrigger, useGSAP)
/public
  /assets/logonotext.png          ← copied from design bundle
```

No Supabase folders, no `/lib/supabase/`, no `/app/(admin)/`, no API routes — none of those are needed for this scope.

## What "done" looks like for this task
- `npm run build` succeeds with zero TypeScript or build errors
- `npm run dev` starts cleanly; landing page loads at http://localhost:3000 with no console errors
- All 11 landing-page sections render and match the design visually (pixel-near, not pixel-perfect — fonts, colors, spacing, layout, marble texture, column motif)
- Nav anchor links scroll smoothly to the right sections
- Goal selection + Continue → routes to `/personalized-results`; Start assessment → routes to `/assessment`; Back buttons work
- Login page renders at `/login` with split-screen layout, focus states on inputs, and a working show/hide password toggle
- GSAP animations: hero entrance, hero widget number counter, section fade-ups on scroll, pricing card stagger — all subtle, none corny
- Micro-interactions: button hover lift, nav-link underline, input focus ring, goal/plan card hover — present but understated
- Full mobile redesign: every section lays out correctly on phones (≥360px), tablets, and desktop. The 1280px design is the desktop reference; mobile uses single-column stacks, smaller type scales, and condensed nav.

## Out of scope
- The actual assessment flow (after the intro screen)
- Auth backend (Supabase wiring)
- Stripe / payments
- Admin / employer dashboard
- The "tweaks panel" from the design source (that was a design-tool affordance, not a real product feature)
