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
    <section className="rounded-3xl border border-neutral-200 bg-transparent p-6 dark:border-white/10 sm:p-7">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
            Instructor
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            Your instructor
          </h2>
        </div>

        <Button
          variant="ghost"
          className="group h-auto rounded-none px-0 text-base font-medium text-neutral-900 hover:bg-transparent hover:text-emerald-600 dark:text-white dark:hover:bg-transparent dark:hover:text-emerald-400"
        >
          View Profile
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Instructor information */}
      <div className="mt-4 flex items-center gap-5">
        <Avatar className="h-16 w-16 shrink-0 border-2 border-neutral-300 dark:border-white/20">
          <AvatarFallback className="bg-transparent text-xl font-medium text-neutral-500 dark:text-zinc-400">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div>
          <div className="flex gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
              {instructor.name}
            </h3>
            <div className=" ml-15  flex items-center gap-2 ">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />

              <span className="text-base  font-medium text-neutral-900 dark:text-white">
                {instructor.rating}
              </span>

              <span className="text-base text-neutral-400 dark:text-zinc-500">
                ·
              </span>

              <span className="text-base text-neutral-500 dark:text-zinc-400">
                {instructor.lessonsCompleted}+ lessons
              </span>
            </div>

          </div>

          <p className="mt-1 text-base text-neutral-500 dark:text-zinc-400">
            Driving Instructor
          </p>

        </div>
      </div>

      {/* Divider */}
      <div className="my-9 h-px bg-neutral-200 dark:bg-white/10" />

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-14 w-14 shrink-0 rounded-full border-neutral-200 bg-transparent shadow-none hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/[0.04]"
          aria-label={`Call ${instructor.name}`}
        >
          <Phone className="h-5 w-5 text-neutral-900 dark:text-white" />
        </Button>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-14 w-14 shrink-0 rounded-full border-neutral-200 bg-transparent shadow-none hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/[0.04]"
          aria-label={`Message ${instructor.name}`}
        >
          <MessageCircle className="h-5 w-5 text-neutral-900 dark:text-white" />
        </Button>

        <Button
          type="button"
          variant="outline"
          className="group h-14 flex-1 rounded-full border-neutral-200 bg-transparent text-base font-medium text-neutral-900 shadow-none hover:bg-neutral-50 dark:border-white/10 dark:text-white dark:hover:bg-white/[0.04]"
        >
          View Profile
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}