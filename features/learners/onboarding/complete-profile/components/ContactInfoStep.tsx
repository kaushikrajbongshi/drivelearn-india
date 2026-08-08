"use client";

import { useFormContext } from "react-hook-form";
import type { CompleteProfileFormData } from "../types/complete-profile";
import { Input } from "@/components/ui/input";
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { CheckCircle2 } from "lucide-react";

const readOnlyClass =
    "flex h-11 items-center pl-4 rounded-md justify-between border-b border-neutral-200 text-neutral-500 dark:border-white/10 dark:text-zinc-400";

const inputClass =
    "h-11 rounded-none pl-4 border-0 border-b border-neutral-300 bg-transparent rounded-md text-neutral-900 shadow-none focus-visible:border-emerald-600 focus-visible:ring-0 dark:border-white/15 dark:text-white dark:focus-visible:border-emerald-500";

interface ContactInfoStepProps {
    email: string;
    phone: string;
}

export default function ContactInfoStep({ email, phone }: ContactInfoStepProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext<CompleteProfileFormData>();

    return (
        <div className="space-y-6">
            <Field>
                <FieldLabel className="text-sm font-medium text-neutral-700 dark:text-zinc-200">Email</FieldLabel>
                <FieldContent>
                    <div className={readOnlyClass}>
                        <span>{email}</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                </FieldContent>
            </Field>

            <Field>
                <FieldLabel className="text-sm font-medium text-neutral-700 dark:text-zinc-200">Phone Number</FieldLabel>
                <FieldContent>
                    <div className={readOnlyClass}>
                        <span>+91 {phone}</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                </FieldContent>
            </Field>

            <Field>
                <FieldLabel htmlFor="alternatePhone" className="text-sm font-medium text-neutral-700 dark:text-zinc-200">
                    Alternate Phone <span className="text-neutral-400 dark:text-zinc-500">(optional)</span>
                </FieldLabel>
                <FieldContent>
                    <Input
                        id="alternatePhone"
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="9876543210"
                        className={inputClass}
                        {...register("alternatePhone")}
                    />
                    <FieldError errors={[errors.alternatePhone]} />
                </FieldContent>
            </Field>
        </div>
    );
}