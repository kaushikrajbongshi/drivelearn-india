"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { completeProfileSteps } from "../data/completeProfileSteps";
import {
    completeProfileSchema,
    completeProfileStepFields,
    type CompleteProfileFormData,
} from "../types/complete-profile";

import AddressStep from "./AddressStep";
import ContactInfoStep from "./ContactInfoStep";
import ExperienceStep from "./ExperienceStep";
import LanguageStep from "./LanguageStep";
import PersonalInfoStep from "./PersonalInfoStep";
import ProfileStep from "./ProfileStep";

import { Button } from "@/components/ui/button";


interface CompleteProfileFormProps {
    email: string;
    phone: string;
    onComplete: (data: CompleteProfileFormData) => Promise<void> | void;
}

const stepComponents = [
    PersonalInfoStep,
    ContactInfoStep,
    AddressStep,
    ProfileStep,
    LanguageStep,
    ExperienceStep,
];

export default function CompleteProfileForm({
    email,
    phone,
    onComplete,
}: CompleteProfileFormProps) {
    const [stepIndex, setStepIndex] = useState(0);

    const methods = useForm<CompleteProfileFormData>({
        resolver: zodResolver(completeProfileSchema),
        mode: "onSubmit",
    });

    const {
        trigger,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const totalSteps = completeProfileSteps.length;
    const isLastStep = stepIndex === totalSteps - 1;
    const StepComponent = stepComponents[stepIndex];
    const meta = completeProfileSteps[stepIndex];

    async function goNext() {
        const fields = completeProfileStepFields[stepIndex];
        const valid = await trigger(fields);
        if (!valid) return;

        if (isLastStep) {
            handleSubmit(async (data) => onComplete(data))();
        } else {
            setStepIndex((i) => i + 1);
        }
    }

    function goBack() {
        if (stepIndex === 0) return;
        setStepIndex((i) => i - 1);
    }

    return (
        <FormProvider {...methods}>
            <div className="mx-auto flex h-full w-full max-w-md flex-col px-6 py-8 sm:px-0">
                {/* Step indicator */}
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wide text-neutral-400 dark:text-zinc-500">
                        Complete Profile
                    </span>
                    <span className="text-xs font-medium text-neutral-400 dark:text-zinc-500">
                        {stepIndex + 1} of {totalSteps}
                    </span>
                </div>

                <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                    <motion.div
                        className="h-full rounded-full bg-emerald-600 dark:bg-emerald-500"
                        initial={false}
                        animate={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={meta.key}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -24 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-1 flex-col"
                    >
                        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                            {meta.title}
                        </h1>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-zinc-400">
                            {meta.description}
                        </p>

                        <div className="mt-8 flex-1">
                            <StepComponent email={email} phone={phone} />
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between">
                    <button
                        type="button"
                        onClick={goBack}
                        className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 disabled:opacity-0 dark:text-zinc-400 dark:hover:text-zinc-200"
                        style={{ visibility: stepIndex === 0 ? "hidden" : "visible" }}
                    >
                        ← Back
                    </button>

                    <Button
                        type="button"
                        size="lg"
                        onClick={goNext}
                        disabled={isSubmitting}
                        className="h-12 min-w-[140px] rounded-full bg-emerald-600 px-8 text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-80 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                    >

                        {isLastStep ? (isSubmitting ? "Saving..." : "Finish") : "Next"}
                    </Button>

                </div>
            </div>
        </FormProvider>
    );
}