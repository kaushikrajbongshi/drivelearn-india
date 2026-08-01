"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  dashboardIcons,
  type DashboardIcon,
} from "@/config/dashboard-icons";

export interface ActionItem {
  title: string;
  description: string;
  href: string;
  icon: DashboardIcon;
}

interface QuickActionsProps {
  title?: string;
  actions: ActionItem[];
  buttonText?: string;
}

export default function QuickActions({
  title = "Quick Actions",
  actions,
  buttonText,
}: QuickActionsProps) {
  const ArrowRight = dashboardIcons.arrowRight;
  const AddIcon = dashboardIcons.add;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {actions.map((action) => {
          const Icon = dashboardIcons[action.icon];

          return (
            <Link
              key={action.title}
              href={action.href}
              className="block rounded-xl border transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <p className="font-medium">{action.title}</p>

                    <p className="text-xs text-muted-foreground">
                      {action.description}
                    </p>
                  </div>
                </div>

                <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
              </div>
            </Link>
          );
        })}

        {buttonText && (
          <Button className="mt-2 w-full rounded-xl">
            <AddIcon className="mr-2 size-4" />
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}