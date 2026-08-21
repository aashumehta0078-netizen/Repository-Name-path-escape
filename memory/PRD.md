# Mansi Beauty Care — PRD

## Original Problem Statement
Modern, elegant, premium responsive website for "Mansi Beauty Care", a ladies beauty salon in Zundal, Ahmedabad, Gujarat. Goal: attract local customers searching for beauty parlour/salon services in Zundal and drive Call / WhatsApp / Book Appointment conversions. React + TypeScript + Tailwind, cream/ivory + rose-gold luxury aesthetic, strong local SEO, no invented business info (placeholders where missing).

## Architecture
- Frontend: React 19 + TypeScript + Tailwind CSS (craco/react-scripts), `@/` alias
- Backend: FastAPI (untouched — site is fully static/frontend-driven; booking goes through WhatsApp deep links, no server needed)
- Key files:
  - `src/config/site.ts` — single source for business info (phone, WhatsApp, URLs) — PLACEHOLDERS marked
  - `src/data/services.ts` — 15 services with `available` flags
  - `src/data/gallery.ts` — gallery images (placeholder stock photos, swappable)
  - `src/data/reviews.ts` — clearly marked SAMPLE reviews
  - `src/components/*` — Navbar, HeroSection, AboutSection, ServicesSection, WhyChooseUsSection, BridalFeatureSection, GallerySection, ReviewsSection, LocationSection, AppointmentCTASection, Footer, MobileStickyBar, QuickBookingModal, BookingContext, Reveal
  - `public/index.html` — SEO title/meta/OG/canonical + BeautySalon JSON-LD
  - `public/robots.txt`, `public/sitemap.xml`

## User Personas
- Local women in Zundal / Chandkheda / Motera / Vaishnodevi Circle seeking regular beauty services
- Brides-to-be researching bridal makeup in Zundal
- Mobile-first visitors who convert via WhatsApp or a phone call

## Implemented (2026-08-21)
- Sticky glass navbar (desktop + mobile drawer) with Book Appointment CTA
- Hero: "Your Beauty, Our Expertise", trust badge "Trusted Beauty Care in Zundal", dual CTAs, bridal/salon imagery
- About with 3 feature cards (Professional Care, Quality Beauty Services, Comfortable Experience)
- 15-service catalogue with category filter tabs (Makeup/Hair/Skin/Nails/Grooming), per-service Book Now (pre-fills modal)
- Why Choose Us — 4 cards exactly per brief
- Full-width bridal feature section with Book Bridal Consultation (WhatsApp deep link)
- Masonry gallery with filters (All/Makeup/Hair/Facial/Nails/Salon), lazy-loaded images, descriptive alt text
- Reviews section with clearly-marked SAMPLE reviews + "See More Reviews on Google"
- Location section: Zundal map embed, Get Directions / Call / WhatsApp buttons
- Appointment CTA banner (Call Now / WhatsApp Now)
- Footer with quick links, popular services, social placeholders, © 2026 line
- Mobile sticky bottom bar (Call / WhatsApp / Book Appointment)
- Quick booking modal → generates pre-filled WhatsApp message (name, service, date, time)
- SEO: unique title, meta description, OG tags, canonical placeholder, BeautySalon JSON-LD, one H1, semantic H2/H3, robots.txt, sitemap.xml, natural local keywords (Zundal, Chandkheda, Motera, Vaishnodevi Circle, Ahmedabad)
- TypeScript conversion of the scaffold (tsconfig, index.tsx, App.tsx, typescript@5 pinned)

## Placeholders the owner must replace
- Phone number + WhatsApp number (`src/config/site.ts`) — currently `+91 XXXXX XXXXX`
- Exact shop address and opening hours
- Real customer reviews (`src/data/reviews.ts`)
- Real salon photos (`src/data/gallery.ts`)
- Instagram / Facebook URLs (`src/config/site.ts`)
- Final live domain in canonical/OG/sitemap/robots/JSON-LD

## Backlog
- P0: Owner supplies real phone/WhatsApp/address/hours → wire into site.ts + JSON-LD
- P1: Replace stock gallery/hero images with real salon photos
- P1: Replace sample reviews with real Google reviews
- P2: Service pricing table (once owner shares prices)
- P2: Real Google Maps embed with exact salon pin
- P2: Instagram feed section

## Test Credentials
None — no authentication on this site.
