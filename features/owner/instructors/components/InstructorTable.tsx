import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import EmptyState from "@/components/common/EmptyState";

import InstructorMobileCard from "./InstructorMobileCard";
import InstructorTableRow from "./InstructorTableRow";

import type { Instructor } from "../types/instructor";

interface InstructorTableProps {
    instructors: Instructor[];
}

export default function InstructorTable({
    instructors,
}: InstructorTableProps) {
    if (!instructors.length) {
        return (
            <EmptyState
                title="No instructors found"
                description="Try adjusting your search or filters."
            />
        );
    }

    return (
        <>
            {/* Mobile */}
            <div className="grid gap-4 lg:hidden">
                {instructors.map((instructor) => (
                    <InstructorMobileCard
                        key={instructor.id}
                        instructor={instructor}
                    />
                ))}
            </div>

            {/* Desktop */}
            <div className="hidden overflow-hidden rounded-xl border p-5 lg:block">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Specialization</TableHead>
                            <TableHead>Assigned Learners</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead className="w-[60px]" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {instructors.map((instructor) => (
                            <InstructorTableRow
                                key={instructor.id}
                                instructor={instructor}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}   