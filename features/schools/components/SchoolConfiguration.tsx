"use client";

import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { School } from "@/features/schools/types/school";

interface SchoolConfigurationProps {
  defaultValues?: Partial<School>;
}

export default function SchoolConfiguration({
  defaultValues,
}: SchoolConfigurationProps) {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-base font-semibold">
          School Configuration
        </h3>

        <p className="text-sm text-muted-foreground">
          Configure the subscription plan, verification and current status.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Subscription */}
        <div className="space-y-2">
          <Label>Subscription Plan</Label>

          <Select
            defaultValue={defaultValues?.subscription ?? "free"}
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

        {/* Verification */}
        <div className="space-y-2">
          <Label>Verification</Label>

          <Select
            defaultValue={defaultValues?.verification ?? "pending"}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="pending">
                Pending
              </SelectItem>

              <SelectItem value="verified">
                Verified
              </SelectItem>

              <SelectItem value="rejected">
                Rejected
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <Label>Status</Label>

          <Select
            defaultValue={defaultValues?.status ?? "active"}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="active">
                Active
              </SelectItem>

              <SelectItem value="inactive">
                Inactive
              </SelectItem>

              <SelectItem value="suspended">
                Suspended
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}