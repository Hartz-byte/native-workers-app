// import { useFonts } from "expo-font";
import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";
import { StatusBar } from "react-native";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // font load
  // const [loaded] = useFonts({
  //   SFPRODISPLAYREGULAR: require("../assets/fonts/SFPRODISPLAYREGULAR.ttf"),
  //   SFPRODISPLAYMEDIUM: require("../assets/fonts/SFPRODISPLAYMEDIUM.ttf"),
  //   SFPRODISPLAYSEMIBOLDITALIC: require("../assets/fonts/SFPRODISPLAYSEMIBOLDITALIC.ttf"),
  //   SFPRODISPLAYBOLD: require("../assets/fonts/SFPRODISPLAYBOLD.ttf"),
  //   SFPRODISPLAYHEAVYITALIC: require("../assets/fonts/SFPRODISPLAYHEAVYITALIC.ttf"),
  //   SFPRODISPLAYBLACKITALIC: require("../assets/fonts/SFPRODISPLAYBLACKITALIC.ttf"),
  //   "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <>
      {/* statusbar */}
      <StatusBar barStyle="dark-content" />

      {/* stack */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
