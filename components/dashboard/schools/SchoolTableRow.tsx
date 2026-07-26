"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

import type { School } from "@/features/admin/schools/types/school";

import SchoolActions from "./SchoolActions";
import SchoolStatusBadge from "./SchoolStatusBadge";
import SchoolSubscriptionBadge from "./SchoolSubscriptionBadge";
import SchoolVerificationBadge from "./SchoolVerificationBadge";

interface SchoolTableRowProps {
  school: School;
}

export default function SchoolTableRow({
  school,
}: SchoolTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage
              src={school.logo}
              alt={school.name}
            />

            <AvatarFallback>
              {school.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <p className="truncate font-medium">
              {school.name}
            </p>

            <p className="truncate text-sm text-muted-foreground">
              {school.email}
            </p>
          </div>
        </div>
      </TableCell>

      <TableCell>{school.ownerName}</TableCell>

      <TableCell>
        <div className="min-w-0">
          <p>{school.city}</p>

          <p className="text-sm text-muted-foreground">
            {school.state}
          </p>
        </div>
      </TableCell>

      <TableCell>
        {school.totalInstructors}
      </TableCell>

      <TableCell>
        {school.totalLearners}
      </TableCell>

      <TableCell>
        <SchoolSubscriptionBadge
          subscription={school.subscription}
        />
      </TableCell>

      <TableCell>
        <SchoolVerificationBadge
          verification={school.verification}
        />
      </TableCell>

      <TableCell>
        <SchoolStatusBadge
          status={school.status}
        />
      </TableCell>

      <TableCell>{school.joinedAt}</TableCell>

      <TableCell className="text-right">
        <SchoolActions schoolId={school.id} />
      </TableCell>
    </TableRow>
  );
}