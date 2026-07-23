"use client";

import Logo from "@/components/layout/navbar/Logo";

export default function FooterBrand() {
  return (
    <div className="max-w-sm">

      {/* Logo */}
      <Logo />

      {/* Description */}
      <p className="mt-5 text-sm leading-7 text-muted-foreground">
        DriveLearn India is a modern marketplace that connects learners with
        trusted driving schools across India. Compare schools, book courses,
        track progress, and learn with confidence.
      </p>

      {/* Contact */}
      <div className="mt-6 space-y-2 text-sm text-muted-foreground">
        <p>
          📧 support@drivelearnindia.com
        </p>

        <p>
          📞 +91 98765 43210
        </p>
      </div>

    </div>
  );
}