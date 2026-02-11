import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className={"flex flex-col gap-3"}
    >
      <Text className={"text-red-500"}>The start of Ritmica project.</Text>
      <Link
        href={"/(auth)/welcome"}
        className={
          "flex border border-purple-400 text-center bg-purple-400 p-2 rounded-lg text-white font-bold items-center font-publicsans text-lg justify-center w-max"
        }
      >
        Welcome Screen
      </Link>
    </View>
  );
}
