import { View } from "react-native";
import React from "react";

const CELL_SIZE = 10;
const GAP = 4;

const HabitGrid = React.memo(
  ({ cells, completedDays }: { cells: number[]; completedDays: number[] }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: GAP,
        }}
      >
        {cells.map((_, index) => {
          const active = completedDays.includes(index);

          return (
            <View
              key={index}
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                borderRadius: 2,
                backgroundColor: active ? "#FF5630" : "#E0E0E0",
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
