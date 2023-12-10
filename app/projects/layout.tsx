import BreadCrumb from "@/components/BreadCrumb";
import SidebarHandler from "@/components/SidebarHandler";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarHandler>
      <BreadCrumb />
      {children}
    </SidebarHandler>
  );
}
