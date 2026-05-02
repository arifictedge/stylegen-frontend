import AdminLayout from "@/components/layout/AdminLayout";

export const metadata = {
    title: "Admin Dashboard",
    description: "Manage your store, products, orders, and customers.",
};
export default function AdminRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <AdminLayout>{children}</AdminLayout>;
}