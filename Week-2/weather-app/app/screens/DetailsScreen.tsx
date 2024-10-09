import { WeatherData } from "@/constants/types/weather";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailsScreen = () => {
  const params = useLocalSearchParams();
  const weatherData: WeatherData = useMemo(
    () => JSON.parse(params.weatherData as string),
    [params.weatherData]
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Details</Text>
      <Text>Temperature: {Math.round(weatherData.main.temp)}°C </Text>
      <Text>Humidity: {weatherData.main.humidity} %</Text>
      <Text>Wind Speed: {weatherData.wind.speed} m/s</Text>
      <Text>Pressure: {weatherData.main.pressure} hPa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default DetailsScreen;
