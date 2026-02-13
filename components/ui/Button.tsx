import { Pressable } from "expo-router/build/views/Pressable";
import { ButtonProps, View } from "react-native";

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
  wrapperClassName?: string;
}

const Button: React.FC<IButtonProps> = ({
  onPress,
  children,
  wrapperClassName,
  ...rest
}) => {
  return (
    <View className={`py-8 ${wrapperClassName}`}>
      <Pressable
        className="bg-primary-main min-h-14 min-w-16 w-full flex items-center justify-center rounded-2xl px-4 py-3"
        onPress={onPress}
        {...rest}
      >
        {children}
      </Pressable>
    </View>
  );
};

export default Button;
