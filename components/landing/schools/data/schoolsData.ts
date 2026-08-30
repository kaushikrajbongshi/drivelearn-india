import type { DrivingSchool } from "../types/school";

export const schoolsData: DrivingSchool[] = [
  {
    id: "school-1",
    name: "Guwahati Safe Drive Academy",
    image: "/school/car-school.webp",
    description:
      "A learner-focused driving school offering structured training for beginners and experienced learners with trained instructors and well-maintained vehicles.",
    rating: 4.6,
    reviewCount: 128,
    distance: 2.4,
    startingPrice: 3500,
    verified: true,

    address: {
      line: "GS Road",
      area: "Christian Basti",
      city: "Guwahati",
      state: "Assam",
      pinCode: "781005",
    },

    phone: "9876543210",

    courses: [
      {
        id: "course-5",
        name: "Complete 2 Wheeler Course",
        description:
          "Complete practical training for two-wheelers including road awareness, traffic handling and test preparation.",
        duration: "15 hours",
        price: 2500,
        vehicleType: "2 Wheeler",
        transmission: "Manual",
      },
      {
        id: "course-6",
        name: "Complete 4 Wheeler Course",
        description:
          "Complete practical training including city roads, highway driving and test preparation.",
        duration: "20 hours",
        price: 4000,
        vehicleType: "4 Wheeler",
        transmission: "Manual",
      },
      {
        id: "course-7",
        name: "Highway 4 Wheeler Training",
        description:
          "Focused highway and long-distance driving practice for confident road driving.",
        duration: "10 hours",
        price: 2800,
        vehicleType: "4 Wheeler",
        transmission: "Manual",
      },
    ],

    instructors: [
      {
        id: "instructor-1",
        name: "Rakesh Sharma",
        experience: 8,
        rating: 4.8,
      },
      {
        id: "instructor-2",
        name: "Amit Das",
        experience: 6,
        rating: 4.6,
      },
    ],

    vehicles: [
      {
        id: "vehicle-1",
        name: "Maruti Swift",
        transmission: "Manual",
      },
      {
        id: "vehicle-2",
        name: "Hyundai Grand i10",
        transmission: "Automatic",
      },
    ],

    reviews: [
      {
        id: "review-1",
        learnerName: "Priya Sharma",
        rating: 5,
        comment:
          "The instructor was patient and explained everything clearly. Very good experience.",
        date: "2 weeks ago",
      },
      {
        id: "review-2",
        learnerName: "Rahul Das",
        rating: 4,
        comment:
          "Good training and flexible lesson timings. The vehicles were also well maintained.",
        date: "1 month ago",
      },
    ],
  },

  {
    id: "school-2",
    name: "Northeast Motor Training School",
    image: "/school/car-school.webp",
    description:
      "Professional motor training school providing practical driving lessons with flexible schedules and experienced instructors.",
    rating: 4.3,
    reviewCount: 76,
    distance: 4.1,
    startingPrice: 3000,
    verified: true,

    address: {
      line: "Zoo Road",
      area: "Zoo Tiniali",
      city: "Guwahati",
      state: "Assam",
      pinCode: "781024",
    },

    phone: "9864012345",

    courses: [
      {
        id: "course-5",
        name: "Complete 2 Wheeler Course",
        description:
          "Complete practical training for two-wheelers including road awareness, traffic handling and test preparation.",
        duration: "15 hours",
        price: 2500,
        vehicleType: "2 Wheeler",
        transmission: "Manual",
      },
      {
        id: "course-6",
        name: "Complete 4 Wheeler Course",
        description:
          "Complete practical training including city roads, highway driving and test preparation.",
        duration: "20 hours",
        price: 4000,
        vehicleType: "4 Wheeler",
        transmission: "Manual",
      },
      {
        id: "course-7",
        name: "Highway 4 Wheeler Training",
        description:
          "Focused highway and long-distance driving practice for confident road driving.",
        duration: "10 hours",
        price: 2800,
        vehicleType: "4 Wheeler",
        transmission: "Automatic",
      },
    ],

    instructors: [
      {
        id: "instructor-3",
        name: "Bikash Roy",
        experience: 7,
        rating: 4.5,
      },
      {
        id: "instructor-4",
        name: "Deepak Sharma",
        experience: 5,
        rating: 4.4,
      },
    ],

    vehicles: [
      {
        id: "vehicle-3",
        name: "Maruti WagonR",
        transmission: "Manual",
      },
      {
        id: "vehicle-4",
        name: "Hyundai i20",
        transmission: "Manual",
      },
    ],

    reviews: [
      {
        id: "review-3",
        learnerName: "Arjun Singh",
        rating: 4,
        comment: "Good instructors and reasonable pricing.",
        date: "3 weeks ago",
      },
      {
        id: "review-4",
        learnerName: "Maya Das",
        rating: 5,
        comment: "The practical sessions were very helpful.",
        date: "2 months ago",
      },
    ],
  },

  {
    id: "school-3",
    name: "City Wheels Driving Institute",
    image: "/school/polish-driving-school-sign.webp",
    description:
      "Modern driving institute focused on safe driving habits, practical training and learner confidence.",
    rating: 4.8,
    reviewCount: 194,
    distance: 6.8,
    startingPrice: 4000,
    verified: true,

    address: {
      line: "VIP Road",
      area: "Six Mile",
      city: "Guwahati",
      state: "Assam",
      pinCode: "781022",
    },

    phone: "9123456789",

    courses: [
      {
        id: "course-5",
        name: "Complete 2 Wheeler Course",
        description:
          "Complete practical training for two-wheelers including road awareness, traffic handling and test preparation.",
        duration: "15 hours",
        price: 2500,
        vehicleType: "2 Wheeler",
        transmission: "Automatic",
      },
      {
        id: "course-6",
        name: "Complete 4 Wheeler Course",
        description:
          "Complete practical training including city roads, highway driving and test preparation.",
        duration: "20 hours",
        price: 4000,
        vehicleType: "4 Wheeler",
        transmission: "Manual",
      },
      {
        id: "course-7",
        name: "Highway 4 Wheeler Training",
        description:
          "Focused highway and long-distance driving practice for confident road driving.",
        duration: "10 hours",
        price: 2800,
        vehicleType: "4 Wheeler",
        transmission: "Manual",
      },
    ],

    instructors: [
      {
        id: "instructor-5",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-6",
        name: "Rahul Deka",
        experience: 5,
        rating: 4.7,
      },
    ],

    vehicles: [
      {
        id: "vehicle-5",
        name: "Hyundai Aura",
        transmission: "Manual",
      },
      {
        id: "vehicle-6",
        name: "Tata Altroz",
        transmission: "Manual",
      },
      {
        id: "vehicle-7",
        name: "Hyundai i20",
        transmission: "Automatic",
      },
    ],

    reviews: [
      {
        id: "review-5",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-6",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },

  {
    id: "school-4",
    name: "Prime Motor Driving School",
    image: "/school/car-school.webp",
    description:
      "Professional driving training with certified instructors, flexible schedules and modern training vehicles.",
    rating: 4.5,
    reviewCount: 112,
    distance: 8.2,
    startingPrice: 3800,
    verified: true,

    address: {
      line: "GS Road",
      area: "Paltan Bazaar",
      city: "Guwahati",
      state: "Assam",
      pinCode: "781008",
    },

    phone: "9001234567",

    courses: [
      {
        id: "course-5",
        name: "Complete 2 Wheeler Course",
        description:
          "Complete practical training for two-wheelers including road awareness, traffic handling and test preparation.",
        duration: "15 hours",
        price: 2500,
        vehicleType: "2 Wheeler",
        transmission: "Manual",
      },
      {
        id: "course-6",
        name: "Complete 4 Wheeler Course",
        description:
          "Complete practical training including city roads, highway driving and test preparation.",
        duration: "20 hours",
        price: 4000,
        vehicleType: "4 Wheeler",
        transmission: "Manual",
      },
      {
        id: "course-7",
        name: "Highway 4 Wheeler Training",
        description:
          "Focused highway and long-distance driving practice for confident road driving.",
        duration: "10 hours",
        price: 2800,
        vehicleType: "4 Wheeler",
        transmission: "Manual",
      },
    ],

    instructors: [
      {
        id: "instructor-7",
        name: "Manoj Kumar",
        experience: 9,
        rating: 4.7,
      },
      {
        id: "instructor-8",
        name: "Rohit Das",
        experience: 6,
        rating: 4.5,
      },
    ],

    vehicles: [
      {
        id: "vehicle-8",
        name: "Maruti Dzire",
        transmission: "Manual",
      },
      {
        id: "vehicle-9",
        name: "Honda Amaze",
        transmission: "Automatic",
      },
    ],

    reviews: [
      {
        id: "review-7",
        learnerName: "Rahul Sharma",
        rating: 5,
        comment: "Very supportive instructors and good vehicles.",
        date: "3 weeks ago",
      },
    ],
  },

  {
    id: "school-5",
    name: "Elite Drive Training Centre",
    image: "/school/polish-driving-school-sign.webp",
    description:
      "Focused driving education with personalized lessons, experienced instructors and modern vehicles.",
    rating: 4.7,
    reviewCount: 156,
    distance: 10.5,
    startingPrice: 4500,
    verified: true,

    address: {
      line: "Beltola Road",
      area: "Beltola",
      city: "Guwahati",
      state: "Assam",
      pinCode: "781028",
    },

    phone: "9012345678",

    courses: [
      {
        id: "course-5",
        name: "Complete 2 Wheeler Course",
        description:
          "Complete practical training for two-wheelers including road awareness, traffic handling and test preparation.",
        duration: "15 hours",
        price: 2500,
        vehicleType: "2 Wheeler",
        transmission: "Manual",
      },
      {
        id: "course-6",
        name: "Complete 4 Wheeler Course",
        description:
          "Complete practical training including city roads, highway driving and test preparation.",
        duration: "20 hours",
        price: 4000,
        vehicleType: "4 Wheeler",
        transmission: "Manual",
      },
      {
        id: "course-7",
        name: "Highway 4 Wheeler Training",
        description:
          "Focused highway and long-distance driving practice for confident road driving.",
        duration: "10 hours",
        price: 2800,
        vehicleType: "4 Wheeler",
        transmission: "Manual",
      },
    ],

    instructors: [
      {
        id: "instructor-9",
        name: "Vivek Sharma",
        experience: 11,
        rating: 4.9,
      },
      {
        id: "instructor-10",
        name: "Pankaj Das",
        experience: 7,
        rating: 4.6,
      },
    ],

    vehicles: [
      {
        id: "vehicle-10",
        name: "Maruti Baleno",
        transmission: "Manual",
      },
      {
        id: "vehicle-11",
        name: "Hyundai Venue",
        transmission: "Automatic",
      },
    ],

    reviews: [
      {
        id: "review-8",
        learnerName: "Neha Bora",
        rating: 5,
        comment: "Excellent instructors and very organized lessons.",
        date: "2 weeks ago",
      },
      {
        id: "review-9",
        learnerName: "Aman Roy",
        rating: 4,
        comment: "Good experience and flexible scheduling.",
        date: "1 month ago",
      },
    ],
  },
];
