import { StyleSheet } from "react-360";

export default StyleSheet.create({
  wrapper: {
    opacity: 0.9,
    flexDirection: "column",
    borderColor: "white",
    borderWidth: 5,
    margin: "auto",
    backgroundColor: "white",
  },

  hoverEffect: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    opacity: 1,
  },

  name: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
