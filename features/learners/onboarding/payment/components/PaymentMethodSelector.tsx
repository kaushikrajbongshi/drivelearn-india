"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { PaymentMethod } from "../types/payment";

interface PaymentMethodSelectorProps {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
}

const METHODS: { value: PaymentMethod; label: string; iconSrc: string }[] = [
  { value: "upi", label: "UPI", iconSrc: "/icons/upi.svg" },
  { value: "card", label: "Card", iconSrc: "/icons/card.svg" },
  { value: "netbanking", label: "Net Banking", iconSrc: "/icons/netbanking.svg" },
];

export default function PaymentMethodSelector({ value, onChange }: PaymentMethodSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {METHODS.map((method) => {
        const isSelected = value === method.value;

        return (
          <button
            key={method.value}
            type="button"
            onClick={() => onChange(method.value)}
            className={cn(
              "flex flex-col items-center gap-2 rounded-xl border px-3 py-4 text-sm font-medium transition-colors",
              isSelected
                ? "border-emerald-600 bg-emerald-50 text-emerald-700 dark:border-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400"
                : "border-black/10 text-neutral-600 hover:border-neutral-300 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/20"
            )}
          >
            <Image src={method.iconSrc} alt={method.label} width={28} height={28} className="h-7 w-7 object-contain" />
            {method.label}
          </button>
        );
      })}
    </div>
  );
}