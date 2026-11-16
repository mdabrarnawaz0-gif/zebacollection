# Zeba Collection — website

Next.js 16 (static export) · React 19 · Tailwind CSS 4 · GSAP ScrollTrigger · Canvas 2D · TypeScript.
Languages: English `/`, Kannada `/kn/`, Hindi `/hi/`, Urdu `/ur/` (RTL).

## Run
    npm install
    npm run dev                 # http://localhost:3000
    NEXT_PUBLIC_SITE_URL=https://yourdomain.com npm run build   # static site in ./out

Upload the `out/` folder to any host (Netlify, Vercel, Cloudflare Pages, cPanel…).

## Edit business details
`lib/site.ts` — phones, WhatsApp number, email, address, Instagram, opening hours, map query.
Fill `instagram` and `hours` there and they appear automatically (header, footer, Google schema).

## Edit text / translations
`lib/i18n/en.ts` (and kn / hi / ur) — all copy, best sellers, fabric guide, FAQ.

## Logo
`npm run logo` regenerates `public/logo-*.svg`, favicon and app icons from `scripts/make_logo.py`.

## Model
`lib/figure.ts` draws the rotating model. Sherwani colours are in `SHERWANI_STYLES`.

## Model videos
`public/videos/` holds the four scroll-scrubbed model videos (suit, shirt, kurta, sherwani) as MP4 + WebM with poster images.
To replace one, keep the same file name. The wardrobe section is `components/ScrollModel.tsx`.

## Wardrobe videos
`public/videos/{suit,shirt,kurta,sherwani}` exist twice: full size (900×720) for laptops/desktops and `-m` (portrait 9:16, 450×800, with floor space for the text overlay on phones, about a third of the size) for phones, tablets, Data Saver and 2G/3G; phones also get a "Skip to collections" button. Each has .mp4 (H.264) and .webm (VP9) plus a poster JPG. `ScrollModel.tsx` picks the clip, loads only the current and next outfit, and falls back mp4 → webm → full size → poster if a file fails. To replace a clip, re-encode with a keyframe every 2 frames (`-g 2`) and `-movflags +faststart` so scrubbing stays smooth.
