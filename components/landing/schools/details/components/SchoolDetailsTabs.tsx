"use client";

import {
    BookOpen,
    CarFront,
    Image as ImageIcon,
    Star,
    UsersRound,
} from "lucide-react";

interface SchoolDetailsTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    reviewCount?: number;
}

const tabs = [
    {
        id: "courses",
        label: "Courses",
        icon: BookOpen,
    },
    {
        id: "instructors",
        label: "Instructors",
        icon: UsersRound,
    },
    {
        id: "vehicles",
        label: "Vehicles",
        icon: CarFront,
    },
    {
        id: "reviews",
        label: "Reviews",
        icon: Star,
    },
    {
        id: "gallery",
        label: "Gallery",
        icon: ImageIcon,
    },
];

export default function SchoolDetailsTabs({
    activeTab,
    onTabChange,
    reviewCount = 0,
}: SchoolDetailsTabsProps) {
return (
  <div className="relative mt-7">
    <div className="grid grid-cols-5 border-b border-zinc-200 dark:border-zinc-800">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`
              relative flex w-full items-center justify-center
              gap-2 px-2 py-3
              text-sm font-medium
              transition-all duration-200
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#E51B23]/50
              ${
                isActive
                  ? "text-[#E51B23]"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }
            `}
          >
            <Icon
              className={`
                h-4 w-4 shrink-0
                transition-transform duration-200
                ${isActive ? "scale-110" : ""}
              `}
            />

            <span className="truncate">
              {tab.label}
            </span>

            {tab.id === "reviews" && reviewCount > 0 && (
              <span
                className={`
                  shrink-0 rounded-full px-1.5 py-0.5
                  text-[10px] font-bold
                  ${
                    isActive
                      ? "bg-[#E51B23]/10 text-[#E51B23]"
                      : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  }
                `}
              >
                {reviewCount}
              </span>
            )}

            {/* Active tab underline */}
            <span
              className={`
                absolute bottom-0 left-0 right-0 h-0.5
                transition-all duration-200
                ${isActive ? "bg-[#E51B23]" : "bg-transparent"}
              `}
            />
          </button>
        );
      })}
    </div>
  </div>
);


}