export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  challenge: string;
  approach: string;
  outcome: string;
  value: string;
  duration: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "securities-fraud-defense",
    title: "Multi-Billion Dollar Securities Fraud Defense",
    category: "White-Collar Defense",
    client: "Fortune 500 Technology Corporation",
    challenge:
      "Our client faced a $2.3 billion securities fraud lawsuit brought by institutional investors alleging material misrepresentations in financial statements. The case threatened the company's reputation and market position, with potential criminal referrals looming.",
    approach:
      "We assembled a specialized team combining securities litigation experts and forensic accountants. Our strategy focused on demonstrating the adequacy of disclosures and the absence of scienter. We conducted a comprehensive internal investigation, prepared key executives for depositions, and developed expert testimony on industry accounting practices.",
    outcome:
      "After two years of intense litigation and a three-week trial, we secured a complete defense verdict. The jury found no material misrepresentation and no intent to deceive. Additionally, we successfully prevented any criminal referral.",
    value: "$2.3B claim defeated",
    duration: "24 months",
    tags: ["Securities Litigation", "Corporate Defense", "Trial Victory"],
  },
  {
    id: "international-arbitration-award",
    title: "Record-Breaking International Arbitration Award",
    category: "International Arbitration",
    client: "Energy Infrastructure Company",
    challenge:
      "Our client, an energy infrastructure developer, was embroiled in a complex dispute with a Middle Eastern government over a terminated $850 million power plant project. The case involved multiple contracts, political complications, and questions of sovereign immunity.",
    approach:
      "We pursued ICC arbitration seated in London, assembling a multilingual team with expertise in energy law and public international law. Our approach combined treaty analysis, quantum calculation, and strategic witness preparation. We retained world-class damages experts and navigated complex evidentiary challenges.",
    outcome:
      "We secured a $450 million arbitration award—one of the largest in the energy sector that year. The award covered both contract damages and treaty violations, with full enforcement achieved despite initial resistance.",
    value: "$450M awarded",
    duration: "36 months",
    tags: ["ICC Arbitration", "Energy Law", "International Disputes"],
  },
  {
    id: "merger-defense-ftc",
    title: "Successfully Defending $15B Merger Against FTC Challenge",
    category: "Antitrust",
    client: "Leading Healthcare Technology Company",
    challenge:
      "The FTC challenged our client's proposed $15 billion acquisition of a competitor, alleging the merger would substantially lessen competition in the healthcare IT market. The deal was critical to the client's strategic growth plans.",
    approach:
      "We developed a comprehensive economic and legal defense demonstrating the pro-competitive effects of the merger. Our team worked with leading antitrust economists to define relevant markets, analyze competitive dynamics, and model post-merger efficiencies. We also negotiated structural remedies to address the FTC's concerns.",
    outcome:
      "After extensive briefing and a federal court hearing, the court denied the FTC's motion for a preliminary injunction. The FTC subsequently declined to pursue the case further, allowing the merger to close successfully.",
    value: "$15B merger approved",
    duration: "18 months",
    tags: ["Antitrust", "Merger Control", "FTC Defense"],
  },
  {
    id: "data-breach-defense",
    title: "Landmark Data Breach Defense",
    category: "Technology & Cybersecurity",
    client: "Global E-Commerce Platform",
    challenge:
      "Our client suffered a significant data breach affecting 12 million users, triggering multiple class action lawsuits, regulatory investigations by the FTC and state attorneys general, and intense media scrutiny. The litigation exposure exceeded $500 million.",
    approach:
      "We coordinated a multi-front defense strategy addressing both litigation and regulatory matters. Our cybersecurity experts worked with the client to implement enhanced security measures. In litigation, we challenged standing and damages theories while negotiating favorable settlement terms. With regulators, we demonstrated the adequacy of the incident response and committed to comprehensive remedial measures.",
    outcome:
      "We successfully consolidated and settled all class actions for $18 million—far below potential exposure. Regulatory investigations concluded with no fines imposed. Our client emerged with an enhanced security posture and preserved reputation.",
    value: "$482M in exposure avoided",
    duration: "22 months",
    tags: ["Data Privacy", "Class Action Defense", "Cyber Litigation"],
  },
  {
    id: "supreme-court-victory",
    title: "Supreme Court Victory Establishing New Contract Precedent",
    category: "Appellate",
    client: "Manufacturing Conglomerate",
    challenge:
      "An adverse appellate decision threatened to upend long-standing contract interpretation principles affecting billions in commercial relationships. The case involved the enforceability of limitation of liability clauses in B2B contracts.",
    approach:
      "We petitioned for certiorari, emphasizing a circuit split and the national importance of the question. After the Supreme Court granted review, we prepared exhaustive briefings and coordinated amicus support from business organizations. Our oral argument focused on the text, original understanding, and policy implications.",
    outcome:
      "The Supreme Court reversed the lower court in an 8-1 decision, adopting our interpretation of contract limitation clauses. The ruling has been cited in hundreds of subsequent cases and provides clarity for commercial contracting nationwide.",
    value: "Precedent-setting victory",
    duration: "30 months",
    tags: ["Supreme Court", "Appellate", "Contract Law"],
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Justice Law Firm provided exceptional strategic guidance during our most challenging litigation. Their team's expertise and dedication were instrumental in achieving a favorable outcome.",
    author: "Robert Chen",
    position: "General Counsel",
    company: "Global Tech Industries",
  },
  {
    id: "2",
    quote:
      "When facing a complex international arbitration, we needed the best. Justice Law Firm exceeded our expectations, delivering a sophisticated strategy that resulted in a significant award.",
    author: "Maria Gonzalez",
    position: "CFO",
    company: "Energy Dynamics Corp",
  },
  {
    id: "3",
    quote:
      "The regulatory expertise at Justice Law Firm is unparalleled. They navigated us through a DOJ investigation with skill and achieved an outcome we didn't think possible.",
    author: "David Morrison",
    position: "CEO",
    company: "Financial Services Group",
  },
  {
    id: "4",
    quote:
      "Their antitrust team successfully defended our merger against federal scrutiny. The economic analysis and legal strategy were world-class.",
    author: "Sarah Williams",
    position: "Chief Legal Officer",
    company: "HealthTech Solutions",
  },
];

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
}

export const awards: Award[] = [
  {
    id: "1",
    title: "Litigation Department of the Year",
    organization: "Chambers USA",
    year: "2024",
  },
  {
    id: "2",
    title: "Best International Arbitration Practice",
    organization: "Global Arbitration Review",
    year: "2024",
  },
  {
    id: "3",
    title: "Top White-Collar Defense Firm",
    organization: "Law360",
    year: "2023",
  },
  {
    id: "4",
    title: "Antitrust Firm of the Year",
    organization: "Legal 500",
    year: "2023",
  },
  {
    id: "5",
    title: "Best Regulatory Practice",
    organization: "Chambers Global",
    year: "2024",
  },
  {
    id: "6",
    title: "Technology Law Firm of the Year",
    organization: "Legal Tech Awards",
    year: "2023",
  },
];
