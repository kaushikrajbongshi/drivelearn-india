"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import type { OnboardingSummary } from "../types/summary";

interface WelcomeSummaryProps {
    summary: OnboardingSummary;
}

export default function WelcomeSummary({
    summary,
}: WelcomeSummaryProps) {
    const router = useRouter();

    const {
        drivingSchool,
        coursePackage,
        paymentCompleted,
    } = summary;

    const checkRef = useRef<HTMLDivElement>(null);

    const [isTransitioning, setIsTransitioning] =
        useState(false);

    const [origin, setOrigin] = useState({
        x: 0,
        y: 0,
    });

    const completedItems: string[] = [];

    if (drivingSchool) {
        completedItems.push(
            "Driving school selected"
        );
    }

    if (coursePackage) {
        completedItems.push(
            "Course package selected"
        );
    }

    if (paymentCompleted) {
        completedItems.push(
            "Payment completed"
        );
    }

    function handleGoToDashboard() {
        const rect =
            checkRef.current?.getBoundingClientRect();

        if (rect) {
            setOrigin({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            });
        }

        setIsTransitioning(true);
    }

    const maxRadius =
        typeof window !== "undefined"
            ? Math.hypot(
                  Math.max(
                      origin.x,
                      window.innerWidth - origin.x
                  ),
                  Math.max(
                      origin.y,
                      window.innerHeight - origin.y
                  )
              )
            : 0;

    return (
        <>
            <div className="mx-auto m-auto flex h-full w-full max-w-md flex-col items-center justify-center px-6 py-8 text-center sm:px-0">
                {/* Success indicator */}
                <motion.div
                    ref={checkRef}
                    initial={{
                        scale: 0.4,
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 dark:bg-red-500"
                >
                    <Check
                        className="h-8 w-8 text-white"
                        strokeWidth={3}
                    />
                </motion.div>

                <h1 className="mt-6 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    You're all set!
                </h1>

                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-zinc-400">
                    Your learner account is ready.
                </p>

                <Button
                    type="button"
                    size="lg"
                    onClick={handleGoToDashboard}
                    disabled={isTransitioning}
                    className="mt-8 h-12 w-full rounded-full bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400"
                >
                    Go to Dashboard →
                </Button>
            </div>

            {/* Circular reveal transition */}
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-red-600 dark:bg-red-500"
                        initial={{
                            clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
                        }}
                        animate={{
                            clipPath: `circle(${maxRadius}px at ${origin.x}px ${origin.y}px)`,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [
                                0.65,
                                0,
                                0.35,
                                1,
                            ],
                        }}
                        onAnimationComplete={() =>
                            router.push(
                                "/learner/dashboard"
                            )
                        }
                    >
                        <motion.div
                            initial={{
                                scale: 0.5,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.25,
                                duration: 0.3,
                            }}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20"
                        >
                            <Check
                                className="h-8 w-8 text-white"
                                strokeWidth={3}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}