# Aggarwala website

Next.js 15 (App Router, TypeScript) site for Aggarwala Inc.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run typecheck
```

## Where things live

- `app/page.tsx` – home page (all copy is in the arrays at the top of the file)
- `app/disclaimer/page.tsx`, `app/terms/page.tsx` – legal pages (sections arrays)
- `components/` – `Logo`, `SiteFooter`, `LegalLayout`, `icons`
- `lib/site.ts` – company name, email, phone, address, copyright, legal "last updated" date
- `app/globals.css` – all styles and design tokens (CSS variables at the top)

## To fill in before launch

- `LEGAL_LAST_UPDATED` in `lib/site.ts`
- Payment terms, governing law and venue in `app/terms/page.tsx` (marked in [BRACKETS])
- Privacy Policy page (the footer shows it as plain text until it exists)
- Real photos and logo, if you want them (the site currently uses an inline SVG mark and no photos)
- Have a lawyer review the Disclaimer and Terms text
