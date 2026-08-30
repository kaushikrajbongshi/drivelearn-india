"use client";

import { useRouter } from "next/navigation";

import CompleteProfileForm from "@/features/learners/onboarding/complete-profile/components/CompleteProfileForm";
import type { CompleteProfileFormData } from "@/features/learners/onboarding/complete-profile/types/complete-profile";
import { showToast } from "@/lib/toast";

export default function CompleteProfilePage() {
  const router = useRouter();

  // Replace with real values from your auth/session (e.g. useSession, a server component prop, etc.)
  const email = "you@example.com";
  const phone = "9876543210";

  async function handleComplete(data: CompleteProfileFormData) {
    // const res = await saveProfileApi(data);
    // if (!res.ok) throw new Error(res.message ?? "Failed to save profile.");

    console.log(data);
    showToast.success("Profile completed");
    router.push("/learner/onboarding/welcome");
  }

  return <CompleteProfileForm email={email} phone={phone} onComplete={handleComplete} />;
}