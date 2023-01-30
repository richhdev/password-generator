import styled, { css } from "styled-components";
import { fz } from "@/settings/text";

const padding = fz.pResponsive;

export const Outer = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  padding: ${padding};
  display: grid;
  place-items: end;
`;

export const Main = styled.div`
  flex-grow: 1;
  display: grid;
  place-items: center;
`;

export const Footer = styled.div`
  padding: ${padding};
  margin: 0 auto;
  display: grid;
  place-items: center;
`;

const iconLinkTransition = "filter 300ms ease, transform 300ms ease";

export const IconLink = styled.a`
  svg {
    display: block;
    position: relative;
    z-index: 2;
    width: 40px;
    height: 40px;
    margin: 0 8px;

    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.5));
    transform: scale(1);
    transition: ${iconLinkTransition};
  }

  &:hover svg {
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.25));
    transform: scale(1.1);
    transition: ${iconLinkTransition};
  }

  &:active svg {
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5));
    transform: scale(1);
    transition: ${iconLinkTransition};
  }

  svg path {
    fill: ${(props) => (props.theme.isDark ? "white" : "black")};
  }

  ${(props) =>
    props.theme.isDark &&
    css`
      &:hover svg {
        filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.25));
      }
      &:active svg {
        filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5));
      }
    `}

  ${(props) =>
    !props.theme.isDark &&
    css`
      svg,
      &:hover svg,
      &:active svg {
        filter: none;
      }
    `}
`;
