export interface SchoolAddress {
  line: string;
  area: string;
  city: string;
  state: string;
  pinCode: string;
}

export interface SchoolCourse {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  vehicleType: "2 Wheeler" | "4 Wheeler";
  transmission: "Manual" | "Automatic";
}

export interface SchoolInstructor {
  id: string;
  name: string;
  experience: number;
  rating: number;
}

export interface SchoolVehicle {
  id: string;
  name: string;
  transmission: "Manual" | "Automatic";
}

export interface SchoolReview {
  id: string;
  learnerName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface DrivingSchool {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  distance: number;
  startingPrice: number;
  address: SchoolAddress;
  phone: string;
  courses: SchoolCourse[];
  instructors: SchoolInstructor[];
  vehicles: SchoolVehicle[];
  reviews: SchoolReview[];
  verified: boolean;
}