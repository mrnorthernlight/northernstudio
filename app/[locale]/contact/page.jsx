"use client";

import { use } from "react";
import {
  Cpu,
  Wrench,
  BookOpen,
  Globe,
  LifeBuoy,
  Briefcase,
} from "lucide-react";
import StudioShell, {
  GlassCard,
  SectionHeading,
  Bullet,
  PrimaryButton,
  SecondaryButton,
  CardLink,
} from "../../../components/StudioShell";

const content = {
  nl: {
    badge: "Contact, aanvragen, begeleiding en duidelijke volgende stappen",
    title1: "Neem contact op met",
    title2: "Northern Studio",
    intro:
      "Heb je een vraag over een custom pc, IT hulp, hardwareadvies of digitale diensten? Gebruik deze pagina als startpunt.",
    optionsTitle: "Gebruik de route die het best past bij je vraag",
    expectTitle: "Hoe je je vraag het best formuleert",
    routesTitle: "Niet zeker waar je moet beginnen?",
    faqTitle: "Wat bezoekers vaak willen weten",
    trustTitle: "Een goed contactpunt maakt het hele proces beter",
    ctaTitle: "Stuur je vraag door en we denken gericht met je mee",
    email: "info@northernstudio.be",
    primary: "Mail Northern Studio",
    secondary: "Bekijk alle diensten",
    tertiary: "Terug naar home",
    options: [
      ["Custom PC builds", "Voor vragen over builds, onderdelen, compatibiliteit en uitvoerbare configuraties.", Cpu],
      ["IT hulp & Windows support", "Voor trage computers, Windows-problemen, malware, upgrades en technische hulp.", Wrench],
      ["Hardwareadvies", "Voor onderdelen kiezen, upgrades plannen en prestaties vergelijken.", BookOpen],
      ["Webdesign & branding", "Voor premium websites, branding en digitale aanwezigheid.", Globe],
    ],
    tips: [
      "Beschrijf kort wat je nodig hebt of wat er misgaat",
      "Vermeld welk toestel of systeem het betreft",
      "Zeg wat je doel is: advies, oplossing, uitvoering of vergelijking",
      "Geef budget of prioriteiten mee als het over hardware gaat",
      "Vertel wat al geprobeerd is bij een technisch probleem",
      "Hou het simpel: duidelijkheid is nuttiger dan veel tekst",
    ],
    routes: [
      ["Ik wil een PC bouwen", "Gebruik de builder als je al richting hebt.", "pc-builder"],
      ["Ik heb IT hulp nodig", "Ga naar IT Hulp bij systeemproblemen.", "it-help"],
      ["Ik wil eerst guides lezen", "Bekijk de guides als je nog aan het vergelijken bent.", "guides"],
      ["Ik wil alle diensten bekijken", "Gebruik het dienstenoverzicht als je nog niet zeker bent.", "services"],
    ],
    faq: [
      ["Moet ik exact weten wat ik nodig heb?", "Nee. Het helpt als je je situatie kan beschrijven, maar je hoeft niet alle details te kennen."],
      ["Kan ik contact opnemen voor zowel advies als uitvoering?", "Ja. Sommige vragen starten als advies en groeien door naar build of uitvoering."],
      ["Is e-mail het centrale contactpunt?", "Ja. Voor Northern Studio is e-mail het duidelijke professionele startpunt."],
      ["Kan ik ook contact opnemen als ik twijfel tussen meerdere diensten?", "Ja. Northern Studio helpt je bepalen welke route het beste past."],
    ],
    trust: [
      "Duidelijke routes voor verschillende soorten vragen",
      "Geschikt voor particulieren en bedrijven",
      "Focus op heldere communicatie",
      "Hardware, IT en digitale diensten onder één studio",
      "Contact als praktisch startpunt, niet als vaag formulier-einde",
      "Premium uitstraling met echte bruikbaarheid",
    ],
  },
  en: {
    badge: "Contact, requests, guidance and clear next steps",
    title1: "Get in touch with",
    title2: "Northern Studio",
    intro:
      "Do you have a question about a custom PC, IT help, hardware advice or digital services? Use this page as your starting point.",
    optionsTitle: "Use the route that best matches your question",
    expectTitle: "How to phrase your question well",
    routesTitle: "Not sure where to start?",
    faqTitle: "What visitors often want to know",
    trustTitle: "A good contact point makes the whole process better",
    ctaTitle: "Send your question and we’ll think through it with intent",
    email: "info@northernstudio.be",
    primary: "Email Northern Studio",
    secondary: "View all services",
    tertiary: "Back to home",
    options: [
      ["Custom PC builds", "For questions about builds, parts, compatibility and practical configurations.", Cpu],
      ["IT help & Windows support", "For slow computers, Windows issues, malware, upgrades and technical help.", Wrench],
      ["Hardware advice", "For choosing parts, planning upgrades and comparing performance.", BookOpen],
      ["Web design & branding", "For premium websites, branding and digital presence.", Globe],
    ],
    tips: [
      "Briefly describe what you need or what is going wrong",
      "Mention which device or system it concerns",
      "State your goal: advice, solution, execution or comparison",
      "Share budget or priorities if it is hardware-related",
      "Explain what has already been tried for a technical issue",
      "Keep it simple: clarity is more useful than lots of text",
    ],
    routes: [
      ["I want to build a PC", "Use the builder if you already have direction.", "pc-builder"],
      ["I need IT help", "Go to IT Help if you have system issues.", "it-help"],
      ["I want to read guides first", "Check the guides if you are still comparing.", "guides"],
      ["I want to see all services", "Use the services overview if you are not sure.", "services"],
    ],
    faq: [
      ["Do I need to know exactly what I need?", "No. It helps if you can describe the situation, but you do not need all the details."],
      ["Can I get in touch for both advice and execution?", "Yes. Some questions start as advice and then grow into execution."],
      ["Is email the main contact point?", "Yes. For Northern Studio, email is the clear professional starting point."],
      ["Can I still contact you if I’m unsure which service applies?", "Yes. Northern Studio can help determine the best route."],
    ],
    trust: [
      "Clear routes for different kinds of questions",
      "Suitable for individuals and businesses",
      "Focused on clear communication",
      "Hardware, IT and digital services under one studio",
      "Contact as a practical starting point, not a vague dead end",
      "Premium presentation with real usability",
    ],
  },
};

export default function ContactPage({ params }) {
  const { locale: routeLocale } = use(params);
  const locale = routeLocale === "en" ? "en" : "nl";
  const t = content[locale];

  return (
    <StudioShell locale={locale} active="contact">
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
            <PrimaryButton href={`mailto:${t.email}`}>{t.primary}</PrimaryButton>
            <SecondaryButton href={`/${locale}/services`}>{t.secondary}</SecondaryButton>
            <SecondaryButton href={`/${locale}`}>{t.tertiary}</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="py-12">
        <SectionHeading eyebrow="Contact Routes" title={t.optionsTitle} />
        <div className="grid gap-6 md:grid-cols-2">
          {t.options.map(([title, text, Icon]) => (
            <GlassCard key={title} className="p-6">
              <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <Icon className="h-5 w-5 text-white/84" />
              </div>
              <h3 className="text-2xl font-medium text-white/92">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">{text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-8">
            <SectionHeading eyebrow="What Helps" title={t.expectTitle} />
            <div className="grid gap-3">{t.tips.map((item) => <Bullet key={item}>{item}</Bullet>)}</div>
          </GlassCard>

          <GlassCard className="p-8">
            <SectionHeading eyebrow="Quick Routes" title={t.routesTitle} />
            <div className="grid gap-4">
              {t.routes.map(([title, text, href]) => (
                <CardLink key={title} href={`/${locale}/${href}`} title={title} text={text} />
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
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

          <GlassCard className="p-8">
            <SectionHeading eyebrow="Why This Page" title={t.trustTitle} />
            <div className="grid gap-3">{t.trust.map((item) => <Bullet key={item}>{item}</Bullet>)}</div>
          </GlassCard>
        </div>
      </section>

      <section className="py-12">
        <GlassCard className="p-8">
          <SectionHeading eyebrow="Next Step" title={t.ctaTitle} />
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href={`mailto:${t.email}`}>{t.primary}</PrimaryButton>
            <SecondaryButton href={`/${locale}/services`}>{t.secondary}</SecondaryButton>
            <SecondaryButton href={`/${locale}/pc-builder`}>{locale === "nl" ? "Naar PC Builder" : "Go to PC Builder"}</SecondaryButton>
          </div>
          <p className="mt-6 text-sm text-white/50">{t.email}</p>
        </GlassCard>
      </section>
    </StudioShell>
  );
}