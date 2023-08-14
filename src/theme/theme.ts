import { color } from "./color";
import { size } from "./size";
import { text } from "./text";

const themeBase = {
  size: {
    ...size,
  },
  text: {
    ...text,
  },
};

export const themeLight = {
  id: "light",
  ...themeBase,
  color: "black",
  backgroundColor: "white",
  focusColor: color.blue,
  a: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  button: {
    activeBackgroundColor: "rgba(0,0,0,0.7)",
    activeBoxShadowColor: "rgba(0,0,0,0.5)",
    animationClickedColor: "rgba(0,0,0,0.3)",
    outlineBackgroundColor: "rgba(0,0,0,0.1)",
    ghostBackgroundColor: "rgba(0,0,0,0.1)",
  },
  input: {
    backgroundColor: color.background,
    focusBorderColor: color.blue,
    validBorderColor: color.inputValid,
    invalidBorderColor: color.inputInvalid,
  },
  table: {
    borderColor: "rgba(0,0,0,0.2)",
    stripedBackground: "rgba(0,0,0,0.04)",
  },
  tabs: {
    headerBorderColor: "rgba(0,0,0,0.2)",
    headerButtonBorderColor: color.foreground,
    buttonColor: color.foreground,
    buttonHoverBackgroundColor: "rgba(0,0,0,0.04",
    buttonActiveColor: color.foreground,
    buttonOutlineBorderColor: color.foreground,
    buttonOutlineActiveBorderColor: color.background,
    buttonOutlineActiveColor: color.foreground,
    buttonOutlineActiveBackgroundColor: "rgba(0,0,0,0.04)",
  },
  textarea: {
    borderColor: "black",
    backgroundColor: "white",
  },
};

export const themeDark = {
  id: "dark",
  ...themeBase,
  color: color.dark.foreground,
  backgroundColor: "black",
  focusColor: color.blue,
  a: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  button: {
    activeBackgroundColor: "rgba(255,255,255,0.7)",
    activeBoxShadowColor: "rgba(255,255,255,0.5)",
    animationClickedColor: "rgba(255,255,255,0.5)",
    outlineBackgroundColor: "rgba(255,255,255,0.1)",
    ghostBackgroundColor: "rgba(255,255,255,0.1)",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
    focusBorderColor: color.blue,
    validBorderColor: color.inputValid,
    invalidBorderColor: color.inputInvalid,
  },
  table: {
    borderColor: "rgba(255,255,255,0.2)",
    stripedBackground: "rgba(255,255,255,0.08)",
  },
  tabs: {
    headerBorderColor: "rgba(255,255,255,0.5)",
    headerButtonBorderColor: color.dark.foreground,
    buttonColor: color.dark.foreground,
    buttonHoverBackgroundColor: "rgba(255,255,255,0.1)",
    buttonActiveColor: color.dark.foreground,
    buttonOutlineBorderColor: color.dark.foreground,
    buttonOutlineActiveBorderColor: color.dark.background,
    buttonOutlineActiveColor: color.dark.foreground,
    buttonOutlineActiveBackgroundColor: "rgba(255,255,255.04)",
  },
  textarea: {
    borderColor: color.dark.foreground,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
};
