import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingLabelInput from "@/components/inputs/FloatingInput";
import EyeOpen from "@/constants/icons/eye-open";
import { useState } from "react";
import EyeClosed from "@/constants/icons/eye-closed";
import Button from "@/components/ui/Button";

const SignInPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView className="bg-background-default h-full font-publicsans">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0} // to make keyboard not overlay on inputs when it is open on ios - the more the number, the more space it gets
      >
        <ScrollView contentContainerClassName="h-full">
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
          <View className="flex gap-y-6 px-5 pt-[2.5rem]">
            <FloatingLabelInput label="Email" />
            <FloatingLabelInput
              label="Password"
              // hasError
              // errorMessage="error here"
              secureTextEntry={isPasswordVisible}
              onVisibilityChange={() =>
                setIsPasswordVisible(!isPasswordVisible)
              }
              icon={isPasswordVisible ? <EyeClosed /> : <EyeOpen />}
            />
          </View>

          <Button
            title=""
            onPress={() => {
              console.log("clicked");
            }}
          >
            <Text className="text-white font-publicsans font-bold text-lg">
              Sign in
            </Text>
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInPage;
