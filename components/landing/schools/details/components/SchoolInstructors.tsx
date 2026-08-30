"use client";

import { BadgeCheck, Star, UserRound } from "lucide-react";

import type { DrivingSchool } from "../../types/school";

interface SchoolInstructorsProps {
  school: DrivingSchool;
}

export default function SchoolInstructors({
  school,
}: SchoolInstructorsProps) {
  return (
    <section>
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold sm:text-2xl">
          Our Instructors
        </h2>
      </div>

      {/* Instructor Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {school.instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="
              rounded-2xl
              border border-zinc-200
              bg-white
              p-5
              transition-colors
              hover:border-[#E51B23]/30
              dark:border-zinc-800
              dark:bg-[#151515]
              dark:hover:border-[#E51B23]/30
            "
          >
            {/* Profile */}
            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-14 w-14 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#E51B23]/10
                  text-[#E51B23]
                "
              >
                <UserRound className="h-7 w-7" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="truncate text-base font-semibold">
                    {instructor.name}
                  </h3>

                  {school.verified && (
                    <BadgeCheck className="h-4 w-4 shrink-0 text-[#E51B23]" />
                  )}
                </div>

                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Driving Instructor
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="mt-5 flex items-center justify-between border-t border-zinc-200 pt-4 dark:border-zinc-800">
              <div>
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  Experience
                </p>

                <p className="mt-1 text-sm font-semibold">
                  {instructor.experience} years
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  Rating
                </p>

                <div className="mt-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-[#E51B23] text-[#E51B23]" />

                  <span className="text-sm font-semibold">
                    {instructor.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}