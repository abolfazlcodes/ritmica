import { Image, View, Text } from "react-native";

import images from "@/constants/images";
import Button from "@/components/ui/Button";
import { useRouter } from "expo-router";
import { habitsData } from "@/constants/data";
import HabitsList from "@/components/ui/HabitsList";

const HabitsListWrapper = () => {
  const router = useRouter();

  const hasHabitData = habitsData?.length > 0;

  return (
    <View className="flex-1">
      {!hasHabitData ? (
        <View className="items-center flex-col gap-y-3 mt-40 pt-2.5 flex">
          <Image
            source={images.SparkleImage}
            resizeMode={"contain"}
            className="w-14 h-14 mb-4"
          />

          <Text className="font-publicsans mt-3 font-bold text-xl leading-7 text-text-primary">
            No Habit found
          </Text>
          <Text className="text-text-disabled font-publicsans mt-2 text-base">
            Create a new habit to track your progress
          </Text>

          <Button
            title={""}
            wrapperClassName="mt-16"
            onPress={() => {
              router.push("/create-habit");
            }}
          >
            <Text className="text-white font-publicsans font-bold text-lg">
              Get Started
            </Text>
          </Button>
        </View>
      ) : (
        <HabitsList data={habitsData} />
      )}
    </View>
  );
};

export default HabitsListWrapper;
