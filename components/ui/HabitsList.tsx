import {
  View,
  Text,
  Animated,
  Pressable,
  FlatList,
  Platform,
} from "react-native";
import { useState, useRef } from "react";

import HabitCard, { Variant } from "@/components/ui/HabitCard";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const TABS = ["weekly", "monthly", "unlimited"];

const HabitsList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const [tabWidth, setTabWidth] = useState(0);

  const tabBarHeight = useBottomTabBarHeight();

  const handleTabPress = (index: number) => {
    setActiveIndex(index);

    Animated.spring(translateX, {
      toValue: index * tabWidth,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="flex-1">
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
              className={`font-semibold capitalize text-base ${
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
        key={TABS[activeIndex] === "monthly" ? "grid" : "list"}
        numColumns={TABS[activeIndex] === "monthly" ? 2 : 1}
        columnWrapperStyle={
          TABS[activeIndex] === "monthly" ? { gap: 16 } : undefined
        }
        showsVerticalScrollIndicator={false}
        contentContainerClassName="py-4"
        contentContainerStyle={{
          paddingTop: 16,
          paddingBottom: tabBarHeight + (Platform.OS === "ios" ? 0 : 24), // <- give it breathing room
        }}
        data={data}
        extraData={activeIndex}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <HabitCard
            title="Practice 15 minutes of morning yoga flow"
            variant={TABS[activeIndex] as Variant}
            completedDays={[0, 12, 20, 27]}
          />
        )}
      />
    </View>
  );
};

export default HabitsList;

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
