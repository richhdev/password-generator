import styled, { css } from "styled-components";
import { ff, fz, lh } from "../../settings/text";
import { color } from "../../settings/color";
import { InputProps } from "./types";
import input from "../../settings/input";

const Input = (props: InputProps) => {
  return (
    <InputOuter
      id={props.id}
      type={props.type || "text"}
      className={props.className}
      defaultValue={props.defaultValue}
      value={props.value}
      disabled={props.disabled}
      isValid={props.isValid}
      isInvalid={props.isInvalid}
      readOnly={props.readOnly}
      onChange={props.onChange}
      onBlur={props.onBlur}
      min={props.min}
      max={props.max}
      step={props.step}
      pattern={props.pattern}
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
  border-color: ${(props) => props.theme.color || "#000"};
  background-color: ${(props) => (props.theme.isDark ? "#272727" : "white")};
  color: ${(props) => (props.theme.isDark ? "white" : "black")};
  transition: border 200ms ease;

  &:focus {
    border-color: ${input.focusBorderColor || color.blue};
    transition: border 200ms ease;
  }

  ${(props) =>
    props.theme.isDark &&
    css`
      color-scheme: dark;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.isValid &&
    css`
      border-color: ${input.validBorderColor || "green"};
    `}

  ${(props) =>
    props.isInvalid &&
    css`
      border-color: ${input.invalidBorderColor || "red"};
    `}

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`;

export default Input;
