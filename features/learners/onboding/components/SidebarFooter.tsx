import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones } from "lucide-react";

export function SidebarFooter() {
  return (
    <div className="mt-auto rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/90 to-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
          <Headphones className="h-4 w-4" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">Need Help?</p>
          <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">
            Our support team is here to help you.
          </p>
          <Button
            variant="link"
            className="h-auto p-0 mt-2 text-[13px] font-medium text-emerald-600 hover:text-emerald-700"
          >
            Contact Support
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}