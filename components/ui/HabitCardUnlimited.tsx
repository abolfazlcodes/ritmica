import { Text, View } from "react-native";
import HabitGrid from "@/components/ui/HabitGrid";
import React, { ReactNode } from "react";

interface IHabitMonthUnlimitedProps {
  cells: number[];
  title: string;
  completedDays: number[];
  bgColor: string;
  icon?: ReactNode;
}

const HabitUnlimitedCard: React.FC<IHabitMonthUnlimitedProps> = ({
  cells,
  title,
  completedDays,
  bgColor,
  icon,
}) => {
  return (
    <View className="bg-white rounded-[10px] flex gap-y-2 px-3 py-4 mb-4">
      <View className="flex flex-row gap-x-2 py-3">
        {icon && icon}
        <Text className="text-text-primary font-bold font-publicsans text-xl">
          {title}
        </Text>
      </View>

      <View className="flex flex-row items-center px-1 justify-between">
        <HabitGrid
          cells={cells as number[]}
          completedDays={completedDays}
          cellSize={12}
          radius={3}
          gap={3}
          filledBgColor={bgColor}
        />
      </View>
    </View>
  );
};

export default HabitUnlimitedCard;
