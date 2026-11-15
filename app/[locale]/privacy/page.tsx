import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";
import { resolveLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "privacy" });
  return pageMetadata({ locale, href: "/privacy", title: t("metaTitle"), description: t("metaDescription"), eyebrow: t("eyebrow") });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  await resolveLocale(params);
  const t = await getTranslations("privacy");

  return (
    <LegalPage namespace="privacy">
      <p className="pb-12 text-lg">
        {t("complaintBefore")}{" "}
        <a className="text-link" href="https://www.gegevensbeschermingsautoriteit.be" rel="noopener noreferrer">
          {t("complaintLink")}
        </a>
        {t("complaintAfter")}
      </p>
    </LegalPage>
  );
}
