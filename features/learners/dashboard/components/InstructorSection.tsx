"use client";

import {
  ArrowRight,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { dashboardData } from "../data/dashboardData";

export default function InstructorSection() {
  const { instructor } = dashboardData.nextLesson;

  const initials = instructor.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="min-w-0 rounded-3xl border border-neutral-200 bg-transparent p-5 dark:border-white/10 sm:p-7">
      {/* Header */}
      <div className="flex min-w-0 items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
            Instructor
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            Your instructor
          </h2>
        </div>

        {/* Desktop profile link */}
        <Button
          variant="ghost"
          className="group hidden h-auto shrink-0 rounded-none px-0 text-base font-medium text-neutral-900 hover:bg-transparent hover:text-emerald-600 sm:flex dark:text-white dark:hover:bg-transparent dark:hover:text-emerald-400"
        >
          View Profile
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Instructor information */}
      <div className="mt-8 flex min-w-0 items-center gap-4 sm:gap-5">
        {/* Avatar */}
        <Avatar className="h-16 w-16 shrink-0 border-2 border-neutral-300 dark:border-white/20">
          <AvatarFallback className="bg-transparent text-xl font-medium text-neutral-500 dark:text-zinc-400">
            {initials}
          </AvatarFallback>
        </Avatar>

        {/* Details */}
        <div className="min-w-0">
          <h3 className="truncate text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            {instructor.name}
          </h3>

          <p className="mt-1 text-sm text-neutral-500 dark:text-zinc-400 sm:text-base">
            Driving Instructor
          </p>

          {/* Rating */}
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />

            <span className="text-sm font-medium text-neutral-900 dark:text-white">
              {instructor.rating}
            </span>

            <span className="text-sm text-neutral-400 dark:text-zinc-500">
              ·
            </span>

            <span className="text-sm text-neutral-500 dark:text-zinc-400">
              {instructor.lessonsCompleted}+ lessons
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-neutral-200 dark:bg-white/10 sm:my-5" />

      {/* Actions */}
      <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
        {/* Call */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-12 w-12 shrink-0 rounded-full border-neutral-200 bg-transparent shadow-none hover:bg-neutral-50 sm:h-14 sm:w-14 dark:border-white/10 dark:hover:bg-white/[0.04]"
          aria-label={`Call ${instructor.name}`}
        >
          <Phone className="h-4 w-4 text-neutral-900 sm:h-5 sm:w-5 dark:text-white" />
        </Button>

        {/* Message */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-12 w-12 shrink-0 rounded-full border-neutral-200 bg-transparent shadow-none hover:bg-neutral-50 sm:h-14 sm:w-14 dark:border-white/10 dark:hover:bg-white/[0.04]"
          aria-label={`Message ${instructor.name}`}
        >
          <MessageCircle className="h-4 w-4 text-neutral-900 sm:h-5 sm:w-5 dark:text-white" />
        </Button>

        {/* View Profile */}
        <Button
          type="button"
          variant="outline"
          className="group h-12 min-w-0 flex-1 rounded-full border-neutral-200 bg-transparent px-3 text-sm font-medium text-neutral-900 shadow-none hover:bg-neutral-50 sm:h-14 sm:px-5 sm:text-base dark:border-white/10 dark:text-white dark:hover:bg-white/[0.04]"
        >
          <span className="truncate">View Profile</span>

          <ArrowRight className="ml-1.5 h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 sm:ml-2 sm:h-5 sm:w-5" />
        </Button>
      </div>

      {/* Mobile profile link */}
      <Button
        variant="ghost"
        className="group mt-5 flex w-full rounded-full text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 sm:hidden dark:text-zinc-400 dark:hover:bg-white/[0.05] dark:hover:text-white"
      >
        View Instructor Profile
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Button>
    </section>
  );
}