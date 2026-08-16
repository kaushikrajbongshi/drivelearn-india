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
    <section className="space-y-6">
      {/* Heading */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
          Driving Schools
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
          Find the right driving school
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500 dark:text-zinc-400 sm:text-base">
          Discover trusted driving schools near you and compare
          their courses, pricing, instructors and reviews.
        </p>
      </div>

      {/* Search + Location + Filter */}
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 dark:text-zinc-500" />

          <Input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by school or area"
            className="h-12 rounded-full border-neutral-200 bg-transparent pl-11 pr-5 shadow-none placeholder:text-neutral-400 focus-visible:border-emerald-500 focus-visible:ring-0 dark:border-white/10 dark:text-white dark:placeholder:text-zinc-600"
          />
        </div>

        {/* Location */}
        <Button
          type="button"
          variant="outline"
          className="h-12 shrink-0 rounded-full border-neutral-200 bg-transparent px-5 text-sm font-medium text-neutral-700 shadow-none hover:bg-neutral-50 dark:border-white/10 dark:text-zinc-300 dark:hover:bg-white/[0.04]"
        >
          <MapPin className="mr-2 h-4 w-4 text-emerald-500" />

          <span className="max-w-[160px] truncate">
            {location}
          </span>
        </Button>

        {/* Filter */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={onFilterClick}
          className="h-12 w-12 shrink-0 rounded-full border-neutral-200 bg-transparent shadow-none hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/[0.04]"
          aria-label="Open filters"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}