"use client";

import Image from "next/image";
import {
  Bookmark,
  CarFront,
  Clock3,
  Heart,
  MapPin,
  Star,
  UserRound,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import type { DrivingSchool } from "../types/school";

interface SchoolCardProps {
  school: DrivingSchool;
  isFavorite?: boolean;
  onFavorite?: (school: DrivingSchool) => void;
}

export default function SchoolCard({
  school,
  isFavorite = false,
  onFavorite,
}: SchoolCardProps) {
  const router = useRouter();

  const hasAutomatic = school.vehicles.some(
    (vehicle) => vehicle.transmission === "Automatic"
  );

  const hasManual = school.vehicles.some(
    (vehicle) => vehicle.transmission === "Manual"
  );

  return (
    <Card
      className="
        w-full overflow-hidden rounded-2xl
        border border-zinc-200 bg-white text-zinc-950
        shadow-lg shadow-black/5
        dark:border-zinc-800
        dark:bg-[#111314]
        dark:text-white
        dark:shadow-black/30
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative m-3.5 h-[300px] overflow-hidden rounded-xl">
        <Image
          src={school.image}
          alt={`${school.name} driving school`}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

        {/* Rating + Bookmark */}
        <div className="absolute right-4 top-4 flex  items-end gap-2">
          <Badge
            className="
              h-10 rounded-xl
              gap-1.5 bg-white px-3 text-sm font-bold
              text-zinc-950 shadow-md
              hover:bg-white
              dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-950
            "
          >
            <Star className="h-4 w-4 fill-[#E51B23] text-[#E51B23]" />
            {school.rating.toFixed(1)}
          </Badge>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Save driving school"
            onClick={() => onFavorite?.(school)}
            className="
              h-10 w-10 rounded-xl
              bg-white/95 text-zinc-900 shadow-md
              hover:bg-white
              dark:bg-zinc-950/90 dark:text-white dark:hover:bg-zinc-900
            "
          >
            <Bookmark
              className={
                isFavorite
                  ? "h-5 w-5 fill-[#E51B23] text-[#E51B23]"
                  : "h-5 w-5"
              }
            />
          </Button>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <CardContent className="px-5 pb-6 pt-2 sm:px-7 sm:pb-7">
        {/* Title */}
        <div className="flex items-center gap-2">
          <h2 className="min-w-0 truncate text-xl font-bold tracking-tight sm:text-2xl">
            {school.name}
          </h2>

          {school.verified && (
            <span
              title="Verified school"
              className="
                flex h-5 w-5 shrink-0 items-center
                justify-center rounded-full
                bg-[#E51B23]
                text-[11px] font-bold text-white
              "
            >
              ✓
            </span>
          )}
        </div>

        {/* Location */}
        <div className="mt-2.5 flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E51B23]" />

          <span className="line-clamp-2">
            {school.address.area}, {school.address.city}
          </span>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-zinc-200 dark:bg-zinc-800" />

        {/* ================= INFO ================= */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
          <InfoItem
            icon={<UserRound />}
            value={`${school.instructors.length}+`}
            label="Instructors"
          />

          <InfoItem
            icon={<Clock3 />}
            value={
              school.instructors[0]?.experience
                ? `${school.instructors[0].experience}+ Yrs`
                : "5+ Yrs"
            }
            label="Experience"
          />

          <InfoItem
            icon={<CarFront />}
            value={
              hasAutomatic && hasManual
                ? "Manual & Auto"
                : hasAutomatic
                  ? "Automatic"
                  : "Manual"
            }
            label="Transmission"
          />

          <InfoItem
            icon={<CarFront />}
            value={`${school.vehicles.length}`}
            label="Vehicles"
          />
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-zinc-200 dark:bg-zinc-800" />

        {/* Description */}
        <p className="mb-6 line-clamp-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {school.description}
        </p>

        {/* ================= ACTIONS ================= */}
        <div className="flex gap-3">
          <Button
            type="button"
            className="
              h-12 flex-1 rounded-lg
              bg-[#E51B23]
              text-sm font-bold text-white
              hover:bg-[#C9141B]
            "
            onClick={() => router.push(`/schools/${school.id}`)}
          >
            View Details
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Add to favorites"
            onClick={() => onFavorite?.(school)}
            className="
              h-12 w-12 shrink-0 rounded-lg
              border-zinc-300 bg-transparent
              text-zinc-900 hover:bg-zinc-100
              dark:border-zinc-700
              dark:text-white
              dark:hover:bg-zinc-800
            "
          >
            <Heart
              className={
                isFavorite
                  ? "h-5 w-5 fill-[#E51B23] text-[#E51B23]"
                  : "h-5 w-5"
              }
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ================= INFO ITEM ================= */

function InfoItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <div className="shrink-0 text-[#E51B23] [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.8]">
        {icon}
      </div>

      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate text-sm font-bold">
          {value}
        </span>

        <span className="text-xs leading-tight text-zinc-500 dark:text-zinc-400">
          {label}
        </span>
      </div>
    </div>
  );
}