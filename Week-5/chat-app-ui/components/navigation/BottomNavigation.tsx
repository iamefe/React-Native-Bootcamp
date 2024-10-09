import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="person-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, styles.activeTab]}>
        <Ionicons name="people-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="camera-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="settings-outline" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 10,
  },

  tab: {
    alignItems: "center",
    padding: 10,
  },
  activeTab: {
    borderTopWidth: 2,
    borderTopColor: "#4CAF50",
  },
});

export default BottomNavigation;
