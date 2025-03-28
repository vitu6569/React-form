import { StyleSheet } from "react-native";

export const styleVariables = {
  Colors: {
    orange: "#FF8C00",
    black: "#121212",
    grey: "#4A4A4A",
    lightGrey: "#8C8C8C",
    veryLightGrey: "#D3D3D3",
    white: "#FFFFFF",
    red: "#D50032",
    redHover: "#B30029",
    green: "#008C29",
    orangeHover: "#FF6F00",
    greyHover: "#6A6A6A",
  },
};

export const styles = StyleSheet.create({
  // Input styles
  inputI: {
    borderWidth: 1,
    borderColor: styleVariables.Colors.grey, // Grey border for neutral input
    borderRadius: 8,
    backgroundColor: styleVariables.Colors.black, // Black background for contrast
    color: styleVariables.Colors.grey, // Grey text color
    height: 52,
    marginHorizontal: 3,
    paddingLeft: 15,
    paddingHorizontal: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputF: {
    borderWidth: 1,
    borderColor: styleVariables.Colors.orange, // Orange border for focus state
    borderRadius: 8,
    backgroundColor: styleVariables.Colors.black,
    color: styleVariables.Colors.grey,
    height: 52,
    marginHorizontal: 3,
    paddingLeft: 15,
    paddingHorizontal: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputE: {
    borderWidth: 1,
    borderColor: styleVariables.Colors.red, // Red border for error state
    borderRadius: 8,
    backgroundColor: styleVariables.Colors.black,
    color: styleVariables.Colors.grey,
    height: 52,
    marginHorizontal: 3,
    paddingLeft: 15,
    paddingHorizontal: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputS: {
    borderWidth: 1,
    borderColor: styleVariables.Colors.green, // Green border for success state
    borderRadius: 8,
    backgroundColor: styleVariables.Colors.black,
    color: styleVariables.Colors.grey,
    height: 52,
    marginHorizontal: 3,
    paddingLeft: 15,
    paddingHorizontal: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // Input size variations
  default: {
    width: "auto", // Flexible width for larger inputs
  },
  largeInput: {
    width: "98%", // Half-width for smaller inputs
  },
  mediumInput: {
    width: "85%", // Half-width for smaller inputs
  },
 smallInput: {
    width: "50%", // Flexible width for larger inputs
  },
  // Button styles
  buttonO: {
    backgroundColor: styleVariables.Colors.orange, // Orange background for primary action
    color: styleVariables.Colors.black, // Black text for contrast
    marginHorizontal: 3,
    justifyContent: "center",
    alignItems: "center",
    height: 52,
    borderRadius: 4,
  },
  buttonG: {
    backgroundColor: styleVariables.Colors.lightGrey, // Light grey background for secondary action
    color: styleVariables.Colors.white, // White text for contrast
    marginHorizontal: 3,
    justifyContent: "center",
    alignItems: "center",
    height: 52,
    borderRadius: 4,
  },
  buttonR: {
    backgroundColor: styleVariables.Colors.red, // Red background for destructive action
    color: styleVariables.Colors.white,
    marginHorizontal: 3,
    justifyContent: "center",
    alignItems: "center",
    height: 52,
    borderRadius: 4,
  },
  // Button size variations
  bigButton: {
    width: "auto", // Flexible width for larger buttons
  },
  smallButton: {
    width: "50%", // Half-width for smaller buttons
  },
  // Heading styles
  H1: {
    fontSize: 32, // Large font size for main headings
    fontWeight: "semibold",
    fontFamily: "Montserrat_600SemiBold",
  },
  H2: {
    fontSize: 24, // Medium font size for subheadings
    fontWeight: "regular",
    fontFamily: "Montserrat_400Regular",
  },
  H3: {
    fontSize: 16, // Smaller font size for tertiary headings
    fontWeight: "regular",
    fontFamily: "Montserrat_400Regular",
  },
  // Paragraph styles
  P1: {
    fontSize: 16, // Standard font size for body text
    fontWeight: "regular",
    fontFamily: "Roboto_400Regular",
  },
  P2: {
    fontSize: 14, // Smaller font size for secondary body text
    fontWeight: "light",
    fontFamily: "Roboto_300Light",
  },
  // Font styles for buttons and labels
  ButtonsFont: {
    fontSize: 16, // Standard font size for button text
    fontWeight: "bold",
    fontFamily: "Roboto_400Regular",
  },
  LabelsFont: {
    fontSize: 12, // Smaller font size for labels
    fontWeight: "regular",
    fontFamily: "Roboto_400Regular",
  },
  // Error message style
  Error: {
    marginHorizontal: 3,
    color: styleVariables.Colors.red, // Red text for error messages
  },
});
