export type StepStatus = "completed" | "current" | "upcoming";

export interface OnboardingStep {
  id: number;
  key:
    | "verify-email"
    | "verify-phone"
    | "complete-profile"
    | "welcome";

  title: string;
  description: string;

  path: string;

  optional?: boolean;
}

export interface SidebarStep extends OnboardingStep {
  status: StepStatus;
}
