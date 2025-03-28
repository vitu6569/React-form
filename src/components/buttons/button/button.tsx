import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles, styleVariables } from "@/components/style/style";

type Props = TouchableOpacityProps & {
  title: string;
  variant?: "primary" | "secondary" | "danger"; // Variantes de estilo
  size?: "big" | "small";
};

/**
 * A customizable button component for React Native.
 *
 * @param {Object} props - The properties passed to the button component.
 * @param {"big" | "small"} [props.size="big"] - The size of the button. Defaults to "big".
 * @param {"primary" | "secondary" | "tertiary"} [props.variant="primary"] - The variant of the button, which determines its style. Defaults to "primary".
 * @param {string} props.title - The text to display inside the button.
 * @param {Object} [props.rest] - Additional props to pass to the `TouchableOpacity` component.
 *
 * @returns {JSX.Element} A styled button component with customizable size, variant, and title.
 */
export default function Button({
  size = "big",
  variant = "primary",
  title,
  ...rest
}: Props) {
  const buttonStyle =
    variant === "primary"
      ? styles.buttonO
      : variant === "secondary"
      ? styles.buttonG
      : styles.buttonR;
  const buttonSize = size === "big" ? styles.bigButton : styles.smallButton;

  const textColor =
    variant === "primary"
      ? styleVariables.Colors.black
      : styleVariables.Colors.white;

  return (
    <TouchableOpacity {...rest} style={[buttonStyle, buttonSize]}>
      <Text style={[styles.ButtonsFont, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}
