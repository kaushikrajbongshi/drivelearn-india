"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star, MapPin } from "lucide-react";

import type { Testimonial } from "./testimonial-types";

interface TestimonialCardProps extends Testimonial {
    index: number;
}

export default function TestimonialCard({
    name,
    role,
    location,
    avatar,
    rating,
    review,
    index,
}: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
            }}
            className="group relative flex h-full flex-col rounded-3xl border border-zinc-200/60 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-zinc-800 dark:bg-zinc-900"
        >
            {/* Quote */}
            <Quote className="absolute right-6 top-6 h-10 w-10 text-indigo-100 transition-colors group-hover:text-indigo-200 dark:text-zinc-800 dark:group-hover:text-zinc-700" />

            {/* Rating */}
            <div className="mb-5 flex items-center gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                    <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                ))}
            </div>

            {/* Review */}
            <p className="flex-1 leading-8 text-zinc-600 dark:text-zinc-300">
                <span>&ldquo;{review}&rdquo;</span>
            </p>

            {/* Footer */}
            <div className="mt-8 flex items-center gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">

                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-indigo-100 dark:ring-zinc-700">
                    <Image
                        src={avatar}
                        alt={name}
                        fill
                        className="object-cover object-top"
                    />
                </div>

                <div className="flex-1">

                    <h4 className="font-semibold text-zinc-900 dark:text-white">
                        {name}
                    </h4>

                    <p className="text-sm text-indigo-600 dark:text-indigo-400">
                        {role}
                    </p>

                    <div className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
                        <MapPin className="h-3 w-3" />
                        {location}
                    </div>

                </div>
            </div>
        </motion.div>
    );
}