import Counter from "../Counter";
import { fireEvent, render } from "@testing-library/react-native";

describe("Counter", () => {
  it("renders the initial count", () => {
    const { getByText } = render(<Counter />);
    expect(getByText("Count: 0")).toBeTruthy;
  });

  it("increments the count when the button is pressed", () => {
    const { getByText } = render(<Counter />);
    const button = getByText("Increment");

    fireEvent.press(button);

    expect(getByText("Count: 1"));
  });
});
