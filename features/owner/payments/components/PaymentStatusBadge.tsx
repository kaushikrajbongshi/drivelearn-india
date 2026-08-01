import { Badge } from "@/components/ui/badge";

import type { PaymentStatus } from "../types/payment";

interface PaymentStatusBadgeProps {
  status: PaymentStatus;
}

export default function PaymentStatusBadge({
  status,
}: PaymentStatusBadgeProps) {
  switch (status) {
    case "Paid":
      return (
        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
          {status}
        </Badge>
      );

    case "Pending":
      return (
        <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
          {status}
        </Badge>
      );

    case "Failed":
      return (
        <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
          {status}
        </Badge>
      );

    case "Refunded":
      return (
        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
          {status}
        </Badge>
      );

    default:
      return (
        <Badge variant="secondary">
          {status}
        </Badge>
      );
  }
}