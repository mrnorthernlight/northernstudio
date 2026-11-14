# Northern Studio

The public website for Northern Studio, a technology and product company. Dutch is the primary language (`/`). English is available under `/en`. The previous PC-builder site remains on `main` and on the tag `legacy-site-backup`.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm test
```

`npm test` checks that the Dutch and English message files share a structure, then runs the Playwright smoke tests against `next start`. Build first. Install the browser once with `npx playwright install chromium`.

## Languages

Active locales are `nl` (unprefixed, `lang="nl-BE"`) and `en`. French and German paths are drafted in `i18n/pathnames.ts` and are not routed. To add one: write `messages/<locale>.json` by hand, add the locale in `i18n/locales.ts` and `i18n/routing.ts`, and merge that locale's paths into `pathnames`. There is no machine-translation widget and no locale cookie. The URL is the language.

## Forms and email

`/api/contact` and `/api/interest` validate on the server, ignore a filled honeypot, and rate-limit by IP (8 requests per 10 minutes, in memory on the server process). They work with no external service.

To forward messages, set all three variables and redeploy. See `.env.example`.

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` — inbox that receives enquiries
- `CONTACT_FROM_EMAIL` — a sender on a domain verified in Resend, for example `Northern Studio <notifications@your-verified-domain>`

If any value is missing, a valid form is accepted and the page says it was not forwarded. Do not commit real keys.

The in-memory limit is per server instance. It is not a global limit across many serverless isolates.

## Legal placeholders

The footer and the legal pages show `[TODO: …]` for the legal name, KBO/BCE number, address and contact email. Do not replace them with guesses.

## Canonical host

Canonical URLs and the sitemap use `https://northernstudio.be`. This repository change does not alter DNS, nameservers or the production domain.
