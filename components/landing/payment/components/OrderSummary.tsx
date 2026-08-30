"use client";

import {
    Building2,
    CarFront,
    Clock3,
    CheckCircle2,
} from "lucide-react";

import type { DrivingSchool } from "@/components/landing/schools/types/school";

interface OrderSummaryProps {
    school: DrivingSchool;
    course: DrivingSchool["courses"][number];
}

export default function OrderSummary({
    school,
    course,
}: OrderSummaryProps) {
    return (
        <section
            className="
        rounded-2xl
        border border-neutral-200
        bg-white
        p-5
        dark:border-white/10
        dark:bg-[#151515]
        sm:p-6
      "
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E51B23]">
                        Your Selection
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-neutral-950 dark:text-white">
                        Order summary
                    </h2>
                </div>

                <CheckCircle2 className="h-5 w-5 text-[#E51B23]" />
            </div>

            {/* School */}
            <div
                className="
          mt-5 flex items-start gap-3
          rounded-xl
          border border-neutral-200
          p-4
          dark:border-white/10
        "
            >
                <div
                    className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-lg
            bg-[#E51B23]/10
            text-[#E51B23]
          "
                >
                    <Building2 className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                    <p className="text-xs text-neutral-400 dark:text-zinc-500">
                        Driving school
                    </p>

                    <p className="mt-1 truncate text-sm font-semibold text-neutral-950 dark:text-white">
                        {school.name}
                    </p>

                    <p className="mt-1 text-xs text-neutral-500 dark:text-zinc-400">
                        {school.address.area}, {school.address.city}
                    </p>
                </div>
            </div>

            {/* Course */}
            <div className="mt-5">
                <p className="text-xs text-neutral-400 dark:text-zinc-500">
                    Selected course
                </p>

                <h3 className="mt-1 text-base font-semibold text-neutral-950 dark:text-white">
                    {course.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-zinc-400">
                    {course.description}
                </p>
            </div>

            {/* Course details */}
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                <Detail
                    icon={<CarFront />}
                    label="Vehicle"
                    value={course.vehicleType}
                />

                <Detail
                    icon={<CarFront />}
                    label="Transmission"
                    value={course.transmission}
                />

                <Detail
                    icon={<Clock3 />}
                    label="Duration"
                    value={course.duration}
                />
            </div>

            {/* Fee */}
            <div className="mt-5 border-t border-neutral-200 pt-5 dark:border-white/10">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500 dark:text-zinc-400">
                        Course fee
                    </span>

                    <span className="text-lg font-semibold text-neutral-950 dark:text-white">
                        ₹{course.price.toLocaleString("en-IN")}
                    </span>
                </div>
            </div>
        </section>
    );
}

function Detail({
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
        rounded-xl
        bg-neutral-50
        p-3
        dark:bg-white/[0.03]
      "
        >
            <div className="flex items-center gap-2">
                <span className="text-[#E51B23] [&>svg]:h-4 [&>svg]:w-4">
                    {icon}
                </span>

                <span className="text-xs text-neutral-400 dark:text-zinc-500">
                    {label}
                </span>
            </div>

            <p className="mt-1.5 text-sm font-medium text-neutral-800 dark:text-zinc-200">
                {value}
            </p>
        </div>
    );
}