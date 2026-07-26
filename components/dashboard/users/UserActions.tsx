"use client";

import Link from "next/link";
import {
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

interface UserActionsProps {
  userId: string;
}

export default function UserActions({
  userId,
}: UserActionsProps) {
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
        className="w-52 rounded-xl"
      >
        <DropdownMenuGroup>
          <Link href={`/admin/users/${userId}`}>
            <DropdownMenuItem>
              <Eye className="mr-2 size-4" />
              View Details
            </DropdownMenuItem>
          </Link>

          <Link href={`/admin/users/${userId}/edit`}>
            <DropdownMenuItem>
              <Pencil className="mr-2 size-4" />
              Edit User
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <ShieldBan className="mr-2 size-4" />
            Block User
          </DropdownMenuItem>

          <DropdownMenuItem className="text-red-600 focus:text-red-600">
            <Trash2 className="mr-2 size-4" />
            Delete User
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}