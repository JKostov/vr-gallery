import { StyleSheet } from "react-360";

export default StyleSheet.create({
  explainWrapper: {
    opacity: 0.9,
    flexDirection: "row",
    borderColor: "white",
    borderWidth: 5,
    backgroundColor: "white",
  },

  explanation: {
    flexDirection: "column",
    backgroundColor: "green",
    padding: 20,
    opacity: 0.95,
    width: 350,
  },

  item: {
    marginBottom: 20,
  },

  title: {
    color: "black",
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    color: "black",
    fontWeight: "bold",
    fontSize: 32,
  },

  content: {
    color: "black",
    fontSize: 28,
  },
});
