"use client";

import PopularSchoolsHeader from "./PopularSchoolsHeader";
import SchoolsGrid from "./SchoolsGrid";

export default function PopularSchools() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PopularSchoolsHeader />

        <SchoolsGrid />
      </div>
    </section>
  );
}