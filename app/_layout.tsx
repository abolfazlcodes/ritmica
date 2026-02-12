import { Stack } from "expo-router";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import "./globals.css";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PublicBlack: require("../assets/fonts/public-sans/PublicSans-Black.ttf"),
    PublicBlackItalic: require("../assets/fonts/public-sans/PublicSans-BlackItalic.ttf"),
    PublicBold: require("../assets/fonts/public-sans/PublicSans-Bold.ttf"),
    PublicBoldItalic: require("../assets/fonts/public-sans/PublicSans-BoldItalic.ttf"),
    PublicExtraBold: require("../assets/fonts/public-sans/PublicSans-ExtraBold.ttf"),
    PublicExtraBoldItalic: require("../assets/fonts/public-sans/PublicSans-ExtraBoldItalic.ttf"),
    PublicExtraLight: require("../assets/fonts/public-sans/PublicSans-ExtraLight.ttf"),
    PublicItalic: require("../assets/fonts/public-sans/PublicSans-Italic.ttf"),
    PublicLight: require("../assets/fonts/public-sans/PublicSans-Light.ttf"),
    PublicExtraLightItalic: require("../assets/fonts/public-sans/PublicSans-LightItalic.ttf"),
    PublicMedium: require("../assets/fonts/public-sans/PublicSans-Medium.ttf"),
    PublicMediumItalic: require("../assets/fonts/public-sans/PublicSans-MediumItalic.ttf"),
    PublicRegular: require("../assets/fonts/public-sans/PublicSans-Regular.ttf"),
    PublicSemiBold: require("../assets/fonts/public-sans/PublicSans-SemiBold.ttf"),
    PublicSemiBoldItalic: require("../assets/fonts/public-sans/PublicSans-SemiBoldItalic.ttf"),
    PublicThin: require("../assets/fonts/public-sans/PublicSans-Thin.ttf"),
    PublicThinItalic: require("../assets/fonts/public-sans/PublicSans-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // if loaded --> hide the splash screen
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name={"(auth)"} options={{ headerShown: false }} />
      <StatusBar style="auto" />
    </Stack>
  );
}
