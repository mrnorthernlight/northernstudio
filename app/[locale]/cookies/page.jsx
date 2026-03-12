"use client";

import { use } from "react";
import { usePathname } from "next/navigation";

const content = {
  nl: {
    title: "Cookiebeleid",
    intro:
      "Deze website gebruikt cookies om de werking van de site te verbeteren en om inzicht te krijgen in gebruikspatronen. Dit beleid legt uit welke cookies gebruikt worden en hoe je je voorkeuren kan beheren.",
    sections: [
      {
        title: "Wat zijn cookies",
        text:
          "Cookies zijn kleine tekstbestanden die door een website op je toestel worden opgeslagen. Ze helpen een website correct functioneren en kunnen ook informatie verzamelen over hoe bezoekers de site gebruiken.",
      },
      {
        title: "Essentiële cookies",
        text:
          "Essentiële cookies zijn nodig voor de basisfunctionaliteit van de website, zoals navigatie, beveiliging en taalinstellingen. Deze cookies kunnen niet worden uitgeschakeld.",
      },
      {
        title: "Analytische cookies",
        text:
          "Analytische cookies helpen Northern Studio begrijpen hoe bezoekers de website gebruiken. Deze gegevens worden alleen verzameld nadat je toestemming hebt gegeven via de cookie banner.",
      },
      {
        title: "Cookies beheren",
        text:
          "Je kan cookies weigeren of verwijderen via je browserinstellingen. Daarnaast kan je je voorkeuren aanpassen via de cookie banner op deze website.",
      },
      {
        title: "Contact",
        text:
          "Voor vragen over cookies of gegevensverwerking kan je contact opnemen via info@northernstudio.be.",
      },
    ],
  },
  en: {
    title: "Cookie Policy",
    intro:
      "This website uses cookies to improve functionality and understand how visitors use the site. This policy explains which cookies may be used and how you can manage your preferences.",
    sections: [
      {
        title: "What are cookies",
        text:
          "Cookies are small text files stored on your device by a website. They help a website function correctly and may also collect information about how visitors use the site.",
      },
      {
        title: "Essential cookies",
        text:
          "Essential cookies are required for basic website functionality such as navigation, security and language settings. These cookies cannot be disabled.",
      },
      {
        title: "Analytics cookies",
        text:
          "Analytics cookies help Northern Studio understand how visitors use the website. These cookies are only activated after you provide consent through the cookie banner.",
      },
      {
        title: "Managing cookies",
        text:
          "You can refuse or delete cookies through your browser settings. You can also adjust your preferences through the cookie banner.",
      },
      {
        title: "Contact",
        text:
          "For questions about cookies or data processing please contact info@northernstudio.be.",
      },
    ],
  },
};

export default function CookiePage({ params }) {
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
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <div className="mb-10 flex justify-end">
          <div className="rounded-full bg-white/5 p-1">
            <a
              href={switchLocale("nl")}
              className={`px-3 py-1 text-sm ${
                lang === "nl" ? "bg-white text-black rounded-full" : ""
              }`}
            >
              NL
            </a>
            <a
              href={switchLocale("en")}
              className={`px-3 py-1 text-sm ${
                lang === "en" ? "bg-white text-black rounded-full" : ""
              }`}
            >
              EN
            </a>
          </div>
        </div>

        <h1 className="text-4xl font-semibold mb-6">{t.title}</h1>
        <p className="text-white/70 mb-12">{t.intro}</p>

        <div className="space-y-10">
          {t.sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
              <p className="text-white/70">{s.text}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}