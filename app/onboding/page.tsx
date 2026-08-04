// // app/onboarding/page.tsx (or wherever)
// import { OnboardingLayout } from "@/features/learners/onboding/components/OnboardingLayout";

// export default function OnboardingPage() {
//   return (
//     <OnboardingLayout>
//       <div>
//         <h1 className="text-2xl font-semibold">Complete Your Profile</h1>
//         <p className="text-muted-foreground mt-1">
//           Please provide accurate information to help us personalize your learning experience.
//         </p>

//         {/* Your real form will go here later */}
//         <div className="mt-8 p-6 rounded-xl border border-dashed text-center text-sm text-gray-500">
//           Form content will appear here
//         </div>
//       </div>
//     </OnboardingLayout>
//   );
// }

import OnboardingLayout from "@/features/learners/onboarding/components/OnboardingLayout";

export default function OnboardingPage() {
  return <OnboardingLayout />;
}