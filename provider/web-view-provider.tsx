// app/webview/context/WebViewProvider.tsx
import { WebViewContext } from "@/context/web-view-context";
import { TabProps } from "@/types/tab";
import { UserType } from "@/types/user";
import { WebViewProviderProps } from "@/types/web-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { WebView } from "react-native-webview";

const BASE_URL = {
  trainer: "https://dev.trainer.fitlink.biz/",
  user: "https://dev.user.fitlink.biz/",
};

const NAVIGATION_BAR_LENGTH = 5;

const SPECIFIC_NO_NAVIGATION_BAR_URLS = [
  "login",
  "register",
  "sns-verification",
];

const TABS = {
  trainer: [
    { name: "캘린더", url: "/schedule-manager", icon: "Calendar" },
    { name: "회원", url: "/user-list", icon: "Contact" },
    { name: "알림", url: "/notification", icon: "Bell" },
    { name: "마이페이지", url: "/my-page", icon: "UserRound" },
  ],
  user: [
    { name: "캘린더", url: "/schedule-manager", icon: "Calendar" },
    { name: "알림", url: "/notification", icon: "Bell" },
    { name: "마이페이지", url: "/my-page", icon: "UserRound" },
  ],
} satisfies Record<UserType, TabProps[]>;

export const WebViewProvider = ({ children }: WebViewProviderProps) => {
  const webviewRef = useRef<WebView>(null);
  const currentUrlRef = useRef<string>("");

  const [tabs, setTabs] = useState<TabProps[]>([]);

  const [shouldShowTabBar, setShouldShowTabBar] = useState(false);

  useEffect(() => {
    const checkUserType = async () => {
      const storedUserType = await AsyncStorage.getItem("user_type");

      if (storedUserType) {
        setTabs(TABS[storedUserType as UserType]);
      } else {
        setTabs([]);
      }
    };
    const checkBaseUrl = async () => {
      const storedUserType = await AsyncStorage.getItem("user_type");
      if (storedUserType) {
        const baseUrl = BASE_URL[storedUserType as UserType];
        currentUrlRef.current = baseUrl;
        setShouldShowTabBar(true); // 초기 로딩 시 TabBar 보이기
      } else {
        currentUrlRef.current = "";
        setShouldShowTabBar(false);
      }
    };

    checkUserType();
    checkBaseUrl();
  }, []);

  const handleSetCurrentUrl = (url: string) => {
    if (currentUrlRef.current === url) return;

    currentUrlRef.current = url;

    // URL의 pathname을 추출하여 네비게이션 표시 여부 확인
    try {
      // 특정 URL이 포함되어 있는지 확인
      const isSpecificNoNavUrl = SPECIFIC_NO_NAVIGATION_BAR_URLS.some((path) =>
        url.includes(path)
      );

      const isSubPath = url.split("/").length >= NAVIGATION_BAR_LENGTH;

      const shouldHide = isSpecificNoNavUrl || isSubPath;
      setShouldShowTabBar(!shouldHide);
    } catch {
      // URL 파싱 실패 시 기본값으로 보이기
      setShouldShowTabBar(true);
    }
  };

  const value = {
    webviewRef,
    currentUrl: currentUrlRef,
    tabs,
    setTabs,
    handleSetCurrentUrl,
    shouldShowTabBar,
    setShouldShowTabBar,
  };

  return (
    <WebViewContext.Provider value={value}>{children}</WebViewContext.Provider>
  );
};
