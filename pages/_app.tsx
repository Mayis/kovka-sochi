import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "../util/Theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme()}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
