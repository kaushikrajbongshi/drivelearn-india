"use client";

import FeaturesHeader from "./FeaturesHeader";
import FeaturesGrid from "./FeaturesGrid";

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <FeaturesHeader />

        <FeaturesGrid />

      </div>
    </section>
  );
}