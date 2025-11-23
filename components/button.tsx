import { Colors } from "@/constants/theme";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

const DEFAULT_BUTTON_STYLE: ViewStyle = {
  paddingVertical: 20,
  paddingHorizontal: 30,
  borderRadius: 10,
  alignItems: "center",
};

type ButtonVariant = "trainer" | "user";

interface ButtonProps extends Omit<PressableProps, "style"> {
  type: ButtonVariant;
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode;
}

export default function Button({
  type,
  title,
  onPress,
  disabled = false,
  style,
  textStyle,
  children,
  ...props
}: ButtonProps) {
  const buttonStyle =
    type === "trainer"
      ? styles.trainerButton
      : type === "user"
      ? styles.userButton
      : styles.testButton;

  return (
    <Pressable
      style={({ pressed }: { pressed: boolean }) => [
        buttonStyle,
        style,
        disabled && styles.disabledButton,
        pressed && !disabled && styles.pressedButton,
      ]}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <Text
        style={[styles.buttonText, textStyle, disabled && styles.disabledText]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  trainerButton: {
    backgroundColor: Colors.dark.brand.primary,
    ...DEFAULT_BUTTON_STYLE,
  },
  userButton: {
    backgroundColor: Colors.dark.brand.secondary,
    ...DEFAULT_BUTTON_STYLE,
  },
  pressedButton: {
    opacity: 0.8,
  },
  disabledButton: {
    backgroundColor: Colors.dark.text.sub3,
    opacity: 0.5,
  },
  buttonText: {
    color: Colors.dark.text.primary,
    fontSize: 18,
    fontWeight: "600",
  },
  disabledText: {
    color: Colors.dark.text.sub3,
  },
  testButton: {
    backgroundColor: "#ff52aa",
    ...DEFAULT_BUTTON_STYLE,
  },
});
