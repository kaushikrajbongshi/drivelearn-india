"use client";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonial-data";

export default function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          {...testimonial}
          index={index}
        />
      ))}
    </div>
  );
}