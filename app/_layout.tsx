import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PublicBlack: require("../assets/fonts/PublicSans-Black.ttf"),
    PublicBlackItalic: require("../assets/fonts/PublicSans-BlackItalic.ttf"),
    PublicBold: require("../assets/fonts/PublicSans-Bold.ttf"),
    PublicBoldItalic: require("../assets/fonts/PublicSans-BoldItalic.ttf"),
    PublicExtraBold: require("../assets/fonts/PublicSans-ExtraBold.ttf"),
    PublicExtraBoldItalic: require("../assets/fonts/PublicSans-ExtraBoldItalic.ttf"),
    PublicExtraLight: require("../assets/fonts/PublicSans-ExtraLight.ttf"),
    PublicItalic: require("../assets/fonts/PublicSans-Italic.ttf"),
    PublicLight: require("../assets/fonts/PublicSans-Light.ttf"),
    PublicExtraLightItalic: require("../assets/fonts/PublicSans-LightItalic.ttf"),
    PublicMedium: require("../assets/fonts/PublicSans-Medium.ttf"),
    PublicMediumItalic: require("../assets/fonts/PublicSans-MediumItalic.ttf"),
    PublicRegular: require("../assets/fonts/PublicSans-Regular.ttf"),
    PublicSemiBold: require("../assets/fonts/PublicSans-SemiBold.ttf"),
    PublicSemiBoldItalic: require("../assets/fonts/PublicSans-SemiBoldItalic.ttf"),
    PublicThin: require("../assets/fonts/PublicSans-Thin.ttf"),
    PublicThinItalic: require("../assets/fonts/PublicSans-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // if loaded --> hide the splash screen
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
}
