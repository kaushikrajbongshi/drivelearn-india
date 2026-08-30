"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import OrderSummary from "@/components/landing/payment/components/OrderSummary";
import PaymentHeader from "@/components/landing/payment/components/PaymentHeader";
import PriceBreakdown from "@/components/landing/payment/components/PriceBreakdown";

import { schoolsData } from "@/components/landing/schools/data/schoolsData";


export default function PaymentPage() {
    const router = useRouter();

    const school = schoolsData[0];

    const selectedCourse = school.courses[0];

    const platformFee = 0;
    const discount = 0;



    return (
        <main
            className="
        min-h-screen
        bg-white
        text-neutral-950
        dark:bg-[#0d0d0d]
        dark:text-white
      "
        >
            <div
                className="
          mx-auto w-full max-w-7xl
          px-4 py-8
          sm:px-6
          lg:px-8 lg:py-12
        "
            >
                {/* Header */}
                <PaymentHeader
                    schoolName={school.name}
                    courseName={selectedCourse.name}
                />

                {/* Checkout */}
                <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
                    {/* Left */}
                    <div className="space-y-6">
                        <OrderSummary
                            school={school}
                            course={selectedCourse}
                        />

                    </div>

                    {/* Right */}
                    <PriceBreakdown
                        courseFee={selectedCourse.price}
                        platformFee={platformFee}
                        discount={discount}
                    />

                </div>
            </div>
        </main>
    );
}