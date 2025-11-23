import ScreenLayout from "@/components/screen-layout";
import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
export default function WebViewPage() {
  return (
    <ScreenLayout>
      <WebView
        style={styles.webview}
        source={{ uri: "https://www.google.com" }}
      />
    </ScreenLayout>
  );
}
const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
