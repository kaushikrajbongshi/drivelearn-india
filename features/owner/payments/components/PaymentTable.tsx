"use client";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import PaymentTableRow from "./PaymentTableRow";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Payment } from "../types/payment";
import PaymentStatusBadge from "./PaymentStatusBadge";

interface PaymentTableProps {
    payments: Payment[];
}

export default function PaymentTable({
    payments,
}: PaymentTableProps) {
    return (
        <>
            {/* Desktop */}
            <Card className="hidden p-5 md:block">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    Payment ID
                                </TableHead>

                                <TableHead>
                                    Learner
                                </TableHead>

                                <TableHead>
                                    Course
                                </TableHead>

                                <TableHead>
                                    Amount
                                </TableHead>

                                <TableHead>
                                    Method
                                </TableHead>

                                <TableHead>
                                    Status
                                </TableHead>

                                <TableHead>
                                    Date
                                </TableHead>

                                <TableHead className="text-right">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {payments.map(
                                (payment) => (
                                    <PaymentTableRow
                                        key={
                                            payment.id
                                        }
                                        payment={
                                            payment
                                        }
                                    />
                                )
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Mobile */}
            <div className="space-y-4 md:hidden">
                {payments.map(
                    (payment) => (
                        <Card
                            key={payment.id}
                        >
                            <CardContent className="space-y-4 p-4">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            {
                                                payment.paymentId
                                            }
                                        </h3>

                                        <p className="text-sm text-muted-foreground">
                                            {
                                                payment.learnerName
                                            }
                                        </p>
                                    </div>

                                    <PaymentStatusBadge
                                        status={
                                            payment.status
                                        }
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <p className="text-muted-foreground">
                                            Course
                                        </p>

                                        <p>
                                            {
                                                payment.courseName
                                            }
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-muted-foreground">
                                            Amount
                                        </p>

                                        <p>
                                            ₹
                                            {payment.amount.toLocaleString()}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-muted-foreground">
                                            Method
                                        </p>

                                        <p>
                                            {
                                                payment.paymentMethod
                                            }
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-muted-foreground">
                                            Date
                                        </p>

                                        <p>
                                            {
                                                payment.transactionDate
                                            }
                                        </p>
                                    </div>
                                </div>

                                <Button
                                    className="w-full"
                                    nativeButton={
                                        false
                                    }
                                    render={
                                        <Link
                                            href={`/owner/payments/${payment.id}`}
                                        />
                                    }
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    )
                )}
            </div>
        </>
    );
}