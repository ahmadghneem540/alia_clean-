# ALIA CLEAN

Bilingual Arabic-first Next.js App Router website, statically exported for Hostinger. No backend or database required.

## Run

Use Node.js 22 or newer.

```sh
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. English pages are under `/en/`.

## Company configuration

Edit `src/lib/config.ts` for services (set `enabled: false` to hide), brand colors, approved reviews, and a licensed before/after pair. The comparison and reviews sections stay hidden until approved content is configured. Images used for service illustration are Unsplash interiors, not company work. Replace them with licensed company photos for launch; keeping images locally in public/ avoids third-party image requests.

Set public configuration in `.env.local` **before building**:

- `NEXT_PUBLIC_SITE_URL`: final HTTPS origin, without trailing slash. Required for production canonical URLs and sitemap entries; omitted rather than fabricated when unset.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: real Saudi business WhatsApp number in international format, e.g. country code 966 followed by its mobile number. No invented default is supplied.
- `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL`: approved contact channels.
- `NEXT_PUBLIC_SERVICE_AREAS`: verified areas, comma separated.
- `NEXT_PUBLIC_INSTAGRAM_URL`: approved profile URL.
- `NEXT_PUBLIC_MAP_URL`: verified Google Maps link.

Public environment variables are included in browser JavaScript. Never put secrets here. Rebuild after any configuration change.

Booking validates Saudi mobiles and required fields, then prepares an Arabic message with all details. The visitor reviews and opens it using the official wa.me URL. Opening WhatsApp does not confirm a booking. Without an approved business number, a clear message explains sending is unavailable. Contact messages use WhatsApp or the configured email client; there is no invisible form submission endpoint.

## Hostinger static hosting (recommended)

```sh
npm run typecheck
npm run build
```

Upload **the contents of `out/`** into the domain's `public_html` directory using Hostinger File Manager or SFTP. Keep subdirectories and `_next/` intact. Every route has its own directory and index.html; this is not an SPA and does not need a catch-all rewrite. Directory index resolution should be enabled. Confirm direct visits and reloads on `/booking/`, `/services/home/` and `/en/services/`. Set your host's custom error document to `/404.html` if supported.

If your hosting configuration requires it, add this `.htaccess` in `public_html`:

```apache
DirectoryIndex index.html
ErrorDocument 404 /404.html
```

Do not redirect all requests to index.html. The project uses static export, no API routes, no server actions, and unoptimized Next images. `next start` is not used with this deployment mode. Node.js is needed only on the build machine. If using a Hostinger Node.js build pipeline, run `npm ci && npm run build`, then serve `out/` with the hosting provider's static directory feature.

## Domain & HTTPS

Add your domain in Hostinger and point its DNS to the hosting account using the values shown by Hostinger (do not guess IP addresses). Activate SSL in the hosting control panel and enable HTTPS redirection. Set the final origin in NEXT_PUBLIC_SITE_URL and rebuild before uploading. Test HTTPS, `/robots.txt`, `/sitemap.xml`, metadata and both languages. Use the canonical domain consistently, including www/non-www redirects configured in hosting.

## Launch content checklist

Company review is required for privacy and terms pages. Complete real contact details, coverage, pricing/cancellation policies, correspondence retention and privacy request handling before public launch. No credentials, customer counts, ratings, history or guarantees are invented. The supplied logo is used as-is. Approved testimonials require `verified: true`; only genuine comparable before/after images with permission should be configured.

## Structure

- `src/app/[[...path]]/page.tsx`: statically generated Arabic and English pages and service details, page-specific metadata.
- `src/components/Website.tsx`: navigation, page views, booking, contact, FAQ, comparison and reviews.
- `src/lib/config.ts`: centralized company data, service catalog, translated content and WhatsApp utility.
- `src/app/globals.css`: responsive visual system, RTL/LTR and reduced-motion support.

Fonts are optimized through next/font (IBM Plex Sans Arabic and Inter); the first build needs access to the Google font servers. Photos load from Unsplash and require network access in the browser. To remove that dependency, download approved assets to public/ and update image paths.

## Company videos
The homepage shows company footage from public/. Update the catalog after adding videos with: node scripts/add-company-videos.mjs. Control visibility in src/lib/videos.ts. Videos load on demand and display in groups of six. Local preview: http://localhost:3000/#our-work.


Video covers are extracted from the first frame by scripts/add-company-videos.mjs using the development-only ffmpeg-static dependency. Generated JPEGs live in public/video-posters/ and are served using the video poster attribute without preloading the video files. Re-run the script after adding or replacing a video; existing visibility settings are preserved.


Company WhatsApp is configured as +966560519723. Service buttons open a service-specific message directly on WhatsApp; /booking/ remains available for detailed requests. Configure NEXT_PUBLIC_TIKTOK_URL and NEXT_PUBLIC_SNAPCHAT_URL with official profile URLs. Until supplied, these platforms are labeled coming soon without linking to an unrelated account. Arabic typography uses self-hosted IBM Plex Sans Arabic via next/font; body copy and controls have larger sizes for laptop readability.

