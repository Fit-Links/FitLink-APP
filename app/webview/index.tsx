import { Colors } from "@/constants/theme";
import useWebView from "@/hooks/use-web-view";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import NavigationTabBar from "./_components/navigation-tab-bar";

const BROWSER_WHITELIST = ["kakao.com", "naver.com", "google.com"];

export default function WebViewPage() {
  const { webviewRef, shouldShowTabBar, currentUrl, handleSetCurrentUrl } =
    useWebView();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <WebView
          ref={webviewRef}
          style={styles.webview}
          source={{ uri: currentUrl.current as string }}
          onNavigationStateChange={(navState) => {
            handleSetCurrentUrl(navState.url);
          }}
          onShouldStartLoadWithRequest={(request) => {
            const isNeedBrowser = BROWSER_WHITELIST.some((domain) =>
              request.url.includes(domain)
            );
            if (isNeedBrowser) {
              WebBrowser.openBrowserAsync(request.url);
              return false;
            }
            return true;
          }}
        />
        {shouldShowTabBar && <NavigationTabBar />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.dark.background.primary,
  },
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    backgroundColor: Colors.dark.background.primary,
  },
});
