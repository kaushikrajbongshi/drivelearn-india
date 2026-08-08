import WelcomeSummary from "@/features/learners/onboarding/welcome/components/WelcomeSummary";
import { getOnboardingSummary } from "@/features/learners/onboarding/welcome/data/mockSummary";

export default function WelcomePage() {
  const summary = getOnboardingSummary();
  return <WelcomeSummary summary={summary} />;
}