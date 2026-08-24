"use client";

import type { InstructorProfile } from "../types/instructor-profile";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText } from "lucide-react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

interface InstructorProfileFormProps {
    profile: InstructorProfile;
}

export default function InstructorProfileForm({
    profile,
}: InstructorProfileFormProps) {
    function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        // TODO:
        // React Hook Form
        // Zod Validation
        // API Call
        // Toast
    }

    return (
        <form
            className="space-y-8"
            onSubmit={handleSubmit}
        >
            {/* Personal Information */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-base font-semibold">
                        Personal Information
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Update your personal and contact information.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="full-name">
                            Full Name
                        </Label>

                        <Input
                            id="full-name"
                            defaultValue={profile.fullName}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">
                            Email
                        </Label>

                        <Input
                            id="email"
                            type="email"
                            defaultValue={profile.email}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">
                            Phone
                        </Label>

                        <Input
                            id="phone"
                            defaultValue={profile.phone}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="date-of-birth">
                            Date of Birth
                        </Label>

                        <Input
                            id="date-of-birth"
                            type="date"
                            defaultValue={profile.dateOfBirth}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Gender
                        </Label>

                        <Select
                            defaultValue={profile.gender}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="male">
                                    Male
                                </SelectItem>

                                <SelectItem value="female">
                                    Female
                                </SelectItem>

                                <SelectItem value="other">
                                    Other
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>
            {/* Profile Photo */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-base font-semibold">
                        Profile Photo
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Upload a clear profile photo.
                    </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex size-20 items-center justify-center overflow-hidden rounded-full border bg-muted">
                        {profile.profileImage ? (
                            <img
                                src={profile.profileImage}
                                alt={profile.fullName}
                                className="size-full object-cover"
                            />
                        ) : (
                            <span className="text-sm text-muted-foreground">
                                No Photo
                            </span>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="profile-photo">
                            Upload Photo
                        </Label>

                        <Input
                            id="profile-photo"
                            type="file"
                            accept="image/*"
                        />
                    </div>
                </div>
            </section>

            {/* Address Information */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-base font-semibold">
                        Address Information
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Update your current address details.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">
                            Address
                        </Label>

                        <Input
                            id="address"
                            defaultValue={profile.address}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city">
                            City
                        </Label>

                        <Input
                            id="city"
                            defaultValue={profile.city}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="state">
                            State
                        </Label>

                        <Input
                            id="state"
                            defaultValue={profile.state}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="pincode">
                            Pincode
                        </Label>

                        <Input
                            id="pincode"
                            defaultValue={profile.pincode}
                        />
                    </div>
                </div>
            </section>

            {/* Professional Information */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-base font-semibold">
                        Professional Information
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Update your driving and professional details.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="driving-school">
                            Driving School
                        </Label>

                        <Input
                            id="driving-school"
                            defaultValue={profile.drivingSchool}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="license-number">
                            License Number
                        </Label>

                        <Input
                            id="license-number"
                            defaultValue={profile.licenseNumber}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="license-expiry">
                            License Expiry
                        </Label>

                        <Input
                            id="license-expiry"
                            type="date"
                            defaultValue={profile.licenseExpiry}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="experience">
                            Years of Experience
                        </Label>

                        <Input
                            id="experience"
                            type="number"
                            min="0"
                            defaultValue={profile.yearsOfExperience}
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label>
                            Vehicle Types
                        </Label>

                        <Input
                            defaultValue={profile.vehicleTypes.join(", ")}
                            placeholder="Car, Bike, Heavy Vehicle"
                        />
                    </div>
                </div>
            </section>

            {/* Documents */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-base font-semibold">
                        Documents
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Upload or replace your instructor documents.
                    </p>
                </div>

                <div className="space-y-3">
                    {profile.documents.map((document) => (
                        <div
                            key={document.name}
                            className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex size-9 items-center justify-center rounded-md bg-muted">
                                    <FileText className="size-4 text-muted-foreground" />
                                </div>

                                <div>
                                    <p className="text-sm font-medium">
                                        {document.name}
                                    </p>

                                    <p className="text-xs text-muted-foreground capitalize">
                                        {document.status}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Input
                                    type="file"
                                    className="w-full sm:w-60"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="additional-document">
                        Add Document
                    </Label>

                    <Input
                        id="additional-document"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                    />
                </div>
            </section>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                <Button
                    type="button"
                    variant="outline"
                >
                    Cancel
                </Button>

                <Button type="submit">
                    Save Changes
                </Button>
            </div>
        </form>
    );
}