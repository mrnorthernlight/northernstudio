"use client";

import { use } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Cpu,
  Globe,
  LifeBuoy,
  Mail,
  Monitor,
  Palette,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

const content = {
  nl: {
    nav: {
      brand: "NORTHERN STUDIO",
      home: "Home",
      services: "Diensten",
      builder: "PC Builder",
      itHelp: "IT Hulp",
      guides: "Guides",
      contact: "Contact",
    },
    hero: {
      badge: "Custom PC's, IT hulp, hardwareadvies en digitale diensten",
      title1: "Wat Northern Studio",
      title2: "voor je kan doen",
      description:
        "Northern Studio combineert hardwarekennis, IT ondersteuning en premium digitale diensten in één studio. Van custom pc builds en Windows-hulp tot branding en webdesign.",
      startBuilder: "Start de PC Builder",
      backHome: "Terug naar home",
      contact: "Neem contact op",
    },
    services: {
      label: "Diensten",
      title: "Vier servicepijlers, één duidelijke studio",
      cardCta: "Bekijk dienst",
      items: [
        {
          title: "Custom PC's",
          description:
            "Gaming pc's, workstations en upgrades op maat. Northern Studio helpt met onderdelen kiezen, compatibiliteit controleren en kan de volledige assemblage voor je uitvoeren.",
          href: "pc-builder",
          icon: Cpu,
          tags: ["Gaming PC's", "Workstations", "Upgrades", "Assemblage"],
          features: [
            "Compatibele onderdelen selecteren",
            "Prijs- en wattage-inzicht",
            "Builds voor gaming en professioneel gebruik",
            "Volledige uitvoering door Northern Studio mogelijk",
          ],
        },
        {
          title: "IT Hulp & Windows Support",
          description:
            "Praktische hulp bij trage pc's, Windows-problemen, virusverwijdering, upgrades, installatieproblemen en algemene technische storingen.",
          href: "it-help",
          icon: Wrench,
          tags: ["Windows", "Herstellingen", "Optimalisatie", "Support"],
          features: [
            "Windows troubleshooting en herstel",
            "Pc sneller en stabieler maken",
            "Virusverwijdering en cleanup",
            "Hardware upgrades en configuratie",
          ],
        },
        {
          title: "Hardware Advies",
          description:
            "Hulp bij het kiezen van de juiste onderdelen, prestaties vergelijken, compatibiliteit controleren en builds afstemmen op jouw gebruik.",
          href: "guides",
          icon: ShieldCheck,
          tags: ["Compatibiliteit", "Onderdelen", "Prestaties", "Advies"],
          features: [
            "Onderdelen vergelijken op gebruik en budget",
            "Compatibiliteit tussen componenten controleren",
            "Advies voor games, editing en workstation builds",
            "Duidelijke uitleg zonder technisch gedoe",
          ],
        },
        {
          title: "Webdesign & Branding",
          description:
            "Premium websites, branding en digitale uitstraling voor bedrijven die professioneel online aanwezig willen zijn.",
          href: "digital-services",
          icon: Globe,
          tags: ["Webdesign", "Branding", "Logo Design", "Digitale Aanwezigheid"],
          features: [
            "Moderne websites met premium uitstraling",
            "Logo design en visuele identiteit",
            "Technische implementatie en structuur",
            "Digitale aanwezigheid voor bedrijven versterken",
          ],
        },
      ],
    },
    workflow: {
      label: "Werkwijze",
      title: "Hoe Northern Studio werkt",
      steps: [
        {
          title: "Analyse & intake",
          text: "We bekijken wat je nodig hebt, waar het probleem zit of welk doel je wil bereiken.",
        },
        {
          title: "Advies & voorstel",
          text: "Je krijgt een duidelijke richting, voorstel of offerte zonder vaagheid of technisch rookgordijn.",
        },
        {
          title: "Uitvoering",
          text: "Northern Studio voert de build, support of digitale dienst professioneel en gestructureerd uit.",
        },
        {
          title: "Afronding & ondersteuning",
          text: "Na oplevering blijft alles helder: wat gedaan is, wat nog kan, en welke volgende stap logisch is.",
        },
      ],
    },
    trust: {
      label: "Waarom Northern Studio",
      title: "Technologie, begeleiding en duidelijkheid in één geheel",
      description:
        "Northern Studio is gebouwd rond hardwarekennis, praktische IT ondersteuning en moderne digitale uitvoering. Geen vage beloftes, maar duidelijke stappen, realistische oplossingen en een premium aanpak.",
      points: [
        "Eén studio voor hardware, IT hulp en digitale diensten",
        "Lokale ondersteuning in België",
        "Duidelijke communicatie en realistische oplossingen",
        "Compatibiliteit, stabiliteit en praktische werking staan voorop",
        "Premium uitstraling zonder onnodige complexiteit",
        "Geschikt voor particulieren én bedrijven",
      ],
    },
    audiences: {
      label: "Voor wie",
      title: "Geschikt voor mensen die iets degelijk willen, niet iets half werkend",
      items: [
        {
          title: "Gamers",
          text: "Voor wie een systeem wil dat echt past bij resolutie, games en budget.",
          icon: Monitor,
        },
        {
          title: "Professionals",
          text: "Voor wie een stabiele workstation of technische ondersteuning nodig heeft.",
          icon: Briefcase,
        },
        {
          title: "Particulieren",
          text: "Voor pc-problemen, upgrades, Windows-hulp en praktisch hardwareadvies.",
          icon: LifeBuoy,
        },
        {
          title: "Bedrijven",
          text: "Voor webdesign, branding en een sterkere professionele online aanwezigheid.",
          icon: Palette,
        },
      ],
    },
    cta: {
      label: "Startpunt",
      title: "Niet zeker welke dienst je nodig hebt?",
      description:
        "Dat is normaal. Soms begint een vraag als hardwareadvies en eindigt die in een volledige build, upgrade of technische oplossing. Northern Studio helpt je de juiste richting te kiezen.",
      faqLabel: "Veelvoorkomende vragen",
      faqs: [
        "Welke pc past bij mijn budget en gebruik?",
        "Waarom is mijn computer traag of instabiel?",
        "Welke onderdelen zijn compatibel?",
        "Kan ik mijn bedrijf professioneler online tonen?",
      ],
      nextLabel: "Volgende stap",
      nextTitle: "Kies je route en we bouwen van daaruit verder",
      nextDescription:
        "Start met de configurator, lees verder via de juiste dienstpagina of neem direct contact op.",
      startBuilder: "Start de PC Builder",
      viewItHelp: "Bekijk IT Hulp",
      viewDigital: "Bekijk Digital Services",
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
      home: "Home",
      services: "Services",
      builder: "PC Builder",
      itHelp: "IT Help",
      guides: "Guides",
      contact: "Contact",
    },
    hero: {
      badge: "Custom PCs, IT help, hardware guidance and digital services",
      title1: "What Northern Studio",
      title2: "can do for you",
      description:
        "Northern Studio combines hardware knowledge, IT support and premium digital services in one studio. From custom PC builds and Windows help to branding and web design.",
      startBuilder: "Start the PC Builder",
      backHome: "Back to home",
      contact: "Contact us",
    },
    services: {
      label: "Services",
      title: "Four service pillars, one clear studio",
      cardCta: "View service",
      items: [
        {
          title: "Custom PCs",
          description:
            "Gaming PCs, workstations and tailored upgrades. Northern Studio helps choose parts, check compatibility and can handle full assembly for you.",
          href: "pc-builder",
          icon: Cpu,
          tags: ["Gaming PCs", "Workstations", "Upgrades", "Assembly"],
          features: [
            "Select compatible parts",
            "Price and wattage insight",
            "Builds for gaming and professional use",
            "Full execution by Northern Studio available",
          ],
        },
        {
          title: "IT Help & Windows Support",
          description:
            "Practical help with slow PCs, Windows issues, virus removal, upgrades, installation problems and general technical trouble.",
          href: "it-help",
          icon: Wrench,
          tags: ["Windows", "Repairs", "Optimization", "Support"],
          features: [
            "Windows troubleshooting and recovery",
            "Make your PC faster and more stable",
            "Virus removal and cleanup",
            "Hardware upgrades and configuration",
          ],
        },
        {
          title: "Hardware Guidance",
          description:
            "Help choosing the right parts, comparing performance, checking compatibility and tailoring builds to your use case.",
          href: "guides",
          icon: ShieldCheck,
          tags: ["Compatibility", "Parts", "Performance", "Advice"],
          features: [
            "Compare parts by use case and budget",
            "Check compatibility between components",
            "Advice for games, editing and workstation builds",
            "Clear explanations without technical fog",
          ],
        },
        {
          title: "Web Design & Branding",
          description:
            "Premium websites, branding and digital presence for businesses that want to look professional online.",
          href: "digital-services",
          icon: Globe,
          tags: ["Web Design", "Branding", "Logo Design", "Digital Presence"],
          features: [
            "Modern websites with a premium look",
            "Logo design and visual identity",
            "Technical implementation and structure",
            "Strengthen digital presence for businesses",
          ],
        },
      ],
    },
    workflow: {
      label: "Workflow",
      title: "How Northern Studio works",
      steps: [
        {
          title: "Analysis & intake",
          text: "We look at what you need, where the problem is or what goal you want to reach.",
        },
        {
          title: "Advice & proposal",
          text: "You get a clear direction, proposal or quote without vagueness or technical smoke.",
        },
        {
          title: "Execution",
          text: "Northern Studio delivers the build, support or digital service professionally and in a structured way.",
        },
        {
          title: "Completion & support",
          text: "After delivery, everything stays clear: what was done, what can still be done and what next step makes sense.",
        },
      ],
    },
    trust: {
      label: "Why Northern Studio",
      title: "Technology, guidance and clarity in one whole",
      description:
        "Northern Studio is built around hardware expertise, practical IT support and modern digital execution. No vague promises, just clear steps, realistic solutions and a premium approach.",
      points: [
        "One studio for hardware, IT help and digital services",
        "Local support in Belgium",
        "Clear communication and realistic solutions",
        "Compatibility, stability and practical function come first",
        "Premium look without needless complexity",
        "Suitable for both individuals and businesses",
      ],
    },
    audiences: {
      label: "Who it is for",
      title: "Built for people who want something solid, not something half-working",
      items: [
        {
          title: "Gamers",
          text: "For people who want a system that truly fits resolution, games and budget.",
          icon: Monitor,
        },
        {
          title: "Professionals",
          text: "For people who need a stable workstation or technical support.",
          icon: Briefcase,
        },
        {
          title: "Individuals",
          text: "For PC issues, upgrades, Windows help and practical hardware advice.",
          icon: LifeBuoy,
        },
        {
          title: "Businesses",
          text: "For web design, branding and a stronger professional online presence.",
          icon: Palette,
        },
      ],
    },
    cta: {
      label: "Starting point",
      title: "Not sure which service you need?",
      description:
        "That’s normal. Sometimes a question starts as hardware advice and ends in a full build, upgrade or technical solution. Northern Studio helps you choose the right direction.",
      faqLabel: "Common questions",
      faqs: [
        "Which PC fits my budget and use case?",
        "Why is my computer slow or unstable?",
        "Which parts are compatible?",
        "Can I present my business more professionally online?",
      ],
      nextLabel: "Next step",
      nextTitle: "Choose your route and we build from there",
      nextDescription:
        "Start with the configurator, continue through the right service page or get in touch directly.",
      startBuilder: "Start the PC Builder",
      viewItHelp: "View IT Help",
      viewDigital: "View Digital Services",
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

export default function ServicesPage({ params }) {
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
              <a href={`/${locale}`} className="text-white/70 transition hover:text-white">{t.nav.home}</a>
              <a href={`/${locale}/services`} className="text-white transition">{t.nav.services}</a>
              <a href={`/${locale}/pc-builder`} className="text-white/70 transition hover:text-white">{t.nav.builder}</a>
              <a href={`/${locale}/it-help`} className="text-white/70 transition hover:text-white">{t.nav.itHelp}</a>
              <a href={`/${locale}/guides`} className="text-white/70 transition hover:text-white">{t.nav.guides}</a>
              <a href={`/${locale}/contact`} className="text-white/70 transition hover:text-white">{t.nav.contact}</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-12 md:px-10 md:pb-20 md:pt-16">
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

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4 text-emerald-300" />
            {t.hero.badge}
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">
            <span className="block leading-[1.12]">{t.hero.title1}</span>
            <span className="mt-3 block pb-3 leading-[1.28] bg-gradient-to-r from-white via-emerald-200 to-purple-300 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href={`/${locale}/pc-builder`}>
              {t.hero.startBuilder}
              <ArrowRight className="ml-2 h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton href={`/${locale}`}>{t.hero.backHome}</SecondaryButton>
            <SecondaryButton href={`/${locale}/contact`}>{t.hero.contact}</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.services.label}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{t.services.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.services.items.map((service) => {
            const Icon = service.icon;
            return (
              <SectionCard
                key={service.title}
                className="h-full border-white/12 bg-white/[0.06] transition-all duration-300 hover:border-emerald-300/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3 text-purple-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                      Northern Studio
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-medium">{service.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">{service.description}</p>

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

                  <div className="mt-6 grid gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 p-4"
                      >
                        <div className="mt-0.5 flex items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 p-1 text-purple-200">
                          <ShieldCheck className="h-4 w-4" />
                        </div>
                        <p className="text-sm leading-6 text-white/78">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href={`/${locale}/${service.href}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200 transition hover:text-emerald-100"
                    >
                      {t.services.cardCta}
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </SectionCard>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionCard className="bg-white/[0.06]">
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.workflow.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.workflow.title}</h2>

              <div className="mt-8 space-y-4">
                {t.workflow.steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 text-sm text-purple-200">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/68">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          <SectionCard className="bg-gradient-to-br from-purple-400/10 to-white/5">
            <div className="flex h-full flex-col p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.trust.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.trust.title}</h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">{t.trust.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.trust.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 p-4"
                  >
                    <div className="mt-0.5 flex items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 p-1 text-purple-200">
                      <Zap className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-6 text-white/76">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-8 backdrop-blur-xl md:px-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.audiences.label}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{t.audiences.title}</h2>
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
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionCard>
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.cta.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.cta.title}</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">{t.cta.description}</p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm text-white/50">{t.cta.faqLabel}</p>
                <div className="mt-4 grid gap-3">
                  {t.cta.faqs.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-white/82">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard className="bg-gradient-to-br from-emerald-400/10 to-white/5">
            <div className="flex h-full flex-col justify-between p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.cta.nextLabel}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.cta.nextTitle}</h2>
                <p className="mt-5 text-sm leading-7 text-white/70">{t.cta.nextDescription}</p>
              </div>

              <div className="mt-8 grid gap-3">
                <PrimaryButton href={`/${locale}/pc-builder`}>
                  {t.cta.startBuilder}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </PrimaryButton>

                <SecondaryButton href={`/${locale}/it-help`}>{t.cta.viewItHelp}</SecondaryButton>
                <SecondaryButton href={`/${locale}/digital-services`}>{t.cta.viewDigital}</SecondaryButton>

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
          <a href={`/${locale}`} className="transition hover:text-white">{t.nav.home}</a>
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