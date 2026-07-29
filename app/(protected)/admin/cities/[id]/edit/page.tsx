import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import EditCityForm from "@/features/cities/components/EditCityForm";

import { cities } from "@/features/cities/data/cities";

interface EditCityPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditCityPage({
    params,
}: EditCityPageProps) {
    const { id } = await params;

    const city = cities.find(
        (item) => item.id === id
    );

    if (!city) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={
                    <Link
                        href={`/admin/cities/${city.id}`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title="Edit City"
                description={`Update information for ${city.name}.`}
            />

            <Card>
                <CardHeader>
                    <CardTitle>
                        City Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <EditCityForm city={city} />
                </CardContent>
            </Card>
        </div>
    );
}