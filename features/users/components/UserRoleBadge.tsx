"use client";

import { Badge } from "@/components/ui/badge";

import {
  dashboardIcons,
  type DashboardIcon,
} from "@/config/dashboard-icons";

import type { UserRole } from "@/features/users/types/user";

interface UserRoleBadgeProps {
  role: UserRole;
}

const roleConfig: Record<
  UserRole,
  {
    label: string;
    icon: DashboardIcon;
  }
> = {
  super_admin: {
    label: "Super Admin",
    icon: "shieldCheck",
  },
  owner: {
    label: "Owner",
    icon: "building",
  },
  instructor: {
    label: "Instructor",
    icon: "userPlus",
  },
  learner: {
    label: "Learner",
    icon: "learners",
  },
};

export default function UserRoleBadge({
  role,
}: UserRoleBadgeProps) {
  const config = roleConfig[role];
  const Icon = dashboardIcons[config.icon];

  return (
    <Badge
      variant="outline"
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
    >
      <Icon className="size-3.5" />
      <span>{config.label}</span>
    </Badge>
  );
}