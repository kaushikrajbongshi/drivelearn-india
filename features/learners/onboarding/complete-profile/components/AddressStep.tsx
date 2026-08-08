"use client";

import { Controller, useFormContext } from "react-hook-form";
import type { CompleteProfileFormData } from "../types/complete-profile";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Replace with your full state list, or fetch from an API
const INDIAN_STATES = [
    "Assam",
    "West Bengal",
    "Meghalaya",
    "Delhi",
    "Maharashtra",
    "Karnataka",
    "Tamil Nadu",
    // ...add the rest
];

const inputClass =
    "h-11 rounded-none pl-4 border-0 border-b border-neutral-300 bg-transparent rounded-md text-neutral-900 shadow-none focus-visible:border-emerald-600 focus-visible:ring-0 dark:border-white/15 dark:text-white dark:focus-visible:border-emerald-500";

export default function AddressStep() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<CompleteProfileFormData>();

    return (
        <div className="space-y-6">
            <Field>
                <FieldLabel className="text-sm font-medium text-neutral-700 dark:text-zinc-200">State</FieldLabel>
                <FieldContent>
                    <Controller
                        control={control}
                        name="state"
                        render={({ field }) => (
                            <Select value={field.value ?? ""} onValueChange={field.onChange}>
                                <SelectTrigger className={inputClass}>
                                    <SelectValue placeholder="Select state" />
                                </SelectTrigger>
                                <SelectContent>
                                    {INDIAN_STATES.map((state) => (
                                        <SelectItem key={state} value={state}>
                                            {state}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <FieldError errors={[errors.state]} />
                </FieldContent>
            </Field>

            <div className="grid grid-cols-2 gap-4">
                <Field>
                    <FieldLabel htmlFor="city" className="text-sm font-medium text-neutral-700 dark:text-zinc-200">
                        City
                    </FieldLabel>
                    <FieldContent>
                        <Input id="city" placeholder="City" className={inputClass} {...register("city")} />
                        <FieldError errors={[errors.city]} />
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel htmlFor="pinCode" className="text-sm font-medium text-neutral-700 dark:text-zinc-200">
                        PIN Code
                    </FieldLabel>
                    <FieldContent>
                        <Input
                            id="pinCode"
                            inputMode="numeric"
                            maxLength={6}
                            placeholder="781001"
                            className={inputClass}
                            {...register("pinCode")}
                        />
                        <FieldError errors={[errors.pinCode]} />
                    </FieldContent>
                </Field>
            </div>

            <Field>
                <FieldLabel htmlFor="fullAddress" className="text-sm font-medium text-neutral-700 dark:text-zinc-200">
                    Full Address <span className="text-neutral-400 dark:text-zinc-500">(optional)</span>
                </FieldLabel>
                <FieldContent>
                    <Textarea
                        id="fullAddress"
                        placeholder="House no., street, landmark"
                        rows={3}
                        className="resize-none rounded-xl border-neutral-300 bg-transparent text-neutral-900 shadow-none focus-visible:border-emerald-600 focus-visible:ring-0 dark:border-white/15 dark:text-white dark:focus-visible:border-emerald-500"
                        {...register("fullAddress")}
                    />
                    <FieldDescription className="text-xs text-neutral-500 dark:text-zinc-500">
                        You can update this later from your profile.
                    </FieldDescription>
                </FieldContent>
            </Field>
        </div>
    );
}