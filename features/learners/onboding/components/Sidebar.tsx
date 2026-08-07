import { SidebarHeader } from "./SidebarHeader";
import { SidebarSteps } from "./SidebarSteps";
import { SidebarFooter } from "./SidebarFooter";

export function Sidebar() {
  return (
    <aside className="flex h-full w-full max-w-[300px] flex-col border-r border-gray-100/80 bg-white p-6 shadow-[1px_0_0_0_rgba(0,0,0,0.02)]">
      <SidebarHeader />
      <SidebarSteps />
      <SidebarFooter />
    </aside>
  );
}