"use client";

import Link from "next/link";
import {
  Eye,
  MoreHorizontal,
  Pencil,
  Power,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { Vehicle } from "../types/vehicle";

interface VehicleActionsProps {
  vehicle: Vehicle;
}

export default function VehicleActions({
  vehicle,
}: VehicleActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
          />
        }
      >
        <MoreHorizontal className="size-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          nativeButton={false}
          render={
            <Link
              href={`/owner/vehicles/${vehicle.id}`}
            />
          }
        >
          <Eye className="mr-2 size-4" />
          View
        </DropdownMenuItem>

        <DropdownMenuItem
          nativeButton={false}
          render={
            <Link
              href={`/owner/vehicles/${vehicle.id}/edit`}
            />
          }
        >
          <Pencil className="mr-2 size-4" />
          Edit
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Power className="mr-2 size-4" />

          {vehicle.status === "Active"
            ? "Mark as Maintenance"
            : "Mark as Active"}
        </DropdownMenuItem>

        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <Trash2 className="mr-2 size-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}