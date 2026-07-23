import Footer from "@/components/landing/footer/Footer";
import Navbar from "@/components/layout/navbar/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}