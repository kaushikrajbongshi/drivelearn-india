import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, {
        message: "Full name must be at least 3 characters.",
      })
      .max(50, {
        message: "Full name cannot exceed 50 characters.",
      }),

    email: z
      .string()
      .trim()
      .min(1, {
        message: "Email is required.",
      })
      .email({
        message: "Please enter a valid email address.",
      }),

    password: z
      .string()
      .min(1, {
        message: "Password is required.",
      })
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number.",
      }),

    confirmPassword: z.string().min(1, {
      message: "Please confirm your password.",
    }),

    role: z.enum(["learner", "owner"], {
      message: "Please select an account type.",
    }),

    terms: z.boolean().refine((value) => value, {
      message: "You must accept the Terms & Privacy Policy.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Please enter a valid email address.",
    }),

  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Please enter a valid email address.",
    }),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export const verifyOtpSchema = z.object({
  otp: z
    .string()
    .trim()
    .length(6, {
      message: "Please enter the 6-digit verification code.",
    })
    .regex(/^\d+$/, {
      message: "OTP must contain only numbers.",
    }),
});

export type VerifyOtpFormData = z.infer<typeof verifyOtpSchema>;

export const phoneSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
});

export type PhoneSchema = z.infer<typeof phoneSchema>;