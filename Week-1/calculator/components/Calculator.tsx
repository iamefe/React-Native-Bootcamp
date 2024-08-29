import { useState } from "react";
import { Text } from "react-native";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState<string>("");

  return <Text>Edit app/index.tsx to edit this screen.</Text>;
};

export default Calculator;
