import { Bell, Calendar, UserRound } from "lucide-react-native";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

const ICONS_MAP = {
  캘린더: <Calendar />,
  회원: <UserRound />,
  알림: <Bell />,
  마이페이지: <UserRound />,
} as const;

type TabButtonProps = PressableProps & {
  name: keyof typeof ICONS_MAP;
  focused: boolean;
};

export default function TabButton({
  focused = true,
  ...props
}: TabButtonProps) {
  const IconComponent = ICONS_MAP[props.name];
  const iconColor = focused ? "#ffffff" : "#666666";
  const textColor = focused ? "#ffffff" : "#666666";
  return (
    <Pressable style={styles.tabButton} {...props}>
      {React.cloneElement(IconComponent, {
        stroke: iconColor,
        size: 24,
        strokeWidth: 2,
      })}
      <Text style={[styles.text, { color: textColor }]}>{props.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flexDirection: "column",
    alignItems: "center",
    top: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 7,
  },
});
