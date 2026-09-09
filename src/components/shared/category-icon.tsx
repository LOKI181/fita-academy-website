import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Languages,
  Lock,
  Megaphone,
  PenTool,
  ShieldCheck,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  brain: BrainCircuit,
  cloud: Cloud,
  shield: ShieldCheck,
  pen: PenTool,
  lock: Lock,
  megaphone: Megaphone,
  languages: Languages,
};

export function CategoryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Code2;
  return <Icon className={className} aria-hidden />;
}