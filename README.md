# LayersRank 2.0 Marketing Site

Next.js App Router marketing site focused on explainable AI hiring, fuzzy logic recruitment, confidence-weighted ranking, and GCC hiring standards.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add a blog post

1. Create a new content component in `content/blog/<slug>.tsx`.
2. Add metadata + component import in `lib/content.ts`.
3. Ensure post includes links to:
   - `/science`
   - relevant `/solutions/*` page
4. Validate metadata output in `app/resources/blog/[slug]/page.tsx`.

> Note: this repo is structured for MDX-style content, but uses TSX content components currently due package registry restrictions in this environment.

## Add a whitepaper

1. Create content component in `content/whitepapers/<slug>.tsx`.
2. Register in `lib/content.ts`.
3. Verify route in `/resources/whitepapers/[slug]`.

## SEO checklist

- One H1 per page, semantic H2/H3 hierarchy.
- Metadata + canonical on every route via `makeMetadata`.
- JSON-LD: Organization (global), SoftwareApplication (global), Article (blog), FAQ (`/science`).
- Sitemap generated in `app/sitemap.ts`.
- robots.txt generated in `app/robots.ts`.
- Internal links across science, blog cluster, and solutions pages.
- Optimized `next/image` usage with descriptive alt text.
