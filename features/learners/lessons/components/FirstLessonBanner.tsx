"use client";

import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface FirstLessonBannerProps {
    mode: "browse" | "schedule";
}

export default function FirstLessonBanner({
    mode,
}: FirstLessonBannerProps) {
    const router = useRouter();

    if (mode === "browse") {
        return (
            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-foreground">
                            Start your driving journey
                        </p>

                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            Find a driving school and choose a course that suits you.
                        </p>
                    </div>

                    <Button
                        type="button"
                        onClick={() => router.push("/schools")}
                        className="h-11 shrink-0 gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                        Browse Schools
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </section>
        );
    }

    return (
        <section
            className="
        overflow-hidden
        rounded-2xl
        border border-primary/15
        bg-primary/5
      "
        >
            <div className="p-5 sm:p-7">
                {/* Top */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                        <div
                            className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-xl
                bg-primary/10
                text-primary
              "
                        >
                            <CalendarDays className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-xs font-medium text-primary">
                                Your enrollment is ready
                            </p>

                            <h2 className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                                Your first lesson is waiting!
                            </h2>

                            <p className="mt-1.5 max-w-xl text-sm leading-6 text-muted-foreground">
                                Your course enrollment is complete. Schedule your
                                first lesson to start your driving training.
                            </p>
                        </div>
                    </div>

                    {/* Enrollment Status */}
                    <div
                        className="
              inline-flex w-fit shrink-0
              items-center gap-1.5
              rounded-full
              bg-background
              px-3 py-1.5
              text-xs font-medium
              text-primary
              shadow-sm
            "
                    >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Enrollment Confirmed
                    </div>
                </div>

                {/* Progress */}
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <StatusItem
                        label="Payment"
                        value="Completed"
                        completed
                    />

                    <StatusItem
                        label="Course"
                        value="Enrolled"
                        completed
                    />

                    <StatusItem
                        label="First Lesson"
                        value="Not Scheduled"
                    />
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-col gap-3 border-t border-primary/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                        Choose your preferred date, time and instructor.
                    </p>

                    <Button
                        type="button"
                        onClick={() => router.push("/learner/lessons/schedule")}
                        className="
              h-11
              gap-2
              rounded-xl
              bg-primary
              px-5
              text-sm
              font-semibold
              text-primary-foreground
              hover:bg-primary/90
            "
                    >
                        Schedule First Lesson
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}

function StatusItem({
    label,
    value,
    completed = false,
}: {
    label: string;
    value: string;
    completed?: boolean;
}) {
    return (
        <div
            className="
        flex items-center gap-3
        rounded-xl
        border border-border
        bg-background/70
        px-4 py-3
      "
        >
            <div
                className={`
          flex h-7 w-7 shrink-0
          items-center justify-center
          rounded-full
          ${completed
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }
        `}
            >
                {completed ? (
                    <CheckCircle2 className="h-4 w-4" />
                ) : (
                    <CalendarDays className="h-4 w-4" />
                )}
            </div>

            <div className="min-w-0">
                <p className="text-[11px] text-muted-foreground">
                    {label}
                </p>

                <p
                    className={`
            mt-0.5 text-xs font-semibold
            ${completed
                            ? "text-primary"
                            : "text-foreground"
                        }
          `}
                >
                    {value}
                </p>
            </div>
        </div>
    );
}