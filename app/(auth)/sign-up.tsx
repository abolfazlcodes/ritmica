import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingLabelInput from "@/components/inputs/FloatingInput";
import { IconEyeClosed, IconEyeOpen } from "@/constants/icons";
import Button from "@/components/ui/Button";
import { useState } from "react";
import AuthActions from "@/components/ui/AuthActions";
import { useRouter } from "expo-router";

const SignUpPage = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);

  return (
    <SafeAreaView className="bg-background-default h-full font-publicsans">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0} // to make keyboard not overlay on inputs when it is open on ios - the more the number, the more space it gets
      >
        <ScrollView contentContainerClassName="h-full px-6">
          <View className={`p-6 flex flex-col gap-y-2 text-center pt-20 pb-4`}>
            <Text
              className={`text-center font-bold text-2xl text-text-primary`}
            >
              Let’s Get Started!
            </Text>
            <Text
              className={`text-center font-bold text-base text-text-disabled`}
            >
              Create an account
            </Text>
          </View>

          {/* form section */}
          <View className="flex gap-y-4">
            <FloatingLabelInput label="Name" />
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
            <FloatingLabelInput
              label="Password Confirmation"
              // hasError
              // errorMessage="error here"
              secureTextEntry={!isPasswordConfirmationVisible}
              onVisibilityChange={() =>
                setIsPasswordConfirmationVisible(!isPasswordConfirmationVisible)
              }
              icon={
                isPasswordConfirmationVisible ? (
                  <IconEyeClosed />
                ) : (
                  <IconEyeOpen />
                )
              }
            />
          </View>

          <Button
            wrapperClassName="mt-5"
            title=""
            onPress={() => {
              console.log("clicked");
              router.push("/(root)/home");
            }}
          >
            <Text className="text-white font-publicsans font-bold text-lg">
              Sign Up
            </Text>
          </Button>

          {/* Login platform actions */}
          <AuthActions mode={"signup"} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpPage;
