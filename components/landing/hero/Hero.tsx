"use client";


import BackgroundEffects from "./BackgroundEffects";
import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

export default function Hero() {

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-50 selection:bg-indigo-500/30">

      <BackgroundEffects />

      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-22 lg:pb-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          <HeroContent />

          <HeroPreview />

        </div>

      </main>

    </section>
  );
}