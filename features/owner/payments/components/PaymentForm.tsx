"use client";

import { useState } from "react";

import {
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import type { Payment } from "../types/payment";

interface PaymentFormProps {
    defaultValues?: Partial<Payment>;
    onSubmit: (
        values: Partial<Payment>
    ) => void;
    submitLabel?: string;
}

export default function PaymentForm({
    defaultValues,
    onSubmit,
    submitLabel = "Save",
}: PaymentFormProps) {
    const [formData, setFormData] =
        useState<Partial<Payment>>({
            learnerName:
                defaultValues?.learnerName ?? "",
            courseName:
                defaultValues?.courseName ?? "",
            amount:
                defaultValues?.amount ?? 0,
            paymentMethod:
                defaultValues?.paymentMethod ??
                "Cash",
            status:
                defaultValues?.status ??
                "Pending",
            transactionDate:
                defaultValues?.transactionDate ??
                "",
            referenceNumber:
                defaultValues?.referenceNumber ??
                "",
            dueDate:
                defaultValues?.dueDate ?? "",
        });

    const handleChange = (
        key: keyof Payment,
        value: string | number
    ) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(formData);
            }}
        >
            <CardContent className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label>
                            Learner Name
                        </Label>

                        <Input
                            value={
                                formData.learnerName
                            }
                            onChange={(e) =>
                                handleChange(
                                    "learnerName",
                                    e.target.value
                                )
                            }
                            placeholder="Rahul Sharma"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Course
                        </Label>

                        <Input
                            value={
                                formData.courseName
                            }
                            onChange={(e) =>
                                handleChange(
                                    "courseName",
                                    e.target.value
                                )
                            }
                            placeholder="LMV Course"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Amount
                        </Label>

                        <Input
                            type="number"
                            value={
                                formData.amount
                            }
                            onChange={(e) =>
                                handleChange(
                                    "amount",
                                    Number(
                                        e.target
                                            .value
                                    )
                                )
                            }
                            placeholder="5000"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Payment Method
                        </Label>

                        <Select
                            value={
                                formData.paymentMethod
                            }
                            onValueChange={(
                                value
                            ) =>
                                handleChange(
                                    "paymentMethod",
                                    value ??
                                        "Cash"
                                )
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Cash">
                                    Cash
                                </SelectItem>

                                <SelectItem value="UPI">
                                    UPI
                                </SelectItem>

                                <SelectItem value="Card">
                                    Card
                                </SelectItem>

                                <SelectItem value="Bank Transfer">
                                    Bank
                                    Transfer
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Status
                        </Label>

                        <Select
                            value={
                                formData.status
                            }
                            onValueChange={(
                                value
                            ) =>
                                handleChange(
                                    "status",
                                    value ??
                                        "Pending"
                                )
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Paid">
                                    Paid
                                </SelectItem>

                                <SelectItem value="Pending">
                                    Pending
                                </SelectItem>

                                <SelectItem value="Failed">
                                    Failed
                                </SelectItem>

                                <SelectItem value="Refunded">
                                    Refunded
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Transaction Date
                        </Label>

                        <Input
                            type="date"
                            value={
                                formData.transactionDate
                            }
                            onChange={(e) =>
                                handleChange(
                                    "transactionDate",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Reference Number
                        </Label>

                        <Input
                            value={
                                formData.referenceNumber
                            }
                            onChange={(e) =>
                                handleChange(
                                    "referenceNumber",
                                    e.target.value
                                )
                            }
                            placeholder="TXN123456789"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Due Date
                        </Label>

                        <Input
                            type="date"
                            value={
                                formData.dueDate
                            }
                            onChange={(e) =>
                                handleChange(
                                    "dueDate",
                                    e.target.value
                                )
                            }
                        />
                    </div>
                </div>
            </CardContent>

            <CardFooter className="mt-8 justify-end">
                <button
                    type="submit"
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                >
                    {submitLabel}
                </button>
            </CardFooter>
        </form>
    );
}