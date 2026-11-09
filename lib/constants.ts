export const BRAND = {
  name: "Dr. Tank",
  tagline: "Your Water's Best Friend",
  phone: "+91 80897 83517",
  phoneRaw: "918089783517",
  email: "dr.tankpalakkad@gmail.com",
  serviceCoverage: "Across all 14 Districts of Kerala",
  primaryLocation: "Palakkad, Kerala",
  hours: "Monday - Sunday: 7:00 AM - 8:00 PM",
  colors: {
    primary: "#22C4F2",
    mainText: "#171717",
    secondaryText: "#555555",
    bgLight: "#F0FAFE",
    border: "#E5E7EB",
  },
};

export const KERALA_DISTRICTS = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
] as const;

export type KeralaDistrict = (typeof KERALA_DISTRICTS)[number];

export const SERVICE_OPTIONS = [
  "Residential Water Tank Cleaning",
  "Commercial Water Tank Cleaning",
  "STP Tank Cleaning",
  "ETP Tank Cleaning",
  "WTP Tank Cleaning",
  "Industrial Processing Tank Cleaning",
] as const;

export type ServiceType = (typeof SERVICE_OPTIONS)[number];

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  detailedPoints: string[];
  seoKeywords: string[];
  image: string;
  alt: string;
  prefilledMessage: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "residential",
    title: "Residential Water Tank Cleaning",
    shortTitle: "Residential Tanks",
    badge: "Homes & Villas",
    description:
      "Professional home water tank cleaning services to remove accumulated dirt, sediment and unwanted deposits from residential water storage tanks.",
    detailedPoints: [
      "Overhead sintex & plastic water tank cleaning",
      "Underground sump & concrete storage tank desilting",
      "Sediment, algae, and biofilm extraction",
      "High-pressure wash and hygienic water chamber sanitization",
    ],
    seoKeywords: [
      "Home water tank cleaning services",
      "Water tank cleaning services near me",
      "Water tank cleaning near me",
    ],
    image: "/images/Residential Water Tank Cleaning.jpeg",
    alt: "Residential water tank cleaning services in Kerala by Dr. Tank",
    prefilledMessage:
      "Hello Dr. Tank, I would like to enquire about Residential Water Tank Cleaning services for my home.",
  },
  {
    id: "commercial",
    title: "Commercial Water Tank Cleaning",
    shortTitle: "Commercial Buildings",
    badge: "Apartments & Hotels",
    description:
      "Reliable water tank cleaning services for offices, apartments, hotels, institutions, restaurants and commercial buildings.",
    detailedPoints: [
      "Multi-story apartment & flat overhead storage tanks",
      "Hotel, hospital & educational institution bulk water reservoirs",
      "Office complexes & restaurant kitchen water supply tanks",
      "Scheduled non-disruptive cleaning timelines",
    ],
    seoKeywords: [
      "Commercial water tank cleaning",
      "Water tank cleaning services Kerala",
    ],
    image: "/images/Commercial Water Tank Cleaning.jpeg",
    alt: "Commercial building water tank cleaning and maintenance in Kerala",
    prefilledMessage:
      "Hello Dr. Tank, I would like to enquire about Commercial Water Tank Cleaning services for our facility.",
  },
  {
    id: "stp",
    title: "STP Tank Cleaning",
    shortTitle: "Sewage Treatment Plants",
    badge: "Treatment Facility",
    description:
      "Specialized cleaning solutions for Sewage Treatment Plant tanks, helping maintain cleaner treatment infrastructure and operational environments.",
    detailedPoints: [
      "Sludge removal and biological aeration tank clearing",
      "Settling & clarification chamber thorough cleaning",
      "Odor control and residue removal support",
      "Preventive maintenance support for treated wastewater systems",
    ],
    seoKeywords: [
      "STP tank cleaning",
      "Sewage treatment plant tank cleaning Kerala",
    ],
    image: "/images/STP Tank Cleaning.jpeg",
    alt: "Sewage Treatment Plant STP tank cleaning services in Kerala",
    prefilledMessage:
      "Hello Dr. Tank, I would like to enquire about STP Tank Cleaning services.",
  },
  {
    id: "etp",
    title: "ETP Tank Cleaning",
    shortTitle: "Effluent Treatment Plants",
    badge: "Industrial Wastewater",
    description:
      "Professional Effluent Treatment Plant tank cleaning for industrial facilities and wastewater treatment systems.",
    detailedPoints: [
      "Chemical effluent storage & equalization tank descaling",
      "Industrial sludge extraction and neutralizing tank clearing",
      "Tough chemical residue washdown with safety compliance",
      "Heavy sediment evacuation from filtration units",
    ],
    seoKeywords: [
      "ETP tank cleaning",
      "Industrial tank cleaning services Kerala",
    ],
    image: "/images/ETP Tank Cleaning.jpeg",
    alt: "Effluent Treatment Plant ETP tank cleaning in Kerala",
    prefilledMessage:
      "Hello Dr. Tank, I would like to enquire about ETP Tank Cleaning services for our plant.",
  },
  {
    id: "wtp",
    title: "WTP & Industrial Processing Tank Cleaning",
    shortTitle: "WTP & Industrial",
    badge: "Processing Units",
    description:
      "Cleaning services for Water Treatment Plants and industrial processing tanks, designed to address different industrial cleaning requirements.",
    detailedPoints: [
      "Raw water settling tanks & clarifier vessel cleaning",
      "Pressure sand filter & activated carbon tank prep wash",
      "Industrial manufacturing process tanks & mixing reservoirs",
      "Tailored cleaning protocols for manufacturing plants",
    ],
    seoKeywords: [
      "WTP tank cleaning",
      "Industrial water tank cleaning",
      "Industrial tank cleaning Kerala",
    ],
    image: "/images/WTP & Industrial Processing Tank Cleaning.jpeg",
    alt: "Water Treatment Plant WTP and industrial processing tank cleaning services",
    prefilledMessage:
      "Hello Dr. Tank, I would like to enquire about WTP & Industrial Processing Tank Cleaning services.",
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "specialized",
    title: "Specialized Cleaning Solutions",
    description:
      "Different cleaning solutions for residential, commercial and industrial tanks.",
    icon: "Layers",
  },
  {
    id: "expertise",
    title: "Residential to Industrial Expertise",
    description:
      "From household tanks to large-scale treatment facilities.",
    icon: "ShieldCheck",
  },
  {
    id: "coverage",
    title: "Kerala-Wide Service Coverage",
    description:
      "Serving customers across Kerala.",
    icon: "MapPin",
  },
  {
    id: "approach",
    title: "Professional Approach",
    description:
      "A structured approach to understanding and handling different cleaning requirements.",
    icon: "ClipboardCheck",
  },
  {
    id: "booking",
    title: "Easy Booking",
    description:
      "Connect with our team directly through WhatsApp.",
    icon: "MessageCircle",
  },
];

export interface PackageItem {
  id: string;
  name: string;
  tag: string;
  popular?: boolean;
  description: string;
  features: string[];
  pricingLabel: string;
  prefilledMessage: string;
}

export const PACKAGES: PackageItem[] = [
  {
    id: "basic",
    name: "BASIC",
    tag: "Regular Upkeep",
    description: "Essential cleaning solutions for regular water tank maintenance.",
    features: [
      "Dewatering & sludge removal",
      "High-pressure scrubbing of interior walls & floor",
      "Vacuum extraction of loose sediment & dirt",
      "Final freshwater rinse and hygienic check",
      "Suitable for standard residential overhead & sump tanks",
    ],
    pricingLabel: "Contact for Pricing",
    prefilledMessage:
      "Hello Dr. Tank, I would like to get a quote for the BASIC water tank cleaning plan.",
  },
  {
    id: "advanced",
    name: "ADVANCED",
    tag: "Comprehensive Care",
    popular: true,
    description:
      "More comprehensive cleaning solutions based on your tank type and cleaning requirements.",
    features: [
      "Complete de-sludging and deep mechanical scrub",
      "High-pressure motorized rotary jet wash",
      "Specialized antibacterial treatment / UV treatment",
      "Pipe line flushing check and tank lid inspection",
      "Ideal for villas, commercial facilities & deep deposits",
    ],
    pricingLabel: "Get a Custom Quote",
    prefilledMessage:
      "Hello Dr. Tank, I would like to get a quote for the ADVANCED water tank cleaning plan.",
  },
  {
    id: "amc",
    name: "AMC",
    tag: "Annual Maintenance Contract",
    description:
      "Annual Maintenance Contract solutions for customers looking for planned and recurring tank maintenance.",
    features: [
      "Scheduled periodic cleanings throughout the year (bi-annual / quarterly)",
      "Priority customer dispatch and inspection visits",
      "Detailed maintenance report after each cleaning session",
      "Cost-efficient preventive solution for apartments, hotels & factories",
      "Peace of mind with guaranteed hygienic water storage year-round",
    ],
    pricingLabel: "Get a Custom Quote",
    prefilledMessage:
      "Hello Dr. Tank, I would like to enquire about an Annual Maintenance Contract (AMC) for water tank cleaning.",
  },
];

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "Residential Overhead",
    title: "Residential Overhead Tank Cleaning",
    description: "Thorough descaling and dirt removal from domestic rooftop water tanks.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    alt: "Residential overhead water tank cleaning in progress",
  },
  {
    id: "g2",
    category: "Underground Sump",
    title: "Underground Water Tank Cleaning",
    description: "Deep sediment extraction and high pressure washing of concrete sump tanks.",
    image:
      "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80",
    alt: "Underground concrete water sump tank desilting and wash",
  },
  {
    id: "g3",
    category: "Commercial",
    title: "Commercial Tank Cleaning",
    description: "Serving residential complexes, business towers, hotels and schools.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80",
    alt: "Commercial building water reservoir cleaning",
  },
  {
    id: "g4",
    category: "Industrial",
    title: "Industrial Tank Cleaning",
    description: "Heavy duty cleaning of large manufacturing tanks and storage vessels.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    alt: "Industrial tank cleaning and maintenance",
  },
  {
    id: "g5",
    category: "STP & ETP",
    title: "STP & ETP Treatment Cleaning",
    description: "Targeted sludge evacuation and clarifier tank sanitization.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    alt: "Sewage Treatment Plant STP and ETP tank cleaning",
  },
  {
    id: "g6",
    category: "Equipment",
    title: "Cleaning Equipment & Machinery",
    description: "High-pressure jet washers, sludge pumps and specialized vacuum gear.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    alt: "Professional water tank cleaning machinery and equipment",
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of water tanks does Dr. Tank clean?",
    answer:
      "Dr. Tank cleans residential overhead plastic/Sintex tanks, underground concrete sumps, commercial building water reservoirs, stainless steel storage tanks, Sewage Treatment Plant (STP) tanks, Effluent Treatment Plant (ETP) tanks, and industrial Water Treatment Plant (WTP) processing tanks across Kerala.",
  },
  {
    id: "faq-2",
    question: "Do you provide home water tank cleaning services?",
    answer:
      "Yes, we provide professional home water tank cleaning services for individual houses, villas, and residential apartments. Our team removes accumulated mud, silt, algae, and bio-deposits to ensure clean and hygienic water for your family's daily use.",
  },
  {
    id: "faq-3",
    question: "Do you provide commercial and industrial tank cleaning?",
    answer:
      "Yes, Dr. Tank undertakes commercial and industrial tank cleaning for apartment complexes, hospitals, hotels, schools, business parks, and factories. We have the capability, safety gear, and heavy equipment required to handle large water storage capacities.",
  },
  {
    id: "faq-4",
    question: "Do you provide STP and ETP tank cleaning?",
    answer:
      "Yes. We offer specialized cleaning solutions for Sewage Treatment Plant (STP) tanks and Effluent Treatment Plant (ETP) tanks in commercial establishments and industrial units, helping maintain cleaner treatment infrastructure and operational compliance.",
  },
  {
    id: "faq-5",
    question: "Which locations in Kerala do you serve?",
    answer:
      "Dr. Tank provides water tank cleaning services across all 14 districts of Kerala: Thiruvananthapuram, Kollam, Pathanamthitta, Alappuzha, Kottayam, Idukki, Ernakulam, Thrissur, Palakkad, Malappuram, Kozhikode, Wayanad, Kannur, and Kasaragod.",
  },
  {
    id: "faq-6",
    question: "How can I book a water tank cleaning service?",
    answer:
      "Booking is quick and straightforward. You can fill out our online booking enquiry form or message us directly on WhatsApp at +91 80897 83517 with your location, tank type, and preferred date. Our team will review your requirements, confirm slot availability, and guide you through the process.",
  },
  {
    id: "faq-7",
    question: "What is the cost of water tank cleaning?",
    answer:
      "Water tank cleaning costs depend on factors such as tank capacity (liters), tank type (overhead, underground sump, STP, ETP, or industrial), physical accessibility, the level of sedimentation, and your location in Kerala. Contact our team on WhatsApp for a clear, customized quote with zero hidden charges.",
  },
  {
    id: "faq-8",
    question: "Do you offer Annual Maintenance Contracts?",
    answer:
      "Yes, Dr. Tank offers Annual Maintenance Contract (AMC) solutions for residential apartments, villas, commercial complexes, and industrial plants. An AMC ensures planned, recurring cleanings at regular intervals so your water storage remains consistently clean and hygienic year-round.",
  },
  {
    id: "faq-9",
    question: "Do you provide water tank cleaning machines or cleaning liquids?",
    answer:
      "Dr. Tank is a professional service provider and does not sell cleaning liquids or water tank cleaning machines. However, our team uses professional-grade high-pressure jet cleaners, sludge slurry pumps, and hygienic cleaning methods during our service visits. Customers are welcome to contact our team to clarify the specific equipment and cleaning procedures used for their service.",
  },
];

