"use client";

import { ArrowLeft, MapPin, SearchX } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

import CourseList from "@/features/learners/payment/components/CourseList";

import { Button } from "@/components/ui/button";
import { schoolsData } from "@/components/landing/schools/data/schoolsData";

export default function LearnerPaymentPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const schoolId = searchParams.get("schoolId");

    const school = useMemo(() => {
        if (!schoolId) {
            return null;
        }

        return (
            schoolsData.find((school) => school.id === schoolId) ?? null
        );
    }, [schoolId]);

    const handleCourseSelect = (courseId: string) => {
        if (!school) {
            return;
        }

        router.push(
            `/learner/payment/summary?schoolId=${school.id}&courseId=${courseId}`
        );
    };

    /* --------------------------------
       School not found
    -------------------------------- */
    if (!school) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center px-4">
                <div className="max-w-md text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-white/[0.04]">
                        <SearchX className="h-7 w-7 text-neutral-400 dark:text-zinc-500" />
                    </div>

                    <h1 className="mt-6 text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        School not found
                    </h1>

                    <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-neutral-500 dark:text-zinc-400">
                        The driving school you&apos;re trying to enroll in
                        could not be found. It may have been removed or the
                        link is incorrect.
                    </p>

                    <div className="mt-7 flex items-center justify-center gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.back()}
                            className="rounded-full border-neutral-200 text-neutral-700 hover:bg-neutral-50 dark:border-white/10 dark:text-zinc-300 dark:hover:bg-white/[0.04]"
                        >
                            Go Back
                        </Button>

                        <Button
                            type="button"
                            onClick={() => router.push("/learner/schools")}
                            className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-300"
                        >
                            Browse Schools
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className=" w-full overflow-x-hidden bg-white dark:bg-neutral-950">
            <main className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-3">
                {/* Back */}
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="mb-2 flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-zinc-400 dark:hover:text-white"
                >
                    <ArrowLeft className="h-5 w-5" />
                   
                </button>
                {/* Courses */}
                <div className="mt-5">
                    <CourseList
                        courses={school.courses}
                        onCourseSelect={handleCourseSelect}
                    />
                </div>
            </main>
        </div>
    );
}