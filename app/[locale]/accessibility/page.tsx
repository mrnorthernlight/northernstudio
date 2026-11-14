import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";
import { Link } from "@/i18n/navigation";
import { resolveLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "accessibility" });
  return pageMetadata({ locale, href: "/accessibility", title: t("metaTitle"), description: t("metaDescription"), eyebrow: t("eyebrow") });
}

export default async function AccessibilityPage({ params }: { params: Promise<{ locale: string }> }) {
  await resolveLocale(params);
  const t = await getTranslations("accessibility");

  return (
    <LegalPage namespace="accessibility">
      <p className="pb-4">
        <Link href="/contact" className="text-link">
          {t("contactCta")}
        </Link>
      </p>
      <p className="todo pb-12">{t("emailTodo")}</p>
    </LegalPage>
  );
}
