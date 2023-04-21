import { extendTheme } from "@chakra-ui/react";
import borderRadius from "./borderRadius";
import buttonComponent from "./button";
import colors from "./colors";
import inputComponent from "./input";
import boxShadow from "./shadows";
import sizes from "./sizes";

const theme = extendTheme({
  colors,
  borderRadius,
  sizes,
  shadows: boxShadow,
  fonts: {
    heading: `'Lexend', sans-serif`,
    body: `'Inter', sans-serif`,
    mono: `'Poppins', sans-serif`,
  },
  fontSizes: {
    xs: "0.688rem", // 11px
    sm: "0.75rem", // 12px
    md: "0.875rem", // 14px
    lg: "1rem", // 16px
    xl: "1.375rem", // 22px
    "2xl": "1.5rem", // 24px
    "3xl": "1.75rem", // 28px
    "4xl": "2rem", // 32px
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  components: {
    Button: buttonComponent,
    Input: inputComponent,
    Textarea: {
      baseStyle: {
        borderWidth: "1px",
        borderColor: "#000",
      },
    },
    Link: {
      baseStyle: {
        textDecoration: "none",
      },
    },

  },
});

export default theme;
