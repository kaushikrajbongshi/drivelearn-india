import { Car } from "lucide-react";

export function SidebarHeader() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-200/50">
          <Car className="h-5 w-5 text-white" />
        </div>
        <div>
          <h1 className="text-[17px] font-semibold tracking-tight text-gray-900">
            DriveLearn
          </h1>
          <p className="text-[11px] font-medium text-emerald-600 -mt-0.5">
            India
          </p>
        </div>
      </div>

      <p className="text-[13px] leading-relaxed text-gray-600">
        Your journey to becoming a confident driver starts here.
      </p>
    </div>
  );
}