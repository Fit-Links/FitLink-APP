// constants/Colors.ts
/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    // Brand colors
    brand: {
      primary: "#5755FF", // hsl(87 85% 255%) -> #5755FF
      secondary: "#4F9AFF", // hsl(255 142% 107%) -> #FF8E6B
    },
    // Text colors
    text: {
      primary: "#FFFFFF", // hsl(0 0% 100%)
      sub1: "#E8E8E8", // hsl(0 0% 91%)
      sub2: "#BFBFBF", // hsl(0 0% 75%)
      sub3: "#787878", // hsl(0 0% 47%)
      sub4: "#4D4D4D", // hsl(0 0% 30%)
      sub5: "#1C1C1C", // hsl(0 0% 11%)
    },

    // Background colors
    background: {
      primary: "#1C1C1C", // hsl(0 0% 11%)
      sub1: "#242424", // hsl(0 0% 14%)
      sub2: "#2E2E2E", // hsl(0 0% 18%)
      sub3: "#4D4D4D", // hsl(0 0% 30%)
      sub4: "#787878", // hsl(0 0% 47%)
      sub5: "#FFFFFF", // hsl(0 0% 100%)
    },

    // Notification
    notification: "#FF6B6B", // hsl(360 100% 66%)

    // 기존 색상들 (호환성을 위해 유지)
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
