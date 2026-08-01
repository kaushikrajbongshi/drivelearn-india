"use client";

import Link from "next/link";
import { useState } from "react";

import {
    Eye,
    MoreHorizontal,
    Pencil,
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

import DeleteConfirmationDialog from "@/components/common/DeleteConfirmationDialog";

import type { Payment } from "../types/payment";
import { showToast } from "@/lib/toast";

interface PaymentActionsProps {
    payment: Payment;
}

export default function PaymentActions({
    payment,
}: PaymentActionsProps) {
    const [openDeleteDialog, setOpenDeleteDialog] =
        useState(false);

    return (
        <>
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
                                href={`/owner/payments/${payment.id}`}
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
                                href={`/owner/payments/${payment.id}/edit`}
                            />
                        }
                    >
                        <Pencil className="mr-2 size-4" />
                        Edit
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                        onClick={() =>
                            setOpenDeleteDialog(
                                true
                            )
                        }
                        className="text-destructive focus:text-destructive"
                    >
                        <Trash2 className="mr-2 size-4" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <DeleteConfirmationDialog
                open={openDeleteDialog}
                onOpenChange={
                    setOpenDeleteDialog
                }
                title="Delete Payment"
                description="Are you sure you want to delete this payment? This action cannot be undone."
                onConfirm={() => {
                    showToast.success(
                        "Course deleted successfully."
                    );
                }}
            />
        </>
    );
}