"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import type { School } from "@/features/schools/types/school";

interface SchoolAddressSectionProps {
  defaultValues?: Partial<School>;
}

export default function SchoolAddressSection({
  defaultValues,
}: SchoolAddressSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-base font-semibold">
          Address Information
        </h3>

        <p className="text-sm text-muted-foreground">
          Update the school's address details.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">
          Full Address
        </Label>

        <Textarea
          id="address"
          rows={4}
          defaultValue={defaultValues?.address}
          placeholder="Enter complete address..."
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="landmark">
            Landmark
          </Label>

          <Input
            id="landmark"
            placeholder="Near Railway Station"
            defaultValue={defaultValues?.landmark}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pincode">
            PIN Code
          </Label>

          <Input
            id="pincode"
            placeholder="781001"
            defaultValue={defaultValues?.pincode}
          />
        </div>
      </div>
    </section>
  );
}