"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import { navLinks } from "./nav-links";
import ThemeToggle from "@/components/theme-toggle";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[18px] font-mono transition-colors ${pathname === item.href
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Button
            variant="outline"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>

          <Button
            onClick={() => router.push("/register")}
            className="bg-foreground text-background text-base font-semibold hover:bg-foreground/90"
          >
            Register School
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-1.5 md:hidden">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent">
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent side="right" className="flex w-[85vw] max-w-sm flex-col px-5">
              <div className="mt-6">
                <Logo />
              </div>

              <Separator className="my-6" />

              <nav className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-3 py-2.5 text-base transition-colors ${pathname === item.href
                      ? "bg-accent font-semibold text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pb-6 pt-6">
                <Separator className="mb-3" />

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-base"
                  onClick={() => router.push("/login")}
                >
                  Login
                </Button>

                <Button
                  onClick={() => router.push("/register")}
                  className="bg-foreground text-background text-base font-semibold hover:bg-foreground/90"
                >
                  Register School
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}