import { StyleSheet } from "react-360";

export default StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    width: 400,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "blue",
    borderWidth: 1,
    backgroundColor: "navajowhite",
  },

  text: {
    fontSize: 80,
    color: "yellow",
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 0,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
