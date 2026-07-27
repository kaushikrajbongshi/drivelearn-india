"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import type { Subscription } from "@/features/admin/subscriptions/types/subscription";

interface SubscriptionFormProps {
    defaultValues?: Partial<Subscription>;
}

export default function SubscriptionForm({
    defaultValues,
}: SubscriptionFormProps) {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <div>
                    <h3 className="text-base font-semibold">
                        Subscription Information
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Configure the subscription details for a driving school.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {/* School */}
                    <div className="space-y-2 md:col-span-2">
                        <Label>
                            Driving School
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.schoolId ?? "SCH-1001"
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select School" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="SCH-1001">
                                    Driving School 1
                                </SelectItem>

                                <SelectItem value="SCH-1002">
                                    Driving School 2
                                </SelectItem>

                                <SelectItem value="SCH-1003">
                                    Driving School 3
                                </SelectItem>

                                <SelectItem value="SCH-1004">
                                    Driving School 4
                                </SelectItem>

                                <SelectItem value="SCH-1005">
                                    Driving School 5
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Plan */}
                    <div className="space-y-2">
                        <Label>
                            Subscription Plan
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.plan ?? "free"
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="free">
                                    Free
                                </SelectItem>

                                <SelectItem value="basic">
                                    Basic
                                </SelectItem>

                                <SelectItem value="premium">
                                    Premium
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Billing */}
                    <div className="space-y-2">
                        <Label>
                            Billing Cycle
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.billingCycle ??
                                "monthly"
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="monthly">
                                    Monthly
                                </SelectItem>

                                <SelectItem value="yearly">
                                    Yearly
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Price */}
                    <div className="space-y-2">
                        <Label htmlFor="price">
                            Price
                        </Label>

                        <Input
                            id="price"
                            type="number"
                            defaultValue={defaultValues?.price}
                            placeholder="29"
                        />
                    </div>

                    {/* Payment Status */}
                    <div className="space-y-2">
                        <Label>
                            Payment Status
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.paymentStatus ??
                                "paid"
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="paid">
                                    Paid
                                </SelectItem>

                                <SelectItem value="pending">
                                    Pending
                                </SelectItem>

                                <SelectItem value="failed">
                                    Failed
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Start Date */}
                    <div className="space-y-2">
                        <Label htmlFor="start-date">
                            Start Date
                        </Label>

                        <Input
                            id="start-date"
                            type="date"
                            defaultValue={defaultValues?.startDate}
                        />
                    </div>

                    {/* Expiry Date */}
                    <div className="space-y-2">
                        <Label htmlFor="expiry-date">
                            Expiry Date
                        </Label>

                        <Input
                            id="expiry-date"
                            type="date"
                            defaultValue={defaultValues?.expiryDate}
                        />
                    </div>

                    {/* Status */}
                    <div className="space-y-2 md:col-span-2">
                        <Label>
                            Subscription Status
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.status ??
                                "active"
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="active">
                                    Active
                                </SelectItem>

                                <SelectItem value="expired">
                                    Expired
                                </SelectItem>

                                <SelectItem value="cancelled">
                                    Cancelled
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>
        </div>
    );
}