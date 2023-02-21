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
        main: "#fffff"
      }
    },
    typography: {
      body1: {
        fontSize: 16,
        fontFamily: "Roboto"
      },
      subtitle1: {
        fontSize: 24,
        fontFamily: "Acadian",
        lineHeight: 1.2
      }
    }
  });
};
