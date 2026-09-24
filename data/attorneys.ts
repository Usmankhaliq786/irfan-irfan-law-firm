export interface Attorney {
  id: string;
  name: string;
  role: string;
  specialization: string[];
  bio: string;
  barAdmissions: string[];
  keyCases: string[];
  email: string;
  phone: string;
  image: string;
  admissionYear?: string;
  languages?: string[];
  education?: string[];
  memberships?: string[];
}

export const attorneys: Attorney[] = [
  /* =========================================================
     01 — HASAN IRFAN KHAN
  ========================================================= */

  {
    id: "hasan-irfan-khan",
    name: "Hasan Irfan Khan",
    role: "Advocate Supreme Court",

    specialization: [
      "Strategy & Dispute Resolution",
      "Complex Litigation",
      "Trademark Law",
      "Copyright Law",
      "Patent Law",
      "Agreements",
      "Competition Law",
      "Telecom Law",
      "Drugs & Pharmaceutical Laws",
      "Corporate Law",
      "Constitutional Law",
      "Commercial Law",
      "Consumer Protection Law",
      "Product Liability",
      "Business Restructuring",
      "Joint Ventures",
      "Mergers & Acquisitions",
      "Franchising",
      "Licensing",
      "Transfer of Technology",
      "Cross Border Transactions",
      "NAB Laws",
      "Data Privacy",
      "Digital Technologies & High Tech Laws",
      "Cybercrime Laws",
    ],

    bio:
      "Strategy, dispute resolution and complex litigation expert with hands-on experience relating to trademark, copyright and patent laws, agreements, competition law, telecom laws, drugs and pharmaceutical laws, corporate, constitutional, commercial and consumer protection law, product liability, business restructuring, joint ventures, mergers and acquisitions, franchising, licensing, transfer of technology, cross border transactions, NAB laws, data privacy, digital technologies, high tech laws and cybercrime laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",

    image: "/lawyers/hasan-irfan-khan.webp",

    admissionYear: "1993",

    languages: [
      "English",
      "Urdu",
      "Punjabi",
    ],
  },

  /* =========================================================
     02 — SYED MUHAMMAD BILAL AHSAN
  ========================================================= */

  {
    id: "syed-muhammad-bilal-ahsan",
    name: "Syed Muhammad Bilal Ahsan",
    role: "Advocate High Court",

    specialization: [
      "Strategy & Innovation",
      "Trademark Law",
      "Copyright Law",
      "Patent Law",
      "Agreements",
      "Competition Law",
      "Telecom Law",
      "Drugs & Pharmaceutical Laws",
      "Corporate Law",
      "Constitutional Law",
      "Commercial Law",
      "Consumer Protection Law",
      "Product Liability",
      "Business Structuring",
      "Joint Ventures",
      "Mergers & Acquisitions",
      "Franchising",
      "Licensing",
      "Transfer of Technology",
      "Cross Border Transactions",
      "NAB Laws",
      "Data Privacy",
      "Digital Technologies & High Tech Laws",
      "Cybercrime Laws",
    ],

    bio:
      "Strategy and innovation practitioner with experience across trademark, copyright and patent laws, agreements, competition law, telecom laws, drugs and pharmaceutical laws, corporate and constitutional matters, commercial and consumer protection law, product liability, business structuring, joint ventures, mergers and acquisitions, franchising, licensing, transfer of technology, cross border transactions, NAB laws, data privacy, digital technologies, high tech laws and cybercrime laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2002",

    languages: [
      "English",
      "Urdu",
      "Punjabi",
    ],
  },

  /* =========================================================
     03 — BARRISTER MARIA FARRUKH KHAN
  ========================================================= */

  {
    id: "maria-farrukh-khan",
    name: "Barrister Maria Farrukh Khan",
    role: "Barrister",

    specialization: [
      "Strategy & Innovation",
      "Corporate & Commercial Law",
      "Commercial Agreements",
      "Franchising & Contracts",
      "Competition Law",
      "Regulatory Matters",
      "Mergers & Acquisitions",
      "Environmental & Bio-Safety Laws",
      "Intellectual Property Law",
      "Digital Technologies",
      "Data Privacy",
    ],

    bio:
      "Strategy and innovation practitioner whose areas of practice include corporate and commercial law, commercial agreements, franchising and contracts, competition law, regulatory matters, mergers and acquisitions, environmental and bio-safety laws, intellectual property law, digital technologies and data privacy.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",

    image: "/lawyers/maria-farrukh-khan.webp",

    admissionYear: "2009",

    languages: [
      "English",
      "Spanish",
      "Urdu",
    ],

    education: [
      "Cambridge University, M.A. (Law)",
      "Wellesley College, Boston, B.A. (Biological Chemistry)",
    ],

    memberships: [
      "Honourable Society of Lincoln's Inn",
    ],
  },

  /* =========================================================
     04 — DR. ALI MOHSIN QAZILBASH
  ========================================================= */

  {
    id: "dr-ali-mohsin-qazilbash",
    name: "Dr. Ali Mohsin Qazilbash",
    role: "",

    specialization: [
      "Joint Ventures",
      "Corporate Law",
      "Competition Law",
      "Telecom Law",
      "Franchising",
      "Agreements",
      "Mergers & Acquisitions",
      "Banking & Finance Law",
      "Constitutional Law",
      "Customs Law",
      "Civil Service Laws",
      "Cybercrime Laws",
    ],

    bio:
      "His practice areas include joint ventures, corporate law, competition law, telecom laws, franchising, agreements, mergers and acquisitions, banking and finance law, constitutional law, customs and civil service laws, and cybercrime laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "1993",

    languages: [
      "English",
      "Urdu",
      "Punjabi",
    ],

    education: [
      "LL.M., J.S.D. (Notre Dame)",
    ],
  },

  /* =========================================================
     05 — MIRZA SAQIB ASGHAR
  ========================================================= */

  {
    id: "mirza-saqib-asghar",
    name: "Mirza Saqib Asghar",
    role: "",

    specialization: [
      "Intellectual Property Laws",
      "International Law",
      "International Economic Law",
      "Banking",
      "Contracts",
      "Consumer Protection",
      "Advertising Law",
      "Corporate Law",
      "Competition Law",
    ],

    bio:
      "His areas of practice include intellectual property laws, international law, international economic law, banking, contracts, consumer protection, advertising and corporate law, and competition law.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2007",

    languages: [
      "English",
      "Urdu",
      "Punjabi",
    ],

    education: [
      "University of the Punjab, LL.M.",
      "College of Business Administration, Faisalabad, BCS",
    ],
  },

  /* =========================================================
     06 — KHAWAJA SHOAIB MANSOOR
  ========================================================= */

  {
    id: "khawaja-shoaib-mansoor",
    name: "Khawaja Shoaib Mansoor",
    role: "",

    specialization: [
      "Intellectual Property Laws",
      "International Law",
      "International Economic Law",
      "Banking",
      "Contracts",
      "Consumer Protection",
      "Advertising Law",
      "Corporate Law",
      "Competition Law",
      "Complex Litigation",
      "Telecom Law",
      "Digital Laws",
    ],

    bio:
      "His areas of practice include intellectual property laws, international law, international economic law, banking, contracts, consumer protection, advertising and corporate law, competition law, complex litigation, telecom and digital laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2006",

    languages: [
      "English",
      "Urdu",
    ],

    education: [
      "Hamdard University",
    ],
  },

  /* =========================================================
     07 — TARIQ BASHIR
  ========================================================= */

  {
    id: "tariq-bashir",
    name: "Tariq Bashir",
    role: "",

    specialization: [
      "International Law",
      "Banking Law",
      "Contracts",
      "Consumer Protection",
      "Advertising Law",
      "Corporate Law",
      "Litigation",
      "Telecom Law",
    ],

    bio:
      "His areas of practice include international law, banking law, contracts, consumer protection, advertising and corporate law, litigation and telecom law.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "1996",

    languages: [
      "English",
      "Urdu",
    ],

    education: [
      "University of Sheffield, U.K., M.A., LL.B. (Hons.)",
    ],
  },

  /* =========================================================
     08 — MUHAMMAD TALAL FARRUKH IRFAN KHAN
  ========================================================= */

  {
    id: "muhammad-talal-farrukh-irfan-khan",
    name: "Muhammad Talal Farrukh Irfan Khan",
    role: "",

    specialization: [
      "Strategy & Innovation",
      "Complex Litigation",
      "Corporate & Commercial Law",
      "Agreements",
      "Franchising",
      "Competition Law",
      "Mergers & Acquisitions",
      "Intellectual Property Laws",
      "Digital Technologies",
      "Data Privacy",
      "Telecom Laws",
    ],

    bio:
      "Strategy and innovation practitioner with experience in complex litigation, corporate and commercial laws, agreements, franchising, competition law, mergers and acquisitions, intellectual property laws, digital technologies, data privacy and telecom laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",

    image: "/lawyers/muhammad-talal-khan.webp",

    admissionYear: "2016",

    languages: [
      "English",
      "Urdu",
    ],

    education: [
      "LL.M. (GW)",
      "LL.M. (Toronto)",
    ],
  },

  /* =========================================================
     09 — AHMAD MUZAMMIL
  ========================================================= */

  {
    id: "ahmad-muzammil",
    name: "Ahmad Muzammil",
    role: "",

    specialization: [
      "Corporate & Commercial Law",
      "Commercial Agreements",
      "Franchising & Contracts",
      "Mergers & Acquisitions",
    ],

    bio:
      "His areas of practice include corporate and commercial matters, commercial agreements, franchising and contracts, and mergers and acquisitions.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2013",

    languages: [
      "English",
      "Urdu",
      "Punjabi",
    ],

    education: [
      "Punjab University Law College, LL.B.",
    ],
  },

  /* =========================================================
     10 — MUDASSAR HASSAN
  ========================================================= */

  {
    id: "mudassar-hassan",
    name: "Mudassar Hassan",
    role: "",

    specialization: [
      "Corporate & Commercial Law",
      "Intellectual Property Laws",
      "Competition Law",
      "Cybercrime Laws",
      "Digital Rights",
      "Telecom Law",
    ],

    bio:
      "His practice includes corporate and commercial law, intellectual property laws, competition law, cybercrime matters, digital rights and telecom.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2010",

    languages: [
      "English",
      "Urdu",
      "Punjabi",
    ],

    education: [
      "Baha-uddin-Zikarya University, LL.B.",
    ],
  },

  /* =========================================================
     11 — BARRISTER ZAKA ULLAH RANA
  ========================================================= */

  {
    id: "barrister-zaka-ullah-rana",
    name: "Barrister Zaka Ullah Rana",
    role: "Barrister",

    specialization: [
      "Corporate & Commercial Law",
      "Customs Law",
      "Complex Litigation",
      "Telecom Laws",
    ],

    bio:
      "His practice areas include corporate and commercial law, customs, complex litigation and telecom laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2018",

    languages: [
      "English",
      "Urdu",
      "Punjabi",
    ],

    education: [
      "Bar-at-Law, Lincoln's Inn",
      "University of London, LL.B. (Hons.)",
    ],
  },

  /* =========================================================
     12 — BARRISTER MAMOON SATTAR
  ========================================================= */

  {
    id: "barrister-mamoon-sattar",
    name: "Barrister Mamoon Sattar",
    role: "Barrister",

    specialization: [
      "Corporate Law",
      "Commercial Law",
      "Employment Law",
      "Private Equity",
      "Competition Law",
      "International Trade",
      "International Arbitration",
      "AI Governance & Legal Compliance (USA & UK)",
      "Data Protection Laws (USA & UK)",
      "Intellectual Property Law",
      "Mergers & Acquisitions",
      "Real Estate Law",
      "IT Laws",
      "Cybercrime Laws",
    ],

    bio:
      "His practice includes corporate law, commercial law, employment law, private equity, competition law, international trade, international arbitration, AI governance and legal compliance in the USA and UK, data protection laws in the USA and UK, intellectual property law, mergers and acquisitions, real estate law, IT laws and cybercrime laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2023",

    languages: [
      "English",
      "Urdu",
    ],

    education: [
      "Bar-at-Law, Lincoln's Inn, UK",
      "LL.M., University of the West of England, UK",
      "LL.B. (Hons.), University of London, UK",
      "Arbitrator Advocate, ADR ODR International",
      "Specialisation in IP Laws, University of Pennsylvania",
      "Specialisation in M&A, University of Urbana-Champaign, Illinois",
    ],
  },

  /* =========================================================
     13 — IMRAN ALI
  ========================================================= */

  {
    id: "imran-ali",
    name: "Imran Ali",
    role: "",

    specialization: [
      "Trademark Prosecution",
      "Patent Prosecution",
      "Copyright Prosecution",
    ],

    bio:
      "His areas of practice include trademark, patent and copyright prosecution.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2003",

    languages: [
      "English",
      "Urdu",
    ],

    education: [
      "Sindh Law College, LL.B.",
    ],
  },

  /* =========================================================
     14 — MAH NOOR
  ========================================================= */

  {
    id: "mah-noor",
    name: "Mah Noor",
    role: "",

    specialization: [
      "Corporate & Commercial Law",
      "Telecom Law",
      "Competition Law",
      "Data Privacy",
      "Complex Litigation",
    ],

    bio:
      "Her practice areas include corporate and commercial law, telecom, competition law, data privacy and complex litigation.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2021",

    languages: [
      "Urdu",
      "English",
    ],

    education: [
      "University of London, LL.B. (Hons.)",
    ],
  },

  /* =========================================================
     15 — NIDA IZHAR
  ========================================================= */

  {
    id: "nida-izhar",
    name: "Nida Izhar",
    role: "",

    specialization: [
      "Corporate & Commercial Law",
      "Intellectual Property Laws",
      "Competition Law",
      "Telecom Laws",
    ],

    bio:
      "Her practice areas include corporate and commercial law, intellectual property laws, competition law and telecom laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2022",

    languages: [
      "Urdu",
      "English",
    ],

    education: [
      "University of London, LL.B. (Hons.)",
    ],
  },

  /* =========================================================
     16 — TAYYABA JAWAD SYED
  ========================================================= */

  {
    id: "tayyaba-jawad-syed",
    name: "Tayyaba Jawad Syed",
    role: "",

    specialization: [
      "Corporate & Commercial Law",
      "Intellectual Property Laws",
      "Constitutional Law",
    ],

    bio:
      "Her practice areas include corporate and commercial law, intellectual property laws and constitutional law.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2018",

    languages: [
      "Urdu",
      "English",
    ],

    education: [
      "University of London, LL.B. (Hons.)",
    ],
  },

  /* =========================================================
     17 — NOOR-UL-AIN
  ========================================================= */

  {
    id: "noor-ul-ain",
    name: "Noor-Ul-Ain",
    role: "",

    specialization: [
      "Corporate & Commercial Law",
      "Intellectual Property",
    ],

    bio:
      "Her areas of practice include corporate and commercial law and intellectual property.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2010",

    languages: [
      "English",
      "Urdu",
      "Punjabi",
    ],

    education: [
      "Quaid-e-Azam Law College, LL.B.",
    ],
  },

  /* =========================================================
     18 — ZULFIQAR ALI
  ========================================================= */

  {
    id: "zulfiqar-ali",
    name: "Zulfiqar Ali",
    role: "",

    specialization: [
      "Trademark Prosecution",
      "Patent Prosecution",
      "Copyright Prosecution",
    ],

    bio:
      "His areas of practice include trademark, patent and copyright prosecution.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "1998",

    education: [
      "Sindh Law College, LL.B.",
    ],
  },

  /* =========================================================
     19 — ARIF ASGHAR
  ========================================================= */

  {
    id: "arif-asghar",
    name: "Arif Asghar",
    role: "",

    specialization: [
      "Trademark Prosecution",
      "Patent Prosecution",
      "Copyright Prosecution",
    ],

    bio:
      "His areas of practice include trademark, patent and copyright prosecution.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2011",

    languages: [
      "English",
      "Urdu",
    ],

    education: [
      "Dadabhoy Institute of Higher Education, B.Sc.",
      "Federal Urdu University, LL.M.",
    ],
  },

  /* =========================================================
     20 — GHANA SAJID
  ========================================================= */

  {
    id: "ghana-sajid",
    name: "Ghana Sajid",
    role: "",

    specialization: [
      "Corporate Law",
      "Commercial Law",
      "Intellectual Property Laws",
    ],

    bio:
      "Practice areas include corporate, commercial and intellectual property laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2023",

    education: [
      "University of London, LL.B. (Hons.)",
    ],
  },

  /* =========================================================
     21 — IBRAR AHMAD KHAN
  ========================================================= */

  {
    id: "ibrar-ahmad-khan",
    name: "Ibrar Ahmad Khan",
    role: "On Secondment",

    specialization: [
      "Corporate Law",
      "Commercial Law",
      "Intellectual Property Laws",
    ],

    bio:
      "His practice areas include corporate, commercial and intellectual property laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2024",

    education: [
      "University of Central Punjab, LL.B.",
    ],
  },

  /* =========================================================
     22 — NADIR ISHAQUE
  ========================================================= */

  {
    id: "nadir-ishaque",
    name: "Nadir Ishaque",
    role: "",

    specialization: [
      "Corporate Law",
      "Commercial Law",
      "Intellectual Property Laws",
    ],

    bio:
      "His practice areas include corporate, commercial and intellectual property laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2021",

    education: [
      "University of Peshawar, LL.B.",
    ],
  },

  /* =========================================================
     23 — ALI ASAD RAI
  ========================================================= */

  {
    id: "ali-asad-rai",
    name: "Ali Asad Rai",
    role: "",

    specialization: [
      "Corporate Law",
      "Commercial Law",
      "Intellectual Property Laws",
      "Business Law",
    ],

    bio:
      "His practice areas include corporate, commercial and intellectual property laws, together with business law.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2022",

    education: [
      "University of Lahore, LL.B. (Hons.)",
      "University of Hertfordshire, LL.M.",
    ],
  },

  /* =========================================================
     24 — SYEDA ANIKA HASAN
  ========================================================= */

  {
    id: "syeda-anika-hasan",
    name: "Syeda Anika Hasan",
    role: "Trainee",

    specialization: [
      "Corporate Law",
      "Commercial Law",
      "Intellectual Property Laws",
    ],

    bio:
      "Her practice areas include corporate, commercial and intellectual property laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "2025",

    education: [
      "University of London – External Program, LL.B.",
    ],
  },

  /* =========================================================
     25 — ABEER MANSOOR SHEIKH
  ========================================================= */

  {
    id: "abeer-mansoor-sheikh",
    name: "Abeer Mansoor Sheikh",
    role: "Trainee",

    specialization: [
      "Corporate Law",
      "Commercial Law",
      "Intellectual Property Laws",
    ],

    bio:
      "Practice areas include corporate, commercial and intellectual property laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "In Process",

    education: [
      "University of London – External Program, LL.B.",
    ],
  },

  /* =========================================================
     26 — BARRISTER MUHAMMAD MUSA CHATTHA
  ========================================================= */

  {
    id: "barrister-muhammad-musa-chattha",
    name: "Barrister Muhammad Musa Chattha",
    role: "Trainee",

    specialization: [
      "Corporate Law",
      "Commercial Law",
      "Intellectual Property Laws",
    ],

    bio:
      "His practice areas include corporate, commercial and intellectual property laws.",

    barAdmissions: [],
    keyCases: [],
    email: "",
    phone: "",
    image: "",

    admissionYear: "In Process",

    education: [
      "Bar-at-Law, Lincoln's Inn, UK",
      "University of London – External Program, LL.B.",
    ],
  },
];

/* =========================================================
   HELPERS
========================================================= */

export function getAttorneyById(id: string) {
  return attorneys.find((attorney) => attorney.id === id);
}

export function getAttorneysByIds(ids: string[]) {
  return ids
    .map((id) => attorneys.find((attorney) => attorney.id === id))
    .filter((attorney): attorney is Attorney => Boolean(attorney));
}