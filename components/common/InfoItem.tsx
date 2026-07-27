import type { ReactNode } from "react";

interface InfoItemProps {
    icon: ReactNode;
    label: string;
    value: string;
}

export default function InfoItem({
    icon,
    label,
    value,
}: InfoItemProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 text-muted-foreground">
                {icon}
            </div>

            <div>
                <p className="text-sm text-muted-foreground">
                    {label}
                </p>

                <p className="font-medium capitalize">
                    {value}
                </p>
            </div>
        </div>
    );
}