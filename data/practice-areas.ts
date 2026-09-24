export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  expertise: string[];
  icon: string;

  /**
   * Attorney IDs from data/attorneys.ts.
   *
   * These are used on the Practice Areas page to show lawyers whose
   * supplied profiles identify experience relevant to the practice.
   */
  lawyers: string[];
}

export const practiceAreas: PracticeArea[] = [
  /* =========================================================
     01 — ARBITRATION
  ========================================================= */

  {
    id: "arbitration",
    title: "Arbitration",

    shortDescription:
      "Representation in domestic and international commercial arbitration matters.",

    fullDescription:
      "The firm has expertise and has handled commercial arbitration matters on behalf of its clients. Our services in this area include drafting arbitration clauses, preparation of arbitration references, conduct of arbitration proceedings with or without intervention of courts in Pakistan and abroad, making foreign and local arbitration awards as rule of court, preparing objections and enforcement of foreign and local arbitration awards. The firm’s lawyers possess the skills needed to handle international and local arbitration and litigation matters.",

    expertise: [
      "Commercial Arbitration",
      "International Arbitration",
      "Arbitration Clauses",
      "Arbitration References",
      "Arbitration Proceedings",
      "Enforcement of Awards",
    ],

    icon: "scale",

    lawyers: [
      "barrister-mamoon-sattar",
    ],
  },

  /* =========================================================
     02 — AVIATION
  ========================================================= */

  {
    id: "aviation",
    title: "Aviation",

    shortDescription:
      "Legal advice on airline operations, aviation contracts, aircraft leasing and related disputes.",

    fullDescription:
      "The firm advises on structuring and negotiating airline operation licenses and related contracts, aircraft lease contracts, contracts for appointment of general sales agents for both passenger and cargo operations, aircraft accident matters, claims for compensation and damages, and court litigation between airlines and their agents.",

    expertise: [
      "Airline Operation Licenses",
      "Aircraft Lease Contracts",
      "General Sales Agent Agreements",
      "Passenger & Cargo Operations",
      "Aircraft Accident Matters",
      "Aviation Litigation",
    ],

    icon: "plane",

    /*
     * No attorney in the supplied attorney profile currently lists
     * Aviation as a specific specialization.
     */
    lawyers: [],
  },

  /* =========================================================
     03 — BANKING & FINANCE
  ========================================================= */

  {
    id: "banking-finance",
    title: "Banking & Finance",

    shortDescription:
      "Legal advice, documentation and representation for banks and financial institutions.",

    fullDescription:
      "The firm conducts legal audits for banks to ensure that loans are properly secured in accordance with sanction advice or offer letters. The practice includes loan documentation for commercial banks, investment banks and non-banking financial institutions, syndicated finance agreements, financial derivatives, term finance certificates, housing finance, Islamic finance products including morabaha and musharika, lease agreements, hire purchase agreements and consumer finance agreements. The firm also represents financial institutions in the Banking and High Courts of the country and handles recovery proceedings and execution of decrees.",

    expertise: [
      "Banking Legal Audits",
      "Loan Documentation",
      "Syndicated Finance",
      "Islamic Finance",
      "Consumer Finance",
      "Banking Litigation",
      "Recovery Proceedings",
    ],

    icon: "landmark",

    lawyers: [
      "dr-ali-mohsin-qazilbash",
      "mirza-saqib-asghar",
      "khawaja-shoaib-mansoor",
      "tariq-bashir",
    ],
  },

  /* =========================================================
     04 — COMPETITION LAW
  ========================================================= */

  {
    id: "competition-law",
    title: "Competition Law",

    shortDescription:
      "Advice on competition regulation, anti-trust compliance, mergers and market practices.",

    fullDescription:
      "The firm has been at the forefront of the emergence of competition law and anti-trust compliance, filings and litigation in Pakistan. The firm advises clients on avoiding acts, agreements and practices prohibited under competition law and also provides training to clients. The practice includes matters involving cartels, pre-merger filings, mergers, deceptive marketing practice complaints and related proceedings.",

    expertise: [
      "Competition Compliance",
      "Anti-Trust",
      "Cartels",
      "Pre-Merger Filings",
      "Merger Matters",
      "Deceptive Marketing",
      "Competition Litigation",
    ],

    icon: "chart-no-axes-combined",

    lawyers: [
      "hasan-irfan-khan",
      "maria-farrukh-khan",
      "muhammad-talal-farrukh-irfan-khan",
      "syed-muhammad-bilal-ahsan",
      "dr-ali-mohsin-qazilbash",
      "mirza-saqib-asghar",
      "khawaja-shoaib-mansoor",
      "mudassar-hassan",
      "barrister-mamoon-sattar",
      "mah-noor",
      "nida-izhar",
    ],
  },

  /* =========================================================
     05 — CORPORATE & BUSINESS LAW
  ========================================================= */

  {
    id: "corporate-business-law",
    title: "Corporate & Business Law",

    shortDescription:
      "Comprehensive advice on national and international business transactions and corporate matters.",

    fullDescription:
      "The firm advises clients regarding national and international business transactions. Our lawyers counsel clients on issues including choice of corporate vehicle, structuring of constitutive documents, shareholding structures, sale and purchase of assets, government consents, income and sales tax structures, repatriation regimes and customs. We regularly advise foreign clients in establishing branches or local companies and act as their agents before various governmental departments. The firm also advises clients on legal issues arising in the running and operation of commercial enterprises.",

    expertise: [
      "Corporate Advisory",
      "Business Transactions",
      "Corporate Structuring",
      "Shareholding Structures",
      "Asset Transactions",
      "Government Consents",
      "Foreign Investment",
      "Commercial Operations",
    ],

    icon: "building-2",

    lawyers: [
      "hasan-irfan-khan",
      "maria-farrukh-khan",
      "muhammad-talal-farrukh-irfan-khan",
      "syed-muhammad-bilal-ahsan",
      "dr-ali-mohsin-qazilbash",
      "mirza-saqib-asghar",
      "khawaja-shoaib-mansoor",
      "tariq-bashir",
      "ahmad-muzammil",
      "mudassar-hassan",
      "barrister-zaka-ullah-rana",
      "barrister-mamoon-sattar",
      "mah-noor",
      "nida-izhar",
      "tayyaba-jawad-syed",
      "noor-ul-ain",
      "ghana-sajid",
    ],
  },

  /* =========================================================
     06 — CYBER LAW & E-COMMERCE
  ========================================================= */

  {
    id: "cyber-law-ecommerce",
    title: "Cyber Law & E-Commerce",

    shortDescription:
      "Legal counsel on electronic transactions, digital business, data protection and cyberspace matters.",

    fullDescription:
      "Technology affects business practices and can therefore affect business law. Cyberspace, the internet and the World Wide Web represent technologies affecting commercial practices throughout the world. The firm advises clients regarding e-contracts, cyberspace agreements, electronic transactions, jurisdictional issues, website content, trademarks, data protection, copyright and other intellectual property issues in cyberspace. Members of the firm have also served on Government panels and committees constituted to make the country’s laws e-commerce friendly in the digital information age.",

    expertise: [
      "E-Commerce",
      "E-Contracts",
      "Electronic Transactions",
      "Cyberspace Agreements",
      "Data Protection",
      "Digital Technologies",
      "Cybercrime Law",
      "Online Intellectual Property",
    ],

    icon: "monitor-smartphone",

    lawyers: [
      "hasan-irfan-khan",
      "maria-farrukh-khan",
      "muhammad-talal-farrukh-irfan-khan",
      "syed-muhammad-bilal-ahsan",
      "dr-ali-mohsin-qazilbash",
      "khawaja-shoaib-mansoor",
      "mudassar-hassan",
      "barrister-mamoon-sattar",
      "mah-noor",
    ],
  },

  /* =========================================================
     07 — ELECTION LAWS
  ========================================================= */

  {
    id: "election-laws",
    title: "Election Laws",

    shortDescription:
      "Representation throughout electoral proceedings, from nominations to election litigation.",

    fullDescription:
      "The firm has a dedicated team of lawyers with experience in matters relating to election laws, procedures and substantive issues arising during the election process. The firm represents clients throughout the various stages, including filing nomination papers, contesting objection petitions, appearing before the Election Commission of Pakistan, filing writ petitions in cases involving violations of law, and representing clients before Election Tribunals leading up to the Supreme Court of Pakistan.",

    expertise: [
      "Nomination Papers",
      "Election Objections",
      "Election Commission Proceedings",
      "Election Petitions",
      "Election Tribunals",
      "Constitutional Petitions",
    ],

    icon: "vote",

    /*
     * Election Law is part of the firm's supplied practice profile,
     * but no individual attorney in attorneys.ts specifically lists
     * Election Law as a specialization.
     */
    lawyers: [],
  },

  /* =========================================================
     08 — ENERGY
  ========================================================= */

  {
    id: "energy",
    title: "Energy (Oil, Gas & Electricity)",

    shortDescription:
      "Legal advice for companies operating across the oil, gas and power sectors.",

    fullDescription:
      "The firm offers legal advice to companies in the oil, gas and power sectors. Services are provided to local as well as foreign clients on a range of issues extending from privatization to legal aspects of corporate finance transactions. The firm also advises businesses engaged in marketing petroleum and other products on matters including licenses for marketing, storage and sale of petroleum products, contracts for setting up petrol stations and concessions for prospecting of oil and gas.",

    expertise: [
      "Oil & Gas",
      "Power Sector",
      "Petroleum Licensing",
      "Storage & Sale Licensing",
      "Petrol Station Contracts",
      "Oil & Gas Concessions",
      "Energy Transactions",
    ],

    icon: "zap",

    /*
     * No individual attorney in the supplied attorneys.ts currently
     * lists Energy / Oil & Gas as a specialization.
     */
    lawyers: [],
  },

  /* =========================================================
     09 — MINING LAWS
  ========================================================= */

  {
    id: "mining-laws",
    title: "Mining Laws",

    shortDescription:
      "Advice on mining concessions, licensing regimes and commercial mining agreements.",

    fullDescription:
      "The firm has advised and assisted clients in reviewing mining concession and licensing regimes existing in Pakistan, including relevant federal and provincial legislation. The firm advises clients on matters including obtaining mining licenses, concession agreements, joint operating agreements and implementation agreements.",

    expertise: [
      "Mining Concessions",
      "Mining Licensing",
      "Regulatory Regimes",
      "Concession Agreements",
      "Joint Operating Agreements",
      "Implementation Agreements",
    ],

    icon: "pickaxe",

    lawyers: [],
  },

  /* =========================================================
     10 — PATENT & DESIGN LAW
  ========================================================= */

  {
    id: "patent-design-law",
    title: "Patent & Design Law",

    shortDescription:
      "Protection, prosecution and enforcement of patents, designs and technology rights.",

    fullDescription:
      "Today’s fast-paced, high-tech environment demands that business owners pay special attention to obtaining and protecting rights to their patents and technology. The firm’s services include patent and design filing and prosecution, patent infringement litigation and counselling, opinions on patent validity, infringement, enforceability and right-to-practice, Patent Office interferences, examinations and oppositions, and disputes involving technologies including electronics, telecommunications, mechanical, biotechnology, pharmaceutical and chemical technologies.",

    expertise: [
      "Patent Filing & Prosecution",
      "Industrial Designs",
      "Patent Infringement",
      "Patent Validity",
      "Patent Enforcement",
      "Patent Office Proceedings",
      "Technology Disputes",
    ],

    icon: "lightbulb",

    lawyers: [
      "hasan-irfan-khan",
      "maria-farrukh-khan",
      "muhammad-talal-farrukh-irfan-khan",
      "syed-muhammad-bilal-ahsan",
      "mirza-saqib-asghar",
      "khawaja-shoaib-mansoor",
      "mudassar-hassan",
      "barrister-mamoon-sattar",
      "imran-ali",
      "nida-izhar",
      "tayyaba-jawad-syed",
      "noor-ul-ain",
      "zulfiqar-ali",
      "ghana-sajid",
    ],
  },

  /* =========================================================
     11 — PRIVATIZATION
  ========================================================= */

  {
    id: "privatization",
    title: "Privatization",

    shortDescription:
      "Advice to local and foreign clients participating in privatization transactions in Pakistan.",

    fullDescription:
      "The firm offers advice to local as well as foreign clients intending to participate in the privatization of state-owned oil, gas and telecommunication companies in Pakistan. The firm also counsels clients in conducting due diligence, obtaining governmental consents, arranging repatriation of funds, reviewing bidding documents, ensuring compliance with the applicable local legal regime and representing clients before the Privatization Commission.",

    expertise: [
      "Privatization Transactions",
      "Due Diligence",
      "Government Consents",
      "Repatriation of Funds",
      "Bidding Documents",
      "Regulatory Compliance",
      "Privatization Commission",
    ],

    icon: "briefcase-business",

    lawyers: [],
  },

  /* =========================================================
     12 — REAL ESTATE
  ========================================================= */

  {
    id: "real-estate",
    title: "Real Estate",

    shortDescription:
      "Legal assistance for commercial and residential property transactions and development matters.",

    fullDescription:
      "The firm routinely advises clients regarding the sale and purchase of commercial and residential property and assists in negotiating, drafting, executing and registering documents required under the law. Our lawyers also verify title documents and claims to immovable property in order to protect clients from fraudulent sale agreements. The firm also advises clients on constituting and operating housing societies while taking into account relevant national and international regulatory regimes.",

    expertise: [
      "Sale & Purchase of Property",
      "Property Documentation",
      "Title Verification",
      "Document Registration",
      "Commercial Property",
      "Residential Property",
      "Housing Societies",
    ],

    icon: "building",

    lawyers: [
      "barrister-mamoon-sattar",
    ],
  },

  /* =========================================================
     13 — ENVIRONMENTAL & REGULATORY LAW
  ========================================================= */

  {
    id: "environmental-regulatory-law",
    title: "Environmental & Regulatory Law",

    shortDescription:
      "Advice on environmental standards, regulatory compliance and related proceedings.",

    fullDescription:
      "The spectrum of the firm’s environmental law practice is continuously expanding. The firm provides legal counsel regarding environmental standards, compliance with the existing regulatory regime and representation before the Environmental Tribunal.",

    expertise: [
      "Environmental Standards",
      "Environmental Compliance",
      "Regulatory Compliance",
      "Environmental Tribunal",
      "Environmental Advisory",
      "Bio-Safety Laws",
    ],

    icon: "leaf",

    lawyers: [
      "maria-farrukh-khan",
    ],
  },

  /* =========================================================
     14 — INTERNATIONAL TRADE & CROSS BORDER OPERATIONS
  ========================================================= */

  {
    id: "international-trade-cross-border",
    title: "International Trade & Cross Border Operations",

    shortDescription:
      "Legal advice for international business transactions and cross-border commercial operations.",

    fullDescription:
      "The firm provides advice to local as well as foreign clients with respect to international business and cross-border operations, including international sales and internet contracts, agency, licensing, distribution and franchising agreements for products and services, evaluation of local trade and commercial regimes for transactions between local and foreign clients, and advice on tax-related issues in international transactions.",

    expertise: [
      "International Business",
      "Cross-Border Transactions",
      "International Sales",
      "Agency Agreements",
      "Licensing",
      "Distribution Agreements",
      "Franchising",
      "International Trade",
    ],

    icon: "globe-2",

    lawyers: [
      "hasan-irfan-khan",
      "syed-muhammad-bilal-ahsan",
      "barrister-mamoon-sattar",
    ],
  },

  /* =========================================================
     15 — LITIGATION & ENFORCEMENT
  ========================================================= */

  {
    id: "litigation-enforcement",
    title: "Litigation & Enforcement",

    shortDescription:
      "Strategic representation before courts, tribunals and dispute resolution forums across Pakistan.",

    fullDescription:
      "The firm maintains an active litigation practice and has the resources and personnel to conduct litigation across Pakistan. Clients facing potential or actual litigation rely on the firm to develop strategies that are cost effective and efficient. Services include evaluating the risks, costs and benefits of commencing or defending litigation, exploring alternatives to litigation where appropriate, representing clients at all levels of the judicial hierarchy including Civil, Banking, High, Company and Supreme Courts, appearing before administrative tribunals and in arbitration and mediation proceedings, and handling disputes involving contracts, recovery matters, construction, real estate, intellectual property, constitutional petitions, taxation and administrative actions.",

    expertise: [
      "Commercial Litigation",
      "Civil Litigation",
      "Banking Litigation",
      "High Court Proceedings",
      "Supreme Court Proceedings",
      "Administrative Tribunals",
      "Recovery Matters",
      "Constitutional Petitions",
      "Enforcement Proceedings",
    ],

    icon: "gavel",

    lawyers: [
      "hasan-irfan-khan",
      "muhammad-talal-farrukh-irfan-khan",
      "khawaja-shoaib-mansoor",
      "tariq-bashir",
      "barrister-zaka-ullah-rana",
      "mah-noor",
    ],
  },

  /* =========================================================
     16 — MERGERS, ACQUISITIONS & JOINT VENTURES
  ========================================================= */

  {
    id: "mergers-acquisitions-joint-ventures",
    title: "Mergers, Acquisitions & Joint Ventures",

    shortDescription:
      "Legal counsel for acquisitions, divestitures, mergers, joint ventures and corporate restructuring.",

    fullDescription:
      "The firm advises clients in acquisitions or divestitures, mergers and joint ventures, assisting them in selecting business structures suited to their interests while taking into consideration pricing, tax, regulatory and liability issues. The firm also assists clients in reorganizing and restructuring individual and joint undertakings, preparing necessary documentation, handling sophisticated cross-border transactions, conducting due diligence investigations, assessing pending litigation, obtaining regulatory approvals, tax structuring and developing and negotiating purchase agreements.",

    expertise: [
      "Mergers & Acquisitions",
      "Joint Ventures",
      "Divestitures",
      "Corporate Restructuring",
      "Due Diligence",
      "Regulatory Approvals",
      "Purchase Agreements",
      "Cross-Border Transactions",
    ],

    icon: "handshake",

    lawyers: [
      "hasan-irfan-khan",
      "maria-farrukh-khan",
      "muhammad-talal-farrukh-irfan-khan",
      "syed-muhammad-bilal-ahsan",
      "dr-ali-mohsin-qazilbash",
      "ahmad-muzammil",
      "barrister-mamoon-sattar",
    ],
  },

  /* =========================================================
     17 — TAX LAW
  ========================================================= */

  {
    id: "tax-law",
    title: "Tax Law",

    shortDescription:
      "Tax advice relating to commercial transactions, investments and business structures.",

    fullDescription:
      "Tax implications are an important aspect in structuring commercial transactions. The firm advises clients on tax issues relating to commercial transactions including joint ventures, share purchase agreements and the purchase of businesses as running concerns. Our lawyers also advise foreign clients regarding tax implications connected with their investments in the local market.",

    expertise: [
      "Commercial Transaction Tax",
      "Joint Venture Tax",
      "Share Purchase Agreements",
      "Business Acquisitions",
      "Foreign Investment Tax",
      "Transaction Structuring",
    ],

    icon: "receipt-text",

    lawyers: [],
  },

  /* =========================================================
     18 — TELECOMMUNICATION
  ========================================================= */

  {
    id: "telecommunication",
    title: "Telecommunication",

    shortDescription:
      "Legal and commercial advice for businesses operating in the telecommunications sector.",

    fullDescription:
      "The firm offers advice to companies operating in the telecommunication sector. Its client base ranges from companies providing payphone services to companies operating wireless local loop networks. The firm has also been involved in documentation of financial instruments for raising capital for the telecommunication sector through equity and debt-based instruments.",

    expertise: [
      "Telecommunication Law",
      "Telecom Regulation",
      "Wireless Networks",
      "Commercial Documentation",
      "Telecom Transactions",
      "Equity Financing",
      "Debt Financing",
    ],

    icon: "radio-tower",

    lawyers: [
      "hasan-irfan-khan",
      "muhammad-talal-farrukh-irfan-khan",
      "syed-muhammad-bilal-ahsan",
      "dr-ali-mohsin-qazilbash",
      "khawaja-shoaib-mansoor",
      "tariq-bashir",
      "mudassar-hassan",
      "barrister-zaka-ullah-rana",
      "mah-noor",
      "nida-izhar",
    ],
  },

  /* =========================================================
     19 — TRADEMARK & COPYRIGHT
  ========================================================= */

  {
    id: "trademark-copyright",
    title: "Trademark & Copyright",

    shortDescription:
      "Protection, prosecution, management and enforcement of trademarks, copyright and brand rights.",

    fullDescription:
      "Brand identification can be one of the most important factors in a company’s growth and market visibility. The firm assists clients from brand selection and adoption through securing, protecting and maintaining rights in trademarks, company names, logos, slogans, packaging and other intellectual property. Services include trademark availability advice, filing and prosecution of trademark and copyright applications, prosecution and defence of infringement actions, anti-counterfeiting actions before Customs, Police and courts, intellectual property audits, market surveys, due diligence investigations, licensing and assignment agreements, international trademark programs, domain name registrations and Internet-related infringement matters.",

    expertise: [
      "Trademark Registration",
      "Copyright",
      "Brand Protection",
      "Trademark Prosecution",
      "Copyright Prosecution",
      "IP Infringement",
      "Anti-Counterfeiting",
      "Licensing & Assignment",
      "Domain Names",
    ],

    icon: "badge-check",

    lawyers: [
      "hasan-irfan-khan",
      "maria-farrukh-khan",
      "muhammad-talal-farrukh-irfan-khan",
      "syed-muhammad-bilal-ahsan",
      "mirza-saqib-asghar",
      "khawaja-shoaib-mansoor",
      "mudassar-hassan",
      "barrister-mamoon-sattar",
      "imran-ali",
      "nida-izhar",
      "tayyaba-jawad-syed",
      "noor-ul-ain",
      "zulfiqar-ali",
      "ghana-sajid",
    ],
  },
];

/* =========================================================
   HELPERS
========================================================= */

/**
 * Find one practice area by its ID.
 *
 * Example:
 * getPracticeAreaById("competition-law")
 */
export function getPracticeAreaById(id: string) {
  return practiceAreas.find((area) => area.id === id);
}

/**
 * Get the attorney IDs associated with a practice.
 *
 * Example:
 * getLawyerIdsByPractice("competition-law")
 */
export function getLawyerIdsByPractice(practiceId: string): string[] {
  const practice = getPracticeAreaById(practiceId);

  return practice?.lawyers ?? [];
}