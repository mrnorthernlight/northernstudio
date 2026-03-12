"use client";

import { use } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  Monitor,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
  Laptop,
  HardDrive,
  Bug,
  RefreshCw,
  Wifi,
  Settings,
  LifeBuoy,
  Clock3,
  CheckCircle2,
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
      badge: "IT hulp, Windows support, upgrades en technische begeleiding",
      title1: "IT hulp zonder",
      title2: "technisch gedoe",
      description:
        "Northern Studio helpt bij trage computers, Windows-problemen, upgrades, virusverwijdering, systeemoptimalisatie en algemene technische storingen. Duidelijke uitleg, praktische oplossingen en hulp die gericht is op wat echt werkt.",
      primaryCta: "Neem contact op",
      secondaryCta: "Bekijk alle diensten",
      tertiaryCta: "Terug naar home",
    },
    intro: {
      label: "Wat we doen",
      title: "Praktische IT hulp voor mensen en bedrijven",
      description:
        "Niet iedereen heeft zin om zelf foutcodes, drivers, BIOS-instellingen of Windows-problemen uit te pluizen. Dat is precies waar Northern Studio helpt: problemen analyseren, de oorzaak vinden en een oplossing voorstellen die realistisch, duidelijk en veilig is.",
    },
    serviceAreas: {
      label: "IT diensten",
      title: "Waarmee Northern Studio je kan helpen",
      items: [
        {
          title: "Windows problemen oplossen",
          description:
            "Hulp bij opstartproblemen, foutmeldingen, crashes, updates die vastlopen, driverproblemen en systemen die onstabiel of traag aanvoelen.",
          icon: Monitor,
          points: [
            "Windows start niet of crasht onverwacht",
            "Updateproblemen en foutcodes analyseren",
            "Drivers, conflicten en instabiliteit oplossen",
            "Systemen opnieuw bruikbaar en betrouwbaar maken",
          ],
        },
        {
          title: "Pc optimalisatie",
          description:
            "Voor systemen die traag geworden zijn, slecht reageren of vol zitten met onnodige achtergrondprocessen, rommelsoftware of verkeerde instellingen.",
          icon: Zap,
          points: [
            "Trage opstart en slechte prestaties verbeteren",
            "Onnodige software en rommel verwijderen",
            "Windows-instellingen opschonen en optimaliseren",
            "Focus op snelheid, stabiliteit en dagelijks gebruik",
          ],
        },
        {
          title: "Virusverwijdering & cleanup",
          description:
            "Wanneer een systeem verdacht gedrag vertoont, ongewenste software bevat of risico loopt door malware, browser hijackers of andere vervuiling.",
          icon: Bug,
          points: [
            "Malware en ongewenste software opsporen",
            "Browserproblemen en verdachte processen aanpakken",
            "Systeem opschonen en basisveiligheid herstellen",
            "Aanbevelingen om herhaling te voorkomen",
          ],
        },
        {
          title: "Upgrades & hardware hulp",
          description:
            "Hulp bij RAM-upgrades, opslag vervangen, SSD-installaties, koeling, algemene componentkeuze en het correct laten samenwerken van hardware.",
          icon: HardDrive,
          points: [
            "RAM, SSD of andere componenten upgraden",
            "Compatibiliteit en praktische haalbaarheid controleren",
            "Advies rond prestaties en prijs-kwaliteit",
            "Installatie- en configuratieproblemen oplossen",
          ],
        },
        {
          title: "Herinstallatie & reset",
          description:
            "Wanneer een systeem te instabiel of vervuild is geworden, kan een herinstallatie of nette reset de beste oplossing zijn.",
          icon: RefreshCw,
          points: [
            "Schone Windows-installatie voorbereiden",
            "Basisconfiguratie opnieuw correct instellen",
            "Drivers en essentiële software opnieuw opbouwen",
            "Systemen terug netjes en bruikbaar maken",
          ],
        },
        {
          title: "Netwerk & algemene technische hulp",
          description:
            "Ook voor algemene computerhulp, verbindingsproblemen, randapparatuur en technische vragen waar iemand gewoon een duidelijke uitleg en richting nodig heeft.",
          icon: Wifi,
          points: [
            "Basis netwerk- en verbindingsproblemen nakijken",
            "Randapparatuur en instellingen controleren",
            "Algemene technische hulp en uitleg",
            "Praktische begeleiding zonder verwarrend jargon",
          ],
        },
      ],
    },
    commonProblems: {
      label: "Veelvoorkomende problemen",
      title: "Typische situaties waarbij mensen hulp zoeken",
      items: [
        "Mijn computer is plots erg traag geworden",
        "Windows werkt niet meer zoals het hoort",
        "Mijn pc loopt vast of crasht zonder duidelijke reden",
        "Ik weet niet welke upgrade zinvol is",
        "Mijn opslag zit vol of mijn SSD/HDD werkt niet goed",
        "Ik vermoed dat er malware of ongewenste software op staat",
        "Na een update werkt iets niet meer correct",
        "Ik wil gewoon dat iemand meekijkt en het helder uitlegt",
      ],
    },
    process: {
      label: "Werkwijze",
      title: "Hoe Northern Studio IT hulp aanpakt",
      steps: [
        {
          title: "Probleem in kaart brengen",
          text: "Eerst bekijken we wat er precies fout gaat, sinds wanneer het probleem speelt en welke symptomen echt relevant zijn.",
        },
        {
          title: "Oorzaak zoeken",
          text: "Daarna wordt nagegaan of het probleem vooral softwarematig, hardwarematig of configuratiegerelateerd is.",
        },
        {
          title: "Duidelijk advies geven",
          text: "Je krijgt geen vaag technisch verhaal, maar een begrijpelijke uitleg van wat er misloopt en wat de beste volgende stap is.",
        },
        {
          title: "Oplossen of voorbereiden",
          text: "Afhankelijk van de situatie wordt het probleem aangepakt of krijg je een heldere voorbereiding voor herstel, upgrade of herinstallatie.",
        },
      ],
    },
    why: {
      label: "Waarom Northern Studio",
      title: "Technische hulp moet duidelijk en betrouwbaar zijn",
      description:
        "Veel mensen zoeken geen ingewikkeld computerverhaal. Ze willen gewoon weten wat er fout is, wat het kost in tijd of moeite, en wat de slimste oplossing is. Northern Studio werkt precies vanuit dat principe.",
      points: [
        "Duidelijke communicatie zonder overbodig jargon",
        "Praktische focus op wat echt helpt",
        "Hardware- en Windows-kennis in één studio",
        "Geschikt voor particulieren én kleine bedrijven",
        "Realistische oplossingen in plaats van snelle gokjes",
        "Premium aanpak zonder onnodige complexiteit",
      ],
    },
    supportTypes: {
      label: "Voor wie",
      title: "Geschikt voor verschillende soorten hulpvragen",
      items: [
        {
          title: "Particulieren",
          text: "Voor mensen met een trage laptop, Windows-problemen, opslagproblemen, upgrades of algemene computerhulp.",
          icon: Laptop,
        },
        {
          title: "Gamers",
          text: "Voor systemen die slecht presteren, verkeerde instellingen gebruiken of technische problemen hebben die het gamen verstoren.",
          icon: Monitor,
        },
        {
          title: "Professionals",
          text: "Voor wie een stabiel werktoestel nodig heeft en niet wil blijven werken op een systeem dat constant hapert.",
          icon: Settings,
        },
        {
          title: "Kleine bedrijven",
          text: "Voor basis IT-ondersteuning, pc-problemen, herstellingen, upgrades en digitale begeleiding.",
          icon: LifeBuoy,
        },
      ],
    },
    faq: {
      label: "Wat valt hieronder",
      title: "Wat deze dienst concreet inhoudt",
      items: [
        {
          q: "Is dit alleen voor kapotte computers?",
          a: "Nee. IT hulp gaat niet alleen over defecten, maar ook over trage systemen, foutieve configuraties, upgrades, instabiliteit, onderhoud en advies.",
        },
        {
          q: "Kan Northern Studio helpen als ik niet precies weet wat er mis is?",
          a: "Ja. Dat is net vaak de situatie. Eerst wordt het probleem verduidelijkt, daarna wordt gekeken welke richting logisch is.",
        },
        {
          q: "Is deze pagina alleen voor Windows?",
          a: "De focus ligt sterk op Windows en algemene pc-problemen, omdat dat het meest relevant is voor de doelgroep van Northern Studio.",
        },
        {
          q: "Kan dit ook samengaan met hardwareadvies of upgrades?",
          a: "Absoluut. Veel IT-vragen lopen vanzelf over in upgradeadvies, opslagvervanging, RAM-upgrades of bredere systeemoptimalisatie.",
        },
      ],
    },
    cta: {
      label: "Volgende stap",
      title: "Leg je probleem uit en we denken praktisch met je mee",
      description:
        "Soms is de oplossing eenvoudig, soms vraagt het wat meer analyse. In beide gevallen helpt Northern Studio je met een duidelijke richting en een bruikbare volgende stap.",
      contactCta: "Neem contact op",
      servicesCta: "Bekijk alle diensten",
      builderCta: "Naar PC Builder",
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
      badge: "IT help, Windows support, upgrades and technical guidance",
      title1: "IT help without",
      title2: "the technical fog",
      description:
        "Northern Studio helps with slow computers, Windows issues, upgrades, virus removal, system optimization and general technical problems. Clear explanations, practical solutions and support focused on what actually works.",
      primaryCta: "Contact us",
      secondaryCta: "View all services",
      tertiaryCta: "Back to home",
    },
    intro: {
      label: "What we do",
      title: "Practical IT help for individuals and businesses",
      description:
        "Not everyone wants to spend hours figuring out error codes, drivers, BIOS settings or Windows issues. That is exactly where Northern Studio helps: analyzing the problem, identifying the cause and recommending a solution that is realistic, clear and safe.",
    },
    serviceAreas: {
      label: "IT services",
      title: "What Northern Studio can help you with",
      items: [
        {
          title: "Fixing Windows issues",
          description:
            "Help with startup problems, error messages, crashes, stuck updates, driver issues and systems that feel unstable or slow.",
          icon: Monitor,
          points: [
            "Windows does not boot or crashes unexpectedly",
            "Analyze update problems and error codes",
            "Fix drivers, conflicts and instability",
            "Make systems usable and reliable again",
          ],
        },
        {
          title: "PC optimization",
          description:
            "For systems that have become slow, unresponsive or overloaded with unnecessary background processes, junk software or poor settings.",
          icon: Zap,
          points: [
            "Improve slow startup and poor performance",
            "Remove unnecessary software and clutter",
            "Clean up and optimize Windows settings",
            "Focus on speed, stability and daily usability",
          ],
        },
        {
          title: "Virus removal & cleanup",
          description:
            "When a system shows suspicious behavior, contains unwanted software or is at risk because of malware, browser hijackers or other clutter.",
          icon: Bug,
          points: [
            "Detect malware and unwanted software",
            "Handle browser issues and suspicious processes",
            "Clean the system and restore baseline safety",
            "Provide guidance to avoid repeat issues",
          ],
        },
        {
          title: "Upgrades & hardware help",
          description:
            "Help with RAM upgrades, storage replacement, SSD installs, cooling, general component selection and making hardware work together properly.",
          icon: HardDrive,
          points: [
            "Upgrade RAM, SSDs or other components",
            "Check compatibility and practical feasibility",
            "Advice around performance and value",
            "Solve installation and configuration issues",
          ],
        },
        {
          title: "Reinstallation & reset",
          description:
            "When a system has become too unstable or too cluttered, a clean reinstall or reset may be the best option.",
          icon: RefreshCw,
          points: [
            "Prepare a clean Windows installation",
            "Set up the base configuration properly again",
            "Rebuild drivers and essential software",
            "Return systems to a clean, usable state",
          ],
        },
        {
          title: "Network & general technical help",
          description:
            "Also for general computer help, connection issues, peripherals and technical questions where someone simply needs clear direction and explanation.",
          icon: Wifi,
          points: [
            "Check basic network and connection issues",
            "Review peripherals and settings",
            "General technical help and explanation",
            "Practical guidance without confusing jargon",
          ],
        },
      ],
    },
    commonProblems: {
      label: "Common problems",
      title: "Typical situations where people look for help",
      items: [
        "My computer has suddenly become very slow",
        "Windows no longer works the way it should",
        "My PC freezes or crashes for no clear reason",
        "I do not know which upgrade actually makes sense",
        "My storage is full or my SSD/HDD is not behaving properly",
        "I suspect malware or unwanted software is installed",
        "Something stopped working after an update",
        "I just want someone to look at it and explain it clearly",
      ],
    },
    process: {
      label: "How it works",
      title: "How Northern Studio approaches IT help",
      steps: [
        {
          title: "Map the problem",
          text: "First, we look at what is actually going wrong, how long it has been happening and which symptoms really matter.",
        },
        {
          title: "Identify the cause",
          text: "Then we determine whether the issue is mainly software-related, hardware-related or configuration-related.",
        },
        {
          title: "Give clear advice",
          text: "You do not get vague technical noise, but a clear explanation of what is wrong and what the best next step is.",
        },
        {
          title: "Fix or prepare",
          text: "Depending on the case, the issue is addressed directly or you get a clear plan for recovery, upgrade or reinstallation.",
        },
      ],
    },
    why: {
      label: "Why Northern Studio",
      title: "Technical help should be clear and reliable",
      description:
        "Most people are not looking for an overly complicated computer story. They want to know what is wrong, what the best route is and what actually makes sense. Northern Studio is built around exactly that principle.",
      points: [
        "Clear communication without unnecessary jargon",
        "Practical focus on what genuinely helps",
        "Hardware and Windows knowledge in one studio",
        "Suitable for individuals and small businesses",
        "Realistic solutions instead of random guesswork",
        "Premium approach without needless complexity",
      ],
    },
    supportTypes: {
      label: "Who it is for",
      title: "Suitable for different kinds of support needs",
      items: [
        {
          title: "Individuals",
          text: "For people with a slow laptop, Windows problems, storage issues, upgrades or general computer help.",
          icon: Laptop,
        },
        {
          title: "Gamers",
          text: "For systems that perform poorly, use the wrong settings or have technical issues that get in the way of gaming.",
          icon: Monitor,
        },
        {
          title: "Professionals",
          text: "For anyone who needs a stable work machine and does not want to keep working on a system that constantly struggles.",
          icon: Settings,
        },
        {
          title: "Small businesses",
          text: "For basic IT support, PC issues, repairs, upgrades and practical digital guidance.",
          icon: LifeBuoy,
        },
      ],
    },
    faq: {
      label: "What this includes",
      title: "What this service actually covers",
      items: [
        {
          q: "Is this only for broken computers?",
          a: "No. IT help is not only about broken machines, but also slow systems, misconfigurations, upgrades, instability, maintenance and practical advice.",
        },
        {
          q: "Can Northern Studio help if I do not know what is wrong yet?",
          a: "Yes. That is often the normal situation. First the problem is clarified, then the most logical route is determined.",
        },
        {
          q: "Is this page only for Windows?",
          a: "The main focus is Windows and general PC issues, because that is the most relevant fit for Northern Studio’s audience.",
        },
        {
          q: "Can this overlap with hardware advice or upgrades?",
          a: "Absolutely. Many IT questions naturally lead into upgrade advice, storage replacement, RAM upgrades or broader system optimization.",
        },
      ],
    },
    cta: {
      label: "Next step",
      title: "Explain the problem and we’ll think through it practically",
      description:
        "Sometimes the fix is simple, sometimes it takes more analysis. In both cases, Northern Studio helps you move forward with a clear direction and a useful next step.",
      contactCta: "Contact us",
      servicesCta: "View all services",
      builderCta: "Go to PC Builder",
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

export default function ItHelpPage({ params }) {
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
              <a href={`/${locale}/services`} className="text-white/70 transition hover:text-white">{t.nav.services}</a>
              <a href={`/${locale}/pc-builder`} className="text-white/70 transition hover:text-white">{t.nav.builder}</a>
              <a href={`/${locale}/it-help`} className="text-white transition">{t.nav.itHelp}</a>
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
            <PrimaryButton href={`/${locale}/contact`}>
              {t.hero.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton href={`/${locale}/services`}>{t.hero.secondaryCta}</SecondaryButton>
            <SecondaryButton href={`/${locale}`}>{t.hero.tertiaryCta}</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-10">
        <SectionCard className="bg-white/[0.06]">
          <div className="p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.intro.label}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{t.intro.title}</h2>
            <p className="mt-5 max-w-4xl text-sm leading-8 text-white/72 md:text-base">
              {t.intro.description}
            </p>
          </div>
        </SectionCard>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.serviceAreas.label}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{t.serviceAreas.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.serviceAreas.items.map((item) => {
            const Icon = item.icon;
            return (
              <SectionCard
                key={item.title}
                className="h-full border-white/12 bg-white/[0.06] transition-all duration-300 hover:border-emerald-300/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="p-6 md:p-7">
                  <div className="inline-flex rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3 text-purple-200">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-2xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{item.description}</p>

                  <div className="mt-6 grid gap-3">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 p-4"
                      >
                        <div className="mt-0.5 flex items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 p-1 text-purple-200">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <p className="text-sm leading-6 text-white/78">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionCard>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionCard>
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.commonProblems.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.commonProblems.title}</h2>

              <div className="mt-8 grid gap-3">
                {t.commonProblems.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    <p className="text-sm leading-6 text-white/82">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          <SectionCard className="bg-gradient-to-br from-purple-400/10 to-white/5">
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.process.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.process.title}</h2>

              <div className="mt-8 space-y-4">
                {t.process.steps.map((step, index) => (
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
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <SectionCard>
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.why.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.why.title}</h2>
              <p className="mt-5 text-sm leading-7 text-white/70">{t.why.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.why.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 p-4"
                  >
                    <div className="mt-0.5 flex items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 p-1 text-purple-200">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-6 text-white/76">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          <SectionCard className="bg-white/[0.06]">
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.supportTypes.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.supportTypes.title}</h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.supportTypes.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-black/25 p-5">
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
          </SectionCard>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10">
        <SectionCard className="bg-gradient-to-br from-emerald-400/10 to-white/5">
          <div className="p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.faq.label}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.faq.title}</h2>

            <div className="mt-8 grid gap-4">
              {t.faq.items.map((item) => (
                <div key={item.q} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <h3 className="text-base font-medium text-white">{item.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionCard>
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.cta.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.cta.title}</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">{t.cta.description}</p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-5">
                <div className="flex items-start gap-3">
                  <div className="inline-flex rounded-full border border-purple-400/20 bg-purple-400/10 p-2 text-purple-200">
                    <Clock3 className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-white/78">
                    Hoe duidelijker je het probleem beschrijft, hoe makkelijker het is om sneller tot de juiste richting
                    te komen.
                  </p>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard className="bg-gradient-to-br from-purple-400/10 to-white/5">
            <div className="flex h-full flex-col justify-between p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">Northern Studio</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  Praktische hulp, heldere uitleg, geen rookmachines
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/70">
                  Gebruik contact als startpunt, bekijk het dienstenoverzicht of ga terug naar de builder als je vraag
                  uiteindelijk over een nieuwe pc of upgrade gaat.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                <PrimaryButton href={`/${locale}/contact`}>
                  {t.cta.contactCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </PrimaryButton>
                <SecondaryButton href={`/${locale}/services`}>{t.cta.servicesCta}</SecondaryButton>
                <SecondaryButton href={`/${locale}/pc-builder`}>{t.cta.builderCta}</SecondaryButton>

                <a
                  href="mailto:info@northernstudio.be"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  info@northernstudio.be
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