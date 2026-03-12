"use client";

import { useState, use } from "react";
import StudioShell, { GlassCard, SectionHeading } from "../../../components/StudioShell";

// ─── DATA ───────────────────────────────────────────────────────────────────

const data = {
  cpu: [
    { id: "cpu01", name: "AMD Ryzen 5 5500", specs: "6-core / 12-thread · 3.6GHz / 4.2GHz · Socket AM4 · Inclusief koeler", price: 94.22, badge: "budget", socket: "AM4" },
    { id: "cpu02", name: "AMD Ryzen 5 5600", specs: "6-core / 12-thread · 3.5GHz / 4.4GHz · Socket AM4 · Inclusief koeler", price: 115.99, badge: "budget", socket: "AM4" },
    { id: "cpu03", name: "AMD Ryzen 7 5700G", specs: "8-core / 16-thread · 3.8GHz / 4.6GHz · Socket AM4 · Geïntegreerde Radeon Graphics", price: 199, badge: "budget", socket: "AM4" },
    { id: "cpu04", name: "AMD Ryzen 7 5800X", specs: "8-core / 16-thread · 3.8GHz / 4.7GHz · Socket AM4 · 105W TDP", price: 199, badge: "budget", socket: "AM4" },
    { id: "cpu05", name: "AMD Ryzen 7 5700X", specs: "8-core / 16-thread · 3.4GHz / 4.6GHz · Socket AM4", price: 180.99, badge: "budget", socket: "AM4" },
    { id: "cpu06", name: "AMD Ryzen 5 7600X", specs: "6-core / 12-thread · 4.7GHz / 5.3GHz · Socket AM5 · DDR5", price: 167.55, badge: "budget", socket: "AM5" },
    { id: "cpu07", name: "AMD Ryzen 7 7800X3D Tray", specs: "8-core / 16-thread · 4.2GHz / 5.0GHz · Socket AM5 · 3D V-Cache", price: 319, badge: "mid", socket: "AM5" },
    { id: "cpu08", name: "AMD Ryzen 7 7800X3D Boxed", specs: "8-core / 16-thread · 4.2GHz / 5.0GHz · Socket AM5 · 3D V-Cache", price: 378, badge: "mid", socket: "AM5" },
    { id: "cpu09", name: "AMD Ryzen 7 9700X", specs: "8-core / 16-thread · 3.8GHz / 5.5GHz · Socket AM5 · DDR5", price: 299, badge: "mid", socket: "AM5" },
    { id: "cpu10", name: "AMD Ryzen 7 9800X3D", specs: "8-core / 16-thread · 4.7GHz / 5.2GHz · Socket AM5 · 3D V-Cache · DDR5", price: 445.99, badge: "high", socket: "AM5" },
    { id: "cpu11", name: "AMD Ryzen 9 9950X3D", specs: "16-core / 32-thread · 4.3GHz / 5.7GHz · Socket AM5 · 3D V-Cache · DDR5", price: 709, badge: "extreme", socket: "AM5" },
    { id: "cpu12", name: "Intel Core i3-10105F", specs: "4-core · 3.7GHz / 4.4GHz · Socket LGA1700 · Inclusief koeler", price: 85.50, badge: "budget", socket: "LGA1700" },
    { id: "cpu13", name: "Intel Core Ultra 5 245KF", specs: "14-core · 4.6GHz / 5.2GHz · Socket 1851 · 14e generatie", price: 171.99, badge: "budget", socket: "LGA1851" },
    { id: "cpu14", name: "Intel Core i5-14600K", specs: "14-core (6P+8E) / 20-thread · 3.5GHz / 5.3GHz · Socket LGA1700 · 125W", price: 279, badge: "mid", socket: "LGA1700" },
    { id: "cpu15", name: "Intel Core i7-12700KF", specs: "12-core / 20-thread · 3.6GHz / 5.0GHz · Socket LGA1700", price: 285, badge: "mid", socket: "LGA1700" },
    { id: "cpu16", name: "Intel Core i7-14700KF", specs: "20-core (8P+12E) / 28-thread · 3.4GHz / 5.6GHz · Socket LGA1700", price: 348.56, badge: "high", socket: "LGA1700" },
    { id: "cpu17", name: "Intel Core i9-12900K", specs: "16-core / 24-thread · 3.2GHz / 5.2GHz · Socket LGA1700", price: 369, badge: "high", socket: "LGA1700" },
    { id: "cpu18", name: "Intel Core i9-14900K", specs: "24-core (8P+16E) / 32-thread · 3.2GHz / 6.0GHz · Socket LGA1700", price: 479.42, badge: "high", socket: "LGA1700" },
    { id: "cpu19", name: "Intel Core i9-14900KS", specs: "24-core / 32-thread · 6.2GHz boost · Socket LGA1700 · 14e generatie", price: 677.99, badge: "extreme", socket: "LGA1700" },
    { id: "cpu20", name: "Intel Core Ultra 9 285K", specs: "24-core · 4.6GHz / 5.7GHz · Socket 1851 · 24e generatie", price: 604, badge: "extreme", socket: "LGA1851" },
  ],
  mobo: [
    { id: "mb01", name: "MSI A520M-A PRO", specs: "Chipset: A520 · Socket AM4 · Micro-ATX · Max 64GB DDR4", price: 56, badge: "budget", socket: "AM4", form: "mATX" },
    { id: "mb02", name: "MSI MPG B550 Gaming Plus", specs: "Chipset: B550 · Socket AM4 · ATX · Max 128GB DDR4", price: 116.99, badge: "budget", socket: "AM4", form: "ATX" },
    { id: "mb03", name: "GIGABYTE B550 Gaming X V2", specs: "Chipset: B550 · Socket AM4 · ATX · Max 128GB DDR4", price: 101.66, badge: "budget", socket: "AM4", form: "ATX" },
    { id: "mb04", name: "ASUS PRIME B550M-A WIFI II", specs: "Chipset: B550 · Socket AM4 · E-ATX · Max 128GB DDR4", price: 100, badge: "budget", socket: "AM4", form: "mATX" },
    { id: "mb05", name: "ASUS TUF Gaming B550M-Plus WIFI II", specs: "Chipset: B550 · Socket AM4 · Micro-ATX · Max 128GB DDR4", price: 134.90, badge: "budget", socket: "AM4", form: "mATX" },
    { id: "mb06", name: "ASUS ROG STRIX B550-F Gaming WIFI II", specs: "Chipset: B550 · Socket AM4 · ATX · Max 128GB DDR4", price: 147.99, badge: "mid", socket: "AM4", form: "ATX" },
    { id: "mb07", name: "ASUS ROG STRIX B650-A Gaming WIFI", specs: "Chipset: B650 · Socket AM5 · ATX · Max 128GB DDR5", price: 175, badge: "mid", socket: "AM5", form: "ATX" },
    { id: "mb08", name: "GIGABYTE B650 Eagle AX", specs: "Chipset: B650 · Socket AM5 · ATX · Max 256GB DDR5", price: 133.99, badge: "mid", socket: "AM5", form: "ATX" },
    { id: "mb09", name: "MSI B650 Gaming Plus WIFI", specs: "Chipset: B650 · Socket AM5 · ATX · Max 192GB DDR5 · 2.5G LAN", price: 149.99, badge: "mid", socket: "AM5", form: "ATX" },
    { id: "mb10", name: "MSI PRO B650M-P Micro-ATX", specs: "Chipset: B650 · Socket AM5 · Micro-ATX · Max 192GB DDR5", price: 116.99, badge: "mid", socket: "AM5", form: "mATX" },
    { id: "mb11", name: "GIGABYTE B850 AORUS Elite WIFI7", specs: "Chipset: B850 · Socket AM5 · ATX · Max 256GB DDR5 · WiFi 7", price: 204.99, badge: "high", socket: "AM5", form: "ATX" },
    { id: "mb12", name: "ASUS TUF Gaming B850-E WIFI", specs: "Chipset: B850 · Socket AM5 · ATX · Max 256GB DDR5", price: 209.99, badge: "high", socket: "AM5", form: "ATX" },
    { id: "mb13", name: "MSI MAG B850 Tomahawk MAX WIFI", specs: "Chipset: B850 · Socket AM5 · ATX · Max 256GB DDR5", price: 240.99, badge: "high", socket: "AM5", form: "ATX" },
    { id: "mb14", name: "MSI MAG X870E Tomahawk WIFI", specs: "Chipset: X870E · Socket AM5 · ATX · Max 256GB DDR5", price: 329, badge: "high", socket: "AM5", form: "ATX" },
    { id: "mb15", name: "MSI MPG X870E Edge TI WIFI", specs: "Chipset: X870E · Socket AM5 · ATX · Max 256GB DDR5", price: 400.50, badge: "extreme", socket: "AM5", form: "ATX" },
    { id: "mb16", name: "ASUS ROG MAXIMUS Z890 Hero BTF", specs: "Chipset: Z890 · Socket LGA1851 · ATX · Max 256GB DDR5", price: 699, badge: "extreme", socket: "LGA1851", form: "ATX" },
    { id: "mb17", name: "MSI PRO H610M-E DDR4", specs: "Chipset: H610 · Socket LGA1700 · Micro-ATX · Max 64GB DDR4", price: 67.30, badge: "budget", socket: "LGA1700", form: "mATX" },
    { id: "mb18", name: "MSI Pro B760M-P DDR4", specs: "Chipset: B760 · Socket LGA1700 · Micro-ATX · Max 128GB DDR4", price: 94.97, badge: "budget", socket: "LGA1700", form: "mATX" },
    { id: "mb19", name: "Asrock B760 PRO RS ATX", specs: "Chipset: B760 · Socket LGA1700 · ATX · Max 128GB", price: 112.99, badge: "budget", socket: "LGA1700", form: "ATX" },
    { id: "mb20", name: "ASUS PRIME B760M-A WIFI D4", specs: "Chipset: B760 · Socket LGA1700 · Micro-ATX · Max 128GB DDR4", price: 135.49, badge: "mid", socket: "LGA1700", form: "mATX" },
    { id: "mb21", name: "MSI B760 Gaming Plus WIFI DDR4", specs: "Chipset: B760 · Socket LGA1700 · ATX · Max 128GB DDR4", price: 136.99, badge: "mid", socket: "LGA1700", form: "ATX" },
    { id: "mb22", name: "Asrock B760M Steel Legend WIFI", specs: "Chipset: B760 · Socket LGA1700 · Micro-ATX · DDR5 · WiFi 6E", price: 153.12, badge: "mid", socket: "LGA1700", form: "mATX" },
    { id: "mb23", name: "GIGABYTE Z690 Gaming X DDR4", specs: "Chipset: Z690 · Socket LGA1700 · ATX · Max 128GB DDR4", price: 236, badge: "mid", socket: "LGA1700", form: "ATX" },
    { id: "mb24", name: "GIGABYTE Z790 AORUS Elite AX", specs: "Chipset: Z790 · Socket LGA1700 · ATX · Max 128GB", price: 223.84, badge: "high", socket: "LGA1700", form: "ATX" },
    { id: "mb25", name: "ASUS TUF Gaming B760M-Plus WIFI II", specs: "Chipset: B760 · Socket LGA1700 · Micro-ATX · Max 192GB DDR5", price: 176, badge: "mid", socket: "LGA1700", form: "mATX" },
    { id: "mb26", name: "GIGABYTE Z890 AORUS Elite WIFI7 ICE", specs: "Chipset: Z890 · Socket LGA1851 · ATX · DDR5 · WiFi 7", price: 227.99, badge: "high", socket: "LGA1851", form: "ATX" },
    { id: "mb27", name: "MSI B860M Gaming Plus WIFI", specs: "Chipset: B860 · Socket LGA1851 · Micro-ATX · DDR5", price: 181.15, badge: "mid", socket: "LGA1851", form: "mATX" },
    { id: "mb28", name: "ASUS ROG STRIX B860-A Gaming WIFI", specs: "Chipset: B860 · Socket LGA1851 · ATX · DDR5", price: 234.07, badge: "high", socket: "LGA1851", form: "ATX" },
  ],
  gpu: [
    { id: "gpu01", name: "XFX Speedster SWFT 210 RX 7600", specs: "8GB GDDR6 · PCIe 4.0 · 1x HDMI 2.1b · 3x DP · 2 slots", price: 266.99, badge: "budget" },
    { id: "gpu02", name: "Gigabyte RX 7600 Gaming OC", specs: "8GB GDDR6 · PCIe 4.0 · 2x HDMI 2.1b · 2x DP 1.4 · 2 slots", price: 286.82, badge: "budget" },
    { id: "gpu03", name: "Acer Nitro Intel Arc B570 OC", specs: "10GB GDDR6 · PCIe 4.0 · 1x HDMI 2.1b · 3x DP 2.1a · 3 slots", price: 234.95, badge: "budget" },
    { id: "gpu04", name: "MSI Ventus 2X RTX 5060 OC", specs: "8GB GDDR7 · PCIe 5.0 · 1x HDMI 2.1b · 3x DP 2.1a · 3 slots", price: 320.99, badge: "budget" },
    { id: "gpu05", name: "MSI Gaming OC RTX 5060", specs: "8GB GDDR7 · PCIe 5.0 · 1x HDMI 2.1b · 3x DP 2.1a · 3 slots", price: 353.99, badge: "budget" },
    { id: "gpu06", name: "ASUS PRIME RTX 5060 OC", specs: "8GB GDDR7 · PCIe 5.0 · 1x HDMI 2.1b · 3x DP 2.1a · 2.5 slots", price: 368.99, badge: "budget" },
    { id: "gpu07", name: "Palit RTX 5060 White OC", specs: "8GB GDDR7 · PCIe 5.0 · Gaming ready", price: 353.99, badge: "budget" },
    { id: "gpu08", name: "Gigabyte RX 9060 XT Gaming OC 8GB", specs: "8GB GDDR6 · PCIe 5.0 · 1x HDMI 2.1 · 2x DP 2.1 · 3 slots", price: 347.99, badge: "mid" },
    { id: "gpu09", name: "XFX RX 9060 XT 16GB", specs: "16GB GDDR6 · PCIe 5.0 · 2 slots", price: 453.99, badge: "mid" },
    { id: "gpu10", name: "Gigabyte RX 9060 XT Gaming OC 16GB", specs: "16GB GDDR6 · PCIe 5.0 · 3 slots", price: 453.99, badge: "mid" },
    { id: "gpu11", name: "Sapphire Pulse RX 9060 XT 16GB", specs: "16GB GDDR6 · PCIe 5.0 · 2x HDMI 2.1 · 1x DP 2.1 · 3 slots", price: 456.63, badge: "mid" },
    { id: "gpu12", name: "PowerColor Hellhound RX 9060 XT 16GB", specs: "16GB GDDR6 · PCIe 5.0 · 2 slots", price: 436.99, badge: "mid" },
    { id: "gpu13", name: "ASUS Prime RX 9060 XT OC 16GB", specs: "16GB GDDR6 · 1x HDMI 2.1b · 2x DP 2.1a · 2.5 slots", price: 499, badge: "mid" },
    { id: "gpu14", name: "ASUS Dual RTX 4070 Super 12GB", specs: "12GB GDDR6X · PCIe 4.0 · 2 slots", price: 899, badge: "mid" },
    { id: "gpu15", name: "Gigabyte RX 9070 XT Gaming OC 16GB", specs: "16GB GDDR6 · PCIe 5.0 · 2x HDMI 2.1b · 3x DP 2.1a · 3 slots", price: 719.95, badge: "high" },
    { id: "gpu16", name: "GIGABYTE RTX 5070 Windforce OC SFF", specs: "12GB GDDR7 · PCIe 5.0 · 2 slots", price: 647.99, badge: "high" },
    { id: "gpu17", name: "ASUS PRIME RTX 5070 OC", specs: "12GB GDDR7 · PCIe 5.0 · 1x HDMI 2.1b · 3x DP 2.1a", price: 669, badge: "high" },
    { id: "gpu18", name: "ASUS PRIME RTX 5070 Ti O16G", specs: "16GB GDDR7 · PCIe 5.0 · 1x HDMI 2.1b · 3x DP 2.1a · 2 slots", price: 1039, badge: "high" },
    { id: "gpu19", name: "GIGABYTE RTX 5070 Ti Windforce OC SFF", specs: "16GB GDDR7 · PCIe 5.0 · 2 slots", price: 981.99, badge: "high" },
    { id: "gpu20", name: "ASUS PRIME RTX 5080 O16G", specs: "16GB GDDR7 · PCIe 5.0 · 1x HDMI 2.1b · 3x DP 2.1a · 2.5 slots", price: 1379, badge: "extreme" },
    { id: "gpu21", name: "Zotac Gaming RTX 5080 Solid Core OC", specs: "16GB GDDR7 · PCIe 5.0 · 2.5 slots", price: 1199, badge: "extreme" },
    { id: "gpu22", name: "GIGABYTE RTX 5080 Aero OC SFF", specs: "16GB GDDR7 · PCIe 5.0 · 2.5 slots", price: 1395.99, badge: "extreme" },
    { id: "gpu23", name: "MSI RTX 5080 Vanguard SOC", specs: "16GB GDDR7 · PCIe 5.0 · 4 slots", price: 1549, badge: "extreme" },
    { id: "gpu24", name: "ASUS ROG Astral RTX 5080 Hatsune Miku", specs: "16GB GDDR7 · PCIe 5.0 · Speciaal editie · 3.8 slots", price: 1971.19, badge: "extreme" },
  ],
  ram: [
    { id: "ram01", name: "Kingston Fury Beast 8GB DDR4", specs: "8GB (1x8GB) · DDR4 · 3200MHz · CL16 · DIMM", price: 77.95, badge: "budget", type: "DDR4" },
    { id: "ram02", name: "Kingston Fury Beast 16GB DDR4", specs: "16GB · DDR4 · 3200MHz · CL16 · DIMM", price: 159, badge: "budget", type: "DDR4" },
    { id: "ram03", name: "Corsair Vengeance LPX 16GB DDR4", specs: "16GB (2x8GB) · DDR4 · 3200MHz · CL16 · DIMM", price: 159.90, badge: "budget", type: "DDR4" },
    { id: "ram04", name: "Corsair Vengeance LPX 32GB DDR4", specs: "32GB (2x16GB) · DDR4 · 3200MHz · CL16 · DIMM", price: 229, badge: "mid", type: "DDR4" },
    { id: "ram05", name: "Corsair Vengeance RGB Pro SL 32GB DDR4", specs: "32GB (2x16GB) · DDR4 · 3200MHz · CL16 · RGB · DIMM", price: 229, badge: "mid", type: "DDR4" },
    { id: "ram06", name: "Corsair Vengeance 32GB DDR4 White", specs: "32GB · DDR4 · 3200MHz · CL16 · DIMM", price: 251.17, badge: "mid", type: "DDR4" },
    { id: "ram07", name: "Corsair Vengeance 16GB DDR5", specs: "16GB (2x8GB) · DDR5 · 5200MHz · CL40 · DIMM", price: 219, badge: "mid", type: "DDR5" },
    { id: "ram08", name: "Kingston Fury Beast 16GB DDR5", specs: "16GB · DDR5 · 6000MHz · DIMM", price: 259.95, badge: "mid", type: "DDR5" },
    { id: "ram09", name: "Corsair Vengeance 32GB DDR5 6000MHz", specs: "32GB (2x16GB) · DDR5 · 6000MHz · CL38 · Intel XMP · DIMM", price: 349.95, badge: "mid", type: "DDR5" },
    { id: "ram10", name: "Kingston Fury Beast RGB 32GB DDR5", specs: "32GB (2x16GB) · DDR5 · 6000MHz · CL36 · RGB · DIMM", price: 399, badge: "mid", type: "DDR5" },
    { id: "ram11", name: "Corsair Vengeance DDR5 32GB 6400MHz AMD EXPO", specs: "32GB (2x16GB) · DDR5 · 6400MHz · CL36 · AMD EXPO · DIMM", price: 379, badge: "high", type: "DDR5" },
    { id: "ram12", name: "Corsair Vengeance RGB DDR5 32GB 6400MHz", specs: "32GB (2x16GB) · DDR5 · 6400MHz · Intel XMP · RGB · DIMM", price: 385, badge: "high", type: "DDR5" },
    { id: "ram13", name: "Corsair Vengeance RGB DDR5 32GB 6000MHz", specs: "32GB (2x16GB) · DDR5 · 6000MHz · CL36 · Intel XMP + AMD EXPO · DIMM", price: 374.95, badge: "high", type: "DDR5" },
    { id: "ram14", name: "Kingston Fury Beast DDR5 32GB 6000MHz", specs: "32GB (2x16GB) · DDR5 · 6000MHz · CL30 · Intel XMP 3.0 · DIMM", price: 384.95, badge: "high", type: "DDR5" },
    { id: "ram15", name: "Corsair Vengeance 64GB DDR5", specs: "64GB (2x32GB) · DDR5 · 6000MHz · DIMM", price: 1170.99, badge: "extreme", type: "DDR5" },
    { id: "ram16", name: "Corsair CMH32GX5M2D6000Z36K 32GB DDR5", specs: "32GB · DDR5 · 4800MHz · DIMM", price: 638.99, badge: "high", type: "DDR5" },
  ],
  ssd: [
    { id: "ssd01", name: "Kingston A400 120GB SATA", specs: "120GB · Lezen 500MB/s · Schrijven 320MB/s · SATA III · 2.5\"", price: 74.95, badge: "budget", type: "SATA" },
    { id: "ssd02", name: "Intenso TOP 256GB SATA", specs: "256GB · Lezen 500MB/s · Schrijven 500MB/s · SATA III · 2.5\"", price: 55.53, badge: "budget", type: "SATA" },
    { id: "ssd03", name: "PNY CS900 500GB SATA", specs: "500GB · Lezen 550MB/s · Schrijven 500MB/s · SATA III · 2.5\"", price: 72.89, badge: "budget", type: "SATA" },
    { id: "ssd04", name: "Samsung 870 EVO 500GB SATA", specs: "500GB · Lezen 560MB/s · Schrijven 530MB/s · SATA III · 2.5\"", price: 148.99, badge: "budget", type: "SATA" },
    { id: "ssd05", name: "SanDisk Green 1TB SATA", specs: "1TB · Lezen 545MB/s · Schrijven 500MB/s · SATA III · 2.5\"", price: 149.61, badge: "budget", type: "SATA" },
    { id: "ssd06", name: "GMR 2TB SATA", specs: "2TB · Lezen 550MB/s · Schrijven 450MB/s · SATA III · 2.5\"", price: 199, badge: "budget", type: "SATA" },
    { id: "ssd07", name: "Intenso M.2 SATA III 256GB", specs: "256GB · Lezen 550MB/s · Schrijven 500MB/s · M.2 SATA III", price: 48.99, badge: "budget", type: "NVMe Gen3" },
    { id: "ssd08", name: "Goodram PX500 256GB NVMe", specs: "256GB · Lezen 3200MB/s · Schrijven 1300MB/s · M.2 PCIe Gen3", price: 62.77, badge: "budget", type: "NVMe Gen3" },
    { id: "ssd09", name: "Integral M2 Series 250GB NVMe", specs: "250GB · Lezen 3350MB/s · Schrijven 1300MB/s · M.2 PCIe 3.1 NVMe", price: 79, badge: "budget", type: "NVMe Gen3" },
    { id: "ssd10", name: "Netac Shadow RGB 500GB NVMe", specs: "500GB · Lezen 3400MB/s · Schrijven 2000MB/s · M.2 NVMe · RGB", price: 99.99, badge: "budget", type: "NVMe Gen3" },
    { id: "ssd11", name: "Lexar NM620 1TB NVMe Gen3", specs: "1TB · Lezen 3500MB/s · Schrijven 3000MB/s · M.2 PCIe Gen3x4", price: 135.23, badge: "mid", type: "NVMe Gen3" },
    { id: "ssd12", name: "Lexar LNQ790 1TB NVMe Gen4", specs: "1TB · Lezen 7000MB/s · Schrijven 6000MB/s · M.2 PCIe 4.0", price: 149.99, badge: "mid", type: "NVMe Gen4" },
    { id: "ssd13", name: "Samsung 990 EVO Plus 1TB", specs: "1TB · Lezen 7150MB/s · Schrijven 6300MB/s · M.2 PCIe 4.0 NVMe", price: 159, badge: "mid", type: "NVMe Gen4" },
    { id: "ssd14", name: "WD Black SN850X 1TB met Heatsink", specs: "1TB · Lezen 7300MB/s · Schrijven 6300MB/s · M.2 NVMe · Heatsink", price: 183.18, badge: "mid", type: "NVMe Gen4" },
    { id: "ssd15", name: "Samsung 990 PRO 1TB", specs: "1TB · Lezen 7450MB/s · Schrijven 6900MB/s · M.2 PCIe 4.0 NVMe", price: 194.90, badge: "mid", type: "NVMe Gen4" },
    { id: "ssd16", name: "WD Black SN850X 2TB", specs: "2TB · Lezen 7300MB/s · Schrijven 6300MB/s · M.2 NVMe PCIe", price: 297.99, badge: "high", type: "NVMe Gen4" },
    { id: "ssd17", name: "Seagate Game Drive 2TB met Heatsink", specs: "2TB · Lezen 7300MB/s · Schrijven 6900MB/s · M.2 PCIe Gen4 NVMe", price: 280.99, badge: "high", type: "NVMe Gen4" },
    { id: "ssd18", name: "Lexar PLAY SSD 2TB", specs: "2TB · Lezen 7400MB/s · Schrijven 6500MB/s · M.2 2280 NVMe PCIe Gen4", price: 413, badge: "high", type: "NVMe Gen4" },
    { id: "ssd19", name: "Samsung 9100 PRO 2TB Gen5", specs: "2TB · Lezen 14700MB/s · Schrijven 13400MB/s · M.2 PCIe 5.0 NVMe", price: 295.87, badge: "high", type: "NVMe Gen5" },
    { id: "ssd20", name: "Samsung 9100 PRO 2TB Gen5 Heatsink", specs: "2TB · Lezen 13300MB/s · Schrijven 13300MB/s · M.2 PCIe 5.0 NVMe · Heatsink", price: 359.06, badge: "high", type: "NVMe Gen5" },
    { id: "ssd21", name: "Samsung 990 PRO 4TB Heatsink", specs: "4TB · Lezen 7450MB/s · Schrijven 6900MB/s · M.2 PCIe 4.0 NVMe · Heatsink", price: 559.99, badge: "extreme", type: "NVMe Gen5" },
  ],
  cooling: [
    { id: "cool01", name: "Cooler Master X Dream i117", specs: "Luchtkoeler · Intel LGA1200/1156/1155/1151/1150/775", price: 17, badge: "budget", type: "air" },
    { id: "cool02", name: "Cooler Master Hyper 212 Black", specs: "Luchtkoeler · Multi-socket · 120mm fan", price: 29, badge: "budget", type: "air" },
    { id: "cool03", name: "Arctic Freezer 36", specs: "Luchtkoeler · Intel LGA1851/1700 · AMD AM5/AM4 · 200-1800rpm · 4-pin PWM", price: 31.15, badge: "budget", type: "air" },
    { id: "cool04", name: "be quiet! Pure Rock Slim 2", specs: "Luchtkoeler · FM4/AM3/4/115x · LGA1200 · TDP 120W", price: 32, badge: "budget", type: "air" },
    { id: "cool05", name: "DeepCool AK400", specs: "Luchtkoeler · Multi-socket · 120mm fan", price: 30.05, badge: "budget", type: "air" },
    { id: "cool06", name: "DeepCool AK400 Digital", specs: "Luchtkoeler · Multi-socket · LCD display · 120mm fan", price: 44.90, badge: "budget", type: "air" },
    { id: "cool07", name: "be quiet! Pure Rock Pro 3 Silver", specs: "Luchtkoeler · LGA1150/1151/1155/1200/1700/1851 · AM4/AM5", price: 48, badge: "budget", type: "air" },
    { id: "cool08", name: "Thermalright Peerless Assassin 120 SE", specs: "Luchtkoeler · Dual tower · 66.17 CFM · 1550 RPM · 25.6 dBA · 4-pin PWM", price: 47.85, badge: "mid", type: "air" },
    { id: "cool09", name: "DeepCool AK500S Digital", specs: "Luchtkoeler · Intel LGA2066/2011/1200/1700/115x · 4-pin PWM · LCD", price: 58.50, badge: "mid", type: "air" },
    { id: "cool10", name: "be quiet! Dark Rock 5", specs: "Luchtkoeler · LGA1700/1200/115x · AMD AM5/AM4 · 2100 RPM · Zwart", price: 69.90, badge: "mid", type: "air" },
    { id: "cool11", name: "Noctua NH-L9x65 chromax.black", specs: "Luchtkoeler (Low Profile) · LGA1851/1700/1200/115x · AM5/AM4", price: 75, badge: "mid", type: "air" },
    { id: "cool12", name: "be quiet! Dark Rock Pro 5", specs: "Luchtkoeler · 270W TDP · 168mm hoogte · Multi-socket", price: 93.90, badge: "high", type: "air" },
    { id: "cool13", name: "DeepCool LE500 240mm AIO", specs: "AIO Waterkoeling · 240mm radiator · 2x 120mm PWM RGB fans", price: 41.45, badge: "budget", type: "aio240" },
    { id: "cool14", name: "Cooler Master MLW-D24M 240mm AIO", specs: "AIO Waterkoeling · 240mm radiator · RGB", price: 70, badge: "mid", type: "aio240" },
    { id: "cool15", name: "ARCTIC Liquid Freezer III Pro 240", specs: "AIO Waterkoeling · 240mm · Intel LGA1851/1700 · AMD AM5/AM4", price: 73.99, badge: "mid", type: "aio240" },
    { id: "cool16", name: "DeepCool LQ240 AIO", specs: "AIO Waterkoeling · 240mm · Intel LGA1851/1700/1200/115x · AM5/AM4", price: 84.90, badge: "mid", type: "aio240" },
    { id: "cool17", name: "Arctic Liquid Freezer III Pro 280", specs: "AIO Waterkoeling · 280mm · Intel LGA1851/1700 · AMD AM5/AM4 · 2x 140mm P14", price: 83.99, badge: "mid", type: "aio280" },
    { id: "cool18", name: "MSI MAG Coreliquid I360 360mm AIO", specs: "AIO Waterkoeling · 360mm · 3x 120mm RGB fans", price: 89, badge: "mid", type: "aio360" },
    { id: "cool19", name: "Arctic Liquid Freezer III Pro 360", specs: "AIO Waterkoeling · 360mm · Intel LGA1851/1700 · AMD AM5/AM4", price: 84.99, badge: "mid", type: "aio360" },
    { id: "cool20", name: "Corsair Nautilus 360 RS ARGB", specs: "AIO Waterkoeling · 360mm · 3x RS120 RGB fans · Multi-socket", price: 99.90, badge: "high", type: "aio360" },
    { id: "cool21", name: "Arctic Liquid Freezer III Pro 360 A-RGB Black", specs: "AIO Waterkoeling · 360mm · A-RGB · Intel LGA1851/1700 · AMD AM5/AM4", price: 94.49, badge: "high", type: "aio360" },
    { id: "cool22", name: "Arctic Liquid Freezer III Pro 360 A-RGB White", specs: "AIO Waterkoeling · 360mm · A-RGB · Wit · Intel LGA1851/1700 · AMD AM5/AM4", price: 109.38, badge: "high", type: "aio360" },
    { id: "cool23", name: "Lian Li HydroShift LCD 360S White", specs: "AIO Waterkoeling · 360mm · LCD display · Intel LGA1700 · AMD", price: 187, badge: "extreme", type: "aio360" },
  ],
  psu: [
    { id: "psu01", name: "LC-Power LC600H-12 V2.31", specs: "600W · 80 Plus · Niet modulair · 1 jaar garantie", price: 49.85, badge: "budget", watt: 600 },
    { id: "psu02", name: "AZZA 650W Bronze RGB", specs: "650W · 80 Plus Bronze · Niet modulair · RGB verlichting", price: 61.45, badge: "budget", watt: 650 },
    { id: "psu03", name: "GAMDIAS Aura GP750", specs: "750W · Niet modulair · 2x 6+2 PIN · 2 jaar garantie", price: 52.99, badge: "budget", watt: 750 },
    { id: "psu04", name: "GAMDIAS Helios M1-650B", specs: "650W · 80 Plus Bronze · Niet modulair · 3 jaar garantie", price: 56.99, badge: "budget", watt: 650 },
    { id: "psu05", name: "GAMDIAS Helios P2-750G", specs: "750W · 80 Plus Gold · Volledig modulair · 3 jaar garantie", price: 69.99, badge: "budget", watt: 750 },
    { id: "psu06", name: "Corsair CX750", specs: "750W · 80 Plus Bronze · Niet modulair · 5 jaar garantie", price: 72.90, badge: "budget", watt: 750 },
    { id: "psu07", name: "LC-Power V2.3 LC6650 650W", specs: "650W · 80 Plus Bronze · Niet modulair · 4x PCI-Express 6+2 Pin", price: 87.79, badge: "budget", watt: 650 },
    { id: "psu08", name: "Cooler Master MWE Gold 850 V3", specs: "850W · 80 Plus Gold · Niet modulair · 1 jaar garantie", price: 94.50, badge: "mid", watt: 850 },
    { id: "psu09", name: "MSI MAG A750GL PCIE5 II", specs: "750W · 80 Plus Gold · Volledig modulair · ATX 3.1 · PCIe 5.1 · 2 jaar", price: 96.50, badge: "mid", watt: 750 },
    { id: "psu10", name: "Corsair RM650e (2025)", specs: "650W · 80 Plus Gold · Volledig modulair · ATX 3.1 · PCIe 5.1 · 7 jaar", price: 89, badge: "mid", watt: 650 },
    { id: "psu11", name: "Corsair RM850e (2025)", specs: "850W · 80 Plus Gold · Volledig modulair · ATX 3.1 · PCIe 5.1 · 7 jaar", price: 113, badge: "mid", watt: 850 },
    { id: "psu12", name: "MSI MAG A850GL PCIE5", specs: "850W · 80 Plus Gold · Volledig modulair · ATX 3.0 · 1 jaar garantie", price: 119.78, badge: "mid", watt: 850 },
    { id: "psu13", name: "FSP VITA GM 1000W", specs: "1000W · 80 Plus Gold · Volledig modulair · ATX 3.0", price: 123.99, badge: "high", watt: 1000 },
    { id: "psu14", name: "Corsair RM850x", specs: "850W · 80 Plus Gold · Volledig modulair · ATX 3.1 · PCIe 5.1 · 7 jaar", price: 154, badge: "high", watt: 850 },
    { id: "psu15", name: "LC-Power 1000W V3.1 White", specs: "1000W · 80 Plus Gold · Volledig modulair · Wit", price: 149.50, badge: "high", watt: 1000 },
    { id: "psu16", name: "HP OMEN 1000W", specs: "1000W · 80 Plus Gold · Volledig modulair · ATX 3.1 · 2 jaar", price: 145.99, badge: "high", watt: 1000 },
    { id: "psu17", name: "ASUS TUF Gaming 1000W Gold", specs: "1000W · 80 Plus Gold · Volledig modulair · 1 jaar garantie", price: 170, badge: "high", watt: 1000 },
    { id: "psu18", name: "Be Quiet! Pure Power 13 M 1000W", specs: "1000W · 80 Plus Gold · Volledig modulair · ETA Platinum · 2 jaar", price: 169.90, badge: "high", watt: 1000 },
    { id: "psu19", name: "GAMDIAS Helios P2-1300G", specs: "1300W · 80 Plus Gold · Volledig modulair · 3 jaar garantie", price: 174.50, badge: "extreme", watt: 1300 },
    { id: "psu20", name: "be quiet! Dark Power Pro 13 2200W", specs: "2200W · 80 Plus Platinum · Volledig modulair · ATX 3.1 · PCIe 5.1", price: 537, badge: "extreme", watt: 2200 },
    { id: "psu21", name: "Antec SIGNATURE 2200W Platinum", specs: "2200W · 80 Plus Platinum · Volledig modulair · 20+4 pin ATX", price: 649.94, badge: "extreme", watt: 2200 },
  ],
  case: [
    { id: "case01", name: "SBOX PCC-05 Micro Tower", specs: "Mini-ITX / Micro-ATX · Geen verlichting · Zwart", price: 31.10, badge: "budget", form: ["mITX", "mATX"] },
    { id: "case02", name: "DeepCool MATREXX 30 SI", specs: "Micro-ATX · 1x 120mm fan · Geen verlichting · Solid panel", price: 34.99, badge: "budget", form: ["mATX"] },
    { id: "case03", name: "Zalman S2 ATX Midi Tower", specs: "ATX · 1x 120mm fan · Geen verlichting · Ventilatie voorzijde", price: 43.26, badge: "budget", form: ["ATX"] },
    { id: "case04", name: "Gamdias Talos E2 Elite", specs: "EEB / Micro-ATX / Mini-ITX · 4x fans · aRGB LED", price: 52.99, badge: "budget", form: ["mITX", "mATX", "ATX"] },
    { id: "case05", name: "Aerocool CYLONW White Mid-Tower", specs: "ATX / Micro-ATX · 1x fan · RGB verlichtingsbalk · Wit", price: 54, badge: "budget", form: ["ATX", "mATX"] },
    { id: "case06", name: "Azza Noir 130 RGB Micro Tower", specs: "Micro-ATX · 2x fans · RGB · Zwart", price: 54.73, badge: "budget", form: ["mATX"] },
    { id: "case07", name: "MSI MAG Forge M100R", specs: "Micro-ATX / Mini-ITX · 4x fans · Geen verlichting · Zwart", price: 56.69, badge: "budget", form: ["mITX", "mATX"] },
    { id: "case08", name: "Zalman Z1 Iceberg White", specs: "Micro-ATX / Mini-ITX · 2x 120mm fans · RGB · Wit", price: 59.50, badge: "budget", form: ["mITX", "mATX"] },
    { id: "case09", name: "MetallicGear Neo V2 ATX", specs: "Micro-ATX / Mini-ITX / ATX · 2x fans · RGB · Zilver", price: 59.90, badge: "budget", form: ["mITX", "mATX", "ATX"] },
    { id: "case10", name: "DeepCool CC560 Mid-Tower", specs: "ATX · 4x 120mm Marrs Green LED fans · Gehard glas · Zwart", price: 60.85, badge: "budget", form: ["ATX"] },
    { id: "case11", name: "be quiet! Pure Base 501 Midi Tower", specs: "ATX · 1x fan · Geen verlichting · Zwart", price: 77.40, badge: "mid", form: ["ATX"] },
    { id: "case12", name: "Spirit of Gamer SPECTRA ATX", specs: "ATX / mATX · 3x fans · Addressable RGB · Gehard glas", price: 79.99, badge: "mid", form: ["ATX", "mATX"] },
    { id: "case13", name: "DeepCool CG530 4F", specs: "ATX · 4x fans · Addressable RGB · Gehard glas · Zwart", price: 70.89, badge: "mid", form: ["ATX"] },
    { id: "case14", name: "DeepCool CG580 WH ATX Panoramic", specs: "ATX · Geen verlichting · Gehard glas · Wit · Single chamber", price: 69.80, badge: "mid", form: ["ATX"] },
    { id: "case15", name: "be quiet! Pure Base 600 Window Orange", specs: "ATX · 2x fans · Geen verlichting · Oranje accenten", price: 94, badge: "mid", form: ["ATX"] },
    { id: "case16", name: "Lian Li DAN Cases A3 Wood Edition", specs: "Micro-ATX · Mesh side-panel · Wood Edition Black · Geen verlichting", price: 93.99, badge: "mid", form: ["mATX"] },
    { id: "case17", name: "MSI MAG PANO M100R PZ", specs: "Micro-ATX / Mini-ITX · 4x fans · RGB · Gehard glas panoramisch", price: 98.15, badge: "mid", form: ["mITX", "mATX"] },
    { id: "case18", name: "ASUS A32 PLUS Tower Wit", specs: "ATX · Addressable RGB · Gehard glas · Wit", price: 99.90, badge: "mid", form: ["ATX"] },
    { id: "case19", name: "Corsair 2500X White Mini-Tower", specs: "Mini-ITX / Micro-ATX · 0 fans · RGB · Gehard glas · Wit", price: 104.10, badge: "mid", form: ["mITX", "mATX"] },
    { id: "case20", name: "MSI MPG Gungnir 300R Airflow", specs: "ATX / EATX / ITX / mATX · 4x fans · RGB · Airflow optimized", price: 113.44, badge: "high", form: ["mITX", "mATX", "ATX"] },
  ],
};

const presets = [
  { name: "Budget Office", use: "Kantoor & School", useColor: "budget", desc: "Ideaal voor dagelijks werk, Office, browsen en videostreaming.", parts: { cpu: "cpu01", mobo: "mb02", gpu: null, ram: "ram02", ssd: "ssd13", cooling: "cool04", psu: "psu05", case: "case03" }, price: 827, specs: [["CPU", "Ryzen 5 5500"], ["RAM", "16GB DDR4 3200"], ["SSD", "1TB NVMe Gen4"], ["GPU", "Geïntegreerd"]] },
  { name: "Budget Gaming", use: "Gaming 1080p", useColor: "budget", desc: "Vlot 1080p gaming op hoge instellingen. Perfecte instapper voor PC gaming.", parts: { cpu: "cpu03", mobo: "mb02", gpu: "gpu02", ram: "ram02", ssd: "ssd13", cooling: "cool04", psu: "psu09", case: "case13" }, price: 1215, specs: [["CPU", "Ryzen 5 5600"], ["GPU", "RX 7600 8GB"], ["RAM", "16GB DDR4"], ["SSD", "1TB NVMe"]] },
  { name: "Mid Gaming", use: "Gaming 1440p", useColor: "mid", desc: "Vloeiend 1440p gaming op ultra instellingen. Ideaal voor competitief gaming en streaming.", parts: { cpu: "cpu09", mobo: "mb09", gpu: "gpu16", ram: "ram09", ssd: "ssd15", cooling: "cool08", psu: "psu11", case: "case13" }, price: 1770, specs: [["CPU", "Ryzen 7 9700X"], ["GPU", "RTX 5070 12GB"], ["RAM", "32GB DDR5 6000"], ["SSD", "1TB NVMe Gen4"]] },
  { name: "High-End Gaming", use: "Gaming 4K", useColor: "high", desc: "Maximale gaming prestaties voor 4K en high refresh rate.", parts: { cpu: "cpu10", mobo: "mb13", gpu: "gpu18", ram: "ram11", ssd: "ssd16", cooling: "cool21", psu: "psu17", case: "case20" }, price: 2875, specs: [["CPU", "Ryzen 7 9800X3D"], ["GPU", "RTX 5070 Ti 16GB"], ["RAM", "32GB DDR5 6400"], ["SSD", "2TB NVMe Gen4"]] },
  { name: "Content Creator", use: "Video & Streaming", useColor: "mid", desc: "Gebouwd voor video editing, 3D rendering en streaming.", parts: { cpu: "cpu16", mobo: "mb24", gpu: "gpu17", ram: "ram14", ssd: "ssd17", cooling: "cool19", psu: "psu17", case: "case18" }, price: 2355, specs: [["CPU", "Core i7-14700KF"], ["GPU", "RTX 5070 12GB"], ["RAM", "32GB DDR5 6000"], ["SSD", "2TB NVMe Gen4"]] },
  { name: "Extreme Beast", use: "No Limits", useColor: "extreme", desc: "Absoluut maximum aan prestaties. Voor wie het beste wil zonder compromissen.", parts: { cpu: "cpu11", mobo: "mb15", gpu: "gpu23", ram: "ram15", ssd: "ssd20", cooling: "cool23", psu: "psu20", case: "case20" }, price: 3790, specs: [["CPU", "Ryzen 9 9950X3D"], ["GPU", "RTX 5080 16GB"], ["RAM", "64GB DDR5 6000"], ["SSD", "2TB NVMe Gen5"]] },
];

const prebuilts = {
  budget: [
    { brand: "LalaShops", name: "AMD Ryzen 5 RGB Budget Gaming PC", specs: "AMD Ryzen 5 3400G · 8GB RAM · 256GB SSD · AMD Radeon RX Vega 10 · Win 11", price: 399.99, tag: "Gaming" },
    { brand: "LalaShops", name: "AMD Ryzen 5 School & Kantoor PC", specs: "AMD Ryzen 5 3400G · 16GB RAM · 500GB SSD · AMD Radeon Graphics · MS Office 2024", price: 489.99, tag: "Office" },
    { brand: "GMR", name: "Intel Core i5 Desktop PC", specs: "Intel Core i5-8400 · 8GB RAM · 512GB SSD M.2 · Intel UHD Graphics · Win 11 Pro", price: 599, tag: "Office" },
    { brand: "GMR", name: "Intel Core i7 Ultra Mini Smart PC", specs: "Intel Core i7 · 16GB RAM · 512GB SSD · Intel HD Graphics 4600 · Win 11 Pro", price: 599, tag: "Office" },
  ],
  mid: [
    { brand: "LalaShops", name: "Ryzen 5 Budget Game PC Setup", specs: "AMD Ryzen 5 3400G · 16GB RAM · 500GB SSD · AMD Radeon · 24\" Monitor + toetsenbord + muis", price: 619, tag: "Gaming Set" },
    { brand: "ScreenON", name: "Intel Core i7 Compleet PC", specs: "Intel Core i7 · 16GB DDR4 · 512GB SSD · Intel UHD 630 · Win 11 Pro + WiFi & Bluetooth", price: 749, tag: "Office" },
    { brand: "LalaShops", name: "AMD Ryzen 7 5700G Game PC SET", specs: "AMD Ryzen 7 5700G · 16GB RAM · 1TB SSD · AMD Radeon RX Vega 8 · 24\" Monitor set", price: 834.50, tag: "Gaming Set" },
    { brand: "FlowUp", name: "Gaming PC Ryzen 5 — RTX 3050", specs: "AMD Ryzen 5 5500 · 16GB RAM · 1TB SSD · NVIDIA RTX 3050 · Win 11", price: 849, tag: "Gaming" },
    { brand: 'FlowUp x MSI', name: '"Don Kaaklijn" Gaming PC', specs: "AMD Ryzen 5 5600 · 32GB RAM · RTX 5060 · 1TB SSD · Exclusief bij bol.com", price: 1149, tag: "Gaming" },
    { brand: "Kooiker", name: "Diamond VI ARGB Gaming PC", specs: "AMD Ryzen 7 5700X · 32GB DDR4 · RTX 5060 8GB GDDR7 · 1TB SSD · WiFi · 3 jaar garantie", price: 1099, tag: "Gaming" },
  ],
  high: [
    { brand: "FlowUp", name: "Challenger Gaming PC", specs: "AMD Ryzen 7 7800X3D · 32GB DDR5 · RTX 5070 12GB · 1TB SSD · Win 11", price: 2099, tag: "Gaming" },
    { brand: "Scan 3XS", name: "Elite Stage 6 Gaming PC", specs: "AMD Ryzen 7 7800X3D · 32GB Corsair DDR5 · RTX 5070 Ti 16GB · 2TB SSD M.2", price: 2349, tag: "Gaming" },
    { brand: "FlowUp", name: "Arctic FireStorm Gaming PC", specs: "AMD Ryzen 7 7800X3D · 32GB DDR5 · RTX 5080 16GB · 2TB SSD · Win 11", price: 3099, tag: "Gaming" },
  ],
  extreme: [
    { brand: "MSI", name: "MSI AMD Ultimate Game PC", specs: "AMD Ryzen 7 9800X3D · 64GB DDR5 · RTX 5090 · 2TB + 2TB SSD · WiFi · Win 11", price: 5699, tag: "Extreme" },
  ],
};

const laptops = {
  budget: [
    { brand: "ASUS", name: "Chromebook CX1405CTA", specs: "14\" Full HD · Intel N-serie · 4GB RAM · 128GB · Intel UHD Graphics · azerty", price: 259, tag: "Chromebook" },
    { brand: "Lenovo", name: "IdeaPad Slim 3 Chromebook 14\"", specs: "14\" Full HD · MediaTek Kompanio 520 · 4GB RAM · 64GB · azerty", price: 259.95, tag: "Chromebook" },
    { brand: "Samsung", name: "Galaxy Chromebook Book Go 11.6\"", specs: "11\" HD · Intel Celeron · 4GB RAM · 64GB · Intel UHD Graphics", price: 269, tag: "Chromebook" },
    { brand: "Lenovo", name: "IdeaPad 3 Chromebook 15.6\" azerty", specs: "15.6\" Full HD · Intel Celeron · 8GB RAM · 128GB · Intel UHD", price: 299, tag: "Chromebook" },
    { brand: "Lenovo", name: "IdeaPad Slim 3 15IAN8", specs: "15.6\" Full HD · Intel N100 · 4GB RAM · 128GB · Win 11 S + 1j Office", price: 279, tag: "Office" },
    { brand: "Apple", name: "MacBook Pro 13\" 2019 Refurbished", specs: "13.3\" Quad HD · Intel Core i5 · 8GB RAM · 512GB SSD · Intel Iris Plus", price: 446, tag: "Refurbished" },
    { brand: "Apple", name: "MacBook Air 13.3\" M1 Refurbished", specs: "13.3\" · Apple M1 · 8GB RAM · 256GB SSD · Space Grey", price: 497.26, tag: "Refurbished" },
  ],
  mid: [
    { brand: "Acemagic", name: "S16 Gaming Laptop 16\"", specs: "16\" Full HD · AMD Ryzen 7 7735HS · 16GB RAM · 512GB SSD · AMD Radeon · WiFi 6", price: 499, tag: "Gaming" },
    { brand: "HP", name: "17-cp2752nb 17.3\"", specs: "17.3\" Full HD · AMD Ryzen 5 · 16GB RAM · 512GB SSD · AMD Radeon 610M · Win 11 Home · azerty", price: 649, tag: "Laptop" },
    { brand: "HP", name: "15-fd1757nb 15.6\"", specs: "15.6\" Full HD · Intel Core 5 · 16GB RAM · 512GB SSD · Intel Graphics · azerty", price: 669, tag: "Laptop" },
    { brand: "MSI", name: "Thin 15 B13UC Gaming 144Hz", specs: "15.6\" Full HD 144Hz · Intel Core i5 · 16GB RAM · 512GB SSD · NVIDIA GeForce RTX · qwerty", price: 799, tag: "Gaming" },
    { brand: "Apple", name: "MacBook Neo 13\" Indigo", specs: "13\" 2408x1506 · Apple A18 Pro 6-core · 8GB RAM · 256GB SSD", price: 729, tag: "MacBook" },
    { brand: "Apple", name: "MacBook Air (2025) 13\" M4", specs: "13.6\" 2560x1664 · Apple M4 · 16GB RAM · 256GB SSD", price: 943.82, tag: "MacBook" },
  ],
  high: [
    { brand: "HP", name: "OmniBook X Flip 14\" 2-in-1", specs: "14\" Full HD 16:10 Touch · AMD Ryzen AI 7 350 · 16GB RAM · 1TB SSD · azerty", price: 1089, tag: "2-in-1" },
    { brand: "Lenovo", name: "LOQ 17IRX10 Gaming 165Hz", specs: "17.3\" Full HD 165Hz · Intel Core i7 · 16GB RAM · 1TB SSD · NVIDIA GeForce RTX · azerty", price: 1289, tag: "Gaming" },
    { brand: "MSI", name: "Katana 15 HX B14WGK 144Hz", specs: "15.6\" Full HD 144Hz · Intel Core i7 · 16GB RAM · 1TB SSD · RTX 5070 · azerty", price: 1379, tag: "Gaming" },
    { brand: "Lenovo", name: "Legion 5 15AKP10 165Hz", specs: "15.1\" Quad HD 165Hz · AMD Ryzen AI 7 · 32GB RAM · 1TB SSD · NVIDIA RTX · azerty", price: 1699, tag: "Gaming" },
    { brand: "Apple", name: "MacBook Pro 14\" 2025 M5", specs: "14.2\" 3024x1964 · Apple M5 10C CPU/10C GPU · 16GB RAM · 512GB SSD", price: 1753.96, tag: "MacBook" },
    { brand: "ASUS", name: "ROG Strix G18 G814PP 240Hz", specs: "18\" Quad HD 240Hz · AMD Ryzen 9 · 32GB RAM · 1TB SSD · RTX 5070 · azerty", price: 2049, tag: "Gaming" },
    { brand: "ASUS", name: "ROG Zephyrus G14 GA403WR 120Hz", specs: "14\" 2880x1800 120Hz · AMD Ryzen AI 9 · 32GB RAM · 1TB SSD · NVIDIA · azerty", price: 2599, tag: "Gaming" },
  ],
  extreme: [
    { brand: "Samsung", name: "Galaxy Book6 Pro 16\" Ultra 7", specs: "16\" 2880x1800 · Intel Core Ultra 7 · 32GB RAM · 1TB SSD · Copilot+PC + gratis charger", price: 2399, tag: "Premium" },
    { brand: "Samsung", name: "Galaxy Book6 Pro 16\" Ultra X7", specs: "16\" 2880x1800 · Intel Core Ultra X7 · 32GB RAM · 1TB SSD · Copilot+PC + gratis charger", price: 2499, tag: "Premium" },
    { brand: "Samsung", name: "Galaxy Book6 Ultra 16\"", specs: "16\" 2880x1800 · Intel Core Ultra 7 · 32GB RAM · 1TB SSD · Copilot+PC", price: 3599, tag: "Premium" },
    { brand: "Apple", name: "MacBook Pro 2024 16.2\" M4 Max", specs: "16.2\" 3456x2234 · Apple M4 Max 16C CPU/40C GPU · 48GB RAM · 1TB SSD", price: 4487, tag: "MacBook" },
    { brand: "Acer", name: "Predator Helios 18 AI 120Hz", specs: "18\" Mini LED 120Hz · Intel Core Ultra 9 · 128GB RAM · 4.5TB SSD · RTX 5090", price: 5369, tag: "Gaming" },
  ],
};

const sectionDefs = [
  { key: "cpu", label: "Processor (CPU)", icon: "🔲" },
  { key: "mobo", label: "Moederbord", icon: "🔧" },
  { key: "gpu", label: "Videokaart (GPU)", icon: "🎮" },
  { key: "ram", label: "RAM Geheugen", icon: "💾" },
  { key: "ssd", label: "Opslag (SSD)", icon: "💿" },
  { key: "cooling", label: "CPU Koeling", icon: "❄️" },
  { key: "psu", label: "Voeding (PSU)", icon: "⚡" },
  { key: "case", label: "Behuizing", icon: "🗃" },
];

const badgeLabels = { budget: "Budget", mid: "Mid-Range", high: "High-End", extreme: "Extreme" };

const badgeColors = {
  budget: "bg-emerald-500/10 text-emerald-300",
  mid: "bg-blue-500/10 text-blue-300",
  high: "bg-amber-500/10 text-amber-300",
  extreme: "bg-teal-500/10 text-teal-300",
};

const filterDefs = {
  cpu: [{ val: "all", label: "Alle" }, { val: "AM4", label: "AMD AM4" }, { val: "AM5", label: "AMD AM5" }, { val: "LGA1700", label: "Intel LGA1700" }, { val: "LGA1851", label: "Intel LGA1851" }],
  mobo: [{ val: "all", label: "Alle" }, { val: "AM4", label: "AMD AM4" }, { val: "AM5", label: "AMD AM5" }, { val: "LGA1700", label: "Intel LGA1700" }, { val: "LGA1851", label: "Intel LGA1851" }],
  ram: [{ val: "all", label: "Alle" }, { val: "DDR4", label: "DDR4" }, { val: "DDR5", label: "DDR5" }],
  ssd: [{ val: "all", label: "Alle" }, { val: "SATA", label: "SATA 2.5\"" }, { val: "NVMe Gen3", label: "NVMe Gen3" }, { val: "NVMe Gen4", label: "NVMe Gen4" }, { val: "NVMe Gen5", label: "NVMe Gen5" }],
  cooling: [{ val: "all", label: "Alle" }, { val: "air", label: "Luchtkoeling" }, { val: "aio240", label: "AIO 240mm" }, { val: "aio280", label: "AIO 280mm" }, { val: "aio360", label: "AIO 360mm" }],
  psu: [{ val: "all", label: "Alle" }, { val: "600", label: "≤650W" }, { val: "750", label: "700-850W" }, { val: "1000", label: "1000W+" }, { val: "1300", label: "1300W+" }],
  gpu: [{ val: "all", label: "Alle" }, { val: "nvidia", label: "NVIDIA" }, { val: "amd", label: "AMD" }, { val: "intel", label: "Intel Arc" }],
};

// ─── HELPERS ────────────────────────────────────────────────────────────────

function fmt(price) {
  return "€" + price.toLocaleString("nl-BE", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function filterItems(key, filter, items) {
  if (filter === "all") return items;
  if (key === "cpu" || key === "mobo") return items.filter((i) => i.socket === filter);
  if (key === "ram" || key === "ssd") return items.filter((i) => i.type === filter);
  if (key === "cooling") return items.filter((i) => i.type === filter);
  if (key === "psu") {
    if (filter === "600") return items.filter((i) => i.watt <= 700);
    if (filter === "750") return items.filter((i) => i.watt > 700 && i.watt <= 900);
    if (filter === "1000") return items.filter((i) => i.watt >= 1000 && i.watt < 1300);
    if (filter === "1300") return items.filter((i) => i.watt >= 1300);
  }
  if (key === "gpu") {
    if (filter === "nvidia") return items.filter((i) => i.name.includes("RTX") || i.name.includes("GTX"));
    if (filter === "amd") return items.filter((i) => i.name.includes("RX") || i.name.includes("Radeon"));
    if (filter === "intel") return items.filter((i) => i.name.includes("Arc"));
  }
  return items;
}

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function Notice({ children }) {
  return (
    <div className="mb-4 border border-emerald-500/20 border-l-2 border-l-emerald-400 bg-emerald-500/[0.04] px-4 py-2 text-sm text-white/62 leading-relaxed">
      {children}
    </div>
  );
}

function SectionDivider({ children }) {
  return (
    <div className="flex items-center gap-3 border-b border-white/10 pb-2 mb-4 mt-6 text-xs font-bold uppercase tracking-[3px] text-white/30">
      {children}
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}

function ProductCard({ item, selected, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`relative cursor-pointer border p-3 transition-all ${
        selected
          ? "border-emerald-400/60 bg-emerald-500/[0.06] outline outline-1 outline-emerald-400/40"
          : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
      }`}
    >
      {selected && (
        <div className="absolute top-2 right-2 h-[18px] w-[18px] bg-emerald-400 flex items-center justify-center text-[10px] font-bold text-black">✓</div>
      )}
      <div className={`inline-block text-[10px] font-mono tracking-wider uppercase px-1.5 py-0.5 mb-2 ${badgeColors[item.badge]}`}>
        {badgeLabels[item.badge]}
      </div>
      <div className="text-sm font-semibold text-white/90 leading-tight mb-1">{item.name}</div>
      <div className="font-mono text-[10px] text-white/32 leading-relaxed mb-3">{item.specs}</div>
      <div className="flex items-center justify-between">
        <span className={`font-mono text-base font-bold ${selected ? "text-emerald-400" : "text-white/90"}`}>{fmt(item.price)}</span>
        <button className={`border px-2 py-1 text-[11px] font-bold uppercase tracking-wide transition-all ${
          selected ? "bg-emerald-400 border-emerald-400 text-black" : "border-white/20 text-white/40 hover:border-emerald-400 hover:text-emerald-400"
        }`}>
          {selected ? "✓ Geselecteerd" : "+ Kiezen"}
        </button>
      </div>
    </div>
  );
}

function ComponentSection({ secDef, build, filters, onSelect, onFilterChange }) {
  const activeFilter = filters[secDef.key] || "all";
  const items = filterItems(secDef.key, activeFilter, data[secDef.key]);
  const selected = build[secDef.key];
  const defs = filterDefs[secDef.key];

  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 px-3 py-2 bg-white/[0.04] border border-white/10 border-b-0">
        <span>{secDef.icon}</span>
        <span className="text-xs font-bold uppercase tracking-[2px] text-white/58">{secDef.label}</span>
        <span className={`ml-auto font-mono text-[11px] truncate max-w-[180px] ${selected ? "text-emerald-400" : "text-white/22"}`}>
          {selected ? selected.name.substring(0, 30) + (selected.name.length > 30 ? "…" : "") : "Niet geselecteerd"}
        </span>
      </div>
      {defs && (
        <div className="flex flex-wrap gap-1.5 px-3 py-2 bg-white/[0.02] border border-white/10 border-b-0">
          {defs.map((f) => (
            <button
              key={f.val}
              onClick={() => onFilterChange(secDef.key, f.val)}
              className={`border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide transition-all ${
                activeFilter === f.val
                  ? "border-emerald-400 text-emerald-400 bg-emerald-500/5"
                  : "border-white/14 text-white/30 hover:border-white/30 hover:text-white/60"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] border border-white/10">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            selected={build[secDef.key]?.id === item.id}
            onToggle={() => onSelect(secDef.key, item.id)}
          />
        ))}
      </div>
    </div>
  );
}

function BuildSidebar({ build, onRemove, onQuote, onReset }) {
  let total = 0;
  let filled = 0;
  sectionDefs.forEach((s) => { if (build[s.key]) { total += build[s.key].price; filled++; } });
  const pct = Math.round((filled / 8) * 100);

  const warnings = [];
  if (build.cpu && build.mobo && build.cpu.socket !== build.mobo.socket) {
    warnings.push(`⚠ Socket mismatch: ${build.cpu.name.split(" ").slice(0, 3).join(" ")} (${build.cpu.socket}) ≠ ${build.mobo.name.split(" ").slice(0, 3).join(" ")} (${build.mobo.socket})`);
  }

  return (
    <div className="border border-white/10 bg-white/[0.03]">
      <div className="px-4 py-2 bg-white/[0.04] border-b border-white/10 text-[11px] font-bold uppercase tracking-[3px] text-white/32">
        📋 Jouw Build
      </div>
      <div className="py-1">
        {sectionDefs.map((sec) => {
          const item = build[sec.key];
          return (
            <div key={sec.key} className="flex items-start gap-2 px-4 py-1.5 border-b border-white/[0.05] last:border-0">
              <div className={`mt-[5px] h-1.5 w-1.5 rounded-full flex-shrink-0 ${item ? "bg-emerald-400 shadow-[0_0_6px_rgba(0,200,150,0.7)]" : "bg-white/20"}`} />
              <span className="text-[11px] font-bold uppercase tracking-wide text-white/30 min-w-[60px] flex-shrink-0">{sec.label.split(" ")[0]}</span>
              <span className="text-[11px] text-white/55 flex-1 leading-tight">{item ? item.name : "—"}</span>
              {item && <span className="font-mono text-[11px] text-white/80 flex-shrink-0">{fmt(item.price)}</span>}
              {item && (
                <button onClick={() => onRemove(sec.key)} className="text-white/20 hover:text-red-400 transition-colors text-xs flex-shrink-0">✕</button>
              )}
            </div>
          );
        })}
      </div>
      <div className="px-4 py-3 border-t border-white/10 space-y-3">
        <div>
          <div className="flex justify-between font-mono text-[11px] text-white/30 mb-1">
            <span>Volledigheid</span>
            <span className="text-emerald-400">{pct}%</span>
          </div>
          <div className="h-0.5 bg-white/10 rounded">
            <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
        </div>
        {warnings.map((w, i) => (
          <div key={i} className="text-[11px] text-amber-300 bg-amber-500/5 border-l-2 border-amber-400 px-2 py-1.5 leading-tight">{w}</div>
        ))}
        <div className="flex justify-between items-baseline">
          <span className="text-xs font-bold uppercase tracking-[2px] text-white/55">Totaal</span>
          <span className="font-mono text-2xl font-bold text-emerald-400">{fmt(total)}</span>
        </div>
        <button
          disabled={filled < 3}
          onClick={onQuote}
          className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold text-sm uppercase tracking-[3px] transition-all hover:-translate-y-0.5 disabled:from-white/10 disabled:to-white/10 disabled:text-white/20 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          Offerte Aanvragen →
        </button>
        <button
          onClick={onReset}
          className="w-full py-2 border border-white/14 text-[12px] font-bold uppercase tracking-[2px] text-white/30 hover:border-red-400/60 hover:text-red-400 transition-all"
        >
          ✕ Reset Build
        </button>
      </div>
    </div>
  );
}

function PresetCard({ preset, onLoad }) {
  return (
    <div className="relative overflow-hidden border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-white/20 hover:-translate-y-0.5 group">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-white/90">{preset.name}</h3>
        <span className={`text-[10px] font-mono px-2 py-0.5 ${badgeColors[preset.useColor]}`}>{preset.use}</span>
      </div>
      <p className="text-sm text-white/55 mb-4 leading-relaxed">{preset.desc}</p>
      <div className="space-y-1 mb-4">
        {preset.specs.map(([k, v]) => (
          <div key={k} className="font-mono text-[11px] text-white/32">
            <span className="text-white/55">{k}:</span> {v}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xl font-bold text-emerald-400">± {fmt(preset.price)}</span>
        <button
          onClick={onLoad}
          className="border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white/55 hover:border-emerald-400 hover:text-emerald-400 transition-all"
        >
          Laad Build
        </button>
      </div>
    </div>
  );
}

function ProductListCard({ item }) {
  return (
    <div className="border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-white/20 hover:-translate-y-0.5">
      <div className="font-mono text-[10px] uppercase tracking-wide text-white/30 mb-1">{item.brand}</div>
      <div className="font-bold text-sm text-white/90 mb-2 leading-tight">{item.name}</div>
      <div className="font-mono text-[11px] text-white/32 leading-relaxed mb-4">{item.specs}</div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-lg font-bold text-emerald-400">{fmt(item.price)}</span>
        <span className={`text-[10px] font-mono px-2 py-0.5 ${badgeColors[item.tag?.toLowerCase()] || "bg-white/5 text-white/40"}`}>{item.tag}</span>
      </div>
    </div>
  );
}

function Modal({ build, total, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#0c1012] border border-white/14 p-8 max-w-lg w-[90%] relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-white/30 hover:text-white transition-colors text-lg">✕</button>
        <h2 className="text-2xl font-bold mb-1">Jouw Build</h2>
        <p className="text-sm text-white/55 mb-6 leading-relaxed">Overzicht van je geselecteerde onderdelen. Neem contact op voor een offerte op maat.</p>
        <div className="space-y-0 mb-6">
          {sectionDefs.filter((s) => build[s.key]).map((s) => (
            <div key={s.key} className="flex justify-between py-2 border-b border-white/10 text-sm">
              <span className="text-white/55">{s.label}</span>
              <span className="font-mono text-white/90">{build[s.key].name} — {fmt(build[s.key].price)}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between py-3 font-bold">
          <span className="uppercase tracking-wide text-sm">Totaal</span>
          <span className="font-mono text-xl text-emerald-400">{fmt(total)}</span>
        </div>
        <a
          href="mailto:info@northernstudio.be"
          className="mt-4 w-full block text-center py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold uppercase tracking-[3px] text-sm"
        >
          Offerte Aanvragen via Mail
        </a>
      </div>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function PCBuilderPage({ params }) {
  const { locale: routeLocale } = use(params);
  const locale = routeLocale === "en" ? "en" : "nl";

  const [activeTab, setActiveTab] = useState("custom");
  const [build, setBuild] = useState({ cpu: null, mobo: null, gpu: null, ram: null, ssd: null, cooling: null, psu: null, case: null });
  const [filters, setFilters] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const total = sectionDefs.reduce((sum, s) => sum + (build[s.key]?.price || 0), 0);
  const filled = sectionDefs.filter((s) => build[s.key]).length;

  function handleSelect(key, id) {
    setBuild((prev) => ({ ...prev, [key]: prev[key]?.id === id ? null : data[key].find((i) => i.id === id) }));
  }

  function handleRemove(key) {
    setBuild((prev) => ({ ...prev, [key]: null }));
  }

  function handleReset() {
    setBuild({ cpu: null, mobo: null, gpu: null, ram: null, ssd: null, cooling: null, psu: null, case: null });
    setFilters({});
  }

  function handleFilterChange(key, val) {
    setFilters((prev) => ({ ...prev, [key]: val }));
  }

  function loadPreset(idx) {
    const p = presets[idx];
    const newBuild = {};
    Object.keys(build).forEach((k) => {
      newBuild[k] = p.parts[k] ? data[k]?.find((i) => i.id === p.parts[k]) || null : null;
    });
    setBuild(newBuild);
    setActiveTab("custom");
  }

  const tabs = [
    { id: "custom", label: "⚙ Zelf Samenstellen" },
    { id: "presets", label: "⚡ Preset Builds" },
    { id: "prebuilt", label: "🖥 Kant-en-Klaar" },
    { id: "laptops", label: "💻 Laptops" },
  ];

  return (
    <StudioShell locale={locale} active="builder">
      {/* Header stats bar */}
      <div className="flex items-center justify-between py-3 mb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-white/30">
            <span className="text-emerald-400">{filled}</span>/8 delen
          </span>
          <span className="font-mono text-sm text-white/55">
            Totaal: <strong className="text-emerald-400 text-base">{fmt(total)}</strong>
          </span>
        </div>
        <p className="text-[11px] uppercase tracking-[2px] text-white/28">PC Builder België</p>
      </div>

      {/* Tab bar */}
      <div className="flex border-b border-white/10 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 h-10 font-bold text-xs uppercase tracking-[2px] whitespace-nowrap border-b-2 transition-all ${
              activeTab === tab.id
                ? "border-emerald-400 text-emerald-400"
                : "border-transparent text-white/30 hover:text-white/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Custom Build Tab */}
      {activeTab === "custom" && (
        <div className="grid gap-6 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px]">
          <div>
            {sectionDefs.map((sec) => (
              <ComponentSection
                key={sec.key}
                secDef={sec}
                build={build}
                filters={filters}
                onSelect={handleSelect}
                onFilterChange={handleFilterChange}
              />
            ))}
          </div>
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <BuildSidebar build={build} onRemove={handleRemove} onQuote={() => setModalOpen(true)} onReset={handleReset} />
          </div>
        </div>
      )}

      {/* Presets Tab */}
      {activeTab === "presets" && (
        <div>
          <Notice>
            <strong className="text-emerald-400">💡 Tip:</strong> Kies een preset en pas daarna individuele onderdelen aan via "Zelf Samenstellen".
          </Notice>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {presets.map((preset, idx) => (
              <PresetCard key={preset.name} preset={preset} onLoad={() => loadPreset(idx)} />
            ))}
          </div>
        </div>
      )}

      {/* Prebuilt Tab */}
      {activeTab === "prebuilt" && (
        <div>
          <Notice>
            <strong className="text-emerald-400">🖥 Kant-en-Klare PC's:</strong> Direct klaar voor gebruik. Prijzen inclusief Windows licentie tenzij anders vermeld.
          </Notice>
          {["budget", "mid", "high", "extreme"].map((tier, i) => (
            <div key={tier}>
              {i > 0 && <div className="mt-6" />}
              <SectionDivider>{tier === "budget" ? "Budget" : tier === "mid" ? "Mid-Range" : tier === "high" ? "High-End" : "Extreme"}</SectionDivider>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {(prebuilts[tier] || []).map((p) => <ProductListCard key={p.name} item={p} />)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Laptops Tab */}
      {activeTab === "laptops" && (
        <div>
          <Notice>
            <strong className="text-emerald-400">💻 Laptops:</strong> Alle laptops zijn AZERTY (Belgisch toetsenbord) tenzij anders vermeld.
          </Notice>
          {[
            { tier: "budget", label: "Budget — onder €500" },
            { tier: "mid", label: "Mid-Range — €500 tot €1.000" },
            { tier: "high", label: "High-End — €1.000 tot €2.500" },
            { tier: "extreme", label: "Extreme — boven €2.500" },
          ].map(({ tier, label }, i) => (
            <div key={tier}>
              {i > 0 && <div className="mt-6" />}
              <SectionDivider>{label}</SectionDivider>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {(laptops[tier] || []).map((l) => <ProductListCard key={l.name} item={l} />)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modalOpen && <Modal build={build} total={total} onClose={() => setModalOpen(false)} />}
    </StudioShell>
  );
}