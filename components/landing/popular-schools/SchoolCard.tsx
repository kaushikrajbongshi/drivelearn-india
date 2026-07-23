"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    MapPin,
    Star,
    ShieldCheck,
    CarFront,
    ArrowRight,
} from "lucide-react";

import type { School } from "./school-types";

interface SchoolCardProps extends School {
    index: number;
}

export default function SchoolCard({
    name,
    city,
    state,
    image,
    rating,
    reviews,
    price,
    vehicleType,
    verified,
    index,
}: SchoolCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
            }}
            className="group overflow-hidden rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {verified && (
                    <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-white/90 dark:bg-zinc-900/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                        <ShieldCheck className="h-4 w-4 text-emerald-500" />
                        Verified
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col p-6">

                {/* Title */}
                <h3 className="min-h-[64px] text-2xl font-bold leading-tight text-zinc-900 dark:text-white">
                    {name}
                </h3>

                {/* Location */}
                <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <MapPin className="h-4 w-4" />
                    {city}, {state}
                </div>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                    <span className="font-semibold">
                        {rating}
                    </span>

                    <span className="text-sm text-zinc-500">
                        ({reviews} reviews)
                    </span>
                </div>

                {/* Vehicle */}
                <div className="mt-4 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <CarFront className="h-4 w-4 text-indigo-500" />
                    {vehicleType}
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                    <div>
                        <p className="text-xs text-zinc-500">
                            From
                        </p>

                        <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                            {price}
                        </h4>
                    </div>

                    <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30">
                        View Details
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}