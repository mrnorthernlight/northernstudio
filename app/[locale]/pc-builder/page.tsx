'use client';

import { useState, useCallback, useRef } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
type Lang = 'nl' | 'en';
type Tab = 'custom' | 'presets' | 'prebuilt' | 'laptops';
type ModalStep = 1 | 2;
type Badge = 'budget' | 'mid' | 'high' | 'extreme';

interface Part {
  id: string; name: string; specs: string; price: number; badge: Badge;
  socket?: string; type?: string; watt?: number; form?: string[];
}
interface Build { cpu:Part|null; mobo:Part|null; gpu:Part|null; ram:Part|null; ssd:Part|null; cooling:Part|null; psu:Part|null; case:Part|null; }
interface Preset { name:string; use:string; useColor:string; desc:string; parts:Record<string,string|null>; price:number; specs:[string,string][]; }
interface PrebuiltItem { brand:string; name:string; specs:string; price:number; tag:string; }

// ─────────────────────────────────────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────────────────────────────────────
const T = {
  nl: {
    tabs: ['⚙ Zelf Samenstellen','⚡ Preset Builds','🖥 Kant-en-Klaar','💻 Laptops'],
    sideTitle:'📋 Jouw Build', completeness:'Volledigheid', total:'Totaal',
    notSelected:'Niet geselecteerd', addBtn:'+ Kiezen', selectedBtn:'✓ Geselecteerd',
    quoteBtn:'Offerte Aanvragen →', resetBtn:'✕ Reset Build',
    loadPreset:'Laad Build', approxPrice:'± €',
    assemblyTitle:'Montage door Northern Studio',
    assemblyBody:'Wil je dat wij de PC voor jou bouwen en testen? Dat is mogelijk voor een',
    assemblyFeeLabel:'vaste montagekost van €150',
    assemblySuffix:'— inclusief kabelmanagement, BIOS update en uitgebreide stresstest.',
    assemblyPresetsBody:'Alle preset builds kunnen door Northern Studio worden gebouwd en getest voor een',
    assemblyPresetsFee:'vaste montagekost van €150',
    assemblyPresetsSuffix:'— inclusief kabelmanagement, BIOS update en stresstest. Selecteer de optie bij het aanvragen van je offerte.',
    tipPresets:'Kies een preset en pas daarna individuele onderdelen aan via "Zelf Samenstellen".',
    prebuiltNotice:"Direct klaar voor gebruik. Prijzen inclusief Windows licentie tenzij anders vermeld.",
    laptopNotice:'Alle laptops zijn AZERTY (Belgisch toetsenbord) tenzij anders vermeld.',
    filterAll:'Alle', filterAir:'Luchtkoeling',
    sections:{ cpu:'Processor (CPU)', mobo:'Moederbord', gpu:'Videokaart (GPU)', ram:'RAM Geheugen', ssd:'Opslag (SSD)', cooling:'CPU Koeling', psu:'Voeding (PSU)', case:'Behuizing' },
    presetDescs:['Ideaal voor dagelijks werk, Office, browsen en videostreaming. Snel en betrouwbaar zonder overbodige kosten.','Vlot 1080p gaming op hoge instellingen. Perfecte instapper voor PC gaming met toekomstbestendige onderdelen.','Vloeiend 1440p gaming op ultra instellingen. Ideaal voor competitief gaming en streaming tegelijk.','Maximale gaming prestaties voor 4K en high refresh rate. De beste AMD configuratie voor gamers.','Gebouwd voor video editing, 3D rendering en streaming. Veel cores, snel geheugen en ruime opslag.','Absoluut maximum aan prestaties. Voor wie het beste wil zonder compromissen.'],
    presetUses:['Kantoor & School','Gaming 1080p','Gaming 1440p','Gaming 4K','Video & Streaming','No Limits'],
    gpuIntegrated:'Geïntegreerd',
    compatSocket:'⚠ Socket mismatch',
    compatDDR:'⚠ RAM type: DDR5 RAM niet compatibel met DDR4 moederbord',
    step1Title:'Klantgegevens', step1Sub:'Vul je gegevens in zodat de offerte correct opgesteld wordt.',
    fVoornaam:'Voornaam *', fVoornaamP:'Jan',
    fAchternaam:'Achternaam *', fAchternaamP:'Janssen',
    fEmail:'E-mailadres *', fEmailP:'jan@voorbeeld.be',
    fTel:'Telefoonnummer', fTelP:'+32 4xx xx xx xx',
    fStad:'Gemeente / Stad', fStadP:'Antwerpen',
    fNote:'Opmerkingen / Gebruiksdoel', fNoteP:'bijv. gaming, video editing, thuiskantoor...',
    assemblyCheck:'🔧 Montage door Northern Studio — +€150',
    assemblyCheckDesc:'Wij bouwen, testen en leveren jouw PC gebruiksklaar op.',
    nextBtn:'Volgende: Offerte Bekijken →', backBtn:'← Terug',
    step2Title:'Offerte Overzicht',
    sendEmail:'📧 Verstuur per E-mail', printBtn:'🖨 Afdrukken / PDF',
    errMsg:'⚠ Vul naam en e-mailadres in.',
    quoteLbl:'OFFERTE', quoteDate:'Datum', quoteValid:'Geldig tot', quoteClient:'Klant',
    quoteConfig:'PC Configuratie', quoteAssembly:'Montage', quoteAssemblyName:'🔧 Montage door Northern Studio',
    quoteSubtotal:'Subtotaal (excl. BTW)', quoteBTW:'BTW 21%', quoteTotal:'TOTAAL (incl. BTW)',
    quoteNote:'* Prijzen zijn gebaseerd op actuele marktprijzen en kunnen variëren. Offerte is vrijblijvend en geldig voor 14 dagen. Montage door Northern Studio: €150 (optioneel) — inclusief kabelmanagement, BIOS update en stresstest. Verzending en OS licenties niet inbegrepen tenzij apart vermeld.',
    emailGreeting:'Beste Northern Studio,\n\nGraag ontvang ik een offerte voor de volgende PC configuratie.',
    emailAssemblyLine:'  • Montage Northern Studio  →  €150,00',
    emailClosing:'Met vriendelijke groeten,',
    emailRefLabel:'OFFERTE REFERENTIE', emailDateLabel:'Datum', emailCustLabel:'KLANTGEGEVENS',
    emailNameLabel:'Naam', emailTelLabel:'Tel', emailCityLabel:'Stad',
    emailConfLabel:'PC CONFIGURATIE', emailSubLabel:'Subtotaal (excl. BTW)',
    emailVatLabel:'BTW 21%', emailTotLabel:'TOTAAL (incl. BTW)', emailNoteLabel:'Opmerkingen',
    emailSubjectWord:'Offerte Aanvraag',
    tiers:['Budget','Mid-Range','High-End','Extreme'],
    partsLabel:'delen',
  },
  en: {
    tabs: ['⚙ Build Your PC','⚡ Preset Builds','🖥 Pre-Built PCs','💻 Laptops'],
    sideTitle:'📋 Your Build', completeness:'Completeness', total:'Total',
    notSelected:'Not selected', addBtn:'+ Select', selectedBtn:'✓ Selected',
    quoteBtn:'Request Quote →', resetBtn:'✕ Reset Build',
    loadPreset:'Load Build', approxPrice:'≈ €',
    assemblyTitle:'Assembly by Northern Studio',
    assemblyBody:"Want us to build and test the PC for you? That's possible for a flat",
    assemblyFeeLabel:'assembly fee of €150',
    assemblySuffix:'— including cable management, BIOS update and full stress test.',
    assemblyPresetsBody:'All preset builds can be assembled and tested by Northern Studio for a flat',
    assemblyPresetsFee:'assembly fee of €150',
    assemblyPresetsSuffix:'— including cable management, BIOS update and full stress test. Select the option when requesting your quote.',
    tipPresets:'Pick a preset and then customise individual parts via "Build Your PC".',
    prebuiltNotice:'Ready to use out of the box. Prices include Windows licence unless stated otherwise.',
    laptopNotice:'All laptops are AZERTY (Belgian keyboard) unless stated otherwise.',
    filterAll:'All', filterAir:'Air Cooling',
    sections:{ cpu:'Processor (CPU)', mobo:'Motherboard', gpu:'Graphics Card (GPU)', ram:'RAM Memory', ssd:'Storage (SSD)', cooling:'CPU Cooling', psu:'Power Supply (PSU)', case:'Case' },
    presetDescs:['Ideal for daily work, Office apps, browsing and video streaming. Fast and reliable without unnecessary costs.','Smooth 1080p gaming on high settings. The perfect entry point for PC gaming with future-proof components.','Fluid 1440p gaming on ultra settings. Ideal for competitive gaming and streaming simultaneously.','Maximum gaming performance for 4K and high refresh rates. The best AMD configuration for serious gamers.','Built for video editing, 3D rendering and streaming. Plenty of cores, fast memory and ample storage.','Absolute maximum performance. For those who want the best without compromise.'],
    presetUses:['Office & School','Gaming 1080p','Gaming 1440p','Gaming 4K','Video & Streaming','No Limits'],
    gpuIntegrated:'Integrated',
    compatSocket:'⚠ Socket mismatch',
    compatDDR:'⚠ RAM type: DDR5 RAM not compatible with DDR4 motherboard',
    step1Title:'Customer Details', step1Sub:'Fill in your details so we can prepare your quote correctly.',
    fVoornaam:'First Name *', fVoornaamP:'John',
    fAchternaam:'Last Name *', fAchternaamP:'Smith',
    fEmail:'Email Address *', fEmailP:'john@example.com',
    fTel:'Phone Number', fTelP:'+32 4xx xx xx xx',
    fStad:'City / Town', fStadP:'Antwerp',
    fNote:'Notes / Intended Use', fNoteP:'e.g. gaming, video editing, home office...',
    assemblyCheck:'🔧 Assembly by Northern Studio — +€150',
    assemblyCheckDesc:'We build, test and deliver your PC ready to use.',
    nextBtn:'Next: View Quote →', backBtn:'← Back',
    step2Title:'Quote Overview',
    sendEmail:'📧 Send by Email', printBtn:'🖨 Print / PDF',
    errMsg:'⚠ Please enter your name and email address.',
    quoteLbl:'QUOTE', quoteDate:'Date', quoteValid:'Valid until', quoteClient:'Customer',
    quoteConfig:'PC Configuration', quoteAssembly:'Assembly', quoteAssemblyName:'🔧 Assembly by Northern Studio',
    quoteSubtotal:'Subtotal (excl. VAT)', quoteBTW:'VAT 21%', quoteTotal:'TOTAL (incl. VAT)',
    quoteNote:'* Prices are based on current market prices and may vary. Quote is non-binding and valid for 14 days. Assembly by Northern Studio: €150 (optional) — including cable management, BIOS update and full stress test. Shipping and OS licences not included unless stated separately.',
    emailGreeting:'Dear Northern Studio,\n\nI would like to request a quote for the following PC configuration.',
    emailAssemblyLine:'  • Assembly Northern Studio  →  €150.00',
    emailClosing:'Kind regards,',
    emailRefLabel:'QUOTE REFERENCE', emailDateLabel:'Date', emailCustLabel:'CUSTOMER DETAILS',
    emailNameLabel:'Name', emailTelLabel:'Tel', emailCityLabel:'City',
    emailConfLabel:'PC CONFIGURATION', emailSubLabel:'Subtotal (excl. VAT)',
    emailVatLabel:'VAT 21%', emailTotLabel:'TOTAL (incl. VAT)', emailNoteLabel:'Notes',
    emailSubjectWord:'Quote Request',
    tiers:['Budget','Mid-Range','High-End','Extreme'],
    partsLabel:'parts',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT DATA
// ─────────────────────────────────────────────────────────────────────────────
const DATA: Record<string, Part[]> = {
  cpu: [
    {id:'cpu01',name:'AMD Ryzen 5 5500',specs:'6-core / 12-thread · 3.6GHz / 4.2GHz · Socket AM4 · Inclusief koeler',price:94.22,badge:'budget',socket:'AM4'},
    {id:'cpu02',name:'AMD Ryzen 5 5600',specs:'6-core / 12-thread · 3.5GHz / 4.4GHz · Socket AM4 · Inclusief koeler',price:115.99,badge:'budget',socket:'AM4'},
    {id:'cpu03',name:'AMD Ryzen 7 5700G',specs:'8-core / 16-thread · 3.8GHz / 4.6GHz · Socket AM4 · Geïntegreerde Radeon Graphics',price:199,badge:'budget',socket:'AM4'},
    {id:'cpu04',name:'AMD Ryzen 7 5800X',specs:'8-core / 16-thread · 3.8GHz / 4.7GHz · Socket AM4 · 105W TDP',price:199,badge:'budget',socket:'AM4'},
    {id:'cpu05',name:'AMD Ryzen 7 5700X',specs:'8-core / 16-thread · 3.4GHz / 4.6GHz · Socket AM4',price:180.99,badge:'budget',socket:'AM4'},
    {id:'cpu06',name:'AMD Ryzen 5 7600X',specs:'6-core / 12-thread · 4.7GHz / 5.3GHz · Socket AM5 · DDR5',price:167.55,badge:'budget',socket:'AM5'},
    {id:'cpu07',name:'AMD Ryzen 7 7800X3D Tray',specs:'8-core / 16-thread · 4.2GHz / 5.0GHz · Socket AM5 · 3D V-Cache',price:319,badge:'mid',socket:'AM5'},
    {id:'cpu08',name:'AMD Ryzen 7 7800X3D Boxed',specs:'8-core / 16-thread · 4.2GHz / 5.0GHz · Socket AM5 · 3D V-Cache',price:378,badge:'mid',socket:'AM5'},
    {id:'cpu09',name:'AMD Ryzen 7 9700X',specs:'8-core / 16-thread · 3.8GHz / 5.5GHz · Socket AM5 · DDR5',price:299,badge:'mid',socket:'AM5'},
    {id:'cpu10',name:'AMD Ryzen 7 9800X3D',specs:'8-core / 16-thread · 4.7GHz / 5.2GHz · Socket AM5 · 3D V-Cache · DDR5',price:445.99,badge:'high',socket:'AM5'},
    {id:'cpu11',name:'AMD Ryzen 9 9950X3D',specs:'16-core / 32-thread · 4.3GHz / 5.7GHz · Socket AM5 · 3D V-Cache · DDR5',price:709,badge:'extreme',socket:'AM5'},
    {id:'cpu12',name:'Intel Core i3-10105F',specs:'4-core · 3.7GHz / 4.4GHz · Socket LGA1700 · Inclusief koeler',price:85.50,badge:'budget',socket:'LGA1700'},
    {id:'cpu13',name:'Intel Core Ultra 5 245KF',specs:'14-core · 4.6GHz / 5.2GHz · Socket LGA1851 · 14e generatie',price:171.99,badge:'budget',socket:'LGA1851'},
    {id:'cpu14',name:'Intel Core i5-14600K',specs:'14-core (6P+8E) / 20-thread · 3.5GHz / 5.3GHz · Socket LGA1700 · 125W',price:279,badge:'mid',socket:'LGA1700'},
    {id:'cpu15',name:'Intel Core i7-12700KF',specs:'12-core / 20-thread · 3.6GHz / 5.0GHz · Socket LGA1700',price:285,badge:'mid',socket:'LGA1700'},
    {id:'cpu16',name:'Intel Core i7-14700KF',specs:'20-core (8P+12E) / 28-thread · 3.4GHz / 5.6GHz · Socket LGA1700',price:348.56,badge:'high',socket:'LGA1700'},
    {id:'cpu17',name:'Intel Core i9-12900K',specs:'16-core / 24-thread · 3.2GHz / 5.2GHz · Socket LGA1700',price:369,badge:'high',socket:'LGA1700'},
    {id:'cpu18',name:'Intel Core i9-14900K',specs:'24-core (8P+16E) / 32-thread · 3.2GHz / 6.0GHz · Socket LGA1700',price:479.42,badge:'high',socket:'LGA1700'},
    {id:'cpu19',name:'Intel Core i9-14900KS',specs:'24-core / 32-thread · 6.2GHz boost · Socket LGA1700 · 14e generatie',price:677.99,badge:'extreme',socket:'LGA1700'},
    {id:'cpu20',name:'Intel Core Ultra 9 285K',specs:'24-core · 4.6GHz / 5.7GHz · Socket LGA1851 · 24e generatie',price:604,badge:'extreme',socket:'LGA1851'},
  ],
  mobo: [
    {id:'mb01',name:'MSI A520M-A PRO',specs:'Chipset: A520 · Socket AM4 · Micro-ATX · Max 64GB DDR4',price:56,badge:'budget',socket:'AM4'},
    {id:'mb02',name:'MSI MPG B550 Gaming Plus',specs:'Chipset: B550 · Socket AM4 · ATX · Max 128GB DDR4',price:116.99,badge:'budget',socket:'AM4'},
    {id:'mb03',name:'GIGABYTE B550 Gaming X V2',specs:'Chipset: B550 · Socket AM4 · ATX · Max 128GB DDR4',price:101.66,badge:'budget',socket:'AM4'},
    {id:'mb04',name:'ASUS PRIME B550M-A WIFI II',specs:'Chipset: B550 · Socket AM4 · Micro-ATX · Max 128GB DDR4',price:100,badge:'budget',socket:'AM4'},
    {id:'mb05',name:'ASUS TUF Gaming B550M-Plus WIFI II',specs:'Chipset: B550 · Socket AM4 · Micro-ATX · Max 128GB DDR4',price:134.90,badge:'budget',socket:'AM4'},
    {id:'mb06',name:'ASUS ROG STRIX B550-F Gaming WIFI II',specs:'Chipset: B550 · Socket AM4 · ATX · Max 128GB DDR4',price:147.99,badge:'mid',socket:'AM4'},
    {id:'mb07',name:'ASUS ROG STRIX B650-A Gaming WIFI',specs:'Chipset: B650 · Socket AM5 · ATX · Max 128GB DDR5',price:175,badge:'mid',socket:'AM5'},
    {id:'mb08',name:'GIGABYTE B650 Eagle AX',specs:'Chipset: B650 · Socket AM5 · ATX · Max 256GB DDR5',price:133.99,badge:'mid',socket:'AM5'},
    {id:'mb09',name:'MSI B650 Gaming Plus WIFI',specs:'Chipset: B650 · Socket AM5 · ATX · Max 192GB DDR5 · 2.5G LAN',price:149.99,badge:'mid',socket:'AM5'},
    {id:'mb10',name:'MSI PRO B650M-P Micro-ATX',specs:'Chipset: B650 · Socket AM5 · Micro-ATX · Max 192GB DDR5',price:116.99,badge:'mid',socket:'AM5'},
    {id:'mb11',name:'GIGABYTE B850 AORUS Elite WIFI7',specs:'Chipset: B850 · Socket AM5 · ATX · Max 256GB DDR5 · WiFi 7',price:204.99,badge:'high',socket:'AM5'},
    {id:'mb12',name:'ASUS TUF Gaming B850-E WIFI',specs:'Chipset: B850 · Socket AM5 · ATX · Max 256GB DDR5',price:209.99,badge:'high',socket:'AM5'},
    {id:'mb13',name:'MSI MAG B850 Tomahawk MAX WIFI',specs:'Chipset: B850 · Socket AM5 · ATX · Max 256GB DDR5',price:240.99,badge:'high',socket:'AM5'},
    {id:'mb14',name:'MSI MAG X870E Tomahawk WIFI',specs:'Chipset: X870E · Socket AM5 · ATX · Max 256GB DDR5',price:329,badge:'high',socket:'AM5'},
    {id:'mb15',name:'MSI MPG X870E Edge TI WIFI',specs:'Chipset: X870E · Socket AM5 · ATX · Max 256GB DDR5',price:400.50,badge:'extreme',socket:'AM5'},
    {id:'mb16',name:'ASUS ROG MAXIMUS Z890 Hero BTF',specs:'Chipset: Z890 · Socket LGA1851 · ATX · Max 256GB DDR5',price:699,badge:'extreme',socket:'LGA1851'},
    {id:'mb17',name:'MSI PRO H610M-E DDR4',specs:'Chipset: H610 · Socket LGA1700 · Micro-ATX · Max 64GB DDR4',price:67.30,badge:'budget',socket:'LGA1700'},
    {id:'mb18',name:'MSI Pro B760M-P DDR4',specs:'Chipset: B760 · Socket LGA1700 · Micro-ATX · Max 128GB DDR4',price:94.97,badge:'budget',socket:'LGA1700'},
    {id:'mb19',name:'Asrock B760 PRO RS ATX',specs:'Chipset: B760 · Socket LGA1700 · ATX · Max 128GB',price:112.99,badge:'budget',socket:'LGA1700'},
    {id:'mb20',name:'ASUS PRIME B760M-A WIFI D4',specs:'Chipset: B760 · Socket LGA1700 · Micro-ATX · Max 128GB DDR4',price:135.49,badge:'mid',socket:'LGA1700'},
    {id:'mb21',name:'MSI B760 Gaming Plus WIFI DDR4',specs:'Chipset: B760 · Socket LGA1700 · ATX · Max 128GB DDR4',price:136.99,badge:'mid',socket:'LGA1700'},
    {id:'mb22',name:'Asrock B760M Steel Legend WIFI',specs:'Chipset: B760 · Socket LGA1700 · Micro-ATX · DDR5 · WiFi 6E',price:153.12,badge:'mid',socket:'LGA1700'},
    {id:'mb23',name:'GIGABYTE Z690 Gaming X DDR4',specs:'Chipset: Z690 · Socket LGA1700 · ATX · Max 128GB DDR4',price:236,badge:'mid',socket:'LGA1700'},
    {id:'mb24',name:'GIGABYTE Z790 AORUS Elite AX',specs:'Chipset: Z790 · Socket LGA1700 · ATX · Max 128GB',price:223.84,badge:'high',socket:'LGA1700'},
    {id:'mb25',name:'ASUS TUF Gaming B760M-Plus WIFI II',specs:'Chipset: B760 · Socket LGA1700 · Micro-ATX · Max 192GB DDR5',price:176,badge:'mid',socket:'LGA1700'},
    {id:'mb26',name:'GIGABYTE Z890 AORUS Elite WIFI7 ICE',specs:'Chipset: Z890 · Socket LGA1851 · ATX · DDR5 · WiFi 7',price:227.99,badge:'high',socket:'LGA1851'},
    {id:'mb27',name:'MSI B860M Gaming Plus WIFI',specs:'Chipset: B860 · Socket LGA1851 · Micro-ATX · DDR5',price:181.15,badge:'mid',socket:'LGA1851'},
    {id:'mb28',name:'ASUS ROG STRIX B860-A Gaming WIFI',specs:'Chipset: B860 · Socket LGA1851 · ATX · DDR5',price:234.07,badge:'high',socket:'LGA1851'},
  ],
  gpu: [
    {id:'gpu01',name:'XFX Speedster SWFT 210 RX 7600',specs:'8GB GDDR6 · PCIe 4.0 · 1x HDMI 2.1b · 3x DP · 2 slots',price:266.99,badge:'budget'},
    {id:'gpu02',name:'Gigabyte RX 7600 Gaming OC',specs:'8GB GDDR6 · PCIe 4.0 · 2x HDMI 2.1b · 2x DP 1.4 · 2 slots',price:286.82,badge:'budget'},
    {id:'gpu03',name:'Acer Nitro Intel Arc B570 OC',specs:'10GB GDDR6 · PCIe 4.0 · 1x HDMI 2.1b · 3x DP 2.1a · 3 slots',price:234.95,badge:'budget'},
    {id:'gpu04',name:'MSI Ventus 2X RTX 5060 OC',specs:'8GB GDDR7 · PCIe 5.0 · 1x HDMI 2.1b · 3x DP 2.1a · 3 slots',price:320.99,badge:'budget'},
    {id:'gpu05',name:'MSI Gaming OC RTX 5060',specs:'8GB GDDR7 · PCIe 5.0 · 1x HDMI 2.1b · 3x DP 2.1a · 3 slots',price:353.99,badge:'budget'},
    {id:'gpu06',name:'ASUS PRIME RTX 5060 OC',specs:'8GB GDDR7 · PCIe 5.0 · 1x HDMI 2.1b · 3x DP 2.1a · 2.5 slots',price:368.99,badge:'budget'},
    {id:'gpu07',name:'Palit RTX 5060 White OC',specs:'8GB GDDR7 · PCIe 5.0 · Gaming ready',price:353.99,badge:'budget'},
    {id:'gpu08',name:'Gigabyte RX 9060 XT Gaming OC 8GB',specs:'8GB GDDR6 · PCIe 5.0 · 1x HDMI 2.1 · 2x DP 2.1 · 3 slots',price:347.99,badge:'mid'},
    {id:'gpu09',name:'XFX RX 9060 XT 16GB',specs:'16GB GDDR6 · PCIe 5.0 · 2 slots',price:453.99,badge:'mid'},
    {id:'gpu10',name:'Gigabyte RX 9060 XT Gaming OC 16GB',specs:'16GB GDDR6 · PCIe 5.0 · 3 slots',price:453.99,badge:'mid'},
    {id:'gpu11',name:'Sapphire Pulse RX 9060 XT 16GB',specs:'16GB GDDR6 · PCIe 5.0 · 2x HDMI 2.1 · 1x DP 2.1 · 3 slots',price:456.63,badge:'mid'},
    {id:'gpu12',name:'PowerColor Hellhound RX 9060 XT 16GB',specs:'16GB GDDR6 · PCIe 5.0 · 2 slots',price:436.99,badge:'mid'},
    {id:'gpu13',name:'ASUS Prime RX 9060 XT OC 16GB',specs:'16GB GDDR6 · 1x HDMI 2.1b · 2x DP 2.1a · 2.5 slots',price:499,badge:'mid'},
    {id:'gpu14',name:'ASUS Dual RTX 4070 Super 12GB',specs:'12GB GDDR6X · PCIe 4.0 · 2 slots',price:899,badge:'mid'},
    {id:'gpu15',name:'Gigabyte RX 9070 XT Gaming OC 16GB',specs:'16GB GDDR6 · PCIe 5.0 · 2x HDMI 2.1b · 3x DP 2.1a · 3 slots',price:719.95,badge:'high'},
    {id:'gpu16',name:'GIGABYTE RTX 5070 Windforce OC SFF',specs:'12GB GDDR7 · PCIe 5.0 · 2 slots',price:647.99,badge:'high'},
    {id:'gpu17',name:'ASUS PRIME RTX 5070 OC',specs:'12GB GDDR7 · PCIe 5.0 · 1x HDMI 2.1b · 3x DP 2.1a',price:669,badge:'high'},
    {id:'gpu18',name:'ASUS PRIME RTX 5070 Ti O16G',specs:'16GB GDDR7 · PCIe 5.0 · 1x HDMI 2.1b · 3x DP 2.1a · 2 slots',price:1039,badge:'high'},
    {id:'gpu19',name:'GIGABYTE RTX 5070 Ti Windforce OC SFF',specs:'16GB GDDR7 · PCIe 5.0 · 2 slots',price:981.99,badge:'high'},
    {id:'gpu20',name:'ASUS PRIME RTX 5080 O16G',specs:'16GB GDDR7 · PCIe 5.0 · 1x HDMI 2.1b · 3x DP 2.1a · 2.5 slots',price:1379,badge:'extreme'},
    {id:'gpu21',name:'Zotac Gaming RTX 5080 Solid Core OC',specs:'16GB GDDR7 · PCIe 5.0 · 2.5 slots',price:1199,badge:'extreme'},
    {id:'gpu22',name:'GIGABYTE RTX 5080 Aero OC SFF',specs:'16GB GDDR7 · PCIe 5.0 · 2.5 slots',price:1395.99,badge:'extreme'},
    {id:'gpu23',name:'MSI RTX 5080 Vanguard SOC',specs:'16GB GDDR7 · PCIe 5.0 · 4 slots',price:1549,badge:'extreme'},
    {id:'gpu24',name:'ASUS ROG Astral RTX 5080 Hatsune Miku',specs:'16GB GDDR7 · PCIe 5.0 · Speciaal editie · 3.8 slots',price:1971.19,badge:'extreme'},
  ],
  ram: [
    {id:'ram01',name:'Kingston Fury Beast 8GB DDR4',specs:'8GB (1x8GB) · DDR4 · 3200MHz · CL16',price:77.95,badge:'budget',type:'DDR4'},
    {id:'ram02',name:'Kingston Fury Beast 16GB DDR4',specs:'16GB · DDR4 · 3200MHz · CL16',price:159,badge:'budget',type:'DDR4'},
    {id:'ram03',name:'Corsair Vengeance LPX 16GB DDR4',specs:'16GB (2x8GB) · DDR4 · 3200MHz · CL16',price:159.90,badge:'budget',type:'DDR4'},
    {id:'ram04',name:'Corsair Vengeance LPX 32GB DDR4',specs:'32GB (2x16GB) · DDR4 · 3200MHz · CL16',price:229,badge:'mid',type:'DDR4'},
    {id:'ram05',name:'Corsair Vengeance RGB Pro SL 32GB DDR4',specs:'32GB (2x16GB) · DDR4 · 3200MHz · CL16 · RGB',price:229,badge:'mid',type:'DDR4'},
    {id:'ram06',name:'Corsair Vengeance 32GB DDR4 White',specs:'32GB · DDR4 · 3200MHz · CL16',price:251.17,badge:'mid',type:'DDR4'},
    {id:'ram07',name:'Corsair Vengeance 16GB DDR5',specs:'16GB (2x8GB) · DDR5 · 5200MHz · CL40',price:219,badge:'mid',type:'DDR5'},
    {id:'ram08',name:'Kingston Fury Beast 16GB DDR5',specs:'16GB · DDR5 · 6000MHz',price:259.95,badge:'mid',type:'DDR5'},
    {id:'ram09',name:'Corsair Vengeance 32GB DDR5 6000MHz',specs:'32GB (2x16GB) · DDR5 · 6000MHz · CL38 · Intel XMP',price:349.95,badge:'mid',type:'DDR5'},
    {id:'ram10',name:'Kingston Fury Beast RGB 32GB DDR5',specs:'32GB (2x16GB) · DDR5 · 6000MHz · CL36 · RGB',price:399,badge:'mid',type:'DDR5'},
    {id:'ram11',name:'Corsair Vengeance DDR5 32GB 6400MHz AMD EXPO',specs:'32GB (2x16GB) · DDR5 · 6400MHz · CL36 · AMD EXPO',price:379,badge:'high',type:'DDR5'},
    {id:'ram12',name:'Corsair Vengeance RGB DDR5 32GB 6400MHz',specs:'32GB (2x16GB) · DDR5 · 6400MHz · Intel XMP · RGB',price:385,badge:'high',type:'DDR5'},
    {id:'ram13',name:'Corsair Vengeance RGB DDR5 32GB 6000MHz',specs:'32GB (2x16GB) · DDR5 · 6000MHz · CL36 · AMD EXPO',price:374.95,badge:'high',type:'DDR5'},
    {id:'ram14',name:'Kingston Fury Beast DDR5 32GB 6000MHz',specs:'32GB (2x16GB) · DDR5 · 6000MHz · CL30 · Intel XMP 3.0',price:384.95,badge:'high',type:'DDR5'},
    {id:'ram15',name:'Corsair Vengeance 64GB DDR5',specs:'64GB (2x32GB) · DDR5 · 6000MHz',price:1170.99,badge:'extreme',type:'DDR5'},
    {id:'ram16',name:'Corsair 32GB DDR5 4800MHz',specs:'32GB · DDR5 · 4800MHz',price:638.99,badge:'high',type:'DDR5'},
  ],
  ssd: [
    {id:'ssd01',name:'Kingston A400 120GB SATA',specs:'120GB · 500MB/s read · SATA III · 2.5"',price:74.95,badge:'budget',type:'SATA'},
    {id:'ssd02',name:'Intenso TOP 256GB SATA',specs:'256GB · 500MB/s read · SATA III · 2.5"',price:55.53,badge:'budget',type:'SATA'},
    {id:'ssd03',name:'PNY CS900 500GB SATA',specs:'500GB · 550MB/s read · SATA III · 2.5"',price:72.89,badge:'budget',type:'SATA'},
    {id:'ssd04',name:'Samsung 870 EVO 500GB SATA',specs:'500GB · 560MB/s read · SATA III · 2.5"',price:148.99,badge:'budget',type:'SATA'},
    {id:'ssd05',name:'SanDisk Green 1TB SATA',specs:'1TB · 545MB/s read · SATA III · 2.5"',price:149.61,badge:'budget',type:'SATA'},
    {id:'ssd06',name:'GMR 2TB SATA',specs:'2TB · 550MB/s read · SATA III · 2.5"',price:199,badge:'budget',type:'SATA'},
    {id:'ssd07',name:'Intenso M.2 SATA III 256GB',specs:'256GB · 550MB/s read · M.2 SATA III',price:48.99,badge:'budget',type:'NVMe Gen3'},
    {id:'ssd08',name:'Goodram PX500 256GB NVMe',specs:'256GB · 3200MB/s read · M.2 PCIe Gen3',price:62.77,badge:'budget',type:'NVMe Gen3'},
    {id:'ssd09',name:'Integral M2 Series 250GB NVMe',specs:'250GB · 3350MB/s read · M.2 PCIe 3.1 NVMe',price:79,badge:'budget',type:'NVMe Gen3'},
    {id:'ssd10',name:'Netac Shadow RGB 500GB NVMe',specs:'500GB · 3400MB/s read · M.2 NVMe · RGB',price:99.99,badge:'budget',type:'NVMe Gen3'},
    {id:'ssd11',name:'Lexar NM620 1TB NVMe Gen3',specs:'1TB · 3500MB/s read · M.2 PCIe Gen3x4',price:135.23,badge:'mid',type:'NVMe Gen3'},
    {id:'ssd12',name:'Lexar LNQ790 1TB NVMe Gen4',specs:'1TB · 7000MB/s read · M.2 PCIe 4.0',price:149.99,badge:'mid',type:'NVMe Gen4'},
    {id:'ssd13',name:'Samsung 990 EVO Plus 1TB',specs:'1TB · 7150MB/s read · M.2 PCIe 4.0 NVMe',price:159,badge:'mid',type:'NVMe Gen4'},
    {id:'ssd14',name:'WD Black SN850X 1TB Heatsink',specs:'1TB · 7300MB/s read · M.2 NVMe · Heatsink',price:183.18,badge:'mid',type:'NVMe Gen4'},
    {id:'ssd15',name:'Samsung 990 PRO 1TB',specs:'1TB · 7450MB/s read · M.2 PCIe 4.0 NVMe',price:194.90,badge:'mid',type:'NVMe Gen4'},
    {id:'ssd16',name:'WD Black SN850X 2TB',specs:'2TB · 7300MB/s read · M.2 NVMe PCIe',price:297.99,badge:'high',type:'NVMe Gen4'},
    {id:'ssd17',name:'Seagate Game Drive 2TB Heatsink',specs:'2TB · 7300MB/s read · M.2 PCIe Gen4 NVMe',price:280.99,badge:'high',type:'NVMe Gen4'},
    {id:'ssd18',name:'Lexar PLAY SSD 2TB',specs:'2TB · 7400MB/s read · M.2 2280 NVMe PCIe Gen4',price:413,badge:'high',type:'NVMe Gen4'},
    {id:'ssd19',name:'Samsung 9100 PRO 2TB Gen5',specs:'2TB · 14700MB/s read · M.2 PCIe 5.0 NVMe',price:295.87,badge:'high',type:'NVMe Gen5'},
    {id:'ssd20',name:'Samsung 9100 PRO 2TB Gen5 Heatsink',specs:'2TB · 13300MB/s read · M.2 PCIe 5.0 NVMe · Heatsink',price:359.06,badge:'high',type:'NVMe Gen5'},
    {id:'ssd21',name:'Samsung 990 PRO 4TB Heatsink',specs:'4TB · 7450MB/s read · M.2 PCIe 4.0 NVMe · Heatsink',price:559.99,badge:'extreme',type:'NVMe Gen5'},
  ],
  cooling: [
    {id:'cool01',name:'Cooler Master X Dream i117',specs:'Air cooler · Intel LGA1200/1156/1155/1151/1150/775',price:17,badge:'budget',type:'air'},
    {id:'cool02',name:'Cooler Master Hyper 212 Black',specs:'Air cooler · Multi-socket · 120mm fan',price:29,badge:'budget',type:'air'},
    {id:'cool03',name:'Arctic Freezer 36',specs:'Air cooler · Intel LGA1851/1700 · AMD AM5/AM4 · 4-pin PWM',price:31.15,badge:'budget',type:'air'},
    {id:'cool04',name:'be quiet! Pure Rock Slim 2',specs:'Air cooler · FM4/AM3/4/115x · LGA1200 · TDP 120W',price:32,badge:'budget',type:'air'},
    {id:'cool05',name:'DeepCool AK400',specs:'Air cooler · Multi-socket · 120mm fan',price:30.05,badge:'budget',type:'air'},
    {id:'cool06',name:'DeepCool AK400 Digital',specs:'Air cooler · Multi-socket · LCD display · 120mm fan',price:44.90,badge:'budget',type:'air'},
    {id:'cool07',name:'be quiet! Pure Rock Pro 3 Silver',specs:'Air cooler · LGA1150/1151/1155/1200/1700/1851 · AM4/AM5',price:48,badge:'budget',type:'air'},
    {id:'cool08',name:'Thermalright Peerless Assassin 120 SE',specs:'Air cooler · Dual tower · 66.17 CFM · 1550 RPM · 25.6 dBA',price:47.85,badge:'mid',type:'air'},
    {id:'cool09',name:'DeepCool AK500S Digital',specs:'Air cooler · Intel LGA2066/2011/1200/1700/115x · LCD',price:58.50,badge:'mid',type:'air'},
    {id:'cool10',name:'be quiet! Dark Rock 5',specs:'Air cooler · LGA1700/1200/115x · AMD AM5/AM4 · 2100 RPM',price:69.90,badge:'mid',type:'air'},
    {id:'cool11',name:'Noctua NH-L9x65 chromax.black',specs:'Air cooler (Low Profile) · LGA1851/1700/1200/115x · AM5/AM4',price:75,badge:'mid',type:'air'},
    {id:'cool12',name:'be quiet! Dark Rock Pro 5',specs:'Air cooler · 270W TDP · 168mm height · Multi-socket',price:93.90,badge:'high',type:'air'},
    {id:'cool13',name:'DeepCool LE500 240mm AIO',specs:'AIO · 240mm · 2x 120mm PWM RGB fans',price:41.45,badge:'budget',type:'aio240'},
    {id:'cool14',name:'Cooler Master MLW-D24M 240mm AIO',specs:'AIO · 240mm · RGB',price:70,badge:'mid',type:'aio240'},
    {id:'cool15',name:'ARCTIC Liquid Freezer III Pro 240',specs:'AIO · 240mm · Intel LGA1851/1700 · AMD AM5/AM4',price:73.99,badge:'mid',type:'aio240'},
    {id:'cool16',name:'DeepCool LQ240 AIO',specs:'AIO · 240mm · Intel LGA1851/1700/1200/115x · AM5/AM4',price:84.90,badge:'mid',type:'aio240'},
    {id:'cool17',name:'Arctic Liquid Freezer III Pro 280',specs:'AIO · 280mm · Intel LGA1851/1700 · AMD AM5/AM4 · 2x 140mm',price:83.99,badge:'mid',type:'aio280'},
    {id:'cool18',name:'MSI MAG Coreliquid I360 360mm AIO',specs:'AIO · 360mm · 3x 120mm RGB fans',price:89,badge:'mid',type:'aio360'},
    {id:'cool19',name:'Arctic Liquid Freezer III Pro 360',specs:'AIO · 360mm · Intel LGA1851/1700 · AMD AM5/AM4',price:84.99,badge:'mid',type:'aio360'},
    {id:'cool20',name:'Corsair Nautilus 360 RS ARGB',specs:'AIO · 360mm · 3x RS120 RGB fans · Multi-socket',price:99.90,badge:'high',type:'aio360'},
    {id:'cool21',name:'Arctic Liquid Freezer III Pro 360 A-RGB Black',specs:'AIO · 360mm · A-RGB · Intel LGA1851/1700 · AMD AM5/AM4',price:94.49,badge:'high',type:'aio360'},
    {id:'cool22',name:'Arctic Liquid Freezer III Pro 360 A-RGB White',specs:'AIO · 360mm · A-RGB · White · Intel LGA1851/1700 · AMD AM5/AM4',price:109.38,badge:'high',type:'aio360'},
    {id:'cool23',name:'Lian Li HydroShift LCD 360S White',specs:'AIO · 360mm · LCD display · Intel LGA1700 · AMD',price:187,badge:'extreme',type:'aio360'},
  ],
  psu: [
    {id:'psu01',name:'LC-Power LC600H-12 V2.31',specs:'600W · 80 Plus · Non-modular · 1 year warranty',price:49.85,badge:'budget',watt:600},
    {id:'psu02',name:'AZZA 650W Bronze RGB',specs:'650W · 80 Plus Bronze · Non-modular · RGB',price:61.45,badge:'budget',watt:650},
    {id:'psu03',name:'GAMDIAS Aura GP750',specs:'750W · Non-modular · 2x 6+2 PIN · 2 year warranty',price:52.99,badge:'budget',watt:750},
    {id:'psu04',name:'GAMDIAS Helios M1-650B',specs:'650W · 80 Plus Bronze · Non-modular · 3 year warranty',price:56.99,badge:'budget',watt:650},
    {id:'psu05',name:'GAMDIAS Helios P2-750G',specs:'750W · 80 Plus Gold · Fully modular · 3 year warranty',price:69.99,badge:'budget',watt:750},
    {id:'psu06',name:'Corsair CX750',specs:'750W · 80 Plus Bronze · Non-modular · 5 year warranty',price:72.90,badge:'budget',watt:750},
    {id:'psu07',name:'LC-Power V2.3 LC6650 650W',specs:'650W · 80 Plus Bronze · Non-modular · 4x PCI-Express 6+2 Pin',price:87.79,badge:'budget',watt:650},
    {id:'psu08',name:'Cooler Master MWE Gold 850 V3',specs:'850W · 80 Plus Gold · Non-modular',price:94.50,badge:'mid',watt:850},
    {id:'psu09',name:'MSI MAG A750GL PCIE5 II',specs:'750W · 80 Plus Gold · Fully modular · ATX 3.1 · PCIe 5.1',price:96.50,badge:'mid',watt:750},
    {id:'psu10',name:'Corsair RM650e (2025)',specs:'650W · 80 Plus Gold · Fully modular · ATX 3.1 · PCIe 5.1 · 7 year',price:89,badge:'mid',watt:650},
    {id:'psu11',name:'Corsair RM850e (2025)',specs:'850W · 80 Plus Gold · Fully modular · ATX 3.1 · PCIe 5.1 · 7 year',price:113,badge:'mid',watt:850},
    {id:'psu12',name:'MSI MAG A850GL PCIE5',specs:'850W · 80 Plus Gold · Fully modular · ATX 3.0',price:119.78,badge:'mid',watt:850},
    {id:'psu13',name:'FSP VITA GM 1000W',specs:'1000W · 80 Plus Gold · Fully modular · ATX 3.0',price:123.99,badge:'high',watt:1000},
    {id:'psu14',name:'Corsair RM850x',specs:'850W · 80 Plus Gold · Fully modular · ATX 3.1 · PCIe 5.1 · 7 year',price:154,badge:'high',watt:850},
    {id:'psu15',name:'LC-Power 1000W V3.1 White',specs:'1000W · 80 Plus Gold · Fully modular · White',price:149.50,badge:'high',watt:1000},
    {id:'psu16',name:'HP OMEN 1000W',specs:'1000W · 80 Plus Gold · Fully modular · ATX 3.1 · 2 year',price:145.99,badge:'high',watt:1000},
    {id:'psu17',name:'ASUS TUF Gaming 1000W Gold',specs:'1000W · 80 Plus Gold · Fully modular',price:170,badge:'high',watt:1000},
    {id:'psu18',name:'Be Quiet! Pure Power 13 M 1000W',specs:'1000W · 80 Plus Gold · Fully modular · 2 year',price:169.90,badge:'high',watt:1000},
    {id:'psu19',name:'GAMDIAS Helios P2-1300G',specs:'1300W · 80 Plus Gold · Fully modular · 3 year warranty',price:174.50,badge:'extreme',watt:1300},
    {id:'psu20',name:'be quiet! Dark Power Pro 13 2200W',specs:'2200W · 80 Plus Platinum · Fully modular · ATX 3.1 · PCIe 5.1',price:537,badge:'extreme',watt:2200},
    {id:'psu21',name:'Antec SIGNATURE 2200W Platinum',specs:'2200W · 80 Plus Platinum · Fully modular · 20+4 pin ATX',price:649.94,badge:'extreme',watt:2200},
  ],
  case: [
    {id:'case01',name:'SBOX PCC-05 Micro Tower',specs:'Mini-ITX / Micro-ATX · No lighting · Black',price:31.10,badge:'budget',form:['mITX','mATX']},
    {id:'case02',name:'DeepCool MATREXX 30 SI',specs:'Micro-ATX · 1x 120mm fan · No lighting · Solid panel',price:34.99,badge:'budget',form:['mATX']},
    {id:'case03',name:'Zalman S2 ATX Midi Tower',specs:'ATX · 1x 120mm fan · No lighting · Front ventilation',price:43.26,badge:'budget',form:['ATX']},
    {id:'case04',name:'Gamdias Talos E2 Elite',specs:'EEB / Micro-ATX / Mini-ITX · 4x fans · aRGB LED',price:52.99,badge:'budget',form:['mITX','mATX','ATX']},
    {id:'case05',name:'Aerocool CYLONW White Mid-Tower',specs:'ATX / Micro-ATX · 1x fan · RGB lighting bar · White',price:54,badge:'budget',form:['ATX','mATX']},
    {id:'case06',name:'Azza Noir 130 RGB Micro Tower',specs:'Micro-ATX · 2x fans · RGB · Black',price:54.73,badge:'budget',form:['mATX']},
    {id:'case07',name:'MSI MAG Forge M100R',specs:'Micro-ATX / Mini-ITX · 4x fans · No lighting · Black',price:56.69,badge:'budget',form:['mITX','mATX']},
    {id:'case08',name:'Zalman Z1 Iceberg White',specs:'Micro-ATX / Mini-ITX · 2x 120mm fans · RGB · White',price:59.50,badge:'budget',form:['mITX','mATX']},
    {id:'case09',name:'MetallicGear Neo V2 ATX',specs:'Micro-ATX / Mini-ITX / ATX · 2x fans · RGB · Silver',price:59.90,badge:'budget',form:['mITX','mATX','ATX']},
    {id:'case10',name:'DeepCool CC560 Mid-Tower',specs:'ATX · 4x 120mm LED fans · Tempered glass · Black',price:60.85,badge:'budget',form:['ATX']},
    {id:'case11',name:'be quiet! Pure Base 501 Midi Tower',specs:'ATX · 1x fan · No lighting · Black',price:77.40,badge:'mid',form:['ATX']},
    {id:'case12',name:'Spirit of Gamer SPECTRA ATX',specs:'ATX / mATX · 3x fans · Addressable RGB · Tempered glass',price:79.99,badge:'mid',form:['ATX','mATX']},
    {id:'case13',name:'DeepCool CG530 4F',specs:'ATX · 4x fans · Addressable RGB · Tempered glass · Black',price:70.89,badge:'mid',form:['ATX']},
    {id:'case14',name:'DeepCool CG580 WH ATX Panoramic',specs:'ATX · No lighting · Tempered glass · White · Single chamber',price:69.80,badge:'mid',form:['ATX']},
    {id:'case15',name:'be quiet! Pure Base 600 Window Orange',specs:'ATX · 2x fans · No lighting · Orange accents',price:94,badge:'mid',form:['ATX']},
    {id:'case16',name:'Lian Li DAN Cases A3 Wood Edition',specs:'Micro-ATX · Mesh side-panel · Wood Edition Black',price:93.99,badge:'mid',form:['mATX']},
    {id:'case17',name:'MSI MAG PANO M100R PZ',specs:'Micro-ATX / Mini-ITX · 4x fans · RGB · Panoramic glass',price:98.15,badge:'mid',form:['mITX','mATX']},
    {id:'case18',name:'ASUS A32 PLUS Tower White',specs:'ATX · Addressable RGB · Tempered glass · White',price:99.90,badge:'mid',form:['ATX']},
    {id:'case19',name:'Corsair 2500X White Mini-Tower',specs:'Mini-ITX / Micro-ATX · 0 fans · RGB · Tempered glass · White',price:104.10,badge:'mid',form:['mITX','mATX']},
    {id:'case20',name:'MSI MPG Gungnir 300R Airflow',specs:'ATX / EATX / ITX / mATX · 4x fans · RGB · Airflow optimized',price:113.44,badge:'high',form:['mITX','mATX','ATX']},
  ],
};

const PRESETS: Preset[] = [
  {name:'Budget Office',use:'Kantoor & School',useColor:'badge-budget',desc:'',parts:{cpu:'cpu01',mobo:'mb02',gpu:null,ram:'ram02',ssd:'ssd13',cooling:'cool04',psu:'psu05',case:'case03'},price:827,specs:[['CPU','Ryzen 5 5500'],['RAM','16GB DDR4 3200'],['SSD','1TB NVMe Gen4'],['GPU','Geïntegreerd']]},
  {name:'Budget Gaming',use:'Gaming 1080p',useColor:'badge-budget',desc:'',parts:{cpu:'cpu03',mobo:'mb02',gpu:'gpu02',ram:'ram02',ssd:'ssd13',cooling:'cool04',psu:'psu09',case:'case13'},price:1215,specs:[['CPU','Ryzen 5 5600'],['GPU','RX 7600 8GB'],['RAM','16GB DDR4'],['SSD','1TB NVMe']]},
  {name:'Mid Gaming',use:'Gaming 1440p',useColor:'badge-mid',desc:'',parts:{cpu:'cpu09',mobo:'mb09',gpu:'gpu16',ram:'ram09',ssd:'ssd15',cooling:'cool08',psu:'psu11',case:'case13'},price:1770,specs:[['CPU','Ryzen 7 9700X'],['GPU','RTX 5070 12GB'],['RAM','32GB DDR5 6000'],['SSD','1TB NVMe Gen4']]},
  {name:'High-End Gaming',use:'Gaming 4K',useColor:'badge-high',desc:'',parts:{cpu:'cpu10',mobo:'mb13',gpu:'gpu18',ram:'ram11',ssd:'ssd16',cooling:'cool21',psu:'psu17',case:'case20'},price:2875,specs:[['CPU','Ryzen 7 9800X3D'],['GPU','RTX 5070 Ti 16GB'],['RAM','32GB DDR5 6400'],['SSD','2TB NVMe Gen4']]},
  {name:'Content Creator',use:'Video & Streaming',useColor:'badge-mid',desc:'',parts:{cpu:'cpu16',mobo:'mb24',gpu:'gpu17',ram:'ram14',ssd:'ssd17',cooling:'cool19',psu:'psu17',case:'case18'},price:2355,specs:[['CPU','Core i7-14700KF'],['GPU','RTX 5070 12GB'],['RAM','32GB DDR5 6000'],['SSD','2TB NVMe Gen4']]},
  {name:'Extreme Beast',use:'No Limits',useColor:'badge-extreme',desc:'',parts:{cpu:'cpu11',mobo:'mb15',gpu:'gpu23',ram:'ram15',ssd:'ssd20',cooling:'cool23',psu:'psu20',case:'case20'},price:3790,specs:[['CPU','Ryzen 9 9950X3D'],['GPU','RTX 5080 16GB'],['RAM','64GB DDR5 6000'],['SSD','2TB NVMe Gen5']]},
];

const PREBUILTS: Record<string, PrebuiltItem[]> = {
  budget:[
    {brand:'LalaShops',name:'AMD Ryzen 5 RGB Budget Gaming PC',specs:'AMD Ryzen 5 3400G · 8GB RAM · 256GB SSD · AMD Radeon RX Vega 10 · Win 11',price:399.99,tag:'Gaming'},
    {brand:'LalaShops',name:'AMD Ryzen 5 School & Kantoor PC',specs:'AMD Ryzen 5 3400G · 16GB RAM · 500GB SSD · AMD Radeon Graphics · MS Office 2024',price:489.99,tag:'Office'},
    {brand:'GMR',name:'Intel Core i5 Desktop PC',specs:'Intel Core i5-8400 · 8GB RAM · 512GB SSD M.2 · Intel UHD Graphics · Win 11 Pro',price:599,tag:'Office'},
    {brand:'GMR',name:'Intel Core i7 Ultra Mini Smart PC',specs:'Intel Core i7 · 16GB RAM · 512GB SSD · Intel HD Graphics 4600 · Win 11 Pro',price:599,tag:'Office'},
  ],
  mid:[
    {brand:'LalaShops',name:'Ryzen 5 Budget Game PC Setup',specs:'AMD Ryzen 5 3400G · 16GB RAM · 500GB SSD · AMD Radeon · 24" Monitor + keyboard + mouse',price:619,tag:'Gaming Set'},
    {brand:'ScreenON',name:'Intel Core i7 Complete PC',specs:'Intel Core i7 · 16GB DDR4 · 512GB SSD · Intel UHD 630 · Win 11 Pro + WiFi & Bluetooth',price:749,tag:'Office'},
    {brand:'LalaShops',name:'AMD Ryzen 7 5700G Game PC SET',specs:'AMD Ryzen 7 5700G · 16GB RAM · 1TB SSD · AMD Radeon RX Vega 8 · 24" Monitor set',price:834.50,tag:'Gaming Set'},
    {brand:'FlowUp',name:'Gaming PC Ryzen 5 — RTX 3050',specs:'AMD Ryzen 5 5500 · 16GB RAM · 1TB SSD · NVIDIA RTX 3050 · Win 11',price:849,tag:'Gaming'},
    {brand:'FlowUp x MSI',name:'"Don Kaaklijn" Gaming PC',specs:'AMD Ryzen 5 5600 · 32GB RAM · RTX 5060 · 1TB SSD',price:1149,tag:'Gaming'},
    {brand:'Kooiker',name:'Diamond VI ARGB Gaming PC',specs:'AMD Ryzen 7 5700X · 32GB DDR4 · RTX 5060 8GB GDDR7 · 1TB SSD · WiFi · 3yr warranty',price:1099,tag:'Gaming'},
  ],
  high:[
    {brand:'FlowUp',name:'Challenger Gaming PC',specs:'AMD Ryzen 7 7800X3D · 32GB DDR5 · RTX 5070 12GB · 1TB SSD · Win 11',price:2099,tag:'Gaming'},
    {brand:'Scan 3XS',name:'Elite Stage 6 Gaming PC',specs:'AMD Ryzen 7 7800X3D · 32GB Corsair DDR5 · RTX 5070 Ti 16GB · 2TB SSD M.2',price:2349,tag:'Gaming'},
    {brand:'FlowUp',name:'Arctic FireStorm Gaming PC',specs:'AMD Ryzen 7 7800X3D · 32GB DDR5 · RTX 5080 16GB · 2TB SSD · Win 11',price:3099,tag:'Gaming'},
  ],
  extreme:[
    {brand:'MSI',name:'MSI AMD Ultimate Game PC',specs:'AMD Ryzen 7 9800X3D · 64GB DDR5 · RTX 5090 · 2TB + 2TB SSD · WiFi · Win 11',price:5699,tag:'Extreme'},
  ],
};

const LAPTOPS: Record<string, PrebuiltItem[]> = {
  budget:[
    {brand:'ASUS',name:'Chromebook CX1405CTA',specs:'14" Full HD · Intel N-series · 4GB RAM · 128GB · Intel UHD Graphics · azerty',price:259,tag:'Chromebook'},
    {brand:'Lenovo',name:'IdeaPad Slim 3 Chromebook 14"',specs:'14" Full HD · MediaTek Kompanio 520 · 4GB RAM · 64GB · azerty',price:259.95,tag:'Chromebook'},
    {brand:'Samsung',name:'Galaxy Chromebook Book Go 11.6"',specs:'11" HD · Intel Celeron · 4GB RAM · 64GB · Intel UHD Graphics',price:269,tag:'Chromebook'},
    {brand:'Lenovo',name:'IdeaPad 3 Chromebook 15.6" azerty',specs:'15.6" Full HD · Intel Celeron · 8GB RAM · 128GB · Intel UHD',price:299,tag:'Chromebook'},
    {brand:'Lenovo',name:'IdeaPad 3 Chromebook 15.6"',specs:'15.6" Full HD · Intel Celeron · 8GB RAM · 128GB · Intel UHD',price:349,tag:'Chromebook'},
    {brand:'Lenovo',name:'IdeaPad Slim 3 15IAN8',specs:'15.6" Full HD · Intel N100 · 4GB RAM · 128GB · Win 11 S',price:279,tag:'Office'},
    {brand:'Apple',name:'MacBook Pro 13" 2019 Refurbished',specs:'13.3" · Intel Core i5 · 8GB RAM · 512GB SSD · Intel Iris Plus',price:446,tag:'Refurbished'},
    {brand:'Apple',name:'MacBook Air 13.3" M1 Refurbished',specs:'13.3" · Apple M1 · 8GB RAM · 256GB SSD · Space Grey',price:497.26,tag:'Refurbished'},
  ],
  mid:[
    {brand:'Acemagic',name:'S16 Gaming Laptop 16"',specs:'16" Full HD · AMD Ryzen 7 7735HS · 16GB RAM · 512GB SSD · AMD Radeon · WiFi 6',price:499,tag:'Gaming'},
    {brand:'HP',name:'17-cp2752nb 17.3"',specs:'17.3" Full HD · AMD Ryzen 5 · 16GB RAM · 512GB SSD · AMD Radeon 610M · Win 11 Home · azerty',price:649,tag:'Laptop'},
    {brand:'HP',name:'15-fd1757nb 15.6"',specs:'15.6" Full HD · Intel Core 5 · 16GB RAM · 512GB SSD · Intel Graphics · azerty',price:669,tag:'Laptop'},
    {brand:'MSI',name:'Thin 15 B13UC Gaming 144Hz',specs:'15.6" Full HD 144Hz · Intel Core i5 · 16GB RAM · 512GB SSD · NVIDIA GeForce RTX · qwerty',price:799,tag:'Gaming'},
    {brand:'Apple',name:'MacBook Neo 13" Indigo',specs:'13" 2408x1506 · Apple A18 Pro 6-core · 8GB RAM · 256GB SSD',price:729,tag:'MacBook'},
    {brand:'Apple',name:'MacBook Air (2025) 13" M4',specs:'13.6" 2560x1664 · Apple M4 · 16GB RAM · 256GB SSD',price:943.82,tag:'MacBook'},
  ],
  high:[
    {brand:'HP',name:'OmniBook X Flip 14" 2-in-1',specs:'14" Full HD 16:10 Touch · AMD Ryzen AI 7 350 · 16GB RAM · 1TB SSD · azerty',price:1089,tag:'2-in-1'},
    {brand:'Lenovo',name:'LOQ 17IRX10 Gaming 165Hz',specs:'17.3" Full HD 165Hz · Intel Core i7 · 16GB RAM · 1TB SSD · NVIDIA GeForce RTX · azerty',price:1289,tag:'Gaming'},
    {brand:'MSI',name:'Katana 15 HX B14WGK 144Hz',specs:'15.6" Full HD 144Hz · Intel Core i7 · 16GB RAM · 1TB SSD · RTX 5070 · azerty',price:1379,tag:'Gaming'},
    {brand:'Lenovo',name:'Legion 5 15AKP10 165Hz',specs:'15.1" QHD 165Hz · AMD Ryzen AI 7 · 32GB RAM · 1TB SSD · NVIDIA RTX · azerty',price:1699,tag:'Gaming'},
    {brand:'Apple',name:'MacBook Pro 14" 2025 M5',specs:'14.2" 3024x1964 · Apple M5 10C CPU/10C GPU · 16GB RAM · 512GB SSD',price:1753.96,tag:'MacBook'},
    {brand:'ASUS',name:'ROG Strix G18 G814PP 240Hz',specs:'18" QHD 240Hz · AMD Ryzen 9 · 32GB RAM · 1TB SSD · RTX 5070 · azerty',price:2049,tag:'Gaming'},
    {brand:'ASUS',name:'ROG Zephyrus G14 GA403WR 120Hz',specs:'14" 2880x1800 120Hz · AMD Ryzen AI 9 · 32GB RAM · 1TB SSD · NVIDIA · azerty',price:2599,tag:'Gaming'},
  ],
  extreme:[
    {brand:'Samsung',name:'Galaxy Book6 Pro 16" Ultra 7',specs:'16" 2880x1800 · Intel Core Ultra 7 · 32GB RAM · 1TB SSD · Copilot+PC',price:2399,tag:'Premium'},
    {brand:'Samsung',name:'Galaxy Book6 Pro 16" Ultra X7',specs:'16" 2880x1800 · Intel Core Ultra X7 · 32GB RAM · 1TB SSD · Copilot+PC',price:2499,tag:'Premium'},
    {brand:'Samsung',name:'Galaxy Book6 Ultra 16"',specs:'16" 2880x1800 · Intel Core Ultra 7 · 32GB RAM · 1TB SSD',price:3599,tag:'Premium'},
    {brand:'Apple',name:'MacBook Pro 2024 16.2" M4 Max',specs:'16.2" 3456x2234 · Apple M4 Max 16C CPU/40C GPU · 48GB RAM · 1TB SSD',price:4487,tag:'MacBook'},
    {brand:'Acer',name:'Predator Helios 18 AI 120Hz',specs:'18" Mini LED 120Hz · Intel Core Ultra 9 · 128GB RAM · 4.5TB SSD · RTX 5090',price:5369,tag:'Gaming'},
  ],
};

const SECTION_KEYS = ['cpu','mobo','gpu','ram','ssd','cooling','psu','case'] as const;
type SectionKey = typeof SECTION_KEYS[number];
const SECTION_ICONS: Record<SectionKey, string> = {cpu:'🔲',mobo:'🔧',gpu:'🎮',ram:'💾',ssd:'💿',cooling:'❄️',psu:'⚡',case:'🗃'};

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
const COMPANY_EMAIL = 'info@northernstudio.be';

function fmtEur(n: number) { return '€' + n.toLocaleString('nl-BE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function getQuoteNum() {
  const d = new Date();
  return 'NS-' + d.getFullYear() + String(d.getMonth()+1).padStart(2,'0') + String(d.getDate()).padStart(2,'0') + '-' + String(Math.floor(Math.random()*900)+100);
}

// ─────────────────────────────────────────────────────────────────────────────
// BADGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function Badge({ b }: { b: Badge }) {
  const cls: Record<Badge, string> = { budget:'badge-budget', mid:'badge-mid', high:'badge-high', extreme:'badge-extreme' };
  const lbl: Record<Badge, string> = { budget:'Budget', mid:'Mid-Range', high:'High-End', extreme:'Extreme' };
  return <span className={`prod-badge ${cls[b]}`}>{lbl[b]}</span>;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function PCBuilderPage() {
  const [lang, setLangState] = useState<Lang>('nl');
  const [tab, setTab] = useState<Tab>('custom');
  const [build, setBuild] = useState<Build>({ cpu:null, mobo:null, gpu:null, ram:null, ssd:null, cooling:null, psu:null, case:null });
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [activePreset, setActivePreset] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<ModalStep>(1);
  const [formErr, setFormErr] = useState(false);
  const [assembly, setAssembly] = useState(false);
  const [assemblyHighlight, setAssemblyHighlight] = useState(false);
  const [quoteData, setQuoteData] = useState<any>(null);
  const quoteNumRef = useRef('');

  const tr = T[lang];

  const total = SECTION_KEYS.reduce((s, k) => s + (build[k]?.price ?? 0), 0);
  const filled = SECTION_KEYS.filter(k => build[k]).length;
  const progress = Math.round((filled / 8) * 100);
  const warnings: string[] = [];
  if (build.cpu && build.mobo && build.cpu.socket !== build.mobo.socket)
    warnings.push(`${tr.compatSocket}: ${build.cpu.socket} ≠ ${build.mobo.socket}`);
  if (build.ram?.type === 'DDR5' && build.mobo?.specs?.includes('DDR4'))
    warnings.push(tr.compatDDR);

  function selectPart(key: SectionKey, part: Part) {
    setBuild(b => ({ ...b, [key]: b[key]?.id === part.id ? null : part }));
  }
  function removePart(key: SectionKey) { setBuild(b => ({ ...b, [key]: null })); }
  function resetBuild() { setBuild({ cpu:null, mobo:null, gpu:null, ram:null, ssd:null, cooling:null, psu:null, case:null }); setActivePreset(null); }

  function loadPreset(idx: number) {
    const p = PRESETS[idx];
    const nb: Build = { cpu:null, mobo:null, gpu:null, ram:null, ssd:null, cooling:null, psu:null, case:null };
    (Object.keys(p.parts) as SectionKey[]).forEach(k => {
      nb[k] = p.parts[k] ? (DATA[k]?.find(i => i.id === p.parts[k]) ?? null) : null;
    });
    setBuild(nb); setActivePreset(idx); setTab('custom');
  }

  function filterItems(key: SectionKey): Part[] {
    const f = filters[key] || 'all';
    let items = DATA[key] || [];
    if (f === 'all') return items;
    if (key === 'cpu' || key === 'mobo') return items.filter(i => i.socket === f);
    if (key === 'ram') return items.filter(i => i.type === f);
    if (key === 'ssd') return items.filter(i => i.type === f);
    if (key === 'cooling') return items.filter(i => i.type === f);
    if (key === 'psu') {
      const w = parseInt(f);
      if (f === '600') return items.filter(i => (i.watt??0) <= 650);
      if (f === '750') return items.filter(i => (i.watt??0) >= 700 && (i.watt??0) <= 850);
      if (f === '1000') return items.filter(i => (i.watt??0) >= 1000 && (i.watt??0) < 1300);
      if (f === '1300') return items.filter(i => (i.watt??0) >= 1300);
    }
    if (key === 'gpu') {
      if (f === 'nvidia') return items.filter(i => i.name.includes('RTX') || i.name.includes('GTX'));
      if (f === 'amd') return items.filter(i => i.name.includes('RX'));
      if (f === 'intel') return items.filter(i => i.name.includes('Arc'));
    }
    return items;
  }

  function getFilterDefs(key: SectionKey) {
    const all = tr.filterAll;
    const air = tr.filterAir;
    const map: Record<string, {val:string;label:string}[]> = {
      cpu:[{val:'all',label:all},{val:'AM4',label:'AMD AM4'},{val:'AM5',label:'AMD AM5'},{val:'LGA1700',label:'Intel LGA1700'},{val:'LGA1851',label:'Intel LGA1851'}],
      mobo:[{val:'all',label:all},{val:'AM4',label:'AMD AM4'},{val:'AM5',label:'AMD AM5'},{val:'LGA1700',label:'Intel LGA1700'},{val:'LGA1851',label:'Intel LGA1851'}],
      ram:[{val:'all',label:all},{val:'DDR4',label:'DDR4'},{val:'DDR5',label:'DDR5'}],
      ssd:[{val:'all',label:all},{val:'SATA',label:'SATA 2.5"'},{val:'NVMe Gen3',label:'NVMe Gen3'},{val:'NVMe Gen4',label:'NVMe Gen4'},{val:'NVMe Gen5',label:'NVMe Gen5'}],
      cooling:[{val:'all',label:all},{val:'air',label:air},{val:'aio240',label:'AIO 240mm'},{val:'aio280',label:'AIO 280mm'},{val:'aio360',label:'AIO 360mm'}],
      psu:[{val:'all',label:all},{val:'600',label:'≤650W'},{val:'750',label:'700-850W'},{val:'1000',label:'1000W+'},{val:'1300',label:'1300W+'}],
      gpu:[{val:'all',label:all},{val:'nvidia',label:'NVIDIA'},{val:'amd',label:'AMD'},{val:'intel',label:'Intel Arc'}],
    };
    return map[key] || [];
  }

  function openModal() { setModalOpen(true); setModalStep(1); setFormErr(false); }
  function closeModal() { setModalOpen(false); }

  function goToStep2() {
    const f = (id: string) => (document.getElementById(id) as HTMLInputElement)?.value.trim() || '';
    const naam = (f('fFirst') + ' ' + f('fLast')).trim();
    const email = f('fEmail');
    if (!naam || naam.length < 2 || !email || !email.includes('@')) { setFormErr(true); return; }
    setFormErr(false);
    const now = new Date();
    const valid = new Date(now); valid.setDate(now.getDate() + 14);
    const fmt = (d: Date) => d.toLocaleDateString('nl-BE', {day:'2-digit',month:'2-digit',year:'numeric'});
    const qNum = getQuoteNum();
    quoteNumRef.current = qNum;
    const assemblyFee = assembly ? 150 : 0;
    const partsList = SECTION_KEYS.filter(k => build[k]).map(k => ({ label: tr.sections[k], part: build[k]! }));
    const partsTotal = partsList.reduce((s, p) => s + p.part.price, 0);
    const totalExcl = partsTotal + assemblyFee;
    const btw = totalExcl * 0.21;
    const totalIncl = totalExcl * 1.21;
    setQuoteData({ naam, email, tel: f('fTel'), stad: f('fStad'), note: f('fNote'), dateStr: fmt(now), validStr: fmt(valid), qNum, partsList, partsTotal, assemblyFee, totalExcl, btw, totalIncl });
    setModalStep(2);
  }

  function sendEmail() {
    if (!quoteData) return;
    const q = quoteData;
    const lines = q.partsList.map((p:any) => `  • ${p.label}: ${p.part.name}  →  ${fmtEur(p.part.price)}`).join('\n');
    const asmLine = assembly ? '\n' + tr.emailAssemblyLine : '';
    const body = `${tr.emailGreeting}\n\n${'━'.repeat(34)}\n${tr.emailRefLabel}: ${q.qNum}\n${tr.emailDateLabel}: ${q.dateStr}\n${'━'.repeat(34)}\n\n${tr.emailCustLabel}\n${tr.emailNameLabel}: ${q.naam}\nE-mail: ${q.email}${q.tel ? '\n'+tr.emailTelLabel+': '+q.tel : ''}${q.stad ? '\n'+tr.emailCityLabel+': '+q.stad : ''}\n\n${tr.emailConfLabel}\n${lines}${asmLine}\n\n${'━'.repeat(34)}\n${tr.emailSubLabel}: ${fmtEur(q.totalExcl)}\n${tr.emailVatLabel}: ${fmtEur(q.btw)}\n${tr.emailTotLabel}: ${fmtEur(q.totalIncl)}\n${'━'.repeat(34)}\n${q.note ? '\n'+tr.emailNoteLabel+':\n'+q.note+'\n' : ''}\n${tr.emailClosing}\n${q.naam}`;
    const subject = encodeURIComponent(`${tr.emailSubjectWord} ${q.qNum} — ${q.naam}`);
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}&cc=${encodeURIComponent(q.email)}`;
  }

  function printQuote() {
    if (!quoteData) return;
    const q = quoteData;
    const rows = q.partsList.map((p:any) => `<div class="row"><span class="cat">${p.label}</span><span class="nm">${p.part.name}</span><span class="pr">${fmtEur(p.part.price)}</span></div>`).join('');
    const asmRow = assembly ? `<div class="row" style="color:#00a87a"><span class="cat">${tr.quoteAssembly}</span><span class="nm">${tr.quoteAssemblyName}</span><span class="pr">€150,00</span></div>` : '';
    const html = `<!DOCTYPE html><html><head><title>${tr.quoteLbl} — Northern Studio</title><style>body{font-family:Arial,sans-serif;background:#fff;color:#111;padding:2rem;max-width:640px;margin:0 auto;}h1{font-size:1.4rem;margin-bottom:0;}h1 span{color:#00a87a;}.meta{font-family:monospace;font-size:.72rem;color:#666;text-align:right;}.hdr{display:flex;justify-content:space-between;border-bottom:2px solid #00a87a;padding-bottom:10px;margin-bottom:12px;}.stitle{font-size:.7rem;letter-spacing:2px;text-transform:uppercase;color:#888;border-bottom:1px solid #ddd;padding-bottom:3px;margin:10px 0 5px;}.row{display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid #f0f0f0;font-size:.8rem;}.cat{color:#888;min-width:110px;}.nm{flex:1;padding:0 8px;color:#333;}.pr{font-family:monospace;font-weight:bold;}.total-row{display:flex;justify-content:space-between;padding:8px 0 3px;border-top:2px solid #111;margin-top:6px;font-weight:bold;}.amt{font-family:monospace;font-size:1.1rem;color:#006644;}.sub-row{display:flex;justify-content:space-between;padding:2px 0;font-size:.75rem;color:#666;}.note{font-size:.68rem;color:#999;margin-top:14px;line-height:1.5;border-top:1px solid #eee;padding-top:8px;}</style></head><body><div class="hdr"><div><h1>NORTHERN<span>STUDIO</span></h1><div style="font-size:.7rem;color:#888">northernstudio.be</div></div><div class="meta"><div>${tr.quoteLbl} ${q.qNum}</div><div>${tr.quoteDate}: ${q.dateStr}</div><div>${tr.quoteValid}: ${q.validStr}</div></div></div><div class="stitle">${tr.quoteClient}</div><div style="font-size:.82rem;line-height:1.7;margin-bottom:6px"><strong>${q.naam}</strong><br>${q.email}${q.tel?'<br>'+q.tel:''}${q.stad?'<br>'+q.stad:''}</div><div class="stitle">${tr.quoteConfig}</div>${rows}${asmRow}<div class="sub-row"><span>${tr.quoteSubtotal}</span><span>${fmtEur(q.totalExcl)}</span></div><div class="sub-row"><span>${tr.quoteBTW}</span><span>${fmtEur(q.btw)}</span></div><div class="total-row"><span>${tr.quoteTotal}</span><span class="amt">${fmtEur(q.totalIncl)}</span></div>${q.note?`<div class="stitle">${tr.fNote.replace(' *','').replace(' / Gebruiksdoel','').replace(' / Intended Use','')}</div><div style="font-size:.8rem">${q.note}</div>`:''}<div class="note">${tr.quoteNote}</div></body></html>`;
    const w = window.open('','_blank','width=700,height=900');
    if (w) { w.document.write(html); w.document.close(); setTimeout(() => w.print(), 500); }
  }

  const TIER_KEYS = ['budget','mid','high','extreme'] as const;

  return (
    <>
      <style>{`
        :root{--bg:#060809;--bg2:#090c0e;--panel:#0c1012;--panel2:#101518;--border:#182028;--border2:#1e2d38;--accent:#00c896;--accent2:#00e8b0;--blue:#00aacc;--green:#00e8b0;--yellow:#f59e0b;--red:#ef4444;--silver:#b8c8d4;--text:#dde8f0;--text2:#7a96a8;--text3:#2e4050;--mono:'Share Tech Mono',monospace;}
        *{margin:0;padding:0;box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        body{background:var(--bg);color:var(--text);font-family:'Barlow',sans-serif;min-height:100vh;overflow-x:hidden;}
        .aurora-top{height:2px;background:linear-gradient(90deg,transparent 0%,#00c896 30%,#00e8b0 50%,#00aacc 70%,transparent 100%);position:sticky;top:0;z-index:201;}
        header{position:sticky;top:2px;z-index:200;background:rgba(6,8,9,0.97);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);box-shadow:0 1px 20px rgba(0,200,150,0.06);height:58px;display:flex;align-items:center;justify-content:space-between;padding:0 1.5rem;}
        .logo{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:1.6rem;letter-spacing:1px;color:var(--text);display:flex;align-items:center;gap:8px;}
        .logo-badge{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1.5px solid rgba(0,200,150,0.4);background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.08),rgba(255,255,255,0.02) 55%,transparent 100%);box-shadow:0 0 20px rgba(0,200,150,0.10);overflow:hidden;flex:0 0 auto;}
        .logo-img{width:22px;height:22px;object-fit:contain;transform:translateY(1px);display:block;}
        .header-right{display:flex;align-items:center;gap:1rem;}
        .build-total{font-family:var(--mono);font-size:.8rem;color:var(--text2);}
        .build-total strong{color:var(--green);font-size:1rem;}
        .parts-pill{background:var(--panel2);border:1px solid var(--border2);padding:3px 10px;font-size:.72rem;font-family:var(--mono);color:var(--text3);}
        .parts-pill span{color:var(--accent);}
        .nav-tabs{background:var(--bg2);border-bottom:1px solid var(--border);display:flex;padding:0 1.5rem;overflow-x:auto;gap:0;}
        .nav-tab{background:none;border:none;border-bottom:2px solid transparent;padding:0 1.2rem;height:42px;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.9rem;letter-spacing:2px;text-transform:uppercase;color:var(--text3);cursor:pointer;white-space:nowrap;transition:all .2s;}
        .nav-tab:hover{color:var(--text2);}
        .nav-tab.active{color:var(--accent);border-bottom-color:var(--accent);}
        .lang-btn{background:none;border:none;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.8rem;letter-spacing:2px;color:var(--text3);cursor:pointer;padding:2px 4px;transition:color .15s;}
        .lang-btn.active{color:var(--accent);}
        .lang-btn:hover{color:var(--text2);}
        .page{position:relative;z-index:1;max-width:1500px;margin:0 auto;padding:1.5rem;}
        .layout{display:grid;grid-template-columns:1fr 340px;gap:1.5rem;}
        .comp-section{margin-bottom:1.2rem;}
        .comp-header{display:flex;align-items:center;gap:10px;padding:8px 14px;background:var(--panel2);border:1px solid var(--border);border-bottom:none;}
        .comp-icon{font-size:1rem;}
        .comp-label{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.85rem;letter-spacing:2px;text-transform:uppercase;color:var(--text2);}
        .comp-sel{margin-left:auto;font-family:var(--mono);font-size:.72rem;color:var(--accent);}
        .comp-sel.empty{color:var(--text3);}
        .filter-bar{display:flex;gap:6px;padding:8px 14px;background:var(--panel);border:1px solid var(--border);border-bottom:none;flex-wrap:wrap;}
        .filter-btn{background:none;border:1px solid var(--border2);padding:3px 10px;font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:.72rem;letter-spacing:1px;text-transform:uppercase;color:var(--text3);cursor:pointer;transition:all .15s;}
        .filter-btn:hover,.filter-btn.active{border-color:var(--accent);color:var(--accent);background:rgba(0,200,150,0.05);}
        .prod-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));border:1px solid var(--border);}
        .prod-card{background:var(--panel);padding:12px;cursor:pointer;border-right:1px solid var(--border);border-bottom:1px solid var(--border);transition:background .15s;position:relative;}
        .prod-card:hover{background:var(--panel2);}
        .prod-card.selected{background:rgba(0,200,150,0.06);outline:1px solid var(--accent);outline-offset:-1px;}
        .prod-card.selected::before{content:'✓';position:absolute;top:8px;right:8px;background:var(--accent);color:#fff;width:18px;height:18px;display:grid;place-items:center;font-size:.65rem;font-weight:700;}
        .prod-badge{display:inline-block;font-family:var(--mono);font-size:.6rem;letter-spacing:1px;text-transform:uppercase;padding:2px 6px;margin-bottom:5px;}
        .badge-budget{background:rgba(34,197,94,0.1);color:var(--green);}
        .badge-mid{background:rgba(59,130,246,0.1);color:var(--blue);}
        .badge-high{background:rgba(245,158,11,0.1);color:var(--yellow);}
        .badge-extreme{background:rgba(0,200,150,0.1);color:var(--accent);}
        .prod-name{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.95rem;line-height:1.2;margin-bottom:4px;color:var(--text);}
        .prod-specs{font-family:var(--mono);font-size:.62rem;color:var(--text3);line-height:1.7;margin-bottom:8px;}
        .prod-footer{display:flex;align-items:center;justify-content:space-between;}
        .prod-price{font-family:var(--mono);font-size:1rem;font-weight:bold;color:var(--text);}
        .prod-card.selected .prod-price{color:var(--accent);}
        .add-btn{background:none;border:1px solid var(--border2);padding:3px 8px;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.7rem;letter-spacing:1px;color:var(--text3);cursor:pointer;transition:all .15s;}
        .add-btn:hover{border-color:var(--accent);color:var(--accent);}
        .prod-card.selected .add-btn{background:var(--accent);border-color:var(--accent);color:#fff;}
        .sidebar{position:sticky;top:74px;height:fit-content;}
        .side-panel{background:var(--panel);border:1px solid var(--border);}
        .side-title{background:var(--panel2);padding:8px 14px;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.75rem;letter-spacing:3px;text-transform:uppercase;color:var(--text3);border-bottom:1px solid var(--border);}
        .build-items{padding:4px 0;}
        .bitem{display:flex;align-items:flex-start;gap:8px;padding:6px 14px;border-bottom:1px solid rgba(28,32,48,0.5);}
        .bdot{width:5px;height:5px;border-radius:50%;background:var(--text3);flex-shrink:0;margin-top:5px;}
        .bdot.on{background:var(--accent);box-shadow:0 0 6px rgba(0,200,150,0.7);}
        .bcat{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.7rem;letter-spacing:1px;text-transform:uppercase;color:var(--text3);min-width:65px;flex-shrink:0;}
        .bname{font-size:.72rem;color:var(--text2);flex:1;line-height:1.3;}
        .bprice{font-family:var(--mono);font-size:.72rem;color:var(--text);flex-shrink:0;}
        .bremove{background:none;border:none;color:var(--text3);cursor:pointer;font-size:.8rem;padding:0 2px;flex-shrink:0;}
        .bremove:hover{color:var(--red);}
        .side-footer{padding:12px 14px;border-top:1px solid var(--border);}
        .progress-section{margin-bottom:10px;}
        .prog-label{display:flex;justify-content:space-between;font-family:var(--mono);font-size:.65rem;color:var(--text3);margin-bottom:4px;}
        .prog-label span{color:var(--green);}
        .prog-track{height:2px;background:var(--border);border-radius:1px;}
        .prog-fill{height:100%;background:linear-gradient(90deg,#00c896,#00e8b0);border-radius:1px;transition:width .4s ease;}
        .total-row{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;}
        .total-lbl{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.9rem;letter-spacing:2px;text-transform:uppercase;color:var(--text2);}
        .total-amt{font-family:var(--mono);font-size:1.5rem;font-weight:bold;color:var(--green);}
        .compat-warn{margin-bottom:8px;}
        .warn-item{font-size:.7rem;color:var(--yellow);padding:4px 8px;background:rgba(245,158,11,0.05);border-left:2px solid var(--yellow);margin-bottom:3px;line-height:1.4;}
        .btn-quote{width:100%;background:linear-gradient(135deg,#00c896,#00aacc);border:none;padding:10px;font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:1rem;letter-spacing:3px;text-transform:uppercase;color:#fff;cursor:pointer;transition:all .2s;margin-bottom:6px;}
        .btn-quote:hover{background:linear-gradient(135deg,#00e8b0,#00c8e8);transform:translateY(-1px);}
        .btn-quote:disabled{background:var(--border2);color:var(--text3);cursor:not-allowed;transform:none;}
        .btn-reset{width:100%;background:none;border:1px solid var(--border2);padding:7px;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.8rem;letter-spacing:2px;text-transform:uppercase;color:var(--text3);cursor:pointer;transition:all .2s;}
        .btn-reset:hover{border-color:var(--red);color:var(--red);}
        .preset-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:1rem;margin-bottom:1rem;}
        .preset-card{background:var(--panel);border:1px solid var(--border);padding:1.2rem;cursor:pointer;transition:all .2s;position:relative;overflow:hidden;}
        .preset-card::after{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#00c896,#00e8b0,#00aacc);opacity:0;transition:.3s;}
        .preset-card:hover{border-color:var(--border2);transform:translateY(-2px);}
        .preset-card:hover::after,.preset-card.active::after{opacity:1;}
        .preset-card.active{border-color:var(--accent);background:rgba(0,200,150,0.04);}
        .preset-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;}
        .preset-name{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:1.2rem;letter-spacing:1px;}
        .preset-use{font-family:var(--mono);font-size:.62rem;padding:2px 7px;border-radius:2px;}
        .preset-desc{font-size:.78rem;color:var(--text2);margin-bottom:10px;line-height:1.5;}
        .preset-specs{display:flex;flex-direction:column;gap:2px;margin-bottom:10px;}
        .pspec{font-family:var(--mono);font-size:.65rem;color:var(--text3);}
        .pspec b{color:var(--text2);}
        .preset-price-row{display:flex;align-items:center;justify-content:space-between;}
        .preset-price{font-family:var(--mono);font-size:1.3rem;font-weight:bold;color:var(--green);}
        .preset-load-btn{background:none;border:1px solid var(--border2);padding:5px 12px;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.75rem;letter-spacing:1px;color:var(--text2);cursor:pointer;transition:all .2s;}
        .preset-load-btn:hover{border-color:var(--accent);color:var(--accent);}
        .preset-card.active .preset-load-btn{background:var(--accent);border-color:var(--accent);color:#fff;}
        .product-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem;}
        .pl-card{background:var(--panel);border:1px solid var(--border);padding:1.2rem;transition:all .2s;}
        .pl-card:hover{border-color:var(--border2);transform:translateY(-2px);}
        .pl-brand{font-family:var(--mono);font-size:.62rem;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;}
        .pl-name{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1rem;line-height:1.3;margin-bottom:6px;color:var(--text);}
        .pl-specs{font-family:var(--mono);font-size:.63rem;color:var(--text3);line-height:1.7;margin-bottom:10px;}
        .pl-footer{display:flex;align-items:center;justify-content:space-between;}
        .pl-price{font-family:var(--mono);font-size:1.1rem;font-weight:bold;color:var(--green);}
        .pl-tag{font-family:var(--mono);font-size:.6rem;padding:2px 7px;border-radius:2px;}
        .notice{padding:8px 14px;background:rgba(0,200,150,0.04);border:1px solid rgba(0,200,150,0.15);border-left:3px solid var(--accent);font-size:.75rem;color:var(--text2);margin-bottom:1rem;line-height:1.5;}
        .notice strong{color:var(--accent);}
        .section-divider{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:1.1rem;letter-spacing:3px;text-transform:uppercase;color:var(--text3);padding:6px 0;border-bottom:1px solid var(--border);margin-bottom:1rem;display:flex;align-items:center;gap:10px;}
        .section-divider::after{content:'';flex:1;height:1px;background:var(--border);}
        .assembly-banner{display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:rgba(0,200,150,0.04);border:1px solid rgba(0,200,150,0.2);border-left:3px solid var(--accent);margin-bottom:1.2rem;}
        .ab-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px;}
        .ab-text{font-size:.78rem;color:var(--text2);line-height:1.6;}
        .ab-text strong{color:var(--text);display:block;font-size:.85rem;margin-bottom:2px;}
        .ab-fee{color:var(--accent);font-weight:700;}
        .modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:500;place-items:center;}
        .modal-overlay.open{display:grid;}
        .modal{background:var(--panel2);border:1px solid var(--border2);padding:2rem;max-width:480px;width:90%;position:relative;max-height:90vh;overflow-y:auto;}
        .modal h2{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:1.6rem;letter-spacing:1px;margin-bottom:.5rem;}
        .modal p{font-size:.85rem;color:var(--text2);margin-bottom:1.2rem;line-height:1.6;}
        .modal-close{position:absolute;top:12px;right:12px;background:none;border:none;color:var(--text3);font-size:1.2rem;cursor:pointer;}
        .modal-close:hover{color:var(--text);}
        .modal-cta{width:100%;background:linear-gradient(135deg,#00c896,#00aacc);border:none;padding:12px;font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:1rem;letter-spacing:3px;color:#fff;cursor:pointer;margin-top:6px;}
        .field-label{display:block;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.72rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);margin-bottom:4px;}
        .field-input{width:100%;background:var(--panel);border:1px solid var(--border2);padding:8px 10px;color:var(--text);font-family:'Barlow',sans-serif;font-size:.82rem;outline:none;transition:border .15s;resize:vertical;}
        .field-input:focus{border-color:var(--accent);}
        .field-input::placeholder{color:var(--text3);}
        .qd-header{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:10px;border-bottom:1px solid var(--border2);margin-bottom:10px;}
        .qd-logo{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:1.2rem;letter-spacing:1px;}
        .qd-logo span{color:var(--accent);}
        .qd-meta{text-align:right;font-family:var(--mono);font-size:.62rem;color:var(--text3);line-height:1.8;}
        .qd-section{margin-bottom:8px;}
        .qd-section-title{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.7rem;letter-spacing:2px;text-transform:uppercase;color:var(--text3);margin-bottom:5px;padding-bottom:2px;border-bottom:1px solid var(--border);}
        .qd-row{display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid rgba(28,40,56,0.5);}
        .qd-row-cat{font-size:.68rem;color:var(--text3);min-width:90px;}
        .qd-row-name{font-size:.72rem;color:var(--text2);flex:1;padding:0 8px;}
        .qd-row-price{font-family:var(--mono);font-size:.72rem;color:var(--text);text-align:right;}
        .qd-total-row{display:flex;justify-content:space-between;padding:8px 0 0;border-top:1px solid var(--border2);margin-top:6px;}
        .qd-total-label{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:.9rem;letter-spacing:2px;text-transform:uppercase;}
        .qd-total-amt{font-family:var(--mono);font-size:1.1rem;font-weight:bold;color:var(--green);}
        .qd-note{font-size:.65rem;color:var(--text3);margin-top:8px;line-height:1.5;}
        @media(max-width:900px){.layout{grid-template-columns:1fr;}.sidebar{position:static;}}
        @media(max-width:600px){.page{padding:1rem;}.prod-grid{grid-template-columns:1fr 1fr;}}
      `}</style>

      {/* Aurora line + Header */}
      <div className="aurora-top" />
      <header>
        <div className="logo">
          <div className="logo-badge">
            <img src="/northern-studio-logo.png" className="logo-img" alt="Northern Studio" />
          </div>
          <span style={{color:'var(--silver)',fontSize:'1.15rem',letterSpacing:2}}>NORTHERN</span>
          <span style={{color:'var(--accent)',fontSize:'1.15rem',letterSpacing:2}}>STUDIO</span>
          <span style={{color:'var(--text3)',fontSize:'1.15rem',letterSpacing:1,marginLeft:4,fontWeight:600}}>BUILDER</span>
        </div>
        <div className="header-right">
          <div className="parts-pill"><span>{filled}</span>/8 {tr.partsLabel}</div>
          <div className="build-total">Total: <strong>{fmtEur(total)}</strong></div>
        </div>
      </header>

      {/* Nav Tabs */}
      <div className="nav-tabs">
        {(['custom','presets','prebuilt','laptops'] as Tab[]).map((t, i) => (
          <button key={t} className={`nav-tab${tab === t ? ' active' : ''}`} onClick={() => setTab(t)}>{tr.tabs[i]}</button>
        ))}
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center',paddingRight:'1.5rem',gap:4}}>
          <button className={`lang-btn${lang === 'nl' ? ' active' : ''}`} onClick={() => setLangState('nl')}>NL</button>
          <span style={{color:'var(--text3)',fontSize:'0.8rem'}}>|</span>
          <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLangState('en')}>EN</button>
        </div>
      </div>

      <div className="page">
        {/* ── CUSTOM BUILD TAB ── */}
        {tab === 'custom' && (
          <div className="layout">
            <div>
              {/* Assembly Banner */}
              <div className="assembly-banner">
                <div className="ab-icon">🔧</div>
                <div className="ab-text">
                  <strong>{tr.assemblyTitle}</strong>
                  {tr.assemblyBody} <span className="ab-fee">{tr.assemblyFeeLabel}</span> {tr.assemblySuffix}
                </div>
              </div>

              {/* Component Sections */}
              {SECTION_KEYS.map(key => {
                const items = filterItems(key);
                const fDefs = getFilterDefs(key);
                const label = tr.sections[key];
                const sel = build[key];
                return (
                  <div className="comp-section" key={key}>
                    <div className="comp-header">
                      <span className="comp-icon">{SECTION_ICONS[key]}</span>
                      <span className="comp-label">{label}</span>
                      <span className={`comp-sel${sel ? '' : ' empty'}`}>
                        {sel ? sel.name.substring(0, 28) + (sel.name.length > 28 ? '…' : '') : tr.notSelected}
                      </span>
                    </div>
                    {fDefs.length > 0 && (
                      <div className="filter-bar">
                        {fDefs.map(f => (
                          <button key={f.val} className={`filter-btn${(filters[key] || 'all') === f.val ? ' active' : ''}`}
                            onClick={() => setFilters(prev => ({ ...prev, [key]: f.val }))}>
                            {f.label}
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="prod-grid">
                      {items.map(item => (
                        <div key={item.id} className={`prod-card${build[key]?.id === item.id ? ' selected' : ''}`} onClick={() => selectPart(key, item)}>
                          <Badge b={item.badge} />
                          <div className="prod-name">{item.name}</div>
                          <div className="prod-specs">{item.specs}</div>
                          <div className="prod-footer">
                            <span className="prod-price">{fmtEur(item.price)}</span>
                            <button className="add-btn">{build[key]?.id === item.id ? tr.selectedBtn : tr.addBtn}</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sidebar */}
            <div className="sidebar">
              <div className="side-panel">
                <div className="side-title">{tr.sideTitle}</div>
                <div className="build-items">
                  {SECTION_KEYS.map(key => (
                    <div className="bitem" key={key}>
                      <div className={`bdot${build[key] ? ' on' : ''}`} />
                      <span className="bcat">{tr.sections[key].split(' ')[0]}</span>
                      {build[key] ? (
                        <>
                          <span className="bname">{build[key]!.name.substring(0, 26)}{build[key]!.name.length > 26 ? '…' : ''}</span>
                          <span className="bprice">{fmtEur(build[key]!.price)}</span>
                          <button className="bremove" onClick={() => removePart(key)}>✕</button>
                        </>
                      ) : (
                        <span className="bname" style={{color:'var(--text3)'}}>{tr.notSelected}</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="side-footer">
                  <div className="progress-section">
                    <div className="prog-label">
                      <span>{tr.completeness}</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="prog-track"><div className="prog-fill" style={{width: `${progress}%`}} /></div>
                  </div>
                  {warnings.length > 0 && (
                    <div className="compat-warn">
                      {warnings.map((w,i) => <div key={i} className="warn-item">{w}</div>)}
                    </div>
                  )}
                  <div className="total-row">
                    <span className="total-lbl">{tr.total}</span>
                    <span className="total-amt">{fmtEur(total)}</span>
                  </div>
                  <button className="btn-quote" disabled={filled < 3} onClick={openModal}>{tr.quoteBtn}</button>
                  <button className="btn-reset" onClick={resetBuild}>{tr.resetBtn}</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── PRESETS TAB ── */}
        {tab === 'presets' && (
          <div>
            <div className="notice"><strong>💡 Tip:</strong> {tr.tipPresets}</div>
            <div className="assembly-banner" style={{marginBottom:'1rem'}}>
              <div className="ab-icon">🔧</div>
              <div className="ab-text">
                <strong>{tr.assemblyTitle}</strong>
                {tr.assemblyPresetsBody} <span className="ab-fee">{tr.assemblyPresetsFee}</span> {tr.assemblyPresetsSuffix}
              </div>
            </div>
            <div className="preset-grid">
              {PRESETS.map((p, idx) => (
                <div key={idx} className={`preset-card${activePreset === idx ? ' active' : ''}`} onClick={() => loadPreset(idx)}>
                  <div className="preset-top">
                    <div className="preset-name">{tr.presetDescs[idx] ? p.name : p.name}</div>
                    <span className={`preset-use prod-badge ${p.useColor}`}>{tr.presetUses[idx]}</span>
                  </div>
                  <div className="preset-desc">{tr.presetDescs[idx]}</div>
                  <div className="preset-specs">
                    {p.specs.map(([k, v]) => (
                      <div className="pspec" key={k}><b>{k}:</b> {k === 'GPU' && idx === 0 ? tr.gpuIntegrated : v}</div>
                    ))}
                  </div>
                  <div className="preset-price-row">
                    <div className="preset-price">{tr.approxPrice}{p.price.toLocaleString('nl-BE')}</div>
                    <button className="preset-load-btn">{tr.loadPreset}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PREBUILT TAB ── */}
        {tab === 'prebuilt' && (
          <div>
            <div className="notice"><strong>🖥 {lang === 'nl' ? "Kant-en-Klare PC's:" : 'Pre-Built PCs:'}</strong> {tr.prebuiltNotice}</div>
            {TIER_KEYS.map((tier, ti) => (
              <div key={tier}>
                <div className="section-divider" style={ti > 0 ? {marginTop:'1.5rem'} : {}}>{tr.tiers[ti]}</div>
                <div className="product-list">
                  {PREBUILTS[tier].map((p, i) => (
                    <div className="pl-card" key={i}>
                      <div className="pl-brand">{p.brand}</div>
                      <div className="pl-name">{p.name}</div>
                      <div className="pl-specs">{p.specs}</div>
                      <div className="pl-footer">
                        <span className="pl-price">{fmtEur(p.price)}</span>
                        <span className={`pl-tag badge-${p.tag === 'Gaming' || p.tag === 'Gaming Set' || p.tag === 'Extreme' ? 'extreme' : p.tag === 'Office' ? 'budget' : 'mid'}`}>{p.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── LAPTOPS TAB ── */}
        {tab === 'laptops' && (
          <div>
            <div className="notice"><strong>💻 Laptops:</strong> {tr.laptopNotice}</div>
            {TIER_KEYS.map((tier, ti) => (
              <div key={tier}>
                <div className="section-divider" style={ti > 0 ? {marginTop:'1.5rem'} : {}}>{tr.tiers[ti]}</div>
                <div className="product-list">
                  {LAPTOPS[tier].map((p, i) => (
                    <div className="pl-card" key={i}>
                      <div className="pl-brand">{p.brand}</div>
                      <div className="pl-name">{p.name}</div>
                      <div className="pl-specs">{p.specs}</div>
                      <div className="pl-footer">
                        <span className="pl-price">{fmtEur(p.price)}</span>
                        <span className={`pl-tag badge-${p.tag === 'Gaming' ? 'extreme' : p.tag === 'MacBook' ? 'high' : p.tag === 'Chromebook' || p.tag === 'Office' ? 'budget' : 'mid'}`}>{p.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── QUOTE MODAL ── */}
      <div className={`modal-overlay${modalOpen ? ' open' : ''}`} onClick={e => { if (e.target === e.currentTarget) closeModal(); }}>
        <div className="modal">
          <button className="modal-close" onClick={closeModal}>✕</button>

          {/* Step 1 */}
          {modalStep === 1 && (
            <div>
              <h2>{tr.step1Title}</h2>
              <p>{tr.step1Sub}</p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',marginBottom:'10px'}}>
                <div>
                  <label className="field-label">{tr.fVoornaam}</label>
                  <input id="fFirst" className="field-input" type="text" placeholder={tr.fVoornaamP} />
                </div>
                <div>
                  <label className="field-label">{tr.fAchternaam}</label>
                  <input id="fLast" className="field-input" type="text" placeholder={tr.fAchternaamP} />
                </div>
              </div>
              <div style={{marginBottom:'10px'}}>
                <label className="field-label">{tr.fEmail}</label>
                <input id="fEmail" className="field-input" type="email" placeholder={tr.fEmailP} />
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',marginBottom:'10px'}}>
                <div>
                  <label className="field-label">{tr.fTel}</label>
                  <input id="fTel" className="field-input" type="tel" placeholder={tr.fTelP} />
                </div>
                <div>
                  <label className="field-label">{tr.fStad}</label>
                  <input id="fStad" className="field-input" type="text" placeholder={tr.fStadP} />
                </div>
              </div>
              <div style={{marginBottom:'14px'}}>
                <label className="field-label">{tr.fNote}</label>
                <textarea id="fNote" className="field-input" rows={2} placeholder={tr.fNoteP} />
              </div>

              {/* Assembly checkbox */}
              <label onClick={() => setAssembly(a => !a)} style={{display:'flex',alignItems:'flex-start',gap:10,cursor:'pointer',padding:'10px 12px',border:`1px solid ${assembly ? 'var(--accent)' : 'var(--border2)'}`,background: assembly ? 'rgba(0,200,150,0.05)' : 'var(--panel)',marginBottom:14,transition:'all .15s'}}>
                <input type="checkbox" checked={assembly} onChange={() => {}} style={{accentColor:'var(--accent)',width:16,height:16,cursor:'pointer',flexShrink:0,marginTop:2}} />
                <span style={{fontSize:'.8rem',color:'var(--text2)',lineHeight:1.4}}>
                  <strong style={{color:'var(--text)',display:'block'}}>{tr.assemblyCheck}</strong>
                  {tr.assemblyCheckDesc}
                </span>
              </label>

              {formErr && <div style={{color:'var(--red)',fontSize:'.75rem',marginBottom:8}}>{tr.errMsg}</div>}
              <button className="modal-cta" onClick={goToStep2}>{tr.nextBtn}</button>
            </div>
          )}

          {/* Step 2 */}
          {modalStep === 2 && quoteData && (
            <div>
              <h2>{tr.step2Title}</h2>
              <div style={{background:'var(--panel)',border:'1px solid var(--border2)',padding:'1rem',marginBottom:'1rem'}}>
                <div className="qd-header">
                  <div>
                    <div className="qd-logo">NORTHERN<span>STUDIO</span></div>
                    <div style={{fontSize:'.65rem',color:'var(--text3)',marginTop:2,fontFamily:'var(--mono)'}}>{COMPANY_EMAIL}</div>
                  </div>
                  <div className="qd-meta">
                    <div>{tr.quoteLbl} {quoteData.qNum}</div>
                    <div>{tr.quoteDate}: {quoteData.dateStr}</div>
                    <div>{tr.quoteValid}: {quoteData.validStr}</div>
                  </div>
                </div>
                <div className="qd-section">
                  <div className="qd-section-title">{tr.quoteClient}</div>
                  <div style={{fontSize:'.75rem',color:'var(--text2)',lineHeight:1.8}}>
                    <strong style={{color:'var(--text)'}}>{quoteData.naam}</strong><br />
                    {quoteData.email}{quoteData.tel && <><br />{quoteData.tel}</>}{quoteData.stad && <><br />{quoteData.stad}</>}
                  </div>
                </div>
                <div className="qd-section">
                  <div className="qd-section-title">{tr.quoteConfig}</div>
                  {quoteData.partsList.map((p: any, i: number) => (
                    <div className="qd-row" key={i}>
                      <span className="qd-row-cat">{p.label}</span>
                      <span className="qd-row-name">{p.part.name}</span>
                      <span className="qd-row-price">{fmtEur(p.part.price)}</span>
                    </div>
                  ))}
                  {assembly && (
                    <div className="qd-row" style={{borderTop:'1px solid var(--border)',marginTop:4,paddingTop:6}}>
                      <span className="qd-row-cat">{tr.quoteAssembly}</span>
                      <span className="qd-row-name" style={{color:'var(--accent)'}}>{tr.quoteAssemblyName}</span>
                      <span className="qd-row-price" style={{color:'var(--accent)'}}>€150,00</span>
                    </div>
                  )}
                  <div className="qd-total-row">
                    <span className="qd-total-label">{tr.quoteSubtotal}</span>
                    <span style={{fontFamily:'var(--mono)',fontSize:'.82rem'}}>{fmtEur(quoteData.totalExcl)}</span>
                  </div>
                  <div style={{display:'flex',justifyContent:'space-between',padding:'2px 0'}}>
                    <span style={{fontSize:'.68rem',color:'var(--text3)'}}>{tr.quoteBTW}</span>
                    <span style={{fontFamily:'var(--mono)',fontSize:'.68rem',color:'var(--text3)'}}>{fmtEur(quoteData.btw)}</span>
                  </div>
                  <div className="qd-total-row" style={{borderTopWidth:2,marginTop:2}}>
                    <span className="qd-total-label">{tr.quoteTotal}</span>
                    <span className="qd-total-amt">{fmtEur(quoteData.totalIncl)}</span>
                  </div>
                </div>
                {quoteData.note && (
                  <div className="qd-section">
                    <div className="qd-section-title">{lang === 'nl' ? 'Opmerkingen' : 'Notes'}</div>
                    <div style={{fontSize:'.75rem',color:'var(--text2)'}}>{quoteData.note}</div>
                  </div>
                )}
                <div className="qd-note">{tr.quoteNote}</div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                <button className="modal-cta" onClick={sendEmail} style={{fontSize:'.85rem',padding:10}}>{tr.sendEmail}</button>
                <button onClick={printQuote} style={{background:'none',border:'1px solid var(--border2)',padding:10,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:'.85rem',letterSpacing:2,color:'var(--text2)',cursor:'pointer'}}>
                  {tr.printBtn}
                </button>
              </div>
              <div style={{marginTop:8,textAlign:'center'}}>
                <button onClick={() => setModalStep(1)} style={{background:'none',border:'none',color:'var(--text2)',cursor:'pointer',fontSize:'.8rem'}}>{tr.backBtn}</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
