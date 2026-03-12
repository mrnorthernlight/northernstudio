"use client";

import { use } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  Cpu,
  Globe,
  BookOpen,
  Clock3,
  CheckCircle2,
  LifeBuoy,
  Briefcase,
  Monitor,
  Send,
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
      badge: "Contact, aanvragen, begeleiding en duidelijke volgende stappen",
      title1: "Neem contact op met",
      title2: "Northern Studio",
      description:
        "Heb je een vraag over een custom pc, IT hulp, hardwareadvies of digitale diensten? Gebruik deze pagina als startpunt. Hoe duidelijker je vraag, hoe sneller Northern Studio kan meedenken in de juiste richting.",
      primaryCta: "Mail Northern Studio",
      secondaryCta: "Bekijk alle diensten",
      tertiaryCta: "Terug naar home",
    },
    intro: {
      label: "Contact",
      title: "Waarvoor je contact kan opnemen",
      description:
        "Northern Studio is geen generieke contactpagina die alles vaag houdt. Deze pagina is bedoeld om vragen sneller te structureren, verwachtingen duidelijk te maken en bezoekers meteen naar de juiste dienst of volgende stap te leiden.",
    },
    contactOptions: {
      label: "Manieren om contact op te nemen",
      title: "Gebruik de route die het best past bij je vraag",
      items: [
        {
          title: "Custom PC builds",
          description:
            "Voor vragen over nieuwe builds, onderdelen, compatibiliteit, prijsinschattingen, uitvoerbare configuraties en begeleiding rond een complete pc.",
          icon: Cpu,
          points: [
            "Nieuwe gaming pc of workstation bespreken",
            "Hulp bij onderdelen of compatibiliteit",
            "Vraag over uitvoering door Northern Studio",
            "Builder-gerelateerde vragen en vervolgstappen",
          ],
        },
        {
          title: "IT hulp & Windows support",
          description:
            "Voor trage computers, Windows-problemen, malware, upgrades, instabiliteit, opslagproblemen en algemene technische hulp.",
          icon: Wrench,
          points: [
            "Windows werkt niet meer correct",
            "Computer is traag of instabiel",
            "Upgrades of herinstallatie nodig",
            "Algemene technische hulp of analyse",
          ],
        },
        {
          title: "Hardwareadvies",
          description:
            "Voor vragen over onderdelen kiezen, upgrades plannen, prestaties vergelijken of bepalen wat zinvol is binnen een bepaald budget of gebruik.",
          icon: BookOpen,
          points: [
            "Welke cpu of gpu is logisch?",
            "Is een upgrade nog de moeite waard?",
            "Welke voeding of opslag heb ik nodig?",
            "Wat is de beste balans voor mijn budget?",
          ],
        },
        {
          title: "Webdesign & branding",
          description:
            "Voor premium websites, branding, logo design en digitale aanwezigheid voor bedrijven of zelfstandigen die professioneel online willen verschijnen.",
          icon: Globe,
          points: [
            "Nieuwe website laten bouwen",
            "Branding of logo design bespreken",
            "Digitale uitstraling verbeteren",
            "Technische of strategische vragen rond webpresence",
          ],
        },
      ],
    },
    expectations: {
      label: "Wat helpt",
      title: "Hoe je je vraag het best formuleert",
      description:
        "Een goede eerste boodschap hoeft niet lang te zijn, maar wel bruikbaar. Hoe concreter je situatie, hoe sneller Northern Studio kan meedenken zonder onnodig heen-en-weer te doen.",
      tips: [
        "Beschrijf kort wat je nodig hebt of wat er misgaat",
        "Vermeld welk toestel of systeem het betreft als dat relevant is",
        "Zeg wat je doel is: advies, oplossing, uitvoering of vergelijking",
        "Geef budget, gebruik of prioriteiten mee als het over hardware gaat",
        "Vertel wat al geprobeerd is als het om een technisch probleem gaat",
        "Hou het simpel: duidelijkheid is nuttiger dan veel tekst",
      ],
    },
    routes: {
      label: "Snelle routes",
      title: "Niet zeker waar je moet beginnen?",
      items: [
        {
          title: "Ik wil een PC bouwen",
          description: "Gebruik de builder als je al richting hebt of onderdelen wil samenbrengen.",
          href: "pc-builder",
          icon: Cpu,
        },
        {
          title: "Ik heb IT hulp nodig",
          description: "Ga naar IT Hulp als je systeemproblemen, Windows-vragen of upgrades hebt.",
          href: "it-help",
          icon: LifeBuoy,
        },
        {
          title: "Ik wil eerst guides lezen",
          description: "Bekijk de guides als je nog aan het vergelijken of oriënteren bent.",
          href: "guides",
          icon: BookOpen,
        },
        {
          title: "Ik wil alle diensten bekijken",
          description: "Gebruik het dienstenoverzicht als je nog niet weet welke route het beste past.",
          href: "services",
          icon: Briefcase,
        },
      ],
      cta: "Ga verder",
    },
    faq: {
      label: "Veelgestelde vragen",
      title: "Wat bezoekers vaak willen weten",
      items: [
        {
          q: "Moet ik exact weten wat ik nodig heb voor ik contact opneem?",
          a: "Nee. Het helpt als je je situatie kan beschrijven, maar het is niet nodig om al alle technische details te kennen.",
        },
        {
          q: "Kan ik contact opnemen voor zowel advies als uitvoering?",
          a: "Ja. Sommige vragen starten als advies en groeien daarna door naar een build, een upgrade of een andere uitvoering.",
        },
        {
          q: "Is e-mail het centrale contactpunt?",
          a: "Ja. Voor Northern Studio is e-mail het duidelijke en professionele startpunt voor vragen, aanvragen en opvolging.",
        },
        {
          q: "Kan ik ook contact opnemen als ik twijfel tussen meerdere diensten?",
          a: "Ja. Dat is juist heel normaal. Northern Studio helpt je bepalen welke route het beste past bij je vraag.",
        },
      ],
    },
    trust: {
      label: "Waarom via deze pagina",
      title: "Een goed contactpunt maakt het hele proces beter",
      description:
        "Een sterke contactpagina verlaagt drempels, voorkomt verwarring en helpt om sneller tot een bruikbaar gesprek te komen. Northern Studio wil niet dat bezoekers moeten raden waar ze moeten beginnen.",
      points: [
        "Duidelijke routes voor verschillende soorten vragen",
        "Geschikt voor particulieren en bedrijven",
        "Focus op heldere communicatie",
        "Hardware, IT en digitale diensten onder één studio",
        "Contact als praktisch startpunt, niet als vaag formulier-einde",
        "Premium uitstraling met echte bruikbaarheid",
      ],
    },
    cta: {
      label: "Volgende stap",
      title: "Stuur je vraag door en we denken gericht met je mee",
      description:
        "Of je nu een build wil bespreken, hulp nodig hebt met een probleem of een digitaal project wil opstarten: contact is het startpunt voor een duidelijke volgende stap.",
      emailLabel: "E-mail",
      emailValue: "info@northernstudio.be",
      builderCta: "Naar PC Builder",
      servicesCta: "Bekijk alle diensten",
      emailCta: "Mail Northern Studio",
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
      badge: "Contact, requests, guidance and clear next steps",
      title1: "Get in touch with",
      title2: "Northern Studio",
      description:
        "Do you have a question about a custom PC, IT help, hardware advice or digital services? Use this page as your starting point. The clearer your question, the faster Northern Studio can help point you in the right direction.",
      primaryCta: "Email Northern Studio",
      secondaryCta: "View all services",
      tertiaryCta: "Back to home",
    },
    intro: {
      label: "Contact",
      title: "What you can contact us about",
      description:
        "Northern Studio is not a generic contact page that keeps everything vague. This page is meant to structure questions more clearly, set expectations and guide visitors toward the right service or next step.",
    },
    contactOptions: {
      label: "Ways to get in touch",
      title: "Use the route that best matches your question",
      items: [
        {
          title: "Custom PC builds",
          description:
            "For questions about new builds, parts, compatibility, price expectations, practical configurations and guidance around a full PC.",
          icon: Cpu,
          points: [
            "Discuss a new gaming PC or workstation",
            "Get help with parts or compatibility",
            "Ask about full execution by Northern Studio",
            "Builder-related questions and next steps",
          ],
        },
        {
          title: "IT help & Windows support",
          description:
            "For slow computers, Windows issues, malware, upgrades, instability, storage problems and general technical support.",
          icon: Wrench,
          points: [
            "Windows no longer works correctly",
            "Computer is slow or unstable",
            "Upgrade or reinstall needed",
            "General technical help or analysis",
          ],
        },
        {
          title: "Hardware advice",
          description:
            "For questions about choosing parts, planning upgrades, comparing performance or figuring out what makes sense for a budget or use case.",
          icon: BookOpen,
          points: [
            "Which CPU or GPU makes sense?",
            "Is an upgrade still worth it?",
            "Which power supply or storage do I need?",
            "What is the best balance for my budget?",
          ],
        },
        {
          title: "Web design & branding",
          description:
            "For premium websites, branding, logo design and digital presence for businesses or independents who want to appear professionally online.",
          icon: Globe,
          points: [
            "Discuss a new website project",
            "Talk through branding or logo design",
            "Improve digital presence and presentation",
            "Ask technical or strategic web questions",
          ],
        },
      ],
    },
    expectations: {
      label: "What helps",
      title: "How to phrase your question well",
      description:
        "A good first message does not need to be long, but it should be useful. The more concrete your situation, the faster Northern Studio can help without unnecessary back-and-forth.",
      tips: [
        "Briefly describe what you need or what is going wrong",
        "Mention which device or system it concerns if relevant",
        "State your goal: advice, solution, execution or comparison",
        "Share budget, use case or priorities if it is hardware-related",
        "Explain what has already been tried if it is a technical issue",
        "Keep it simple: clarity is more useful than lots of text",
      ],
    },
    routes: {
      label: "Quick routes",
      title: "Not sure where to start?",
      items: [
        {
          title: "I want to build a PC",
          description: "Use the builder if you already have direction or want to bring parts together.",
          href: "pc-builder",
          icon: Cpu,
        },
        {
          title: "I need IT help",
          description: "Go to IT Help if you have system issues, Windows questions or upgrade needs.",
          href: "it-help",
          icon: LifeBuoy,
        },
        {
          title: "I want to read guides first",
          description: "Check the guides if you are still comparing or exploring options.",
          href: "guides",
          icon: BookOpen,
        },
        {
          title: "I want to see all services",
          description: "Use the services overview if you are not sure which route fits best.",
          href: "services",
          icon: Briefcase,
        },
      ],
      cta: "Continue",
    },
    faq: {
      label: "Frequently asked questions",
      title: "What visitors often want to know",
      items: [
        {
          q: "Do I need to know exactly what I need before contacting you?",
          a: "No. It helps if you can describe the situation, but you do not need to know all the technical details in advance.",
        },
        {
          q: "Can I get in touch for both advice and execution?",
          a: "Yes. Some questions start as advice and then grow into a build, upgrade or another type of execution.",
        },
        {
          q: "Is email the main contact point?",
          a: "Yes. For Northern Studio, email is the clear and professional starting point for questions, requests and follow-up.",
        },
        {
          q: "Can I still contact you if I’m unsure which service applies?",
          a: "Yes. That is completely normal. Northern Studio can help determine which route fits your question best.",
        },
      ],
    },
    trust: {
      label: "Why use this page",
      title: "A good contact point makes the whole process better",
      description:
        "A strong contact page lowers friction, reduces confusion and helps create a useful conversation faster. Northern Studio does not want visitors guessing where they should begin.",
      points: [
        "Clear routes for different kinds of questions",
        "Suitable for individuals and businesses",
        "Focused on clear communication",
        "Hardware, IT and digital services under one studio",
        "Contact as a practical starting point, not a vague dead end",
        "Premium presentation with real usability",
      ],
    },
    cta: {
      label: "Next step",
      title: "Send your question and we’ll think through it with intent",
      description:
        "Whether you want to discuss a build, need help with a problem or want to start a digital project: contact is the starting point for a clear next step.",
      emailLabel: "Email",
      emailValue: "info@northernstudio.be",
      builderCta: "Go to PC Builder",
      servicesCta: "View all services",
      emailCta: "Email Northern Studio",
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

export default function ContactPage({ params }) {
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
              <a href={`/${locale}/contact`} className="text-white transition">{t.nav.contact}</a>
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
            <PrimaryButton href="mailto:info@northernstudio.be">
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
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.contactOptions.label}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{t.contactOptions.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.contactOptions.items.map((item) => {
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
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.expectations.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.expectations.title}</h2>
              <p className="mt-5 text-sm leading-7 text-white/70">{t.expectations.description}</p>

              <div className="mt-8 grid gap-3">
                {t.expectations.tips.map((tip) => (
                  <div key={tip} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    <p className="text-sm leading-6 text-white/82">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          <SectionCard className="bg-gradient-to-br from-purple-400/10 to-white/5">
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.routes.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.routes.title}</h2>

              <div className="mt-8 grid gap-4">
                {t.routes.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={`/${locale}/${item.href}`}
                      className="group rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:border-emerald-300/20 hover:bg-white/[0.07]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="inline-flex rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3 text-purple-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-white/65">{item.description}</p>
                          <div className="mt-3 inline-flex items-center gap-2 text-sm text-emerald-200">
                            {t.routes.cta}
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </SectionCard>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
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

          <SectionCard className="bg-white/[0.06]">
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{t.trust.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t.trust.title}</h2>
              <p className="mt-5 text-sm leading-7 text-white/70">{t.trust.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.trust.points.map((point) => (
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
                <div className="flex items-start gap-4">
                  <div className="inline-flex rounded-full border border-purple-400/20 bg-purple-400/10 p-2 text-purple-200">
                    <Clock3 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">{t.cta.emailLabel}</p>
                    <p className="mt-2 text-base font-medium text-white">{t.cta.emailValue}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div className="inline-flex rounded-full border border-purple-400/20 bg-purple-400/10 p-2 text-purple-200">
                    <Mail className="h-4 w-4" />
                  </div>
                  <p className="mt-3 text-sm text-white/78">Duidelijke vragen werken beter dan wollige e-mails.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div className="inline-flex rounded-full border border-purple-400/20 bg-purple-400/10 p-2 text-purple-200">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <p className="mt-3 text-sm text-white/78">Beschrijf je situatie, doel en context zo concreet mogelijk.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div className="inline-flex rounded-full border border-purple-400/20 bg-purple-400/10 p-2 text-purple-200">
                    <Phone className="h-4 w-4" />
                  </div>
                  <p className="mt-3 text-sm text-white/78">Deze pagina stuurt bezoekers eerst naar een heldere, professionele start.</p>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard className="bg-gradient-to-br from-purple-400/10 to-white/5">
            <div className="flex h-full flex-col justify-between p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">Northern Studio</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  Gebruik contact als startpunt, niet als laatste redmiddel
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/70">
                  Builder, services, guides en IT hulp komen hier samen. Deze pagina is bedoeld om sneller van vraag
                  naar richting te gaan, zonder onnodige verwarring.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                <a
                  href="mailto:info@northernstudio.be"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-medium text-black transition hover:bg-emerald-300"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {t.cta.emailCta}
                </a>

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