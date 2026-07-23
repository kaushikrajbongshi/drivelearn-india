"use client";

import HowItWorksHeader from "./HowItWorksHeader";
import StepsGrid from "./StepsGrid";

export default function HowItWorks() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HowItWorksHeader />

        <StepsGrid />
      </div>
    </section>
  );
}