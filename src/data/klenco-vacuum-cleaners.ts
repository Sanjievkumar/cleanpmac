import type { Product } from './klenco-floor-cleaning';

export const vacuumCleaners: Product[] = [
  {
    id: "typhoon-nova-q",
    name: "TYPHOON NOVA Q",
    subtitle: "TYPHOON NOVA Q - Ultra-Quiet Professional Dry Vacuum Cleaner",
    description: "The Klenco Typhoon Nova-Q is a compact, high-performance professional dry vacuum cleaner designed to deliver powerful and efficient cleaning across a wide range of commercial environments. Combining strong suction power, ultra-quiet operation, and an ergonomic design, it provides exceptional cleaning performance on carpets and hard floors while ensuring minimal disruption in noise-sensitive areas. Featuring a built-in tool holder, integrated cable storage, and lightweight construction, the Nova-Q enhances operator productivity, convenience, and mobility, making it the ideal choice for hotels, offices, healthcare facilities, educational institutions, and retail environments.",
    image: "/content_images/klenco-typhoon-nova-q.jpg",
    features: [
      "Powerful 1200 W motor for reliable and efficient dry vacuum cleaning",
      "Ultra-quiet operation (<58 dBA) ideal for noise-sensitive environments",
      "Ergonomic carry handle for comfortable transportation",
      "Built-in tool holder keeps accessories organised and within easy reach",
      "Integrated cable storage improves safety and simplifies storage",
      "Compact, lightweight design with large rear wheels for effortless manoeuvrability",
      "Delivers excellent cleaning performance on carpets and hard floor surfaces",
      "Supplied with a complete accessory kit for versatile cleaning applications"
    ],
    applications: [
      "Hotels and hospitality facilities",
      "Office buildings and corporate spaces",
      "Hospitals and healthcare environments",
      "Schools, colleges, and educational institutions",
      "Retail stores and shopping malls",
      "Libraries and public buildings",
      "Conference rooms and meeting facilities",
      "Commercial cleaning and facility management"
    ],
    brochureAvailable: true
  },
  {
    id: "typhoon-r327",
    name: "TYPHOON R327",
    subtitle: "TYPHOON R327 - Professional Wet & Dry Vacuum Cleaner",
    description: "The Klenco Typhoon R327 is a compact yet powerful wet & dry vacuum cleaner engineered for demanding commercial cleaning applications. Manufactured using up to 70% recycled plastic materials, it combines environmental responsibility with outstanding cleaning performance. Equipped with a high-efficiency 1200 W motor, antimicrobial polyester filtration, and a 27-litre collection tank, the R327 effortlessly picks up both dry debris and liquid spills while maintaining excellent suction performance. Its compact design, ergonomic handling, and complete accessory kit make it an ideal solution for hotels, hospitals, offices, workshops, retail outlets, and facility management professionals.",
    image: "/content_images/klenco-typhoon-r327.jpg",
    features: [
      "High-performance wet & dry vacuum cleaner for versatile cleaning applications",
      "Manufactured using up to 70% recycled plastic materials for sustainable operation",
      "Powerful 1200 W high-efficiency motor with reduced energy consumption",
      "Picks up both dry debris and liquid spills with ease",
      "27-litre high-capacity collection tank for extended cleaning",
      "Antimicrobial polyester filter for improved hygiene and cleaner air",
      "Compact, lightweight design for easy manoeuvrability and transportation",
      "Supplied with a complete range of professional cleaning accessories",
      "Optional HEPA filter and specialised floor nozzles available for enhanced performance"
    ],
    applications: [
      "Hotels and hospitality facilities",
      "Hospitals and healthcare environments",
      "Office buildings and commercial spaces",
      "Retail stores and shopping centres",
      "Educational institutions",
      "Workshops and service centres",
      "Warehouses and light industrial facilities",
      "Wet spill recovery and general maintenance cleaning"
    ],
    brochureAvailable: true
  },
  {
    id: "typhoon-432",
    name: "TYPHOON 432",
    subtitle: "TYPHOON 432 - Industrial Wet & Dry Vacuum Cleaner",
    description: "The Klenco Typhoon 432 is a compact yet powerful 32 Litres capacity industrial wet & dry vacuum cleaner designed for demanding commercial and light industrial cleaning applications. Built with a durable stainless steel tank, it is engineered to handle dry dust, dirt, grease, liquid spills, and wastewater with exceptional efficiency. Its lightweight construction, smooth-rolling castors, and ergonomic design make it easy to transport and manoeuvre, while the powerful motor delivers reliable suction performance for everyday professional cleaning tasks.",
    image: "/content_images/klenco-typhoon-432.jpg",
    features: [
      "Powerful wet & dry vacuum cleaning for dust, dirt, grease, and liquid recovery",
      "Durable 32-litre stainless steel tank for long service life and resistance to corrosion",
      "High-performance 1400 W / 1200 W motor for consistent suction power",
      "Lightweight, compact design with heavy-duty castors for effortless mobility",
      "Tilt-to-empty tank design for quick and convenient waste disposal",
      "Low operating noise of 66 dB(A) for comfortable indoor operation",
      "Complete accessory kit for floor, wet pick-up, crevice, and dusting applications",
      "Optional HEPA filter, washable polyester filter, and paper filter system for enhanced filtration"
    ],
    applications: [
      "Commercial buildings and offices",
      "Manufacturing plants and workshops",
      "Warehouses and logistics centres",
      "Hotels and hospitality facilities",
      "Hospitals and healthcare environments",
      "Retail stores and shopping malls",
      "Vehicle workshops and service centres",
      "Wet spill recovery and industrial maintenance cleaning"
    ],
    brochureAvailable: true
  },
  {
    id: "typhoon-463",
    name: "TYPHOON 463",
    subtitle: "TYPHOON 463 - Heavy-Duty Industrial Wet & Dry Vacuum Cleaner",
    description: "The Klenco Typhoon 463 is a 63 litre capacity heavy-duty industrial wet & dry vacuum cleaner designed to meet the demanding requirements of professional cleaning contractors and industrial facilities. Powered by dual high-performance motors and mounted on a robust ergonomic chassis, it delivers exceptional suction power for collecting dry debris, dust, grease, liquids, and wastewater with ease. Its sturdy handles, rotating front castors, large rear wheels, and integrated discharge hose ensure effortless transportation and quick tank emptying, making the Typhoon 463 the ideal solution for continuous heavy-duty cleaning operations.",
    image: "/content_images/klenco-typhoon-463.jpg",
    features: [
      "Powerful 2-motor wet & dry vacuum system for demanding industrial cleaning",
      "High suction performance for efficient recovery of dust, dirt, liquids, and sludge",
      "63-litre collection tank for extended cleaning without frequent emptying",
      "Ergonomically designed chassis with sturdy push handle for easy transportation",
      "Large rear wheels and rotating front castors for excellent manoeuvrability",
      "Integrated discharge hose for fast, clean, and effortless tank emptying",
      "Durable construction designed for continuous professional use",
      "Comprehensive accessory kit with optional HEPA filtration and specialised floor nozzles"
    ],
    applications: [
      "Manufacturing plants and industrial facilities",
      "Warehouses and logistics centres",
      "Construction and contracting sites",
      "Workshops and engineering facilities",
      "Hotels and commercial buildings",
      "Hospitals and healthcare institutions",
      "Shopping malls and public facilities",
      "Recovery of liquid spills, dust, debris, and industrial waste"
    ],
    brochureAvailable: true
  }
];

export const vacuumData = {
  vacuums: vacuumCleaners
};
