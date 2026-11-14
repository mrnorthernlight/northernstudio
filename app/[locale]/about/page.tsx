import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/page-intro";
import { resolveLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "about" });
  return pageMetadata({ locale, href: "/about", title: t("metaTitle"), description: t("metaDescription"), eyebrow: t("eyebrow") });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  await resolveLocale(params);
  const t = await getTranslations("about");
  const principles = t.raw("principles") as { title: string; text: string }[];

  return (
    <article className="wrap">
      <PageIntro catalog={t("catalog")} eyebrow={t("eyebrow")} title={t("title")} lede={t("lede")} />
      <section className="grid gap-6 border-t border-line py-12 md:grid-cols-12 md:py-16">
        <h2 className="font-serif text-3xl font-normal md:col-span-4 md:text-4xl">{t("missionTitle")}</h2>
        <p className="text-lg leading-relaxed md:col-span-7">{t("mission")}</p>
      </section>
      <section className="grid gap-6 border-t border-line py-12 md:grid-cols-12 md:py-16">
        <h2 className="font-serif text-3xl font-normal md:col-span-4 md:text-4xl">{t("visionTitle")}</h2>
        <p className="text-lg leading-relaxed md:col-span-7">{t("vision")}</p>
      </section>
      <section className="border-t border-line py-12 md:py-16">
        <h2 className="font-serif text-3xl font-normal md:text-4xl">{t("principlesTitle")}</h2>
        <ol className="mt-8">
          {principles.map((item, index) => (
            <li key={item.title} className="grid gap-3 border-t border-line py-8 md:grid-cols-12">
              <span className="text-pine md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-2xl font-normal md:col-span-4">{item.title}</h3>
              <p className="leading-relaxed md:col-span-6 md:col-start-7">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="grid gap-6 border-t border-line py-12 md:grid-cols-12 md:py-16">
        <h2 className="font-serif text-3xl font-normal md:col-span-4 md:text-4xl">{t("scopeTitle")}</h2>
        <p className="text-lg leading-relaxed md:col-span-7">{t("scope")}</p>
      </section>
    </article>
  );
}
