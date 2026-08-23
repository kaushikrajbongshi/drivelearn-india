import LearnerNavbar from "@/components/layout/navbar/LearnerNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LearnerNavbar />
            {children};
        </>)
}