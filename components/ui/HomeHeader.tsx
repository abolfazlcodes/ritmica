import { Image, Text, View } from "react-native";
import images from "@/constants/images";
import { Link } from "expo-router";
import { IconGear, IconNotification } from "@/constants/icons";

const HomeHeader = () => {
  return (
    <View className="pb-2 px-5 pt-6 flex flex-row items-center justify-between">
      <View className="flex flex-row gap-2 items-center">
        <View className="w-11 h-11 rounded-full relative">
          <Image
            source={images.UserDefaultImage}
            className="w-full h-full"
            resizeMode={"cover"}
          />
        </View>
        <Text className="font-bold leading-8 text-xl text-text-primary">
          Good morning, Jacob
        </Text>
      </View>

      <View className="flex flex-row gap-4">
        <Link href={"/(root)/profile"}>
          <IconNotification />
        </Link>
        <Link href={"/(root)/profile"}>
          <IconGear />
        </Link>
      </View>
    </View>
  );
};

export default HomeHeader;
