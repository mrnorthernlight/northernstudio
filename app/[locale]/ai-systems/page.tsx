import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Figure, PageIntro, ProseSections } from "@/components/page-intro";
import { resolveLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "ai" });
  return pageMetadata({ locale, href: "/ai-systems", title: t("metaTitle"), description: t("metaDescription"), eyebrow: t("eyebrow") });
}

export default async function AiSystemsPage({ params }: { params: Promise<{ locale: string }> }) {
  await resolveLocale(params);
  const t = await getTranslations("ai");
  const layers = t.raw("layers") as { title: string; text: string }[];
  const sections = t.raw("sections") as { title: string; paragraphs: string[] }[];

  return (
    <article className="wrap">
      <PageIntro catalog={t("catalog")} eyebrow={t("eyebrow")} title={t("title")} lede={t("lede")} />
      <Figure label={t("figureLabel")} title={t("figureTitle")} intro={t("figureIntro")} items={layers} />
      <ProseSections sections={sections} />
    </article>
  );
}
