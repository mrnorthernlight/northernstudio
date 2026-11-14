import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FormBanner, InterestForm } from "@/components/forms";
import { PageIntro } from "@/components/page-intro";
import { ProductStage } from "@/components/product-stage";
import { resolveLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string; sent?: string; delivery?: string; form?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "products" });
  return pageMetadata({ locale, href: "/products", title: t("metaTitle"), description: t("metaDescription"), eyebrow: t("eyebrow") });
}

export default async function ProductsPage({ params, searchParams }: Props) {
  const locale = await resolveLocale(params);
  const query = await searchParams;
  const t = await getTranslations("products");
  const slots = t.raw("slots") as { label: string; status: string; text: string }[];

  return (
    <article className="wrap">
      <PageIntro catalog={t("catalog")} eyebrow={t("eyebrow")} title={t("title")} lede={t("lede")}>
        <p className="relative mt-6 max-w-2xl text-muted">{t("honesty")}</p>
      </PageIntro>
      <h2 className="sr-only">{t("slotsLabel")}</h2>
      <div className="grid gap-4 pb-8">
        {slots.map((slot, index) => (
          <ProductStage key={slot.label} index={index} label={slot.label} status={slot.status} text={slot.text} />
        ))}
      </div>
      <section className="grid gap-8 py-16 md:grid-cols-12 md:py-24" aria-labelledby="interest-title">
        <div className="md:col-span-5">
          <h2 id="interest-title" className="font-serif text-4xl font-normal leading-tight">
            {t("interestTitle")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed">{t("interestText")}</p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          {query.form === "interest" || query.sent === "interest" ? <FormBanner error={query.error} sent={query.sent} delivery={query.delivery} /> : null}
          <InterestForm locale={locale} />
        </div>
      </section>
    </article>
  );
}
