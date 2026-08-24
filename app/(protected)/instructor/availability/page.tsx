import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import AvailabilityForm from "@/features/instructors/availability/components/AvailabilityForm";
import { availability } from "@/features/instructors/availability/data/availability";

export default function InstructorAvailabilityPage() {
    return (
        <div className="space-y-6">
            <DashboardPageHeader
                title="Availability"
                description="Set your weekly working hours"
            />

            <AvailabilityForm
                defaultValues={availability}
            />
        </div>
    );
}