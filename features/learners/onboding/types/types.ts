export type StepId =
  | "email"
  | "phone"
  | "profile"
  | "school"
  | "package"
  | "payment"
  | "done";

export interface Step {
  id: StepId;
  title: string;
  description: string;
  icon: React.ReactNode;
  skippable?: boolean;
}