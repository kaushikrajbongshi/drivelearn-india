import EmptyState from "@/components/common/EmptyState";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import CourseMobileCard from "./CourseMobileCard";
import CourseTableRow from "./CourseTableRow";

import type { Course } from "../types/course";
import { BookOpen } from "lucide-react";

interface CourseTableProps {
    courses: Course[];
}

export default function CourseTable({
    courses,
}: CourseTableProps) {
    if (!courses.length) {
        return (
            <EmptyState
                icon={BookOpen}
                title="No Courses Found"
                description="Create your first course to get started."
                actionLabel="Add Course"
            // onAction={() => setOpen(true)}
            />
        );
    }

    return (
        <>
            {/* Desktop */}
            <div className="hidden overflow-hidden rounded-xl border p-5 lg:block">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Course</TableHead>

                            <TableHead>Code</TableHead>

                            <TableHead>Duration</TableHead>

                            <TableHead>Fee</TableHead>

                            <TableHead>Lessons</TableHead>

                            <TableHead>Vehicle</TableHead>

                            <TableHead>Status</TableHead>

                            <TableHead>Created</TableHead>

                            <TableHead className="w-12" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {courses.map((course) => (
                            <CourseTableRow
                                key={course.id}
                                course={course}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Mobile */}
            <div className="space-y-4 lg:hidden">
                {courses.map((course) => (
                    <CourseMobileCard
                        key={course.id}
                        course={course}
                    />
                ))}
            </div>
        </>
    );
}