import { View, Text, Animated, Pressable, FlatList } from "react-native";
import { useState, useRef } from "react";

import HabitCard from "@/components/ui/HabitCard";

const TABS = ["Weekly", "Monthly", "Unlimited"];

const HabitsList = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const translateX = useRef(new Animated.Value(0)).current;
  const [tabWidth, setTabWidth] = useState(0);

  const handleTabPress = (index: number) => {
    setActiveIndex(index);

    Animated.spring(translateX, {
      toValue: index * tabWidth,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      {/* Tabs filter section */}
      <View
        className="flex flex-row relative border-b border-b-[#919EAB14] mt-2"
        onLayout={(e) => {
          const width = e.nativeEvent.layout.width;
          setTabWidth(width / TABS.length);
        }}
      >
        {TABS.map((tab, index) => (
          <Pressable
            key={tab}
            className="flex-1 h-12 flex items-center justify-center"
            onPress={() => handleTabPress(index)}
          >
            <Text
              className={`font-semibold text-base ${
                activeIndex === index
                  ? "text-primary-main"
                  : "text-text-secondary"
              }`}
            >
              {tab}
            </Text>
          </Pressable>
        ))}

        <Animated.View
          style={{
            position: "absolute",
            bottom: -2,
            height: 3,
            width: tabWidth,
            transform: [{ translateX }],
          }}
          className="bg-primary-main"
        />
      </View>

      {/* List items */}
      <FlatList
        contentContainerClassName="py-4 space-y-4"
        data={data}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <HabitCard
            title={"sport"}
            variant={"unlimited"}
            completedDays={[0, 12, 20, 27]}
          />
        )}
      />
    </View>
  );
};

export default HabitsList;

const data = [1, 2, 3, 4, 5];
