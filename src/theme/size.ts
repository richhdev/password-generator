import { clampGen } from "@/utils/clamp-gen";
import { clampDefault } from "./text";

export const size = {
  sm: clampGen({
    minFontSize: "12",
    maxFontSize: "16",
    ...clampDefault,
  }),
  md: clampGen({
    minFontSize: "16",
    maxFontSize: "22",
    ...clampDefault,
  }),
  lg: clampGen({
    minFontSize: "18",
    maxFontSize: "24",
    ...clampDefault,
  }),
  xl: clampGen({
    minFontSize: "20",
    maxFontSize: "26",
    ...clampDefault,
  }),
  xl2: clampGen({
    minFontSize: "24",
    maxFontSize: "28",
    ...clampDefault,
  }),
  xl3: clampGen({
    minFontSize: "28",
    maxFontSize: "32",
    ...clampDefault,
  }),
  xl4: clampGen({
    minFontSize: "32",
    maxFontSize: "38",
    ...clampDefault,
  }),
  xl5: clampGen({
    minFontSize: "36",
    maxFontSize: "42",
    ...clampDefault,
  }),
};
