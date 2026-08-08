"use client";

import { useRouter } from "next/navigation";

import ChooseSchoolForm from "@/features/learners/onboarding/driving-school/components/ChooseSchoolForm";
import { showToast } from "@/lib/toast";

export default function DrivingSchoolPage() {
  const router = useRouter();

  async function handleContinue(selectedSchoolId: string | null) {
    // const res = await saveSelectedSchoolApi(selectedSchoolId);
    // if (!res.ok) throw new Error(res.message ?? "Failed to save your selection.");

    if (selectedSchoolId) {
      showToast.success("Driving school selected");
    }

    router.push("/learner/onboarding/course-package");
  }

  return <ChooseSchoolForm onContinue={handleContinue} />;
}