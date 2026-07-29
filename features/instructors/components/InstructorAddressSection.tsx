"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import type { Instructor } from "@/features/instructors/types/instructor";

interface InstructorAddressSectionProps {
    defaultValues?: Partial<Instructor>;
}

export default function InstructorAddressSection({
    defaultValues,
}: InstructorAddressSectionProps) {
    return (
        <section className="space-y-4">
            <div>
                <h3 className="text-base font-semibold">
                    Address Information
                </h3>

                <p className="text-sm text-muted-foreground">
                    Update the instructor's address details.
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
                        defaultValue={defaultValues?.landmark}
                        placeholder="Near Railway Station"
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