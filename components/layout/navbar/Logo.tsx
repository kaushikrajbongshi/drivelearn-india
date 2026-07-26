"use client";

import Link from "next/link";
import { CarFront } from "lucide-react";

interface LogoProps {
  collapsed?: boolean;
}

export default function Logo({
  collapsed = false,
}: LogoProps) {
  return (
    <Link href="#" className="flex items-center gap-3 mb-1 pt-1">
      <div className="flex size-10 shrink-0 items-center justify-center ml-[-2]">
        <CarFront className="size-5" />
      </div>

      {!collapsed && (
        <div>
          <h1 className="text-lg font-bold leading-none">
            DriveLearn
          </h1>

          <p className="mt-0.5 text-xs text-muted-foreground leading-none">
            India
          </p>
        </div>
      )}
    </Link>
  );
}

