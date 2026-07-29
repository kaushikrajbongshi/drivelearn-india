export type InstructorStatus = "active" | "on_leave" | "suspended";

export type InstructorGender = "male" | "female" | "other";

export interface Instructor {
  id: string;

  avatar: string;

  name: string;
  email: string;
  phone: string;

  gender: InstructorGender;
  dateOfBirth: string;

  licenseNumber: string;
  licenseExpiry: string;

  experience: number;

  schoolId: string;
  schoolName: string;

  state: string;
  city: string;
  address: string;
  landmark: string;
  pincode: string;

  totalLearners: number;

  status: InstructorStatus;

  joinedAt: string;
  lastActive: string;
}
