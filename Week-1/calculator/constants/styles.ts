import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

  buttonRow: {
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
    backgroundColor: "#f0f0f0",
    elevation: 3,
    marginTop: 10,
    padding: 10,
  },

  clearButtonText: {
    fontSize: 30,
    color: "#333",
  },
});
