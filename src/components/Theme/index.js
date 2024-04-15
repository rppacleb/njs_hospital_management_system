import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useCutomStyles } from "./useCustomStyles";

const Theme = ({ children }) => {
  const pageTheme = createTheme({
    palette: {
      background: {
        primary: "#FAC50F",
        white: "white",
        black: "black",
        blacklight: "#0D0D0D",
        blacktransp: "#262626",
      },
      primary: {
        main: "#FAC50F",
        dark: "black",
        light: "#FAC50F",
      },
      secondary: {
        main: "#FAC50F",
        dark: "black",
        light: "#FAC50F",
      },
      complementary: {
        main: "#FAC50F",
        dark: "black",
        light: "#FAC50F",
      },
      colors: {
        primary: "#FAC50F",
        red: "#860303",
        white: "white",
        black: "black",
        blacklight: "#0D0D0D",
        gray: "#7D7D7D",
        graylight: "#303030",
        textdark: "#D0D0D0",
      },
      gradient: {
        primary:
          "linear-gradient(180deg, rgba(250,197,15,1) 19%, rgba(255,231,150,1) 49%, rgba(250,197,15,0.8799894957983193) 75%)",
        black:
          "linear-gradient(180deg, rgba(38,38,38,1) 19%, rgba(18,18,18,1) 75%)",
        blackTransparent:
          "linear-gradient(180deg, rgba(0, 0, 0, 0), rgb(0, 0, 0))",
      },
      backShadow: {
        darkShadow:
          "0 1px 1px hsl(0deg 0% 0% / 0.075),0 2px 2px hsl(0deg 0% 0% / 0.075),0 4px 4px hsl(0deg 0% 0% / 0.075),0 8px 8px hsl(0deg 0% 0% / 0.075),0 16px 16px hsl(0deg 0% 0% / 0.075)",
        lightShadow: "",
        lightOrDarkRim:
          "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.1),0 0 0 1px hsla(230, 13%, 9%, 0.075),0 0.3px 0.4px hsla(230, 13%, 9%, 0.02),0 0.9px 1.5px hsla(230, 13%, 9%, 0.045),0 3.5px 6px hsla(230, 13%, 9%, 0.09)",
        textShadow: "-2px -1px 3px rgba(250, 197, 15, 0.52)",
      },
    },
    transitions: {
      max: "all 1s cubic-bezier(.25,.8,.25,1)",
      min: "all 0.3s",
    },
    breakpoints: {
      values: {
        xxs: 0, // MOBILE_0
        xs: 360, // MOBILE_S
        sm: 600, // MOBILE_M
        md: 800, // TABLET
        lg: 1025, // LAPTOP_S
        container: 1200, //DEFAULT CONTAINER
        xl: 1280, // LAPTOP_M
        xxl: 1440, // LAPTOP_L
      },
    },
    typography: {
      color: "rgba(255, 255, 255, 1)",
      button: {
        textTransform: "none",
      },
      // fontFamily: ["-apple-system", '"Inter"'],
    },
    useCutomStyles,
  });

  return (
    <ThemeProvider theme={pageTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
