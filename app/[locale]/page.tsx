import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Arrow } from "@/components/arrow";
import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/pathnames";
import { resolveLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

const contents = [
  { href: "/ai-systems", key: "ai" },
  { href: "/software", key: "software" },
  { href: "/automation", key: "automation" },
  { href: "/products", key: "products" },
] as const satisfies readonly { href: AppPathname; key: "ai" | "software" | "automation" | "products" }[];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "home" });
  return pageMetadata({
    locale,
    href: "/",
    title: t("metaTitle"),
    description: t("metaDescription"),
    eyebrow: t("eyebrow"),
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  await resolveLocale(params);
  const t = await getTranslations("home");
  const principles = t.raw("principles") as { title: string; text: string }[];

  return (
    <>
      <section className="wrap flex flex-col justify-center py-16 md:py-24 lg:min-h-[calc(100svh-4.5rem)] lg:py-20">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker">{t("eyebrow")}</p>
            <h1 className="display mt-6">
              {t("titleLead")}
              <span className="mt-1 block italic text-pine">{t("titleEmphasis")}</span>
            </h1>
            <p className="lede mt-8">{t("lede")}</p>
            <p className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <a className="text-link inline-flex items-center gap-2" href="#positie">
                {t("positionLink")}
                <Arrow />
              </a>
              <Link className="text-link inline-flex items-center gap-2" href="/contact">
                {t("contactLink")}
                <Arrow />
              </Link>
            </p>
            <p className="mt-10 text-sm tracking-wide text-muted">
              {t("where")}
              <span aria-hidden="true"> · </span>
              {t("channel")}
            </p>
          </div>
          <nav className="lg:col-span-5 lg:pt-16" aria-label={t("contentsLabel")} id="inhoud">
            {contents.map((item, index) => (
              <Link key={item.href} href={item.href} className="index-row">
                <span className="num">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="row-title">{t(`index.${item.key}.title`)}</span>
                  <span className="row-text">{t(`index.${item.key}.text`)}</span>
                </span>
                <Arrow />
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section id="positie" className="border-t border-line">
        <div className="wrap grid gap-8 py-16 md:grid-cols-12 md:py-24">
          <p className="kicker md:col-span-3">{t("positionKicker")}</p>
          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl leading-tight font-normal tracking-tight md:text-6xl">{t("positionTitle")}</h2>
            <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed">
              <p>{t("positionP1")}</p>
              <p>{t("positionP2")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band bg-pine text-paper">
        <div className="wrap py-16 md:py-24">
          <p className="max-w-4xl font-serif text-3xl leading-snug font-normal md:text-5xl">{t("band")}</p>
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <p className="kicker">{t("principlesKicker")}</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight font-normal tracking-tight md:text-5xl">{t("principlesTitle")}</h2>
        <ol className="mt-10 border-t border-line">
          {principles.map((item, index) => (
            <li key={item.title} className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:items-baseline">
              <span className="font-serif text-2xl text-pine md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-3xl font-normal md:col-span-4">{item.title}</h3>
              <p className="leading-relaxed md:col-span-6 md:col-start-7">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <aside className="bg-wash">
        <div className="wrap grid gap-6 py-16 md:grid-cols-12 md:py-24">
          <p className="kicker md:col-span-3">{t("researchKicker")}</p>
          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl leading-tight font-normal tracking-tight md:text-5xl">{t("researchTitle")}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed">{t("researchText")}</p>
            <Link href="/research" className="text-link mt-8 inline-flex items-center gap-2">
              {t("researchCta")}
              <Arrow />
            </Link>
          </div>
        </div>
      </aside>

      <section className="wrap py-20 md:py-28">
        <h2 className="font-serif text-4xl font-normal md:text-6xl">{t("closeTitle")}</h2>
        <p className="lede mt-6">{t("closeText")}</p>
        <Link href="/contact" className="text-link mt-8 inline-flex items-center gap-2">
          {t("closeCta")}
          <Arrow />
        </Link>
      </section>
    </>
  );
}
