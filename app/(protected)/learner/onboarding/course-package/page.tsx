"use client";

import { useRouter } from "next/navigation";

import CoursePackageForm from "@/features/learners/onboarding/course-package/components/CoursePackageForm";
import { showToast } from "@/lib/toast";

export default function CoursePackagePage() {
  const router = useRouter();

  async function handleContinue(selectedPackageId: string | null) {
    // const res = await saveSelectedPackageApi(selectedPackageId);
    // if (!res.ok) throw new Error(res.message ?? "Failed to save your selection.");

    if (selectedPackageId) {
      showToast.success("Course package selected");
    }

    router.push("/learner/onboarding/payment");
  }

  async function handleSkip() {
    router.push("/learner/onboarding/payment");
  }

  return <CoursePackageForm onContinue={handleContinue} onSkip={handleSkip} />;
}