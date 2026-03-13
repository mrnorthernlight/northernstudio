"use client";

import { use } from "react";
import { ArrowRight, Monitor, Briefcase, LifeBuoy, Palette } from "lucide-react";

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
        "Northern Studio helpt met custom pc builds, hardwareadvies, IT hulp, Windows-problemen en premium websites.",
      primary: "Start de PC Builder",
      services: "Bekijk diensten",
      contact: "Contact",
    },

    routerTitle: "Waarmee kunnen we helpen?",
    routerDescription:
      "Northern Studio combineert custom PC builds, IT hulp en digitale diensten.",

    router: [
      [
        "Ik wil een PC bouwen",
        "Gebruik de PC Builder om een systeem samen te stellen dat past bij je budget.",
        "pc-builder",
      ],
      [
        "Ik heb IT hulp nodig",
        "Voor Windows-problemen, trage pc's en technische hulp.",
        "it-help",
      ],
      [
        "Ik wil hardware advies",
        "Hulp bij onderdelen, compatibiliteit en prestaties.",
        "guides",
      ],
      [
        "Ik wil een website",
        "Premium webdesign en branding.",
        "digital-services",
      ],
      [
        "Bekijk alle diensten",
        "Overzicht van alles wat Northern Studio aanbiedt.",
        "services",
      ],
    ],

    audiencesTitle:
      "Northern Studio helpt zowel particulieren als bedrijven",

    audiences: [
      [
        "Gaming PC's",
        "Voor spelers die een systeem willen dat echt past bij hun games.",
        Monitor,
      ],
      [
        "Workstations",
        "Voor editing, design en professionele workflows.",
        Briefcase,
      ],
      [
        "IT Hulp",
        "Voor Windows-problemen, upgrades en systeemdiagnose.",
        LifeBuoy,
      ],
      [
        "Web & Branding",
        "Voor ondernemers die een sterke website nodig hebben.",
        Palette,
      ],
    ],

    reasonsTitle: "Waarom Northern Studio",

    reasons: [
      "Compatibiliteit staat voorop",
      "Lokale ondersteuning in België",
      "Duidelijke communicatie",
      "Hardware en IT kennis in één studio",
      "Premium uitstraling",
      "Praktische oplossingen",
    ],

    ctaTitle: "Vertel wat je nodig hebt",

    ctaText:
      "Of je nu een gaming pc, workstation, upgrade, website of IT hulp nodig hebt — Northern Studio helpt je verder.",

    startBuild: "Start je build",
    contactStudio: "Contacteer Northern Studio",
  },

  en: {
    hero: {
      badge: "PC builds, IT help, Windows support and premium web design",
      title1: "Build the right PC.",
      title2: "Northern Studio handles the rest.",
      description:
        "Northern Studio helps with custom PCs, hardware guidance, IT support, Windows issues and premium websites.",
      primary: "Start PC Builder",
      services: "View services",
      contact: "Contact",
    },

    routerTitle: "How can we help?",
    routerDescription:
      "Northern Studio combines custom PC builds, IT support and digital services.",

    router: [
      [
        "I want to build a PC",
        "Use the PC Builder to configure a system that fits your budget.",
        "pc-builder",
      ],
      [
        "I need IT help",
        "For Windows issues, slow PCs and technical support.",
        "it-help",
      ],
      [
        "I want hardware advice",
        "Help choosing compatible parts and performance.",
        "guides",
      ],
      [
        "I want a website",
        "Premium web design and branding.",
        "digital-services",
      ],
      [
        "View all services",
        "Full overview of Northern Studio services.",
        "services",
      ],
    ],

    audiencesTitle:
      "Northern Studio supports individuals and businesses",

    audiences: [
      [
        "Gaming PCs",
        "Systems tailored for modern games and performance.",
        Monitor,
      ],
      [
        "Workstations",
        "Stable systems for creative and professional workflows.",
        Briefcase,
      ],
      [
        "IT Help",
        "Windows support, troubleshooting and upgrades.",
        LifeBuoy,
      ],
      [
        "Web & Branding",
        "Premium websites and digital presence.",
        Palette,
      ],
    ],

    reasonsTitle: "Why Northern Studio",

    reasons: [
      "Compatibility first",
      "Local support in Belgium",
      "Clear communication",
      "Hardware and IT knowledge",
      "Premium presentation",
      "Practical solutions",
    ],

    ctaTitle: "Tell us what you need",

    ctaText:
      "Whether you need a gaming PC, workstation, upgrade, website or IT support — Northern Studio can help.",

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
      <section className="py-20">

        <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm text-white/70">
          <div className="h-2 w-2 rounded-full bg-emerald-300" />
          {t.hero.badge}
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-semibold leading-[0.95] tracking-[-0.05em]">
          {t.hero.title1}
          <span className="block bg-[linear-gradient(90deg,#ffffff,#c7fff4,#d7cbff)] bg-clip-text text-transparent">
            {t.hero.title2}
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-white/65">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <PrimaryButton href={`/${locale}/pc-builder`}>
            {t.hero.primary}
            <ArrowRight className="ml-2 h-4 w-4" />
          </PrimaryButton>

          <SecondaryButton href={`/${locale}/services`}>
            {t.hero.services}
          </SecondaryButton>

          <SecondaryButton href={`/${locale}/contact`}>
            {t.hero.contact}
          </SecondaryButton>
        </div>

      </section>

      <section className="py-12">

        <SectionHeading
          eyebrow="Routes"
          title={t.routerTitle}
          description={t.routerDescription}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {t.router.map(([title, text, href]) => (
            <CardLink
              key={title}
              href={`/${locale}/${href}`}
              title={title}
              text={text}
            />
          ))}

        </div>

      </section>

      <section className="py-12">

        <SectionHeading
          eyebrow="Audience"
          title={t.audiencesTitle}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {t.audiences.map(([title, text, Icon]) => (

            <GlassCard key={title} className="p-5">

              <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <Icon className="h-5 w-5 text-white/85" />
              </div>

              <h3 className="text-lg font-medium text-white">
                {title}
              </h3>

              <p className="mt-2 text-sm text-white/60">
                {text}
              </p>

            </GlassCard>

          ))}

        </div>

      </section>

      <section className="py-12">

        <GlassCard className="p-8">

          <SectionHeading
            eyebrow="Why Northern Studio"
            title={t.reasonsTitle}
          />

          <div className="grid gap-3 sm:grid-cols-2">

            {t.reasons.map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}

          </div>

        </GlassCard>

      </section>

      <section className="py-12">

        <GlassCard className="p-8">

          <SectionHeading
            eyebrow="Next Step"
            title={t.ctaTitle}
            description={t.ctaText}
          />

          <div className="mt-6 flex gap-4 flex-wrap">

            <PrimaryButton href={`/${locale}/pc-builder`}>
              {t.startBuild}
            </PrimaryButton>

            <SecondaryButton href={`/${locale}/contact`}>
              {t.contactStudio}
            </SecondaryButton>

          </div>

        </GlassCard>

      </section>

    </StudioShell>
  );
}