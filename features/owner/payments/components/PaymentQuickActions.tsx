"use client";

import Link from "next/link";
import { useState } from "react";

import {
    Pencil,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import DeleteConfirmationDialog from "@/components/common/DeleteConfirmationDialog";

import { showToast } from "@/lib/toast";
import type { Payment } from "../types/payment";

interface PaymentQuickActionsProps {
    payment: Payment;
}

export default function PaymentQuickActions({
    payment,
}: PaymentQuickActionsProps) {
    const [openDeleteDialog, setOpenDeleteDialog] =
        useState(false);

    const handleDelete = () => {
        console.log(
            "Delete Payment:",
            payment.id
        );
        showToast.success(
            `Course deleted successfully`
        );

    };

    return (
        <>
            <div className="flex flex-col gap-3">
                <Button
                    className="w-full justify-start"
                    nativeButton={false}
                    render={
                        <Link
                            href={`/owner/payments/${payment.id}/edit`}
                        />
                    }
                >
                    <Pencil className="mr-2 size-4" />
                    Edit Payment
                </Button>

                <Button
                    variant="destructive"
                    className="w-full justify-start"
                    onClick={() => {
                        setOpenDeleteDialog(true)
                    }}

                >
                    <Trash2 className="mr-2 size-4" />
                    Delete Payment

                </Button>
            </div >

            <DeleteConfirmationDialog
                open={openDeleteDialog}
                onOpenChange={setOpenDeleteDialog}
                title="Delete Payment"
                description="Are you sure you want to delete this payment? This action cannot be undone."
                onConfirm={handleDelete}

            />
        </>
    );
}

