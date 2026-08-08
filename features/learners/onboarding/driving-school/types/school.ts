export interface DrivingSchool {
  id: string;
  name: string;
  address: {
    line: string;
    city: string;
    state: string;
    pinCode: string;
  };
  distanceKm: number;
  rating: number;
  reviewCount: number;
  priceStartingFrom: number;
  courses: string[];
  contactPhone: string;
  description: string;
  imageUrl?: string;
}

export type SchoolSortBy = "distance" | "rating" | "price";

export interface SchoolFilters {
  search: string;
  sortBy: SchoolSortBy;
  minRating: number | null;
}
