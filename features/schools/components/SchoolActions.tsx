"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Eye,
  MoreHorizontal,
  Pencil,
  ShieldBan,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SchoolActionsProps {
  schoolId: string;
}

export default function SchoolActions({
  schoolId,
}: SchoolActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-lg"
          />
        }
      >
        <MoreHorizontal className="size-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 rounded-xl"
      >
        <DropdownMenuGroup>
          <Link href={`/admin/schools/${schoolId}`}>
            <DropdownMenuItem>
              <Eye className="mr-2 size-4" />
              View Details
            </DropdownMenuItem>
          </Link>

          <Link href={`/admin/schools/${schoolId}/edit`}>
            <DropdownMenuItem>
              <Pencil className="mr-2 size-4" />
              Edit School
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CheckCircle2 className="mr-2 size-4 text-green-600" />
            Verify School
          </DropdownMenuItem>

          <DropdownMenuItem>
            <ShieldBan className="mr-2 size-4 text-amber-600" />
            Suspend School
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-red-600 focus:text-red-600">
          <Trash2 className="mr-2 size-4" />
          Delete School
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}