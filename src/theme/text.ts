import { clampGen } from "../utils/clamp-gen";

const defaultFontStack = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
const defaultMonospaceFontStack = `Menlo, Consolas, "Ubuntu Mono", "Roboto Mono", "DejaVu Sans Mono", monospace`;
export const clampDefault = {
  minWidth: "576px",
  maxWidth: "1200px",
  root: "16",
};

export const fonts = {
  oswald: `"OswaldVariable"`,
  nunito: `"NunitoVariable"`,
  inconsolada: `"InconsolataVariable"`,
};

export const ff = {
  h1: `${fonts.oswald}, ${defaultFontStack}`,
  h2: `${fonts.nunito}, ${defaultFontStack}`,
  h3: `${fonts.nunito}, ${defaultFontStack}`,
  h4: `${fonts.nunito}, ${defaultFontStack}`,
  h5: `${fonts.nunito}, ${defaultFontStack}`,
  h6: `${fonts.nunito}, ${defaultFontStack}`,
  p: `${fonts.nunito}, ${defaultFontStack}`,
  mono: `${fonts.inconsolada}, ${defaultMonospaceFontStack}`,
};

export const fz = {
  h1: "36px",
  h2: "32px",
  h3: "28px",
  h4: "24px",
  h5: "20px",
  h6: "18px",
  p: "16px",
  small: "12px",
  h1Responsive: clampGen({
    minFontSize: "36",
    maxFontSize: "42",
    ...clampDefault,
  }),
  h2Responsive: clampGen({
    minFontSize: "32",
    maxFontSize: "38",
    ...clampDefault,
  }),
  h3Responsive: clampGen({
    minFontSize: "28",
    maxFontSize: "32",
    ...clampDefault,
  }),
  h4Responsive: clampGen({
    minFontSize: "24",
    maxFontSize: "28",
    ...clampDefault,
  }),
  h5Responsive: clampGen({
    minFontSize: "20",
    maxFontSize: "26",
    ...clampDefault,
  }),
  h6Responsive: clampGen({
    minFontSize: "18",
    maxFontSize: "24",
    ...clampDefault,
  }),
  pResponsive: clampGen({
    minFontSize: "16",
    maxFontSize: "22",
    ...clampDefault,
  }),
  smallResponsive: clampGen({
    minFontSize: "12",
    maxFontSize: "16",
    ...clampDefault,
  }),
};

export const lh = {
  h1: "1.2",
  h2: "1.2",
  h3: "1.3",
  h4: "1.3",
  h5: "1.3",
  h6: "1.3",
  p: "1.4",
  small: "1.3",
};

export const text = {
  h1: {
    ff: ff.h1,
    fz: fz.h1Responsive,
    lh: lh.h1,
    fw: 700,
    css: "text-transform:uppercase",
  },
  h2: {
    ff: ff.h2,
    fz: fz.h2Responsive,
    lh: lh.h2,
    fw: 700,
  },
  h3: {
    ff: ff.h3,
    fz: fz.h3Responsive,
    lh: lh.h3,
    fw: 700,
  },
  h4: {
    ff: ff.h4,
    fz: fz.h4Responsive,
    lh: lh.h4,
    fw: 700,
  },
  h5: {
    ff: ff.h5,
    fz: fz.h5Responsive,
    lh: lh.h5,
    fw: 700,
  },
  h6: {
    ff: ff.h6,
    fz: fz.h6Responsive,
    lh: lh.h6,
    fw: 700,
  },
  p: {
    ff: ff.p,
    fz: fz.pResponsive,
    lh: lh.p,
    fw: 400,
  },
  small: {
    ff: ff.p,
    fz: fz.smallResponsive,
    lh: lh.small,
    fw: 400,
  },
};
