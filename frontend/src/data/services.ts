import {
  Crown,
  Sparkles,
  Flower2,
  Droplets,
  Waves,
  Brush,
  Scissors,
  Palette,
  ShieldCheck,
  Feather,
  Eye,
  Hand,
  Footprints,
  Gem,
  Leaf,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory = "Makeup" | "Hair" | "Skin" | "Nails" | "Grooming";

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  icon: LucideIcon;
  available: boolean;
}

// Set available: false to hide a service from the website.
export const SERVICES: Service[] = [
  { id: "bridal-makeup", name: "Bridal Makeup", category: "Makeup", icon: Crown, available: true,
    description: "Complete bridal looks, from elegant traditional styles to modern HD finishes for your big day." },
  { id: "party-makeup", name: "Party Makeup", category: "Makeup", icon: Sparkles, available: true,
    description: "Flawless party and occasion makeup that photographs beautifully and lasts all evening." },
  { id: "facial", name: "Facial", category: "Skin", icon: Flower2, available: true,
    description: "Deep-cleansing and glow facials tailored to your skin type for a fresh, radiant look." },
  { id: "cleanup", name: "Cleanup", category: "Skin", icon: Droplets, available: true,
    description: "A quick, refreshing cleanup that removes impurities and revives tired skin." },
  { id: "hair-spa", name: "Hair Spa", category: "Hair", icon: Waves, available: true,
    description: "Relaxing hair spa rituals that nourish the scalp and restore softness and shine." },
  { id: "hair-styling", name: "Hair Styling", category: "Hair", icon: Brush, available: true,
    description: "Blow-drys, curls, braids and occasion styling finished by experienced hands." },
  { id: "hair-cut", name: "Hair Cut", category: "Hair", icon: Scissors, available: true,
    description: "Precision cuts and trims shaped to suit your face and lifestyle." },
  { id: "hair-color", name: "Hair Color", category: "Hair", icon: Palette, available: true,
    description: "Global colour, highlights and balayage using quality, hair-friendly products." },
  { id: "hair-treatment", name: "Hair Treatment", category: "Hair", icon: ShieldCheck, available: true,
    description: "Repair and smoothening treatments for frizz, damage and dryness." },
  { id: "waxing", name: "Waxing", category: "Grooming", icon: Feather, available: true,
    description: "Gentle full-body waxing for smooth skin, done with care and hygiene." },
  { id: "threading", name: "Threading", category: "Grooming", icon: Eye, available: true,
    description: "Precise eyebrow shaping and facial threading for a clean, defined look." },
  { id: "manicure", name: "Manicure", category: "Nails", icon: Hand, available: true,
    description: "Soothing manicures that care for your hands, cuticles and nails." },
  { id: "pedicure", name: "Pedicure", category: "Nails", icon: Footprints, available: true,
    description: "Relaxing pedicures that soften, refresh and pamper tired feet." },
  { id: "nail-art", name: "Nail Art", category: "Nails", icon: Gem, available: true,
    description: "Trendy nail art, gel polish and creative designs for every occasion." },
  { id: "skin-care", name: "Skin Care", category: "Skin", icon: Leaf, available: true,
    description: "Personalised skin care treatments for a healthy, natural glow." },
];

export const SERVICE_CATEGORIES: Array<"All" | ServiceCategory> = [
  "All",
  "Makeup",
  "Hair",
  "Skin",
  "Nails",
  "Grooming",
];
