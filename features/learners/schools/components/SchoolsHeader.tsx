"use client";

import { MapPin, Search, SlidersHorizontal } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SchoolsHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  location: string;
  onFilterClick?: () => void;
}

export default function SchoolsHeader({
  search,
  onSearchChange,
  location,
  onFilterClick,
}: SchoolsHeaderProps) {
  return (
    <>
      {/* Heading */}
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
          Driving Schools
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
          Find the right driving school
        </h1>
      </div>

      {/* Sticky Search Bar */}
      <div
        className="
    sticky
    top-16
    z-30
    -mx-4

    border-neutral-200/70
    bg-white/90
    px-4
    py-1
    backdrop-blur-xl
    sm:-mx-6
    sm:px-6
    lg:-mx-8
    lg:px-8
    dark:border-white/10
    dark:bg-neutral-950/90
    "
      >
        <div className="flex items-center gap-2 sm:justify-end sm:gap-3">
          {/* Search */}
          <div className="relative min-w-0 flex-1 sm:w-72 sm:flex-none lg:w-80">
            <Search
              className="
                                pointer-events-none
                                absolute
                                left-4
                                top-1/2
                                h-4
                                w-4
                                -translate-y-1/2
                                text-neutral-400
                                dark:text-zinc-500
                            "
            />

            <Input
              value={search}
              onChange={(event) =>
                onSearchChange(event.target.value)
              }
              placeholder="Search by school or area"
              className="
                                h-11
                                rounded-full
                                border-neutral-200
                                bg-transparent
                                pl-11
                                pr-5
                                shadow-none
                                placeholder:text-neutral-400
                                focus-visible:border-emerald-500
                                focus-visible:ring-0
                                dark:border-white/10
                                dark:text-white
                                dark:placeholder:text-zinc-600
                            "
            />
          </div>

          {/* Location */}
          <Button
            type="button"
            variant="outline"
            className="
                            h-11
                            shrink-0
                            rounded-full
                            border-neutral-200
                            bg-transparent
                            px-3
                            text-sm
                            font-medium
                            text-neutral-700
                            shadow-none
                            hover:bg-neutral-50
                            dark:border-white/10
                            dark:text-zinc-300
                            dark:hover:bg-white/[0.04]
                            sm:px-5
                        "
          >
            <MapPin className="h-4 w-4 text-emerald-500 sm:mr-2" />

            <span className="hidden max-w-[160px] truncate sm:inline">
              {location}
            </span>
          </Button>

          {/* Filter */}
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={onFilterClick}
            className="
                            h-11
                            w-11
                            shrink-0
                            rounded-full
                            border-neutral-200
                            bg-transparent
                            shadow-none
                            hover:bg-neutral-50
                            dark:border-white/10
                            dark:hover:bg-white/[0.04]
                        "
            aria-label="Open filters"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}