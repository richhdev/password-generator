import { useEffect, useState } from "react";
import { themeDark, themeLight } from "@/theme";

export const useTheme = () => {
  const [theme, setTheme] = useState(themeLight);
  const [themeSwitch, setThemeSwitch] = useState("auto");

  useEffect(() => {
    const themeMap = {
      auto: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? themeDark
        : themeLight,
      light: themeLight,
      dark: themeDark,
    };
    setTheme(themeMap[themeSwitch as keyof typeof themeMap]);
  }, [themeSwitch]);

  return { theme, themeSwitch, setThemeSwitch };
};
