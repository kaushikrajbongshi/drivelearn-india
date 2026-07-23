"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CTAButtons() {
  const router = useRouter();

  return (
    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
      <Button
        size="lg"
        className="rounded-xl px-8"
        onClick={() => router.push("/register")}
      >
        Register Your School
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="rounded-xl px-8"
        onClick={() => router.push("/schools")}
      >
        Explore Schools
      </Button>
    </div>
  );
}