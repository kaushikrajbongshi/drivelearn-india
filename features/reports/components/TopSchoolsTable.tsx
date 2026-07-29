import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import type { TopSchool } from "@/features/reports/types/report";

interface TopSchoolsTableProps {
    schools: TopSchool[];
}

export default function TopSchoolsTable({
    schools,
}: TopSchoolsTableProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Top Performing Schools
                </CardTitle>
            </CardHeader>

            <CardContent className="p-0 sm:p-5">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>School</TableHead>

                            <TableHead className="text-right">
                                Learners
                            </TableHead>

                            <TableHead className="text-right">
                                Instructors
                            </TableHead>

                            <TableHead className="text-right">
                                Revenue
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {schools.map((school) => (
                            <TableRow key={school.id}>
                                <TableCell className="font-medium">
                                    {school.name}
                                </TableCell>

                                <TableCell className="text-right">
                                    {school.learners}
                                </TableCell>

                                <TableCell className="text-right">
                                    {school.instructors}
                                </TableCell>

                                <TableCell className="text-right">
                                    ${school.revenue}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}