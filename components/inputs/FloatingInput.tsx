import {
  View,
  TextInput,
  Animated,
  TextInputProps,
  StyleSheet,
  TextStyle,
  Text,
} from "react-native";
import { useState, useRef, useEffect, ReactNode } from "react";
import { Pressable } from "expo-router/build/views/Pressable";

interface FloatingLabelInputProps extends TextInputProps {
  label: string;
  labelStyle?: TextStyle;
  containerStyle?: object;
  icon?: ReactNode;
  onVisibilityChange?: () => void;
  hasError?: boolean;
  errorMessage?: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  value: propValue,
  onChangeText,
  style,
  labelStyle,
  containerStyle,
  icon,
  onVisibilityChange,
  hasError,
  errorMessage,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(propValue || "");
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  // Animate label when focus or value changes
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const handleChangeText = (text: string) => {
    setValue(text);
    if (onChangeText) onChangeText(text);
  };

  const labelAnimatedStyle = {
    position: "absolute" as const,
    left: 12,
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -6],
    }),
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: "#919EAB",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 4,
    ...labelStyle,
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          containerStyle,
          { borderColor: hasError && "#FF5630" },
        ]}
      >
        <Animated.Text
          style={[
            labelAnimatedStyle,
            styles.labelDefault,
            {
              color: hasError ? "#FF5630" : "#919EAB",
            },
          ]}
        >
          {label}
        </Animated.Text>
        <TextInput
          {...rest}
          value={value}
          onChangeText={handleChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[styles.input, style]}
        />

        <Pressable
          onPress={onVisibilityChange}
          className="absolute right-4 top-5"
        >
          {icon}
        </Pressable>
      </View>
      {hasError && errorMessage && (
        <Text className="text-error-main text-sm pl-2">{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#919EAB33",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingTop: 18,
    paddingBottom: 18,
    position: "relative",
    marginVertical: 8,
  },
  input: {
    fontSize: 16,
    padding: 0,
    margin: 0,
    color: "#212B36",
  },
  labelDefault: {
    fontWeight: "bold",
  },
});

export default FloatingLabelInput;
