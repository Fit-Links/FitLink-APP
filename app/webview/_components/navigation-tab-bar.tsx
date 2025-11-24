import { Colors } from "@/constants/theme";
import useWebView from "@/hooks/use-web-view";
import React from "react";

import { TabProps } from "@/types/tab";

import { StyleSheet, View } from "react-native";
import TabButton from "./tab-button";

export default function NavigationTabBar() {
  const { webviewRef, currentUrl, tabs } = useWebView();

  const handleTabPress = (url: string) => {
    webviewRef.current?.injectJavaScript(`
      window.location.href = '${url}';
      true;
    `);
  };

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab: TabProps) => (
        <TabButton
          key={tab.url}
          name={tab.name}
          onPress={() => handleTabPress(tab.url)}
          focused={currentUrl.current?.includes(tab.url) ?? false}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    backgroundColor: Colors.dark.background.primary,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 0.5,
    borderTopColor: "#101010",
  },
});
