import styled, { css } from "styled-components";
import { ff, fz, lh } from "@/theme/text";
import { color } from "@/theme/color";
import { InputProps } from "./types";

const Input = (props: InputProps) => {
  return (
    <InputOuter
      type={props.type || "text"}
      className={props.className}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      isValid={props.isValid}
      isInvalid={props.isInvalid}
      onChange={props.onChange}
      placeholder={props.placeholder}
      style={props.style}
    />
  );
};

const InputOuter = styled.input.attrs(() => {})<InputProps>`
  display: block;
  width: 100%;
  outline: none;
  font-family: ${ff.p};
  font-size: ${fz.pResponsive};
  line-height: ${lh.p};
  padding: calc(${fz.pResponsive} / 2) ${fz.pResponsive};
  border: 2px solid;
  border-radius: 6px;
  border-color: ${(props) => props.theme.color ?? "black"};
  background-color: ${(props) => props.theme.input.backgroundColor ?? "white"};
  color: ${(props) => props.theme.color ?? "black"};
  transition: border 200ms ease;

  &:focus {
    border-color: ${(props) => props.theme.focusColor ?? color.blue};
    transition: border 200ms ease;
  }

  color-scheme: ${(props) => props.theme.id ?? "light"};

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.isValid &&
    css`
      border-color: ${(props) => props.theme.input.validBorderColor ?? "green"};
    `}

  ${(props) =>
    props.isInvalid &&
    css`
      border-color: ${(props) => props.theme.input.invalidBorderColor ?? "red"};
    `}

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`;

export default Input;
