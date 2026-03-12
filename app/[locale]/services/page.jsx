"use client";

import { use } from "react";
import { Cpu, Globe, LifeBuoy, Monitor, Palette, ShieldCheck, Wrench, Briefcase } from "lucide-react";
import StudioShell, {
  GlassCard,
  SectionHeading,
  Bullet,
  PrimaryButton,
  SecondaryButton,
} from "../../../components/StudioShell";

const content = {
  nl: {
    heroBadge: "Custom PC's, IT hulp, hardwareadvies en digitale diensten",
    heroTitle1: "Wat Northern Studio",
    heroTitle2: "voor je kan doen",
    heroText:
      "Northern Studio combineert hardwarekennis, IT ondersteuning en premium digitale diensten in één studio.",
    startBuilder: "Start de PC Builder",
    backHome: "Terug naar home",
    contact: "Neem contact op",
    servicesTitle: "Vier servicepijlers, één duidelijke studio",
    workflowTitle: "Hoe Northern Studio werkt",
    trustTitle: "Technologie, begeleiding en duidelijkheid in één geheel",
    audienceTitle: "Geschikt voor mensen die iets degelijk willen, niet iets half werkend",
    ctaTitle: "Niet zeker welke dienst je nodig hebt?",
    ctaText:
      "Dat is normaal. Soms begint een vraag als hardwareadvies en eindigt die in een volledige build, upgrade of technische oplossing.",
    services: [
      {
        title: "Custom PC's",
        href: "pc-builder",
        icon: Cpu,
        text: "Gaming pc's, workstations en upgrades op maat.",
        points: ["Compatibele onderdelen selecteren", "Prijs- en wattage-inzicht", "Builds voor gaming en professioneel gebruik", "Volledige uitvoering mogelijk"],
      },
      {
        title: "IT Hulp & Windows Support",
        href: "it-help",
        icon: Wrench,
        text: "Praktische hulp bij trage pc's, Windows-problemen en upgrades.",
        points: ["Windows troubleshooting", "Pc sneller maken", "Virusverwijdering", "Hardware upgrades"],
      },
      {
        title: "Hardware Advies",
        href: "guides",
        icon: ShieldCheck,
        text: "Hulp bij onderdelen, compatibiliteit en prestaties.",
        points: ["Onderdelen vergelijken", "Compatibiliteit controleren", "Advies voor games en workstations", "Duidelijke uitleg"],
      },
      {
        title: "Webdesign & Branding",
        href: "digital-services",
        icon: Globe,
        text: "Premium websites, branding en digitale uitstraling.",
        points: ["Moderne websites", "Logo design", "Technische implementatie", "Digitale aanwezigheid versterken"],
      },
    ],
    workflow: [
      "Analyse & intake",
      "Advies & voorstel",
      "Uitvoering",
      "Afronding & ondersteuning",
    ],
    trust: [
      "Eén studio voor hardware, IT hulp en digitale diensten",
      "Lokale ondersteuning in België",
      "Duidelijke communicatie en realistische oplossingen",
      "Compatibiliteit, stabiliteit en praktische werking staan voorop",
      "Premium uitstraling zonder onnodige complexiteit",
      "Geschikt voor particulieren én bedrijven",
    ],
    audience: [
      ["Gamers", "Voor wie een systeem wil dat echt past bij resolutie, games en budget.", Monitor],
      ["Professionals", "Voor wie een stabiele workstation of technische ondersteuning nodig heeft.", Briefcase],
      ["Particulieren", "Voor pc-problemen, upgrades, Windows-hulp en hardwareadvies.", LifeBuoy],
      ["Bedrijven", "Voor webdesign, branding en sterkere online aanwezigheid.", Palette],
    ],
  },
  en: {
    heroBadge: "Custom PCs, IT help, hardware guidance and digital services",
    heroTitle1: "What Northern Studio",
    heroTitle2: "can do for you",
    heroText:
      "Northern Studio combines hardware knowledge, IT support and premium digital services in one studio.",
    startBuilder: "Start the PC Builder",
    backHome: "Back to home",
    contact: "Contact us",
    servicesTitle: "Four service pillars, one clear studio",
    workflowTitle: "How Northern Studio works",
    trustTitle: "Technology, guidance and clarity in one whole",
    audienceTitle: "Built for people who want something solid, not something half-working",
    ctaTitle: "Not sure which service you need?",
    ctaText:
      "That is normal. Sometimes a question starts as hardware advice and ends in a full build, upgrade or technical solution.",
    services: [
      {
        title: "Custom PCs",
        href: "pc-builder",
        icon: Cpu,
        text: "Gaming PCs, workstations and tailored upgrades.",
        points: ["Select compatible parts", "Price and wattage insight", "Builds for gaming and professional use", "Full execution available"],
      },
      {
        title: "IT Help & Windows Support",
        href: "it-help",
        icon: Wrench,
        text: "Practical help with slow PCs, Windows issues and upgrades.",
        points: ["Windows troubleshooting", "Make your PC faster", "Virus removal", "Hardware upgrades"],
      },
      {
        title: "Hardware Guidance",
        href: "guides",
        icon: ShieldCheck,
        text: "Help with parts, compatibility and performance.",
        points: ["Compare parts", "Check compatibility", "Advice for games and workstations", "Clear explanations"],
      },
      {
        title: "Web Design & Branding",
        href: "digital-services",
        icon: Globe,
        text: "Premium websites, branding and digital presentation.",
        points: ["Modern websites", "Logo design", "Technical implementation", "Stronger digital presence"],
      },
    ],
    workflow: ["Analysis & intake", "Advice & proposal", "Execution", "Completion & support"],
    trust: [
      "One studio for hardware, IT help and digital services",
      "Local support in Belgium",
      "Clear communication and realistic solutions",
      "Compatibility, stability and practical function come first",
      "Premium look without needless complexity",
      "Suitable for both individuals and businesses",
    ],
    audience: [
      ["Gamers", "For people who want a system that truly fits resolution, games and budget.", Monitor],
      ["Professionals", "For people who need a stable workstation or technical support.", Briefcase],
      ["Individuals", "For PC issues, upgrades, Windows help and hardware advice.", LifeBuoy],
      ["Businesses", "For web design, branding and stronger online presence.", Palette],
    ],
  },
};

export default function ServicesPage({ params }) {
  const { locale: routeLocale } = use(params);
  const locale = routeLocale === "en" ? "en" : "nl";
  const t = content[locale];

  return (
    <StudioShell locale={locale} active="services">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm text-white/72 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,255,225,0.95)]" />
            {t.heroBadge}
          </div>
          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            {t.heroTitle1}
            <span className="block bg-[linear-gradient(90deg,#ffffff_0%,#c7fff4_32%,#b8fff1_48%,#d7cbff_78%,#ffffff_100%)] bg-clip-text text-transparent">
              {t.heroTitle2}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/64">{t.heroText}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href={`/${locale}/pc-builder`}>{t.startBuilder}</PrimaryButton>
            <SecondaryButton href={`/${locale}`}>{t.backHome}</SecondaryButton>
            <SecondaryButton href={`/${locale}/contact`}>{t.contact}</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="py-12">
        <SectionHeading eyebrow="Services" title={t.servicesTitle} />
        <div className="grid gap-6 md:grid-cols-2">
          {t.services.map((service) => {
            const Icon = service.icon;
            return (
              <GlassCard key={service.title} className="p-6">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                  <Icon className="h-5 w-5 text-white/84" />
                </div>
                <h3 className="text-2xl font-medium text-white/92">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{service.text}</p>
                <div className="mt-6 grid gap-3">
                  {service.points.map((p) => <Bullet key={p}>{p}</Bullet>)}
                </div>
                <div className="mt-6">
                  <a href={`/${locale}/${service.href}`} className="text-sm text-white/78 underline underline-offset-4">
                    {locale === "nl" ? "Bekijk dienst" : "View service"}
                  </a>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-8">
            <SectionHeading eyebrow="Workflow" title={t.workflowTitle} />
            <div className="grid gap-3">
              {t.workflow.map((item, i) => <Bullet key={item}>{i + 1}. {item}</Bullet>)}
            </div>
          </GlassCard>
          <GlassCard className="p-8">
            <SectionHeading eyebrow="Why Northern Studio" title={t.trustTitle} />
            <div className="grid gap-3">
              {t.trust.map((item) => <Bullet key={item}>{item}</Bullet>)}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="py-12">
        <SectionHeading eyebrow="Audience" title={t.audienceTitle} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.audience.map(([title, text, Icon]) => (
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
        <GlassCard className="p-8">
          <SectionHeading eyebrow="Next Step" title={t.ctaTitle} description={t.ctaText} />
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href={`/${locale}/pc-builder`}>{t.startBuilder}</PrimaryButton>
            <SecondaryButton href={`/${locale}/it-help`}>{locale === "nl" ? "Bekijk IT Hulp" : "View IT Help"}</SecondaryButton>
            <SecondaryButton href={`/${locale}/digital-services`}>{locale === "nl" ? "Bekijk Digital Services" : "View Digital Services"}</SecondaryButton>
          </div>
        </GlassCard>
      </section>
    </StudioShell>
  );
}