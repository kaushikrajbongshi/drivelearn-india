AUTH
│
├── Login
└── Verify OTP
        ↓
ONBOARDING
        ↓
Complete Profile
        ↓
DASHBOARD
        │
        └── Browse Schools
                ↓
        School Listing
                ↓
        School Details
                ↓
        Course / Package
                ↓
        Course Details
                ↓
        Payment
                ↓
        Payment Success
                ↓
        Enrollment Success
                ↓
        DASHBOARD
                │
                └── Schedule First Lesson
                         ↓
                   Lesson Type
                         ↓
                       Date
                         ↓
                    Time Slot
                         ↓
              Instructor Preference
                    ↙          ↘
                Choose       Auto Assign
                    ↘          ↙
                  Confirm
                     ↓
               Booking Success
                     ↓
                DASHBOARD
                     ↓
              Upcoming Lesson
                     ↓
                Attend Lesson
                     ↓
             Lesson Completed
                     ↓
              Progress Updated
                     ↓
                Rating/Review   

this is good flow now start with school listing

AUTH
 ↓
Login
 ↓
Verify OTP
 ↓
Onboarding
 ↓
Complete Profile
 ↓
DASHBOARD
 │
 ├── [No enrollment]
 │       ↓
 │   Browse Schools
 │       ↓
 │   School Details
 │       ↓
 │   Course Selection
 │       ↓
 │   Payment
 │       ↓
 │   Enrollment Success
 │       ↓
 │   DASHBOARD
 │
 └── [Enrolled]
         ↓
   Schedule First Lesson
         ↓
   Lesson Type
         ↓
   Date
         ↓
   Time
         ↓
   Instructor
         ↓
   Confirm
         ↓
   Booking Success
         ↓
   DASHBOARD
         ↓
   Upcoming Lesson
         ↓
   Attend Lesson
         ↓
   Lesson Completed
         ↓
   Progress Updated
         ↓
   Rating / Review