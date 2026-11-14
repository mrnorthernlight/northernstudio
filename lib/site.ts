export const SITE_URL = "https://northernstudio.be";
export const SITE_NAME = "Northern Studio";
export const BRAND_LINE = "Building What's Next.";
export const COPYRIGHT_YEAR = 2026;

/**
 * Legal entity details.
 *
 * Northern Studio is not incorporated. There is no KBO/BCE number, no
 * registered office and no confirmed public email. Leave every field null
 * until the fact exists. Do not invent values.
 *
 * A KBO/BCE number must be published on this website before commercial
 * activity starts. LegalIdentity renders a field only when its value is a
 * non-empty string.
 */
export const legalEntity = {
  status: "pre-incorporation" as const,
  country: "BE" as const,
  legalName: null as string | null,
  kbo: null as string | null,
  address: null as string | null,
  email: null as string | null,
};
