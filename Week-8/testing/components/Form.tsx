import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const Form = () => {
  const [input, setInput] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    console.info("We just pressed the Submit button", input);
    setSubmittedText(input);
    setInput("");
  };

  return (
    <View>
      <TextInput
        testID="input-field"
        value={input}
        onChangeText={setInput}
        placeholder="Enter something"
      />
      <Button title="Submit" onPress={handleSubmit} />
      {submittedText ? (
        <Text testID="submitted-text">{submittedText}</Text>
      ) : null}
    </View>
  );
};

export default Form;
