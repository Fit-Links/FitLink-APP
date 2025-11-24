import { ReactNode, RefObject } from "react";
import WebView from "react-native-webview";
import { TabProps } from "./tab";

export type WebViewContextType = {
  webviewRef: React.RefObject<WebView | null>;
  tabs: TabProps[];
  setTabs: (tabs: TabProps[]) => void;
  currentUrl: RefObject<string | null>;
  handleSetCurrentUrl: (url: string) => void;
  shouldShowTabBar: boolean;
  setShouldShowTabBar: (show: boolean) => void;
};

export type WebViewProviderProps = {
  children: ReactNode;
};
