import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/page-intro";
import { resolveLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "research" });
  return pageMetadata({ locale, href: "/research", title: t("metaTitle"), description: t("metaDescription"), eyebrow: t("eyebrow") });
}

export default async function ResearchPage({ params }: { params: Promise<{ locale: string }> }) {
  await resolveLocale(params);
  const t = await getTranslations("research");
  const inquiries = t.raw("inquiries") as { title: string; text: string }[];

  return (
    <article className="wrap">
      <PageIntro catalog={t("catalog")} eyebrow={t("eyebrow")} title={t("title")} lede={t("lede")} />
      <h2 className="sr-only">{t("inquiriesTitle")}</h2>
      <ol className="border-t border-line">
        {inquiries.map((item, index) => (
          <li key={item.title} className="grid gap-4 border-b border-line py-10 md:grid-cols-12 md:py-14">
            <p className="font-serif text-3xl text-pine md:col-span-2">{String(index + 1).padStart(2, "0")}</p>
            <div className="md:col-span-8">
              <h3 className="font-serif text-3xl font-normal md:text-4xl">{item.title}</h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <section className="py-16 md:py-24">
        <h2 className="max-w-3xl font-serif text-4xl font-normal leading-tight">{t("closeTitle")}</h2>
        <p className="lede mt-6">{t("closeText")}</p>
      </section>
    </article>
  );
}
