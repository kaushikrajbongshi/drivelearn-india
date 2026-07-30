import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import InstructorStatusBadge from "./InstructorStatusBadge";

import type { Instructor } from "../types/instructor";

interface InstructorMobileCardProps {
    instructor: Instructor;
}

export default function InstructorMobileCard({
    instructor,
}: InstructorMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <Link
                            href={`/owner/instructors/${instructor.id}`}
                            className="font-semibold hover:underline"
                        >
                            {instructor.name}
                        </Link>

                        <p className="text-sm text-muted-foreground">
                            {instructor.email}
                        </p>
                    </div>

                    <InstructorStatusBadge
                        status={instructor.status}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-muted-foreground">
                            Phone
                        </p>
                        <p>{instructor.phone}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Specialization
                        </p>
                        <p>{instructor.specialization}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Experience
                        </p>
                        <p>{instructor.experience} Years</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Learners
                        </p>
                        <p>{instructor.assignedLearners}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Rating
                        </p>
                        <p>{instructor.rating.toFixed(1)}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Joined
                        </p>
                        <p>{instructor.joinedAt}</p>
                    </div>
                </div>

                <Button
                    className="w-full"
                    nativeButton={false}
                    render={
                        <Link
                            href={`/owner/instructors/${instructor.id}`}
                        />
                    }
                >
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
}