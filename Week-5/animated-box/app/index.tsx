import { StyleSheet, Text, View } from "react-native";
import AnimatedBox from "../components/AnimatedBox";

export default function Index() {
  return (
    <View style={styles.container}>
      <AnimatedBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
