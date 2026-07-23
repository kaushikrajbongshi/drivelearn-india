import type { School } from "./school-types";

export const schools: School[] = [
  {
    id: 1,
    name: "DriveMaster Academy",
    city: "Guwahati",
    state: "Assam",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviews: 124,
    price: "₹6,000",
    vehicleType: "Manual & Automatic",
    verified: true,
  },
  {
    id: 2,
    name: "Smart Wheels Driving School",
    city: "Shillong",
    state: "Meghalaya",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviews: 96,
    price: "₹5,500",
    vehicleType: "Automatic",
    verified: true,
  },
  {
    id: 3,
    name: "Safe Drive Institute",
    city: "Kolkata",
    state: "West Bengal",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
    reviews: 203,
    price: "₹7,200",
    vehicleType: "Manual",
    verified: true,
  },
  {
    id: 4,
    name: "Elite Driving School",
    city: "Bangalore",
    state: "Karnataka",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
    rating: 5.0,
    reviews: 178,
    price: "₹8,000",
    vehicleType: "Manual & Automatic",
    verified: true,
  },
];