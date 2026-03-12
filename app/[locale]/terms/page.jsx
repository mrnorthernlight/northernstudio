"use client";

import { use } from "react";
import { usePathname } from "next/navigation";

const content = {
nl:{
title:"Algemene voorwaarden",
sections:[
{
title:"1. Website",
text:`Northern Studio is een onafhankelijke technologie studio die hardwareadvies, IT ondersteuning, custom PC builds en digitale diensten aanbiedt.

Deze website fungeert als informatieplatform en aanvraaginterface.`,
},
{
title:"2. Bedrijfsstatus",
text:`Northern Studio bevindt zich momenteel in een ontwikkelingsfase. Formele bedrijfsregistratiegegevens worden toegevoegd zodra deze beschikbaar zijn.

Tot dat moment worden commerciële transacties pas definitief na expliciete overeenkomst.`,
},
{
title:"3. Diensten",
text:`Northern Studio kan diensten aanbieden zoals:

• Custom PC builds
• IT troubleshooting en ondersteuning
• Hardwareadvies
• Webdesign en digitale diensten

Specifieke afspraken worden altijd vooraf bevestigd.`,
},
{
title:"4. Offertes",
text:`Alle prijsopgaven of configuraties via de website of PC Builder zijn indicatief totdat ze officieel bevestigd worden.`,
},
{
title:"5. Betalingen",
text:`Betalingen worden enkel gevraagd wanneer een overeenkomst tot stand komt. De website zelf fungeert primair als configuratie- en contactplatform.`,
},
{
title:"6. Aansprakelijkheid",
text:`Northern Studio streeft naar correcte informatie op de website maar kan geen garantie geven dat alle informatie volledig of foutloos is.`,
},
{
title:"7. Intellectueel eigendom",
text:`Alle inhoud op deze website inclusief teksten, ontwerp en visuele elementen blijft eigendom van Northern Studio tenzij anders vermeld.`,
},
{
title:"8. Toepasselijk recht",
text:`Op deze website en alle diensten is Belgisch recht van toepassing.`,
}
]
},
en:{
title:"Terms and Conditions",
sections:[
{
title:"1. Website",
text:`Northern Studio is an independent technology studio providing hardware advice, IT support, custom PC builds and digital services.

This website functions primarily as an informational and request platform.`,
},
{
title:"2. Business status",
text:`Northern Studio is currently in development. Formal business registration details will be added once available.

Commercial transactions are finalized only after explicit agreement.`,
},
{
title:"3. Services",
text:`Northern Studio may provide services such as:

• Custom PC builds
• IT troubleshooting and support
• Hardware consulting
• Web design and digital services

Specific agreements are confirmed before execution.`,
},
{
title:"4. Quotes",
text:`Configurations and pricing examples provided through the website or PC Builder are indicative until formally confirmed.`,
},
{
title:"5. Payments",
text:`Payments are only requested once a service agreement has been confirmed.`,
},
{
title:"6. Liability",
text:`Northern Studio aims to provide accurate information but cannot guarantee the completeness or accuracy of all content.`,
},
{
title:"7. Intellectual property",
text:`All content including text, design and visual elements remains property of Northern Studio unless stated otherwise.`,
},
{
title:"8. Governing law",
text:`Belgian law applies to this website and its services.`,
}
]
}
}

export default function TermsPage({params}){

const {locale}=use(params)
const lang=locale==="en"?"en":"nl"
const t=content[lang]
const pathname=usePathname()

const switchLocale=(target)=>{
const segments=pathname.split("/")
segments[1]=target
return segments.join("/")
}

return(
<main className="min-h-screen bg-black text-white px-6 py-20">

<div className="max-w-4xl mx-auto">

<div className="mb-10 flex justify-end">
<div className="rounded-full bg-white/5 p-1">
<a href={switchLocale("nl")} className={`px-3 py-1 text-sm ${lang==="nl"?"bg-white text-black rounded-full":""}`}>NL</a>
<a href={switchLocale("en")} className={`px-3 py-1 text-sm ${lang==="en"?"bg-white text-black rounded-full":""}`}>EN</a>
</div>
</div>

<h1 className="text-4xl font-semibold mb-10">{t.title}</h1>

<div className="space-y-10">
{t.sections.map((s,i)=>(
<div key={i}>
<h2 className="text-xl font-semibold mb-2">{s.title}</h2>
<p className="text-white/70 whitespace-pre-line">{s.text}</p>
</div>
))}
</div>

<div className="mt-20 text-sm text-white/50">
© {new Date().getFullYear()} Northern Studio
</div>

</div>
</main>
)
}