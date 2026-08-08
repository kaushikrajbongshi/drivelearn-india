import type { DrivingSchool } from "../types/school";

// TODO: replace with a real API call — getDrivingSchools(location, filters)
export const mockSchools: DrivingSchool[] = [
  {
    id: "1",
    name: "Guwahati Safe Drive Academy ",
    address: {
      line: "GS Road, Christian Basti",
      city: "Guwahati",
      state: "Assam",
      pinCode: "781005",
    },
    distanceKm: 2.4,
    rating: 4.6,
    reviewCount: 128,
    priceStartingFrom: 3500,
    courses: ["2-Wheeler", "4-Wheeler", "Refresher"],
    contactPhone: "9800011122",
    description:
      "Government-certified driving school with experienced instructors and a modern training fleet. Offers flexible timing including early morning and weekend slots.",
  },
  {
    id: "2",
    name: "Northeast Motor Training School",
    address: {
      line: "Zoo Road",
      city: "Guwahati",
      state: "Assam",
      pinCode: "781024",
    },
    distanceKm: 4.1,
    rating: 4.3,
    reviewCount: 76,
    priceStartingFrom: 3000,
    courses: ["4-Wheeler", "Highway Driving"],
    contactPhone: "9800033344",
    description:
      "Specializes in highway and long-distance driving confidence courses, in addition to standard licensing prep.",
  },
  {
    id: "3",
    name: "City Wheels Driving Institute",
    address: {
      line: "Six Mile",
      city: "Guwahati",
      state: "Assam",
      pinCode: "781022",
    },
    distanceKm: 6.8,
    rating: 4.8,
    reviewCount: 203,
    priceStartingFrom: 4000,
    courses: ["2-Wheeler", "4-Wheeler", "Commercial License Prep"],
    contactPhone: "9800055566",
    description:
      "Highest-rated school in the area with dual-control training cars and a female-instructor option available on request.",
  },
  {
    id: "4",
    name: "City Wheels Driving Institute Delhi",
    address: {
      line: "Six Mile",
      city: "Delhi",
      state: "Delhi",
      pinCode: "783410",
    },
    distanceKm: 6.8,
    rating: 4.8,
    reviewCount: 203,
    priceStartingFrom: 4000,
    courses: ["2-Wheeler", "4-Wheeler", "Commercial License Prep"],
    contactPhone: "9800055566",
    description:
      "Highest-rated school in the area with dual-control training cars and a female-instructor option available on request.",
  },
];
