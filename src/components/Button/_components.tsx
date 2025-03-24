import styled, { css, keyframes } from "styled-components";
import { ff, fz, clampDefault } from "@/theme/text";
import { clampGen } from "@/utils/clamp-gen";
import LoadingSvg from "./images/spinner.svg";
import {
  type ButtonProps,
  type ButtonOuterProps,
  type ButtonLabelProps,
} from "./types";

const animationClicked = (color: string) => keyframes`
  0% { box-shadow: 0 0 0px 4px ${color} ;}
  100% { box-shadow: 0 0 0px 10px transparent;}
`;

export const Outer = styled.div.attrs(() => {})<ButtonOuterProps>`
  display: inline-block;
  ${(props) => props.$loading && "cursor: wait;"}
  ${(props) => props.disabled && "cursor: not-allowed"}
`;

const defaultTransition =
  "color 200ms ease-out, background-color 200ms ease-out, border-color 200ms ease-out";

export const Inner = styled.button.attrs(() => {})<ButtonProps>`
  background: none;
  border: none;
  appearance: none;

  position: relative;
  height: ${clampGen({
    minFontSize: "37.5",
    maxFontSize: "52",
    ...clampDefault,
  })};
  margin-bottom: 0;
  padding: calc(${fz.pResponsive} / 2) ${fz.pResponsive};
  font-family: ${ff.p};
  font-size: ${fz.pResponsive};
  color: ${(props) => props.theme.backgroundColor ?? "white"};
  background-color: ${(props) => props.theme.color ?? "black"};
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  transition: ${defaultTransition};

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) =>
      props.theme.button.activeBackgroundColor ?? "rgba(0,0,0,0.7)"};
    transition: ${defaultTransition};
  }

  &:active {
    background-color: ${(props) =>
      props.theme.button.activeBackgroundColor ?? "rgba(0,0,0,0.7)"};
    box-shadow: 0 0 0px 2px
      ${(props) => props.theme.button.activeBoxShadowColor ?? "rgba(0,0,0,0.5)"};
    transition: ${defaultTransition};
  }

  &.isClicked {
    animation: ${(props) =>
        animationClicked(
          props.theme.button.animationClickedColor ?? `rgba(0, 0, 0, 0.3)`
        )}
      300ms linear;
  }

  ${(props) =>
    props.outline &&
    css`
      padding: calc((${fz.pResponsive} / 2) - 2px) calc(${fz.pResponsive} - 2px);
      background: transparent;
      border: 2px solid;
      border-color: ${(props) => props.theme.color ?? "black"};
      color: ${(props) => props.theme.color ?? "black"};

      &:hover {
        background-color: ${(props) =>
          props.theme.button.outlineBackgroundColor ?? "rgba(0,0,0,0.1)"};
      }

      &:active {
        border-color: ${(props) => props.theme.color ?? "black"};
      }
    `}

  ${(props) =>
    props.$loading &&
    css`
      display: flex;
      align-items: center;
      pointer-events: none;
    `}
  
  ${(props) =>
    props.outline &&
    props.$loading &&
    css`
      && {
        svg {
          stroke: ${(props) => props.theme.color ?? "black"};
          fill: ${(props) => props.theme.color ?? "black"};
        }
      }
    `}
  

  ${(props) =>
    props.ghost &&
    css`
      padding: calc((${fz.pResponsive} / 2) - 2px) calc(${fz.pResponsive} - 2px);
      background-color: transparent;
      color: ${(props) => props.theme.color ?? "black"};

      &:hover {
        background-color: ${(props) =>
          props.theme.button.ghostBackgroundColor ?? "rgba(0,0,0,0.1)"};
      }

      &:active {
        border-color: ${(props) => props.theme.color ?? "black"};
      }
    `};

  ${(props) =>
    props.ghost &&
    props.$loading &&
    css`
      && {
        svg {
          stroke: ${(props) => props.theme.color ?? "black"};
          fill: ${(props) => props.theme.color ?? "black"};
        }
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}

  ${(props) => {
    if (props.href || props.as === "a")
      return css`
        text-decoration: none;
      `;
  }}
`;

export const LoadingIcon = () => (
  <LoadingIconOuter>
    <LoadingSvg />
  </LoadingIconOuter>
);

const LoadingIconOuter = styled.span`
  width: ${fz.pResponsive};
  height: ${fz.pResponsive};

  svg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    stroke: ${(props) => props.theme.backgroundColor ?? "white"};
    fill: ${(props) => props.theme.backgroundColor ?? "white"};
  }
`;

export const Label = styled("div")<ButtonLabelProps>`
  transition: all 150ms ease-out;

  /* disabled */
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;
