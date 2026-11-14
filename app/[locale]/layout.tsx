import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { OrganizationJsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteShell } from "@/components/site-shell";
import { fontClassName } from "@/lib/fonts";
import { htmlLang, type Locale } from "@/i18n/locales";
import { routing } from "@/i18n/routing";
import { metadataBaseUrl } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: metadataBaseUrl(),
    title: {
      default: t("titleDefault"),
      template: `%s · ${SITE_NAME}`,
    },
    description: t("description"),
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: { index: true, follow: true },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("meta");
  const language = htmlLang[locale as Locale];

  return (
    <html lang={language} className={fontClassName}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <OrganizationJsonLd description={t("description")} />
          <SiteShell footer={<SiteFooter />}>{children}</SiteShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
