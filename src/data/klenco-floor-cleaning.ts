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
    id: "cycline-s401",
    name: "CYCLONE S401",
    subtitle: "Cyclone S401 Single Disc Floor Machine",
    description: "The Klenco Cyclone S401 is a high-performance, heavy-duty single disc machine engineered to meet the demanding requirements of professional floor maintenance. Designed for durability, versatility, and ease of operation, it delivers outstanding cleaning results across commercial, industrial, healthcare, hospitality, and institutional environments. Its precision helical gear transmission ensures smooth, quiet, and efficient power transfer, while the counterbalanced design provides excellent stability, effortless handling, and reduced operator fatigue during extended use. Compatible with a wide range of interchangeable brushes and pads, the Cyclone S401 adapts effortlessly to different floor care applications, making it a reliable solution for routine maintenance as well as intensive cleaning tasks.",
    image: "/content_images/klenco-cycline-s401.jpg",
    features: [
      "Precision helical gear transmission for smooth, quiet, and reliable operation",
      "Counterbalanced design for superior stability and effortless manoeuvrability",
      "Ergonomic handle with intuitive safety lock and controls for comfortable operation",
      "Compatible with interchangeable brushes, pads, and accessories",
      "Heavy-duty motor and construction for long-lasting professional performance",
      "Ideal for commercial, industrial, hospitality, healthcare, and institutional facilities"
    ],
    applications: [
      "Wet scrubbing of hard floor surfaces",
      "Spray cleaning for routine floor maintenance",
      "Stripping old floor finishes and coatings",
      "Carpet shampooing and bonnet cleaning",
      "Buffing and light polishing of vinyl, terrazzo, marble, and tile floors"
    ],
    brochureAvailable: true
  },
  {
    id: "cyclone-g680",
    name: "CYCLONE G680",
    subtitle: "Cyclone G680 Floor Grinding & Crystallising Machine",
    description: "The Klenco Cyclone G680 is a heavyweight industrial single disc machine engineered for the most demanding floor preparation, restoration, and maintenance applications. Designed with a high-torque motor, precision helical gear transmission, and a counterbalanced drive system, it delivers exceptional power, stability, and smooth operation for intensive floor care tasks. Despite its powerful performance, the Cyclone G680 operates with low noise levels, making it ideal for use in hospitals, office buildings, educational institutions, and other noise-sensitive environments.",
    image: "/content_images/klenco-cyclone-g680.jpg",
    features: [
      "Heavy-duty industrial design for demanding floor care and stone restoration applications",
      "Precision helical gear transmission for smooth, quiet, and reliable operation",
      "Counterbalanced drive system for excellent stability and effortless handling",
      "High-torque motor for intensive cleaning, grinding, and floor preparation",
      "Low-noise operation suitable for noise-sensitive commercial environments",
      "Compatible with a wide range of brushes, pads, sanding discs, and diamond grinding tools"
    ],
    applications: [
      "Wet scrubbing of hard floor surfaces",
      "Spray cleaning and floor maintenance",
      "Stripping old floor finishes and heavy coatings",
      "Crystallization and polishing of marble and terrazzo floors",
      "Sanding and smoothing newly laid cement floors",
      "Removing permanent floor coatings and adhesives",
      "Diamond grinding and restoration of granite, marble, terrazzo, and other natural stone floors"
    ],
    brochureAvailable: true
  },
  {
    id: "cyclone-kw17",
    name: "CYCLONE KW17",
    subtitle: "Cyclone KW17 Economic Single Disc Floor Scrubber",
    description: "The Klenco Cyclone KW17 is a compact and economical single disc floor scrubber designed for routine floor maintenance in commercial, institutional, and light industrial environments. Combining reliable performance with user-friendly operation, it is ideal for daily cleaning tasks such as wet scrubbing, spray cleaning, polishing, and carpet shampooing. Its lightweight yet durable construction, ergonomic design, and smooth handling make it an excellent choice for professional cleaners seeking efficiency, comfort, and consistent cleaning results.",
    image: "/content_images/klenco-cyclone-kw17.jpg",
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
      "Polishing and buffing hard floors",
      "Carpet shampooing and encapsulation",
      "Bonnet cleaning for hospitality carpets"
    ],
    brochureAvailable: true
  },
  {
    id: "foam-generator",
    name: "FOAM GENERATOR (CYCLONE S081)",
    subtitle: "Cyclone S081 Professional Carpet Foam Generator",
    description: "The Klenco Cyclone S081 is a compact and professional foam generator designed to produce rich, dense foam for efficient carpet and upholstery cleaning. Compatible with any brand and model of single disc machine, it converts cleaning solution into low-moisture foam, allowing deep cleaning with minimal water usage and faster drying times. Equipped with a powerful air pump and low-noise operation, the Cyclone S081 is the ideal companion for professional carpet maintenance in hotels, offices, commercial buildings, educational institutions, and facility management applications.",
    image: "/content_images/klenco-foam-generator.jpg",
    features: [
      "Compatible with all brands and models of single disc machines",
      "Produces rich, dense, and delicate foam for effective carpet cleaning",
      "Low water content (≤5%) promotes rapid evaporation and faster drying",
      "Powerful air pump ensures consistent and continuous foam generation",
      "Dual silent design for low-noise operation in occupied premises",
      "Compact and lightweight construction for easy transportation and mounting",
      "Ideal for low-moisture carpet cleaning applications"
    ],
    applications: [
      "Carpet shampooing and encapsulation cleaning",
      "Hotels and hospitality facilities",
      "Offices and corporate commercial buildings",
      "Educational institutions and lecture halls",
      "Convention centres, cinemas, and theatres",
      "Retail outlets and shopping malls",
      "Facility management and contract cleaning services"
    ],
    brochureAvailable: true
  },
  {
    id: "floor-pads",
    name: "FLOOR PADS",
    subtitle: "Klenco Professional Floor Maintenance Pads",
    description: "Klenco Floor Maintenance Pads are engineered to deliver outstanding performance across every stage of floor care, from routine cleaning and polishing to intensive scrubbing, stripping, and burnishing. Manufactured using premium synthetic fibres with high-quality abrasives, these pads provide consistent cleaning results, extended service life, and maximum productivity on a wide range of hard floor surfaces. Available in a comprehensive range of colour-coded grades, Klenco Floor Pads help cleaning professionals select the right pad for every maintenance task while protecting valuable floor finishes.",
    image: "/content_images/klenco-floor-pads.jpg",
    features: [
      "Complete range of professional floor pads for cleaning, scrubbing, polishing, stripping, and burnishing",
      "Premium synthetic fibre construction for durability and uniform abrasive distribution",
      "Standardized colour-coded grading (Black, Brown, Green, Blue, Red, White) for easy product selection",
      "Suitable for use with single disc machines, scrubber dryers, and high-speed burnishers",
      "Delivers excellent cleaning efficiency while helping extend floor finish life",
      "Available in multiple sizes (16\", 17\", 18\", 20\", etc.) to suit different machine types",
      "Designed for commercial, industrial, and institutional floor maintenance"
    ],
    applications: [
      "Black/Brown Pads: Heavy stripping of old wax, sealers, and finish build-up",
      "Green/Blue Pads: Heavy to medium scrubbing and deep cleaning",
      "Red Pads: Daily spray cleaning, light scrubbing, and buffing",
      "White Pads: High-gloss polishing and dry buffing",
      "Commercial, industrial, healthcare, hospitality, and educational facilities"
    ],
    brochureAvailable: true
  }
];

export const carpetExtractors: Product[] = [
  {
    id: "typhoon-se20",
    name: "TYPHOON SE20",
    subtitle: "Typhoon SE20 Professional Carpet & Upholstery Extractor",
    description: "The Klenco Typhoon SE20 is a compact and lightweight spray extraction cleaner engineered for deep cleaning of carpets, upholstery, and hard floors in small to medium-sized areas. Designed to spray and extract in a single pass, it effectively removes embedded dirt, stains, and moisture while reducing drying time. With its portable design, powerful 1300–1600 W vacuum motor, and the ability to switch effortlessly between carpet and hard floor cleaning, the Typhoon SE20 is an ideal solution for hotels, offices, retail outlets, healthcare facilities, educational institutions, and professional cleaning contractors seeking reliable everyday performance.",
    image: "/content_images/klenco-typhoon-se20.jpg",
    features: [
      "Spray and extraction in a single pass for faster, more efficient cleaning",
      "Compact and lightweight design for easy transport, stair climbing, and storage",
      "Powerful 1300–1600 W vacuum motor for high suction and effective moisture recovery",
      "Quick changeover between carpet wand, upholstery tool, and hard floor squeegee",
      "14-litre solution tank and 14-litre recovery tank for uninterrupted cleaning cycles",
      "Ergonomic design with durable polyethylene construction for improved productivity",
      "Compatible with professional carpet cleaning and upholstery accessories"
    ],
    applications: [
      "Deep cleaning of carpets and rugs",
      "Upholstery, sofas, and fabric furniture cleaning",
      "Spot and stain removal in high-traffic zones",
      "Hard floor spray extraction and liquid pick-up",
      "Hotel guest rooms, corridors, and reception areas",
      "Offices, conference rooms, and commercial workspaces",
      "Retail stores, clinics, schools, and healthcare facilities"
    ],
    brochureAvailable: true
  },
  {
    id: "typhoon-se30",
    name: "TYPHOON SE30",
    subtitle: "Typhoon SE30 Compact Carpet & Upholstery Extractor",
    description: "The Klenco Typhoon SE30 is a compact and highly manoeuvrable carpet and upholstery extractor designed for professional cleaning of commercial facilities with confined or narrow spaces. Combining powerful spray extraction technology with exceptional mobility, it effectively removes embedded dirt, stains, and moisture from carpets and upholstery in a single cleaning process. Designed for maximum versatility, the Typhoon SE30 can be quickly upgraded with the optional HT1800 instant hot water unit, providing enhanced cleaning performance for heavily soiled carpets and upholstery. Its compact footprint, robust construction, and user-friendly operation make it an excellent choice for hotels, offices, retail outlets, cinemas, transport vehicles, and facility management professionals.",
    image: "/content_images/klenco-typhoon-se30.jpg",
    features: [
      "Compact and highly manoeuvrable design for confined and narrow spaces",
      "Powerful spray extraction system for deep carpet and upholstery sanitization",
      "Compatible with the optional HT1800 instant hot water heater unit",
      "High-efficiency solution and recovery tank design for extended cleaning runs",
      "Durable high-density polyethylene tank construction for long service life",
      "Ergonomic handle and smooth-rolling castors for effortless transport",
      "Ideal for professional cleaning of carpets, upholstery, and textile surfaces"
    ],
    applications: [
      "Deep cleaning of commercial carpets and rugs",
      "Upholstery, office chairs, and fabric furniture cleaning",
      "Hotel guest rooms, suites, and narrow corridors",
      "Offices, conference rooms, and commercial buildings",
      "Retail stores and shopping centres",
      "Cinemas, auditorium seating, and entertainment venues",
      "Transport vehicles, buses, and aircraft interiors"
    ],
    brochureAvailable: true
  },
  {
    id: "typhoon-kw22",
    name: "TYPHOON KW22",
    subtitle: "Typhoon KW22 Economic Spray Extraction Carpet & Sofa Cleaner",
    description: "The Klenco Typhoon KW22 is a compact, lightweight spray extraction cleaner engineered for deep cleaning of carpets, upholstery, sofas, and textile surfaces. Combining powerful spray application with high-efficiency vacuum extraction, it effectively removes embedded dirt, stains, and moisture in a single operation, leaving surfaces cleaner, fresher, and quicker to dry. Built with a durable ABS body, a 1200 W vacuum motor, and a removable solution tank, the Typhoon KW22 offers exceptional portability, ease of use, and reliable performance, making it an ideal choice for commercial cleaning professionals and facility maintenance teams.",
    image: "/content_images/klenco-typhoon-kw22.jpg",
    features: [
      "High-performance 1200 W vacuum motor for powerful suction and fast surface drying",
      "Compact integrated design with a removable 10 L solution tank for easy filling and cleaning",
      "Durable ABS body designed for long-lasting commercial and daily use",
      "Lightweight design with five heavy-duty castors for 360-degree effortless mobility",
      "Efficient spray extraction system for carpets, upholstery, and fabric surfaces",
      "Supplied with stainless steel extendable wand, spray/suction hose, upholstery hand tool, and floor nozzle"
    ],
    applications: [
      "Carpet and rug deep cleaning",
      "Sofa and upholstered furniture cleaning",
      "Curtains and fabric wall coverings",
      "Dining, office, and waiting room chairs",
      "Car seats, mats, and automotive vehicle interiors",
      "Hotel rooms, offices, restaurants, hospitals, theatres, and airports"
    ],
    brochureAvailable: true
  },
  {
    id: "typhoon-kw22p",
    name: "TYPHOON KW22P",
    subtitle: "Typhoon KW22P Steam Extraction Carpet & Sofa Cleaner",
    description: "The Klenco Typhoon KW22P is a compact commercial steam and vacuum carpet and upholstery cleaner designed to deliver superior deep-cleaning performance for professional environments. Equipped with a 2000 W instant heating system and a powerful 1200 W vacuum motor, it effectively injects high-temperature steam into carpet fibres and fabric surfaces before extracting dirt, stains, allergens, and moisture in a single operation. Its durable ABS construction, compact integrated design, and user-friendly controls make the Typhoon KW22P an ideal solution for maintaining carpets, upholstery, mattresses, curtains, and vehicle interiors in hotels, hospitals, offices, restaurants, and commercial facilities.",
    image: "/content_images/klenco-typhoon-kw22p.jpg",
    features: [
      "Deep Steam Cleaning: Powered by a 2000 W boiler generating 100°C continuous steam",
      "Advanced Sanitization: Effectively eliminates bacteria, dust mites, and mould spores without harsh chemicals",
      "Chemical-Free Cleaning: Natural power of pressurized steam with minimal reliance on detergents",
      "Odour Elimination: Neutralizes unpleasant odours caused by pets, smoke, and heavy organic contamination",
      "High-efficiency 1200 W vacuum motor for rapid moisture extraction and faster drying times",
      "Durable ABS construction with 5-wheel stability base for effortless transport"
    ],
    applications: [
      "Deep cleaning and thermal disinfection of carpets and rugs",
      "Upholstery, sofas, and fabric furniture deep sanitization",
      "Mattresses, pillows, and curtains sanitization",
      "Vehicle interiors, child seats, and automotive upholstery",
      "Hotels, healthcare facilities, clinics, daycare centres, and restaurants"
    ],
    brochureAvailable: true
  }
];

export const scrubberDryers: Product[] = [
  {
    id: "curve",
    name: "CURVE",
    subtitle: "Curve Battery Powered Walk-Behind Scrubber Dryer",
    description: "The Klenco Curve is a compact, battery-powered walk-behind scrubber dryer engineered to deliver outstanding cleaning performance across large commercial and industrial facilities. Combining powerful scrubbing, efficient water recovery, and exceptional manoeuvrability, it cleans and dries floors in a single pass, leaving surfaces clean, dry, and safe for immediate use. With an intelligent control system, maintenance-free AGM batteries, and an ergonomic design, the Curve maximizes productivity while reducing operator effort, making it the ideal solution for daily floor maintenance in demanding environments.",
    image: "/content_images/klenco-curve.jpg",
    features: [
      "Cleaning productivity up to 2,000 m²/hour for rapid and efficient floor maintenance",
      "530 mm scrubbing width with a 770 mm curved squeegee for superior water recovery on turns",
      "30 kg heavy brush pressure for effective removal of stubborn dirt and grime",
      "Intelligent digital control panel displaying battery level, voltage, and operating hours",
      "ECO mode for reduced noise levels and extended battery runtime",
      "Floating splash guard protects the brush deck and prevents water splashing",
      "Dirty/clean water level indicators safeguard the vacuum motor and simplify maintenance",
      "Maintenance-free 2 × 12 V, 125 Ah AGM batteries (with optional 25.6 V, 105 Ah Lithium-ion battery)",
      "Yellow touch points for intuitive daily maintenance, cleaning, and servicing",
      "Large debris tray prevents solids from clogging the recovery system"
    ],
    applications: [
      "Shopping malls, supermarkets, and retail centres",
      "Hospitals, clinics, and healthcare facilities",
      "Hotels, banquet halls, and hospitality venues",
      "Airports, train stations, and transport terminals",
      "Schools, universities, and educational institutions",
      "Warehouses, distribution hubs, and logistics centres",
      "Manufacturing plants and industrial workshops",
      "Office complexes and commercial buildings"
    ],
    brochureAvailable: true
  },
  {
    id: "rock-8",
    name: "ROCK 8",
    subtitle: "Rock 8 Battery-Powered Ride-On Scrubber Dryer",
    description: "The Klenco Rock 8 is a high-performance battery-powered ride-on scrubber dryer engineered for large commercial and industrial facilities where productivity, reliability, and operator comfort are essential. Designed to clean and dry floors in a single pass, the Rock 8 combines an 800 mm dual-brush scrubbing system, 1150 mm curved squeegee, and high-capacity solution and recovery tanks to deliver outstanding cleaning performance over large floor areas. Powered by a long-lasting 24V 210Ah Lithium-Ion battery, it offers extended operating time, rapid charging, and exceptional manoeuvrability.",
    image: "/content_images/klenco-rock-8.jpg",
    features: [
      "High cleaning productivity up to 4,800 m²/hour for large-area floor maintenance",
      "800 mm dual brush system with adjustable brush pressure settings (35 kg, 45 kg, or 60 kg)",
      "1150 mm parabolic curved squeegee for complete water recovery and instant floor drying",
      "Long-life 24V 210Ah Lithium-Ion battery with fast-charging capability and 3-year warranty",
      "Powerful 3-stage vacuum motor with automatic shut-off when recovery tank is full",
      "Automatic brush attachment and quick release for simplified operator maintenance",
      "Automatic scrub head and squeegee lift when reversing",
      "180° tight turning radius for excellent manoeuvrability in narrow aisles and confined spaces",
      "Seat safety sensor and external charging socket for enhanced operator safety and convenience"
    ],
    applications: [
      "Warehouses, distribution centres, and logistics hubs",
      "Manufacturing plants and heavy industrial facilities",
      "Large shopping malls and retail complexes",
      "Airports, transit hubs, and transport terminals",
      "Hospitals and medical centres",
      "Hotels, convention centres, and event halls",
      "Educational campuses and sports facilities",
      "Multi-storey car parks and large commercial buildings"
    ],
    brochureAvailable: true
  }
];

export const sweepers: Product[] = [
  {
    id: "tempest-ms900",
    name: "TEMPEST MS900",
    subtitle: "Tempest MS900 Industrial Mechanical Push Sweeper",
    description: "The Klenco Tempest MS900 is a versatile and cost-effective mechanical push sweeper designed to deliver efficient dust and debris collection across both indoor and outdoor environments. Engineered for high sweeping productivity, it features dual side brushes and a high-capacity collection system that enables operators to clean up to 3,000 m² per hour with minimal effort. Its robust construction, smooth operation, and edge-cleaning capability make the Tempest MS900 an ideal solution for factories, warehouses, shopping malls, schools, workshops, parking areas, and other commercial and industrial facilities.",
    image: "/content_images/klenco-tempest-ms900.jpg",
    features: [
      "Sweeping capacity of up to 3,000 m²/hour for fast, effortless, and quiet cleaning",
      "Dual counter-rotating side brushes ensure effective sweeping right up to walls, curbs, and corners",
      "Adjustable main brush height mechanism to adapt to different floor types and debris sizes",
      "Large 40-litre removable debris hopper for quick and convenient waste disposal",
      "Ergonomic foldable handle for compact vertical storage and effortless transport",
      "Manual mechanical operation with zero power consumption, emissions, or battery maintenance"
    ],
    applications: [
      "Manufacturing facilities, workshops, and factories",
      "Warehouses, loading bays, and logistics centres",
      "Car parks, driveways, and parking garages",
      "Shopping malls, retail plazas, and open courtyards",
      "Educational institutions and school yards",
      "Service stations, garages, and workshops",
      "Sidewalks, paths, courtyards, and outdoor public spaces"
    ],
    brochureAvailable: true
  }
];

export const steamCleaners: Product[] = [
  {
    id: "monsoon-st7",
    name: "MONSOON ST7",
    subtitle: "Monsoon ST7 Commercial Steam & Vacuum Cleaner",
    description: "The Klenco Monsoon ST7 is a powerful commercial steam cleaner designed to deliver deep cleaning and sanitization without relying on harsh chemicals. Combining high-temperature steam, detergent spraying, and wet & dry vacuum recovery in one compact machine, it effectively removes grease, dirt, liquids, and stubborn contaminants from a wide variety of surfaces. With its 5-bar operating pressure, 140°C steam temperature, and powerful 3000 W heating system, the Monsoon ST7 provides exceptional cleaning performance for commercial kitchens, healthcare facilities, hotels, food processing areas, offices, and industrial environments.",
    image: "/content_images/klenco-monsoon-st7.jpg",
    features: [
      "Multi-function cleaning system combining steam generation, detergent injection, hot water rinsing, and wet & dry vacuum extraction",
      "Generates 140°C high-temperature dry steam at 5-bar pressure for rapid degreasing and deep sanitization",
      "Powerful 3000 W heating system ensures rapid steam heat-up and continuous steam replenishment",
      "1000 W bypass vacuum motor efficiently recovers dissolved dirt, grease, and liquids in a single pass",
      "High-grade AISI 304 stainless steel 2.7-litre boiler for exceptional durability and corrosion resistance",
      "Integrated 1.5-litre chemical/detergent tank for tackling heavily encrusted grease and grime",
      "Compact and portable design with non-marking wheels for effortless mobility across facilities",
      "Supplied with a comprehensive set of professional steam, vacuum, squeegee, and brush accessories"
    ],
    applications: [
      "Commercial kitchens, grease traps, ovens, extraction hoods, and food preparation areas",
      "Hospitals, dental clinics, patient rooms, and healthcare facilities",
      "Hotels, resorts, and hospitality guest rooms and bathrooms",
      "Public washrooms, tile grouting, changing rooms, and sanitary fixtures",
      "Office buildings, touchpoints, elevators, and public facilities",
      "Industrial machinery, food processing equipment, and stainless steel surfaces",
      "Carpet, upholstery, mattress, and curtain sanitization",
      "Windows, mirrors, glass partitions, and hard surface cleaning"
    ],
    brochureAvailable: true
  },
  {
    id: "monsoon-st12-uv",
    name: "MONSOON ST-12UV",
    subtitle: "Monsoon ST12-UV Professional Steam & Vacuum Cleaner with UV-C Sanitization",
    description: "The Klenco Monsoon ST12-UV is an advanced commercial steam and vacuum cleaner designed to deliver exceptional cleaning, sanitization, and hygiene without relying on harsh chemicals. Combining 177°C high-temperature steam, 8-bar operating pressure, HEPA filtration, and an integrated UV-C sterilization system, it effectively removes grease, dirt, bacteria, viruses, allergens, and other contaminants while improving indoor air quality. Engineered for demanding commercial and industrial environments, the Monsoon ST12-UV provides an environmentally friendly solution for deep cleaning across healthcare, hospitality, food processing, transportation, and facility management applications.",
    image: "/content_images/klenco-monsoon-st12-uv.jpg",
    features: [
      "HACCP Certified for use in strict food safety and healthcare sanitation protocols",
      "Generates 177°C ultra-high-temperature steam at 8-bar pressure for thermal destruction of pathogens and grease",
      "Integrated UV-C germicidal sterilization technology inside the recovery tank for enhanced biocide safety",
      "HEPA H14 certified medical-grade exhaust filtration captures 99.995% of fine particles and airborne allergens",
      "100% chemical-free cleaning utilizing the natural power of superheated dry steam",
      "Saves up to 95% water consumption compared to conventional high-pressure and wet cleaning methods",
      "Built-in UV LED sterilizer and air purification exhaust that releases purified air back into the room",
      "Environmentally friendly, leaves zero chemical residue—ideal for sensitive sterile environments",
      "Ergonomic stainless steel chassis with intuitive digital diagnostic controls and accessory storage"
    ],
    applications: [
      "Hospitals, surgical suites, intensive care units, and healthcare facilities",
      "Pharmaceutical cleanrooms and laboratory environments",
      "Hotels, luxury resorts, guest suites, and wellness facilities",
      "Commercial kitchens, bakery equipment, and food processing lines",
      "Schools, daycares, universities, and institutional facilities",
      "Public transport, buses, trains, and aircraft passenger cabins",
      "Restrooms, locker rooms, saunas, and high-frequency touch surfaces",
      "Mattresses, fabric upholstery, curtains, and allergen-free sanitization"
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
