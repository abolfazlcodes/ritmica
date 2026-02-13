import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "@/components/ui/HomeHeader";

export default function Home() {
  return (
    <SafeAreaView className="h-full font-publicsans">
      <ScrollView contentContainerClassName="h-full">
        <HomeHeader />
      </ScrollView>
    </SafeAreaView>
  );
}
