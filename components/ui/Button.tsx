import { Pressable } from "expo-router/build/views/Pressable";
import { ButtonProps, Text, View } from "react-native";

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ onPress, children, ...rest }) => {
  return (
    <View className="mt-20 py-8 px-4">
      <Pressable
        className="bg-primary-main min-h-12 min-w-16 w-full flex items-center justify-center rounded-2xl px-4 py-3"
        onPress={onPress}
        {...rest}
      >
        {children}
      </Pressable>
    </View>
  );
};

export default Button;
