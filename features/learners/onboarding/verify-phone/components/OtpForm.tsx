"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, MessageSquareText } from "lucide-react";

import {
  verifyOtpSchema,
  type VerifyOtpFormData,
} from "@/lib/validations/auth";
import { showToast } from "@/lib/toast";

import {
  Field,
  FieldContent,
  FieldError,
} from "@/components/ui/field";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Button } from "@/components/ui/button";

import ResendTimer from "./ResendTimer";

interface OtpFormProps {
  phone: string;
  onSubmit: (otp: string) => Promise<void> | void;
  onBack: () => void;
}

export default function OtpForm({ phone, onSubmit, onBack }: OtpFormProps) {
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<VerifyOtpFormData>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: { otp: "" },
  });

  async function submit(data: VerifyOtpFormData) {
    try {
      await onSubmit(data.otp);
    } catch (error) {
      showToast.error(
        error instanceof Error
          ? error.message
          : "Invalid code. Please try again."
      );
      resetField("otp");
    }
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-md flex-col px-6 py-8 sm:px-0">
      {/* Illustration slot — swap for your own SVG/Lottie asset */}
      <div className="relative mx-auto mb-10 flex h-30 w-34 items-center justify-center sm:h-32 sm:w-32">
        <div className="absolute inset-0 rounded-full bg-emerald-100 dark:bg-emerald-500/10" />
        <div className="absolute -right-2 -top-2 h-12 w-12 rounded-full bg-emerald-600/90 dark:bg-emerald-500/80" />
        <MessageSquareText
          className="relative h-16 w-16 text-emerald-600 dark:text-emerald-400"
          strokeWidth={1.5}
        />
      </div>

      <h1 className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white">
        OTP Verification
      </h1>

      <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-zinc-400">
        Enter the verification code sent to{" "}
        <span className="font-medium text-neutral-900 dark:text-zinc-100">
          +91 {phone}
        </span>
      </p>

      <form
        onSubmit={handleSubmit(submit)}
        className="mt-10 flex flex-1 flex-col"
      >
        <Controller
          control={control}
          name="otp"
          render={({ field }) => (
            <Field>
              <FieldContent>
                <InputOTP
                  maxLength={6}
                  value={field.value}
                  disabled={isSubmitting}
                  onChange={(value) => {
                    field.onChange(value);
                    if (value.length === 6) {
                      handleSubmit(submit)();
                    }
                  }}
                  className="w-full justify-start"
                >
                  <InputOTPGroup className="gap-6 sm:gap-3">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="h-12 w-9 rounded-none border-0 border-b-2 border-neutral-300 bg-transparent text-lg font-semibold text-neutral-900 shadow-none focus:border-emerald-600 focus:ring-0 data-[active=true]:border-emerald-600 data-[active=true]:ring-0 dark:border-white/15 dark:text-white dark:focus:border-emerald-500 dark:data-[active=true]:border-emerald-500 sm:w-11"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>

                <FieldError errors={[errors.otp]} />
              </FieldContent>
            </Field>
          )}
        />

        <div className="mt-6">
          <ResendTimer />
        </div>

        <div className="mt-auto flex items-center justify-between pt-10">
          <button
            type="button"
            onClick={onBack}
            disabled={isSubmitting}
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 disabled:opacity-50 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            ← Change number
          </button>
        </div>
      </form>
    </div>
  );
}