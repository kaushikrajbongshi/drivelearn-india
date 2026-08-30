"use client";

import {
  BookOpen,
  CarFront,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import type { DrivingSchool } from "../../types/school";

interface SchoolDetailsStatsProps {
  school: DrivingSchool;
}

export default function SchoolDetailsStats({
  school,
}: SchoolDetailsStatsProps) {
  const experience =
    school.instructors.length > 0
      ? Math.max(...school.instructors.map((i) => i.experience))
      : 0;

  return (
    <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      <StatItem
        icon={<UsersRound />}
        value={`${school.instructors.length}`}
        label="Instructors"
      />
      <StatItem
        icon={<CarFront />}
        value={`${school.vehicles.length}`}
        label="Vehicles"
      />
      <StatItem
        icon={<BookOpen />}
        value={`${school.courses.length}`}
        label="Courses"
      />
      <StatItem
        icon={<ShieldCheck />}
        value={`${experience}+`}
        label="Years Experience"
      />
    </section>
  );
}

function StatItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-4 transition-all duration-200 hover:border-[#E51B23]/30 hover:shadow-sm dark:border-zinc-800 dark:bg-[#151515] dark:hover:border-[#E51B23]/30">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E51B23]/10 text-[#E51B23] transition-transform duration-200 group-hover:scale-105">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-lg font-bold leading-tight">{value}</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
      </div>
    </div>
  );
}