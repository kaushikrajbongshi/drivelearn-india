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

import type { State } from "@/features/states/types/state";

interface StateFormProps {
    defaultValues?: Partial<State>;
}

export default function StateForm({
    defaultValues,
}: StateFormProps) {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <div>
                    <h3 className="text-base font-semibold">
                        State Information
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Enter the state details below.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {/* State Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name">
                            State Name
                        </Label>

                        <Input
                            id="name"
                            placeholder="Assam"
                            defaultValue={defaultValues?.name}
                        />
                    </div>

                    {/* State Code */}
                    <div className="space-y-2">
                        <Label htmlFor="code">
                            State Code
                        </Label>

                        <Input
                            id="code"
                            placeholder="AS"
                            defaultValue={defaultValues?.code}
                        />
                    </div>

                    {/* Status */}
                    <div className="space-y-2 md:col-span-2">
                        <Label>
                            Status
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.status ?? "active"
                            }
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
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>
        </div>
    );
}