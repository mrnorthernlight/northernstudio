import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";
import { resolveLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "cookiesPage" });
  return pageMetadata({ locale, href: "/cookies", title: t("metaTitle"), description: t("metaDescription"), eyebrow: t("eyebrow") });
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  await resolveLocale(params);
  return <LegalPage namespace="cookiesPage" />;
}
