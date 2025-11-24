// contexts/WebViewContext.tsx
import { WebViewContextType } from "@/types/web-view";
import { createContext } from "react";

export const WebViewContext = createContext<WebViewContextType | undefined>(
  undefined
);
