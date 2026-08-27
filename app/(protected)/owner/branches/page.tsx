import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import BranchPageContent from "@/features/owner/owner-branches/components/BranchPageContent";

import { branches } from "@/features/owner/owner-branches/data/branches";

export default function OwnerBranchesPage() {
    return (
        <div className="space-y-6">
            <DashboardPageHeader
                title="School & Branch Management"
            
            />
            <BranchPageContent
                branches={branches}
            />
        </div>
    );
}