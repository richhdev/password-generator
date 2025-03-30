import IconThemeAuto from "@/icons/IconThemeAuto";
import IconThemeLight from "@/icons/IconThemeLight";
import IconThemeDark from "@/icons/IconThemeDark";
import { IconButton } from "../NavBar/NavBar";

const ThemeSwitch = ({
  themeSwitch,
  setThemeSwitch,
}: {
  themeSwitch: string;
  setThemeSwitch: Function;
}) => {
  return (
    <IconButton
      ghost
      onClick={() => {
        const options = [...Object.keys(themeMap)];
        const index = options.findIndex((item) => item === themeSwitch);
        const nextIndex = index === options.length - 1 ? 0 : index + 1;
        setThemeSwitch(options[nextIndex]);
      }}
      style={{ padding: "8px" }}
      aria-label="Theme"
    >
      {themeMap[themeSwitch as keyof typeof themeMap]?.icon}
    </IconButton>
  );
};

export default ThemeSwitch;

const themeMap = {
  auto: {
    id: "auto",
    icon: <IconThemeAuto alt="auto" />,
  },
  light: {
    id: "light",
    icon: <IconThemeLight alt="light" />,
  },
  dark: {
    id: "dark",
    icon: <IconThemeDark alt="dark" />,
  },
};
