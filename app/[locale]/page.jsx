"use client";

import { use } from "react";
import {
  ArrowRight,
  Cpu,
  Globe,
  Mail,
  Monitor,
  Briefcase,
  LifeBuoy,
  Palette,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import StudioShell, {
  GlassCard,
  PrimaryButton,
  SecondaryButton,
  SectionHeading,
  Bullet,
  CardLink,
} from "../../components/StudioShell";

const content = {
  nl: {
    hero: {
      badge: "PC builds, IT hulp, Windows support en premium webdesign",
      title1: "Stel de juiste pc samen.",
      title2: "Northern Studio regelt de rest.",
      description:
        "Northern Studio helpt mensen met custom pc's, hardwareadvies, volledige IT hulp, Windows-problemen, premium websites en logo design.",
      primary: "Start de PC Builder",
      services: "Bekijk alle diensten",
      contact: "Neem contact op",
    },
    routerTitle: "Waarmee kunnen we je helpen?",
    routerDescription:
      "Northern Studio combineert custom pc builds, IT hulp, hardwareadvies en digitale diensten.",
    router: [
      ["Ik wil een PC bouwen", "Gebruik de PC Builder om een systeem samen te stellen dat past bij je budget en gebruik.", "pc-builder"],
      ["Ik heb IT hulp nodig", "Voor trage pc's, Windows-problemen, upgrades en technische ondersteuning.", "it-help"],
      ["Ik wil hardware advies", "Hulp bij onderdelen kiezen, compatibiliteit controleren en prestaties vergelijken.", "guides"],
      ["Ik wil een website of branding", "Voor premium webdesign, logo design en een professionele online uitstraling.", "digital-services"],
      ["Bekijk alle diensten", "Een volledig overzicht van alles wat Northern Studio aanbiedt.", "services"],
    ],
    audiencesTitle: "Northern Studio helpt zowel particulieren als bedrijven",
    audiences: [
      ["Gaming PC's", "Voor spelers die een systeem willen dat echt past bij hun games, resolutie en budget.", Monitor],
      ["Workstations", "Voor editing, design, multitasking en zwaardere workflows.", Briefcase],
      ["IT Hulp", "Voor trage pc's, Windows-problemen, upgrades en algemene technische hulp.", LifeBuoy],
      ["Web & Branding", "Voor ondernemers die een premium website of sterker merk nodig hebben.", Palette],
    ],
    reasonsTitle: "Waarom mensen voor Northern Studio kiezen",
    reasons: [
      "Compatibiliteit staat voorop",
      "Duidelijke offerte en betaling",
      "Lokale ondersteuning in België",
      "Professionele assemblage en begeleiding",
      "Windows- en hardwarekennis in één studio",
      "Persoonlijk contact en praktische oplossingen",
    ],
    ctaTitle: "Vertel wat je zoekt, dan denken we met je mee",
    ctaText:
      "Of je nu een gaming pc, workstation, upgrade, Windows-hulp, website of logo nodig hebt: Northern Studio helpt je verder met duidelijk advies en een concrete volgende stap.",
    startBuild: "Start je build",
    contactStudio: "Contacteer Northern Studio",
  },
  en: {
    hero: {
      badge: "PC builds, IT help, Windows support and premium web design",
      title1: "Build the right PC.",
      title2: "Northern Studio handles the rest.",
      description:
        "Northern Studio helps people with custom PCs, hardware guidance, full IT help, Windows issues, premium websites and logo design.",
      primary: "Start the PC Builder",
      services: "View all services",
      contact: "Contact us",
    },
    routerTitle: "How can we help?",
    routerDescription:
      "Northern Studio combines custom PC builds, IT help, hardware guidance and digital services.",
    router: [
      ["I want to build a PC", "Use the PC Builder to configure a system that fits your budget and needs.", "pc-builder"],
      ["I need IT help", "For slow PCs, Windows issues, upgrades and technical support.", "it-help"],
      ["I want hardware advice", "Get help choosing parts, checking compatibility and comparing performance.", "guides"],
      ["I want a website or branding", "For premium web design, logo design and a stronger professional presence.", "digital-services"],
      ["View all services", "A complete overview of everything Northern Studio offers.", "services"],
    ],
    audiencesTitle: "Northern Studio helps both individuals and businesses",
    audiences: [
      ["Gaming PCs", "For players who want a system that truly fits their games, resolution and budget.", Monitor],
      ["Workstations", "For editing, design, multitasking and heavier workflows.", Briefcase],
      ["IT Help", "For slow PCs, Windows issues, upgrades and general tech support.", LifeBuoy],
      ["Web & Branding", "For owners who need a premium website or stronger online presence.", Palette],
    ],
    reasonsTitle: "Why people choose Northern Studio",
    reasons: [
      "Compatibility comes first",
      "Clear quotes and payment flow",
      "Local support in Belgium",
      "Professional assembly and guidance",
      "Windows and hardware expertise in one studio",
      "Personal contact and practical solutions",
    ],
    ctaTitle: "Tell us what you need and we’ll think along with you",
    ctaText:
      "Whether you need a gaming PC, workstation, upgrade, Windows help, website or logo: Northern Studio helps you move forward with clear advice and a concrete next step.",
    startBuild: "Start your build",
    contactStudio: "Contact Northern Studio",
  },
};

export default function NorthernHomepage({ params }) {
  const { locale: routeLocale } = use(params);
  const locale = routeLocale === "en" ? "en" : "nl";
  const t = content[locale];

  return (
    <StudioShell locale={locale} active="home">
      <section className="relative flex flex-1 items-center py-16 md:py-24">
        <div className="pointer-events-none absolute right-[-10rem] top-10 flex h-[28rem] w-[28rem] items-center justify-center opacity-[0.05] blur-[1px]">
          <span className="text-[18rem] font-bold tracking-[0.12em] text-white/90">NS</span>
        </div>

        <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <section>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm text-white/72 backdrop-blur-xl">
              <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,255,225,0.95)]" />
              {t.hero.badge}
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-[5.5rem]">
              {t.hero.title1}
              <span className="block bg-[linear-gradient(90deg,#ffffff_0%,#c7fff4_32%,#b8fff1_48%,#d7cbff_78%,#ffffff_100%)] bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/64 md:text-xl">
              {t.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href={`/${locale}/pc-builder`}>
                {t.hero.primary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton href={`/${locale}/services`}>{t.hero.services}</SecondaryButton>
              <SecondaryButton href={`/${locale}/contact`}>{t.hero.contact}</SecondaryButton>
            </div>
          </section>

          <section className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(121,255,228,0.18),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(151,95,255,0.16),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_32%)] blur-2xl" />
            <GlassCard className="relative p-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#07111a]/80 p-5">
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.34em] text-white/38">Core Ecosystem</p>
                    <h2 className="mt-2 text-xl font-medium text-white/92">Northern Studio Interface</h2>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/58">
                    Live Direction
                  </div>
                </div>

                <div className="mt-5 grid gap-4">
                  <CardLink href={`/${locale}/pc-builder`} title="Custom PC Builds" text="Performance systems designed with clarity, compatibility and premium execution." />
                  <CardLink href={`/${locale}/it-help`} title="IT Help" text="Windows support, diagnostics, upgrades and practical technical guidance." />
                  <CardLink href={`/${locale}/digital-services`} title="Digital Services" text="Web design, branding and digital systems with a sharper visual identity." />
                </div>
              </div>
            </GlassCard>
          </section>
        </div>
      </section>

      <section className="py-12">
        <SectionHeading eyebrow="Routes" title={t.routerTitle} description={t.routerDescription} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.router.map(([title, text, href]) => (
            <CardLink key={title} href={`/${locale}/${href}`} title={title} text={text} />
          ))}
        </div>
      </section>

      <section className="py-12">
        <SectionHeading eyebrow="Audience" title={t.audiencesTitle} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.audiences.map(([title, text, Icon]) => (
            <GlassCard key={title} className="p-5">
              <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <Icon className="h-5 w-5 text-white/84" />
              </div>
              <h3 className="text-lg font-medium text-white/92">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/58">{text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <GlassCard className="p-8">
            <SectionHeading eyebrow="Why Northern Studio" title={t.reasonsTitle} />
            <div className="grid gap-3 sm:grid-cols-2">
              {t.reasons.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/42">Next Step</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">{t.ctaTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">{t.ctaText}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href={`/${locale}/pc-builder`}>
                {t.startBuild}
                <ArrowRight className="ml-2 h-4 w-4" />
              </PrimaryButton>
              <a
                href="mailto:info@northernstudio.be"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-6 text-sm font-medium text-white/88 backdrop-blur-xl transition hover:bg-white/[0.08]"
              >
                <Mail className="mr-2 h-4 w-4" />
                {t.contactStudio}
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </StudioShell>
  );
}