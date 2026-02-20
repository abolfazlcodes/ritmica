import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconTimes } from "@/constants/icons";
import { useRouter } from "expo-router";
import AddTaskForm from "@/components/forms/add-task-form";

// --------------------------------------
/*
 * this is how we can create an apple style modal to slide from bottom and act as navigation modal
 * it is considered as a route for navigations to it.
 * it should be outside the root folder and still added to the main layout file as a stack.screen.
 *
 *
 */
// --------------------------------------

export const unstable_settings = {
  presentation: "modal",
};

const CreateTask = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="h-full flex-1 bg-white font-publicsans">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          {/* need this as TouchableWithouFeedback accepts only children with one wrapper only */}
          <View className="flex-1">
            {/* header part */}
            <View className="flex flex-row items-center p-6">
              <Pressable onPress={() => router.back()}>
                <IconTimes />
              </Pressable>

              {/* Spacer to push title into the center */}
              <View className="flex-1 items-center">
                <Text className="text-xl font-bold leading-7 text-center">
                  Create New Habit
                </Text>
              </View>

              {/* Invisible placeholder for symmetry */}
              <View style={{ width: 24 }} />
            </View>

            <AddTaskForm />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateTask;
