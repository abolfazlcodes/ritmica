import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PieChart from "@/components/charts/PieChart";
import AreaChart from "@/components/charts/AreaChart";

const TasksPage = () => {
  return (
    <SafeAreaView className="flex-1 font-publicsans">
      <ScrollView contentContainerClassName="flex-1 px-6">
        <PieChart
          data={{
            todoTaskCount: 10,
            progressTaskCount: 20,
            completeTaskCount: 30,
          }}
        />

        <AreaChart />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TasksPage;
