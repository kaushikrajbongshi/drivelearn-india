"use client";

import {
  ArrowRight,
  CarFront,
  Fuel,
  Gauge,
  Settings2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function VehicleSection() {
  return (
    <section className="border-t border-neutral-200/70 pt-8 dark:border-white/[0.08]">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Training Vehicle
          </p>

          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            Your assigned vehicle
          </h2>
        </div>

        <Button
          variant="ghost"
          className="group hidden rounded-full px-3 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 sm:flex dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
        >
          Vehicle Details
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      <div className="mt-6 border-y border-neutral-200/70 py-6 dark:border-white/[0.08]">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          {/* Vehicle identity */}
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-700 dark:bg-white/[0.06] dark:text-zinc-300">
              <CarFront className="h-7 w-7" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">
                  Hyundai i20
                </h3>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                  Assigned
                </span>
              </div>

              <p className="mt-1 text-sm text-neutral-500 dark:text-zinc-500">
                Registration: AS 01 AB 1234
              </p>
            </div>
          </div>

          {/* Vehicle details */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
            <div className="flex items-center gap-2.5">
              <Settings2 className="h-4 w-4 text-neutral-400 dark:text-zinc-500" />

              <div>
                <p className="text-[11px] text-neutral-400 dark:text-zinc-600">
                  Transmission
                </p>

                <p className="mt-0.5 text-sm font-medium text-neutral-800 dark:text-zinc-200">
                  Manual
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Gauge className="h-4 w-4 text-neutral-400 dark:text-zinc-500" />

              <div>
                <p className="text-[11px] text-neutral-400 dark:text-zinc-600">
                  Category
                </p>

                <p className="mt-0.5 text-sm font-medium text-neutral-800 dark:text-zinc-200">
                  LMV
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Fuel className="h-4 w-4 text-neutral-400 dark:text-zinc-500" />

              <div>
                <p className="text-[11px] text-neutral-400 dark:text-zinc-600">
                  Fuel
                </p>

                <p className="mt-0.5 text-sm font-medium text-neutral-800 dark:text-zinc-200">
                  Petrol
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile action */}
      <Button
        variant="ghost"
        className="group mt-4 w-full rounded-full text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 sm:hidden dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
      >
        Vehicle Details
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </section>
  );
}