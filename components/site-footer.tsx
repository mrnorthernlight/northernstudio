import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/pathnames";
import { LegalIdentity } from "@/components/legal-identity";
import { Mark } from "@/components/mark";
import { COPYRIGHT_YEAR } from "@/lib/site";

const work = [
  { href: "/ai-systems", key: "aiSystems" },
  { href: "/software", key: "software" },
  { href: "/automation", key: "automation" },
  { href: "/products", key: "products" },
  { href: "/research", key: "research" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const satisfies readonly { href: AppPathname; key: "aiSystems" | "software" | "automation" | "products" | "research" | "about" | "contact" }[];

const legal = [
  { href: "/privacy", key: "privacy" },
  { href: "/terms", key: "terms" },
  { href: "/cookies", key: "cookies" },
  { href: "/accessibility", key: "accessibility" },
] as const satisfies readonly { href: AppPathname; key: "privacy" | "terms" | "cookies" | "accessibility" }[];

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");

  return (
    <footer className="footer text-paper">
      <div className="wrap pt-16 md:pt-20">
        <p className="wordmark">
          NORTHERN
          <span className="block text-ice">STUDIO</span>
        </p>
        <p className="mt-4 max-w-xl text-lg text-muted">{t("blurb")}</p>
        <p className="mt-3 font-display text-2xl tracking-tight text-gold">{t("brandLine")}</p>
      </div>
      <div className="wrap grid gap-12 py-12 md:grid-cols-12">
        <nav className="md:col-span-4" aria-label={t("navLabel")}>
          <ul className="space-y-2 text-sm">
            {work.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper no-underline hover:text-ice">
                  {nav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <LegalIdentity />
        </div>
        <nav className="md:col-span-4" aria-label={t("legalLabel")}>
          <ul className="space-y-2 text-sm">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper no-underline hover:text-ice">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">{t("cookiesNote")}</p>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex items-center gap-3">
            <Mark className="h-6 w-6" />© {COPYRIGHT_YEAR} Northern Studio. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
