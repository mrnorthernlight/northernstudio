"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Check,
  Sparkles,
  Shield,
  Gauge,
  ChevronDown,
  MonitorSmartphone,
  PenTool,
  Mail,
  Phone,
  MapPin,
  Globe,
  FileText,
  Star,
  Rocket,
} from "lucide-react";

const BRAND = {
  name: "Northern Studio",
  domain: "northernstudio.be",
  email: "info@northernstudio.be",
  phone: "+32 479 10 42 89",
  location: "Belgium",
};

const accentGradients = [
  "from-cyan-400/20 via-sky-400/10 to-transparent",
  "from-fuchsia-400/20 via-violet-400/10 to-transparent",
  "from-emerald-400/20 via-teal-400/10 to-transparent",
  "from-amber-300/20 via-orange-300/10 to-transparent",
];

const BrandMark = () => (
  <div className="flex items-center gap-3">
    <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/15 bg-black/40 shadow-[0_10px_35px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#a78bfa,#fbbf24,#22d3ee)] opacity-70" />
      <div className="absolute inset-[2px] flex items-center justify-center rounded-[10px] bg-neutral-950">
        <svg
          viewBox="0 0 100 100"
          className="h-6 w-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20 72V28L50 60L80 28V72"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
    <div className="leading-none">
      <div className="text-sm font-semibold tracking-[0.18em] text-white">
        NORTHERN
      </div>
      <div className="text-[10px] uppercase tracking-[0.35em] text-white/50">
        STUDIO
      </div>
    </div>
  </div>
);

const HeroVisual = () => (
  <svg
    viewBox="0 0 920 760"
    className="h-full w-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="10"
      y="10"
      width="900"
      height="740"
      rx="42"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.12)"
    />
    <rect
      x="42"
      y="42"
      width="836"
      height="54"
      rx="20"
      fill="rgba(255,255,255,0.05)"
      stroke="rgba(255,255,255,0.08)"
    />
    <circle cx="72" cy="69" r="6" fill="rgba(255,255,255,0.25)" />
    <circle cx="92" cy="69" r="6" fill="rgba(255,255,255,0.16)" />
    <circle cx="112" cy="69" r="6" fill="rgba(255,255,255,0.1)" />
    <rect
      x="42"
      y="124"
      width="522"
      height="252"
      rx="30"
      fill="url(#panel1)"
      stroke="rgba(255,255,255,0.1)"
    />
    <rect
      x="590"
      y="124"
      width="288"
      height="252"
      rx="30"
      fill="rgba(255,255,255,0.05)"
      stroke="rgba(255,255,255,0.1)"
    />
    <rect
      x="42"
      y="400"
      width="408"
      height="308"
      rx="30"
      fill="rgba(255,255,255,0.05)"
      stroke="rgba(255,255,255,0.1)"
    />
    <rect
      x="474"
      y="400"
      width="404"
      height="308"
      rx="30"
      fill="rgba(255,255,255,0.05)"
      stroke="rgba(255,255,255,0.1)"
    />
    <rect x="72" y="156" width="202" height="18" rx="9" fill="rgba(255,255,255,0.18)" />
    <rect x="72" y="188" width="156" height="10" rx="5" fill="rgba(255,255,255,0.08)" />
    <rect x="72" y="238" width="462" height="84" rx="24" fill="rgba(10,10,15,0.22)" />
    <path
      d="M102 295C164 244 233 218 309 218C408 218 467 286 534 271"
      stroke="url(#line1)"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <circle cx="309" cy="218" r="7" fill="white" />
    <circle cx="534" cy="271" r="7" fill="white" />
    <rect x="618" y="156" width="116" height="12" rx="6" fill="rgba(255,255,255,0.18)" />
    <rect x="618" y="182" width="86" height="10" rx="5" fill="rgba(255,255,255,0.08)" />
    <circle cx="733" cy="260" r="72" fill="url(#orb)" opacity="0.95" />
    <circle cx="733" cy="260" r="40" fill="rgba(8,9,11,0.85)" />
    <rect x="626" y="332" width="168" height="12" rx="6" fill="rgba(255,255,255,0.08)" />
    <rect x="72" y="432" width="142" height="14" rx="7" fill="rgba(255,255,255,0.18)" />
    <rect x="72" y="458" width="96" height="10" rx="5" fill="rgba(255,255,255,0.08)" />
    <rect x="72" y="506" width="106" height="146" rx="20" fill="rgba(255,255,255,0.12)" />
    <rect x="192" y="478" width="106" height="174" rx="20" fill="rgba(255,255,255,0.18)" />
    <rect x="312" y="530" width="106" height="122" rx="20" fill="rgba(255,255,255,0.08)" />
    <rect x="504" y="432" width="144" height="14" rx="7" fill="rgba(255,255,255,0.18)" />
    <rect x="504" y="458" width="104" height="10" rx="5" fill="rgba(255,255,255,0.08)" />
    <rect x="504" y="504" width="344" height="36" rx="18" fill="rgba(255,255,255,0.06)" />
    <rect x="504" y="556" width="312" height="18" rx="9" fill="rgba(255,255,255,0.08)" />
    <rect x="504" y="590" width="264" height="18" rx="9" fill="rgba(255,255,255,0.08)" />
    <rect x="504" y="624" width="186" height="18" rx="9" fill="rgba(255,255,255,0.08)" />
    <defs>
      <linearGradient id="panel1" x1="42" y1="124" x2="564" y2="376" gradientUnits="userSpaceOnUse">
        <stop stopColor="rgba(255,255,255,0.12)" />
        <stop offset="1" stopColor="rgba(255,255,255,0.04)" />
      </linearGradient>
      <linearGradient id="line1" x1="102" y1="218" x2="534" y2="271" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#67e8f9" />
      </linearGradient>
      <radialGradient
        id="orb"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(733 260) rotate(90) scale(72)"
      >
        <stop stopColor="#c084fc" />
        <stop offset="1" stopColor="#22d3ee" />
      </radialGradient>
    </defs>
  </svg>
);

const DeviceStack = () => (
  <div className="relative mx-auto h-[460px] w-full max-w-[560px]">
    <div className="absolute left-0 top-10 w-[76%] rotate-[-6deg] overflow-hidden rounded-[1.8rem] border border-white/10 bg-neutral-900/90 p-3 shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
      <div className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-2">
        <HeroVisual />
      </div>
    </div>
    <div className="absolute bottom-0 right-0 w-[34%] rotate-[8deg] overflow-hidden rounded-[2.2rem] border border-white/10 bg-neutral-900/95 p-2 shadow-[0_25px_90px_rgba(0,0,0,0.5)]">
      <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-2">
        <svg
          viewBox="0 0 320 640"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="6"
            y="6"
            width="308"
            height="628"
            rx="40"
            fill="rgba(9,9,11,0.95)"
            stroke="rgba(255,255,255,0.12)"
          />
          <rect x="108" y="24" width="104" height="16" rx="8" fill="rgba(255,255,255,0.08)" />
          <rect x="26" y="66" width="268" height="184" rx="28" fill="url(#m1)" />
          <rect x="26" y="272" width="170" height="18" rx="9" fill="rgba(255,255,255,0.18)" />
          <rect x="26" y="302" width="118" height="12" rx="6" fill="rgba(255,255,255,0.08)" />
          <rect
            x="26"
            y="346"
            width="268"
            height="102"
            rx="24"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.08)"
          />
          <rect
            x="26"
            y="470"
            width="128"
            height="120"
            rx="24"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.08)"
          />
          <rect
            x="166"
            y="470"
            width="128"
            height="120"
            rx="24"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.08)"
          />
          <defs>
            <linearGradient id="m1" x1="26" y1="66" x2="294" y2="250" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1f2937" />
              <stop offset="0.55" stopColor="#374151" />
              <stop offset="1" stopColor="#0f172a" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
);

const services = [
  {
    icon: <PenTool className="h-5 w-5" />,
    title: "Custom UI & Brand Presence",
    text: "Bespoke websites that feel intentional, premium, and memorable instead of looking like a mildly refurbished template carcass.",
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5" />,
    title: "Responsive Front-End Development",
    text: "Desktop, tablet, and mobile layouts built as one coherent system so the experience feels sharp on every screen size.",
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Conversion-Focused Structure",
    text: "Messaging, trust signals, section order, and calls-to-action designed to increase confidence and generate enquiries.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Professional Revamps",
    text: "Outdated websites rebuilt into modern assets that support higher pricing, stronger trust, and better first impressions.",
  },
];

const caseStudies = [
  {
    title: "Consultant Authority Site",
    type: "Personal brand / lead generation",
    result: "Sharper positioning and more qualified enquiries",
    text: "A premium one-person business site built to make specialist expertise feel established, expensive, and easy to trust.",
  },
  {
    title: "Service Business Redesign",
    type: "Local company / credibility upgrade",
    result: "A stronger first impression across desktop and mobile",
    text: "A full redesign for a company with a dated web presence that was quietly losing trust before the first contact even happened.",
  },
  {
    title: "Studio Launch Website",
    type: "Creative business / positioning",
    result: "Distinct visual identity and premium service framing",
    text: "A launch site designed to attract better clients by showing strong taste, clarity, and a more refined digital presence.",
  },
];

const process = [
  [
    "01",
    "Discovery",
    "We define your offer, audience, pages, and the practical business goal of the site so the project has a spine.",
  ],
  [
    "02",
    "Direction",
    "We shape the design language, page hierarchy, tone, and interface decisions before the build starts sprinting into the woods.",
  ],
  [
    "03",
    "Build",
    "The website is developed with responsive layouts, polished sections, accessibility-minded structure, and production-ready components.",
  ],
  [
    "04",
    "Refine & Launch",
    "We test, improve, and prepare the site for deployment so it behaves like a real business asset rather than a decorative object.",
  ],
];

const pricing = [
  {
    name: "Signature",
    price: "from €2.5k",
    text: "For individuals and smaller businesses that need a premium web presence without a huge footprint.",
    bullets: ["Custom homepage", "Responsive design", "Core sections", "Contact conversion flow"],
  },
  {
    name: "Professional",
    price: "from €5k",
    text: "For established professionals and growing businesses that need stronger positioning, more depth, and sharper design.",
    bullets: ["Multi-page website", "Advanced visual system", "Custom section architecture", "Testing and refinement"],
    featured: true,
  },
  {
    name: "Flagship",
    price: "€10k+",
    text: "For brands and companies that want a high-end website with premium storytelling, custom UI, and stronger perceived value.",
    bullets: ["High-end custom UI", "Rich page systems", "Launch-ready handoff", "Priority refinement"],
  },
];

const testimonials = [
  {
    quote: "The site made us look like a more serious company overnight. The conversations changed immediately.",
    name: "Adrian Vale",
    role: "Consultant",
  },
  {
    quote: "Clean, premium, and much more persuasive than what we had before. It finally matched the quality of our service.",
    name: "Lena Mercier",
    role: "Interior Studio Founder",
  },
  {
    quote: "A redesign with actual taste and structure. It looked modern without becoming shiny nonsense.",
    name: "Jonas Verbeek",
    role: "Business Owner",
  },
];

const faqs = [
  [
    "Who is this for?",
    "Professionals, service businesses, consultants, creatives, and companies that need a sharper digital presence and better first impression.",
  ],
  [
    "Do you redesign existing websites?",
    "Yes. Redesigning outdated websites into modern, premium, higher-trust experiences is one of the main use cases.",
  ],
  [
    "Can this go live on my own domain?",
    "Yes. Once hosting and domain settings are connected, the finished site can be deployed under your domain and refined after launch.",
  ],
  [
    "Is the build custom or template-based?",
    "Custom. The structure, visual language, and positioning are designed around the business rather than shoved into a pre-chewed theme.",
  ],
];

export default function NorthernStudioSite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  });

  const credibility = useMemo(
    () => [
      "Premium custom websites",
      "Built for professionals and businesses",
      "Responsive, accessible, modern",
      "Positioned to generate trust and leads",
    ],
    []
  );

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.details.trim()) nextErrors.details = "Please add a few project details.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-neutral-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-neutral-950"
      >
        Skip to content
      </a>

      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.08),rgba(192,132,252,0.08),rgba(251,191,36,0.06),rgba(16,185,129,0.06),rgba(34,211,238,0.08))] opacity-70" />
        <div className="absolute left-[-12rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-[8rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[20%] h-[30rem] w-[30rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_26%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-40">
          <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_80px_rgba(0,0,0,0.35)]">
            <a
              href="#hero"
              className="rounded-xl transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <BrandMark />
            </a>

            <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex" aria-label="Primary">
              <a href="#services" className="transition hover:text-white focus-visible:text-white">
                Services
              </a>
              <a href="#work" className="transition hover:text-white focus-visible:text-white">
                Work
              </a>
              <a href="#process" className="transition hover:text-white focus-visible:text-white">
                Process
              </a>
              <a href="#pricing" className="transition hover:text-white focus-visible:text-white">
                Pricing
              </a>
              <a href="#contact" className="transition hover:text-white focus-visible:text-white">
                Contact
              </a>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
                <Link
                  href="/"
                  className="rounded-full px-3 py-1 text-xs font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  NL
                </Link>
                <Link
                  href="/en"
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-950"
                >
                  ENG
                </Link>
              </div>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Start your project
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen && (
            <div
              id="mobile-menu"
              className="mt-3 rounded-[1.5rem] border border-white/10 bg-neutral-900/90 p-4 backdrop-blur-xl md:hidden"
            >
              <div className="grid gap-2 text-sm text-white/75">
                {[
                  ["#services", "Services"],
                  ["#work", "Work"],
                  ["#process", "Process"],
                  ["#pricing", "Pricing"],
                  ["#contact", "Contact"],
                ].map(([href, label]) => (
                  <a
                    key={label}
                    href={href}
                    className="rounded-xl px-3 py-2 hover:bg-white/5 focus-visible:bg-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <div className="mt-2 flex items-center gap-2 px-3 py-2">
                  <Link
                    href="/"
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/70"
                  >
                    NL
                  </Link>
                  <Link
                    href="/en"
                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-950"
                  >
                    ENG
                  </Link>
                </div>
              </div>
            </div>
          )}
        </header>

        <main id="main-content">
          <section
            id="hero"
            className="relative grid min-h-[96vh] items-center gap-16 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24"
          >
            <div className="absolute left-0 top-[8rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[120px]" />
            <div className="absolute right-[8%] top-[16rem] -z-10 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-[110px]" />

            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/60 backdrop-blur-xl"
              >
                <Sparkles className="h-3.5 w-3.5" /> premium web design · custom development ·
                strategic revamps
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.5rem]"
              >
                Websites that{" "}
                <span className="bg-[linear-gradient(135deg,#67e8f9_0%,#ffffff_32%,#c084fc_68%,#fbbf24_100%)] bg-clip-text text-transparent">
                  command attention
                </span>{" "}
                and make your business feel worth hiring.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.12 }}
                className="mt-8 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl"
              >
                Northern Studio builds custom websites for professionals, personal brands, and
                companies that want a stronger first impression, clearer positioning, and a digital
                presence with actual gravity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.78, delay: 0.18 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-6 py-3.5 text-sm font-medium text-neutral-950 transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  Book your website{" "}
                  <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  View example work
                </a>
              </motion.div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {credibility.map((item, index) => (
                  <div
                    key={item}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/7 px-4 py-4 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        accentGradients[index % accentGradients.length]
                      } opacity-80`}
                      aria-hidden="true"
                    />
                    <div className="relative rounded-full border border-white/10 bg-white/10 p-1.5">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div className="relative text-sm text-white/86">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.82, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/8 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                <div className="mb-4 flex items-center justify-between gap-4 rounded-[1.4rem] border border-white/10 bg-black/20 px-4 py-3">
                  <div>
                    <div className="text-sm font-medium text-white">High-end business website system</div>
                    <div className="text-xs uppercase tracking-[0.24em] text-white/40">
                      desktop · mobile · conversion-led
                    </div>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                    production-minded
                  </div>
                </div>
                <DeviceStack />
              </div>
            </motion.div>
          </section>

          <section className="grid gap-4 border-y border-white/10 py-8 text-sm text-white/55 md:grid-cols-4">
            <p className="uppercase tracking-[0.3em]">what we do</p>
            <p>Build premium websites</p>
            <p>Revamp outdated ones</p>
            <p>Help businesses look sharper</p>
          </section>

          <section id="services" className="py-24">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-white/45">Services</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Websites designed to sell your credibility before you even speak.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/65">
                This is not about merely having a website. It is about looking established,
                trustworthy, and professionally expensive in a way that helps people choose you.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.11]"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      accentGradients[index % accentGradients.length]
                    } opacity-90`}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/10 blur-3xl transition group-hover:bg-white/15"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-lg shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-medium tracking-[-0.03em] text-white">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/72">{service.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="py-6">
            <div className="mb-6 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(192,132,252,0.10),rgba(251,191,36,0.08))] p-[1px]">
              <div className="rounded-[calc(2rem-1px)] bg-neutral-950/85 px-6 py-5 backdrop-blur-xl sm:px-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-white/45">
                      First impression matters
                    </div>
                    <div className="mt-1 text-lg font-medium text-white">
                      Most visitors decide how credible you are in seconds. Your website should hit
                      harder than that.
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    Make mine stand out
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="py-24">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-white/45">Example work</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Concept case studies built to feel commercially real.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/65">
                Until the first live client projects land, strong concept work carries the proof
                burden. The trick is making it look grounded instead of imaginary fairy dust.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {caseStudies.map((item, index) => (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 p-6 backdrop-blur-xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      accentGradients[index % accentGradients.length]
                    } opacity-60`}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="text-xs uppercase tracking-[0.28em] text-white/45">{item.type}</div>
                    <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/72">{item.text}</p>
                    <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                      <div className="text-xs uppercase tracking-[0.24em] text-white/40">
                        What improved
                      </div>
                      <div className="mt-2 text-sm text-white/82">{item.result}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="process" className="py-24">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">Process</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  A clean workflow from concept to launch.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/65">
                  The process is collaborative but structured. You bring the business context.
                  Northern Studio shapes the digital presence. Then we refine until it feels
                  commercially sharp.
                </p>
              </div>
              <div className="grid gap-4">
                {process.map(([num, title, text]) => (
                  <article key={num} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="text-sm uppercase tracking-[0.28em] text-white/40">{num}</div>
                      <div>
                        <h3 className="text-2xl font-medium tracking-[-0.03em]">{title}</h3>
                        <p className="mt-3 leading-7 text-white/65">{text}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="pricing" className="py-24">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-white/45">Packages</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Positioned for real clients, not bargain hunters with a butterfly net.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/65">
                Clear pricing anchors help the right buyers self-select. The goal is not to be the
                cheapest. The goal is to look worth it.
              </p>
            </div>

            <div className="mt-12 grid gap-6 xl:grid-cols-3">
              {pricing.map((tier, index) => (
                <article
                  key={tier.name}
                  className={`relative overflow-hidden rounded-[2rem] border p-6 backdrop-blur-xl ${
                    tier.featured
                      ? "border-white/20 bg-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                      : "border-white/10 bg-white/7"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      accentGradients[index % accentGradients.length]
                    } opacity-80`}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm uppercase tracking-[0.28em] text-white/50">
                          {tier.name}
                        </div>
                        <div className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">
                          {tier.price}
                        </div>
                      </div>
                      {tier.featured && (
                        <div className="rounded-full border border-white/10 bg-white px-3 py-1 text-xs font-medium text-neutral-950">
                          Most popular
                        </div>
                      )}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-white/72">{tier.text}</p>
                    <div className="mt-6 space-y-3">
                      {tier.bullets.map((item) => (
                        <div key={item} className="flex items-center gap-3 text-sm text-white/82">
                          <div className="rounded-full border border-white/10 bg-white/10 p-1">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                        tier.featured
                          ? "bg-white text-neutral-950 hover:scale-[1.01]"
                          : "border border-white/10 bg-black/20 text-white hover:bg-white/10"
                      }`}
                    >
                      Enquire now
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="py-8">
            <div className="mb-8 text-center">
              <div className="text-sm uppercase tracking-[0.28em] text-white/45">Social proof</div>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Built to attract the kind of clients who notice quality.
              </h3>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 p-6 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/6 to-transparent" aria-hidden="true" />
                  <div className="relative">
                    <div className="mb-6 flex items-center gap-1 text-white/75" aria-label="5 star rating">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    <p className="text-base leading-8 text-white/75">“{item.quote}”</p>
                    <div className="mt-6 border-t border-white/10 pt-4">
                      <div className="font-medium text-white">{item.name}</div>
                      <div className="text-sm text-white/50">{item.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="py-24">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">Why clients buy</p>
                <div className="mt-6 space-y-4">
                  {[
                    "Their current site looks outdated or generic",
                    "They want to charge more and need the website to support that",
                    "They need a stronger first impression for serious buyers",
                    "They want a redesign that feels custom, modern, and credible",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-black/20 p-4 text-white/70"
                    >
                      <div className="mt-0.5 rounded-full border border-white/10 bg-white/10 p-1">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="leading-7">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">FAQ</p>
                <div className="mt-6 space-y-3">
                  {faqs.map(([q, a], idx) => (
                    <div key={q} className="rounded-[1.5rem] border border-white/10 bg-black/20">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                        aria-expanded={openFaq === idx}
                      >
                        <span className="font-medium text-white">{q}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-white/50 transition ${
                            openFaq === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === idx && (
                        <div className="px-5 pb-5 text-sm leading-7 text-white/60">{a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="pb-10 pt-8">
            <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(192,132,252,0.10),rgba(255,255,255,0.04),rgba(251,191,36,0.08))] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-white/45">Contact</p>
                  <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                    Let’s build the website people remember.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                    Whether you need a new premium website or a redesign of something ancient and
                    mildly tragic, the aim is the same: create a digital presence that makes your
                    business feel worth paying attention to.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="flex items-center gap-3 rounded-[1.4rem] border border-white/10 bg-black/20 p-4 text-white/80 transition hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      <Mail className="h-4 w-4" /> {BRAND.email}
                    </a>
                    <a
                      href="tel:+32479104289"
                      className="flex items-center gap-3 rounded-[1.4rem] border border-white/10 bg-black/20 p-4 text-white/80 transition hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      <Phone className="h-4 w-4" /> {BRAND.phone}
                    </a>
                    <div className="flex items-center gap-3 rounded-[1.4rem] border border-white/10 bg-black/20 p-4 text-white/80">
                      <MapPin className="h-4 w-4" /> {BRAND.location}
                    </div>
                    <a
                      href={`https://${BRAND.domain}`}
                      className="flex items-center gap-3 rounded-[1.4rem] border border-white/10 bg-black/20 p-4 text-white/80 transition hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      <Globe className="h-4 w-4" /> {BRAND.domain}
                    </a>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Project enquiry form">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm text-white/65">
                          Name
                        </label>
                        <input
                          id="name"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/25"
                          placeholder="Your name"
                        />
                        {errors.name && <p id="name-error" className="mt-2 text-sm text-amber-200">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm text-white/65">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/25"
                          placeholder="you@company.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-2 text-sm text-amber-200">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm text-white/65">
                          Business / Brand
                        </label>
                        <input
                          id="company"
                          value={form.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/25"
                          placeholder="Business name"
                        />
                      </div>
                      <div>
                        <label htmlFor="details" className="mb-2 block text-sm text-white/65">
                          What do you need?
                        </label>
                        <textarea
                          id="details"
                          value={form.details}
                          onChange={(e) => handleChange("details", e.target.value)}
                          aria-invalid={!!errors.details}
                          aria-describedby={errors.details ? "details-error" : undefined}
                          rows={5}
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/25"
                          placeholder="New site, redesign, pages needed, style, goals..."
                        />
                        {errors.details && (
                          <p id="details-error" className="mt-2 text-sm text-amber-200">
                            {errors.details}
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3.5 text-sm font-medium text-neutral-950 transition hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                      >
                        Send project request
                      </button>
                      <p className="text-xs leading-6 text-white/45">
                        By contacting Northern Studio, you agree to be contacted back regarding your enquiry. See our{" "}
                        <Link href="/en/privacy-policy" className="underline underline-offset-4 hover:text-white">
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/en/terms" className="underline underline-offset-4 hover:text-white">
                          Terms
                        </Link>
                        .
                      </p>
                    </form>
                  ) : (
                    <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-6 text-emerald-100">
                      <div className="text-lg font-medium">Project request captured.</div>
                      <p className="mt-2 text-sm leading-7 text-emerald-50/85">
                        The interface flow is working. In production, this form should connect to
                        email, Formspree, Resend, or a CRM so your leads do not vanish into the digital bog.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <footer className="border-t border-white/10 py-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <BrandMark />
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
                  Northern Studio creates premium custom websites for professionals,
                  individuals, and businesses that want to look sharper online and convert more
                  trust into enquiries.
                </p>
              </div>

              <div className="grid gap-3 text-sm text-white/55 sm:grid-cols-2 lg:text-right">
                <a href="#services" className="transition hover:text-white">
                  Services
                </a>
                <a href="#work" className="transition hover:text-white">
                  Work
                </a>
                <a href="#pricing" className="transition hover:text-white">
                  Pricing
                </a>
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
                <Link
                  href="/en/privacy-policy"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <FileText className="h-4 w-4" /> Privacy Policy
                </Link>
                <Link
                  href="/en/terms"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <FileText className="h-4 w-4" /> Terms
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
              <div>© 2026 Northern Studio</div>
              <div className="flex items-center gap-2">
                <Rocket className="h-3.5 w-3.5" /> designed for real-world launch
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}