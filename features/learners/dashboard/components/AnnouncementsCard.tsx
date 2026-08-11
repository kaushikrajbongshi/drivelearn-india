"use client";

import { Gift, Info } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Announcement } from "../types/types";

interface AnnouncementsCardProps {
  announcements: Announcement[];
}

export default function AnnouncementsCard({ announcements }: AnnouncementsCardProps) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-[13px] font-medium text-neutral-500 dark:text-zinc-400">
          Announcements
        </h2>
        <Link
          href="/learner/announcements"
          className="text-[13px] font-medium text-emerald-600 outline-none transition-colors hover:text-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:text-emerald-400 dark:hover:text-emerald-300 dark:focus-visible:ring-offset-[#161616]"
        >
          View all →
        </Link>
      </div>

      {announcements.length === 0 ? (
        <p className="mt-4 text-[15px] text-neutral-500 dark:text-zinc-400">
          No announcements right now.
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-black/[0.06] dark:divide-white/[0.06]">
          {announcements.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-3.5 rounded-xl py-4 transition-colors first:pt-0 last:pb-0 hover:bg-black/[0.02] dark:hover:bg-white/[0.03]"
            >
              <div
                className={cn(
                  "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl",
                  item.variant === "offer"
                    ? "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400"
                    : "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400"
                )}
              >
                {item.variant === "offer" ? (
                  <Gift className="h-3.5 w-3.5" />
                ) : (
                  <Info className="h-3.5 w-3.5" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-medium leading-snug text-neutral-900 dark:text-white">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[13px] text-neutral-500 dark:text-zinc-400">
                  {item.timeAgo}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}