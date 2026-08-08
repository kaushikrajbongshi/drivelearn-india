"use client";

import { Star, MapPin, Phone } from "lucide-react";

import { useMediaQuery } from "../hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";

import type { DrivingSchool } from "../types/school";

interface SchoolDetailsSheetProps {
    school: DrivingSchool | null;
    isSelected: boolean;
    onOpenChange: (open: boolean) => void;
    onSelect: () => void;
}

function SchoolDetailsBody({
    school,
    isSelected,
    onSelect,
}: {
    school: DrivingSchool;
    isSelected: boolean;
    onSelect: () => void;
}) {
    return (
        <div className="space-y-4">
            {/* Location + Distance row */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5 min-w-0">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <p className="text-sm leading-snug text-neutral-700 dark:text-zinc-300">
                        {school.address.line}, {school.address.city}, {school.address.state} –{" "}
                        {school.address.pinCode}
                    </p>
                </div>
                <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {school.distanceKm} km
                </span>
            </div>

            {/* Rating pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 dark:bg-amber-500/10">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                    {school.rating}
                </span>
                <span className="text-xs text-neutral-500 dark:text-zinc-400">
                    ({school.reviewCount} reviews)
                </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-zinc-400">
                {school.description}
            </p>

            {/* Courses */}
            <div className="rounded-xl border border-black/5 bg-neutral-50/80 p-3.5 dark:border-white/10 dark:bg-zinc-900/50">
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-zinc-500">
                    Courses Offered
                </p>
                <div className="flex flex-wrap gap-2">
                    {school.courses.map((course) => (
                        <span
                            key={course}
                            className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 shadow-sm ring-1 ring-black/5 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/10"
                        >
                            {course}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contact + Price bar */}
            <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white px-4 py-3 dark:border-white/10 dark:bg-zinc-900">
                <a
                    href={`tel:${school.contactPhone}`}
                    className="flex items-center gap-2 text-sm text-neutral-600 transition hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                >
                    <Phone className="h-4 w-4" />
                    {school.contactPhone}
                </a>
                <div className="text-right">
                    <p className="text-[11px] text-neutral-400 dark:text-zinc-500">Starting from</p>
                    <p className="text-base font-bold text-neutral-900 dark:text-white">
                        ₹{school.priceStartingFrom.toLocaleString("en-IN")}
                    </p>
                </div>
            </div>

            {/* CTA */}
            <Button
                type="button"
                size="lg"
                onClick={onSelect}
                className={`h-12 w-full rounded-full text-base font-semibold transition-all ${isSelected
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25 dark:bg-emerald-500"
                        : "bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-500/20 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                    }`}
            >
                {isSelected ? "Selected ✓" : "Select this school"}
            </Button>
        </div>
    );
}

export default function SchoolDetailsSheet({
    school,
    isSelected,
    onOpenChange,
    onSelect,
}: SchoolDetailsSheetProps) {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const open = school !== null;

    if (!school) return null;

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>{school.name}</DialogTitle>
                    </DialogHeader>
                    <SchoolDetailsBody school={school} isSelected={isSelected} onSelect={onSelect} />
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{school.name}</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 pb-6">
                    <SchoolDetailsBody school={school} isSelected={isSelected} onSelect={onSelect} />
                </div>
            </DrawerContent>
        </Drawer>
    );
}