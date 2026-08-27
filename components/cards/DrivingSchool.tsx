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

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface DrivingSchool {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  location: string;
  instructors: number;
  experience: string;
  transmission: "Manual" | "Automatic" | "Manual & Automatic";
  vehicles: ("2 Wheeler" | "4 Wheeler")[];
  description: string;
  verified?: boolean;
}

interface DrivingSchoolCardProps {
  school: DrivingSchool;
  theme?: "light" | "dark";
  isFavorite?: boolean;
  onViewDetails?: (school: DrivingSchool) => void;
  onFavorite?: (school: DrivingSchool) => void;
}

export function DrivingSchoolCard({
  school,
  theme = "light",
  isFavorite = false,
  onViewDetails,
  onFavorite,
}: DrivingSchoolCardProps) {
  const isDark = theme === "dark";

  return (
    <Card
      className={[
        "group w-full max-w-[680px] overflow-hidden rounded-2xl",
        "transition-all duration-200 hover:-translate-y-1",
        isDark
          ? "border-zinc-800 bg-[#111314] text-white shadow-2xl shadow-black/30"
          : "border-zinc-200 bg-white text-zinc-950 shadow-lg shadow-black/5",
      ].join(" ")}
    >
      {/* ================= IMAGE ================= */}
      <div className="relative m-3.5 h-[330px] overflow-hidden rounded-xl">
        <Image
          src={school.image}
          alt={`${school.name} driving school`}
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 680px"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

        {/* Rating */}
        <Badge
          className={[
            "absolute right-4 top-4 h-11 rounded-xl px-3.5",
            "gap-1.5 text-base font-bold shadow-md",
            isDark
              ? "bg-zinc-950 text-white hover:bg-zinc-950"
              : "bg-white text-zinc-950 hover:bg-white",
          ].join(" ")}
        >
          <Star
            className="h-[17px] w-[17px] fill-[#E51B23] text-[#E51B23]"
          />
          {school.rating.toFixed(1)}
        </Badge>

        {/* Bookmark */}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Save driving school"
          className={[
            "absolute right-[88px] top-4 h-11 w-11 rounded-xl",
            isDark
              ? "bg-zinc-950/90 text-white hover:bg-zinc-900"
              : "bg-white/95 text-zinc-900 hover:bg-white",
          ].join(" ")}
        >
          <Bookmark className="h-5 w-5" />
        </Button>

        {/* School logo */}
        <div className="absolute bottom-4 left-4 flex h-[145px] w-[150px] flex-col items-center justify-center rounded-2xl bg-white text-zinc-950 shadow-xl">
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#E51B23] text-white">
            <CarFront className="h-8 w-8" />
          </div>

          <span className="text-sm font-extrabold uppercase">
            {school.name.split(" ")[0]}
          </span>

          <span className="text-[9px] font-bold tracking-[0.8px]">
            DRIVING SCHOOL
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <CardContent className="px-8 pb-7 pt-2">
        {/* Title */}
        <div className="flex items-center gap-2">
          <h2 className="text-[28px] font-bold leading-tight tracking-tight">
            {school.name}
          </h2>

          {school.verified && (
            <span
              className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#E51B23] text-xs font-bold text-white"
              title="Verified school"
            >
              ✓
            </span>
          )}
        </div>

        {/* Location */}
        <div
          className={[
            "mt-3 flex items-center gap-2.5 text-[17px]",
            isDark ? "text-zinc-300" : "text-zinc-600",
          ].join(" ")}
        >
          <MapPin className="h-5 w-5 shrink-0 text-[#E51B23]" />
          <span>{school.location}</span>
        </div>

        <div
          className={[
            "my-5 h-px",
            isDark ? "bg-zinc-800" : "bg-zinc-200",
          ].join(" ")}
        />

        {/* ================= INFO ================= */}
        <div className="grid grid-cols-4 gap-4">
          <InfoItem
            icon={<UserRound />}
            value={`${school.instructors}+`}
            label="Instructors"
            dark={isDark}
          />

          <InfoItem
            icon={<Clock3 />}
            value={school.experience}
            label="Experience"
            dark={isDark}
          />

          <InfoItem
            icon={<CarFront />}
            value={school.transmission}
            label="Transmission"
            dark={isDark}
          />

          <InfoItem
            icon={<CarFront />}
            value={school.vehicles.join(" & ")}
            label="Vehicles"
            dark={isDark}
          />
        </div>

        <div
          className={[
            "my-5 h-px",
            isDark ? "bg-zinc-800" : "bg-zinc-200",
          ].join(" ")}
        />

        {/* Description */}
        <p
          className={[
            "mb-6 max-w-[580px] text-base leading-7",
            isDark ? "text-zinc-400" : "text-zinc-600",
          ].join(" ")}
        >
          {school.description}
        </p>

        {/* ================= ACTIONS ================= */}
        <div className="flex gap-3.5">
          <Button
            onClick={() => onViewDetails?.(school)}
            className="h-14 flex-1 rounded-lg bg-[#E51B23] text-base font-bold text-white hover:bg-[#C9141B]"
          >
            View Details
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => onFavorite?.(school)}
            aria-label="Add to favorites"
            className={[
              "h-14 w-14 shrink-0 rounded-lg",
              isDark
                ? "border-zinc-700 bg-transparent text-white hover:bg-zinc-800 hover:text-white"
                : "border-zinc-300 bg-transparent text-zinc-900 hover:bg-zinc-100",
            ].join(" ")}
          >
            <Heart
              className={[
                "h-6 w-6",
                isFavorite && "fill-[#E51B23] text-[#E51B23]",
              ].join(" ")}
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ========================================================= */

function InfoItem({
  icon,
  value,
  label,
  dark,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  dark: boolean;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <div className="shrink-0 text-[#E51B23] [&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-[1.8]">
        {icon}
      </div>

      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate text-sm font-bold">{value}</span>

        <span
          className={[
            "text-xs leading-tight",
            dark ? "text-zinc-400" : "text-zinc-500",
          ].join(" ")}
        >
          {label}
        </span>
      </div>
    </div>
  );
}