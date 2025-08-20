import {
  BarChart3,
  Lightbulb,
  Smartphone,
  TrendingUp,
  Atom,
  Zap,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: BarChart3,
    title: "Analytics & Marketing",
    description:
      "Provide effective data analytics and marketing strategy solutions.",
  },
  {
    icon: Lightbulb,
    title: "AI Solutions Consulting",
    description:
      "Analyze needs, propose, and implement AI solutions tailored to your business.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Build modern mobile applications optimized for user experience.",
  },
  {
    icon: TrendingUp,
    title: "Custom AI Model Development",
    description: "Create bespoke AI models designed to meet specific needs.",
  },
  {
    icon: Atom,
    title: "AI Service Deployment",
    description: "Support deploying AI services into your existing systems.",
  },
  {
    icon: Zap,
    title: "AI Service Provision",
    description:
      "Deliver advanced AI services to optimize performance and business efficiency.",
  },
];
