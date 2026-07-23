import {
  Search,
  CalendarDays,
  CarFront,
  BadgeCheck,
} from "lucide-react";

import type { Step } from "./step-types";

export const steps: Step[] = [
  {
    id: 1,
    title: "Search Schools",
    description:
      "Find verified driving schools near your location using smart search and filters.",
    icon: Search,
  },
  {
    id: 2,
    title: "Book Your Course",
    description:
      "Choose your preferred course package, instructor, and class schedule.",
    icon: CalendarDays,
  },
  {
    id: 3,
    title: "Start Learning",
    description:
      "Attend practical and theoretical lessons while tracking your progress.",
    icon: CarFront,
  },
  {
    id: 4,
    title: "Get Certified",
    description:
      "Complete your course successfully and receive your driving certification.",
    icon: BadgeCheck,
  },
];