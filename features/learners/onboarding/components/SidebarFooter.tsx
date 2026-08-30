"use client";

import { LifeBuoy } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export default function SidebarFooter() {
  return (
    <div className="mt-auto px-6 pb-6">
      <motion.div
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          variant="ghost"
          className="h-auto w-full justify-start gap-3 rounded-xl px-3 py-3 hover:bg-red-50 dark:hover:bg-red-950/20"
        >
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-50 dark:bg-red-950/30">
            <LifeBuoy className="h-5 w-5 text-red-600 dark:text-red-400" />
          </div>

          <div className="text-left">
            <p className="text-sm font-medium text-neutral-900 dark:text-white">
              Need help?
            </p>

            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Contact our support team
            </p>
          </div>
        </Button>
      </motion.div>
    </div>
  );
}