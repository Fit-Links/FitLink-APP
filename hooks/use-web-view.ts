import { WebViewContext } from "@/context/web-view-context";
import { WebViewContextType } from "@/types/web-view";
import { useContext } from "react";

export default function useWebView(): WebViewContextType {
  const context = useContext(WebViewContext);
  if (!context)
    throw new Error("useWebViewUrl must be used within WebViewProvider");
  return context;
}
