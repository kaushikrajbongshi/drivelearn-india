"use client";

import Link from "next/link";
import { footerSections } from "./footer-data";

export default function FooterLinks() {
  return (
    <div className="grid flex-1 grid-cols-2 gap-10 md:grid-cols-3">
      {footerSections.map((section) => (
        <div key={section.title}>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
            {section.title}
          </h3>

          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}