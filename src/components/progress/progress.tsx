import React from "react";
import { View, StyleSheet } from "react-native";
import { styleVariables } from "@/components/style/style";
import { MaterialIcons } from "@expo/vector-icons";

type ProgressBarProps = {
  progress: number; // Progress value between 0 and 1
  icons: { name: keyof typeof MaterialIcons.glyphMap; color?: string; label?: string }[]; // Array of icons with optional color and label
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, icons }) => {
  return (
    <View style={styles.container}>
      {/* Icons Row */}
      <View style={styles.iconsContainer}>
        {icons.map((icon, index) => (
          <View key={index} style={styles.iconWrapper}>
            <MaterialIcons
              name={icon.name}
              size={32}
              color={icon.color || styleVariables.Colors.white}
            />
            {icon.label}
          </View>
        ))}
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 16,
    marginHorizontal: 40,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 8,
  },
  iconWrapper: {
    alignItems: "center",
  },
  iconLabel: {
    marginTop: 4,
    fontSize: 12,
    color: styleVariables.Colors.white,
    textAlign: "center",
  },
  progressBarContainer: {
    position: "relative",
    width: "100%",
    height: 4, // Reduced height for a thinner line
    backgroundColor: styleVariables.Colors.white,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: styleVariables.Colors.orange,
  },
});

export { ProgressBar };