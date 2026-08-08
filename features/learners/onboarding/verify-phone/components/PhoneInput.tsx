"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Car, Loader2, Phone } from "lucide-react";

import { phoneSchema, type PhoneSchema } from "@/lib/validations/auth";
import { showToast } from "@/lib/toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";

interface PhoneFormProps {
    onSubmit: (phone: string) => Promise<void> | void;
}

export default function PhoneForm({ onSubmit }: PhoneFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<PhoneSchema>({
        resolver: zodResolver(phoneSchema),
    });

    async function submit(data: PhoneSchema) {
        try {
            await onSubmit(data.phone);
        } catch (error) {
            showToast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to send verification code. Please try again."
            );
        }
    }

    return (
        <div className="mx-auto flex h-full w-full max-w-md flex-col px-6 py-8 sm:px-0">
            {/* Illustration slot — swap for your own SVG/Lottie asset */}
            <div className="relative mx-auto mb-10 flex h-30 w-34 items-center justify-center sm:h-32 sm:w-32">
                <div className="absolute inset-0 rounded-full bg-emerald-100 dark:bg-emerald-500/10" />
                <div className="absolute -right-2 -top-2 h-12 w-12 rounded-full bg-emerald-600/90 dark:bg-emerald-500/80" />
                <Phone
                    className="relative h-16 w-16 text-emerald-600 dark:text-emerald-400"
                    strokeWidth={1.5}
                />
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white">
                Verify your
                <br />
                phone number
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-zinc-400">
                We'll send a 6-digit code to confirm it's really you.
            </p>

            <form
                onSubmit={handleSubmit(submit)}
                className="mt-10 flex flex-1 flex-col"
            >
                <Field>
                    <FieldLabel htmlFor="phone" className="sr-only">
                        Mobile Number
                    </FieldLabel>

                    <FieldContent>
                        <div className="flex items-center gap-3 border-b border-neutral-300 pb-3 focus-within:border-emerald-600 dark:border-white/15 dark:focus-within:border-emerald-500">
                            <span className="text-base text-neutral-500 dark:text-zinc-400">
                                🇮🇳 +91
                            </span>
                            <span className="h-5 w-px bg-neutral-300 dark:bg-white/15" />
                            <Input
                                id="phone"
                                type="tel"
                                inputMode="numeric"
                                autoComplete="tel-national"
                                placeholder="Mobile number"
                                maxLength={10}
                                className="h-auto flex-1 border-0 bg-transparent p-2 text-base text-neutral-900 shadow-none placeholder:text-neutral-400 focus-visible:ring-0 dark:text-white dark:placeholder:text-zinc-500"
                                {...register("phone")}
                            />
                        </div>

                        <FieldDescription className="mt-2 text-xs text-neutral-500 dark:text-zinc-500">
                            We'll send a 6-digit verification code to this number.
                        </FieldDescription>

                        <FieldError errors={[errors.phone]} />
                    </FieldContent>
                </Field>

                <div className="mt-auto flex justify-end pt-10">
                    <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="h-12 min-w-[140px] rounded-full bg-emerald-600 px-8 text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-80 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Next"
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}