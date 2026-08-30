"use client";

import CourseCard from "./CourseCard";
import type { DrivingSchool } from "@/components/landing/schools/types/school";

interface CourseListProps {
    courses: DrivingSchool["courses"];
    onCourseSelect: (courseId: string) => void;
}

export default function CourseList({
    courses,
    onCourseSelect,
}: CourseListProps) {
    return (
        <section>
            <div className="mb-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                    Choose your course
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-3xl">
                    Select the training that suits you
                </h2>
                <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-neutral-500 dark:text-zinc-400">
                    Compare available courses and choose the driving training
                    you want to enroll in.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
                {courses.map((course, index) => (
                    <div
                        key={course.id}
                        className="w-full sm:w-[calc(50%-10px)] xl:w-[calc(33.333%-14px)] sm:max-w-sm"
                    >
                        <CourseCard
                            course={course}
                            selected={false}
                            popular={index === 1 && courses.length > 1}
                            onSelect={() => onCourseSelect(course.id)}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}