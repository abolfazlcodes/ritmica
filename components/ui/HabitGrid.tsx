import { View } from "react-native";
import React from "react";

interface IHabitGridProps {
  cellSize?: number;
  cells: number[];
  completedDays: number[];
  gap?: number;
  filledBgColor?: string;
  radius?: number;
}

const HabitGrid = React.memo(
  ({
    cells,
    completedDays,
    cellSize = 10,
    gap = 4,
    filledBgColor = "#FF5630",
    radius = 5,
  }: IHabitGridProps) => {
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: gap,
        }}
      >
        {cells.map((_, index) => {
          const active = completedDays.includes(index);

          return (
            <View
              key={index}
              style={{
                width: cellSize,
                height: cellSize,
                borderRadius: radius,
                backgroundColor: active ? filledBgColor : "#919EAB33",
              }}
            />
          );
        })}
      </View>
    );
  },
);

HabitGrid.displayName = "HabitGrid";

export default HabitGrid;
