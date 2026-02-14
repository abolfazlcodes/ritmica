import { Image, View, Text } from "react-native";

import images from "@/constants/images";
import Button from "@/components/ui/Button";
import { useRouter } from "expo-router";

const HabitsListWrapper = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <View className="items-center flex-col gap-y-3 pt-2.5 flex">
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
    </View>
  );
};

export default HabitsListWrapper;
