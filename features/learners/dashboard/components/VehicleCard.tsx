"use client";

import { ArrowUpRight, Car } from "lucide-react";
import Link from "next/link";
import type { VehicleSummary } from "../types/types";

interface VehicleCardProps {
  vehicle: VehicleSummary | null;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <section className="relative flex h-full flex-col overflow-hidden px-6 py-7 sm:px-7">
      {/* ===================== STATIC BACKGROUND ===================== */}
      {/* Strong controlled green only in top-right (No pulse animation, transparent base) */}
      <div className="absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-emerald-100/80 blur-[90px] dark:bg-emerald-400/30" />
      <div className="absolute right-0 top-0 h-full w-[60%] bg-gradient-to-l from-emerald-100/50 via-transparent to-transparent dark:from-emerald-500/15" />

      {/* Soft ambient light from top-right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent dark:from-emerald-400/20" />

      {/* ===================== STATIC ROAD LINES ===================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 dark:opacity-[0.15]">
        {/* Left perspective line */}
        <div className="absolute bottom-0 left-[22%] h-[85%] w-[1px] origin-bottom -rotate-[22deg] bg-gradient-to-t from-emerald-400 to-transparent dark:from-emerald-300/80" />
        
        {/* Right perspective line */}
        <div className="absolute bottom-0 right-[22%] h-[85%] w-[1px] origin-bottom rotate-[22deg] bg-gradient-to-t from-emerald-400 to-transparent dark:from-emerald-300/80" />
      </div>

      {/* ===================== CONTENT ===================== */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <p className="text-[13px] font-medium text-emerald-700 dark:text-emerald-400">
            Vehicle
          </p>
        </div>

        {vehicle ? (
          <div className="mt-6 flex flex-1 flex-col">
            {/* Vehicle Name */}
            <p className="truncate text-[18px] font-bold tracking-tight text-neutral-900 dark:text-white">
              {vehicle.name}
            </p>

            {/* Badges / Details */}
            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              <span className="flex items-center rounded-lg bg-emerald-100/80 px-2.5 py-1 text-[12px] font-semibold text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300">
                {vehicle.category}
              </span>
              <span className="flex items-center rounded-lg border border-neutral-200/60 bg-neutral-50/50 px-2.5 py-1 text-[12px] font-medium text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-white/60">
                {vehicle.transmission}
              </span>
            </div>

            {/* Icon visual block to match Instructor visual weight */}
            <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5 dark:border-white/[0.06]">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/15 bg-emerald-50 dark:border-emerald-400/10 dark:bg-emerald-400/5">
                <Car className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-neutral-400 dark:text-white/30">
                  Assigned vehicle
                </p>
                <p className="mt-0.5 text-[13px] font-medium text-neutral-700 dark:text-white/70">
                  Ready for your lesson
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex flex-1 items-start">
            <p className="text-[15px] text-neutral-500 dark:text-white/50">
              No vehicle assigned yet.
            </p>
          </div>
        )}

        {/* ===================== FOOTER ===================== */}
        <Link
          href="/learner/vehicle"
          className="
            mt-auto
            flex
            w-fit
            items-center
            gap-1
            pt-5
            text-[13px]
            font-medium
            text-emerald-700
            outline-none
            transition-all
            hover:gap-1.5
            hover:text-emerald-800
            focus-visible:ring-2
            focus-visible:ring-emerald-600
            focus-visible:ring-offset-2
            dark:text-emerald-400
            dark:hover:text-emerald-300
            dark:focus-visible:ring-offset-[#090b0a]
          "
        >
          View details
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}