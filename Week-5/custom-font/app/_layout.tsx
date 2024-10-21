import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter_18pt-Black.ttf"),
    "Sulphur-Light": require("../assets/fonts/SulphurPoint-Light.ttf"),
    "Sulphur-Bold": require("../assets/fonts/SulphurPoint-Bold.ttf"),
  });

  // useEffect(() => {
  //   if (loaded || error) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded, error]);

  // if (!loaded && !error) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.inter}>Inter Black</Text>
      <Text style={styles.sulphurLight}>Sulphur Light</Text>
      <Text style={styles.sulphurBold}>Sulphur Bold</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inter: {
    fontSize: 34,
    fontFamily: "Inter-Black",
  },
  sulphurLight: {
    fontSize: 34,
    fontFamily: "Sulphur-Light",
  },
  sulphurBold: {
    fontSize: 34,
    fontFamily: "Sulphur-Bold",
  },
});
