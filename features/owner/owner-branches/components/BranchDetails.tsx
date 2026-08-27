"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Building2,
    CalendarDays,
    Car,
    Clock,
    Mail,
    MapPin,
    Pencil,
    Phone,
    Users,
    X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";

import BranchStatusBadge from "./BranchStatusBadge";

import type { Branch } from "../types/branch";

interface BranchDetailsProps {
    branch: Branch;
    onClose?: () => void;
    onEdit?: () => void;
}

type BranchTab =
    | "overview"
    | "instructors"
    | "vehicles"
    | "settings";

export default function BranchDetails({
    branch,
    onClose,
    onEdit,
}: BranchDetailsProps) {
    const [activeTab, setActiveTab] =
        useState<BranchTab>("overview");

    return (
        <Card className="h-fit">
            {/* Header */}
            <CardHeader className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Building2 className="size-5 text-primary" />
                        </div>

                        <div className="min-w-0">
                            <h2 className="truncate text-base font-semibold">
                                {branch.name}
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                {branch.code}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <BranchStatusBadge
                            status={branch.status}
                        />

                        {onClose && (
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={onClose}
                            >
                                <X className="size-4" />
                            </Button>
                        )}
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex overflow-x-auto border-b">
                    <TabButton
                        active={activeTab === "overview"}
                        onClick={() =>
                            setActiveTab("overview")
                        }
                    >
                        Overview
                    </TabButton>

                    <TabButton
                        active={
                            activeTab === "instructors"
                        }
                        onClick={() =>
                            setActiveTab("instructors")
                        }
                    >
                        Instructors
                    </TabButton>

                    <TabButton
                        active={activeTab === "vehicles"}
                        onClick={() =>
                            setActiveTab("vehicles")
                        }
                    >
                        Vehicles
                    </TabButton>

                    <TabButton
                        active={activeTab === "settings"}
                        onClick={() =>
                            setActiveTab("settings")
                        }
                    >
                        Settings
                    </TabButton>
                </div>
            </CardHeader>

            <CardContent>
                {activeTab === "overview" && (
                    <OverviewTab branch={branch} />
                )}

                {activeTab === "instructors" && (
                    <PlaceholderTab
                        icon={
                            <Users className="size-5" />
                        }
                        title="Branch Instructors"
                        description={`${branch.instructorCount} instructors are assigned to this branch.`}
                    />
                )}

                {activeTab === "vehicles" && (
                    <PlaceholderTab
                        icon={
                            <Car className="size-5" />
                        }
                        title="Branch Vehicles"
                        description={`${branch.vehicleCount} vehicles are assigned to this branch.`}
                    />
                )}

                {activeTab === "settings" && (
                    <PlaceholderTab
                        icon={
                            <Building2 className="size-5" />
                        }
                        title="Branch Settings"
                        description="Manage branch-specific settings and preferences."
                    />
                )}

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-3 border-t pt-6 sm:flex-row">
                    <Button
                        className="flex-1"
                        onClick={onEdit}
                    >
                        <Pencil className="mr-2 size-4" />
                        Edit Branch
                    </Button>

                    <Button
                        variant="outline"
                        className="flex-1"
                        nativeButton={false}
                        render={
                            <Link
                                href={`/owner/branches/${branch.id}`}
                            />
                        }
                    >
                        View Details
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

/* -------------------------------------------------------------------------- */
/* Overview                                                                    */
/* -------------------------------------------------------------------------- */

function OverviewTab({
    branch,
}: {
    branch: Branch;
}) {
    return (
        <div className="space-y-3">
            {/* Summary */}
            <div className="grid grid-cols-3 gap-3">
                <SummaryItem
                    icon={
                        <Users className="size-4" />
                    }
                    label="Instructors"
                    value={branch.instructorCount}
                />

                <SummaryItem
                    icon={
                        <Users className="size-4" />
                    }
                    label="Learners"
                    value={branch.learnerCount}
                />

                <SummaryItem
                    icon={
                        <Car className="size-4" />
                    }
                    label="Vehicles"
                    value={branch.vehicleCount}
                />
            </div>

            {/* Location */}
            <div className="space-y-4">
                <h3 className="text-sm font-semibold">
                    Location
                </h3>

                <InfoItem
                    icon={
                        <MapPin className="size-4" />
                    }
                    label="Address"
                    value={branch.address}
                />

                <div className="grid gap-4 sm:grid-cols-3">
                    <InfoItem
                        icon={
                            <MapPin className="size-4" />
                        }
                        label="City"
                        value={branch.city}
                    />

                    <InfoItem
                        icon={
                            <MapPin className="size-4" />
                        }
                        label="State"
                        value={branch.state}
                    />

                    <InfoItem
                        icon={
                            <MapPin className="size-4" />
                        }
                        label="Pincode"
                        value={branch.pincode}
                    />
                </div>
            </div>

            {/* Contact */}
            <div className="space-y-4 border-t pt-6">
                <h3 className="text-sm font-semibold">
                    Contact Information
                </h3>

                <InfoItem
                    icon={
                        <Phone className="size-4" />
                    }
                    label="Phone"
                    value={branch.phone}
                />

                <InfoItem
                    icon={
                        <Mail className="size-4" />
                    }
                    label="Email"
                    value={branch.email}
                />
            </div>

            {/* Working Hours */}
            <div className="space-y-4 border-t pt-6">
                <h3 className="text-sm font-semibold">
                    Working Hours
                </h3>

                <InfoItem
                    icon={
                        <Clock className="size-4" />
                    }
                    label="Hours"
                    value={branch.workingHours}
                />
            </div>

            {/* Created */}
            <div className="border-t pt-6">
                <InfoItem
                    icon={
                        <CalendarDays className="size-4" />
                    }
                    label="Created On"
                    value={branch.createdAt}
                />
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* Tab Button                                                                  */
/* -------------------------------------------------------------------------- */

interface TabButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

function TabButton({
    active,
    onClick,
    children,
}: TabButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`whitespace-nowrap border-b-2 px-3 py-2 text-sm font-medium transition-colors ${active
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
        >
            {children}
        </button>
    );
}

/* -------------------------------------------------------------------------- */
/* Summary Item                                                                */
/* -------------------------------------------------------------------------- */

interface SummaryItemProps {
    icon: React.ReactNode;
    label: string;
    value: number;
}

function SummaryItem({
    icon,
    label,
    value,
}: SummaryItemProps) {
    return (
        <div className="rounded-lg border p-3">
            <div className="flex items-center gap-2 text-muted-foreground">
                {icon}

                <span className="text-xs">
                    {label}
                </span>
            </div>

            <p className="mt-2 text-lg font-semibold">
                {value}
            </p>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* Info Item                                                                   */
/* -------------------------------------------------------------------------- */

interface InfoItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

function InfoItem({
    icon,
    label,
    value,
}: InfoItemProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0 text-muted-foreground">
                {icon}
            </div>

            <div className="min-w-0">
                <p className="text-xs text-muted-foreground">
                    {label}
                </p>

                <p className="text-sm font-medium">
                    {value}
                </p>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* Placeholder Tabs                                                            */
/* -------------------------------------------------------------------------- */

interface PlaceholderTabProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function PlaceholderTab({
    icon,
    title,
    description,
}: PlaceholderTabProps) {
    return (
        <div className="flex min-h-48 flex-col items-center justify-center rounded-lg border border-dashed px-6 text-center">
            <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                {icon}
            </div>

            <h3 className="text-sm font-semibold">
                {title}
            </h3>

            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                {description}
            </p>
        </div>
    );
}