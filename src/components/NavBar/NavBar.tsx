import styled from "styled-components";
import Link from "next/link";
import { clampDefault } from "@/theme/text";
import { clampGen } from "@/utils/clamp-gen";
import GithubSvg from "@/images/github-icon.svg";
// import Logo4 from "@/images/logo4.svg";
import ThemeSwitch from "@/components/ThemeSwitch";
import { NavBarProps } from "./types";

export const NavBar = (props: NavBarProps) => (
  <NavBarOuter>
    <NavBarInner>
      <NavBarGroup1></NavBarGroup1>

      <NavBarGroup2></NavBarGroup2>

      <NavBarGroup3>
        <IconLink
          href="https://github.com/richhdev/password-generator"
          target="_blank"
          aria-label="github"
        >
          <GithubSvg role="img" alt="github" />
        </IconLink>
        <IconLink>
          <ThemeSwitch
            themeSwitch={props.themeSwitch}
            setThemeSwitch={props.setThemeSwitch}
          />
        </IconLink>
      </NavBarGroup3>
    </NavBarInner>
  </NavBarOuter>
);

export const navBarHeight = clampGen({
  minFontSize: "60",
  maxFontSize: "80",
  ...clampDefault,
});

const NavBarOuter = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  height: ${navBarHeight};
  padding: 12px 24px;
  /* background-color: ${(props) =>
    props.theme.id === "dark" ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.9)"}; */
  backdrop-filter: blur(1px);
  color: ${(props) => (props.theme.id === "dark" ? "white" : "black")};
  /* border-bottom: 1px solid;
  border-color: ${(props) =>
    props.theme.id === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.2)"}; */
`;

const NavBarInner = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid: 1fr / repeat(3, 1fr);
`;

const NavBarGroup1 = styled.div`
  height: 100%;
  display: flex;
  place-items: center;
`;

const NavBarGroup2 = styled.div`
  height: 100%;

  display: grid;
  place-items: center;

  svg {
    width: ${clampGen({
      minFontSize: "120",
      maxFontSize: "150",
      ...clampDefault,
    })};
  }
`;

export const NavBarGroup3 = styled.div`
  margin-left: auto;
  display: flex;
  place-content: center;
  gap: 8px;
`;

const size = clampGen({
  minFontSize: "37.5",
  maxFontSize: "52",
  ...clampDefault,
});

export const IconLink = styled.a`
  width: ${size};
  height: ${size};
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${(props) =>
      props.theme.id === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"};
    transition: background-color 200ms ease;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
  }

  svg path {
    fill: ${(props) => (props.theme.id === "dark" ? "white" : "black")};
  }
`;
