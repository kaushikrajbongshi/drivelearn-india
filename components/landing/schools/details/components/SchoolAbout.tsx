"use client";

import {
  BadgeCheck,
  CarFront,
  Clock3,
  MapPin,
  ShieldCheck,
  Star,
  UsersRound,
} from "lucide-react";

import type { DrivingSchool } from "../../types/school";

interface SchoolAboutProps {
  school: DrivingSchool;
}

export default function SchoolAbout({
  school,
}: SchoolAboutProps) {
  const experience =
    school.instructors.length > 0
      ? Math.max(
          ...school.instructors.map(
            (instructor) => instructor.experience
          )
        )
      : 0;

  return (
    <section
      className="
        rounded-2xl
        border border-zinc-200
        bg-white
        p-5
        dark:border-zinc-800
        dark:bg-[#151515]
        sm:p-7
      "
    >
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-xl font-bold sm:text-2xl">
            About {school.name}
          </h2>

          {school.verified && (
            <span
              className="
                inline-flex items-center gap-1
                rounded-full
                bg-[#E51B23]/10
                px-2.5 py-1
                text-xs font-semibold
                text-[#E51B23]
              "
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              Verified
            </span>
          )}
        </div>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {school.description}
        </p>
      </div>

      {/* School Information */}
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <InfoItem
          icon={<MapPin />}
          label="Location"
          value={`${school.address.area}, ${school.address.city}, ${school.address.state}`}
        />

        <InfoItem
          icon={<Clock3 />}
          label="Experience"
          value={`${experience}+ years`}
        />

        <InfoItem
          icon={<UsersRound />}
          label="Instructors"
          value={`${school.instructors.length} instructors`}
        />

        <InfoItem
          icon={<CarFront />}
          label="Training Vehicles"
          value={`${school.vehicles.length} vehicles`}
        />
      </div>

      {/* Highlights */}
      <div className="mt-7">
        <h3 className="text-base font-semibold">
          Why learn with us?
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Highlight
            icon={<ShieldCheck />}
            title="Verified Driving School"
            description="Learn from a trusted and verified training centre."
          />

          <Highlight
            icon={<UsersRound />}
            title="Experienced Instructors"
            description="Get guidance from trained driving instructors."
          />

          <Highlight
            icon={<CarFront />}
            title="Multiple Vehicles"
            description="Choose from the available training vehicles."
          />

          <Highlight
            icon={<Star />}
            title={`${school.rating.toFixed(1)} Rated`}
            description={`Based on ${school.reviewCount} learner reviews.`}
          />
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        flex items-start gap-3
        rounded-xl
        border border-zinc-200
        p-4
        dark:border-zinc-800
      "
    >
      <div className="mt-0.5 text-[#E51B23]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

function Highlight({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
      <div
        className="
          flex h-10 w-10 shrink-0 items-center
          justify-center rounded-lg
          bg-[#E51B23]/10
          text-[#E51B23]
        "
      >
        {icon}
      </div>

      <div>
        <h4 className="text-sm font-semibold">
          {title}
        </h4>

        <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}