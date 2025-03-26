import { HTMLAttributes } from "react";

export type NavBarProps = HTMLAttributes<HTMLDivElement> & {
  themeSwitch: string;
  setThemeSwitch: Function;
};
