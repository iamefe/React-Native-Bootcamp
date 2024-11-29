import { useEffect, useState } from "react";
import { View, RefreshControl, StyleSheet, Alert, Text } from "react-native";
import { loadCachedData } from "../utils/storage";
import { fetchAndCacheData } from "../utils/fetchData";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Buttons from "../components/Buttons";
import useNetworkStatus from "@/utils/useNetworkStatus";

export default function Index() {
  const [content, setContent] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const isConnected = useNetworkStatus();

  useEffect(() => {
    loadCachedData(setContent);
  }, []);

  const handleRefresh = async () => {
    if (!isConnected) {
      Alert.alert(
        "Offline",
        "You are currently offline. Data cannot be refreshed."
      );
      return;
    }
    setRefreshing(true);
    await fetchAndCacheData(setContent);
    setRefreshing(false);
  };

  const handleClear = () => setContent([]);
  const handleReload = () => loadCachedData(setContent);

  return (
    <View style={styles.container}>
      {!isConnected && (
        <Text style={styles.offlineBanner}>
          You're offline. Displaying cached data
        </Text>
      )}
      <FlatList
        data={content}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem title={item.title} body={item.body} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
      <Buttons onClear={handleClear} onReload={handleReload} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  offlineBanner: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "#ffd700",
    color: "#000",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
