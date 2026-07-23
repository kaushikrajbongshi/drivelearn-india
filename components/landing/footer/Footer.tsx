"use client";

import Link from "next/link";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Top */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">

          <div>
            <FooterBrand />

            <FooterSocial />
          </div>

          <FooterLinks />

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">

          <p>
            © {new Date().getFullYear()} DriveLearn India. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              href="/privacy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}