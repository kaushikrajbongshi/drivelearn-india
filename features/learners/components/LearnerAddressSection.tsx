"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import type { Learner } from "@/features/learners/types/learner";

interface LearnerAddressSectionProps {
    defaultValues?: Partial<Learner>;
}

export default function LearnerAddressSection({
    defaultValues,
}: LearnerAddressSectionProps) {
    return (
        <section className="space-y-4">
            <div>
                <h3 className="text-base font-semibold">
                    Address Information
                </h3>

                <p className="text-sm text-muted-foreground">
                    Update the learner's residential address.
                </p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="address">
                    Address
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
                        defaultValue={defaultValues?.landmark}
                        placeholder="Near Bus Stand"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="pincode">
                        PIN Code
                    </Label>

                    <Input
                        id="pincode"
                        defaultValue={defaultValues?.pincode}
                        placeholder="781001"
                    />
                </div>
            </div>
        </section>
    );
}