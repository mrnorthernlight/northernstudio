export const locales = ["nl", "en"] as const;

export type Locale = (typeof locales)[number];

/** Not routed. Add a locale here only after a human translation exists. */
export const plannedLocales = ["fr", "de"] as const;

export const htmlLang: Record<Locale, string> = {
  nl: "nl-BE",
  en: "en",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
