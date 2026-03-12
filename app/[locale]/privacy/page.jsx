"use client";

import { use } from "react";
import { usePathname } from "next/navigation";
import { ShieldCheck, Sparkles, Mail, Database, Lock } from "lucide-react";

const content = {
nl: {
title: "Privacybeleid",
intro:
"Dit privacybeleid beschrijft hoe Northern Studio persoonsgegevens verwerkt wanneer je deze website gebruikt of contact opneemt.",
sections: [
{
title: "Website operator",
text: `Northern Studio is een onafhankelijke technologie studio gevestigd in België.

Contact: info@northernstudio.be

Northern Studio bevindt zich momenteel in een ontwikkelingsfase. Formele bedrijfsregistratiegegevens zoals ondernemingsnummer en btw-nummer worden toegevoegd zodra deze beschikbaar zijn.`,
},
{
title: "Welke gegevens kunnen worden verwerkt",
text: `Northern Studio kan gegevens verwerken die je vrijwillig verstrekt zoals naam, e-mailadres, berichtinhoud en technische informatie die nodig is om vragen te beantwoorden of diensten te analyseren.`,
},
{
title: "Waarom deze gegevens worden verwerkt",
text: `Gegevens worden uitsluitend verwerkt voor praktische doeleinden zoals het beantwoorden van vragen, voorbereiden van offertes, technische analyse van systemen of communicatie rond diensten.`,
},
{
title: "Gegevensdeling",
text: `Northern Studio verkoopt geen persoonsgegevens. Gegevens kunnen enkel worden verwerkt door technische dienstverleners zoals hosting- of e-mailproviders die noodzakelijk zijn voor de werking van de website.`,
},
{
title: "Beveiliging",
text: `Er worden redelijke technische en organisatorische maatregelen genomen om persoonsgegevens te beschermen tegen verlies, misbruik of ongeautoriseerde toegang.`,
},
{
title: "Bewaartermijn",
text: `Persoonsgegevens worden niet langer bewaard dan nodig is voor het doel waarvoor ze werden verzameld.`,
},
{
title: "Rechten van gebruikers",
text: `Volgens de GDPR heb je het recht om inzage te vragen in je gegevens, correcties te laten uitvoeren of verwijdering te vragen. Hiervoor kan je contact opnemen via info@northernstudio.be.`,
},
{
title: "Cookies",
text: `Deze website kan beperkte technische cookies gebruiken die nodig zijn voor de werking van de site. Indien analytische of andere cookies worden gebruikt zal hiervoor toestemming gevraagd worden.`,
},
],
footer: "Laatste update",
},
en: {
title: "Privacy Policy",
intro:
"This privacy policy explains how Northern Studio processes personal data when you use this website or contact us.",
sections: [
{
title: "Website operator",
text: `Northern Studio is an independent technology studio operating from Belgium.

Contact: info@northernstudio.be

Northern Studio is currently in development. Formal business registration details such as company number and VAT number will be added once available.`,
},
{
title: "What data may be processed",
text: `Northern Studio may process information voluntarily provided by users such as name, email address, message content and technical information needed to analyze requests.`,
},
{
title: "Purpose of processing",
text: `Data is processed only for practical purposes such as answering questions, preparing quotes, analyzing technical problems or communicating about services.`,
},
{
title: "Data sharing",
text: `Northern Studio does not sell personal data. Data may only be processed by essential technical providers such as hosting or email services required for the operation of the website.`,
},
{
title: "Security",
text: `Reasonable technical and organizational measures are used to protect personal data from loss or unauthorized access.`,
},
{
title: "Retention",
text: `Personal data is not stored longer than necessary for the purpose it was collected for.`,
},
{
title: "User rights",
text: `Under the GDPR you may request access, correction or deletion of your personal data by contacting info@northernstudio.be.`,
},
{
title: "Cookies",
text: `This website may use limited technical cookies required for functionality. If analytics or other cookies are used, consent will be requested.`,
},
],
footer: "Last updated",
},
};

export default function PrivacyPage({ params }) {
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
<a href={switchLocale("nl")} className={`px-3 py-1 text-sm ${lang==="nl"?"bg-white text-black rounded-full":""}`}>NL</a>
<a href={switchLocale("en")} className={`px-3 py-1 text-sm ${lang==="en"?"bg-white text-black rounded-full":""}`}>EN</a>
</div>
</div>

<h1 className="text-4xl font-semibold mb-6">{t.title}</h1>

<p className="text-white/70 mb-10">{t.intro}</p>

<div className="space-y-10">
{t.sections.map((s,i)=>(
<div key={i}>
<h2 className="text-xl font-semibold mb-2">{s.title}</h2>
<p className="text-white/70 whitespace-pre-line">{s.text}</p>
</div>
))}
</div>

<div className="mt-20 text-sm text-white/50">
{t.footer}: {new Date().toLocaleDateString()}
</div>

</div>
</main>
);
}