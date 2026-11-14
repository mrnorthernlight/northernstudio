import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Arrow } from "@/components/arrow";
import { HeroField } from "@/components/hero-field";
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
      <section className="hero">
        <div className="hero-fallback" aria-hidden="true" />
        <HeroField />
        <div className="hero-copy">
          <p className="kicker">{t("eyebrow")}</p>
          <h1 className="display mt-5 max-w-[12ch]">
            {t("titleLead")}
            <span className="mt-2 block text-ice">{t("titleEmphasis")}</span>
          </h1>
          <p className="lede mt-7">{t("lede")}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#positie">
              {t("positionLink")}
              <Arrow />
            </a>
            <Link className="btn btn-glass" href="/contact">
              {t("contactLink")}
              <Arrow />
            </Link>
          </div>
          <p className="mt-8 text-sm tracking-[0.14em] text-muted uppercase">
            {t("where")}
            <span aria-hidden="true"> · </span>
            {t("channel")}
          </p>
        </div>
      </section>

      <section id="inhoud" className="wrap py-16 md:py-24" aria-label={t("contentsLabel")}>
        <div className="bento">
          {contents.map((item, index) => (
            <Link key={item.href} href={item.href} className={index === 0 ? "bento-wide" : undefined} data-reveal>
              <span className="spark" aria-hidden="true" />
              <span>
                <span className="kicker">{String(index + 1).padStart(2, "0")}</span>
                <strong>{t(`index.${item.key}.title`)}</strong>
                <p>{t(`index.${item.key}.text`)}</p>
              </span>
              <span className="inline-flex items-center gap-2 text-ice">
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="positie" className="wrap" data-reveal>
        <div className="band">
          <p className="kicker">{t("positionKicker")}</p>
          <p className="mt-6">{t("band")}</p>
          <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            <p className="text-paper">{t("positionTitle")}</p>
            <p>{t("positionP1")}</p>
            <p>{t("positionP2")}</p>
          </div>
        </div>
      </section>

      <section className="wrap py-16 md:py-24" data-reveal>
        <p className="kicker">{t("principlesKicker")}</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">{t("principlesTitle")}</h2>
        <ol className="principles mt-8">
          {principles.map((item, index) => (
            <li key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p className="mt-2 text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <aside className="wrap pb-8" data-reveal>
        <div className="glass-panel md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <p className="kicker">{t("researchKicker")}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">{t("researchTitle")}</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">{t("researchText")}</p>
          </div>
          <Link href="/research" className="btn btn-glass mt-6 shrink-0">
            {t("researchCta")}
            <Arrow />
          </Link>
        </div>
      </aside>

      <section className="wrap py-16 md:py-24" data-reveal>
        <h2 className="font-display text-5xl font-bold tracking-tight md:text-7xl">{t("closeTitle")}</h2>
        <p className="lede mt-5">{t("closeText")}</p>
        <Link href="/contact" className="btn btn-solid mt-8">
          {t("closeCta")}
          <Arrow />
        </Link>
      </section>
    </>
  );
}
