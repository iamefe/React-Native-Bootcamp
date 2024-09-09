import Calculator from "@/components/Calculator";
import { View } from "react-native";
import { styles } from "../constants/styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
}
