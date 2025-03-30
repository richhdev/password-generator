import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { size, clampDefault } from "@/theme";
import { clampGen } from "@/utils/clamp-gen";
import Button from "@/components/Button";
import ThemeSwitch from "@/components/ThemeSwitch";
import { NavBarProps } from "./types";
import IconGithub from "@/icons/iconGithub";

function NavBar(props: NavBarProps) {
  const pathname = usePathname();

  return (
    <NavBarOuter className={props.className}>
      <NavBarGroup>
        <Link href={pathname == "/api-docs" ? "/" : "/api-docs"}>
          <Button ghost>
            {pathname == "/api-docs" ? "Password Generator" : "API Docs"}
          </Button>
        </Link>
        <Link
          href="https://github.com/richhdev/password-generator"
          target="_blank"
        >
          <IconButton ghost aria-label="github">
            <IconGithub />
          </IconButton>
        </Link>
        <ThemeSwitch
          themeSwitch={props.themeSwitch}
          setThemeSwitch={props.setThemeSwitch}
        />
      </NavBarGroup>
    </NavBarOuter>
  );
}

export default NavBar;

const NavBarOuter = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  padding: ${size.xs} ${size.lg};
  backdrop-filter: blur(5px);
  color: ${(props) => (props.theme.id === "dark" ? "white" : "black")};
  border-bottom: 1px solid;
  border-color: ${(props) =>
    props.theme.id === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.2)"};
`;

const NavBarGroup = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const iconSize = clampGen({
  minFontSize: "37.5",
  maxFontSize: "52",
  ...clampDefault,
});

export const IconButton = styled(Button)`
  width: ${iconSize};
  height: ${iconSize};
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

export const IconLink = styled("a")`
  width: ${iconSize};
  height: ${iconSize};
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
