"use client";

import { use } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Code,
  Globe,
  Layout,
  Mail,
  Palette,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  Building2,
  MonitorSmartphone,
  Bot,
  Search,
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
      badge: "Webdesign, branding, automatisatie en digitale aanwezigheid",
      title1: "Digitale diensten van",
      title2: "Northern Studio",
      description:
        "Northern Studio helpt bedrijven en zelfstandigen met premium websites, branding, digitale structuur en automatisatie. Niet zomaar een mooie site, maar een digitale aanwezigheid die professioneel aanvoelt en praktisch werkt.",
      primaryCta: "Neem contact op",
      secondaryCta: "Bekijk alle diensten",
      tertiaryCta: "Terug naar home",
    },
    intro: {
      label: "Wat dit is",
      title: "Digitale dienstverlening met dezelfde logica als hardware",
      description:
        "Net zoals bij custom pc builds draait het hier niet om willekeurige keuzes, maar om structuur, duidelijkheid en kwaliteit. Northern Studio bouwt digitale oplossingen die professioneel ogen, technisch sterk zijn en afgestemd zijn op het doel van de klant.",
    },
    services: {
      label: "Digitale diensten",
      title: "Waarmee Northern Studio je digitaal kan helpen",
      items: [
        {
          title: "Website ontwikkeling",
          description:
            "Moderne websites die snel, professioneel en schaalbaar zijn. Gericht op bedrijven en zelfstandigen die meer nodig hebben dan een standaard template.",
          icon: Globe,
          points: [
            "Bedrijfswebsites en service sites",
            "Landing pages met duidelijke structuur",
            "Moderne technologie en performante opbouw",
            "Gebouwd met schaalbaarheid en onderhoud in gedachten",
          ],
        },
        {
          title: "Webdesign",
          description:
            "Design dat vertrouwen, helderheid en kwaliteit uitstraalt. Niet druk of rommelig, maar strak, premium en doelgericht.",
          icon: Layout,
          points: [
            "Professionele visuele structuur",
            "Responsive design voor mobiel en desktop",
            "Premium uitstraling aangepast aan je merk",
            "Heldere gebruikerservaring en contentflow",
          ],
        },
        {
          title: "Branding & logo design",
          description:
            "Voor bedrijven die er consistenter, professioneler en herkenbaarder willen uitzien, zowel online als visueel in het algemeen.",
          icon: Palette,
          points: [
            "Logo design en visuele richting",
            "Stijlconsistentie tussen merk en website",
            "Professionelere eerste indruk",
            "Basis voor sterkere digitale uitstraling",
          ],
        },
        {
          title: "Automatisatie",
          description:
            "Digitale workflows en eenvoudige automatisaties die tijd besparen en repetitieve taken efficiënter maken.",
          icon: Bot,
          points: [
            "Praktische workflow automatisatie",
            "Procesvereenvoudiging voor terugkerende taken",
            "Minder manueel werk waar mogelijk",
            "Digitale structuur met meer efficiëntie",
          ],
        },
        {
          title: "Digitale aanwezigheid",
          description:
            "Niet alleen een website, maar een duidelijkere online positie. Northern Studio helpt je bedrijf sterker en consistenter online verschijnen.",
          icon: MonitorSmartphone,
          points: [
            "Heldere online presentatie",
            "Professionele structuur van diensten en aanbod",
            "Meer vertrouwen voor bezoekers en klanten",
            "Betere basis voor toekomstige groei",
          ],
        },
        {
          title: "Technische en strategische begeleiding",
          description:
            "Hulp bij het bepalen van wat digitaal logisch is voor jouw situatie, zonder in technisch vaagtaalmoeras te verdrinken.",
          icon: Code,
          points: [
            "Advies over website- en platformkeuzes",
            "Duidelijke technische richting",
            "Praktische vertaling van ideeën naar uitvoering",
            "Minder giswerk bij digitale beslissingen",
          ],
        },
      ],
    },
    useCases: {
      label: "Voor wie",
      title: "Geschikt voor ondernemers en bedrijven die professioneler willen verschijnen",
      items: [
        {
          title: "Zelfstandigen",
          text: "Voor mensen die een sterkere en geloofwaardigere online aanwezigheid nodig hebben.",
          icon: Briefcase,
        },
        {
          title: "Lokale bedrijven",
          text: "Voor ondernemingen die online duidelijker en professioneler gevonden en begrepen willen worden.",
          icon: Building2,
        },
        {
          title: "Nieuwe projecten",
          text: "Voor nieuwe initiatieven die meteen met een goede digitale basis willen starten.",
          icon: Sparkles,
        },
        {
          title: "Bedrijven in groei",
          text: "Voor teams die hun merk, site of digitale structuur willen upgraden naar een hoger niveau.",
          icon: Zap,
        },
      ],
    },
    examples: {
      label: "Praktische voorbeelden",
      title: "Typische digitale vragen waarbij Northern Studio kan helpen",
      items: [
        "Ik heb een professionele website nodig voor mijn bedrijf",
        "Mijn huidige website voelt verouderd of onduidelijk aan",
        "Ik wil een sterkere branding en professionelere uitstraling",
        "Ik wil mijn diensten beter online uitleggen",
        "Ik zoek een premium uitstraling in plaats van een standaard template look",
        "Ik wil processen of terugkerende taken deels automatiseren",
        "Ik wil online betrouwbaarder en serieuzer overkomen",
        "Ik heb hulp nodig om mijn digitale richting helder te krijgen",
      ],
    },
    process: {
      label: "Werkwijze",
      title: "Hoe Northern Studio digitale projecten benadert",
      steps: [
        {
          title: "Context begrijpen",
          text: "Eerst wordt duidelijk wat je doel is, wie je doelgroep is en wat je digitaal echt nodig hebt.",
        },
        {
          title: "Structuur bepalen",
          text: "Daarna wordt de juiste digitale richting uitgewerkt: inhoud, opbouw, stijl en logica.",
        },
        {
          title: "Ontwerp en uitvoering",
          text: "Northern Studio vertaalt dat naar een premium ontwerp en een praktische technische uitwerking.",
        },
        {
          title: "Afwerken en aanscherpen",
          text: "De laatste stap is verfijning: zorgen dat alles helder, consistent en professioneel aanvoelt.",
        },
      ],
    },
    philosophy: {
      label: "Aanpak",
      title: "Geen losse pixels, maar digitale systemen die kloppen",
      description:
        "Northern Studio benadert web en branding niet als decoratie, maar als digitale infrastructuur. De bedoeling is dat een website niet alleen mooi is, maar ook geloofwaardig, logisch opgebouwd en bruikbaar voor echte bezoekers.",
      points: [
        "Premium uitstraling zonder visuele chaos",
        "Duidelijkheid boven overdesign",
        "Technische en visuele kwaliteit in één geheel",
        "Gebouwd voor vertrouwen en bruikbaarheid",
        "Praktische oplossingen in plaats van holle buzzwords",
        "Digitale diensten als volwaardig onderdeel van het ecosysteem",
      ],
    },
    faq: {
      label: "Veelgestelde vragen",
      title: "Wat deze digitale diensten concreet betekenen",
      items: [
        {
          q: "Is dit alleen voor volledige websites?",
          a: "Nee. Northern Studio kan ook helpen met branding, digitale structuur, begeleiding en gerichte verbeteringen aan hoe een bedrijf online verschijnt.",
        },
        {
          q: "Kan ik ook contact opnemen als ik nog niet precies weet wat ik nodig heb?",
          a: "Ja. Dat is net vaak het startpunt. Eerst wordt duidelijk wat logisch is, daarna pas wat gebouwd of uitgewerkt moet worden.",
        },
        {
          q: "Is dit bedoeld voor bedrijven of ook voor zelfstandigen?",
          a: "Beide. De dienstverlening is geschikt voor zelfstandigen, lokale bedrijven en groeiende projecten die professioneel online aanwezig willen zijn.",
        },
        {
          q: "Kan dit samengaan met automatisatie of andere technische hulp?",
          a: "Ja. Digitale diensten kunnen perfect overlappen met automatisatie, technische begeleiding en bredere digitale ondersteuning.",
        },
      ],
    },
    cta: {
      label: "Volgende stap",
      title: "Vertel wat je digitaal wil bereiken en we bouwen van daaruit verder",
      description:
        "Of je nu een website wil laten maken, je branding wil versterken of je digitale processen duidelijker wil structureren: Northern Studio helpt je met een concrete richting en een professionele uitvoering.",
      contactCta: "Neem contact op",
      servicesCta: "Bekijk alle diensten",
      homeCta: "Terug naar home",
    },
    footer: {
      contact: "Contact",
      privacy: "Privacybeleid",
      terms: "Algemene voorwaarden",
      cookies: "Cookies",
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
      badge: "Web design, branding, automation and digital presence",
      title1: "Digital services by",
      title2: "Northern Studio",
      description:
        "Northern Studio helps businesses and independents with premium websites, branding, digital structure and automation. Not just a pretty site, but a digital presence that feels professional and works in practice.",
      primaryCta: "Contact us",
      secondaryCta: "View all services",
      tertiaryCta: "Back to home",
    },
    intro: {
      label: "What this is",
      title: "Digital services built with the same logic as hardware",
      description:
        "Just like with custom PC builds, this is not about random choices. It is about structure, clarity and quality. Northern Studio builds digital solutions that look professional, are technically solid and fit the real goal of the client.",
    },
    services: {
      label: "Digital services",
      title: "How Northern Studio can help digitally",
      items: [
        {
          title: "Website development",
          description:
            "Modern websites that are fast, professional and scalable. Built for businesses and independents who need more than a standard template.",
          icon: Globe,
          points: [
            "Business websites and service websites",
            "Landing pages with clear structure",
            "Modern technology and performant builds",
            "Built with scalability and maintainability in mind",
          ],
        },
        {
          title: "Web design",
          description:
            "Design that communicates trust, clarity and quality. Not noisy or cluttered, but clean, premium and purposeful.",
          icon: Layout,
          points: [
            "Professional visual structure",
            "Responsive design for mobile and desktop",
            "Premium look tailored to your brand",
            "Clear user experience and content flow",
          ],
        },
        {
          title: "Branding & logo design",
          description:
            "For businesses that want to look more consistent, more professional and more recognizable both online and visually in general.",
          icon: Palette,
          points: [
            "Logo design and visual direction",
            "Consistency between brand and website",
            "Stronger first impression",
            "Foundation for a better digital presence",
          ],
        },
        {
          title: "Automation",
          description:
            "Digital workflows and simple automations that save time and make repetitive work more efficient.",
          icon: Bot,
          points: [
            "Practical workflow automation",
            "Simplification of recurring tasks",
            "Less manual work where possible",
            "More efficient digital structure",
          ],
        },
        {
          title: "Digital presence",
          description:
            "Not just a website, but a clearer online position. Northern Studio helps your business appear stronger and more consistent online.",
          icon: MonitorSmartphone,
          points: [
            "Clearer online presentation",
            "Professional service and offer structure",
            "More trust for visitors and customers",
            "Better foundation for future growth",
          ],
        },
        {
          title: "Technical and strategic guidance",
          description:
            "Help deciding what actually makes digital sense for your situation, without falling into vague technical fog.",
          icon: Code,
          points: [
            "Advice on website and platform direction",
            "Clear technical guidance",
            "Practical translation from idea to execution",
            "Less guesswork in digital decisions",
          ],
        },
      ],
    },
    useCases: {
      label: "Who it is for",
      title: "Suitable for businesses and professionals who want to appear more professionally",
      items: [
        {
          title: "Independents",
          text: "For people who need a stronger and more credible online presence.",
          icon: Briefcase,
        },
        {
          title: "Local businesses",
          text: "For companies that want to be found and understood more clearly online.",
          icon: Building2,
        },
        {
          title: "New projects",
          text: "For initiatives that want to start immediately with a strong digital foundation.",
          icon: Sparkles,
        },
        {
          title: "Growing businesses",
          text: "For teams that want to upgrade their brand, site or digital structure to a higher level.",
          icon: Zap,
        },
      ],
    },
    examples: {
      label: "Practical examples",
      title: "Typical digital questions Northern Studio can help with",
      items: [
        "I need a professional website for my business",
        "My current website feels outdated or unclear",
        "I want stronger branding and a more professional look",
        "I want to explain my services better online",
        "I want a premium feel instead of a standard template look",
        "I want to automate recurring tasks or processes",
        "I want to appear more trustworthy and serious online",
        "I need help clarifying my digital direction",
      ],
    },
    process: {
      label: "Workflow",
      title: "How Northern Studio approaches digital projects",
      steps: [
        {
          title: "Understand the context",
          text: "First we clarify your goal, your audience and what you actually need digitally.",
        },
        {
          title: "Define the structure",
          text: "Then the right direction is shaped: content, structure, style and logic.",
        },
        {
          title: "Design and execution",
          text: "Northern Studio translates that into a premium design and a practical technical build.",
        },
        {
          title: "Refine and finish",
          text: "The final step is refinement: making sure everything feels clear, consistent and professional.",
        },
      ],
    },
    philosophy: {
      label: "Approach",
      title: "Not random pixels, but digital systems that make sense",
      description:
        "Northern Studio approaches web and branding not as decoration, but as digital infrastructure. The goal is not only to make a website look good, but to make it credible, well-structured and genuinely useful.",
      points: [
        "Premium look without visual chaos",
        "Clarity over overdesign",
        "Technical and visual quality in one whole",
        "Built for trust and usability",
        "Practical solutions instead of hollow buzzwords",
        "Digital services as a real part of the wider ecosystem",
      ],
    },
    faq: {
      label: "Frequently asked questions",
      title: "What these digital services actually mean",
      items: [
        {
          q: "Is this only for full websites?",
          a: "No. Northern Studio can also help with branding, digital structure, guidance and targeted improvements to how a business appears online.",
        },
        {
          q: "Can I contact you even if I do not know exactly what I need yet?",
          a: "Yes. That is often the real starting point. First we clarify what makes sense, then what should actually be built.",
        },
        {
          q: "Is this for companies or also for independents?",
          a: "Both. These services are suitable for independents, local businesses and growing projects that want a stronger online presence.",
        },
        {
          q: "Can this be combined with automation or technical help?",
          a: "Yes. Digital services can overlap naturally with automation, technical guidance and broader digital support.",
        },
      ],
    },
    cta: {
      label: "Next step",
      title: "Tell us what you want to achieve digitally and we build from there",
      description:
        "Whether you want a website, stronger branding or clearer digital processes: Northern Studio helps with a concrete direction and professional execution.",
      contactCta: "Contact us",
      servicesCta: "View all services",
      homeCta: "Back to home",
    },
    footer: {
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms",
      cookies: "Cookies",
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

export default function DigitalServicesPage({ params }) {
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
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.services.label}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{t.services.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.services.items.map((item) => {
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
                          <ShieldCheck className="h-4 w-4" />
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
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.useCases.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.useCases.title}</h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
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

          <SectionCard className="bg-white/[0.06]">
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
                    <Workflow className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-white/78">
                    Digitale diensten moeten niet alleen mooi ogen, maar ook logisch voelen, vertrouwen opwekken en
                    passen binnen hoe een bedrijf echt werkt.
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
                  Van idee naar digitale structuur zonder rommel ertussen
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/70">
                  Gebruik contact als startpunt, bekijk eerst alle diensten of keer terug naar home om het bredere
                  ecosysteem van Northern Studio verder te verkennen.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                <PrimaryButton href={`/${locale}/contact`}>
                  {t.cta.contactCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </PrimaryButton>
                <SecondaryButton href={`/${locale}/services`}>{t.cta.servicesCta}</SecondaryButton>
                <SecondaryButton href={`/${locale}`}>{t.cta.homeCta}</SecondaryButton>

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
          <a href={`/${locale}/cookies`} className="transition hover:text-white">{t.footer.cookies}</a>
        </div>
        <p className="mt-6">© {new Date().getFullYear()} Northern Studio. {t.footer.rights}</p>
        <p className="mt-2">Northern Studio™</p>
      </footer>
    </main>
  );
}