import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TasksPage = () => {
  return (
    <SafeAreaView className="h-full font-publicsans">
      <ScrollView contentContainerClassName="h-full px-6"></ScrollView>
    </SafeAreaView>
  );
};

export default TasksPage;
