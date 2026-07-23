"use client";

import FAQHeader from "./FAQHeader";
import FAQList from "./FAQList";

export default function FAQ() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FAQHeader />

        <FAQList />
      </div>
    </section>
  );
}