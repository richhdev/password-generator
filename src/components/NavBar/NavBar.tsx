import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { clampDefault } from "@/theme/text";
import { clampGen } from "@/utils/clamp-gen";
import Button from "@/components/Button";
import GithubSvg from "@/images/github-icon.svg";
import ThemeSwitch from "@/components/ThemeSwitch";
import { NavBarProps } from "./types";

export const NavBar = (props: NavBarProps) => {
  const { pathname } = useRouter();

  return (
    <NavBarOuter>
      <NavBarGroup>
        <Link href={pathname == "/api-docs" ? "/" : "/api-docs"}>
          <Button ghost>
            {pathname == "/api-docs" ? "Password Generator" : "API Docs"}
          </Button>
        </Link>

        <Link
          href="https://github.com/richhdev/richh-ui"
          target="_blank"
          aria-label="github"
        >
          <IconButton ghost>
            <GithubSvg role="img" alt="github" />
          </IconButton>
        </Link>

        <IconLink>
          <ThemeSwitch
            themeSwitch={props.themeSwitch}
            setThemeSwitch={props.setThemeSwitch}
          />
        </IconLink>
      </NavBarGroup>
    </NavBarOuter>
  );
};

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
  backdrop-filter: blur(5px);
  color: ${(props) => (props.theme.id === "dark" ? "white" : "black")};
  border-bottom: 1px solid;
  border-color: ${(props) =>
    props.theme.id === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.2)"};
`;

export const NavBarGroup = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const size = clampGen({
  minFontSize: "37.5",
  maxFontSize: "52",
  ...clampDefault,
});

const IconButton = styled(Button)`
  width: ${size};
  height: ${size};
  padding: 8px;

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
