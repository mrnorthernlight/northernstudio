import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";
import { resolveLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "terms" });
  return pageMetadata({ locale, href: "/terms", title: t("metaTitle"), description: t("metaDescription"), eyebrow: t("eyebrow") });
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  await resolveLocale(params);
  return <LegalPage namespace="terms" />;
}
