import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "@/constants/styles";
import { useCalculator } from "@/hooks/useCalculator";

const Calculator = () => {
  const {
    displayValue,
    handleNumberInput,
    handleOperatorInput,
    handleEqual,
    handleClear,
    handleDecimalInput,
  } = useCalculator();

  return (
    <View style={styles.container}>
      <View style={styles.displayContent}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          {["7", "8", "9", "/"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() =>
                item === "/"
                  ? handleOperatorInput(item)
                  : handleNumberInput(parseInt(item))
              }
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonRow}>
          {["4", "5", "6", "*"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() =>
                item === "*"
                  ? handleOperatorInput(item)
                  : handleNumberInput(parseInt(item))
              }
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonRow}>
          {["1", "2", "3", "-"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() =>
                item === "-"
                  ? handleOperatorInput(item)
                  : handleNumberInput(parseInt(item))
              }
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonRow}>
          {["0", ".", "=", "+"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => {
                if (item === "=") {
                  handleEqual();
                } else if (item === "+") {
                  handleOperatorInput(item);
                } else if (item === ".") {
                  handleDecimalInput();
                } else {
                  handleNumberInput(parseInt(item));
                }
              }}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Calculator;
