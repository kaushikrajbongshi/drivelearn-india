"use client";


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import BranchForm from "./BranchForm";

interface AddBranchDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function AddBranchDialog({
    open,
    onOpenChange,
}: AddBranchDialogProps) {
    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>
                        <p className="text-2xl">Add Branch </p>    
                    </DialogTitle>
                </DialogHeader>

                <BranchForm
                    onCancel={() => onOpenChange(false)}
                />
            </DialogContent>
        </Dialog>
    );
}