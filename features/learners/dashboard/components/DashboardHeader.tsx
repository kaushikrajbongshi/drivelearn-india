"use client";

interface DashboardHeaderProps {
    learnerName: string;
}

export default function DashboardHeader({ learnerName }: DashboardHeaderProps) {
    return (
        <div>
            <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Good morning, {learnerName}
                <span aria-hidden="true">👋</span>
            </h1>
            <p className="mt-1 text-sm text-neutral-500 dark:text-zinc-400">
                Ready for your next driving lesson?
            </p>
        </div>
    );
}