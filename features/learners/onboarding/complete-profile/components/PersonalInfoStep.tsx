"use client";

import { Controller, useFormContext } from "react-hook-form";
import type { CompleteProfileFormData } from "../types/complete-profile";

import { Input } from "@/components/ui/input";
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const inputClass =
    "h-11 rounded-none pl-4 border-0 border-b border-neutral-300 bg-transparent rounded-md text-neutral-900 shadow-none focus-visible:border-emerald-600 focus-visible:ring-0 dark:border-white/15 dark:text-white dark:focus-visible:border-emerald-500";

export default function PersonalInfoStep() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<CompleteProfileFormData>();

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <Field>
                    <FieldLabel htmlFor="firstName" className="text-sm font-medium text-neutral-700 dark:text-zinc-200">
                        First Name
                    </FieldLabel>
                    <FieldContent>
                        <Input id="firstName" placeholder="First name" className={inputClass} {...register("firstName")} />
                        <FieldError errors={[errors.firstName]} />
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel htmlFor="lastName" className="text-sm font-medium text-neutral-700 dark:text-zinc-200">
                        Last Name
                    </FieldLabel>
                    <FieldContent>
                        <Input id="lastName" placeholder="Last name" className={inputClass} {...register("lastName")} />
                        <FieldError errors={[errors.lastName]} />
                    </FieldContent>
                </Field>
            </div>

            <Field>
                <FieldLabel htmlFor="dateOfBirth" className="text-sm font-medium text-neutral-700 dark:text-zinc-200">
                    Date of Birth
                </FieldLabel>
                <FieldContent>
                    <Input id="dateOfBirth" type="date" className={inputClass} {...register("dateOfBirth")} />
                    <FieldError errors={[errors.dateOfBirth]} />
                </FieldContent>
            </Field>

            <Field>
                <FieldLabel className="text-sm font-medium text-neutral-700 dark:text-zinc-200">Gender</FieldLabel>
                <FieldContent>
                    <Controller
                        control={control}
                        name="gender"
                        render={({ field }) => (
                            <Select value={field.value ?? ""} onValueChange={field.onChange}>
                                <SelectTrigger className={inputClass}>
                                    <SelectValue placeholder="Select gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <FieldError errors={[errors.gender]} />
                </FieldContent>
            </Field>
        </div>
    );
}