drivelearn-india/
│
├── app/
│   │
│   ├── (public)/✅
│   │   ├── page.tsx                  # Home
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── schools/
│   │   │   ├── page.tsx               # School Listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx           # School Details
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   └── terms/
│   │       └── page.tsx
│   │
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── forgot-password/
│   │   │   └── page.tsx
│   │   ├── reset-password/
│   │   │   └── page.tsx
│   │   └── verify-email/
│   │       └── page.tsx
│   │
│   ├── (protected)/
│   │   ├── layout.tsx
│   │   │
│   │   ├── learner/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   ├── bookings/
│   │   │   ├── progress/
│   │   │   ├── notifications/
│   │   │   ├── profile/
│   │   │   └── settings/
│   │   │
│   │   ├── owner/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   ├── branches/
│   │   │   ├── students/
│   │   │   ├── instructors/
│   │   │   ├── courses/
│   │   │   ├── bookings/
│   │   │   ├── attendance/
│   │   │   ├── payments/
│   │   │   ├── reports/
│   │   │   ├── analytics/
│   │   │   ├── subscription/
│   │   │   └── settings/
│   │   │
│   │   ├── instructor/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   ├── students/
│   │   │   ├── schedule/
│   │   │   ├── attendance/
│   │   │   ├── lessons/
│   │   │   └── profile/
│   │   │
│   │   └── admin/
│   │       ├── layout.tsx
│   │       ├── dashboard/
│   │       ├── schools/
│   │       ├── users/
│   │       ├── subscriptions/
│   │       ├── reports/
│   │       ├── support/
│   │       ├── cities/
│   │       ├── states/
│   │       └── settings/
│   │
│   ├── api/                           # Route Handlers
│   │
│   ├── error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── ui/                            # shadcn/ui components
│   ├── layout/
│   │   ├── navbar/
│   │   ├── footer/
│   │   ├── sidebar/
│   │   └── header/
│   ├── common/
│   │   ├── Logo.tsx
│   │   ├── Loader.tsx
│   │   ├── EmptyState.tsx
│   │   ├── SearchBar.tsx
│   │   └── Pagination.tsx
│   ├── forms/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   ├── SchoolForm.tsx
│   │   ├── CourseForm.tsx
│   │   └── BookingForm.tsx
│   └── cards/
│       ├── SchoolCard.tsx
│       ├── CourseCard.tsx
│       ├── StudentCard.tsx
│       ├── InstructorCard.tsx
│       └── BookingCard.tsx
│
├── features/
│   ├── auth/
│   ├── learner/
│   ├── owner/
│   ├── instructor/
│   ├── admin/
│   ├── school/
│   ├── booking/
│   ├── payment/
│   ├── notification/
│   └── subscription/
│
├── lib/
│   ├── auth.ts
│   ├── prisma.ts
│   ├── validations.ts
│   ├── constants.ts
│   ├── permissions.ts
│   └── utils.ts
│
├── hooks/
│   ├── useAuth.ts
│   ├── useDebounce.ts
│   ├── usePagination.ts
│   └── useMediaQuery.ts
│
├── services/
│   ├── auth.service.ts
│   ├── booking.service.ts
│   ├── payment.service.ts
│   ├── school.service.ts
│   └── notification.service.ts
│
├── types/
│   ├── auth.ts
│   ├── booking.ts
│   ├── school.ts
│   ├── user.ts
│   └── api.ts
│
├── constants/
│   ├── roles.ts
│   ├── routes.ts
│   ├── sidebar.ts
│   └── app.ts
│
├── middleware.ts
├── .env.local
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md