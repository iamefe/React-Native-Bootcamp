import { useState } from "react";

export const useCalculator = () => {
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

  return {
    displayValue,
    operator,
    handleNumberInput,
    firstValue,
    handleOperatorInput,
    handleEqual,
    handleClear,
    handleDecimalInput,
  };
};
