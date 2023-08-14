import styled from "styled-components";
import { color } from "@/theme/color";
import { fz } from "@/theme/text";
import { CheckboxProps } from "./types";

const Checkbox = (props: CheckboxProps) => (
  <Input
    id={props.id}
    type="checkbox"
    name={props.name}
    label={props.label}
    checked={props.checked}
    onChange={props.onChange}
  />
);

const defaultTransition =
  "border-color 300ms ease, border-width 200ms ease, background-color 300ms ease, width 150ms ease, height 150ms ease ";

const Input = styled.input.attrs(() => {})<CheckboxProps>`
  /* reset */
  appearance: none;
  margin: 0;
  cursor: pointer;

  width: ${fz.h3Responsive};
  height: ${fz.h3Responsive};
  border: 2px solid ${(props) => props.theme.color || "#000"};
  border-radius: 4px;
  display: grid;
  place-content: center;
  transition: ${defaultTransition};

  &:before {
    content: "";
    width: 0;
    height: 0;
    min-width: 3px;
    min-height: 7px;
    border-right: solid;
    border-bottom: solid;
    border-width: 4px;
    border-color: transparent;
    transform: translateY(-15%) rotate(45deg);
    transition: ${defaultTransition};
  }

  &:checked:before {
    width: calc(${fz.h3Responsive} - 24px);
    height: calc(${fz.h3Responsive} - 16px);
    border-color: ${(props) => props.theme.color || "#000"};
    transition: ${defaultTransition};
  }

  &:focus,
  &:focus:checked:before {
    outline: none;
    border-color: ${color.blue};
    transition: ${defaultTransition};
  }
`;

export default Checkbox;
