"use client";

import { use } from "react";
import {
  Cpu,
  Monitor,
  CircuitBoard,
  MemoryStick,
  HardDrive,
  BatteryCharging,
  Search,
  ShieldCheck,
  Gauge,
  Wrench,
  BookOpen,
  Zap,
  Globe,
} from "lucide-react";
import StudioShell, {
  GlassCard,
  SectionHeading,
  Bullet,
  PrimaryButton,
  SecondaryButton,
} from "../../../components/StudioShell";

const content = {
  nl: {
    badge: "Hardwareadvies, compatibiliteit, prestaties en praktische uitleg",
    title1: "Guides en hardwareadvies",
    title2: "zonder giswerk",
    intro:
      "Northern Studio helpt je begrijpen welke onderdelen zinvol zijn, wat compatibel is en welke keuzes passen bij jouw gebruik.",
    categoriesTitle: "Waar Northern Studio je in kan begeleiden",
    guideTypesTitle: "Wat voor uitleg je hier mag verwachten",
    examplesTitle: "Typische onderwerpen voor Northern Studio guides",
    philosophyTitle: "Northern Studio legt hardware uit op een bruikbare manier",
    workflowTitle: "Van gids naar builder naar concrete oplossing",
    useCasesTitle: "Handig voor verschillende soorten bezoekers",
    faqTitle: "Wat deze pagina concreet betekent",
    ctaTitle: "Lees, vergelijk en ga daarna gericht verder",
    primary: "Naar PC Builder",
    secondary: "Bekijk alle diensten",
    tertiary: "Terug naar home",
    categories: [
      ["CPU & prestaties", "Processoren, cores, gamingprestaties en platformkeuze.", Cpu],
      ["GPU & grafische prestaties", "Welke grafische kaart past bij jouw resolutie en gebruik.", Monitor],
      ["Moederborden & compatibiliteit", "Socket, chipset en praktische bordkeuze.", CircuitBoard],
      ["RAM & systeemgeheugen", "Hoeveel geheugen nuttig is en welke snelheden relevant zijn.", MemoryStick],
      ["Opslag & snelheid", "SSD's, opslagplanning en wanneer snelle opslag telt.", HardDrive],
      ["Voeding, koeling & stabiliteit", "Wattage, airflow, koeling en algemene betrouwbaarheid.", BatteryCharging],
    ],
    guideTypes: [
      ["Keuzehulp", "Gidsen die helpen bij het kiezen tussen onderdelen, platformen of prijsklassen.", Search],
      ["Compatibiliteit", "Uitleg over wat wel en niet samenwerkt.", ShieldCheck],
      ["Prestaties", "Praktische uitleg over wat echt impact heeft.", Gauge],
      ["Upgrades", "Inzicht in welke upgrades nog zinvol zijn.", Wrench],
    ],
    examples: [
      "Welke gpu is logisch voor 1440p gaming?",
      "Hoeveel wattage heeft mijn build echt nodig?",
      "Moet ik DDR5 kiezen of is DDR4 nog voldoende?",
      "Welke upgrade geeft het meeste verschil in een trage pc?",
      "Wanneer is een cpu bottleneck echt relevant?",
      "Wanneer loont het nog om een bestaand systeem te upgraden?",
    ],
    philosophy: [
      "Duidelijke taal zonder technische mist",
      "Focus op praktische keuzes, niet op marketing",
      "Compatibiliteit en stabiliteit staan centraal",
      "Gidsen sluiten aan op echte builds en budgetten",
      "Geschikt voor beginners én gerichte vergelijkers",
      "Gebouwd als ondersteuning voor de PC Builder",
    ],
    workflow: ["Begrijp je opties", "Gebruik de builder", "Vraag begeleiding of uitvoering"],
    useCases: [
      ["Mensen die willen vergelijken", "Voor bezoekers die nog niet weten welke onderdelen of prijsklasse logisch zijn.", BookOpen],
      ["Mensen die een build plannen", "Voor wie al richting heeft maar betere compatibiliteit wil.", Cpu],
      ["Mensen die willen upgraden", "Voor systemen waar gerichte verbetering zinvol kan zijn.", Zap],
      ["Mensen die hulp willen bij beslissen", "Voor wie liever niet op forums verdrinkt.", Globe],
    ],
    faq: [
      ["Is dit een blog?", "Niet in de klassieke zin. Het is een kennisgedeelte gericht op duidelijke uitleg en keuzehulp."],
      ["Zijn deze gidsen alleen voor gamers?", "Nee. Ze zijn net zo relevant voor workstations, upgrades en algemene pc-gebruikers."],
      ["Kan ik hieruit rechtstreeks naar de builder gaan?", "Ja. De gidsen geven context en de builder maakt de configuratie concreet."],
      ["Kan Northern Studio ook persoonlijk advies geven?", "Ja. Persoonlijke begeleiding blijft mogelijk via diensten en contact."],
    ],
  },
  en: {
    badge: "Hardware guidance, compatibility, performance and practical explanations",
    title1: "Guides and hardware advice",
    title2: "without guesswork",
    intro:
      "Northern Studio helps you understand which parts make sense, what is compatible and which choices match your use case.",
    categoriesTitle: "What Northern Studio can guide you through",
    guideTypesTitle: "What kind of explanations you can expect here",
    examplesTitle: "Typical topics for Northern Studio guides",
    philosophyTitle: "Northern Studio explains hardware in a usable way",
    workflowTitle: "From guide to builder to concrete solution",
    useCasesTitle: "Useful for different kinds of visitors",
    faqTitle: "What this page actually means",
    ctaTitle: "Read, compare, then move forward with intent",
    primary: "Go to PC Builder",
    secondary: "View all services",
    tertiary: "Back to home",
    categories: [
      ["CPU & performance", "Processors, cores, gaming performance and platform choice.", Cpu],
      ["GPU & graphics performance", "Which graphics card fits your resolution and use case.", Monitor],
      ["Motherboards & compatibility", "Socket, chipset and practical board choice.", CircuitBoard],
      ["RAM & system memory", "How much memory is useful and which speeds matter.", MemoryStick],
      ["Storage & speed", "SSDs, storage planning and when fast storage matters.", HardDrive],
      ["Power supply, cooling & stability", "Wattage, airflow, cooling and reliability.", BatteryCharging],
    ],
    guideTypes: [
      ["Choice guides", "Guides that help choose between parts, platforms or price tiers.", Search],
      ["Compatibility", "Explanations of what works together and what does not.", ShieldCheck],
      ["Performance", "Practical explanations of what really affects speed.", Gauge],
      ["Upgrades", "Insight into which upgrades are still worthwhile.", Wrench],
    ],
    examples: [
      "Which GPU makes sense for 1440p gaming?",
      "How much wattage does my build really need?",
      "Should I choose DDR5 or is DDR4 still enough?",
      "Which upgrade gives the biggest improvement in a slow PC?",
      "When is a CPU bottleneck actually relevant?",
      "When is it still worth upgrading an existing system?",
    ],
    philosophy: [
      "Clear language without technical fog",
      "Focus on practical choices, not marketing noise",
      "Compatibility and stability come first",
      "Guides connect to real builds and budgets",
      "Useful for beginners and serious comparers",
      "Built to support the PC Builder",
    ],
    workflow: ["Understand your options", "Use the builder", "Ask for guidance or execution"],
    useCases: [
      ["People who want to compare", "For visitors who do not yet know which parts or price tier make sense.", BookOpen],
      ["People planning a build", "For anyone who already has direction but wants better compatibility.", Cpu],
      ["People wanting to upgrade", "For systems where targeted improvement could still make sense.", Zap],
      ["People who want help deciding", "For anyone who would rather not drown in forums.", Globe],
    ],
    faq: [
      ["Is this a blog?", "Not in the classic sense. It is a knowledge section focused on clear explanations and decisions."],
      ["Are these guides only for gamers?", "No. They are just as relevant for workstations, upgrades and general PC users."],
      ["Can I go from these guides straight into the builder?", "Yes. The guides give context and the builder makes it concrete."],
      ["Can Northern Studio also give personal advice?", "Yes. Personal guidance remains available through services and contact."],
    ],
  },
};

export default function GuidesPage({ params }) {
  const { locale: routeLocale } = use(params);
  const locale = routeLocale === "en" ? "en" : "nl";
  const t = content[locale];

  return (
    <StudioShell locale={locale} active="guides">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm text-white/72 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,255,225,0.95)]" />
            {t.badge}
          </div>
          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            {t.title1}
            <span className="block bg-[linear-gradient(90deg,#ffffff_0%,#c7fff4_32%,#b8fff1_48%,#d7cbff_78%,#ffffff_100%)] bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/64">{t.intro}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href={`/${locale}/pc-builder`}>{t.primary}</PrimaryButton>
            <SecondaryButton href={`/${locale}/services`}>{t.secondary}</SecondaryButton>
            <SecondaryButton href={`/${locale}`}>{t.tertiary}</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="py-12">
        <SectionHeading eyebrow="Topics" title={t.categoriesTitle} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.categories.map(([title, text, Icon]) => (
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
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-8">
            <SectionHeading eyebrow="Guide Types" title={t.guideTypesTitle} />
            <div className="grid gap-4 sm:grid-cols-2">
              {t.guideTypes.map(([title, text, Icon]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                    <Icon className="h-5 w-5 text-white/84" />
                  </div>
                  <h3 className="text-lg font-medium text-white/92">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/58">{text}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <SectionHeading eyebrow="Examples" title={t.examplesTitle} />
            <div className="grid gap-3">
              {t.examples.map((item) => <Bullet key={item}>{item}</Bullet>)}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <GlassCard className="p-8">
            <SectionHeading eyebrow="Approach" title={t.philosophyTitle} />
            <div className="grid gap-3">{t.philosophy.map((item) => <Bullet key={item}>{item}</Bullet>)}</div>
          </GlassCard>
          <GlassCard className="p-8">
            <SectionHeading eyebrow="Workflow" title={t.workflowTitle} />
            <div className="grid gap-3">
              {t.workflow.map((item, i) => <Bullet key={item}>{i + 1}. {item}</Bullet>)}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="py-12">
        <SectionHeading eyebrow="Audience" title={t.useCasesTitle} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.useCases.map(([title, text, Icon]) => (
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
          <SectionHeading eyebrow="FAQ" title={t.faqTitle} />
          <div className="grid gap-4">
            {t.faq.map(([q, a]) => (
              <div key={q} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <h3 className="text-base font-medium text-white/92">{q}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{a}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="py-12">
        <GlassCard className="p-8">
          <SectionHeading eyebrow="Next Step" title={t.ctaTitle} />
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href={`/${locale}/pc-builder`}>{t.primary}</PrimaryButton>
            <SecondaryButton href={`/${locale}/services`}>{t.secondary}</SecondaryButton>
            <SecondaryButton href={`/${locale}/contact`}>{locale === "nl" ? "Neem contact op" : "Contact us"}</SecondaryButton>
          </div>
        </GlassCard>
      </section>
    </StudioShell>
  );
}