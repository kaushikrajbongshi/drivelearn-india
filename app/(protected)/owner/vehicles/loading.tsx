import DashboardPageSkeleton from "@/components/common/SkeletonLoading/DashboardPageSkeleton";

export default function Loading() {
    return (
        <DashboardPageSkeleton
            columns={9}
            rows={8}
        />
    );
}