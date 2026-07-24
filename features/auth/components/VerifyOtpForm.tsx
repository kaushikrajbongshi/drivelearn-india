"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";

import { Button } from "@/components/ui/button";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

import {
    verifyOtpSchema,
    type VerifyOtpFormData,
} from "@/lib/validations/auth";

export default function VerifyOtpForm() {
    const router = useRouter();

    const [timeLeft, setTimeLeft] = useState(120);

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<VerifyOtpFormData>({
        resolver: zodResolver(verifyOtpSchema),
        defaultValues: {
            otp: "",
        },
    });

    useEffect(() => {
        if (timeLeft === 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const minute = Math.floor(seconds / 60);
        const second = seconds % 60;

        return `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
    };

    async function onSubmit(data: VerifyOtpFormData) {
        console.log(data);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        router.push("/reset-password");
    }

    function handleResendOtp() {
        console.log("Resend OTP");

        setTimeLeft(60);
    }

    return (
        <AuthCard>
            <div className="mb-4">
                <Link
                    href="/login"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                    <ArrowLeft className="size-4" />
                    Back
                </Link>
            </div>

            <AuthHeader
                title="Verify Email"
                description={
                    <>
                        Enter the 6-digit verification code sent to
                        <br />
                        <span className="font-medium text-foreground">
                            john@example.com
                        </span>
                    </>
                }
            />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
            >
                <div className="space-y-2">
                    <Controller
                        name="otp"
                        control={control}
                        render={({ field }) => (
                            <InputOTP
                                maxLength={6}
                                value={field.value}
                                onChange={field.onChange}
                            >
                                <InputOTPGroup className="mx-auto gap-2.5">
                                    <InputOTPSlot
                                        index={0}
                                        className="size-12 rounded-xl"
                                    />
                                    <InputOTPSlot
                                        index={1}
                                        className="size-12 rounded-xl"
                                    />
                                    <InputOTPSlot
                                        index={2}
                                        className="size-12 rounded-xl"
                                    />
                                    <InputOTPSlot
                                        index={3}
                                        className="size-12 rounded-xl"
                                    />
                                    <InputOTPSlot
                                        index={4}
                                        className="size-12 rounded-xl"
                                    />
                                    <InputOTPSlot
                                        index={5}
                                        className="size-12 rounded-xl"
                                    />
                                </InputOTPGroup>
                            </InputOTP>
                        )}
                    />

                    {errors.otp && (
                        <p className="text-center text-sm text-destructive">
                            {errors.otp.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2 text-center">
                    <p className="text-sm text-muted-foreground">
                        Didn't receive the code?
                    </p>

                    {timeLeft > 0 ? (
                        <p className="font-medium text-primary">
                            Resend in {formatTime(timeLeft)}
                        </p>
                    ) : (
                        <Button
                            type="button"
                            variant="link"
                            className="p-0"
                            onClick={handleResendOtp}
                        >
                            Resend Code
                        </Button>
                    )}
                </div>

                <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="h-12 w-full"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 size-4 animate-spin" />
                            Verifying...
                        </>
                    ) : (
                        "Verify Email"
                    )}
                </Button>
            </form>
        </AuthCard>
    );
}