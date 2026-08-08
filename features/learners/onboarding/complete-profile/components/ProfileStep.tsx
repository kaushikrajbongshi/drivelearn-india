"use client";

import { useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Camera } from "lucide-react";
import type { CompleteProfileFormData } from "../types/complete-profile";

import { Input } from "@/components/ui/input";
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field";

const inputClass =
    "h-11 rounded-none pl-4 border-0 border-b border-neutral-300 bg-transparent rounded-md text-neutral-900 shadow-none focus-visible:border-emerald-600 focus-visible:ring-0 dark:border-white/15 dark:text-white dark:focus-visible:border-emerald-500";

export default function ProfileStep() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<CompleteProfileFormData>();

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);

    return (
        <div className="space-y-6">
            <Controller
                control={control}
                name="profilePhoto"
                render={({ field }) => (
                    <div className="flex flex-col items-center gap-3">
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-neutral-300 bg-black/[0.02] text-neutral-400 transition-colors hover:border-emerald-600 hover:text-emerald-600 dark:border-white/15 dark:bg-white/5 dark:text-zinc-500 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
                        >
                            {preview ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={preview} alt="Profile preview" className="h-full w-full object-cover" />
                            ) : (
                                <Camera className="h-7 w-7" strokeWidth={1.5} />
                            )}
                        </button>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                field.onChange(file ?? null);
                                if (file) setPreview(URL.createObjectURL(file));
                            }}
                        />

                        <span className="text-xs text-neutral-500 dark:text-zinc-500">
                            Profile Photo (optional)
                        </span>
                    </div>
                )}
            />

            <Field>
                <FieldLabel htmlFor="emergencyContactName" className="text-sm font-medium text-neutral-700 dark:text-zinc-200">
                    Emergency Contact Name
                </FieldLabel>
                <FieldContent>
                    <Input
                        id="emergencyContactName"
                        placeholder="Full name"
                        className={inputClass}
                        {...register("emergencyContactName")}
                    />
                    <FieldError errors={[errors.emergencyContactName]} />
                </FieldContent>
            </Field>

            <Field>
                <FieldLabel htmlFor="emergencyContactNumber" className="text-sm font-medium text-neutral-700 dark:text-zinc-200">
                    Emergency Contact Number
                </FieldLabel>
                <FieldContent>
                    <Input
                        id="emergencyContactNumber"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="9876543210"
                        className={inputClass}
                        {...register("emergencyContactNumber")}
                    />
                    <FieldError errors={[errors.emergencyContactNumber]} />
                </FieldContent>
            </Field>
        </div>
    );
}