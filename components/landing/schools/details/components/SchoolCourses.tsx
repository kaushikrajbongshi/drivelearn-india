"use client";

import Image from "next/image";
import { ArrowRight, CarFront, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DrivingSchool } from "../../types/school";
import { useRouter } from "next/navigation";

interface SchoolCoursesProps {
  school: DrivingSchool;
}

export default function SchoolCourses({ school }: SchoolCoursesProps) {
  const router = useRouter()
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-[#151515] sm:p-7">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold sm:text-2xl">Courses Offered</h2>
        <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
          Choose from the driving courses available at {school.name}.
        </p>
      </div>

      {/* Courses */}
      <div className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
        {school.courses.map((course, index) => (
          <div
            key={course.id}
            className="group flex flex-col gap-5 py-6 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
          >
            {/* Course image */}
            <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-32">
              <Image
                src={
                  index % 2 === 0
                    ? "/school/car-school.webp"
                    : "/school/polish-driving-school-sign.webp"
                }
                alt={course.name}
                fill
                sizes="128px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Course info */}
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-bold sm:text-lg">{course.name}</h3>
              <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                {course.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  <Clock3 className="h-4 w-4 text-[#E51B23]" />
                  {course.duration}
                </span>
                <span
                  className="
    inline-flex items-center gap-1.5
    rounded-full
    bg-[#E51B23]/10
    px-2.5 py-1
    text-xs font-medium
    text-[#E51B23]
  "
                >
                  <CarFront className="h-3.5 w-3.5" />
                  {course.vehicleType}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E51B23]/10 px-2.5 py-1 text-xs font-medium text-[#E51B23]">
                  <CarFront className="h-3.5 w-3.5" />
                  {course.transmission}
                </span>
              </div>
            </div>

            {/* Price + action */}
            <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
              <div>

                <p className="mt-0.5 text-lg font-bold text-[#E51B23]">
                  ₹{course.price.toLocaleString("en-IN")}
                </p>
              </div>
              <Button
                type="button"
                onClick={() => router.push("/schools/course/payment")}
                className="h-11 gap-2 rounded-xl bg-[#E51B23] px-6 text-sm font-semibold text-white shadow-lg shadow-[#E51B23]/20 transition-all hover:bg-[#c4161c] hover:shadow-xl hover:shadow-[#E51B23]/30"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

