"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import LessonTypeSelector from "@/features/learners/lessons/components/LessonTypeSelector";
import LessonTrainingSelector from "@/features/learners/lessons/components/LessonTrainingSelector";
import LessonDatePicker from "@/features/learners/lessons/components/LessonDatePicker";
import LessonTimeSlots from "@/features/learners/lessons/components/LessonTimeSlots";
import InstructorSelector from "@/features/learners/lessons/components/InstructorSelector";
import BookingSummary from "@/features/learners/lessons/components/BookingSummary";
import BookingSuccess from "@/features/learners/lessons/components/BookingSuccess";

const instructors = [
    {
        id: "rahul-sharma",
        name: "Rahul Sharma",
        experience: "5+ Years",
        rating: 4.8,
    },
    {
        id: "amit-kumar",
        name: "Amit Kumar",
        experience: "7+ Years",
        rating: 4.7,
    },
    {
        id: "priya-singh",
        name: "Priya Singh",
        experience: "4+ Years",
        rating: 4.9,
    },
];

export default function ScheduleLessonPage() {
    const router = useRouter();

    const [step, setStep] = useState(1);

    const [lessonType, setLessonType] = useState<
        "manual" | "automatic" | null
    >(null);

    const [trainingType, setTrainingType] = useState<string | null>(
        null
    );

    const [selectedDate, setSelectedDate] =
        useState<Date | null>(null);

    const [selectedTime, setSelectedTime] =
        useState<string | null>(null);

    const [selectedInstructor, setSelectedInstructor] =
        useState<string | null>(null);

    const [autoAssign, setAutoAssign] = useState(false);

    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const selectedInstructorName =
        instructors.find(
            (instructor) => instructor.id === selectedInstructor
        )?.name ?? "";

    const handleConfirmBooking = () => {
        // Temporary frontend behaviour.
        // Backend booking API will be connected later.
        setBookingConfirmed(true);
        setStep(7);
    };

    if (bookingConfirmed) {
        return (
            <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-2xl">
                    <BookingSuccess
                        lessonType={
                            lessonType === "manual"
                                ? "Manual Transmission"
                                : "Automatic Transmission"
                        }
                        trainingType={trainingType ?? ""}
                        date={
                            selectedDate
                                ? selectedDate.toLocaleDateString("en-IN", {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })
                                : ""
                        }
                        time={selectedTime ?? ""}
                        instructor={selectedInstructorName}
                        autoAssign={autoAssign}
                        bookingId="DL-2026-00124"
                        onContinue={() => router.push("/learner/dashboard")}
                    />
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-2xl">
                {/* Progress */}
                <div className="mb-6">
                    <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-primary">
                            Step {step} of 6
                        </span>

                        <span className="text-muted-foreground">
                            Schedule First Lesson
                        </span>
                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                            className="h-full rounded-full bg-primary transition-all duration-300"
                            style={{
                                width: `${(step / 6) * 100}%`,
                            }}
                        />
                    </div>
                </div>

                {/* Step 1 */}
                {step === 1 && (
                    <LessonTypeSelector
                        selectedType={lessonType}
                        onChange={setLessonType}
                        onContinue={() => setStep(2)}
                    />
                )}

                {/* Step 2 */}
                {step === 2 && (
                    <LessonTrainingSelector
                        selectedTraining={trainingType}
                        onChange={setTrainingType}
                        onContinue={() => setStep(3)}
                    />
                )}

                {/* Step 3 */}
                {step === 3 && (
                    <LessonDatePicker
                        selectedDate={selectedDate}
                        onChange={setSelectedDate}
                        onContinue={() => setStep(4)}
                        onBack={() => setStep(2)}
                    />
                )}

                {/* Step 4 */}
                {step === 4 && (
                    <LessonTimeSlots
                        selectedTime={selectedTime}
                        onChange={setSelectedTime}
                        onContinue={() => setStep(5)}
                        onBack={() => setStep(3)}
                    />
                )}

                {/* Step 5 */}
                {step === 5 && (
                    <InstructorSelector
                        instructors={instructors}
                        selectedInstructor={selectedInstructor}
                        autoAssign={autoAssign}
                        onInstructorChange={(id) => {
                            setSelectedInstructor(id);
                            setAutoAssign(false);
                        }}
                        onAutoAssignChange={(value) => {
                            setAutoAssign(value);

                            if (value) {
                                setSelectedInstructor(null);
                            }
                        }}
                        onContinue={() => setStep(6)}
                        onBack={() => setStep(4)}
                    />
                )}

                {/* Step 6 */}
                {step === 6 && (
                    <BookingSummary
                        lessonType={
                            lessonType === "manual"
                                ? "Manual Transmission"
                                : "Automatic Transmission"
                        }
                        trainingType={trainingType ?? ""}
                        date={
                            selectedDate
                                ? selectedDate.toLocaleDateString("en-IN", {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })
                                : ""
                        }
                        time={selectedTime ?? ""}
                        instructor={selectedInstructorName}
                        autoAssign={autoAssign}
                        onConfirm={handleConfirmBooking}
                        onBack={() => setStep(5)}
                    />
                )}
            </div>
        </main>
    );
}