import { notFound } from "next/navigation";

import { schoolsData } from "@/components/landing/schools/data/schoolsData"
import SchoolDetails from "@/components/landing/schools/details/components/SchoolDetails";

export default async function SchoolDetailsRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const school = schoolsData.find(
    (school) => school.id === slug
  );

  if (!school) {
    notFound();
  }

  return <SchoolDetails school={school} />;
}