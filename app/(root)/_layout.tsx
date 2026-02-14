import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import {
  IconAddPlus,
  IconBarChart,
  IconBarChartFilled,
  IconClipboard,
  IconClipboardFilled,
  IconHome,
  IconHomeFilled,
  IconPlusSquare,
  IconUser,
  IconUserFilled,
} from "@/constants/icons";
import { router } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          minHeight: 97,
          borderTopWidth: 1,
          borderTopColor: "#919EAB33",
        },
      }}
    >
      <Tabs.Screen
        name={"home"}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={focused ? <IconHomeFilled /> : <IconHome />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={"tasks"}
        options={{
          title: "Tasks",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={focused ? <IconClipboardFilled /> : <IconClipboard />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={"habits"}
        options={{
          title: "Habits",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerRightContainerStyle: {
            paddingRight: 10,
          },
          headerTitleStyle: {
            color: "#212B36",
            fontWeight: "700",
            fontSize: 20,
            lineHeight: 30,
          },
          headerRight: () => (
            <View style={{ marginRight: 16 }}>
              <IconPlusSquare onPress={() => router.push("/create-habit")} />
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <TabIcon
              variant={"styled"}
              focused={focused}
              icon={<IconAddPlus />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={"analysis"}
        options={{
          title: "Analysis",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={focused ? <IconBarChartFilled /> : <IconBarChart />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={"profile"}
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={focused ? <IconUserFilled /> : <IconUser />}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

interface ITabIconProps {
  icon: React.ReactNode;
  focused: boolean;
  title?: string;
  variant?: "basic" | "styled";
}

const TabIcon: React.FC<ITabIconProps> = ({
  title,
  icon,
  focused,
  variant = "basic",
}) => {
  if (variant === "basic") {
    return (
      <View className="flex-1 mt-5 flex flex-col items-center">
        <View>{icon}</View>
        {title && (
          <Text
            className={`${focused ? "text-primary-300 font-rubik-medium" : "text-black-200 font-rubik"} text-xs w-full text-center mt-1`}
          >
            {title}
          </Text>
        )}
      </View>
    );
  } else if (variant === "styled") {
    return (
      <View
        className={`flex-1 mt-5 ${focused ? "bg-primary-main" : "bg-text-disabled"} w-[4.2rem] absolute -top-12 rounded-2xl h-[4.2rem] flex flex-col justify-center items-center`}
      >
        <View>{icon}</View>
      </View>
    );
  }
};
