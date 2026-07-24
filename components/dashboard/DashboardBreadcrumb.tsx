"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function DashboardBreadcrumb() {
    const pathname = usePathname();

    const segments = pathname
        .split("/")
        .filter(Boolean)
        .filter(
            (segment) =>
                !["admin", "learner", "owner", "instructor"].includes(segment)
        );

    return (
        <Breadcrumb>

            <BreadcrumbList>

                <BreadcrumbItem>

                    <BreadcrumbLink href="/">
                        Dashboard
                    </BreadcrumbLink>

                </BreadcrumbItem>

                {segments.map((segment, index) => {
                    const href =
                        "/" +
                        pathname
                            .split("/")
                            .filter(Boolean)
                            .slice(0, index + 2)
                            .join("/");

                    const isLast = index === segments.length - 1;

                    const title = segment
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase());

                    return (
                        <div
                            key={href}
                            className="flex items-center"
                        >
                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>{title}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={href}>
                                        {title}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </div>
                    );
                })}

            </BreadcrumbList>

        </Breadcrumb>
    );
}