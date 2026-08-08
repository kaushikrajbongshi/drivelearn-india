import OnboardingLayout from "@/features/learners/onboarding/components/OnboardingLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <OnboardingLayout>{children}</OnboardingLayout>;
}