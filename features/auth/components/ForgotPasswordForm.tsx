"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Loader2, Mail } from "lucide-react";

import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // TODO: Call forgot password API
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Forgot Password?"
        description="Enter your email address and we'll send you a password reset link."
      />

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address
          </Label>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="h-12 pl-10"
            />
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="h-12 w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Reset Link"
          )}
        </Button>
      </form>

      <div className="mt-8 flex justify-center">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="size-4" />
          Back to Login
        </Link>
      </div>
    </AuthCard>
  );
}