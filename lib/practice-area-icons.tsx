import {
  Scale,
  Plane,
  Landmark,
  ChartNoAxesCombined,
  Building2,
  MonitorSmartphone,
  Vote,
  Zap,
  Pickaxe,
  Lightbulb,
  BriefcaseBusiness,
  Building,
  Leaf,
  Globe2,
  Gavel,
  Handshake,
  ReceiptText,
  RadioTower,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

// Maps the `icon` string on each PracticeArea entry to its lucide component.
// Keeping this as a lookup (rather than importing icons ad hoc in each
// component) means the data file stays framework-agnostic and any component
// that needs the icon can resolve it the same way.
export const practiceAreaIcons: Record<string, LucideIcon> = {
  scale: Scale,
  plane: Plane,
  landmark: Landmark,
  "chart-no-axes-combined": ChartNoAxesCombined,
  "building-2": Building2,
  "monitor-smartphone": MonitorSmartphone,
  vote: Vote,
  zap: Zap,
  pickaxe: Pickaxe,
  lightbulb: Lightbulb,
  "briefcase-business": BriefcaseBusiness,
  building: Building,
  leaf: Leaf,
  "globe-2": Globe2,
  gavel: Gavel,
  handshake: Handshake,
  "receipt-text": ReceiptText,
  "radio-tower": RadioTower,
  "badge-check": BadgeCheck,
};

export function getPracticeAreaIcon(icon: string): LucideIcon {
  return practiceAreaIcons[icon] ?? Scale;
}