// app/webview/_layout.tsx
import { WebViewProvider } from "@/provider/web-view-provider";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <WebViewProvider>
      <Slot />
    </WebViewProvider>
  );
}
