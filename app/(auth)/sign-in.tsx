import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingLabelInput from "@/components/inputs/FloatingInput";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { IconArrowRight, IconEyeClosed, IconEyeOpen } from "@/constants/icons";
import { Link } from "expo-router";
import AuthActions from "@/components/ui/AuthActions";

const SignInPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView className="bg-background-default h-full font-publicsans">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0} // to make keyboard not overlay on inputs when it is open on ios - the more the number, the more space it gets
      >
        <ScrollView contentContainerClassName="h-full px-6">
          <View className={`p-6 flex flex-col gap-y-2 text-center pt-20 pb-14`}>
            <Text
              className={`text-center font-bold text-2xl text-text-primary`}
            >
              Let’s Get Started!
            </Text>
            <Text
              className={`text-center font-bold text-base text-text-disabled`}
            >
              Login to your Account
            </Text>
          </View>

          {/* form section */}
          <View className="flex gap-y-6 pt-[2.5rem]">
            <FloatingLabelInput label="Email" />
            <FloatingLabelInput
              label="Password"
              // hasError
              // errorMessage="error here"
              secureTextEntry={!isPasswordVisible}
              onVisibilityChange={() =>
                setIsPasswordVisible(!isPasswordVisible)
              }
              icon={isPasswordVisible ? <IconEyeClosed /> : <IconEyeOpen />}
            />

            {/* forget password link */}
            <View className="flex flex-row px-4 gap-2.5 items-center">
              <IconArrowRight />
              <Link
                href={"/(auth)/reset-password"}
                className="text-primary-main font-semibold leading-5 text-base"
              >
                Forgot password?
              </Link>
            </View>
          </View>

          <Button
            wrapperClassName="mt-20"
            title=""
            onPress={() => {
              console.log("clicked");
            }}
          >
            <Text className="text-white font-publicsans font-bold text-lg">
              Sign in
            </Text>
          </Button>

          {/* Login platform actions */}
          <AuthActions mode={"signin"} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInPage;
