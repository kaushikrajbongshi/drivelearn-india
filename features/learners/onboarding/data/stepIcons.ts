import {
  Mail,
  PhoneCall,
  User,
  Building2,
  BookOpen,
  CreditCard,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

// Indexed by position, matching the fixed step order:
// 0 Email · 1 Phone · 2 Profile · 3 School · 4 Package · 5 Payment · 6 Welcome
// Shared by SidebarSteps.tsx (desktop) and MobileStepHeader.tsx (mobile)
// so the two views can never drift out of sync with each other.
export const stepIcons: LucideIcon[] = [
  Mail,
  PhoneCall,
  User,
  Building2,
  BookOpen,
  CreditCard,
  PartyPopper,
];