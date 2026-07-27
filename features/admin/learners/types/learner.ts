export type LearnerStatus = "active" | "pending" | "completed" | "suspended";

export type LearnerGender = "male" | "female" | "other";

export interface Learner {
  id: string;

  avatar: string;

  name: string;
  email: string;
  phone: string;

  gender: LearnerGender;
  dateOfBirth: string;

  learnerLicenseNumber: string;
  learnerLicenseExpiry: string;

  course: string;

  schoolId: string;
  schoolName: string;

  instructorId: string;
  instructorName: string;

  state: string;
  city: string;
  address: string;
  landmark: string;
  pincode: string;

  theoryProgress: number;
  practicalProgress: number;

  status: LearnerStatus;

  joinedAt: string;
  lastActive: string;
}
