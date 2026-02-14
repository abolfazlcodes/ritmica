import React, { useMemo } from "react";
import { View, Text } from "react-native";

import HabitGrid from "@/components/ui/HabitGrid";
import {
  generateWeekly,
  generateUnlimited,
  generateMonthly,
} from "@/lib/grids";
import HabitWeeklyCard from "@/components/ui/HabitWeeklyCard";
import { IconDumbell } from "@/constants/icons";
import HabitCardUnlimited from "@/components/ui/HabitCardUnlimited";
import HabitMonthlyCard from "@/components/ui/HabitMonthlyCard";

export type Variant = "weekly" | "monthly" | "unlimited";

type HabitCardProps = {
  title: string;
  description: string;
  color: string;
  variant: Variant;
  completedDays: number[]; // indices of completed squares
};

const HabitCard = ({ title, variant, completedDays }: HabitCardProps) => {
  const cells = useMemo(() => {
    switch (variant) {
      case "weekly":
        return generateWeekly();
      case "monthly":
        return generateMonthly();
      case "unlimited":
        return generateUnlimited();
      default:
        return [];
    }
  }, [variant]);

  if (variant === "weekly") {
    return (
      <HabitWeeklyCard
        cells={cells as number[]}
        title={title}
        completedDays={completedDays}
        bgColor={"#FFAB00"}
        icon={<IconDumbell />}
      />
    );
  }

  if (variant === "monthly") {
    return (
      <HabitMonthlyCard
        cells={cells as number[]}
        title={"Fitness"}
        completedDays={completedDays}
        bgColor={"#FF5630"}
        icon={<IconDumbell />}
      />
    );
  }

  return (
    <HabitCardUnlimited
      cells={cells as number[]}
      title={"Fitness"}
      completedDays={completedDays}
      bgColor={"#22C55E"}
      icon={<IconDumbell className="w-6 h-6" width={24} height={24} />}
    />
  );
};

export default HabitCard;
