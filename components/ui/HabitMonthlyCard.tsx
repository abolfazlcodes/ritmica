import { Text, View } from "react-native";
import HabitGrid from "@/components/ui/HabitGrid";
import React, { ReactNode } from "react";

interface IHabitMonthlyCardProps {
  cells: number[];
  title: string;
  completedDays: number[];
  bgColor: string;
  icon?: ReactNode;
}

const HabitMonthlyCard: React.FC<IHabitMonthlyCardProps> = ({
  cells,
  title,
  completedDays,
  bgColor,
  icon,
}) => {
  return (
    <View className="bg-white rounded-[10px] max-w-[165px] flex gap-y-2 px-2 py-4 mb-4">
      <View className="flex flex-row gap-x-2 py-3">
        {icon && icon}
        <Text className="text-text-primary capitalize font-bold font-publicsans text-base">
          {title}
        </Text>
      </View>

      <View className="flex flex-row items-center justify-between">
        <HabitGrid
          cells={cells as number[]}
          completedDays={completedDays}
          cellSize={18}
          gap={4}
          filledBgColor={bgColor}
        />
      </View>
    </View>
  );
};

export default HabitMonthlyCard;
