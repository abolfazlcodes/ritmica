import { SafeAreaView } from "react-native-safe-area-context";
import HabitsListWrapper from "@/components/habits-page/HabitsList";

const HabitsPage = () => {
  return (
    <SafeAreaView
      edges={["bottom", "left", "right"]} // removes the space next to edges on ios
      className="h-full flex-1 px-6 font-publicsans"
    >
      <HabitsListWrapper />
    </SafeAreaView>
  );
};

export default HabitsPage;
