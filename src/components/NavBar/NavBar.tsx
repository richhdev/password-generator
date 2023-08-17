import styled from "styled-components";
import { clampDefault, fz } from "@/theme/text";
import { clampGen } from "@/utils/clamp-gen";
import GithubSvg from "@/images/github-icon.svg";
import ThemeSwitch from "@/components/ThemeSwitch";
import { NavBarProps } from "./types";

export const NavBar = (props: NavBarProps) => (
  <NavBarOuter>
    <NavBarInner>
      <IconGroup>
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
      </IconGroup>
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
  padding: ${fz.smallResponsive};
  backdrop-filter: blur(1px);
  color: ${(props) => (props.theme.id === "dark" ? "white" : "black")};
`;

const NavBarInner = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: flex-end;
`;

const IconGroup = styled.div`
  margin-left: auto;
  display: flex;
  place-content: end;
  gap: ${clampGen({
    minFontSize: "2",
    maxFontSize: "8",
    ...clampDefault,
  })};
`;

const size = clampGen({
  minFontSize: "37.5",
  maxFontSize: "52",
  ...clampDefault,
});

const IconLink = styled.a`
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
