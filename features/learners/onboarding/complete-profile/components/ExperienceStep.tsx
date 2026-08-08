"use client";

import { Controller, useFormContext } from "react-hook-form";
import type { CompleteProfileFormData } from "../types/complete-profile";

import { Field, FieldContent, FieldDescription, FieldError } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const EXPERIENCE_OPTIONS = [
  { value: "never-driven", label: "Never Driven" },
  { value: "beginner", label: "Beginner" },
  { value: "basic", label: "Basic Experience" },
  { value: "experienced", label: "Experienced" },
] as const;

export default function ExperienceStep() {
  const {
    control,
    formState: { errors },
  } = useFormContext<CompleteProfileFormData>();

  return (
    <Controller
      control={control}
      name="drivingExperience"
      render={({ field }) => (
        <Field>
          <FieldContent>
            <RadioGroup value={field.value ?? ""} onValueChange={field.onChange} className="gap-3">
              {EXPERIENCE_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  htmlFor={option.value}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-700 transition-colors has-[[data-state=checked]]:border-emerald-600 has-[[data-state=checked]]:bg-emerald-50 dark:border-white/10 dark:text-zinc-300 dark:has-[[data-state=checked]]:border-emerald-500 dark:has-[[data-state=checked]]:bg-emerald-500/10"
                >
                  <RadioGroupItem value={option.value ?? ""} id={option.value} />
                  {option.label}
                </label>
              ))}
            </RadioGroup>

            <FieldDescription className="mt-4 text-xs text-neutral-500 dark:text-zinc-500">
              This helps the driving school assign an appropriate course.
            </FieldDescription>

            <FieldError errors={[errors.drivingExperience]} />
          </FieldContent>
        </Field>
      )}
    />
  );
}