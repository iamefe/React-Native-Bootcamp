import { Stack } from "expo-router";
import { store } from "./store/store";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Weather App" }} />
        <Stack.Screen name="details" options={{ title: "Weather Details" }} />
      </Stack>
    </Provider>
  );
}
