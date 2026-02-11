import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { useState } from "react";

const WelcomePage = () => {
  const [step, setStep] = useState(0);

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <View className="relative flex items-center justify-center">
          <View className="absolute bg-white top-10 left-16 p-3 w-[264px] h-[282px] rounded-[48px]">
            <View className="bg-[#2FA8FF] w-[264px] h-[282px] rounded-[48px]" />
          </View>

          <Image
            source={images.CharacterSplash}
            className="w-[330px] h-[330px]"
            resizeMode={"contain"}
          />
        </View>

        <View className="mt-16 p-6 flex h-full max-h-[290px] flex-col gap-y-2 text-center">
          <View>
            <Text className="text-2xl leading-7 font-bold font-publicsans text-center">
              Build Better Habits,
            </Text>
            <Text className="text-2xl leading-7 font-bold font-publicsans text-center">
              One Day at a Time
            </Text>
          </View>

          <Text className="text-center text-[#919EAB] text-base font-publicsans leading-6">
            Turn small steps into big changes. With smart habit tracking,
            personalized insights, and motivating streaks, you’ll always know
            where you stand and how far you’ve come. Stay consistent, celebrate
            your progress, and let every day bring you closer to your best self.
          </Text>
        </View>

        <View className="flex flex-row justify-between px-6 py-10">
          <View className="flex items-center flex-row gap-3">
            <View className="w-2 h-2 rounded-full bg-[#0088FF]"></View>
            <View className="w-2 h-2 rounded-full bg-[#add9ff]"></View>
          </View>

          <TouchableOpacity
            className="border border-[#0088FF7A] w-16 px-2 py-1 flex items-center justify-center rounded-lg bg-white"
            onPress={() => {
              console.log("clicked");
            }}
          >
            <Text className="text-[#0088FF] font-bold font-publicsans leading-5">
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomePage;
