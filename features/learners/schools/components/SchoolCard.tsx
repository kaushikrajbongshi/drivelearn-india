"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

import type { DrivingSchool } from "../types/school";

interface SchoolCardProps {
  school: DrivingSchool;
  onSelect: (school: DrivingSchool) => void;
}

export default function SchoolCard({
  school,
  onSelect,
}: SchoolCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(school)}
      className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 text-left outline-none transition-all duration-300 hover:border-neutral-300 focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-white/10 dark:bg-neutral-900 dark:hover:border-white/20"
    >
      {/* Background image */}
      <Image
        src={school.image}
        alt={school.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Very subtle image overlay */}
      <div className="absolute inset-0 bg-black/[0.03] dark:bg-black/[0.08]" />

      {/* Distance */}
      <div className="absolute right-3 top-3 z-10">
        <span className="flex items-center gap-1 rounded-full bg-black/25 px-2 py-1 text-[10px] font-light text-white backdrop-blur-sm">
          <MapPin className="h-3 w-3 shrink-0" />

          <span className="truncate">
            {school.address.area}, {school.address.city}
          </span>

          <span className="text-white/50">·</span>

          <span className="shrink-0">
            {school.distance} km
          </span>
        </span>
      </div>

      {/* =========================================================
          BOTTOM GRADIENT
          Starts around 55% → smoothly becomes solid at bottom
          ========================================================= */}
      <div
        className="
          absolute inset-x-0 bottom-0 h-[52%]
          bg-gradient-to-t
          from-white
          via-white/90
          via-[55%]
          to-transparent
          dark:from-black
          dark:via-black/90
          dark:to-transparent
        "
      />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-16 sm:px-6 sm:pb-2">
        <div className="ml-auto max-w-[90%] text-right">
          {/* School name */}
          <h3 className="truncate text-xl font-semibold tracking-tight text-neutral-950 sm:text-lg dark:text-white">
            {school.name}
          </h3>



          {/* Price */}
          <p className="mt-0 text-base font-semibold text-emerald-600 sm:text-sm dark:text-emerald-400">
            From ₹{school.startingPrice.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </button>
  );
}