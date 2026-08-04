export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  applications?: string[];
  brochureAvailable?: boolean;
}

export const singleDiscMachines: Product[] = [
  {
    id: "cyclone-s401",
    name: "CYCLONE S401",
    subtitle: "Heavy-Duty Single Disc Machine for Professional Floor Care",
    description: "The Klenco Cyclone S401 is a high-performance single disc machine engineered to meet the demanding requirements of professional floor maintenance. Designed for durability, versatility, and ease of operation, it delivers outstanding cleaning results across commercial, industrial, healthcare, hospitality, and institutional environments. Its precision helical gear transmission ensures smooth, quiet, and efficient power transfer, while the counterbalanced design provides excellent stability, effortless handling, and reduced operator fatigue during extended use. Compatible with a wide range of interchangeable brushes and pads, the Cyclone S401 adapts effortlessly to different floor care applications, making it a reliable solution for routine maintenance as well as intensive cleaning tasks.",
    image: "/content_images/image_21.png",
    features: [
      "Precision helical gear transmission for smooth, quiet, and reliable operation",
      "Counterbalanced design for superior stability and effortless manoeuvrability",
      "Ergonomic handle with intuitive controls for comfortable operation",
      "Compatible with interchangeable brushes, pads, and accessories",
      "Heavy-duty construction for long-lasting professional performance",
      "Ideal for commercial, industrial, hospitality, healthcare, and institutional facilities"
    ],
    applications: [
      "Wet scrubbing of hard floor surfaces",
      "Spray cleaning for routine floor maintenance",
      "Stripping old floor finishes and coatings",
      "Carpet shampooing and bonnet cleaning"
    ],
    brochureAvailable: true
  },
  {
    id: "cyclone-g680",
    name: "CYCLONE G680",
    subtitle: "Floor Grinding & Crystalising Machine",
    description: "The Klenco Cyclone G680 is a heavyweight industrial single disc machine engineered for the most demanding floor preparation, restoration, and maintenance applications. Designed with a high-torque motor, precision helical gear transmission, and a counterbalanced drive system, it delivers exceptional power, stability, and smooth operation for intensive floor care tasks. Despite its powerful performance, the Cyclone G680 operates with low noise levels, making it ideal for use in hospitals, office buildings, educational institutions, and other noise-sensitive environments.",
    image: "/content_images/image_22.jpeg",
    features: [
      "Heavy-duty industrial design for demanding floor care applications",
      "Precision helical gear transmission for smooth, quiet, and reliable operation",
      "Counterbalanced drive system for excellent stability and effortless handling",
      "High-torque motor for intensive cleaning and floor preparation",
      "Low-noise operation suitable for noise-sensitive environments",
      "Compatible with a wide range of brushes, pads, sanding discs, and diamond grinding tools."
    ],
    applications: [
      "Wet scrubbing of hard floor surfaces",
      "Spray cleaning and floor maintenance",
      "Stripping old floor finishes and coatings",
      "Crystallization of marble and terrazzo floors",
      "Sanding and smoothing newly laid cement floors",
      "Removing permanent floor coatings",
      "Diamond grinding and restoration of granite, marble, terrazzo, and other natural stone floors"
    ],
    brochureAvailable: true
  },
  {
    id: "cyclone-kw17",
    name: "CYCLONE KW17",
    subtitle: "Economic Single Disc Floor Scrubber",
    description: "The Klenco Cyclone KW17 is a compact and economical single disc floor scrubber designed for routine floor maintenance in commercial, institutional, and light industrial environments. Combining reliable performance with user-friendly operation, it is ideal for daily cleaning tasks such as wet scrubbing, spray cleaning, polishing, and carpet shampooing. Its lightweight yet durable construction, ergonomic design, and smooth handling make it an excellent choice for professional cleaners seeking efficiency, comfort, and consistent cleaning results.",
    image: "/content_images/image_23.png",
    features: [
      "Compact and economical design for everyday floor maintenance",
      "Multi-functional machine for scrubbing, polishing, spray cleaning, and carpet shampooing",
      "Ergonomic handle with intuitive controls for easy operation",
      "Durable metal gearbox for reliable, long-lasting performance",
      "Low-noise operation suitable for offices, hospitals, schools, and commercial facilities",
      "Optional accessories including pad holder, brushes, and water tank for greater versatility"
    ],
    applications: [
      "Wet scrubbing of hard floor surfaces",
      "Spray cleaning and routine floor maintenance",
      "Polishing hard floors",
      "Carpet shampooing",
      "Bonnet cleaning"
    ],
    brochureAvailable: true
  },
  {
    id: "cyclone-s081",
    name: "CYCLONE S-081",
    subtitle: "Professional Foam Generator",
    description: "The Klenco Cyclone S081 is a compact and professional foam generator designed to produce rich, dense foam for efficient carpet and upholstery cleaning. Compatible with any brand and model of single disc machine, it converts cleaning solution into low-moisture foam, allowing deep cleaning with minimal water usage and faster drying times. Equipped with a powerful air pump and low-noise operation, the Cyclone S081 is the ideal companion for professional carpet maintenance in hotels, offices, commercial buildings, educational institutions, and facility management applications.",
    image: "/content_images/image_24.jpeg",
    features: [
      "Compatible with all brands and models of single disc machines",
      "Produces rich, dense, and delicate foam for effective carpet cleaning",
      "Low water content (≤5%) promotes rapid evaporation and faster drying",
      "Powerful air pump ensures consistent foam generation",
      "Dual silent design for low-noise operation",
      "Compact and lightweight construction for easy transportation and operation",
      "Ideal for low-moisture carpet cleaning applications"
    ],
    applications: [
      "Carpet shampooing and encapsulation cleaning",
      "Hotels and hospitality facilities",
      "Offices and commercial buildings",
      "Educational institutions",
      "Convention centres and theatres",
      "Retail outlets and shopping malls",
      "Facility management and contract cleaning services"
    ],
    brochureAvailable: true
  },
  {
    id: "floor-maintenance-pads",
    name: "Floor Maintenance Pads",
    subtitle: "Professional Floor Pads",
    description: "Klenco Floor Maintenance Pads are engineered to deliver outstanding performance across every stage of floor care, from routine cleaning and polishing to intensive scrubbing, stripping, and burnishing. Manufactured using premium synthetic fibres with high-quality abrasives, these pads provide consistent cleaning results, extended service life, and maximum productivity on a wide range of hard floor surfaces. Available in a comprehensive range of colour-coded grades, Klenco Floor Pads help cleaning professionals select the right pad for every maintenance task while protecting valuable floor finishes.",
    image: "/content_images/image_25.jpeg",
    features: [
      "Complete range of professional floor pads for cleaning, scrubbing, polishing, stripping, and burnishing",
      "Premium synthetic fibre construction for durability and consistent performance",
      "Colour-coded pads for easy product selection and application",
      "Suitable for use with single disc machines, scrubber dryers, and high-speed burnishers",
      "Delivers excellent cleaning efficiency while helping extend floor finish life",
      "Available in multiple sizes to suit different machine types",
      "Designed for commercial, industrial, and institutional floor maintenance."
    ]
  }
];

export const carpetExtractors: Product[] = [
  {
    id: "typhoon-se20",
    name: "TYPHOON SE20",
    subtitle: "Professional Carpet & Upholstery Extractor",
    description: "The Klenco Typhoon SE20 is a compact and lightweight spray extraction cleaner engineered for deep cleaning of carpets, upholstery, and hard floors in small to medium-sized areas. Designed to spray and extract in a single pass, it effectively removes embedded dirt, stains, and moisture while reducing drying time. With its portable design, powerful 1300–1600 W vacuum motor, and the ability to switch effortlessly between carpet and hard floor cleaning, the Typhoon SE20 is an ideal solution for hotels, offices, retail outlets, healthcare facilities, educational institutions, and professional cleaning contractors seeking reliable everyday performance.",
    image: "/content_images/image_27.jpeg",
    features: [
      "Spray and extraction in a single pass for faster, more efficient cleaning",
      "Compact and lightweight design for easy transport and storage",
      "Powerful 1300–1600 W vacuum motor for effective soil and moisture recovery",
      "Quick changeover between carpet and hard floor cleaning",
      "14-litre solution tank and 14-litre recovery tank for continuous cleaning",
      "Ergonomic design for effortless operation and improved productivity",
      "Compatible with carpet cleaning and upholstery accessories."
    ],
    applications: [
      "Deep cleaning of carpets and rug",
      "Upholstery and fabric furniture cleaning",
      "Spot and stain remova",
      "Hard floor spray extraction cleaning",
      "Hotel rooms and corridors",
      "Offices and commercial workspaces",
      "Retail stores, clinics, schools, and healthcare facilities"
    ],
    brochureAvailable: true
  },
  {
    id: "typhoon-se30",
    name: "TYPHOON SE30",
    subtitle: "Compact Carpet & Upholstery Extractor",
    description: "The Klenco Typhoon SE30 is a compact and highly manoeuvrable carpet and upholstery extractor designed for professional cleaning of commercial facilities with confined or narrow spaces. Combining powerful spray extraction technology with exceptional mobility, it effectively removes embedded dirt, stains, and moisture from carpets and upholstery in a single cleaning process. Designed for maximum versatility, the Typhoon SE30 can be quickly upgraded with the optional HT1800 instant hot water unit, providing enhanced cleaning performance for heavily soiled carpets and upholstery. Its compact footprint, robust construction, and user-friendly operation make it an excellent choice for hotels, offices, retail outlets, cinemas, transport vehicles, and facility management professionals.",
    image: "/content_images/image_28.jpeg",
    features: [
      "Compact and highly manoeuvrable design for confined areas",
      "Powerful spray extraction system for deep carpet and upholstery cleaning",
      "Compatible with the optional HT1800 instant hot water unit",
      "Efficient solution and recovery tank design for extended cleaning",
      "Durable polyethylene tank construction for long service life",
      "Ergonomic handle and smooth-rolling wheels for effortless transport",
      "Ideal for professional cleaning of carpets, upholstery, and textile surfaces."
    ],
    applications: [
      "Deep cleaning of carpets and rugs",
      "Upholstery and fabric furniture cleaning",
      "Hotel guest rooms and corridors",
      "Offices and commercial buildings",
      "Retail stores and shopping centres",
      "Cinemas and entertainment venues"
    ],
    brochureAvailable: true
  },
  {
    id: "typhoon-kw22",
    name: "TYPHOON KW22",
    subtitle: "Economic Spray Extraction Carpet & Sofa Cleaner",
    description: "The Klenco Typhoon KW22 is a compact, lightweight spray extraction cleaner engineered for deep cleaning of carpets, upholstery, sofas, and textile surfaces. Combining powerful spray application with high-efficiency vacuum extraction, it effectively removes embedded dirt, stains, and moisture in a single operation, leaving surfaces cleaner, fresher, and quicker to dry. Built with a durable ABS body, a 1200 W vacuum motor, and a removable solution tank, the Typhoon KW22 offers exceptional portability, ease of use, and reliable performance, making it an ideal choice for commercial cleaning professionals and facility maintenance teams.",
    image: "/content_images/image_26.jpeg", // Fallback to generic extractor image
    features: [
      "High-performance 1200 W vacuum motor for powerful suction and fast drying",
      "Compact integrated design with a removable 10 L solution tank",
      "Durable ABS body for long-lasting commercial use",
      "Lightweight design with five heavy-duty castors for effortless mobility",
      "Efficient spray extraction system for carpets, upholstery, and fabric surfaces",
      "Supplied with stainless steel extendable wand, spray/suction hose, upholstery tool, and floor cleaning tool."
    ],
    applications: [
      "Carpet and rug deep cleaning",
      "Sofa and upholstered furniture cleaning",
      "Curtains and fabric wall coverings",
      "Dining and office chairs",
      "Car seats and vehicle interiors",
      "Hotel rooms, offices, restaurants, hospitals, theatres, and airports."
    ],
    brochureAvailable: true
  },
  {
    id: "typhoon-kw22p",
    name: "TYPHOON KW22P",
    subtitle: "Steam Extraction Carpet & Sofa Cleaner",
    description: "The Klenco Typhoon KW22P is a compact commercial steam and vacuum carpet and upholstery cleaner designed to deliver superior deep-cleaning performance for professional environments. Equipped with a 2000 W instant heating system and a powerful 1200 W vacuum motor, it effectively injects high-temperature steam into carpet fibres and fabric surfaces before extracting dirt, stains, allergens, and moisture in a single operation. Its durable ABS construction, compact integrated design, and user-friendly controls make the Typhoon KW22P an ideal solution for maintaining carpets, upholstery, mattresses, curtains, and vehicle interiors in hotels, hospitals, offices, restaurants, and commercial facilities.",
    image: "/content_images/image_26.jpeg", // Fallback
    features: [
      "Deep Steam Cleaning: Powered by a 2000 W boiler, generating 100°C steam",
      "Advanced Sanitization: Effectively eliminates bacteria, dust mites, mould spores",
      "Chemical-Free Cleaning: Natural power of steam with minimal reliance on detergents",
      "Odour Elimination: Neutralizes unpleasant odours caused by pets, smoke, and everyday use"
    ],
    applications: [
      "Deep cleaning of carpets and rugs",
      "Upholstery and fabric furniture cleaning",
      "Mattresses and curtains",
      "Vehicle interiors and car seats"
    ],
    brochureAvailable: true
  }
];

export const scrubberDryers: Product[] = [
  {
    id: "curve",
    name: "CURVE",
    subtitle: "Battery Powered Walk-Behind Scrubber Dryer",
    description: "The Klenco Curve is a compact, battery-powered walk-behind scrubber dryer engineered to deliver outstanding cleaning performance across large commercial and industrial facilities. Combining powerful scrubbing, efficient water recovery, and exceptional manoeuvrability, it cleans and dries floors in a single pass, leaving surfaces clean, dry, and safe for immediate use. With an intelligent control system, maintenance-free AGM batteries, and an ergonomic design, the Curve maximizes productivity while reducing operator effort, making it the ideal solution for daily floor maintenance in demanding environments.",
    image: "/content_images/image_31.png",
    features: [
      "Cleaning productivity up to 2,000 m²/hour for efficient floor maintenance",
      "530 mm scrubbing width with a 770 mm curved squeegee for superior water recovery",
      "30 kg brush pressure for effective removal of dirt and stubborn contaminants",
      "Intelligent digital control panel displaying battery level, voltage, and operating hours",
      "ECO mode for reduced noise levels and extended battery runtime",
      "Floating splash guard protects the brush deck during operation",
      "Dirty/clean water level indicators safeguard the vacuum motor and simplify maintenance",
      "Maintenance-free 2 × 12 V, 125 Ah AGM batteries with optional 25.6 V, 105 Ah Lithium-ion battery",
      "Yellow touch points for quick daily maintenance and servicing",
      "Large debris tray prevents solids from clogging the recovery system"
    ],
    applications: [
      "Shopping malls and retail centres",
      "Hospitals and healthcare facilities",
      "Hotels and hospitality venues",
      "Airports and transport terminals",
      "Educational institutions",
      "Warehouses and logistics centres",
      "Manufacturing facilities",
      "Office buildings and commercial complexes"
    ],
    brochureAvailable: true
  },
  {
    id: "rock-8",
    name: "ROCK 8",
    subtitle: "Battery-Powered Ride-On Scrubber Dryer",
    description: "The Klenco Rock 8 is a high-performance battery-powered ride-on scrubber dryer engineered for large commercial and industrial facilities where productivity, reliability, and operator comfort are essential. Designed to clean and dry floors in a single pass, the Rock 8 combines an 800 mm dual-brush scrubbing system, 1150 mm curved squeegee, and high-capacity solution and recovery tanks to deliver outstanding cleaning performance over large floor areas. Powered by a long-lasting 24V 210Ah Lithium-Ion battery, it offers extended operating time, rapid charging, and exceptional manoeuvrability.",
    image: "/content_images/image_32.jpeg", // Wait, page 40 uses a red machine image.
    features: [
      "Cleaning productivity up to 4,800 m²/hour for large-area floor maintenance",
      "800 mm dual brush system with adjustable brush pressure of 35 kg, 45 kg, or 60 kg",
      "1150 mm curved squeegee for superior water recovery and faster floor drying",
      "Long-life 24V 210Ah Lithium-Ion battery with 3-year warranty",
      "Powerful 3-stage vacuum motor with automatic shut-off when the recovery tank is full",
      "Automatic brush attachment and release for simplified maintenance",
      "Automatic scrub head and squeegee lift when reversing",
      "180° turning radius for excellent manoeuvrability in confined spaces",
      "Seat safety sensor and external charging socket for enhanced safety and convenience"
    ],
    applications: [
      "Warehouses and logistics centres",
      "Manufacturing and industrial facilities",
      "Shopping malls and retail complexes",
      "Airports and transport terminals",
      "Hospitals and healthcare facilities",
      "Hotels and convention centres",
      "Educational institutions",
      "Large commercial buildings"
    ],
    brochureAvailable: true
  }
];

export const sweepers: Product[] = [
  {
    id: "tempest-ms900",
    name: "TEMPEST MS900",
    subtitle: "Industrial Mechanical Push Sweeper",
    description: "The Klenco Tempest MS900 is a versatile and cost-effective mechanical push sweeper designed to deliver efficient dust and debris collection across both indoor and outdoor environments. Engineered for high sweeping productivity, it features dual side brushes and a high-capacity collection system that enables operators to clean up to 3,000 m² per hour with minimal effort. Its robust construction, smooth operation, and edge-cleaning capability make the Tempest MS900 an ideal solution for factories, warehouses, shopping malls, schools, workshops, parking areas, and other commercial and industrial facilities.",
    image: "/content_images/image_33.png", // Verify image index if needed, fallback to generic if not exact.
    features: [
      "Sweeping capacity of up to 3,000 m²/hour for fast and efficient cleaning",
      "Adjustable main brush height to suit different floor conditions",
      "Powerful side brushes ensure effective cleaning along walls, edges, and corners",
      "Large removable debris hopper for quick and convenient waste disposal",
      "Foldable handle for compact storage and easy transportation",
      "Manual operation with no power source required, making it an economical and environmentally friendly solution"
    ],
    applications: [
      "Manufacturing facilities and factories",
      "Warehouses and logistics centres",
      "Car parks and parking garages",
      "Shopping malls and retail complexes",
      "Educational institutions",
      "Workshops and service centres",
      "Sidewalks, courtyards, and other outdoor public space"
    ],
    brochureAvailable: true
  }
];

export const steamCleaners: Product[] = [
  {
    id: "monsoon-st7",
    name: "MONSOON ST7",
    subtitle: "Commercial Steam Cleaner",
    description: "The Klenco Monsoon ST7 is a powerful commercial steam cleaner designed to deliver deep cleaning and sanitization without relying on harsh chemicals. Combining high-temperature steam, detergent spraying, and wet & dry vacuum recovery in one compact machine, it effectively removes grease, dirt, liquids, and stubborn contaminants from a wide variety of surfaces. With its 5-bar operating pressure, 140°C steam temperature, and powerful 3000 W heating system, the Monsoon ST7 provides exceptional cleaning performance for commercial kitchens, healthcare facilities, hotels, food processing areas, offices, and industrial environments.",
    image: "/content_images/image_34.jpeg",
    features: [
      "Multi-function cleaning system combining steam cleaning, detergent spraying, water-only cleaning, and wet & dry vacuum recovery",
      "Generates 140°C high-temperature steam at 5-bar pressure for effective grease removal and sanitization",
      "Powerful 3000 W heating system ensures rapid steam generation and continuous performance",
      "1000 W vacuum motor efficiently recovers dissolved dirt, liquids, and debris",
      "Stainless steel 2.7-litre boiler for durability and consistent steam production",
      "Integrated 1.5-litre detergent tank for enhanced cleaning of heavily soiled surfaces",
      "Compact, portable design for easy transportation and operation",
      "Supplied with a comprehensive range of professional cleaning accessories for multiple applications"
    ],
    applications: [
      "Commercial kitchens and food preparation areas",
      "Hospitals and healthcare facilities",
      "Hotels and hospitality establishments",
      "Washrooms and sanitary areas",
      "Office buildings and commercial facilities",
      "Industrial equipment and machinery",
      "Floor, carpet, and upholstery steam cleaning",
      "Window, glass, and hard surface cleaning"
    ],
    brochureAvailable: true
  },
  {
    id: "monsoon-st12-uv",
    name: "MONSOON ST-12UV",
    subtitle: "Professional Steam & Vacuum Cleaner with UV-C Sanitization",
    description: "The Klenco Monsoon ST12-UV is an advanced commercial steam and vacuum cleaner designed to deliver exceptional cleaning, sanitization, and hygiene without relying on harsh chemicals. Combining 177°C high-temperature steam, 8-bar operating pressure, HEPA filtration, and an integrated UV-C sterilization system, it effectively removes grease, dirt, bacteria, viruses, allergens, and other contaminants while improving indoor air quality. Engineered for demanding commercial and industrial environments, the Monsoon ST12-UV provides an environmentally friendly solution for deep cleaning across healthcare, hospitality, food processing, transportation, and facility management applications.",
    image: "/content_images/image_35.jpeg",
    features: [
      "HACCP Certified",
      "77°C high-temperature steam with 8-bar pressure for deep cleaning and effective sanitization",
      "Integrated UV-C sterilization technology for enhanced hygiene",
      "HEPA H14 filtration captures fine particles and improves indoor air quality",
      "Chemical-free cleaning using the natural power of steam",
      "95% lower water consumption compared to conventional cleaning methods",
      "Built-in UV LED sterilizer and air exhaust filtration system that releases purified air back into the environment",
      "Environmentally friendly solution with no chemical residue, ideal for sensitive environments",
      "Compact, ergonomic design with integrated storage for accessories and cable management"
    ],
    applications: [
      "Hospitals and healthcare facilities",
      "Hotels and hospitality environments",
      "Commercial kitchens and food processing areas",
      "Educational institutions",
      "Public transport and vehicle interiors",
      "Pharmaceutical and cleanroom environments",
      "Industrial equipment and machinery",
      "Washrooms, changing rooms, and high-touch surfaces"
    ],
    brochureAvailable: true
  }
];

export const floorCleaningData = {
  singleDisc: singleDiscMachines,
  extractors: carpetExtractors,
  scrubbers: scrubberDryers,
  sweepers: sweepers,
  steam: steamCleaners
};
