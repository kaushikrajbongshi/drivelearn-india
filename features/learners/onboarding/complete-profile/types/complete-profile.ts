import { z } from "zod";

function isAtLeast16(dob: string) {
  const date = new Date(dob);

  if (Number.isNaN(date.getTime())) {
    return false;
  }

  const age = (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

  return age >= 18;
}

export const completeProfileSchema = z.object({
  // =========================
  // 1. Personal Information
  // =========================
  firstName: z.string().trim().min(1, "First name is required"),

  lastName: z.string().trim().min(1, "Last name is required"),

  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required")
    .refine(isAtLeast16, {
      message: "You must be at least 16 years old",
    }),

  gender: z.enum(["male", "female", "other"], {
    message: "Please select a gender",
  }),

  // =========================
  // 2. Contact Information
  // =========================
  alternatePhone: z
    .string()
    .regex(/^\d{10}$/, "Enter a valid 10-digit mobile number")
    .optional()
    .or(z.literal("")),

  // =========================
  // 3. Address
  // =========================
  state: z.string().trim().min(1, "State is required"),

  city: z.string().trim().min(1, "City is required"),

  pinCode: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit PIN code"),

  fullAddress: z.string().trim().optional(),

  // =========================
  // 4. Profile
  // =========================
  profilePhoto: z.any().optional(),

  emergencyContactName: z
    .string()
    .trim()
    .min(1, "Emergency contact name is required"),

  emergencyContactNumber: z
    .string()
    .regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),

  // =========================
  // 5. Language Preference
  // =========================
  languagePreference: z.enum(
    ["english", "hindi", "assamese", "bengali", "others"],
    {
      message: "Please select your preferred language",
    },
  ),

  // =========================
  // 6. Driving Experience
  // =========================
  drivingExperience: z.enum(
    ["never-driven", "beginner", "basic", "experienced"],
    {
      message: "Please select your driving experience",
    },
  ),
});

export type CompleteProfileFormData = z.infer<typeof completeProfileSchema>;

/**
 * Validation fields for each onboarding step
 */
export const completeProfileStepFields: (keyof CompleteProfileFormData)[][] = [
  // Step 0 - Personal Information
  ["firstName", "lastName", "dateOfBirth", "gender"],

  // Step 1 - Contact Information
  ["alternatePhone"],

  // Step 2 - Address
  ["state", "city", "pinCode", "fullAddress"],

  // Step 3 - Profile
  ["profilePhoto", "emergencyContactName", "emergencyContactNumber"],

  // Step 4 - Language
  ["languagePreference"],

  // Step 5 - Driving Experience
  ["drivingExperience"],
];
