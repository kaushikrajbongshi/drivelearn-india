"use client";

import { ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function PaymentSuccessPage() {
    const router = useRouter();

    // Temporary frontend data.
    // Later this will come from the payment/enrollment response.
    const enrollment = {
        schoolName: "Safe Drive Academy",
        courseName: "Complete 4 Wheeler Course",
        vehicleType: "4 Wheeler",
        transmission: "Manual",
        duration: "20 hours",
        amount: 4000,
        enrollmentId: "DL-2026-00124",
    };

    return (
        <main
            className="
        min-h-screen
        bg-white
        dark:bg-[#0d0d0d]
      "
        >
            <div
                className="
          mx-auto flex
          w-full max-w-3xl
          items-center justify-center
          px-4 py-10
          sm:px-6
        "
            >
                <section
                    className="
            w-full
            rounded-3xl
            border border-neutral-200
            bg-white
            p-6
            text-center
            shadow-sm
            dark:border-white/10
            dark:bg-[#151515]
            sm:p-10
          "
                >
                    {/* Success Icon */}
                    <div
                        className="
              mx-auto flex h-16 w-16
              items-center justify-center
              rounded-full
              bg-[#E51B23]
              shadow-lg
              shadow-[#E51B23]/20
            "
                    >
                        <Check
                            className="h-8 w-8 text-white"
                            strokeWidth={3}
                        />
                    </div>

                    {/* Heading */}
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#E51B23]">
                        Enrollment Confirmed
                    </p>

                    <h1
                        className="
              mt-2 text-3xl font-bold
              tracking-tight
              text-neutral-950
              dark:text-white
              sm:text-4xl
            "
                    >
                        Payment successful!
                    </h1>

                    <p
                        className="
              mx-auto mt-3 max-w-lg
              text-sm leading-6
              text-neutral-500
              dark:text-zinc-400
            "
                    >
                        Your enrollment has been confirmed. You can now schedule your
                        first driving lesson from your dashboard.
                    </p>

                    {/* Enrollment Details */}
                    <div
                        className="
              mx-auto mt-8
              max-w-xl
              overflow-hidden
              rounded-2xl
              border border-neutral-200
              text-left
              dark:border-white/10
            "
                    >
                        {/* Course */}
                        <div className="border-b border-neutral-200 p-5 dark:border-white/10">
                            <p className="text-xs text-neutral-400 dark:text-zinc-500">
                                Enrolled course
                            </p>

                            <p className="mt-1 text-base font-semibold text-neutral-950 dark:text-white">
                                {enrollment.courseName}
                            </p>

                            <p className="mt-1 text-sm text-neutral-500 dark:text-zinc-400">
                                {enrollment.schoolName}
                            </p>
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-1 divide-y divide-neutral-200 dark:divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                            <Detail
                                label="Vehicle"
                                value={enrollment.vehicleType}
                            />

                            <Detail
                                label="Transmission"
                                value={enrollment.transmission}
                            />

                            <Detail
                                label="Duration"
                                value={enrollment.duration}
                            />
                        </div>

                        {/* Payment */}
                        <div
                            className="
                flex items-center
                justify-between
                border-t border-neutral-200
                bg-neutral-50
                px-5 py-4
                dark:border-white/10
                dark:bg-white/[0.03]
              "
                        >
                            <div>
                                <p className="text-xs text-neutral-400 dark:text-zinc-500">
                                    Amount paid
                                </p>

                                <p className="mt-1 text-lg font-bold text-neutral-950 dark:text-white">
                                    ₹{enrollment.amount.toLocaleString("en-IN")}
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-xs text-neutral-400 dark:text-zinc-500">
                                    Enrollment ID
                                </p>

                                <p className="mt-1 text-xs font-medium text-neutral-700 dark:text-zinc-300">
                                    {enrollment.enrollmentId}
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* CTA */}
                    <Button
                        type="button"
                        size="lg"
                        onClick={() => router.push("/learner/dashboard")}
                        className="
              mt-7 h-12 w-full
              max-w-xl gap-2
              rounded-xl
              bg-[#E51B23]
              text-white
              shadow-lg
              shadow-[#E51B23]/20
              hover:bg-[#c4161c]
              hover:shadow-xl
              hover:shadow-[#E51B23]/25
            "
                    >
                        Go to Dashboard
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </section>
            </div>
        </main>
    );
}

function Detail({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="p-4">
            <p className="text-xs text-neutral-400 dark:text-zinc-500">
                {label}
            </p>

            <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">
                {value}
            </p>
        </div>
    );
}