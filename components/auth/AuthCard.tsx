import type { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="glass-card mx-auto w-full max-w-md rounded-3xl px-6 py-8 sm:px-9 sm:py-9">
      {children}
    </div>
  );
}