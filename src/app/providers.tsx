"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      main: {
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        padding: 0,
        margin: 0,
      },
    },
  },
  semanticTokens: {
    colors: {
      purple: { 450: "#7F00FF" },
      pink: { 250: "#FB2E86" },
    },
  },
});
export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
