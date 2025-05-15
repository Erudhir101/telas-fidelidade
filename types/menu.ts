import { ReactNode } from "react";

export type BadgeType = "new" | "count" | "alert";

export type MenuItemType = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  badge?: BadgeType;
  badgeCount?: number;
};
