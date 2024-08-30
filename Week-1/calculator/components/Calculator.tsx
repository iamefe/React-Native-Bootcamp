import { useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState<string>("");

  const handleNumberInput = (num: number) => {
    if (operator === null && firstValue === "") {
      setDisplayValue((prevValue) =>
        prevValue === "0" ? num.toString() : prevValue + num.toString()
      );
    } else {
      setDisplayValue((prevValue) =>
        prevValue === "0" ? num.toString() : prevValue + num.toString()
      );
    }
  };

  const handleOperatorInput = (op: string) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue("0"); //clear
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;

      case "-":
        result = num1 - num2;
        break;

      case "*":
        result = num1 * num2;
        break;

      case "/":
        result = num1 / num2;
        break;
    }
    setDisplayValue(result.toString());
    setOperator(null);
    setFirstValue(result.toString());
  };

  const handleClear = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstValue("");
  };

  const handleDecimalInput = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContent}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.bottonRow}>
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
        <View style={styles.bottonRow}>
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
        <View style={styles.bottonRow}>
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
        <View style={styles.bottonRow}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  displayContent: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  buttonContainer: {
    flex: 3,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  displayText: {
    fontSize: 48,
    color: "#333",
  },

  bottonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  button: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 3,
    margin: 2,
    minWidth: 70,
    padding: 10,
  },
  buttonText: {
    fontSize: 34,
    color: "#333",
  },
  clearButton: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f",
    elevation: 3,
    marginTop: 10,
    padding: 10,
  },

  clearButtonText: {
    fontSize: 30,
    color: "#333",
  },
});

export default Calculator;
