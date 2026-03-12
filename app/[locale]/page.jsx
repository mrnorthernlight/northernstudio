"use client";

import { use } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Globe,
  Mail,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
  Monitor,
  Briefcase,
  LifeBuoy,
  Palette,
} from "lucide-react";

const content = {
  nl: {
    nav: {
      brand: "NORTHERN STUDIO",
      services: "Diensten",
      builder: "PC Builder",
      itHelp: "IT Hulp",
      guides: "Guides",
      contact: "Contact",
    },
    hero: {
      badge: "PC builds, IT hulp, Windows support en premium webdesign",
      title1: "Stel de juiste pc samen.",
      title2: "Northern Studio regelt de rest.",
      description:
        "Northern Studio helpt mensen met custom pc's, hardwareadvies, volledige IT hulp, Windows-problemen, premium websites en logo design. Duidelijk advies, praktische oplossingen en een professionele aanpak.",
      primaryCta: "Start de PC Builder",
      servicesCta: "Bekijk alle diensten",
      contactCta: "Neem contact op",
    },
    builder: {
      label: "PC Builder",
      title: "Begin met het plannen van je pc",
      badge: "Snel, duidelijk en zonder giswerk",
      cards: [
        ["Kies je onderdelen", "CPU, GPU, RAM, opslag, moederbord, PSU, case en koeler"],
        ["Controleer compatibiliteit", "Voorkom fouten zoals verkeerde sockets of een te zwakke voeding"],
        ["Schat stroomverbruik", "Krijg snel een idee van hoeveel vermogen je systeem nodig heeft"],
        ["Krijg prijsinzicht", "Zie duidelijk wat de build ongeveer kost voor je beslist wat je doet"],
      ],
      buyYourself: "Koop zelf je onderdelen",
      letBuild: "Laat Northern Studio bouwen",
      processTitle: "Hoe het bouwproces werkt",
      processSteps: [
        "Stel je pc samen met de configurator",
        "Verstuur je aanvraag",
        "Ontvang een duidelijke offerte",
        "Betaal vóór de assemblage",
        "Onderdelen worden besteld, geassembleerd en geleverd",
      ],
      policyLabel: "Beleid",
      policyTitle: "Duidelijk en veilig geregeld",
      policyText:
        "Volledige betaling is vereist vóór de assemblage. Zo blijven prijzen duidelijk, vermijd je voorraadrisico en blijft het proces eerlijk en overzichtelijk.",
    },
    router: {
      label: "Kies je route",
      title: "Waarmee kunnen we je helpen?",
      description:
        "Northern Studio combineert custom pc builds, IT hulp, hardwareadvies en digitale diensten. Kies hieronder wat het best bij jouw vraag past.",
      go: "Ga verder",
      items: [
        {
          title: "Ik wil een PC bouwen",
          description: "Gebruik de PC Builder om een systeem samen te stellen dat past bij je budget en gebruik.",
          href: "pc-builder",
          icon: Cpu,
        },
        {
          title: "Ik heb IT hulp nodig",
          description: "Voor trage pc's, Windows-problemen, upgrades en technische ondersteuning.",
          href: "it-help",
          icon: Wrench,
        },
        {
          title: "Ik wil hardware advies",
          description: "Hulp bij onderdelen kiezen, compatibiliteit controleren en prestaties vergelijken.",
          href: "guides",
          icon: ShieldCheck,
        },
        {
          title: "Ik wil een website of branding",
          description: "Voor premium webdesign, logo design en een professionele online uitstraling.",
          href: "digital-services",
          icon: Globe,
        },
        {
          title: "Bekijk alle diensten",
          description: "Een volledig overzicht van alles wat Northern Studio aanbiedt.",
          href: "services",
          icon: Sparkles,
        },
      ],
    },
    audiences: {
      label: "Voor wie",
      title: "Northern Studio helpt zowel particulieren als bedrijven",
      items: [
        {
          title: "Gaming PC's",
          text: "Voor spelers die een systeem willen dat echt past bij hun games, resolutie en budget.",
          icon: Monitor,
        },
        {
          title: "Workstations",
          text: "Voor editing, design, multitasking en andere zwaardere workflows waar stabiliteit telt.",
          icon: Briefcase,
        },
        {
          title: "IT Hulp",
          text: "Voor trage pc's, Windows-problemen, upgrades, virusverwijdering en algemene technische hulp.",
          icon: LifeBuoy,
        },
        {
          title: "Web & Branding",
          text: "Voor ondernemers die een premium website, logo of sterkere online uitstraling nodig hebben.",
          icon: Palette,
        },
      ],
    },
    services: {
      label: "Diensten",
      title: "Alles wat Northern Studio voor je kan doen",
      viewAll: "Bekijk alle diensten",
      view: "Bekijk",
      items: [
        {
          title: "Custom PC's",
          description:
            "Gaming pc's, workstations en upgrades. Northern Studio helpt met het kiezen van onderdelen, compatibiliteit controleren en kan de volledige build voor je uitvoeren.",
          href: "pc-builder",
          icon: Cpu,
          tags: ["Gaming PC's", "Workstations", "Upgrades"],
        },
        {
          title: "IT Hulp & Windows Specialist",
          description:
            "Problemen oplossen, pc versnellen, virusverwijdering, upgrades, data-overdracht en hulp met Windows-installaties en configuratie.",
          href: "it-help",
          icon: Wrench,
          tags: ["Windows", "Herstellingen", "Optimalisatie"],
        },
        {
          title: "Hardware Advies",
          description:
            "Hulp bij het kiezen van onderdelen, compatibiliteit controleren, prestaties vergelijken en de juiste configuratie vinden voor jouw gebruik.",
          href: "guides",
          icon: ShieldCheck,
          tags: ["Compatibiliteit", "Onderdelen", "Prestaties"],
        },
        {
          title: "Webdesign & Branding",
          description:
            "Premium websites, logo design en digitale aanwezigheid voor bedrijven die professioneel online willen verschijnen.",
          href: "digital-services",
          icon: Globe,
          tags: ["Webdesign", "Logo Design", "Branding"],
        },
      ],
    },
    reasons: {
      label: "Waarom Northern Studio",
      title: "Waarom mensen voor Northern Studio kiezen",
      items: [
        "Compatibiliteit staat voorop",
        "Duidelijke offerte en betaling",
        "Lokale ondersteuning in België",
        "Professionele assemblage en begeleiding",
        "Windows- en hardwarekennis in één studio",
        "Persoonlijk contact en praktische oplossingen",
      ],
    },
    cta: {
      label: "Klaar om te starten?",
      title: "Vertel wat je zoekt, dan denken we met je mee",
      description:
        "Of je nu een gaming pc, workstation, upgrade, Windows-hulp, website of logo nodig hebt: Northern Studio helpt je graag verder met duidelijk advies en een concrete volgende stap.",
      helperLabel: "Waarmee kunnen we helpen?",
      helperText:
        "Nieuwe pc samenstellen, onderdelen kiezen, compatibiliteit controleren, problemen oplossen, Windows opnieuw installeren, een volledige build laten uitvoeren of je bedrijf online sterker neerzetten.",
      startBuild: "Start je build",
      contactStudio: "Contacteer Northern Studio",
    },
    footer: {
      contact: "Contact",
      privacy: "Privacybeleid",
      terms: "Algemene voorwaarden",
      rights: "Alle rechten voorbehouden.",
    },
  },
  en: {
    nav: {
      brand: "NORTHERN STUDIO",
      services: "Services",
      builder: "PC Builder",
      itHelp: "IT Help",
      guides: "Guides",
      contact: "Contact",
    },
    hero: {
      badge: "PC builds, IT help, Windows support and premium web design",
      title1: "Build the right PC.",
      title2: "Northern Studio handles the rest.",
      description:
        "Northern Studio helps people with custom PCs, hardware guidance, full IT help, Windows issues, premium websites and logo design. Clear advice, practical solutions and a professional approach.",
      primaryCta: "Start the PC Builder",
      servicesCta: "View all services",
      contactCta: "Contact us",
    },
    builder: {
      label: "PC Builder",
      title: "Start planning your PC",
      badge: "Fast, clear and without guesswork",
      cards: [
        ["Choose your parts", "CPU, GPU, RAM, storage, motherboard, PSU, case and cooler"],
        ["Check compatibility", "Avoid mistakes like wrong sockets or a power supply that is too weak"],
        ["Estimate power usage", "Quickly get an idea of how much power your system needs"],
        ["Get price insight", "See what the build will roughly cost before you decide what to do"],
      ],
      buyYourself: "Buy your own parts",
      letBuild: "Let Northern Studio build it",
      processTitle: "How the build process works",
      processSteps: [
        "Configure your PC with the builder",
        "Send your request",
        "Receive a clear quote",
        "Pay before assembly",
        "Parts are ordered, assembled and delivered",
      ],
      policyLabel: "Policy",
      policyTitle: "Clear and safely handled",
      policyText:
        "Full payment is required before assembly. That keeps pricing clear, avoids inventory risk and keeps the process fair and straightforward.",
    },
    router: {
      label: "Choose your route",
      title: "How can we help?",
      description:
        "Northern Studio combines custom PC builds, IT help, hardware guidance and digital services. Choose the route that fits your question best.",
      go: "Continue",
      items: [
        {
          title: "I want to build a PC",
          description: "Use the PC Builder to configure a system that fits your budget and needs.",
          href: "pc-builder",
          icon: Cpu,
        },
        {
          title: "I need IT help",
          description: "For slow PCs, Windows issues, upgrades and technical support.",
          href: "it-help",
          icon: Wrench,
        },
        {
          title: "I want hardware advice",
          description: "Get help choosing parts, checking compatibility and comparing performance.",
          href: "guides",
          icon: ShieldCheck,
        },
        {
          title: "I want a website or branding",
          description: "For premium web design, logo design and a stronger professional presence.",
          href: "digital-services",
          icon: Globe,
        },
        {
          title: "View all services",
          description: "A complete overview of everything Northern Studio offers.",
          href: "services",
          icon: Sparkles,
        },
      ],
    },
    audiences: {
      label: "Who it is for",
      title: "Northern Studio helps both individuals and businesses",
      items: [
        {
          title: "Gaming PCs",
          text: "For players who want a system that truly fits their games, resolution and budget.",
          icon: Monitor,
        },
        {
          title: "Workstations",
          text: "For editing, design, multitasking and heavier workflows where stability matters.",
          icon: Briefcase,
        },
        {
          title: "IT Help",
          text: "For slow PCs, Windows issues, upgrades, virus removal and general tech support.",
          icon: LifeBuoy,
        },
        {
          title: "Web & Branding",
          text: "For business owners who need a premium website, logo or stronger online presence.",
          icon: Palette,
        },
      ],
    },
    services: {
      label: "Services",
      title: "Everything Northern Studio can do for you",
      viewAll: "View all services",
      view: "View",
      items: [
        {
          title: "Custom PCs",
          description:
            "Gaming PCs, workstations and upgrades. Northern Studio helps choose parts, check compatibility and can handle the full build for you.",
          href: "pc-builder",
          icon: Cpu,
          tags: ["Gaming PCs", "Workstations", "Upgrades"],
        },
        {
          title: "IT Help & Windows Specialist",
          description:
            "Troubleshooting, speeding up your PC, virus removal, upgrades, data transfer and help with Windows installations and configuration.",
          href: "it-help",
          icon: Wrench,
          tags: ["Windows", "Repairs", "Optimization"],
        },
        {
          title: "Hardware Guidance",
          description:
            "Help choosing parts, checking compatibility, comparing performance and finding the right configuration for your use case.",
          href: "guides",
          icon: ShieldCheck,
          tags: ["Compatibility", "Parts", "Performance"],
        },
        {
          title: "Web Design & Branding",
          description:
            "Premium websites, logo design and digital presence for businesses that want to appear professionally online.",
          href: "digital-services",
          icon: Globe,
          tags: ["Web Design", "Logo Design", "Branding"],
        },
      ],
    },
    reasons: {
      label: "Why Northern Studio",
      title: "Why people choose Northern Studio",
      items: [
        "Compatibility comes first",
        "Clear quotes and payment flow",
        "Local support in Belgium",
        "Professional assembly and guidance",
        "Windows and hardware expertise in one studio",
        "Personal contact and practical solutions",
      ],
    },
    cta: {
      label: "Ready to get started?",
      title: "Tell us what you need and we’ll think along with you",
      description:
        "Whether you need a gaming PC, workstation, upgrade, Windows help, website or logo: Northern Studio helps you move forward with clear advice and a concrete next step.",
      helperLabel: "What can we help with?",
      helperText:
        "Building a new PC, choosing components, checking compatibility, solving issues, reinstalling Windows, handling a full build or helping your business present itself better online.",
      startBuild: "Start your build",
      contactStudio: "Contact Northern Studio",
    },
    footer: {
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms",
      rights: "All rights reserved.",
    },
  },
};

function SectionCard({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-3xl border border-white/10 bg-white/[0.055] shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl " +
        className
      }
    >
      {children}
    </div>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-medium text-black transition hover:bg-emerald-300"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium text-white transition hover:bg-white/10"
    >
      {children}
    </a>
  );
}

export default function NorthernHomepage({ params }) {
  const { locale: routeLocale } = use(params);
  const locale = routeLocale === "en" ? "en" : "nl";
  const t = content[locale];
  const pathname = usePathname();

  const switchLocale = (targetLocale) => {
    const segments = pathname.split("/");
    if (segments.length > 1) {
      segments[1] = targetLocale;
    } else {
      return `/${targetLocale}`;
    }
    return segments.join("/") || `/${targetLocale}`;
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#030405]" />
        <div className="absolute left-1/2 top-[-6rem] h-[26rem] w-[130%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.30),rgba(168,85,247,0.12)_36%,transparent_72%)] blur-[58px]" />
        <div className="absolute left-[-6%] top-[6rem] h-[25rem] w-[76rem] -rotate-[10deg] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.26),rgba(74,222,128,0.10)_34%,transparent_72%)] blur-[72px]" />
        <div className="absolute right-[-8%] top-[10rem] h-[28rem] w-[82rem] rotate-[12deg] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(196,181,253,0.20),rgba(196,181,253,0.08)_35%,transparent_74%)] blur-[84px]" />
        <div className="absolute left-1/2 top-[18rem] h-[22rem] w-[92rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.18),rgba(34,197,94,0.06)_34%,transparent_76%)] blur-[96px]" />
        <div className="absolute left-[-12%] top-[34%] h-[30rem] w-[84rem] rotate-[8deg] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),transparent_74%)] blur-[104px]" />
        <div className="absolute right-[-14%] top-[52%] h-[28rem] w-[82rem] -rotate-[7deg] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.10),transparent_74%)] blur-[110px]" />
        <div className="absolute left-1/2 top-[72%] h-[26rem] w-[86rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_76%)] blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:120px_120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_26%),linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.46)_32%,rgba(0,0,0,0.74)_62%,rgba(0,0,0,0.90)_100%)]" />
      </div>

      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 pt-4 md:px-10">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 shadow-[0_10px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <a href={`/${locale}`} className="text-sm font-semibold tracking-[0.16em] text-white/95 transition hover:text-white">
              {t.nav.brand}
            </a>

            <nav className="hidden items-center gap-6 text-sm md:flex">
              <a href={`/${locale}/services`} className="text-white/70 transition hover:text-white">{t.nav.services}</a>
              <a href={`/${locale}/pc-builder`} className="text-white/70 transition hover:text-white">{t.nav.builder}</a>
              <a href={`/${locale}/it-help`} className="text-white/70 transition hover:text-white">{t.nav.itHelp}</a>
              <a href={`/${locale}/guides`} className="text-white/70 transition hover:text-white">{t.nav.guides}</a>
              <a href={`/${locale}/contact`} className="text-white/70 transition hover:text-white">{t.nav.contact}</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center sm:justify-end">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
              <a
                href={switchLocale("nl")}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  locale === "nl" ? "bg-white text-black" : "text-white/70 hover:text-white"
                }`}
              >
                NL
              </a>
              <a
                href={switchLocale("en")}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  locale === "en" ? "bg-white text-black" : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </a>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <img
              src="/images/branding/northern-studio-logo.png"
              alt="Northern Studio logo"
              className="h-auto w-full max-w-[420px] object-contain drop-shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
            />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <Zap className="h-4 w-4 text-emerald-300" />
            {t.hero.badge}
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">
            <span className="block leading-[1.12] text-white">{t.hero.title1}</span>
            <span className="mt-3 block pb-3 leading-[1.28] bg-gradient-to-r from-white via-emerald-200 to-purple-300 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href={`/${locale}/pc-builder`}>
              {t.hero.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton href={`/${locale}/services`}>{t.hero.servicesCta}</SecondaryButton>
            <SecondaryButton href={`/${locale}/contact`}>{t.hero.contactCta}</SecondaryButton>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionCard className="overflow-hidden border-white/12 bg-white/[0.065] shadow-[0_0_60px_rgba(168,85,247,0.10)]">
            <div className="border-b border-white/10 px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-white/50">{t.builder.label}</p>
                  <h2 className="mt-1 text-xl font-medium">{t.builder.title}</h2>
                </div>
                <div className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200">
                  {t.builder.badge}
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-6 md:grid-cols-2">
              {t.builder.cards.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-sm text-white/45">{label}</p>
                  <p className="mt-2 leading-7 text-white/90">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-5 sm:flex-row">
              <PrimaryButton href={`/${locale}/pc-builder`}>{t.builder.buyYourself}</PrimaryButton>
              <SecondaryButton href={`/${locale}/contact`}>{t.builder.letBuild}</SecondaryButton>
            </div>
          </SectionCard>

          <div className="grid gap-6">
            <SectionCard className="bg-white/[0.06]">
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-emerald-300" />
                  <h3 className="text-lg font-medium">{t.builder.processTitle}</h3>
                </div>

                <div className="mt-5 space-y-4">
                  {t.builder.processSteps.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 text-sm text-purple-200">
                        {index + 1}
                      </div>
                      <p className="pt-1 text-sm leading-6 text-white/75">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>

            <SectionCard className="bg-white/[0.06]">
              <div className="p-6">
                <p className="text-sm text-white/50">{t.builder.policyLabel}</p>
                <h3 className="mt-2 text-xl font-medium">{t.builder.policyTitle}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{t.builder.policyText}</p>
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-8 shadow-[0_20px_100px_rgba(74,222,128,0.06)] backdrop-blur-xl md:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.router.label}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.router.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">{t.router.description}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.router.items.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.title} href={`/${locale}/${item.href}`} className="group block">
                  <div className="h-full rounded-2xl border border-white/10 bg-black/25 p-5 transition-all duration-300 hover:border-emerald-300/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-purple-500/10">
                    <div className="inline-flex rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3 text-purple-200">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/65">{item.description}</p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm text-emerald-200">
                      {t.router.go}
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-8 backdrop-blur-xl md:px-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.audiences.label}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.audiences.title}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {t.audiences.items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="inline-flex rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3 text-purple-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div>
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.services.label}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.services.title}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.services.items.map((service) => {
              const Icon = service.icon;
              return (
                <a key={service.title} href={`/${locale}/${service.href}`} className="group block">
                  <SectionCard className="h-full transition-all duration-300 hover:border-emerald-300/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-purple-500/10">
                    <div className="p-6">
                      <div className="inline-flex rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3 text-purple-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-medium">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/65">{service.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-200">
                        {t.services.view}
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </SectionCard>
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200 transition hover:text-emerald-100"
            >
              {t.services.viewAll}
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <SectionCard>
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.reasons.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.reasons.title}</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.reasons.items.map((reason) => (
                  <div key={reason} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="flex items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 p-1 text-purple-200">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-6 text-white/75">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          <SectionCard className="bg-gradient-to-br from-purple-400/10 to-white/5">
            <div className="flex h-full flex-col p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.cta.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.cta.title}</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">{t.cta.description}</p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm text-white/50">{t.cta.helperLabel}</p>
                <p className="mt-2 text-base leading-7 text-white/85">{t.cta.helperText}</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={`/${locale}/pc-builder`}>{t.cta.startBuild}</PrimaryButton>
                <a
                  href="mailto:info@northernstudio.be"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {t.cta.contactStudio}
                </a>
              </div>
            </div>
          </SectionCard>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-10 text-center text-sm text-white/50 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a href={`/${locale}/contact`} className="transition hover:text-white">{t.footer.contact}</a>
          <a href={`/${locale}/privacy`} className="transition hover:text-white">{t.footer.privacy}</a>
          <a href={`/${locale}/terms`} className="transition hover:text-white">{t.footer.terms}</a>
        </div>
        <p className="mt-6">© {new Date().getFullYear()} Northern Studio. {t.footer.rights}</p>
        <p className="mt-2">Northern Studio™</p>
      </footer>
    </main>
  );
}