import { Text, View } from "react-native";
import HabitGrid from "@/components/ui/HabitGrid";
import React, { ReactNode } from "react";

interface IHabitWeeklyCardProps {
  cells: number[];
  title: string;
  completedDays: number[];
  bgColor: string;
  icon?: ReactNode;
}

const HabitWeeklyCard: React.FC<IHabitWeeklyCardProps> = ({
  cells,
  title,
  completedDays,
  bgColor,
  icon,
}) => {
  return (
    <View className="bg-white rounded-[10px] flex gap-y-2 px-2 py-4 mb-4">
      <Text className="text-base font-semibold mb-3 font-publicsans text-text-primary">
        {title}
      </Text>

      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row gap-x-2">
          {icon && icon}
          <Text className="text-text-disabled font-publicsans text-sm">
            Fitness
          </Text>
        </View>
        <HabitGrid
          cells={cells as number[]}
          completedDays={completedDays}
          cellSize={18}
          gap={8}
          filledBgColor={bgColor}
        />
      </View>
    </View>
  );
};

export default HabitWeeklyCard;
