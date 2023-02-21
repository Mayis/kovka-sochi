// mui style
import { createTheme } from "@mui/material";

export const theme = () => {
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1500
      }
    },
    palette: {
      primary: {
        main: "#d36503"
      },
      secondary: {
        main: "#ffc435"
      },
      info: {
        main: "#181818"
      },
      warning: {
        main: "#ffff"
      }
    },
    typography: {
      body1: {
        fontSize: 16,
        fontFamily: "Roboto"
      },
      body2: {
        fontSize: 18,
        fontFamily: "Space Grotesk,sans-serif",
        color: "white",
        cursor: "pointer"
      },
      subtitle1: {
        fontSize: 24,
        fontFamily: "Acadian",
        lineHeight: 1.2
      },
      subtitle2: {
        fontSize: 180,
        fontFamily: "Jura, sans-serif",
        fontWeight: 800
      },
      h1: {
        fontSize: 50,
        fontFamily: "Jura, sans-serif",
        fontWeight: 800,
        letterSpacing: 0,
        lineHeight: 0
      }
    }
  });
};
