import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Button } from "@/components/ui/button";

import EditInstructorForm from "@/features/owner/instructors/components/EditInstructorForm";
import { instructors } from "@/features/owner/instructors/data/instructors";

interface EditInstructorPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditInstructorPage({
  params,
}: EditInstructorPageProps) {
  const { id } = await params;

  const instructor = instructors.find(
    (item) => item.id === Number(id)
  );

  if (!instructor) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Button
        variant="outline"
        nativeButton={false}
        render={
          <Link
            href={`/owner/instructors/${instructor.id}`}
          />
        }
      >
        <ArrowLeft className="mr-2 size-4" />
        Back to Details
      </Button>

      <DashboardPageHeader
        title={`Edit ${instructor.name}`}
        description="Update instructor information."
      />

      <EditInstructorForm
        instructor={instructor}
      />
    </div>
  );
}