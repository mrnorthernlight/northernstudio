import { defineRouting } from "next-intl/routing";
import { locales } from "./locales";
import { pathnames } from "./pathnames";

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: "nl",
  localePrefix: "as-needed",
  localeDetection: false,
  localeCookie: false,
  pathnames,
});
