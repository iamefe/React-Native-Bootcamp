import Counter from "@/components/Counter";
import Form from "@/components/Form";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Counter />
      <Form />
    </View>
  );
}
