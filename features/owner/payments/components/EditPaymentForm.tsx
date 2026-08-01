"use client";

import PaymentForm from "./PaymentForm";

import type { Payment } from "../types/payment";

interface EditPaymentFormProps {
    payment: Payment;
}

export default function EditPaymentForm({
    payment,
}: EditPaymentFormProps) {
    const handleSubmit = (
        values: Partial<Payment>
    ) => {
        console.log(values);
    };

    return (
        <PaymentForm
            defaultValues={payment}
            onSubmit={handleSubmit}
            submitLabel="Update Payment"
        />
    );
}