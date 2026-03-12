"use client";

import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black shadow-xl shadow-white/10 transition hover:scale-[1.02]"
    >
      {children}
    </a>
  );
}

export function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-6 text-sm font-medium text-white/88 backdrop-blur-xl transition hover:bg-white/[0.08]"
    >
      {children}
    </a>
  );
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="text-[11px] uppercase tracking-[0.34em] text-white/42">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] shadow-[0_20px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export function Bullet({ children }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="mt-[7px] h-2 w-2 rounded-full bg-gradient-to-r from-emerald-300 to-violet-300 shadow-[0_0_16px_rgba(125,255,230,0.8)]" />
      <p className="text-sm leading-6 text-white/78">{children}</p>
    </div>
  );
}

function switchLocale(pathname, targetLocale) {
  const segments = pathname.split("/");
  if (segments.length > 1) segments[1] = targetLocale;
  return segments.join("/") || `/${targetLocale}`;
}

export default function StudioShell({
  locale,
  active,
  children,
}) {
  const pathname = usePathname();

  const nav = {
    nl: {
      brand: "NORTHERN STUDIO",
      home: "Home",
      services: "Diensten",
      builder: "PC Builder",
      itHelp: "IT Hulp",
      guides: "Guides",
      contact: "Contact",
      privacy: "Privacybeleid",
      terms: "Algemene voorwaarden",
      cookies: "Cookies",
      rights: "Alle rechten voorbehouden.",
    },
    en: {
      brand: "NORTHERN STUDIO",
      home: "Home",
      services: "Services",
      builder: "PC Builder",
      itHelp: "IT Help",
      guides: "Guides",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms",
      cookies: "Cookies",
      rights: "All rights reserved.",
    },
  }[locale === "en" ? "en" : "nl"];

  const links = [
    { key: "home", href: `/${locale}` },
    { key: "services", href: `/${locale}/services` },
    { key: "builder", href: `/${locale}/pc-builder` },
    { key: "itHelp", href: `/${locale}/it-help` },
    { key: "guides", href: `/${locale}/guides` },
    { key: "contact", href: `/${locale}/contact` },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#03050a] text-white">
      <div className="relative min-h-screen">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(180deg,#05070d_0%,#04060a_45%,#020307_100%)]" />
          <div className="absolute -left-24 top-24 h-[32rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(0,255,194,0.16),rgba(0,255,194,0.04)_42%,transparent_72%)] blur-3xl" />
          <div className="absolute right-[-10rem] top-[-2rem] h-[34rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(137,92,255,0.18),rgba(137,92,255,0.05)_40%,transparent_72%)] blur-3xl" />
          <div className="absolute left-1/2 top-[26rem] h-[24rem] w-[62rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(111,255,233,0.10),rgba(111,255,233,0.03)_42%,transparent_72%)] blur-3xl" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:120px_120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(122,255,225,0.04)_24%,transparent_42%,rgba(149,96,255,0.06)_64%,transparent_82%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 md:px-10">
          <header className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <a href={`/${locale}`} className="flex items-center gap-3">
                <img src="/northern-studio-logo.png" alt="Northern Studio" className="h-10 w-10 object-contain" />
                <p className="text-sm font-semibold tracking-[0.18em] text-white/92">{nav.brand}</p>
              </a>

              <nav className="hidden items-center gap-6 text-sm md:flex">
                {links.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className={active === link.key ? "text-white" : "text-white/62 transition hover:text-white"}
                  >
                    {nav[link.key]}
                  </a>
                ))}
              </nav>

              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] p-1">
                <a
                  href={switchLocale(pathname, "nl")}
                  className={`rounded-full px-3 py-1.5 text-xs ${
                    locale === "nl" ? "bg-white text-black" : "text-white/65"
                  }`}
                >
                  NL
                </a>
                <a
                  href={switchLocale(pathname, "en")}
                  className={`rounded-full px-3 py-1.5 text-xs ${
                    locale === "en" ? "bg-white text-black" : "text-white/65"
                  }`}
                >
                  EN
                </a>
              </div>
            </div>
          </header>

          <div className="flex-1">{children}</div>

          <footer className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/45">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a href={`/${locale}/contact`} className="transition hover:text-white">{nav.contact}</a>
              <a href={`/${locale}/privacy`} className="transition hover:text-white">{nav.privacy}</a>
              <a href={`/${locale}/terms`} className="transition hover:text-white">{nav.terms}</a>
              <a href={`/${locale}/cookies`} className="transition hover:text-white">{nav.cookies}</a>
            </div>
            <p className="mt-6">© {new Date().getFullYear()} Northern Studio. {nav.rights}</p>
            <p className="mt-2 text-white/35">Northern Studio™</p>
          </footer>
        </div>
      </div>
    </main>
  );
}

export function CardLink({ href, title, text }) {
  return (
    <a
      href={href}
      className="group block rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-5 transition hover:border-white/18 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium text-white/92">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-white/58">{text}</p>
        </div>
        <ChevronRight className="mt-1 h-4 w-4 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white" />
      </div>
    </a>
  );
}