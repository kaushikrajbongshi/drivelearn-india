"use client";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import PaymentActions from "./PaymentActions";
import PaymentStatusBadge from "./PaymentStatusBadge";

import type { Payment } from "../types/payment";

interface PaymentTableRowProps {
    payment: Payment;
}

export default function PaymentTableRow({
    payment,
}: PaymentTableRowProps) {
    return (
        <TableRow>
            <TableCell className="font-medium">
                {payment.paymentId}
            </TableCell>

            <TableCell>
                <div>
                    <p className="font-medium">
                        {payment.learnerName}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        {payment.learnerEmail}
                    </p>
                </div>
            </TableCell>

            <TableCell>
                {payment.courseName}
            </TableCell>

            <TableCell>
                ₹
                {payment.amount.toLocaleString()}
            </TableCell>

            <TableCell>
                {payment.paymentMethod}
            </TableCell>

            <TableCell>
                <PaymentStatusBadge
                    status={payment.status}
                />
            </TableCell>

            <TableCell>
                {payment.transactionDate}
            </TableCell>

            <TableCell className="text-right">
                <PaymentActions
                    payment={payment}
                />
            </TableCell>
        </TableRow>
    );
}