"use client";

import { Bell, ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-neutral-200/70 bg-white/80 px-6 backdrop-blur-md dark:border-white/[0.06] dark:bg-neutral-950/80">
      {/* Left */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-full text-neutral-600 hover:bg-neutral-100 dark:text-zinc-300 dark:hover:bg-white/[0.06]"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation</span>
        </Button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative h-10 w-10 rounded-full text-neutral-600 hover:bg-neutral-100 dark:text-zinc-300 dark:hover:bg-white/[0.06]"
        >
          <Bell className="h-[19px] w-[19px]" />

          <span className="absolute right-2 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-600 px-1 text-[9px] font-semibold text-white">
            3
          </span>

          <span className="sr-only">Notifications</span>
        </Button>

        {/* Profile */}
        <button
          type="button"
          className="group flex items-center gap-2.5 rounded-full py-1 pl-2 pr-1.5 transition-colors hover:bg-neutral-100 dark:hover:bg-white/[0.06]"
        >
          <Avatar className="h-9 w-9">
            <AvatarImage
              src=""
              alt="Learner profile"
            />
            <AvatarFallback className="bg-emerald-100 text-sm font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
              SR
            </AvatarFallback>
          </Avatar>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium leading-none text-neutral-900 dark:text-white">
              Suman Raj
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-zinc-500">
              Learner
            </p>
          </div>

          <ChevronDown className="hidden h-4 w-4 text-neutral-400 transition-transform group-hover:translate-y-0.5 sm:block" />
        </button>
      </div>
    </header>
  );
}