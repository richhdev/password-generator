// import AutoSvg from "./images/auto.svg";
// import LightSvg from "./images/light.svg";
// import DarkSvg from "./images/dark.svg";
import IconThemeAuto from "@/icons/IconThemeAuto";
import IconThemeLight from "@/icons/IconThemeLight";
import IconThemeDark from "@/icons/IconThemeDark";

const ThemeSwitch = ({
  themeSwitch,
  setThemeSwitch,
}: {
  themeSwitch: string;
  setThemeSwitch: Function;
}) => {
  return (
    <>
      <div
        onClick={() => {
          const options = [...Object.keys(themeMap)];
          const index = options.findIndex((item) => item === themeSwitch);
          const nextIndex = index === options.length - 1 ? 0 : index + 1;
          setThemeSwitch(options[nextIndex]);
        }}
      >
        {themeMap[themeSwitch as keyof typeof themeMap]?.icon}
      </div>
    </>
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
