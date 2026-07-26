import {
  Activity,
  ArrowLeftRight,
  ArrowRight,
  Building2,
  CirclePlus,
  CreditCard,
  DollarSign,
  FileText,
  GraduationCap,
  ShieldCheck,
  UserPlus,
  Users,
  MoreHorizontal,
  ShieldBan,
} from "lucide-react";

export const dashboardIcons = {
  users: Users,
  schools: Building2,
  learners: GraduationCap,
  revenue: DollarSign,

  activity: Activity,
  userPlus: UserPlus,
  creditCard: CreditCard,
  shieldCheck: ShieldCheck,
  shieldBan: ShieldBan,

  add: CirclePlus,
  report: FileText,
  manageUsers: Users,
  verify: ShieldCheck,
  building: Building2,
  arrowRight: ArrowRight,
  transfer: ArrowLeftRight,
  more: MoreHorizontal,
} as const;

export type DashboardIcon = keyof typeof dashboardIcons;
