"use client";

import { Controller, useFormContext } from "react-hook-form";
import type { CompleteProfileFormData } from "../types/complete-profile";

import { Field, FieldContent, FieldDescription, FieldError } from "@/components/ui/field";
import { cn } from "@/lib/utils";

const LANGUAGES = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "assamese", label: "Assamese" },
    { value: "bengali", label: "Bengali" },
    { value: "others", label: "Others" },
] as const;

export default function LanguageStep() {
    const {
        control,
        formState: { errors },
    } = useFormContext<CompleteProfileFormData>();

    return (
        <div className="space-y-6">
            <Controller
                control={control}
                name="languagePreference"
                render={({ field }) => (
                    <Field>
                        <FieldContent>
                            <div className="grid grid-cols-2 gap-3">
                                {LANGUAGES.map((lang) => (
                                    <button
                                        key={lang.value}
                                        type="button"
                                        onClick={() => field.onChange(lang.value)}
                                        className={cn(
                                            "rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors",
                                            field.value === lang.value
                                                ? "border-emerald-600 bg-emerald-50 text-emerald-700 dark:border-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400"
                                                : "border-neutral-200 text-neutral-700 hover:border-neutral-300 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/20"
                                        )}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>

                            <FieldDescription className="mt-4 text-xs text-neutral-500 dark:text-zinc-500">
                                This helps match learners with instructors.
                            </FieldDescription>

                            <FieldError errors={[errors.languagePreference]} />
                        </FieldContent>
                    </Field>
                )}
            />
        </div>
    );
}