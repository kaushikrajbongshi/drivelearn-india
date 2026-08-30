"use client";

import {
  CheckCircle2,
  MapPin,
  Navigation,
  Phone,
  Star,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import type { DrivingSchool } from "../types/school";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

interface SchoolDetailsDrawerProps {
  school: DrivingSchool | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEnroll?: (schoolId: string) => void;
}

export default function SchoolDetailsDrawer({
  school,
  open,
  onOpenChange,
  onEnroll,
}: SchoolDetailsDrawerProps) {
  if (!school) {
    return null;
  }

  const router = useRouter()
  
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${school.address.line}, ${school.address.area}, ${school.address.city}, ${school.address.state}, ${school.address.pinCode}`
  )}`;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="
  flex
  h-[100dvh]
  w-[calc(100%-3rem)]
  max-w-3xl
  flex-col
  gap-0
  overflow-hidden
  border-l
  border-neutral-200/70
  bg-white/95
  p-0
  shadow-2xl
  backdrop-blur-xl
  dark:border-white/10
  dark:bg-neutral-950/95

  sm:w-full
"
      >
        {/* Header */}
        <SheetHeader
          className="
                        shrink-0
                        border-b
                        border-neutral-200/70
                        px-6
                        py-5
                        dark:border-white/10
                    "
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <SheetTitle className="text-xl font-semibold text-neutral-950 dark:text-white">
                School Details
              </SheetTitle>

              <SheetDescription className="mt-1 text-sm text-neutral-500 dark:text-zinc-400">
                View school information
              </SheetDescription>
            </div>


          </div>
        </SheetHeader>

        {/* Scrollable content */}
        <div
          className="
                        min-h-0
                        flex-1
                        overflow-y-auto
                        px-5
                        py-5

                        scrollbar-thin
                        scrollbar-track-transparent
                        scrollbar-thumb-neutral-300
                        hover:scrollbar-thumb-neutral-400

                        dark:scrollbar-thumb-zinc-700
                        dark:hover:scrollbar-thumb-zinc-600
                    "
        >
          <div className="space-y-4">

            {/* School image */}
            <div
              className="
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-neutral-200/70
                                dark:border-white/10
                            "
            >
              <img
                src={school.image}
                alt={school.name}
                className="h-56 w-full object-cover"
              />

              {/* Image gradient */}
              <div
                className="
                                    absolute
                                    inset-x-0
                                    bottom-0
                                    bg-gradient-to-t
                                    from-black/90
                                    via-black/55
                                    to-transparent
                                    px-5
                                    pb-5
                                    pt-20
                                "
              >
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="truncate text-xl font-semibold text-white">
                      {school.name}
                    </h2>

                    <div className="mt-2 flex items-center gap-2 text-sm text-white">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

                      <span>
                        {school.rating}
                      </span>

                      <span className="text-white/50">
                        ·
                      </span>

                      <span className="truncate text-white/80">
                        {school.reviewCount} reviews
                      </span>
                    </div>
                  </div>

                  {school.verified && (
                    <div
                      className="
                                                flex
                                                shrink-0
                                                items-center
                                                gap-1
                                                rounded-full
                                                bg-emerald-500
                                                px-2.5
                                                py-1
                                                text-xs
                                                font-medium
                                                text-white
                                            "
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Verified
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Location */}
            <div
              className="
                                rounded-2xl
                                border
                                border-neutral-200/70
                                bg-transparent
                                p-2
                                dark:border-white/10
                            "
            >
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />

                <div className="min-w-0">
                  <h3 className="font-semibold text-neutral-950 dark:text-white">
                    Location
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-zinc-400">
                    {school.address.line},{" "}
                    {school.address.area},{" "}
                    {school.address.city},{" "}
                    {school.address.state},{" "}
                    {school.address.pinCode}
                  </p>

                  <p className="mt-2 text-xs text-neutral-400 dark:text-zinc-500">
                    {school.distance} km away
                  </p>
                </div>
              </div>
            </div>

            {/* About */}
            <div
              className="
                                rounded-2xl
                                border
                                border-neutral-200/70
                                bg-transparent
                                p-5
                                dark:border-white/10
                            "
            >
              <h3 className="font-semibold text-neutral-950 dark:text-white">
                About the school
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500 dark:text-zinc-400">
                {school.description}
              </p>
            </div>

            {/* Courses */}
            <div
              className="
                                rounded-2xl
                                border
                                border-neutral-200/70
                                bg-transparent
                                p-2
                                dark:border-white/10
                            "
            >
              <h3 className="font-semibold ml-2 text-neutral-950 dark:text-white">
                Courses
              </h3>

              <div className="mt-4 space-y-3">
                {school.courses.map((course) => (
                  <div
                    key={course.id}
                    className="
                                            rounded-xl
                                            border
                                            border-neutral-200/70
                                            p-4
                                            dark:border-white/10
                                        "
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="font-medium text-neutral-950 dark:text-white">
                          {course.name}
                        </h4>

                        <p className="mt-1 text-xs text-neutral-500 dark:text-zinc-500">
                          {course.duration}
                        </p>
                      </div>

                      <span className="shrink-0 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        ₹
                        {course.price.toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-5 text-neutral-500 dark:text-zinc-400">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructors */}
            <div
              className="
                                rounded-2xl
                                border
                                border-neutral-200/70
                                bg-transparent
                                p-2
                                dark:border-white/10
                            "
            >
              <h3 className="font-semibold pl-2  text-neutral-950 dark:text-white">
                Instructors
              </h3>

              <div className="mt-4 space-y-3">
                {school.instructors.map((instructor) => (
                  <div
                    key={instructor.id}
                    className="
                                            flex
                                            items-center
                                            justify-between
                                            rounded-xl
                                            border
                                            border-neutral-200/70
                                            p-4
                                            dark:border-white/10
                                        "
                  >
                    <div>

                      <div className="flex gap-2">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-emerald-100 text-sm font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400">
                            {instructor.name
                              .split(" ")
                              .map((name) => name[0])
                              .slice(0, 2)
                              .join("")
                              .toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <p className="font-medium mt-3 text-neutral-950 dark:text-white">
                          {instructor.name}
                        </p>

                      </div>


                      <p className="mt-1 text-xs text-neutral-500 dark:text-zinc-500">
                        {instructor.experience} years
                        experience
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

                      <span className="text-neutral-700 dark:text-zinc-300">
                        {instructor.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicles */}
            <div
              className="
                                rounded-2xl
                                border
                                border-neutral-200/70
                                bg-transparent
                                p-2
                                dark:border-white/10
                            "
            >
              <h3 className="font-semibold ml-2 text-neutral-950 dark:text-white">
                Training Vehicles
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {school.vehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="
                                            rounded-xl
                                            border
                                            border-neutral-200/70
                                            p-4
                                            dark:border-white/10
                                        "
                  >
                    <p className="font-medium text-neutral-950 dark:text-white">
                      {vehicle.name}
                    </p>

                    <p className="mt-1 text-xs text-neutral-500 dark:text-zinc-500">
                      {vehicle.transmission}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div
              className="
                                rounded-2xl
                                border
                                border-neutral-200/70
                                bg-transparent
                                p-5
                                dark:border-white/10
                            "
            >
              <h3 className="font-semibold text-neutral-950 dark:text-white">
                Reviews
              </h3>

              <div className="mt-4 space-y-4">
                {school.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-neutral-200/70 pb-4 last:border-0 last:pb-0 dark:border-white/10"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium text-neutral-950 dark:text-white">
                        {review.learnerName}
                      </p>

                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />

                        <span className="text-xs text-neutral-500 dark:text-zinc-400">
                          {review.rating}
                        </span>
                      </div>
                    </div>

                    <p className="mt-2 text-sm leading-5 text-neutral-500 dark:text-zinc-400">
                      {review.comment}
                    </p>

                    <p className="mt-2 text-xs text-neutral-400 dark:text-zinc-600">
                      {review.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Fixed footer */}
        <div
          className="
                        shrink-0
                        border-t
                        border-neutral-200/70
                        bg-white/90
                        px-5
                        py-4
                        backdrop-blur-xl
                        dark:border-white/10
                        dark:bg-neutral-950/90
                    "
        >
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 gap-2 bg-transparent"
              onClick={() => {
                window.location.href = `tel:${school.phone}`;
              }}
            >
              <Phone className="h-4 w-4" />
              Call
            </Button>

            <Button
              type="button"
              variant="outline"
              className="flex-1 gap-2 bg-transparent"
              onClick={() => {
                window.open(
                  mapsHref,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <Navigation className="h-4 w-4" />
              Directions
            </Button>
          </div>

          <Button
            type="button"
            size="lg"
            className="mt-3 w-full bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-700 dark:text-white dark:hover:bg-emerald-300"
            onClick={() => {
              onEnroll?.(school.id);
              router.push(`/learner/payment?schoolId=${school.id}`);
            }}
          >
            Enroll Now
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}