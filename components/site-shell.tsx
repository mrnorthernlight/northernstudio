"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";

import NextLink from "next/link";
import { getPathname, Link, usePathname } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/pathnames";
import { Arrow } from "@/components/arrow";
import { Mark } from "@/components/mark";

const nav = [
  { href: "/ai-systems", key: "aiSystems" },
  { href: "/software", key: "software" },
  { href: "/automation", key: "automation" },
  { href: "/products", key: "products" },
  { href: "/research", key: "research" },
  { href: "/about", key: "about" },
] as const satisfies readonly { href: AppPathname; key: string }[];

export function SiteShell({ children, footer }: { children: ReactNode; footer: ReactNode }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#content">
        {t("skip")}
      </a>
      <header className="sticky top-0 z-40 border-b border-white/10">
        <div className="wrap flex min-h-16 items-center justify-between gap-4 py-2">
          <Link href="/" className="flex items-center gap-3 text-ink" aria-label={t("home")}>
            <Mark />
            <span className="leading-none">
              <span className="block text-[0.78rem] font-semibold tracking-[0.16em]">NORTHERN</span>
              <span className="mt-1 block font-serif text-[0.95rem] italic text-pine">Studio</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-x-5 min-[1100px]:flex" aria-label={t("primary")}>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link" aria-current={pathname === item.href ? "page" : undefined}>
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitch className="hidden items-center gap-3 text-sm min-[1100px]:flex" />
            <Link href="/contact" className="nav-link hidden items-center gap-2 min-[1100px]:inline-flex" aria-current={pathname === "/contact" ? "page" : undefined}>
              {t("contact")}
              <Arrow />
            </Link>
            <button
              type="button"
              className="min-h-11 px-1 text-sm font-semibold min-[1100px]:hidden"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? t("close") : t("menu")}
            </button>
          </div>
        </div>
        <div id="site-menu" hidden={!open} className="border-t border-white/10 bg-[#05060a]/92 backdrop-blur-xl min-[1100px]:hidden">
          <nav aria-label={t("primary")} className="wrap flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="font-serif text-4xl leading-tight text-ink no-underline" aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>
                {t(item.key)}
              </Link>
            ))}
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 font-serif text-4xl text-ink no-underline" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>
              {t("contact")}
              <Arrow />
            </Link>
            <LanguageSwitch className="mt-8 flex items-center gap-3 text-sm" onNavigate={() => setOpen(false)} />
          </nav>
        </div>
      </header>
      <div className="page-frame">
        <div className="meridian" aria-hidden="true" />
        <main id="content" tabIndex={-1} inert={open ? true : undefined} className="outline-none">
          {children}
        </main>
      </div>
      <div inert={open ? true : undefined}>{footer}</div>
    </>
  );
}

function LanguageSwitch({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();
  const href = (pathname || "/") as AppPathname;
  const dutch = getPathname({ href, locale: "nl" });
  const english = getPathname({ href, locale: "en" });

  return (
    <div className={className} role="navigation" aria-label={t("language")}>
      <NextLink href={dutch} hrefLang="nl-BE" lang="nl-BE" className="lang-link nav-link" aria-current={locale === "nl" ? "true" : undefined} onClick={onNavigate}>
        NL
      </NextLink>
      <span aria-hidden="true" className="text-muted">
        /
      </span>
      <NextLink href={english} hrefLang="en" lang="en" className="lang-link nav-link" aria-current={locale === "en" ? "true" : undefined} onClick={onNavigate}>
        EN
      </NextLink>
    </div>
  );
}
