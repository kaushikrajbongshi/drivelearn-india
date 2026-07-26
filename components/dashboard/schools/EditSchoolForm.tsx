"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import SchoolForm from "./SchoolForm";
import SchoolAddressSection from "./SchoolAddressSection";
import SchoolConfiguration from "./SchoolConfiguration";
import SchoolLogoUpload from "./SchoolLogoUpload";

import type { School } from "@/features/admin/schools/types/school";

interface EditSchoolFormProps {
  school: School;
}

export default function EditSchoolForm({
  school,
}: EditSchoolFormProps) {
  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    // TODO:
    // React Hook Form
    // Zod
    // API
    // Toast
  }

  return (
    <form
      className="space-y-8"
      onSubmit={handleSubmit}
    >
      <SchoolForm
        defaultValues={school}
      />

      <SchoolAddressSection
        defaultValues={school}
      />

      <SchoolConfiguration
        defaultValues={school}
      />

      <SchoolLogoUpload
        logo={school.logo}
      />

      <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
        <Button
          type="button"
          variant="outline"
          render={
            <Link
              href={`/admin/schools/${school.id}`}
            />
          }
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