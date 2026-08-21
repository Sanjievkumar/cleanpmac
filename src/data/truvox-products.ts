export interface TruvoxProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  tabs: {
    features: string[];
    specifications: Record<string, string>;
    accessories: string[];
    gallery: string[];
    downloads: string[];
    floorTypes: string[];
    relatedProducts: string[];
  };
}

export const truvoxCategories = {
  scrubberDryers: [
    { id: "multiwash-pro-340", name: "Multiwash Pro 340", image: "/content_images/multiwash-pro.png" },
    { id: "multiwash-pro-440", name: "Multiwash Pro 440", image: "/content_images/multiwash-pro-440.png" },
    { id: "multiwash-pro-steam", name: "Multiwash Pro Steam", image: "/content_images/multiwash-pro-steam.png" },
    { id: "multiwash-pro-battery", name: "Multiwash Pro Battery", image: "/content_images/multiwash-pro-battery.png" },
    { id: "i-scrub-21b", name: "i-scrub 21B", image: "/content_images/i-scrub-21b.png" },
    { id: "imop-lite", name: "imop Lite", image: "/content_images/imop-lite.png" }
  ],
  singleDisc: [
    { id: "orbis-200", name: "ORBIS 200 (43cm)", image: "/content_images/image_4.png" },
    { id: "orbis-1500", name: "ORBIS 1500 UHS", image: "/content_images/image_4.png" }
  ],
  carpetCleaners: [
    { id: "hydromist-lite", name: "HYDROMIST LITE", image: "/content_images/image_4.png" },
    { id: "hydromist-compact", name: "HYDROMIST COMPACT", image: "/content_images/image_4.png" },
    { id: "hydromist-35", name: "HYDROMIST 35", image: "/content_images/image_4.png" },
    { id: "hydromist-40", name: "HYDROMIST 40", image: "/content_images/image_4.png" }
  ],
  cimex: [
    { id: "cimex-encap", name: "CIMEX ENCAP", image: "/content_images/image_4.png" },
    { id: "cimex-38", name: "CIMEX 38", image: "/content_images/image_4.png" },
    { id: "cimex-48", name: "CIMEX 48", image: "/content_images/image_4.png" }
  ],
  dryVacuum: [
    { id: "vtve", name: "VTVe", image: "/content_images/image_4.png" },
    { id: "valet-wide", name: "VALET WIDE AREA VAC", image: "/content_images/image_4.png" }
  ],
  wetDryVacuum: [
    { id: "aqua-20", name: "Aqua 20", image: "/content_images/image_4.png" },
    { id: "aqua-40", name: "Aqua 40", image: "/content_images/image_4.png" },
    { id: "aqua-55", name: "Aqua 55", image: "/content_images/image_4.png" }
  ],
  escalatorSweepers: [
    { id: "trusweep-460", name: "TRUSWEEP 460", image: "/content_images/image_4.png" },
    { id: "cimex-x46", name: "CIMEX X46", image: "/content_images/image_4.png" }
  ]
};

// Mock product data for demonstration of the tabbed interface
export const mockTruvoxProduct: TruvoxProduct = {
  id: "multiwash-pro",
  name: "Multiwash Pro",
  category: "Scrubber Dryer",
  description: "The Multiwash Pro range of scrubber dryers will wash, mop, scrub and dry on both hard and soft floor coverings in one single pass.",
  image: "/content_images/image_4.png",
  tabs: {
    features: [
      "High-speed productivity",
      "Cleans all types of floors including escalators and entrance matting",
      "Exceptional cleaning power",
      "Leaves floors ready to walk on in minutes",
      "Accessible and removable tanks for fast filling and emptying"
    ],
    specifications: {
      "Voltage": "230 V",
      "Motor Power": "400 W",
      "Brush Width": "340 mm",
      "Solution Tank Capacity": "4 L",
      "Weight": "25 kg"
    },
    accessories: ["Standard Brushes", "Hard Brushes", "Soft Brushes", "Escalator Brushes"],
    gallery: ["/content_images/image_4.png", "/content_images/image_8.png"],
    downloads: ["Multiwash Pro Brochure (PDF)", "User Manual (PDF)"],
    floorTypes: ["Safety Flooring", "Tiles", "Carpet", "Escalators"],
    relatedProducts: ["Multiscrub 440", "imop Lite"]
  }
};
