import type { Metadata } from "next";
import type { Locale } from "@/i18n/locales";
import { getPathname } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/pathnames";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function metadataBaseUrl() {
  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL(SITE_URL);
}

export function localizedUrl(locale: Locale, href: AppPathname) {
  const path = getPathname({ locale, href });
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function pageMetadata({
  locale,
  href,
  title,
  description,
  eyebrow,
}: {
  locale: Locale;
  href: AppPathname;
  title: string;
  description: string;
  eyebrow: string;
}): Metadata {
  const canonical = localizedUrl(locale, href);
  const dutch = localizedUrl("nl", href);
  const english = localizedUrl("en", href);
  const image = `/og?title=${encodeURIComponent(title)}&eyebrow=${encodeURIComponent(eyebrow)}`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        "nl-BE": dutch,
        nl: dutch,
        en: english,
        "x-default": dutch,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === "nl" ? "nl_BE" : "en",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
