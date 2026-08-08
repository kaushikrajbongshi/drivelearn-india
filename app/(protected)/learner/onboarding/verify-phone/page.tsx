"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import PhoneForm from "@/features/learners/onboarding/verify-phone/components/PhoneInput";
import OtpForm from "@/features/learners/onboarding/verify-phone/components/OtpForm";
import { showToast } from "@/lib/toast";

export default function VerifyPhonePage() {
    const router = useRouter();
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [phone, setPhone] = useState("");

    async function handlePhoneSubmit(phoneNumber: string) {
        // const res = await sendOtpApi(phoneNumber);
        // if (!res.ok) throw new Error(res.message ?? "Failed to send verification code.");

        setPhone(phoneNumber);
        setStep("otp");
        showToast.success("Verification code sent");
    }

    function handleBack() {
        setStep("phone");
    }

    async function handleOtpSubmit(otp: string) {
        // const res = await verifyOtpApi(phone, otp);
        // if (!res.ok) throw new Error(res.message ?? "Invalid code. Please try again.");

        showToast.success("Phone verified");
        router.push("/learner/onboarding/complete-profile");
    }

    return (
        <AnimatePresence mode="wait">
            {step === "phone" ? (
                <motion.div
                    key="phone"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.25 }}
                    className="w-full"
                >
                    <PhoneForm onSubmit={handlePhoneSubmit} />
                </motion.div>
            ) : (
                <motion.div
                    key="otp"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.25 }}
                    className="w-full"
                >
                    <OtpForm phone={phone} onBack={handleBack} onSubmit={handleOtpSubmit} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}