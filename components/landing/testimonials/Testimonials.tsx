"use client";

import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsGrid from "./TestimonialsGrid";

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TestimonialsHeader />

        <TestimonialsGrid />
      </div>
    </section>
  );
}