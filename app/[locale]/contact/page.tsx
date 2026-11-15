import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactForm, FormBanner } from "@/components/forms";
import { PageIntro } from "@/components/page-intro";
import { resolveLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string; sent?: string; delivery?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "contact" });
  return pageMetadata({ locale, href: "/contact", title: t("metaTitle"), description: t("metaDescription"), eyebrow: t("eyebrow") });
}

export default async function ContactPage({ params, searchParams }: Props) {
  const locale = await resolveLocale(params);
  const query = await searchParams;
  const t = await getTranslations("contact");

  return (
    <article className="wrap">
      <PageIntro catalog={t("catalog")} eyebrow={t("eyebrow")} title={t("title")} lede={t("lede")} />
      {query.sent || query.error ? <FormBanner error={query.error} sent={query.sent} delivery={query.delivery} /> : null}
      <div className="grid gap-16 border-t border-line py-12 lg:grid-cols-2 lg:gap-20 lg:py-16">
        <section aria-labelledby="message-title">
          <h2 id="message-title" className="font-serif text-4xl font-normal">
            {t("messageTitle")}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed">{t("messageText")}</p>
          <ContactForm kind="message" locale={locale} />
        </section>
        <section aria-labelledby="business-title">
          <h2 id="business-title" className="font-serif text-4xl font-normal">
            {t("businessTitle")}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed">{t("businessText")}</p>
          <ContactForm kind="business" locale={locale} />
        </section>
      </div>
    </article>
  );
}
