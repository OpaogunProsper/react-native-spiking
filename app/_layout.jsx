import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import "../global.css";

SplashScreen.preventAutoHideAsync()
const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
