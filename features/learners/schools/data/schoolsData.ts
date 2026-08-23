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
        id: "course-1",
        name: "Beginner Driving Course",
        description:
          "Complete beginner training covering basic controls, road awareness and city driving.",
        duration: "15 hours",
        price: 3500,
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
      {
        id: "review-3",
        learnerName: "Neha Bora",
        rating: 5,
        comment:
          "I started as a complete beginner and became confident within a few weeks.",
        date: "2 months ago",
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
        id: "course-3",
        name: "Basic Driving Course",
        description: "Essential driving lessons for new learners.",
        duration: "12 hours",
        price: 3000,
      },
      {
        id: "course-4",
        name: "Advanced Road Training",
        description: "Advanced city and highway driving practice.",
        duration: "18 hours",
        price: 4500,
      },
    ],

    instructors: [
      {
        id: "instructor-3",
        name: "Bikash Roy",
        experience: 7,
        rating: 4.5,
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
        id: "review-4",
        learnerName: "Arjun Singh",
        rating: 4,
        comment: "Good instructors and reasonable pricing.",
        date: "3 weeks ago",
      },
      {
        id: "review-5",
        learnerName: "Maya Das",
        rating: 5,
        comment: "The practical sessions were very helpful.",
        date: "2 months ago",
      },
    ],
  },

  {
    id: "4",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "5",
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
        name: "Complete Driving Course",
        description:
          "Full practical training including city roads and test preparation.",
        duration: "20 hours",
        price: 4000,
      },
      {
        id: "course-6",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
      {
        id: "course-7",
        name: "Highway Training",
        description: "Focused highway and long-distance driving practice.",
        duration: "10 hours",
        price: 2800,
      },
    ],

    instructors: [
      {
        id: "instructor-4",
        name: "Sanjay Sharma",
        experience: 10,
        rating: 4.9,
      },
      {
        id: "instructor-5",
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
    ],

    reviews: [
      {
        id: "review-6",
        learnerName: "Ananya Das",
        rating: 5,
        comment: "Excellent training and very professional instructors.",
        date: "1 week ago",
      },
      {
        id: "review-7",
        learnerName: "Kunal Bora",
        rating: 5,
        comment: "One of the best driving schools I have experienced.",
        date: "1 month ago",
      },
    ],
  },
];
