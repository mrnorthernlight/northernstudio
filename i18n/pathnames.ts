/**
 * Internal pathnames (the App Router folders) mapped to public URLs.
 * French and German drafts live in `futurePathnames` and are not routed.
 * Activating one means: add the locale, add messages/<locale>.json written
 * by a person, and copy that locale's paths into `pathnames`.
 */
export const pathnames = {
  "/": "/",
  "/ai-systems": {
    nl: "/ai-systemen",
    en: "/ai-systems",
  },
  "/software": "/software",
  "/automation": {
    nl: "/automatisering",
    en: "/automation",
  },
  "/products": {
    nl: "/producten",
    en: "/products",
  },
  "/research": {
    nl: "/onderzoek",
    en: "/research",
  },
  "/about": {
    nl: "/over",
    en: "/about",
  },
  "/contact": "/contact",
  "/privacy": "/privacy",
  "/terms": {
    nl: "/voorwaarden",
    en: "/terms",
  },
  "/cookies": "/cookies",
  "/accessibility": {
    nl: "/toegankelijkheid",
    en: "/accessibility",
  },
} as const;

export type AppPathname = keyof typeof pathnames;

export const futurePathnames = {
  fr: {
    "/": "/",
    "/ai-systems": "/systemes-ia",
    "/software": "/logiciels",
    "/automation": "/automatisation",
    "/products": "/produits",
    "/research": "/recherche",
    "/about": "/a-propos",
    "/contact": "/contact",
    "/privacy": "/confidentialite",
    "/terms": "/conditions",
    "/cookies": "/cookies",
    "/accessibility": "/accessibilite",
  },
  de: {
    "/": "/",
    "/ai-systems": "/ki-systeme",
    "/software": "/software",
    "/automation": "/automatisierung",
    "/products": "/produkte",
    "/research": "/forschung",
    "/about": "/ueber",
    "/contact": "/kontakt",
    "/privacy": "/datenschutz",
    "/terms": "/bedingungen",
    "/cookies": "/cookies",
    "/accessibility": "/barrierefreiheit",
  },
} as const;
