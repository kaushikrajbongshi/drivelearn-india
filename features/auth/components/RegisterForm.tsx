"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, GraduationCap, School } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthCard from "@/components/auth/AuthCard";
import AuthFooter from "@/components/auth/AuthFooter";
import AuthHeader from "@/components/auth/AuthHeader";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { registerSchema, type RegisterFormData } from "@/lib/validations/auth";
import { Loader2 } from "lucide-react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "learner",
      terms: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
    // API call will come here
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Create Account"
        description="Join DriveLearn India and begin your driving journey."
      />

      <Button
        type="button"
        variant="outline"
        className="mb-5 h-11 w-full rounded-xl border-slate-200 text-sm font-medium dark:border-slate-700"
      >
        <FcGoogle className="mr-2.5 size-5" />
        Continue with Google
      </Button>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-3 text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-sm font-medium">
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="John Doe"
            className="h-11 rounded-xl"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-xs text-destructive">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="h-11 rounded-xl"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="h-11 rounded-xl pr-10"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="h-11 rounded-xl pr-10"
                {...register("confirmPassword")}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="grid grid-cols-2 gap-3"
            >
              <Label
                htmlFor="learner"
                className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 transition-all ${field.value === "learner"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground"
                  }`}
              >
                <RadioGroupItem
                  value="learner"
                  id="learner"
                  className="sr-only"
                />
                <GraduationCap className="size-4" />
                Learner
              </Label>

              <Label
                htmlFor="owner"
                className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 transition-all ${field.value === "owner"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground"
                  }`}
              >
                <RadioGroupItem
                  value="owner"
                  id="owner"
                  className="sr-only"
                />
                <School className="size-4" />
                School Owner
              </Label>
            </RadioGroup>
          )}
        />

        <div className="space-y-1.5">
          <div className="flex items-start gap-2.5 pt-1">
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="terms"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-0.5"
                />
              )}
            />
            <Label
              htmlFor="terms"
              className="cursor-pointer text-sm font-normal leading-5 text-slate-500 dark:text-slate-400"
            >
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-medium text-[#4F46E5] hover:underline dark:text-indigo-300"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-medium text-[#4F46E5] hover:underline dark:text-indigo-300"
              >
                Privacy Policy
              </Link>
              .
            </Label>
          </div>
          {errors.terms && (
            <p className="pl-7 text-xs text-destructive">
              {errors.terms.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="h-12 w-full"
        >
          {isSubmitting && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Create Account
        </Button>
      </form>

      <AuthFooter text="Already have an account?" linkText="Sign In" href="/login" />
    </AuthCard>
  );
}