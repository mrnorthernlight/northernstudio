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
    <footer className="footer bg-ink text-paper">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Mark className="h-9 w-9" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#d4d0c6]">{t("blurb")}</p>
          <p className="mt-6 font-serif text-2xl italic">{t("brandLine")}</p>
        </div>
        <nav className="md:col-span-3" aria-label={t("navLabel")}>
          <ul className="space-y-2 text-sm">
            {work.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#f6f5f1] no-underline hover:underline">
                  {nav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <LegalIdentity tone="dark" />
          <nav className="mt-8" aria-label={t("legalLabel")}>
            <ul className="space-y-2 text-sm">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#f6f5f1] no-underline hover:underline">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="wrap flex flex-col gap-2 py-5 text-sm text-[#d4d0c6] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {COPYRIGHT_YEAR} Northern Studio. {t("rights")}
          </p>
          <p>{t("cookiesNote")}</p>
        </div>
      </div>
    </footer>
  );
}
