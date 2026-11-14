# Northern Studio — concept

Northern Studio is an international technology and product company. The public site has to feel like a house that already knows what it is: precise, calm, and serious about software. It should not feel like a campaign for an AI agency, and it should not inherit the previous studio (custom PCs, IT support, hardware).

The founder released the earlier colour constraint. Near-black, purple atmosphere, and neon green are not the identity. Those signals now read as the default “AI studio” template, and the neon green also belongs to the retired hardware mark. This document is the identity that replaces them.

Brand line, in both languages, set as a lockup: **Northern Studio — Building What's Next.**

The Dutch site says the same thing in its own voice. The line itself stays in English, as a name. The headline under it is written in the language of the page.

## Brand identity

### Name

**Northern Studio.** Two words, no symbol, no invented product name beside it. “Northern” is a vantage point: distance, clarity, a line you can navigate by. “Studio” is the claim that the work is made, not resold.

The spoken line under the name:

> We build intelligent software, AI-powered systems and technology designed to move businesses forward.

Dutch, primary:

> We bouwen intelligente software, AI-gedreven systemen en technologie om bedrijven vooruit te helpen.

That sentence is purpose, not a measured outcome. The site does not claim market position, customer counts, or results it cannot show.

### Mark

A letter N drawn as a survey: two stems and a diagonal, the right stem running slightly past the top. At the top of that stem, a small oxide dot — the north point on a chart. Strokes are square-cut and thin. No circle, no mountain, no circuit trace, no metallic gradient.

The old emblem (chrome N, snow peaks, aurora, circuit pins) described a PC builder. It is not reused.

The wordmark is set in the grotesque, in two lines:

```
NORTHERN
Studio
```

“NORTHERN” in small caps with open tracking. “Studio” in the serif italic, in pine. At 16 pixels the mark still reads as N. The favicon is the mark reversed out of ink, with the oxide dot kept.

### Colour

Daylight, not a dark product shot. The field is limestone, the ink is a soft black, the institutional colour is deep pine, and oxide is only the north point.

| Token | Hex | Role |
| --- | --- | --- |
| Field | `#e8e6e0` | Page ground. Cool limestone, not pure white. |
| Paper | `#f6f5f1` | Raised strips, form panels, text on pine. |
| Ink | `#141614` | Text, footer ground, the mark. |
| Muted | `#2f3834` | Secondary prose. Still dark. |
| Pine | `#143d2c` | Kickers, links, the one solid field, the primary button. |
| Pine deep | `#0d281c` | Button hover. |
| Wash | `#e4eee8` | A single pale pine panel (research teaser). |
| Oxide | `#8a3d12` | The north dot, and a dashed cue behind `[TODO]` markers. |
| Error | `#8d1d1d` | Form errors, always with text, never colour alone. |
| Line | `#c9c3b6` | Rules between sections. |
| Stroke | `#4e4b45` | Input underlines. Non-text contrast against the field is above 3:1. |

Checked pairs, WCAG relative contrast:

- Ink on field, about 14.6:1.
- Muted on field, above 7:1.
- Pine on field, about 9.7:1.
- Paper on pine, about 11:1.
- Paper on ink, about 16:1.
- Oxide on field, about 6.1:1. Oxide is not used for small text. TODO markers are ink, with the word TODO in the string.
- Error on field, about 7.2:1.

There is no gradient mesh, no glow, no neon, and no purple. Flat colour and a rule do the work. One pine band on the homepage is the only full-bleed colour moment, so it stays rare.

`color-scheme: light` is set on purpose. The identity does not flip with the operating system.

### Typography

Two families, both loaded with `next/font` and served from the site. No third-party font host in the browser, no tracking script.

- **Newsreader** for headlines, the italic second line of the hero, and plate titles. It is a text serif with enough contrast to feel published, and it does not carry the “startup display serif” look of the faces currently used on every template.
- **Schibsted Grotesk** for interface, navigation, and body. It is a Nordic grotesque: technical, a little humanist, not Inter, not Geist.

Scale:

- Hero, `clamp(3.1rem, 6.6vw, 6.4rem)`, line-height 0.92, slight negative tracking.
- Page title, about `clamp(2.7rem, 5vw, 4.75rem)`.
- Body, 17px, line-height 1.65, measure around 62 characters.
- Kickers, 12.5px, uppercase, tracking 0.16em, pine.

Hierarchy comes from size, italic, and the serif/grotesque change. Secondary text is not washed out.

### Motion

The page is still on first paint. The hero is not faded in, because an opacity animation delays the largest paint.

What moves:

- On navigation, the page settles 6 pixels upward over 520ms, with a cubic ease-out. Opacity stays at 1.
- A pine hairline under the header draws from the left over 700ms. After it finishes, it is just a rule.
- A text link’s arrow shifts 4 pixels. Rows change colour. No shadow, no scale-up, no bounce.

What does not move: no looping gradient, no parallax, no scroll hijack, no video, no blinking dot.

`prefers-reduced-motion: reduce` removes animation and transition on the whole document. The hairline and the content are simply there.

### Imagery and illustration

No photography until there is something real to photograph. No stock teams, no handshakes, no abstract 3D, no fake product screenshots.

The drawing language is a plate in a manual:

- Catalog numbers (01–07) set large, in pine at low opacity, behind the page title.
- Figures that are real ordered lists, styled as a stack or a flow: a system, a build, an automation. The words are the diagram, so a screen reader gets the same content.
- Rules, a left-hand meridian, and the oxide dot.

The meridian is a one-pixel vertical line in the left margin of the content, from under the header to the footer, with the oxide dot at its top. It is the margin of a notebook, not a decoration in the hero. It is hidden below the `lg` breakpoint so it does not collide with type.

Product presentation is a catalog of empty plates. A plate has an index, the words “no name yet”, and a status in words (`In development` or `Coming soon`). Emptiness is the point. A grey card grid of imaginary apps would look like a launch that has not happened.

## Voice

Calm, concrete, first person plural. No “unlock”, “seamless”, “world-class”, “next-gen”, or Dutch equivalents used as filler.

The company is a technology and product company. It intends to own its software and its IP. Services — systems, platforms, automation — are how early work is paid for. Products are the long-term core. The site says that in one place, plainly, and does not repeat it as a slogan in every section.

Unlaunched work is marked **In development** or **Coming soon**. Placeholder plates are labelled as reserved places. They are not given fictional product names.

Nothing on the site invents customers, partners, testimonials, awards, statistics, team members, an office address, a company number, or a history.

## Information architecture

Dutch is the primary language and is unprefixed (`northernstudio.be/…`). English lives under `/en`. The URL is the only locale signal. The site does not guess from `Accept-Language`, and it does not set a locale cookie.

| Page | Dutch | English | Role |
| --- | --- | --- | --- |
| Home | `/` | `/en` | The line, the position, four ways in, principles. |
| AI Systems | `/ai-systemen` | `/en/ai-systems` | How intelligent systems, agents, and organisational use are approached. |
| Software | `/software` | `/en/software` | Engineering, platforms, digital products, agreed ownership. |
| Automation | `/automatisering` | `/en/automation` | Workflows, integrations, a trail a person can stop. |
| Products | `/producten` | `/en/products` | Reserved plates and a notify-me form. |
| Research & innovation | `/onderzoek` | `/en/research` | Open questions. Not a publication list. |
| About | `/over` | `/en/about` | Mission, vision, principles. No history. |
| Contact | `/contact` | `/en/contact` | A written message, and a business enquiry. |
| Privacy | `/privacy` | `/en/privacy` | Controller, data, rights. |
| Terms | `/voorwaarden` | `/en/terms` | Use of this website. |
| Cookies | `/cookies` | `/en/cookies` | Cookieless. No banner. |
| Accessibility | `/toegankelijkheid` | `/en/accessibility` | WCAG 2.2 AA aim, and how to report a barrier. |
| Not found | locale 404 | locale 404 | Custom, with a way home and a way to write. |

French and German are drafted as paths only, in `i18n/pathnames.ts`, and are not routed. There are no machine-translated pages. Turning a language on means: add it to the locale list, add a human translation file, and merge the drafted paths.

### Why this shape

The requested pages are all here. Three adjustments:

1. **There is no “Services” page.** AI Systems, Software, and Automation are peers of Products in the navigation. A services index would make the company look like an agency with a product tab. The homepage is where the relationship is stated: services support early revenue, products are the core.
2. **Contact is one URL with two forms** — a written message, and a business enquiry — because both are the same channel: writing. A second URL would not be a new decision. Neither form asks for a phone number or a meeting.
3. **Legal, cookies, and accessibility sit in the footer**, not in the primary navigation, so the bar stays a table of contents of the work.

Catalog numbers are a reading aid, not a second navigation: 01 AI, 02 Software, 03 Automation, 04 Products, 05 Research, 06 About, 07 Contact.

## Technical architecture

- **Next.js 16 App Router, React 19, TypeScript.** Server Components by default. Client JavaScript is the menu and the forms.
- **Tailwind CSS v4** for layout, and one global stylesheet for the identity (type, meridian, plates, forms, motion). No component kit.
- **next-intl** for routing. Localised pathnames, `localePrefix: 'as-needed'`, `localeDetection: false`, `localeCookie: false`. `hreflang` is `nl-BE`, `nl`, `en`, and `x-default` (Dutch). `lang` on the document is `nl-BE` or `en`.
- **Forms** post to `/api/contact` and `/api/interest`. Shared server validation, a honeypot, an in-memory rate limit (8 requests per 10 minutes per IP), and an origin check. Without JavaScript the same endpoints accept a normal form post and redirect back. With JavaScript, field errors are shown in place.
- **Email is optional.** If `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` are all set, the server sends a plain-text message through the Resend API. If they are not set, the form still validates and tells the sender, honestly, that it was not forwarded. Preview and local development need no account. See `.env.example` and the README.
- **Rate limiting** lives in process memory. On a single Node server that is real. On several serverless instances it is per instance, not global. It is the right default without a paid store. A shared store can replace the module later without changing the forms.
- **SEO.** Per-page title and description, canonical URLs on `https://northernstudio.be`, language alternates, Open Graph and Twitter images from `/og` (generated, no runtime font fetch), `app/sitemap.ts`, `app/robots.ts`, and JSON-LD `Organization` in the locale layout. The schema has no email, telephone, address, founder, or `sameAs`, because those facts are not confirmed.
- **Security headers** on every route: Content-Security-Policy, `nosniff`, `X-Frame-Options: DENY`, Referrer-Policy, Permissions-Policy, and HSTS. `poweredByHeader` is off. The CSP does not allow third-party scripts. `upgrade-insecure-requests` is omitted so local and preview HTTP checks are not rewritten.
- **Cookieless.** No analytics, no tag manager, no locale cookie, no banner. The previous `@vercel/analytics` dependency is not carried over.
- **Accessibility target.** WCAG 2.2 AA: one `h1`, landmarks, skip link, visible focus, labels, error text, `aria-invalid`, status regions, keyboard menu (Escape, inert background), and the reduced-motion rule above.
- **Tests.** Message files must share a key structure. Playwright, against `next start`, checks every sitemap URL in both languages, metadata, the 404, form validation, the honeypot, rate limiting, the no-JS post, and the absence of the old hardware positioning.

Legal identity on the page is a definition list of explicit placeholders: `[TODO: wettelijke naam]`, `[TODO: KBO/BCE-nummer]`, `[TODO: adres]`, `[TODO: contact-e-mail]`. They are never filled with guesses. The phone number that appeared on the previous site is not shown.

## Repository and Vercel

**Keep this Git repository. Do not open a second one for the cutover.** `main` still holds the previous site. The tag `legacy-site-backup` points at that production commit. This work lives on `new-venture-site`. One history, one review, a rollback that does not depend on a second remote.

**Use a new Vercel project before any production cutover. Do not create it in this work.** The project already linked to this repository is very likely bound to the live domain and to `main`, and it may still carry commerce environment variables from the PC builder (Stripe and related keys). A branch preview on the existing project is useful and does not change DNS. Merging this branch to `main` would be a production deploy if that project auto-deploys `main`. That merge should wait until the founder chooses the cutover.

A separate Vercel project, from this same repository, can host the new site on a preview hostname with empty environment variables. The production domain stays where it is until someone deliberately moves it. This concept does not recommend, and this change does not perform, any DNS, nameserver, or domain-setting edit.

## Open decisions

These are for the founder, not for the site to invent.

- Legal name, KBO/BCE number, address, and the contact email that should replace the TODO markers. The previous site showed `info@northernstudio.be` and a mobile number. The number is intentionally absent. The email is not copied across until it is confirmed.
- Whether Resend (or another mailer) will send the forms, and from which verified address.
- How long enquiry and interest messages are kept. The privacy page states the principle and leaves the period open.
- Confirm the hosting and email processors, and the data-processing terms.
- Have counsel read the terms, the liability wording, and the choice of law. The page says Belgian operation and marks the legal review as TODO.
- Human translations for French and German, if and when those locales should go live.
- Real product names, at the moment a product is actually public. Plates stay unnamed until then.
- Whether old URLs (PC builder, IT help, and the rest) should redirect after cutover. They are not part of this site.
- Social profiles, if any. None are linked.
- A designer’s redraw of the mark, if the founder wants a file beyond the SVG in the repo.
