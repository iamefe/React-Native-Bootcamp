import { Button, StyleSheet, View } from "react-native";
import React from "react";

const Buttons = ({
  onClear,
  onReload,
}: {
  onClear: () => void;
  onReload: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Button title="Clear" onPress={onClear} />
      <Button title="Reload" onPress={onReload} />
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
});
