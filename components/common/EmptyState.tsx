import { SearchX } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed py-16">
      <div className="flex flex-col items-center justify-center px-6 text-center">
        <SearchX className="mb-4 size-12 text-muted-foreground" />

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}