import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HabitsListWrapper from "@/components/habits-page/HabitsList";

const HabitsPage = () => {
  return (
    <SafeAreaView className="h-full flex-1 bg-white font-publicsans">
      <ScrollView contentContainerClassName="h-full flex-1 bg-white px-6">
        <HabitsListWrapper />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HabitsPage;
