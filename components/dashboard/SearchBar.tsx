"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="relative hidden w-full max-w-sm lg:block">

      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        type="search"
        placeholder="Search..."
        className="h-10 rounded-xl pl-10"
      />

    </div>
  );
}