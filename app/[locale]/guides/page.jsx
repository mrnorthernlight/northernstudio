"use client";

import { use } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Cpu,
  Gauge,
  Globe,
  HardDrive,
  Mail,
  Monitor,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
  MemoryStick,
  CircuitBoard,
  BatteryCharging,
  Fan,
  Search,
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
      badge: "Hardwareadvies, compatibiliteit, prestaties en praktische uitleg",
      title1: "Guides en hardwareadvies",
      title2: "zonder giswerk",
      description:
        "Northern Studio helpt je begrijpen welke onderdelen zinvol zijn, wat compatibel is, waar prestaties echt vandaan komen en welke keuzes passen bij jouw gebruik. Geen eindeloze chaos, maar duidelijke uitleg en praktische richting.",
      primaryCta: "Naar PC Builder",
      secondaryCta: "Bekijk alle diensten",
      tertiaryCta: "Terug naar home",
    },
    intro: {
      label: "Wat dit is",
      title: "Een plek voor praktische hardwarekennis",
      description:
        "Veel mensen willen gewoon weten welke cpu past bij hun gebruik, hoeveel voeding zinvol is, of een gpu in een case past, of een upgrade nog de moeite waard is. Deze gidsenpagina is bedoeld als kennislaag rond de builder en rond het bredere hardware-ecosysteem van Northern Studio.",
    },
    categories: {
      label: "Onderwerpen",
      title: "Waar Northern Studio je in kan begeleiden",
      items: [
        {
          title: "CPU & prestaties",
          description:
            "Uitleg over processoren, cores, gamingprestaties, workstationgebruik, platformkeuze en wanneer een cpu-upgrade echt iets oplevert.",
          icon: Cpu,
          points: [
            "Wat het verschil is tussen gaming en workstation cpu-keuzes",
            "Wanneer extra cores zinvol zijn en wanneer niet",
            "Hoe platformkeuze invloed heeft op upgrades later",
            "Welke cpu past bij jouw budget en doel",
          ],
        },
        {
          title: "GPU & grafische prestaties",
          description:
            "Begrijpen welke grafische kaart past bij 1080p, 1440p of zwaardere workloads zoals editing, rendering en andere grafische taken.",
          icon: Monitor,
          points: [
            "Welke gpu past bij jouw resolutie en games",
            "Wanneer meer VRAM belangrijk wordt",
            "Balans tussen prijs, prestaties en efficiëntie",
            "Wanneer een duurdere kaart echt logisch is",
          ],
        },
        {
          title: "Moederborden & compatibiliteit",
          description:
            "Socket, chipset, geheugenondersteuning en praktische bordkeuze zonder te verdwalen in marketingtermen en overbodige features.",
          icon: CircuitBoard,
          points: [
            "Welke socket bij welke cpu hoort",
            "Wat chipsets wel en niet veranderen",
            "Hoe je compatibiliteitsproblemen voorkomt",
            "Wanneer een duur moederbord onnodig is",
          ],
        },
        {
          title: "RAM & systeemgeheugen",
          description:
            "Hoeveel geheugen nuttig is, welke snelheden relevant zijn en hoe je voorkomt dat je te weinig of nutteloos te veel koopt.",
          icon: MemoryStick,
          points: [
            "16GB, 32GB of meer: wat is echt zinvol?",
            "DDR4 versus DDR5 in praktische context",
            "Wat snelheid en latency in de praktijk betekenen",
            "Hoe ramkeuze samenhangt met moederbord en cpu",
          ],
        },
        {
          title: "Opslag & snelheid",
          description:
            "SSD's, opslagplanning, laadprestaties en de vraag wanneer snelle opslag het verschil maakt in dagelijks gebruik of professioneel werk.",
          icon: HardDrive,
          points: [
            "NVMe versus SATA in echte gebruikssituaties",
            "Hoeveel opslag logisch is voor jouw gebruik",
            "Wanneer extra snelheid merkbaar is",
            "Hoe opslag samenwerkt met upgrades later",
          ],
        },
        {
          title: "Voeding, koeling & stabiliteit",
          description:
            "Wattage, headroom, airflow, koeling en algemene betrouwbaarheid. Minder sexy dan een gpu, maar vaak belangrijker voor een stabiele build.",
          icon: BatteryCharging,
          points: [
            "Hoeveel wattage je echt nodig hebt",
            "Waarom kwalitatieve voedingen belangrijk zijn",
            "Airflow en koeling praktisch begrijpen",
            "Hoe stabiliteit en levensduur mee afhangen van deze keuzes",
          ],
        },
      ],
    },
    guideTypes: {
      label: "Soorten gidsen",
      title: "Wat voor uitleg je hier mag verwachten",
      items: [
        {
          title: "Keuzehulp",
          text: "Gidsen die helpen bij het kiezen tussen onderdelen, platformen of prijsklassen.",
          icon: Search,
        },
        {
          title: "Compatibiliteit",
          text: "Uitleg over wat wel en niet samenwerkt, en hoe je fouten vermijdt voor je iets koopt.",
          icon: ShieldCheck,
        },
        {
          title: "Prestaties",
          text: "Praktische uitleg over wat echt impact heeft op snelheid, responsiviteit en dagelijks gebruik.",
          icon: Gauge,
        },
        {
          title: "Upgrades",
          text: "Inzicht in welke upgrades nog zinvol zijn en wanneer een volledig nieuw systeem slimmer is.",
          icon: Wrench,
        },
      ],
    },
    examples: {
      label: "Voorbeelden",
      title: "Typische onderwerpen voor Northern Studio guides",
      items: [
        "Welke gpu is logisch voor 1440p gaming?",
        "Hoeveel wattage heeft mijn build echt nodig?",
        "Moet ik DDR5 kiezen of is DDR4 nog voldoende?",
        "Welke upgrade geeft het meeste verschil in een trage pc?",
        "Wanneer is een cpu bottleneck echt relevant?",
        "Welke opslagindeling is slim voor gaming en werk?",
        "Wat is een goede balans tussen stilte, koeling en prestaties?",
        "Wanneer loont het nog om een bestaand systeem te upgraden?",
      ],
    },
    philosophy: {
      label: "Aanpak",
      title: "Northern Studio legt hardware uit op een bruikbare manier",
      description:
        "Veel hardwarecontent online is ofwel te oppervlakkig, ofwel geschreven alsof iedereen graag specificaties zit te aanbidden in een donkere kamer. Northern Studio kiest voor praktische uitleg: wat iets betekent, waarom het relevant is en wanneer het de moeite waard is.",
      points: [
        "Duidelijke taal zonder technische mist",
        "Focus op praktische keuzes, niet op marketing",
        "Compatibiliteit en stabiliteit staan centraal",
        "Gidsen sluiten aan op echte builds en echte budgetten",
        "Geschikt voor beginners én mensen die gerichter willen vergelijken",
        "Gebouwd als ondersteuning voor de PC Builder en diensten",
      ],
    },
    workflow: {
      label: "Hoe dit samenwerkt",
      title: "Van gids naar builder naar concrete oplossing",
      steps: [
        {
          title: "Begrijp je opties",
          text: "Start met een gids als je nog twijfelt tussen onderdelen, prijsklassen of platformen.",
        },
        {
          title: "Gebruik de builder",
          text: "Zodra je een richting hebt, helpt de PC Builder om keuzes samen te brengen in een echte configuratie.",
        },
        {
          title: "Vraag begeleiding of uitvoering",
          text: "Als je zelf niet alles wil uitzoeken of bouwen, kan Northern Studio verder helpen met advies of volledige uitvoering.",
        },
      ],
    },
    useCases: {
      label: "Voor wie",
      title: "Handig voor verschillende soorten bezoekers",
      items: [
        {
          title: "Mensen die willen vergelijken",
          text: "Voor bezoekers die nog niet weten welke onderdelen of prijsklasse logisch zijn.",
          icon: BookOpen,
        },
        {
          title: "Mensen die een build plannen",
          text: "Voor wie al richting heeft maar betere compatibiliteit en duidelijkere keuzes wil.",
          icon: Cpu,
        },
        {
          title: "Mensen die willen upgraden",
          text: "Voor systemen waar niet alles vervangen hoeft te worden, maar gerichte verbetering wel zinvol kan zijn.",
          icon: Zap,
        },
        {
          title: "Mensen die hulp willen bij beslissen",
          text: "Voor wie liever niet op forums verdrinkt en gewoon een heldere richting wil.",
          icon: Globe,
        },
      ],
    },
    faq: {
      label: "Wat je hier vindt",
      title: "Wat deze pagina concreet betekent",
      items: [
        {
          q: "Is dit een blog?",
          a: "Niet in de klassieke zin. Het is eerder een kennisgedeelte dat gericht is op duidelijke uitleg, keuzehulp en betere beslissingen rond hardware.",
        },
        {
          q: "Zijn deze gidsen alleen voor gamers?",
          a: "Nee. Ze zijn net zo relevant voor workstations, algemene pc-gebruikers, upgrades en mensen die gewoon een stabiel systeem willen.",
        },
        {
          q: "Kan ik hieruit rechtstreeks naar de builder gaan?",
          a: "Ja. Het idee is juist dat gidsen de context geven en de builder de concrete configuratie mogelijk maakt.",
        },
        {
          q: "Kan Northern Studio ook persoonlijk advies geven naast deze gidsen?",
          a: "Ja. De gidsen zijn bedoeld om te helpen, maar persoonlijke begeleiding of uitvoering blijft mogelijk via de diensten en contactpagina.",
        },
      ],
    },
    cta: {
      label: "Volgende stap",
      title: "Lees, vergelijk en ga daarna gericht verder",
      description:
        "Gebruik guides om slimmer te kiezen, gebruik de builder om keuzes samen te brengen en contacteer Northern Studio als je persoonlijke hulp of uitvoering wil.",
      builderCta: "Naar PC Builder",
      servicesCta: "Bekijk alle diensten",
      contactCta: "Neem contact op",
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
      badge: "Hardware guidance, compatibility, performance and practical explanations",
      title1: "Guides and hardware advice",
      title2: "without guesswork",
      description:
        "Northern Studio helps you understand which parts make sense, what is compatible, where performance really comes from and which choices match your use case. No endless chaos, just clear explanations and practical direction.",
      primaryCta: "Go to PC Builder",
      secondaryCta: "View all services",
      tertiaryCta: "Back to home",
    },
    intro: {
      label: "What this is",
      title: "A place for practical hardware knowledge",
      description:
        "A lot of people simply want to know which CPU fits their use case, how much power supply capacity actually makes sense, whether a GPU fits in a case or whether an upgrade is still worth it. This guides page is meant to be the knowledge layer around the builder and the broader hardware ecosystem of Northern Studio.",
    },
    categories: {
      label: "Topics",
      title: "What Northern Studio can guide you through",
      items: [
        {
          title: "CPU & performance",
          description:
            "Explanations about processors, cores, gaming performance, workstation use, platform choice and when a CPU upgrade actually matters.",
          icon: Cpu,
          points: [
            "The difference between gaming and workstation CPU choices",
            "When extra cores are useful and when they are not",
            "How platform choice affects future upgrades",
            "Which CPU fits your budget and goal",
          ],
        },
        {
          title: "GPU & graphics performance",
          description:
            "Understanding which graphics card fits 1080p, 1440p or heavier workloads such as editing, rendering and other graphics-heavy tasks.",
          icon: Monitor,
          points: [
            "Which GPU makes sense for your resolution and games",
            "When more VRAM really matters",
            "Balancing price, performance and efficiency",
            "When a more expensive card is actually justified",
          ],
        },
        {
          title: "Motherboards & compatibility",
          description:
            "Socket, chipset, memory support and practical board choice without getting lost in marketing terms and unnecessary features.",
          icon: CircuitBoard,
          points: [
            "Which socket belongs to which CPU",
            "What chipsets do and do not really change",
            "How to prevent compatibility problems",
            "When an expensive motherboard is unnecessary",
          ],
        },
        {
          title: "RAM & system memory",
          description:
            "How much memory is useful, which speeds are actually relevant and how to avoid buying too little or uselessly too much.",
          icon: MemoryStick,
          points: [
            "16GB, 32GB or more: what actually makes sense?",
            "DDR4 versus DDR5 in practical context",
            "What speed and latency mean in real-world use",
            "How RAM choice connects to motherboard and CPU",
          ],
        },
        {
          title: "Storage & speed",
          description:
            "SSDs, storage planning, load performance and the question of when fast storage really changes daily use or professional work.",
          icon: HardDrive,
          points: [
            "NVMe versus SATA in actual usage scenarios",
            "How much storage makes sense for your use case",
            "When extra speed is truly noticeable",
            "How storage fits into future upgrades",
          ],
        },
        {
          title: "Power supply, cooling & stability",
          description:
            "Wattage, headroom, airflow, cooling and general reliability. Less flashy than a GPU, but often more important for a stable build.",
          icon: BatteryCharging,
          points: [
            "How much wattage you really need",
            "Why quality power supplies matter",
            "Understanding airflow and cooling practically",
            "How stability and lifespan depend on these choices",
          ],
        },
      ],
    },
    guideTypes: {
      label: "Guide types",
      title: "What kind of explanations you can expect here",
      items: [
        {
          title: "Choice guides",
          text: "Guides that help you choose between parts, platforms or price tiers.",
          icon: Search,
        },
        {
          title: "Compatibility",
          text: "Explanations of what works together, what does not and how to avoid mistakes before buying.",
          icon: ShieldCheck,
        },
        {
          title: "Performance",
          text: "Practical explanations of what really affects speed, responsiveness and day-to-day use.",
          icon: Gauge,
        },
        {
          title: "Upgrades",
          text: "Insight into which upgrades are still worthwhile and when a fully new system is the smarter move.",
          icon: Wrench,
        },
      ],
    },
    examples: {
      label: "Examples",
      title: "Typical topics for Northern Studio guides",
      items: [
        "Which GPU makes sense for 1440p gaming?",
        "How much wattage does my build really need?",
        "Should I choose DDR5 or is DDR4 still enough?",
        "Which upgrade gives the biggest improvement in a slow PC?",
        "When is a CPU bottleneck actually relevant?",
        "What is a smart storage layout for gaming and work?",
        "What is a good balance between silence, cooling and performance?",
        "When is it still worth upgrading an existing system?",
      ],
    },
    philosophy: {
      label: "Approach",
      title: "Northern Studio explains hardware in a usable way",
      description:
        "A lot of hardware content online is either too shallow or written as if everyone enjoys worshipping specification sheets in a dim room. Northern Studio chooses practical explanation: what something means, why it matters and when it is actually worth caring about.",
      points: [
        "Clear language without technical fog",
        "Focus on practical choices, not marketing noise",
        "Compatibility and stability come first",
        "Guides connect to real builds and real budgets",
        "Useful for beginners and for people comparing more seriously",
        "Built to support the PC Builder and the service ecosystem",
      ],
    },
    workflow: {
      label: "How it works together",
      title: "From guide to builder to concrete solution",
      steps: [
        {
          title: "Understand your options",
          text: "Start with a guide if you are still unsure between parts, price tiers or platforms.",
        },
        {
          title: "Use the builder",
          text: "Once you have a direction, the PC Builder helps bring those choices together into a real configuration.",
        },
        {
          title: "Ask for guidance or execution",
          text: "If you do not want to figure out or build everything yourself, Northern Studio can help with advice or full execution.",
        },
      ],
    },
    useCases: {
      label: "Who it is for",
      title: "Useful for different kinds of visitors",
      items: [
        {
          title: "People who want to compare",
          text: "For visitors who do not yet know which parts or price tier make sense.",
          icon: BookOpen,
        },
        {
          title: "People planning a build",
          text: "For anyone who already has a direction but wants better compatibility and clearer choices.",
          icon: Cpu,
        },
        {
          title: "People wanting to upgrade",
          text: "For systems where not everything needs replacement, but targeted improvement could still make sense.",
          icon: Zap,
        },
        {
          title: "People who want help deciding",
          text: "For anyone who would rather not drown in forums and just wants clear direction.",
          icon: Globe,
        },
      ],
    },
    faq: {
      label: "What you find here",
      title: "What this page actually means",
      items: [
        {
          q: "Is this a blog?",
          a: "Not in the classic sense. It is more of a knowledge section focused on clear explanations, better decisions and practical hardware guidance.",
        },
        {
          q: "Are these guides only for gamers?",
          a: "No. They are just as relevant for workstations, general PC users, upgrades and anyone who simply wants a stable system.",
        },
        {
          q: "Can I go from these guides straight into the builder?",
          a: "Yes. That is exactly the idea: the guides give context, and the builder turns that into a concrete configuration.",
        },
        {
          q: "Can Northern Studio also give personal advice beyond these guides?",
          a: "Yes. The guides are there to help, but personal guidance or full execution is still available through the services and contact pages.",
        },
      ],
    },
    cta: {
      label: "Next step",
      title: "Read, compare, then move forward with intent",
      description:
        "Use guides to choose more intelligently, use the builder to bring choices together and contact Northern Studio if you want personal help or execution.",
      builderCta: "Go to PC Builder",
      servicesCta: "View all services",
      contactCta: "Contact us",
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

export default function GuidesPage({ params }) {
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
              <a href={`/${locale}/it-help`} className="text-white/70 transition hover:text-white">{t.nav.itHelp}</a>
              <a href={`/${locale}/guides`} className="text-white transition">{t.nav.guides}</a>
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
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.categories.label}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{t.categories.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.categories.items.map((item) => {
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
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.guideTypes.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.guideTypes.title}</h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.guideTypes.items.map((item) => {
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

          <SectionCard className="bg-gradient-to-br from-purple-400/10 to-white/5">
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.examples.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.examples.title}</h2>

              <div className="mt-8 grid gap-3">
                {t.examples.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    <p className="text-sm leading-6 text-white/82">{item}</p>
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
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.philosophy.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.philosophy.title}</h2>
              <p className="mt-5 text-sm leading-7 text-white/70">{t.philosophy.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.philosophy.points.map((point) => (
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
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10">
        <SectionCard className="bg-gradient-to-br from-emerald-400/10 to-white/5">
          <div className="p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.useCases.label}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.useCases.title}</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {t.useCases.items.map((item) => {
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
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10">
        <SectionCard>
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
                    <Fan className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-white/78">
                    Northern Studio bouwt deze gidsen niet als losstaande content, maar als praktische laag rond
                    echte systemen, echte keuzes en echte builds.
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
                  Kies slimmer, bouw gerichter, verlies minder tijd
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/70">
                  Start bij de builder, bekijk het dienstenoverzicht of neem contact op als je liever direct
                  persoonlijke begeleiding wilt.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                <PrimaryButton href={`/${locale}/pc-builder`}>
                  {t.cta.builderCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </PrimaryButton>
                <SecondaryButton href={`/${locale}/services`}>{t.cta.servicesCta}</SecondaryButton>
                <SecondaryButton href={`/${locale}/contact`}>{t.cta.contactCta}</SecondaryButton>

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