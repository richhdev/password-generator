import { useState } from "react";
import styled from "styled-components";
import AutoSvg from "./images/auto.svg";
import LightSvg from "./images/light.svg";
import DarkSvg from "./images/dark.svg";
import { fz } from "@/theme/text";
import { ThemeSwitchProps, ThemeMapArray } from "./types";

const ThemeSwitch = (props: ThemeSwitchProps) => {
  const [themeIndex, setThemeIndex] = useState(0);

  return (
    <Outer
      onClick={() => {
        const i = themeIndex === themeMap.length - 1 ? 0 : themeIndex + 1;
        setThemeIndex(i);

        // console.log(themeMap[i].name);
        props.callback(themeMap[i].name);
      }}
    >
      {themeMap[themeIndex].icon}
    </Outer>
  );
};

export default ThemeSwitch;

const themeMap: ThemeMapArray = [
  {
    name: "auto",
    icon: <AutoSvg alt="auto" />,
  },
  {
    name: "light",
    icon: <LightSvg alt="light" />,
  },
  {
    name: "dark",
    icon: <DarkSvg alt="dark" />,
  },
];

const transition = `opacity 300ms ease`;

const Outer = styled.div`
  padding: calc(${fz.pResponsive} / 2);
  color: ${(props) => props.theme.color || "#fff"};
  background: ${(props) => props.theme.backgroundColor || "#000"};
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  transition: ${transition};

  svg {
    display: block;
    width: ${fz.pResponsive};
    height: ${fz.pResponsive};
  }
`;
