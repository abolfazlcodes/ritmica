import { Text, View } from "react-native";
import { Pressable } from "expo-router/build/views/Pressable";
import { IconApple, IconFacebook, IconGoogle } from "@/constants/icons";
import { Link } from "expo-router";

interface IAuthActionsProps {
  mode: "signin" | "signup";
}

const AuthActions: React.FC<IAuthActionsProps> = ({ mode }) => {
  return (
    <>
      <View className="flex gap-y-4 mt-4 mb-8">
        {/* line section */}
        <View className="flex flex-row gap-x-4 items-center justify-between">
          <View className="bg-divider h-[1px] w-full max-w-[105px]" />
          <Text className="w-full text-center flex-1 text-text-disabled text-base font-normal">
            {mode === "signin" ? "Or sign in with" : "Or sign up with"}
          </Text>
          <View className="bg-divider h-[1px] w-full max-w-[105px]" />
        </View>

        {/* Actions */}
        <View className="flex flex-row items-center justify-center gap-5">
          <Pressable
            className="w-14 h-14 rounded-full bg-[#919EAB1F] flex items-center justify-center"
            onPress={() => {
              console.log("pressable google");
            }}
          >
            <IconGoogle />
          </Pressable>

          <Pressable
            className="w-14 h-14 rounded-full bg-[#919EAB1F] flex items-center justify-center"
            onPress={() => {
              console.log("pressable apple");
            }}
          >
            <IconApple />
          </Pressable>

          <Pressable
            className="w-14 h-14 rounded-full bg-[#919EAB1F] flex items-center justify-center"
            onPress={() => {
              console.log("pressable facebook");
            }}
          >
            <IconFacebook />
          </Pressable>
        </View>
      </View>

      <View className="flex flex-row items-center justify-center gap-2.5">
        <Text className="text-text-primary text-base leading-5">
          {mode === "signin" ? "Don’t have an account?" : "Got an account?"}
        </Text>
        <Link
          href={mode === "signin" ? "/(auth)/sign-up" : "/(auth)/sign-in"}
          className="text-error-main font-semibold text-base leading-5"
        >
          {mode === "signin" ? "Create New" : "Login"}
        </Link>
      </View>
    </>
  );
};

export default AuthActions;
