"use client";

import StatsHeader from "./StatsHeader";
import StatsGrid from "./StatsGrid";

export default function Stats() {
  return (
    <section className="relative py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <StatsHeader />

        <StatsGrid />

      </div>

    </section>
  );
}