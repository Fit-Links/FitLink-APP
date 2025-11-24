import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DarkTheme}>
      <Stack>
        <Stack.Screen
          name="(root)/index"
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: Colors.dark.background.primary },
          }}
        />
        <Stack.Screen
          name="webview"
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: Colors.dark.background.primary },
            animation: "none",
          }}
        />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
