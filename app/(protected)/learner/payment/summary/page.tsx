"use client";

import { useMemo, useState } from "react";
import { Info } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { schoolsData } from "@/components/landing/schools/data/schoolsData";
import { Button } from "@/components/ui/button";

export default function PaymentSummaryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const schoolId = searchParams.get("schoolId");
  const courseId = searchParams.get("courseId");

  const [agreed, setAgreed] = useState(false);

  const school = useMemo(() => {
    if (!schoolId) return null;

    return (
      schoolsData.find((school) => school.id === schoolId) ?? null
    );
  }, [schoolId]);

  const course = useMemo(() => {
    if (!school || !courseId) return null;

    return (
      school.courses.find((course) => course.id === courseId) ?? null
    );
  }, [school, courseId]);

  if (!school || !course) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <p className="text-sm text-neutral-500 dark:text-zinc-400">
          Course information not found.
        </p>
      </div>
    );
  }

  const coursePrice = course.price;
  const platformFee = 0;
  const tax = 0;
  const total = coursePrice + platformFee + tax;

  const handleProceed = () => {
    if (!agreed) return;

    router.push(
      `/learner/payment?schoolId=${school.id}&courseId=${course.id}`
    );
  };

  return (
    <div className=" bg-white px-4 py-8 dark:bg-neutral-950 sm:px-6 sm:py-12">
      <main className="mx-auto w-full max-w-xl">
        {/* Summary Card */}
        <div
          className="
            rounded-[28px]
            border
            border-neutral-200
            bg-neutral-50
            p-6
            shadow-sm
            dark:border-white/10
            dark:bg-white/[0.035]
            sm:p-8
          "
        >
          {/* Heading */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white">
              Payment Summary
            </h1>
          </div>

          {/* Course */}
          <div className="mt-8">
            <p className="text-sm text-neutral-500 dark:text-zinc-400">
              Selected course
            </p>

            <h2 className="mt-2 text-xl font-semibold text-neutral-950 dark:text-white">
              {course.name}
            </h2>

            <p className="mt-1 text-sm text-neutral-500 dark:text-zinc-400">
              {school.name}
            </p>
          </div>

          {/* Price Details */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-neutral-500 dark:text-zinc-400">
                Course fee
              </span>

              <span className="font-medium text-neutral-900 dark:text-zinc-200">
                ₹{coursePrice.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-neutral-500 dark:text-zinc-400">
                Platform fee
              </span>

              <span className="font-medium text-neutral-900 dark:text-zinc-200">
                ₹{platformFee.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-neutral-500 dark:text-zinc-400">
                Tax
              </span>

              <span className="font-medium text-neutral-900 dark:text-zinc-200">
                ₹{tax.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Total */}
          <div className="my-6 border-t border-neutral-200 pt-5 dark:border-white/10">
            <div className="flex items-center justify-between gap-4">
              <span className="font-semibold text-neutral-950 dark:text-white">
                Total due today
              </span>

              <span className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Information */}
          <div
            className="
              flex
              gap-3
              rounded-2xl
              border
              border-neutral-200
              bg-white
              p-4
              dark:border-white/10
              dark:bg-black/20
            "
          >
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-neutral-500 dark:text-zinc-400" />

            <p className="text-sm leading-6 text-neutral-600 dark:text-zinc-400">
              Your payment will be securely processed. You will be
              enrolled in <span className="font-medium">{course.name}</span>{" "}
              after successful payment.
            </p>
          </div>

          {/* Agreement */}
          <label className="mt-6 flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(event) => setAgreed(event.target.checked)}
              className="
                mt-1
                h-4
                w-4
                shrink-0
                cursor-pointer
                rounded
                border-neutral-300
                accent-emerald-600
                dark:border-white/20
              "
            />

            <span className="text-sm leading-6 text-neutral-600 dark:text-zinc-400">
              I agree to the enrollment terms and conditions and authorize
              the payment of{" "}
              <span className="font-medium text-neutral-900 dark:text-zinc-200">
                ₹{total.toLocaleString("en-IN")}
              </span>
              .
            </span>
          </label>

          {/* Button */}
          <Button
            type="button"
            size="lg"
            disabled={!agreed}
            onClick={handleProceed}
            className="
              mt-7
              h-12
              w-full
              rounded-xl
              bg-emerald-600
              text-white
              hover:bg-emerald-700
              disabled:cursor-not-allowed
              disabled:opacity-50
              dark:bg-emerald-400
              dark:text-neutral-950
              dark:hover:bg-emerald-300
            "
          >
            Proceed to Payment
          </Button>
        </div>
      </main>
    </div>
  );
}