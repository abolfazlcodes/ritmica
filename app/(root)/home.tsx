import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "@/components/ui/HomeHeader";
import HabitsList from "@/components/ui/HabitsList";

export default function Home() {
  return (
    <SafeAreaView className="h-full flex-1 font-publicsans">
      <View className="h-full flex-1 px-6">
        <HomeHeader />
        <HabitsList />
      </View>
    </SafeAreaView>
  );
}
