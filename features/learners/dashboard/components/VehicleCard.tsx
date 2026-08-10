"use client";

import { Car } from "lucide-react";
import Link from "next/link";
import type { VehicleSummary } from "../types/dashboard";

interface VehicleCardProps {
    vehicle: VehicleSummary | null;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
    return (
        <div className="flex flex-col rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#1c1c1c]">
            <p className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-zinc-400">
                <Car className="h-3.5 w-3.5" />
                Your Vehicle
            </p>

            {vehicle ? (
                <>
                    <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white">
                        {vehicle.name}
                        <span className="rounded-full bg-black/5 px-2 py-0.5 text-[11px] font-medium text-neutral-600 dark:bg-white/10 dark:text-zinc-300">
                            {vehicle.category}
                        </span>
                    </p>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-zinc-400">{vehicle.transmission}</p>
                </>
            ) : (
                <p className="mt-3 text-sm text-neutral-500 dark:text-zinc-400">
                    No vehicle assigned yet.
                </p>
            )}

            <Link
                href="/learner/vehicle"
                className="mt-auto pt-4 text-center text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
                View Vehicle Details →
            </Link>
        </div>
    );
}