import Button from "@/components/button";
import ScreenLayout from "@/components/screen-layout";
import { Colors } from "@/constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const logoText = require("@/assets/images/logo_text.png");
const { width: screenWidth } = Dimensions.get("window");

export default function WelcomePage() {
  const router = useRouter();

  const handleClickRouteWebView = (route: string) => {
    AsyncStorage.setItem("user_type", route);
    router.push("/webview");
  };

  useEffect(() => {
    AsyncStorage.removeItem("user_type");
  }, []);

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <View style={styles.InformationContainer}>
          <Image source={logoText} style={styles.logo} />
          <Text style={styles.title}>회원 유형을 선택해주세요.</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            type="trainer"
            onPress={() => handleClickRouteWebView("trainer")}
          >
            트레이너
          </Button>
          <Button type="user" onPress={() => handleClickRouteWebView("user")}>
            회원
          </Button>
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  InformationContainer: {
    flex: 6,
    width: screenWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: screenWidth * 0.3,
    height: screenWidth * 0.3,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    color: Colors.dark.text.sub1,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flex: 6,
    width: screenWidth * 0.8,
    gap: 16,
  },
});
