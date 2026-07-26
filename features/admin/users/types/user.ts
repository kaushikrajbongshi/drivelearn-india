export type UserRole =
  | "super_admin"
  | "owner"
  | "instructor"
  | "learner";

export type UserStatus =
  | "active"
  | "inactive"
  | "pending"
  | "blocked";

export interface User {
  id: string;

  name: string;

  email: string;

  phone: string;

  avatar?: string;

  role: UserRole;

  status: UserStatus;

  joinedAt: string;

  lastActive: string;
}