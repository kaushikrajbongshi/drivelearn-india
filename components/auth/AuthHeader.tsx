import type { ReactNode } from "react";

interface AuthHeaderProps {
  title: string;
  description?: ReactNode;
}

export default function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}