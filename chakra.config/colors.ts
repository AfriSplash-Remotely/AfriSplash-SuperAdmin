interface ColorscodeI {
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  100: string;
}

interface BaseColorI {
  transparent: string;
  white: string;
  black: string;
  info: string;
  success: string;
  warning: string;
  secondary: string;
  error: string;
  primary: string;
  primaryLight: string;
  accent: string;
}

interface SystemColorType extends BaseColorI {
  gray: ColorscodeI;
  red: ColorscodeI;
  green: ColorscodeI;
  amber: ColorscodeI;
}

const colors: SystemColorType = {
  transparent: "transparent",
  white: "#FFFFFF",
  black: "#49494C",
  info: "#03a9f4",
  success: "#21ba45",
  warning: "#FCBC00",
  secondary: "#1C1D36",
  error: "#C20222",
  primary: "#0D5520",
  primaryLight: "#D6ECDC",
  accent: "FFC42D",
  gray: {
    10: "#FAFAFA",
    20: "#F3F4F6",
    30: "#E5E7EB",
    40: "#D1D5DB",
    50: "#9CA3AF",
    60: "#6B7280",
    70: "#4B5563",
    80: "#374151",
    90: "#1F2937",
    100: "#F9FAFB",
  },

  green: {
    10: "#E9F3E9",
    20: "#D3E8D3",
    30: "#BDDCBC",
    40: "#A7D1A6",
    50: "#91C590",
    60: "#7AB97A",
    70: "#64AE64",
    80: "#4EA24D",
    90: "#389737",
    100: "#228B21",
  },
  amber: {
    10: "#FFF8E6",
    20: "#FEF2CC",
    30: "#FEEBB3",
    40: "#FEE499",
    50: "#FEDE80",
    60: "#FDD766",
    70: "#FDD04D",
    80: "#FDC933",
    90: "#FCC31A",
    100: "#FCBC00",
  },
  red: {
    10: "#F9E6E9",
    20: "#F3CCD3",
    30: "#EDB3BD",
    40: "#E79AA7",
    50: "#E18191",
    60: "#DA677A",
    70: "#D44E64",
    80: "#CE354E",
    90: "#C81B38",
    100: "#C20222",
  },

  // ...
};
export default colors;

//
