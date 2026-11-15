import type { MetadataRoute } from "next";
import { locales } from "@/i18n/locales";
import { pathnames, type AppPathname } from "@/i18n/pathnames";
import { localizedUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const hrefs = Object.keys(pathnames) as AppPathname[];

  return hrefs.flatMap((href) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, href),
      changeFrequency: "monthly" as const,
      priority: href === "/" ? 1 : 0.7,
      alternates: {
        languages: {
          "nl-BE": localizedUrl("nl", href),
          nl: localizedUrl("nl", href),
          en: localizedUrl("en", href),
          "x-default": localizedUrl("nl", href),
        },
      },
    })),
  );
}
