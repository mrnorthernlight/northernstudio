"use client";

import { use } from "react";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  Globe,
  Code,
  Layout,
  Bot,
  ArrowRight,
  CheckCircle2,
  Mail,
} from "lucide-react";

const content = {
  nl: {
    hero: {
      badge: "Websites, automatisatie en digitale aanwezigheid",
      title1: "Digitale diensten van",
      title2: "Northern Studio",
      description:
        "Northern Studio helpt bedrijven en zelfstandigen met professionele websites, digitale infrastructuur en automatisatie. Van ontwerp tot implementatie.",
      primary: "Neem contact op",
      secondary: "Bekijk diensten",
    },
    services: [
      {
        title: "Website ontwikkeling",
        description:
          "Moderne websites gebouwd met snelle technologieën zoals Next.js en moderne designsystemen.",
        points: [
          "Bedrijfswebsites",
          "Landing pages",
          "Portfolio websites",
          "SEO basisstructuur",
        ],
        icon: Globe,
      },
      {
        title: "Web design",
        description:
          "Professioneel ontwerp dat vertrouwen en kwaliteit uitstraalt.",
        points: [
          "Brand styling",
          "Responsive design",
          "UX optimalisatie",
          "Premium uitstraling",
        ],
        icon: Layout,
      },
      {
        title: "Automatisatie",
        description:
          "Automatisering van repetitieve digitale processen om tijd en kosten te besparen.",
        points: [
          "Workflow automatisatie",
          "API integraties",
          "Email flows",
          "Business tooling",
        ],
        icon: Bot,
      },
      {
        title: "Technische consultancy",
        description:
          "Advies over infrastructuur, softwarekeuzes en digitale strategie.",
        points: [
          "Technologie selectie",
          "Platform architectuur",
          "Digitale strategie",
          "Performance optimalisatie",
        ],
        icon: Code,
      },
    ],
    cta: {
      title: "Start een digitaal project",
      description:
        "Bespreek je project met Northern Studio en ontdek hoe technologie je bedrijf kan versterken.",
      contact: "Contact opnemen",
    },
  },

  en: {
    hero: {
      badge: "Websites, automation and digital infrastructure",
      title1: "Digital services by",
      title2: "Northern Studio",
      description:
        "Northern Studio helps companies and professionals with modern websites, digital infrastructure and automation solutions.",
      primary: "Contact Northern Studio",
      secondary: "View services",
    },
    services: [
      {
        title: "Website development",
        description:
          "Modern websites built with fast technologies such as Next.js and modern design systems.",
        points: [
          "Business websites",
          "Landing pages",
          "Portfolio websites",
          "SEO foundations",
        ],
        icon: Globe,
      },
      {
        title: "Web design",
        description:
          "Professional design focused on trust, clarity and performance.",
        points: [
          "Brand styling",
          "Responsive design",
          "UX optimization",
          "Premium presentation",
        ],
        icon: Layout,
      },
      {
        title: "Automation",
        description:
          "Automation of repetitive digital processes to save time and reduce operational friction.",
        points: [
          "Workflow automation",
          "API integrations",
          "Email flows",
          "Business tooling",
        ],
        icon: Bot,
      },
      {
        title: "Technical consulting",
        description:
          "Guidance on technology choices, digital architecture and performance.",
        points: [
          "Technology selection",
          "Platform architecture",
          "Digital strategy",
          "Performance optimization",
        ],
        icon: Code,
      },
    ],
    cta: {
      title: "Start a digital project",
      description:
        "Discuss your project with Northern Studio and explore how technology can support your business.",
      contact: "Contact Northern Studio",
    },
  },
};

export default function DigitalServicesPage({ params }) {
  const { locale } = use(params);
  const lang = locale === "en" ? "en" : "nl";
  const t = content[lang];
  const pathname = usePathname();

  const switchLocale = (target) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/");
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        <div className="mb-10 flex justify-end">
          <div className="rounded-full bg-white/5 p-1">
            <a href={switchLocale("nl")} className={`px-3 py-1 text-sm ${lang==="nl"?"bg-white text-black rounded-full":""}`}>NL</a>
            <a href={switchLocale("en")} className={`px-3 py-1 text-sm ${lang==="en"?"bg-white text-black rounded-full":""}`}>EN</a>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-white/70 mb-4">
            <Sparkles size={16} />
            {t.hero.badge}
          </div>

          <h1 className="text-5xl font-semibold mb-6">
            {t.hero.title1} <span className="text-emerald-300">{t.hero.title2}</span>
          </h1>

          <p className="text-white/70 mb-10">{t.hero.description}</p>

          <div className="flex justify-center gap-4">
            <a
              href={`/${lang}/contact`}
              className="rounded-full bg-emerald-400 text-black px-6 py-3 text-sm font-medium"
            >
              {t.hero.primary}
            </a>

            <a
              href={`/${lang}/services`}
              className="rounded-full border border-white/20 px-6 py-3 text-sm"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Icon size={20} />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>

                <p className="text-white/70 mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.points.map((p, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 size={16} />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">{t.cta.title}</h2>
          <p className="text-white/70 mb-8">{t.cta.description}</p>

          <a
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-medium text-black"
          >
            <Mail size={16} />
            {t.cta.contact}
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </main>
  );
}