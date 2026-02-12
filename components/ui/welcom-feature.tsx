import { Text, View } from "react-native";
import { ReactNode } from "react";

interface IWelcomeFeatureProps {
  title: string;
  description: string;
  bgColor: string;
  icon: ReactNode;
}

const WelcomeFeature: React.FC<IWelcomeFeatureProps> = ({
  title,
  description,
  icon,
  bgColor,
}) => {
  return (
    <View className="flex gap-5 items-center flex-row">
      <View
        className={`w-10 flex items-center justify-center h-10 rounded-full bg-[${bgColor}]`}
      >
        {icon}
      </View>
      <View className="flex-1">
        <Text className="text-[#212B36] text-lg leading-6 font-public-sans-semibold font-semibold">
          {title}
        </Text>
        <Text className="text-[#919EAB] text-base leading-5 font-publicsans">
          {description}
        </Text>
      </View>
    </View>
  );
};

export default WelcomeFeature;
