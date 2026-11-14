# Northern Studio — concept

Northern Studio is an international technology and product company in preparation. The public site has to feel like a house that already knows what it is: cinematic, precise, and serious about software. It should not feel like a blog, a free page builder, or the previous studio (custom PCs, IT support, hardware).

The first visual direction, Meridian, was a daylight editorial. It was rejected as too basic. This document is the identity that replaces it: **Ion Field**.

Brand line, in both languages, set as a lockup: **Northern Studio — Building What's Next.**

Dutch, primary:

> We bouwen intelligente software, AI-gedreven systemen en technologie om bedrijven vooruit te helpen.

That sentence is purpose, not a measured outcome. The site does not claim market position, customer counts, or results it cannot show.

## Legal status

Northern Studio is not a registered company. It has no KBO/BCE number. It is a pre-incorporation project run by a private individual in Belgium. The site says that in the footer, on About, and in the privacy and terms pages. It does not show placeholder enterprise numbers.

Facts that do not exist yet live in one place, `legalEntity` in `lib/site.ts`: legal name, enterprise number, address, email. Each is `null` until it is real. The site renders a field only when the value is a non-empty string. Do not invent them.

A KBO/BCE number must be published on this website before commercial activity starts.

## Brand identity

### Name

**Northern Studio.** “Northern” is a vantage point. “Studio” means the work is made, not resold. No invented product name sits beside it.

### Mark

A letter N drawn as two stems and a diagonal, the right stem running past the top, with an ice-coloured point. It is a light in the dark, not a chrome emblem. The old metallic mark (mountains, circuits, neon green) is not reused.

The wordmark in the footer is set enormous, in the display face:

```
NORTHERN
STUDIO
```

### Colour

Dark, high contrast, luminous. Light behaves like a filament, not a flat fill.

| Token | Hex | Role |
| --- | --- | --- |
| Void | `#05060a` | Page ground. |
| Paper | `#f6f3ec` | Primary text. |
| Muted | `#c9c4d8` | Secondary text. Above 7:1 on the void. |
| Ice | `#8eebff` | Links, kickers, the north point, the primary button. |
| Violet | `#b7a4ff` | Secondary light inside the field and the hairline. |
| Gold | `#f2c48a` | A single warm filament in the shader and the brand line. |
| Error | `#ffb4b8` | Form errors, always with text. |

`color-scheme: dark` is set. The field does not flip to a light theme.

Checked intent: paper and muted on `#05060a` clear AA. Ice on the void is used for large type and controls; the primary button puts near-black text on the ice fill so the label stays readable.

### Typography

Both families are loaded with `next/font` and served by the site. No third-party font host in the browser.

- **Bricolage Grotesque** for display. Heavy weights, tight tracking, sizes up to about `8.4rem` in the hero. This is the voice of the page.
- **Manrope** for interface and body.

The previous serif-led editorial pairing was part of the rejected design. It is gone.

### Motion and the field

The hero is a full viewport. The headline is HTML and paints immediately. Behind it, a lightweight WebGL fragment shader draws five luminous ribbons — ice, violet, and one gold filament — that drift and answer the pointer. The shader is a client component. It does not gate the largest paint. If WebGL is missing, a static CSS field remains. If `prefers-reduced-motion: reduce` is set, the canvas is not animated and is hidden; the static field stays.

Elsewhere:

- Sections below the hero reveal on scroll (opacity and 28px), once.
- A hairline under the header draws in on navigation. The page itself only settles 10px. Opacity of the page stays at 1.
- Bento cells lift 4px and pick up an ice edge on hover.

Reduced motion removes animation and transition for the whole document.

### Imagery

No photography, no stock teams, no fake dashboards of named products. Depth comes from the shader, glass surfaces (`backdrop-filter`, 1px light borders), grain, and glow.

Capability sections are an asymmetric bento, each cell a link with its own light. Product places are coded interface studies — window chrome, bars, a flow, a stack — labelled with the place number and the status **In development** or **Coming soon**. They are not product names.

## Voice

Calm and concrete. No “unlock”, “seamless”, “world-class”, or “next-gen”. Services support early revenue. Products are the long-term core. Unlaunched work is marked, and unnamed.

## Information architecture

Dutch is unprefixed. English is under `/en`. The URL is the only locale signal. No locale cookie, no `Accept-Language` redirect.

| Page | Dutch | English |
| --- | --- | --- |
| Home | `/` | `/en` |
| AI Systems | `/ai-systemen` | `/en/ai-systems` |
| Software | `/software` | `/en/software` |
| Automation | `/automatisering` | `/en/automation` |
| Products | `/producten` | `/en/products` |
| Research & innovation | `/onderzoek` | `/en/research` |
| About | `/over` | `/en/about` |
| Contact | `/contact` | `/en/contact` |
| Privacy | `/privacy` | `/en/privacy` |
| Terms | `/voorwaarden` | `/en/terms` |
| Cookies | `/cookies` | `/en/cookies` |
| Accessibility | `/toegankelijkheid` | `/en/accessibility` |
| Not found | locale 404 | locale 404 |

French and German paths are drafted in `i18n/pathnames.ts` and are not routed.

There is no Services page. AI Systems, Software and Automation sit beside Products. Contact is one URL with two written forms. Neither asks for a phone number or a meeting. Legal pages sit in the footer.

## Technical architecture

- Next.js 16 App Router, React 19, TypeScript. Server Components by default.
- Tailwind CSS v4 plus one global stylesheet for the identity.
- next-intl. `localePrefix: 'as-needed'`, `localeDetection: false`, `localeCookie: false`. `hreflang` for `nl-BE`, `nl`, `en`, and `x-default`.
- The Dutch prefix is rewritten internally to `/nl` and marked so the canonical redirect does not loop.
- Forms post to `/api/contact` and `/api/interest` with server validation, a honeypot, an in-memory rate limit, and an origin check. Email is optional via Resend. See `.env.example`.
- SEO: per-page metadata, canonical URLs on `https://northernstudio.be`, generated Open Graph images, sitemap, robots, JSON-LD Organization without a telephone, address, or enterprise number.
- Security headers on every route. No analytics. No third-party scripts.
- The hero shader is local WebGL. It is not a third-party runtime and it is not required for the text to render.

## Repository and Vercel

Keep this Git repository. `main` still holds the previous site. The tag `legacy-site-backup` points at that production commit. This work lives on `new-venture-site`.

Use a new Vercel project before any production cutover. Do not create it here. Do not merge to `main` until that cutover is deliberate. DNS and domain settings are untouched.

## Open decisions

- When the project incorporates: legal name, KBO/BCE number, address, and a public email, entered in `legalEntity`. The number must be on the site before commercial activity starts.
- Resend, if forms should be forwarded.
- Retention period, processors, and counsel on the terms.
- Human French and German, if those locales go live.
- Real product names, only when a product is public.
- Whether old URLs should redirect after cutover.
- Social profiles, if any. None are linked.
