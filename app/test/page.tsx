// import React from "react";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import {
//     Bell,
//     Clock,
//     Star,
//     Car,
//     Phone,
//     MessageCircle,
//     Navigation,
//     CreditCard,
//     Search,
//     ChevronRight,
//     Check,
//     Download,
//     MapPin,
// } from "lucide-react";

// /**
//  * Fonts + the neubrutalist "brutal" card style: thick border, flat hard
//  * shadow, and a press-in effect on hover/active. No blur, no gradients —
//  * on purpose, this theme is flat and tactile like real signage.
//  */
// const GlobalStyle = () => (
//     <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@600;700&display=swap');

//     .brutal {
//       border: 3px solid #171717;
//       box-shadow: 6px 6px 0 #171717;
//       transition: transform 0.15s ease, box-shadow 0.15s ease;
//     }
//     .brutal-btn {
//       border: 3px solid #171717;
//       box-shadow: 4px 4px 0 #171717;
//       transition: transform 0.12s ease, box-shadow 0.12s ease;
//     }
//     button.brutal-btn:hover, a.brutal-btn:hover {
//       transform: translate(2px, 2px);
//       box-shadow: 2px 2px 0 #171717;
//     }
//     button.brutal-btn:active, a.brutal-btn:active {
//       transform: translate(4px, 4px);
//       box-shadow: 0 0 0 #171717;
//     }
//     .brutal-hover:hover {
//       transform: translate(2px, 2px);
//       box-shadow: 4px 4px 0 #171717;
//     }
//     .bolt {
//       width: 8px;
//       height: 8px;
//       border-radius: 9999px;
//       background: #171717;
//       opacity: 0.15;
//     }
//   `}</style>
// );

// const display = { fontFamily: "'Space Grotesk', sans-serif" };
// const mono = { fontFamily: "'IBM Plex Mono', monospace" };

// // ---- Mock data ------------------------------------------------------------
// const learner = { name: "Ananya" };

// const nextLesson = {
//     type: "City Roads",
//     date: "THU 6 AUG",
//     time: "7:30 AM",
//     duration: "45 min",
//     instructor: { name: "Rakesh Sharma", rating: 4.8 },
//     pickup: "Ganeshguri Circle, Guwahati",
// };

// const routeStages = [
//     { label: "Enrolled", status: "done" },
//     { label: "Yard", status: "done" },
//     { label: "City Roads", status: "current" },
//     { label: "Highway", status: "upcoming" },
//     { label: "Test Ready", status: "upcoming" },
// ];

// const progress = { hoursCompleted: 14, hoursTotal: 20, lessonsCompleted: 11, lessonsTotal: 16 };
// const plan = { name: "Complete Course – Sedan", sessionsLeft: 5, sessionsTotal: 16, expiresIn: "12 days" };
// const percentComplete = Math.round((progress.hoursCompleted / progress.hoursTotal) * 100);
// const routeFillPercent = 38;

// export default function LearnerDashboard() {
//     return (
//         <div className="min-h-screen bg-yellow-50">
//             <GlobalStyle />

//             {/* Header — like a signboard rail */}
//             <header className="bg-white border-b-4 border-neutral-900">
//                 <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between">
//                     <div className="flex items-center gap-2.5">
//                         <div className="h-9 w-9 bg-neutral-900 border-2 border-neutral-900 flex items-center justify-center">
//                             <span style={display} className="text-yellow-400 text-sm font-bold">DL</span>
//                         </div>
//                         <span style={display} className="text-neutral-900 font-bold text-lg">DriveLearn</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <button
//                             className="relative h-9 w-9 flex items-center justify-center border-2 border-neutral-900 bg-white brutal-btn"
//                             style={{ boxShadow: "3px 3px 0 #171717" }}
//                             aria-label="Notifications"
//                         >
//                             <Bell className="h-4 w-4 text-neutral-900" />
//                             <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-red-500 border-2 border-white" />
//                         </button>
//                         <Avatar className="h-9 w-9 border-2 border-neutral-900">
//                             <AvatarFallback className="bg-green-500 text-white text-sm font-bold">
//                                 {learner.name.slice(0, 2).toUpperCase()}
//                             </AvatarFallback>
//                         </Avatar>
//                     </div>
//                 </div>
//             </header>

//             <main className="max-w-5xl mx-auto px-5 py-8 space-y-8">
//                 {/* Greeting */}
//                 <div>
//                     <h1 style={display} className="text-3xl sm:text-4xl font-bold text-neutral-900">
//                         Good morning, {learner.name}!
//                     </h1>
//                     <p className="text-neutral-600 mt-1.5">Your test-ready day is getting closer.</p>
//                 </div>

//                 {/* Next lesson — caution-yellow signboard */}
//                 <div className="brutal bg-yellow-300 p-6">
//                     <div className="flex flex-col md:flex-row md:items-center gap-6">
//                         <div className="flex-1">
//                             <span
//                                 style={mono}
//                                 className="inline-block bg-neutral-900 text-yellow-300 text-xs font-bold px-2.5 py-1 mb-3 tracking-wide"
//                             >
//                                 NEXT LESSON · {nextLesson.type.toUpperCase()}
//                             </span>
//                             <div className="flex items-baseline gap-3">
//                                 <span style={mono} className="text-3xl font-bold text-neutral-900">{nextLesson.date}</span>
//                                 <span style={mono} className="text-xl font-bold text-neutral-900">{nextLesson.time}</span>
//                             </div>
//                             <div className="flex items-center gap-1.5 text-sm text-neutral-800 mt-2 font-medium">
//                                 <Clock className="h-4 w-4" />
//                                 {nextLesson.duration} session
//                             </div>
//                             <div className="flex items-center gap-1.5 text-sm text-neutral-800 mt-1 font-medium">
//                                 <MapPin className="h-4 w-4" />
//                                 {nextLesson.pickup}
//                             </div>
//                         </div>

//                         <div className="w-px self-stretch bg-neutral-900 hidden md:block" />

//                         <div className="flex md:flex-col items-center md:items-start gap-3">
//                             <div className="flex items-center gap-2.5 bg-white border-2 border-neutral-900 px-3 py-2">
//                                 <Avatar className="h-8 w-8 border-2 border-neutral-900">
//                                     <AvatarFallback className="bg-neutral-900 text-yellow-300 text-xs font-bold">RS</AvatarFallback>
//                                 </Avatar>
//                                 <div>
//                                     <p className="text-sm font-semibold text-neutral-900 leading-tight">{nextLesson.instructor.name}</p>
//                                     <div className="flex items-center gap-1 text-xs text-neutral-600">
//                                         <Star className="h-3 w-3 fill-neutral-900 text-neutral-900" />
//                                         {nextLesson.instructor.rating}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex gap-2 w-full">
//                                 <button
//                                     className="brutal-btn flex-1 flex items-center justify-center gap-1.5 bg-neutral-900 text-white text-sm font-semibold px-4 py-2"
//                                 >
//                                     <Navigation className="h-4 w-4" />
//                                     Directions
//                                 </button>
//                                 <button className="brutal-btn bg-white text-neutral-900 text-sm font-semibold px-4 py-2">
//                                     Reschedule
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Route — literal road strip */}
//                 <div className="brutal bg-neutral-900 p-6 sm:p-7">
//                     <div className="flex items-center justify-between mb-6">
//                         <h2 style={display} className="text-white font-bold text-lg">Your route to the license</h2>
//                         <span style={mono} className="text-xs text-neutral-400 hidden sm:block">STAGE 3 / 5</span>
//                     </div>
//                     <div className="overflow-x-auto">
//                         <div className="relative flex items-start min-w-[560px] px-2">
//                             <div
//                                 className="absolute top-4 left-6 right-6 h-1"
//                                 style={{
//                                     backgroundImage:
//                                         "repeating-linear-gradient(90deg, #525252 0px, #525252 10px, transparent 10px, transparent 20px)",
//                                 }}
//                                 aria-hidden="true"
//                             />
//                             <div
//                                 className="absolute top-4 left-6 h-1 bg-yellow-400 transition-all duration-1000 ease-out"
//                                 style={{ width: `${routeFillPercent}%` }}
//                                 aria-hidden="true"
//                             />
//                             {routeStages.map((stage) => (
//                                 <div key={stage.label} className="relative flex-1 flex flex-col items-center gap-2">
//                                     {stage.status === "current" && (
//                                         <span className="absolute top-0 h-9 w-9 rounded-full bg-yellow-400 opacity-40 animate-ping" />
//                                     )}
//                                     {stage.status === "current" ? (
//                                         <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 border-2 border-neutral-900">
//                                             <Car className="h-4 w-4 text-neutral-900" />
//                                         </div>
//                                     ) : stage.status === "done" ? (
//                                         <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-green-500 border-2 border-neutral-900">
//                                             <Check className="h-4 w-4 text-white" />
//                                         </div>
//                                     ) : (
//                                         <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 border-2 border-neutral-700">
//                                             <span className="h-2 w-2 rounded-full bg-neutral-500" />
//                                         </div>
//                                     )}
//                                     <span
//                                         className={`text-xs text-center leading-tight font-medium ${stage.status === "current"
//                                                 ? "text-white"
//                                                 : stage.status === "done"
//                                                     ? "text-neutral-300"
//                                                     : "text-neutral-500"
//                                             }`}
//                                     >
//                                         {stage.label}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Stat cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                     {/* Progress */}
//                     <div className="brutal brutal-hover bg-white p-5">
//                         <div className="flex items-center gap-2 mb-3">
//                             <div className="h-2.5 w-2.5 rounded-full bg-green-500 border border-neutral-900" />
//                             <h3 className="text-sm font-bold text-neutral-900">Training progress</h3>
//                         </div>
//                         <div className="flex items-baseline gap-1.5 mb-3">
//                             <span style={mono} className="text-2xl font-bold text-neutral-900">{progress.hoursCompleted}</span>
//                             <span className="text-sm text-neutral-600">/ {progress.hoursTotal} hrs</span>
//                         </div>
//                         <div className="h-3 bg-neutral-100 border-2 border-neutral-900 overflow-hidden">
//                             <div className="h-full bg-green-500" style={{ width: `${percentComplete}%` }} />
//                         </div>
//                         <p className="text-xs text-neutral-600 mt-2 font-medium">
//                             {progress.lessonsCompleted} of {progress.lessonsTotal} lessons done
//                         </p>
//                     </div>

//                     {/* Instructor */}
//                     <div className="brutal brutal-hover bg-white p-5">
//                         <h3 className="text-sm font-bold text-neutral-900 mb-3">Your instructor</h3>
//                         <div className="flex items-center gap-3 mb-4">
//                             <Avatar className="h-11 w-11 border-2 border-neutral-900">
//                                 <AvatarFallback className="bg-blue-500 text-white font-bold">RS</AvatarFallback>
//                             </Avatar>
//                             <div>
//                                 <p className="text-sm font-semibold text-neutral-900">{nextLesson.instructor.name}</p>
//                                 <div className="flex items-center gap-1 text-xs text-neutral-600">
//                                     <Star className="h-3 w-3 fill-neutral-900 text-neutral-900" />
//                                     {nextLesson.instructor.rating} · 340 lessons
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex gap-2">
//                             <button className="brutal-btn flex-1 flex items-center justify-center gap-1.5 bg-white text-neutral-900 text-xs font-semibold py-2">
//                                 <Phone className="h-3.5 w-3.5" />
//                                 Call
//                             </button>
//                             <button className="brutal-btn flex-1 flex items-center justify-center gap-1.5 bg-white text-neutral-900 text-xs font-semibold py-2">
//                                 <MessageCircle className="h-3.5 w-3.5" />
//                                 Message
//                             </button>
//                         </div>
//                     </div>

//                     {/* Package */}
//                     <div className="brutal brutal-hover bg-white p-5">
//                         <div className="flex items-center gap-2 mb-3">
//                             <CreditCard className="h-4 w-4 text-neutral-900" />
//                             <h3 className="text-sm font-bold text-neutral-900">Your package</h3>
//                         </div>
//                         <p className="text-sm font-semibold text-neutral-900 mb-1">{plan.name}</p>
//                         <p className="text-xs text-neutral-600 mb-3 font-medium">
//                             {plan.sessionsLeft} of {plan.sessionsTotal} sessions left
//                         </p>
//                         <span
//                             style={mono}
//                             className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 mb-3"
//                         >
//                             EXPIRES IN {plan.expiresIn.toUpperCase()}
//                         </span>
//                         <button className="brutal-btn w-full bg-neutral-900 text-white text-sm font-semibold py-2">
//                             Renew package
//                         </button>
//                     </div>
//                 </div>

//                 {/* Quick actions */}
//                 <div>
//                     <h2 style={display} className="text-lg font-bold text-neutral-900 mb-3">Quick actions</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                         {[
//                             { icon: Search, label: "Browse driving schools", bg: "bg-green-500", text: "text-white" },
//                             { icon: Car, label: "Book an extra lesson", bg: "bg-blue-500", text: "text-white" },
//                             { icon: Download, label: "Download progress card", bg: "bg-white", text: "text-neutral-900" },
//                         ].map(({ icon: Icon, label, bg, text }) => (
//                             <button
//                                 key={label}
//                                 className={`brutal-btn ${bg} ${text} p-4 flex items-center justify-between`}
//                             >
//                                 <div className="flex items-center gap-3">
//                                     <Icon className="h-4 w-4" />
//                                     <span className="text-sm font-semibold text-left">{label}</span>
//                                 </div>
//                                 <ChevronRight className="h-4 w-4 shrink-0" />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Rate last lesson */}
//                 <div className="brutal bg-white p-5 flex items-center justify-between flex-wrap gap-3">
//                     <div>
//                         <p className="text-sm font-semibold text-neutral-900">How was your lesson with Rakesh Sharma?</p>
//                         <p className="text-xs text-neutral-600 mt-0.5 font-medium">Mon, 3 Aug</p>
//                     </div>
//                     <div className="flex gap-1">
//                         {[1, 2, 3, 4, 5].map((i) => (
//                             <Star
//                                 key={i}
//                                 className="h-6 w-6 text-neutral-300 hover:text-yellow-400 hover:fill-yellow-400 cursor-pointer transition-colors"
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 <footer className="pt-4 pb-8 text-center">
//                     <button className="text-sm text-neutral-600 hover:text-neutral-900 font-medium transition-colors underline decoration-2 underline-offset-4">
//                         Need help? Contact support
//                     </button>
//                 </footer>
//             </main>
//         </div>
//     );
// }

"use client"
import { DrivingSchool, DrivingSchoolCard } from '@/components/cards/DrivingSchool'
import React from 'react'

const page = () => {
    const school: DrivingSchool = {
        id: "safe-drive-academy",

        name: "Safe Drive Academy",

        image: "/school/car-school.webp",

        rating: 4.8,
        reviews: 245,

        location: "HSR Layout, Bangalore, Karnataka",

        instructors: 12,
        experience: "5+ Years",

        transmission: "Manual & Automatic",

        vehicles: ["2 Wheeler", "4 Wheeler"],

        description:
            "Professional driving training with certified instructors. Quality education for a safe tomorrow.",

        verified: true,
    };
    return (
        <>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <DrivingSchoolCard
                    school={school}
                    theme="light"
                    onViewDetails={(school) => {
                        console.log("View details:", school.id);
                    }}
                    onFavorite={(school) => {
                        console.log("Favorite:", school.id);
                    }}
                />

                <DrivingSchoolCard
                    school={{
                        ...school,
                        id: "road-masters",
                        name: "Road Masters Driving School",
                        rating: 4.6,
                        instructors: 15,
                        experience: "8+ Years",
                        location: "Koramangala, Bangalore, Karnataka",
                    }}
                    theme="dark"
                />
            </div>
        </>
    )
}

export default page