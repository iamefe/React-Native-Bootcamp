import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchWeatherData, setCity } from "../store/weatherSlice";
import { useCallback, useState } from "react";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    data: weatherData,
    loading,
    error,
    city,
  } = useAppSelector((state) => state.weather);
  const [inputCity, setInputCity] = useState(city);

  const fetchWeather = useCallback(() => {
    if (inputCity.trim()) {
      dispatch(setCity(inputCity.trim()));
      dispatch(fetchWeatherData(inputCity.trim()));
    } else {
      Alert.alert("Invalid Input", "Please enter a valid city name");
    }
  }, [inputCity, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputCity}
          onChangeText={setInputCity}
          placeholder="Enter city name"
        />
        <Button title="Search" onPress={fetchWeather} />
      </View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : weatherData ? (
        <>
          <Text style={styles.city}>{weatherData.name}</Text>
          <Text style={styles.temp}>{Math.round(weatherData.main.temp)}°C</Text>
          <Text style={styles.description}>
            {weatherData.weather[0].description}
          </Text>
          <Button
            title="View Details"
            onPress={() =>
              router.push({
                pathname: "/details",
                params: { weatherData: JSON.stringify(weatherData) },
              })
            }
          />
        </>
      ) : (
        <Text>Enter a city and press search to get the weather</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },

  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width: "100%",
  },

  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },

  error: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  },
  city: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  temp: {
    fontSize: 64,
    fontWeight: "bold",
  },
  description: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 20,
  },
});
export default HomeScreen;
