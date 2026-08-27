"use client";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import type { Branch } from "../types/branch";

interface BranchFormProps {
    defaultValues?: Partial<Branch>;
    cancelHref?: string;
    onCancel?: () => void;
}

export default function BranchForm({
    defaultValues,
    cancelHref,
    onCancel,
}: BranchFormProps) {
    const isEdit = Boolean(defaultValues?.id);

    function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        // TODO:
        // React Hook Form
        // Zod validation
        // API call
        // Toast
    }

    return (
        <form
            className="space-y-2"
            onSubmit={handleSubmit}
        >
            {/* Branch Information */}
            <section className="space-y-4">


                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="branch-name">
                            Branch Name
                        </Label>

                        <Input
                            id="branch-name"
                            defaultValue={defaultValues?.name}
                            placeholder="Main Branch"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="branch-code">
                            Branch Code
                        </Label>

                        <Input
                            id="branch-code"
                            defaultValue={defaultValues?.code}
                            placeholder="BR-001"
                            disabled={isEdit}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">
                            Phone
                        </Label>

                        <Input
                            id="phone"
                            type="tel"
                            defaultValue={defaultValues?.phone}
                            placeholder="+91 98765 43210"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">
                            Email
                        </Label>

                        <Input
                            id="email"
                            type="email"
                            defaultValue={defaultValues?.email}
                            placeholder="branch@example.com"
                        />
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-base font-semibold">
                        Location
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Add the physical location of the branch.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">
                            Address
                        </Label>

                        <Input
                            id="address"
                            defaultValue={defaultValues?.address}
                            placeholder="Enter branch address"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city">
                            City
                        </Label>

                        <Input
                            id="city"
                            defaultValue={defaultValues?.city}
                            placeholder="Bengaluru"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="state">
                            State
                        </Label>

                        <Input
                            id="state"
                            defaultValue={defaultValues?.state}
                            placeholder="Karnataka"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="pincode">
                            Pincode
                        </Label>

                        <Input
                            id="pincode"
                            defaultValue={defaultValues?.pincode}
                            placeholder="560038"
                        />
                    </div>
                </div>
            </section>

            {/* Operating Information */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-base font-semibold">
                        Operating Information
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Configure the branch working hours and status.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="working-hours">
                            Working Hours
                        </Label>

                        <Input
                            id="working-hours"
                            defaultValue={
                                defaultValues?.workingHours
                            }
                            placeholder="7:00 AM - 8:00 PM"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Status
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.status ??
                                "active"
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

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                {cancelHref ? (
                    <Button
                        type="button"
                        variant="outline"
                        nativeButton={false}
                        render={
                            <Link href={cancelHref} />
                        }
                    >
                        Cancel
                    </Button>
                ) : (
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                )}

                <Button type="submit">
                    {isEdit
                        ? "Save Changes"
                        : "Create Branch"}
                </Button>
            </div>
        </form>
    );
}