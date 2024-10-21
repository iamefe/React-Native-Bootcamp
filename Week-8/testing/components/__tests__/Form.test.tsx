import { fireEvent, render } from "@testing-library/react-native";
import Form from "../Form";

describe("Form", () => {
  it("renders input and button correctly", () => {
    const { getByPlaceholderText, getByText } = render(<Form />);
    expect(getByPlaceholderText("Enter something")).toBeTruthy;
    expect(getByText("Submit")).toBeTruthy;
  });

  it("displays submitted text when the form is submitted", () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<Form />);

    const inputField = getByPlaceholderText("Enter something");
    fireEvent.changeText(inputField, "Test input");

    fireEvent.press(getByText("Submit"));

    expect(getByTestId("submitted-text").props.children).toBe("Test input");
  });
});
