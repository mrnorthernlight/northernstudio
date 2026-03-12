"use client";

import { use } from "react";
import {
  Monitor,
  Zap,
  Bug,
  HardDrive,
  RefreshCw,
  Wifi,
  Laptop,
  Settings,
  LifeBuoy,
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
    badge: "IT hulp, Windows support, upgrades en technische begeleiding",
    title1: "IT hulp zonder",
    title2: "technisch gedoe",
    intro: "Northern Studio helpt bij trage computers, Windows-problemen, upgrades, virusverwijdering en systeemoptimalisatie.",
    sectionTitle: "Waarmee Northern Studio je kan helpen",
    commonTitle: "Typische situaties waarbij mensen hulp zoeken",
    processTitle: "Hoe Northern Studio IT hulp aanpakt",
    whyTitle: "Technische hulp moet duidelijk en betrouwbaar zijn",
    typesTitle: "Geschikt voor verschillende soorten hulpvragen",
    faqTitle: "Wat deze dienst concreet inhoudt",
    ctaTitle: "Leg je probleem uit en we denken praktisch met je mee",
    primary: "Neem contact op",
    secondary: "Bekijk alle diensten",
    tertiary: "Terug naar home",
    services: [
      ["Windows problemen oplossen", "Hulp bij opstartproblemen, foutmeldingen, crashes en updates.", Monitor, ["Windows start niet", "Updateproblemen analyseren", "Drivers en conflicten oplossen", "Systemen opnieuw bruikbaar maken"]],
      ["Pc optimalisatie", "Voor systemen die traag zijn geworden of slecht reageren.", Zap, ["Trage opstart verbeteren", "Rommelsoftware verwijderen", "Windows optimaliseren", "Focus op snelheid en stabiliteit"]],
      ["Virusverwijdering & cleanup", "Wanneer een systeem verdacht gedrag vertoont of vervuild is.", Bug, ["Malware opsporen", "Browserproblemen aanpakken", "Systeem opschonen", "Herhaling helpen voorkomen"]],
      ["Upgrades & hardware hulp", "RAM-upgrades, opslag vervangen en algemene hardwarehulp.", HardDrive, ["RAM of SSD upgraden", "Compatibiliteit controleren", "Advies rond prestaties", "Installatieproblemen oplossen"]],
      ["Herinstallatie & reset", "Wanneer een systeem te instabiel of vervuild is geworden.", RefreshCw, ["Schone installatie voorbereiden", "Basisconfiguratie herstellen", "Drivers opnieuw opbouwen", "Systemen netjes terugzetten"]],
      ["Netwerk & algemene technische hulp", "Voor verbindingsproblemen en algemene technische vragen.", Wifi, ["Netwerkproblemen nakijken", "Randapparatuur controleren", "Algemene technische hulp", "Praktische begeleiding"]],
    ],
    common: [
      "Mijn computer is plots erg traag geworden",
      "Windows werkt niet meer zoals het hoort",
      "Mijn pc loopt vast of crasht zonder duidelijke reden",
      "Ik weet niet welke upgrade zinvol is",
      "Ik vermoed dat er malware op staat",
      "Na een update werkt iets niet meer correct",
    ],
    process: [
      "Probleem in kaart brengen",
      "Oorzaak zoeken",
      "Duidelijk advies geven",
      "Oplossen of voorbereiden",
    ],
    why: [
      "Duidelijke communicatie zonder jargon",
      "Praktische focus op wat echt helpt",
      "Hardware- en Windows-kennis in één studio",
      "Geschikt voor particulieren én kleine bedrijven",
      "Realistische oplossingen in plaats van gokjes",
      "Premium aanpak zonder onnodige complexiteit",
    ],
    types: [
      ["Particulieren", "Voor mensen met een trage laptop of Windows-problemen.", Laptop],
      ["Gamers", "Voor systemen die slecht presteren of technische problemen hebben.", Monitor],
      ["Professionals", "Voor wie een stabiel werktoestel nodig heeft.", Settings],
      ["Kleine bedrijven", "Voor basis IT-ondersteuning en upgrades.", LifeBuoy],
    ],
    faq: [
      ["Is dit alleen voor kapotte computers?", "Nee. IT hulp gaat ook over trage systemen, configuratie, onderhoud en advies."],
      ["Kan Northern Studio helpen als ik niet precies weet wat er mis is?", "Ja. Eerst wordt het probleem verduidelijkt, daarna de juiste richting bepaald."],
      ["Is dit alleen voor Windows?", "De focus ligt sterk op Windows en algemene pc-problemen."],
      ["Kan dit samengaan met hardwareadvies of upgrades?", "Absoluut. Veel IT-vragen lopen vanzelf over in upgradeadvies en systeemoptimalisatie."],
    ],
  },
  en: {
    badge: "IT help, Windows support, upgrades and technical guidance",
    title1: "IT help without",
    title2: "the technical fog",
    intro: "Northern Studio helps with slow computers, Windows issues, upgrades, virus removal and system optimization.",
    sectionTitle: "What Northern Studio can help you with",
    commonTitle: "Typical situations where people look for help",
    processTitle: "How Northern Studio approaches IT help",
    whyTitle: "Technical help should be clear and reliable",
    typesTitle: "Suitable for different kinds of support needs",
    faqTitle: "What this service actually covers",
    ctaTitle: "Explain the problem and we’ll think through it practically",
    primary: "Contact us",
    secondary: "View all services",
    tertiary: "Back to home",
    services: [
      ["Fixing Windows issues", "Help with startup problems, crashes, updates and driver issues.", Monitor, ["Windows does not boot", "Analyze update problems", "Fix drivers and conflicts", "Make systems reliable again"]],
      ["PC optimization", "For systems that have become slow or unresponsive.", Zap, ["Improve slow startup", "Remove unnecessary clutter", "Optimize Windows settings", "Focus on speed and stability"]],
      ["Virus removal & cleanup", "When a system shows suspicious behavior or clutter.", Bug, ["Detect malware", "Handle browser issues", "Clean the system", "Help prevent repeat issues"]],
      ["Upgrades & hardware help", "RAM upgrades, storage replacement and general hardware help.", HardDrive, ["Upgrade RAM or SSDs", "Check compatibility", "Advice around performance", "Solve installation issues"]],
      ["Reinstallation & reset", "When a system has become too unstable or cluttered.", RefreshCw, ["Prepare clean installation", "Restore base configuration", "Rebuild drivers", "Return systems to a clean state"]],
      ["Network & general technical help", "For connection issues and general technical questions.", Wifi, ["Check connection issues", "Review peripherals", "General technical help", "Practical guidance"]],
    ],
    common: [
      "My computer has suddenly become very slow",
      "Windows no longer works the way it should",
      "My PC freezes or crashes for no clear reason",
      "I do not know which upgrade makes sense",
      "I suspect malware is installed",
      "Something stopped working after an update",
    ],
    process: ["Map the problem", "Identify the cause", "Give clear advice", "Fix or prepare"],
    why: [
      "Clear communication without jargon",
      "Practical focus on what genuinely helps",
      "Hardware and Windows knowledge in one studio",
      "Suitable for individuals and small businesses",
      "Realistic solutions instead of guesswork",
      "Premium approach without needless complexity",
    ],
    types: [
      ["Individuals", "For people with a slow laptop or Windows issues.", Laptop],
      ["Gamers", "For systems that perform poorly or have technical issues.", Monitor],
      ["Professionals", "For anyone who needs a stable work machine.", Settings],
      ["Small businesses", "For basic IT support and upgrades.", LifeBuoy],
    ],
    faq: [
      ["Is this only for broken computers?", "No. IT help also covers slow systems, configuration, maintenance and advice."],
      ["Can Northern Studio help if I do not know what is wrong yet?", "Yes. First the problem is clarified, then the best route is determined."],
      ["Is this only for Windows?", "The main focus is Windows and general PC issues."],
      ["Can this overlap with hardware advice or upgrades?", "Absolutely. Many IT questions lead into upgrade advice and optimization."],
    ],
  },
};

export default function ItHelpPage({ params }) {
  const { locale: routeLocale } = use(params);
  const locale = routeLocale === "en" ? "en" : "nl";
  const t = content[locale];

  return (
    <StudioShell locale={locale} active="itHelp">
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
            <PrimaryButton href={`/${locale}/contact`}>{t.primary}</PrimaryButton>
            <SecondaryButton href={`/${locale}/services`}>{t.secondary}</SecondaryButton>
            <SecondaryButton href={`/${locale}`}>{t.tertiary}</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="py-12">
        <SectionHeading eyebrow="IT Services" title={t.sectionTitle} />
        <div className="grid gap-6 md:grid-cols-2">
          {t.services.map(([title, text, Icon, points]) => (
            <GlassCard key={title} className="p-6">
              <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <Icon className="h-5 w-5 text-white/84" />
              </div>
              <h3 className="text-2xl font-medium text-white/92">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">{text}</p>
              <div className="mt-6 grid gap-3">
                {points.map((p) => <Bullet key={p}>{p}</Bullet>)}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-8">
            <SectionHeading eyebrow="Common Problems" title={t.commonTitle} />
            <div className="grid gap-3">
              {t.common.map((item) => <Bullet key={item}>{item}</Bullet>)}
            </div>
          </GlassCard>
          <GlassCard className="p-8">
            <SectionHeading eyebrow="Workflow" title={t.processTitle} />
            <div className="grid gap-3">
              {t.process.map((item, i) => <Bullet key={item}>{i + 1}. {item}</Bullet>)}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <GlassCard className="p-8">
            <SectionHeading eyebrow="Why Northern Studio" title={t.whyTitle} />
            <div className="grid gap-3">{t.why.map((item) => <Bullet key={item}>{item}</Bullet>)}</div>
          </GlassCard>
          <GlassCard className="p-8">
            <SectionHeading eyebrow="Audience" title={t.typesTitle} />
            <div className="grid gap-4 sm:grid-cols-2">
              {t.types.map(([title, text, Icon]) => (
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
            <PrimaryButton href={`/${locale}/contact`}>{t.primary}</PrimaryButton>
            <SecondaryButton href={`/${locale}/services`}>{t.secondary}</SecondaryButton>
            <SecondaryButton href={`/${locale}/pc-builder`}>{locale === "nl" ? "Naar PC Builder" : "Go to PC Builder"}</SecondaryButton>
          </div>
        </GlassCard>
      </section>
    </StudioShell>
  );
}