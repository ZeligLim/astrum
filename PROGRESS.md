# Astrum — project handoff

## What was built

- A complete single-page React/Vite marketing site for a web-design and development studio.
- The UX follows Apple HIG principles reviewed on August 20, 2026: clarity/simplicity through a single primary action, strong hierarchy, concise copy, accessible contrast, familiar navigation, and deliberate use of depth and motion.
- The visual language is editorial rather than a literal Apple clone: warm neutral surfaces, dense typography, one bright lime accent, generous space, and composed abstract project art.
- “shadcn-style” reusable UI base lives in `src/components/ui/Button.jsx`; it uses accessible native button semantics and clear visual variants. A future pass can introduce the full shadcn CLI registry once the product needs dialogs, forms, or menus.

## Files

- `src/main.jsx` — application composition and small interaction handlers only.
- `src/components/` — focused components for the header, sections, project artwork, and UI primitives.
- `src/data/site.js` — content/configuration arrays, kept separate from rendering.
- `src/styles.css` — complete responsive design system and layout.
- `vite.config.js` — Vite + React plugin configuration.
- `public/favicon.svg` — production favicon.
- `package.json` — React/Vite project scripts and dependencies.

## Running locally

```bash
npm install
npm run dev
```

## Functional notes

- Navigation and CTA buttons smooth-scroll to their relevant sections.
- Contact uses a real form (name, email, notes) that opens a `mailto:` draft to `hello@astrum.studio`. Swap that address in `src/data/site.js` or wire the submit handler to Formspree/Calendly when ready.
- Project imagery is created in CSS, so the page has no raster asset dependency. This keeps the visual crisp, light, and easy to change.
- `src/assets/astrum-logo.svg` is the scalable production logo: a premium monochrome continuous eight-wave mark with a single flowing contour, paired with the Astrum sans-serif wordmark and used in the header and footer (imported so production builds resolve correctly).
- SEO basics are in `index.html`: title, description, Open Graph/Twitter tags, canonical URL, theme color, and favicon.
- Hero puts the Astrum brand first, then one headline, supporting line, CTA, and full-bleed art, with a few intentional motions (copy rise, sun drift, orbit spin).
- Selected work is three full case showcases (Vela Health, Form & Found, Sonder House): summary, scope, outcome, stronger visual contrast, and a readable two-column layout (stacked on mobile) instead of cramped cards.

## Next recommended work

1. Replace demo testimonials, case copy, and social URLs with real business content in `src/data/site.js`.
2. Point contact submit at Formspree, Resend, Calendly, or another form endpoint instead of `mailto:`.
3. Add a structured full shadcn component setup if the project grows into multi-page forms, dialogs, accordions, etc.
4. Add analytics (Plausible/GA) and a real Open Graph image before publishing.
5. Deploy (Vercel, Netlify, or Cloudflare Pages) and update the canonical URL.

## Design source

Apple’s [Design principles](https://developer.apple.com/design/human-interface-guidelines/design-principles) and [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines) informed the hierarchy, simplicity, responsibility, familiarity, flexibility, craft, and delight considerations. The resulting site is original and does not use Apple assets or branding.
