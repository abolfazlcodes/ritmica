import React, { useMemo } from "react";
import { View, Text } from "react-native";

import HabitGrid from "@/components/ui/HabitGrid";
import {
  generateWeekly,
  generateUnlimited,
  generateMonthly,
} from "@/lib/grids";

type Variant = "weekly" | "monthly" | "unlimited";

type HabitCardProps = {
  title: string;
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

  return (
    <View className="bg-white rounded-2xl p-4 mb-4">
      <Text className="text-base font-semibold mb-3">{title}</Text>

      <HabitGrid cells={cells as number[]} completedDays={completedDays} />
    </View>
  );
};

export default HabitCard;
