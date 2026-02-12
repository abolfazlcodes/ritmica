import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { useState, useRef, useEffect } from "react";
import { IconUserKey } from "@/constants/icons";
import { Pressable } from "expo-router/build/views/Pressable";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { WelcomeScreensData } from "@/constants/data/welcome-screens";
import WelcomeFeature from "@/components/ui/welcom-feature";

const WelcomePage = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(0); // only 1 or 2 - based on how many slides
  const current = WelcomeScreensData[step];

  const { width } = Dimensions.get("window");
  const titleAnim = useRef(new Animated.Value(width)).current;
  const featureAnim = useRef(new Animated.Value(width)).current;

  const authRedirectHandler = () => {
    router.push("/(auth)/sign-in");
  };

  const nextSlideHandler = () => {
    if (step >= WelcomeScreensData.length - 1) {
      authRedirectHandler();
      return;
    }

    // slide title and features out to the left
    Animated.parallel([
      Animated.timing(titleAnim, {
        toValue: -width, // move left offscreen
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(featureAnim, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // update step after the slide out completes
      setStep((prev) => prev + 1);
    });
  };

  useEffect(() => {
    // reset positions
    titleAnim.setValue(width);
    featureAnim.setValue(width);

    // animate title in first
    Animated.timing(titleAnim, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();

    // animate features after 200ms
    Animated.timing(featureAnim, {
      toValue: 0,
      duration: 350,
      delay: 200,
      useNativeDriver: true,
    }).start();
  }, [step]);

  return (
    <SafeAreaView className="bg-background-default h-full font-publicsans">
      <ScrollView contentContainerClassName="h-full">
        <StatusBar style="auto" />
        {step === 0 && (
          <View className="relative flex items-center justify-center">
            <View className="absolute bg-background-default top-10 left-16 p-3 w-[264px] h-[282px] rounded-[48px]">
              <View className="bg-background-blue w-[264px] h-[282px] rounded-[48px]" />
            </View>

            <Image
              source={images.CharacterSplash}
              className="w-[330px] h-[330px]"
              resizeMode={"contain"}
            />
          </View>
        )}

        <Animated.View
          style={{ transform: [{ translateX: titleAnim }] }}
          className={`mt-16 p-6 flex flex-col gap-y-2 text-center ${step === 0 ? "h-full max-h-[290px]" : "mb-14"}`}
        >
          {current.title.map((line, index) => (
            <Text
              key={index}
              className={`text-center font-bold text-[#212B36] ${
                step === 0 ? "text-2xl" : "text-4xl"
              }`}
            >
              {line}
            </Text>
          ))}

          {current.description && (
            <Text className="text-center text-text-disabled text-base leading-6 px-6 mt-2">
              {current.description}
            </Text>
          )}
        </Animated.View>

        {step === 0 && (
          <View
            className={`flex flex-row justify-between px-6 py-10 ease-in transition-all ${step === 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}
          >
            <View className="flex items-center flex-row gap-3">
              <View className="w-2 h-2 rounded-full bg-primary-main"></View>
              <View className="w-2 h-2 rounded-full bg-[#add9ff]"></View>
            </View>

            <TouchableOpacity
              className="border border-[#0088FF7A] w-16 px-2 py-1 flex items-center justify-center rounded-lg bg-white"
              onPress={nextSlideHandler}
            >
              <Text className="text-primary-main font-bold font-publicsans leading-5">
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* List of Features content */}
        {current.features && (
          <Animated.View
            style={{ transform: [{ translateX: featureAnim }] }}
            className="px-6 mt-10 mb-20 gap-y-9"
          >
            {current.features.map((feature, index) => (
              <WelcomeFeature
                key={feature?.title}
                title={feature?.title}
                description={feature?.description}
                bgColor={
                  index === 0 ? "#22C55E" : index === 1 ? "#FFAB00" : "#00B8D9"
                }
                icon={<IconUserKey />}
              />
            ))}
          </Animated.View>
        )}

        {/* go to login page button section */}
        {step === 1 && (
          <View className="mt-20 py-8 px-4">
            <Pressable
              className="bg-primary-main min-h-12 min-w-16 w-full flex items-center justify-center rounded-2xl px-4 py-3"
              onPress={authRedirectHandler}
            >
              <Text className="text-white font-publicsans font-bold text-lg">
                Continue
              </Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomePage;
