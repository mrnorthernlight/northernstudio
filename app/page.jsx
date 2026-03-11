"use client";

import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Globe,
  Mail,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
  Monitor,
  Briefcase,
  LifeBuoy,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "Custom PC's",
    description:
      "Gaming pc's, workstations en upgrades. Northern Studio helpt met het kiezen van onderdelen, compatibiliteit controleren en kan de volledige build voor je uitvoeren.",
    href: "/nl/pc-builder",
    icon: Cpu,
    tags: ["Gaming PC's", "Workstations", "Upgrades"],
  },
  {
    title: "IT Hulp & Windows Specialist",
    description:
      "Problemen oplossen, pc versnellen, virusverwijdering, upgrades, data-overdracht en hulp met Windows-installaties en configuratie.",
    href: "/nl/it-help",
    icon: Wrench,
    tags: ["Windows", "Herstellingen", "Optimalisatie"],
  },
  {
    title: "Hardware Advies",
    description:
      "Hulp bij het kiezen van onderdelen, compatibiliteit controleren, prestaties vergelijken en de juiste configuratie vinden voor jouw gebruik.",
    href: "/nl/guides",
    icon: ShieldCheck,
    tags: ["Compatibiliteit", "Onderdelen", "Prestaties"],
  },
  {
    title: "Webdesign & Branding",
    description:
      "Premium websites, logo design en digitale aanwezigheid voor bedrijven die professioneel online willen verschijnen.",
    href: "/nl/digital-services",
    icon: Globe,
    tags: ["Webdesign", "Logo Design", "Branding"],
  },
];

const reasons = [
  "Compatibiliteit staat voorop",
  "Duidelijke offerte en betaling",
  "Lokale ondersteuning in België",
  "Professionele assemblage en begeleiding",
  "Windows- en hardwarekennis in één studio",
  "Persoonlijk contact en praktische oplossingen",
];

const audiences = [
  {
    title: "Gaming PC's",
    text: "Voor spelers die een systeem willen dat echt past bij hun games, resolutie en budget.",
    icon: Monitor,
  },
  {
    title: "Workstations",
    text: "Voor editing, design, multitasking en andere zwaardere workflows waar stabiliteit telt.",
    icon: Briefcase,
  },
  {
    title: "IT Hulp",
    text: "Voor trage pc's, Windows-problemen, upgrades, virusverwijdering en algemene technische hulp.",
    icon: LifeBuoy,
  },
  {
    title: "Web & Branding",
    text: "Voor ondernemers die een premium website, logo of sterkere online uitstraling nodig hebben.",
    icon: Palette,
  },
];

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

export default function NorthernHomepage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
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

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center sm:justify-end">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
              <a href="/nl" className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black">
                NL
              </a>
              <a
                href="/en"
                className="rounded-full px-4 py-2 text-xs font-medium text-white/70 transition hover:text-white"
              >
                EN
              </a>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <img
              src="/images/branding/northern-studio-logo.png"
              alt="Northern Studio logo"
              className="h-auto w-full max-w-[420px] object-contain drop-shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
            />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <Zap className="h-4 w-4 text-emerald-300" />
            PC builds, IT hulp, Windows support en premium webdesign
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">
            <span className="block leading-[1.12]">Stel de juiste pc samen.</span>
            <span className="mt-3 block pb-3 leading-[1.28] bg-gradient-to-r from-white via-emerald-200 to-purple-300 bg-clip-text text-transparent">
              Northern Studio regelt de rest.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
            Northern Studio helpt mensen met custom pc's, hardwareadvies, volledige IT hulp, Windows-problemen,
            premium websites en logo design. Duidelijk advies, praktische oplossingen en een professionele aanpak.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href="/nl/pc-builder">
              Start de PC Builder
              <ArrowRight className="ml-2 h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton href="/nl/contact">Neem contact op</SecondaryButton>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionCard className="overflow-hidden border-white/12 bg-white/[0.065] shadow-[0_0_60px_rgba(168,85,247,0.10)]">
            <div className="border-b border-white/10 px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-white/50">PC Builder</p>
                  <h2 className="mt-1 text-xl font-medium">Begin met het plannen van je pc</h2>
                </div>
                <div className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200">
                  Snel, duidelijk en zonder giswerk
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-6 md:grid-cols-2">
              {[
                ["Kies je onderdelen", "CPU, GPU, RAM, opslag, moederbord, PSU, case en koeler"],
                ["Controleer compatibiliteit", "Voorkom fouten zoals verkeerde sockets of een te zwakke voeding"],
                ["Schat stroomverbruik", "Krijg snel een idee van hoeveel vermogen je systeem nodig heeft"],
                ["Krijg prijsinzicht", "Zie duidelijk wat de build ongeveer kost voor je beslist wat je doet"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-sm text-white/45">{label}</p>
                  <p className="mt-2 leading-7 text-white/90">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-5 sm:flex-row">
              <PrimaryButton href="/nl/pc-builder">Koop zelf je onderdelen</PrimaryButton>
              <SecondaryButton href="/nl/contact">Laat Northern Studio bouwen</SecondaryButton>
            </div>
          </SectionCard>

          <div className="grid gap-6">
            <SectionCard className="bg-white/[0.06]">
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-emerald-300" />
                  <h3 className="text-lg font-medium">Hoe het bouwproces werkt</h3>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    "Stel je pc samen met de configurator",
                    "Verstuur je aanvraag",
                    "Ontvang een duidelijke offerte",
                    "Betaal vóór de assemblage",
                    "Onderdelen worden besteld, geassembleerd en geleverd",
                  ].map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 text-sm text-purple-200">
                        {index + 1}
                      </div>
                      <p className="pt-1 text-sm leading-6 text-white/75">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>

            <SectionCard className="bg-white/[0.06]">
              <div className="p-6">
                <p className="text-sm text-white/50">Beleid</p>
                <h3 className="mt-2 text-xl font-medium">Duidelijk en veilig geregeld</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  Volledige betaling is vereist vóór de assemblage. Zo blijven prijzen duidelijk, vermijd je
                  voorraadrisico en blijft het proces eerlijk en overzichtelijk.
                </p>
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-8 backdrop-blur-xl md:px-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">Voor wie</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Northern Studio helpt zowel particulieren als bedrijven
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {audiences.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
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
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div>
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">Diensten</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Alles wat Northern Studio voor je kan doen
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <a key={service.title} href={service.href} className="group block">
                  <SectionCard className="h-full transition-all duration-300 hover:border-emerald-300/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-purple-500/10">
                    <div className="p-6">
                      <div className="inline-flex rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3 text-purple-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-medium">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/65">{service.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-200">
                        Bekijk
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </SectionCard>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <SectionCard>
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">Waarom Northern Studio</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Waarom mensen voor Northern Studio kiezen
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4"
                  >
                    <div className="flex items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 p-1 text-purple-200">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-6 text-white/75">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          <SectionCard className="bg-gradient-to-br from-purple-400/10 to-white/5">
            <div className="flex h-full flex-col p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">Klaar om te starten?</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Vertel wat je zoekt, dan denken we met je mee
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
                Of je nu een gaming pc, workstation, upgrade, Windows-hulp, website of logo nodig hebt:
                Northern Studio helpt je graag verder met duidelijk advies en een concrete volgende stap.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm text-white/50">Waarmee kunnen we helpen?</p>
                <p className="mt-2 text-base leading-7 text-white/85">
                  Nieuwe pc samenstellen, onderdelen kiezen, compatibiliteit controleren, problemen oplossen,
                  Windows opnieuw installeren, een volledige build laten uitvoeren of je bedrijf online sterker
                  neerzetten.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/nl/pc-builder">Start je build</PrimaryButton>
                <a
                  href="mailto:info@northernstudio.be"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contacteer Northern Studio
                </a>
              </div>
            </div>
          </SectionCard>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-10 text-center text-sm text-white/50 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a href="/nl/contact" className="transition hover:text-white">
            Contact
          </a>
          <a href="/nl/privacy" className="transition hover:text-white">
            Privacybeleid
          </a>
          <a href="/nl/voorwaarden" className="transition hover:text-white">
            Algemene voorwaarden
          </a>
        </div>
        <p className="mt-6">© {new Date().getFullYear()} Northern Studio. Alle rechten voorbehouden.</p>
        <p className="mt-2">Northern Studio™</p>
      </footer>
    </main>
  );
}
