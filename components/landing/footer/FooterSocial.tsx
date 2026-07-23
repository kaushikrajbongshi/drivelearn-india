"use client";

import Link from "next/link";
import { socialLinks } from "./footer-data";

export default function FooterSocial() {
  return (
    <div className="mt-8 flex items-center gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <Link
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Icon className="h-5 w-5" />
          </Link>
        );
      })}
    </div>
  );
}