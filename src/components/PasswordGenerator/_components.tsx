import { ChangeEventHandler } from "react";
import styled, { css } from "styled-components";
import { fz } from "@/theme/text";
import Text, { Small } from "@/components/Text";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";

export const Outer = styled.div`
  display: grid;
  place-items: center;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  padding: 8px;
`;

export const PasswordContainer = styled.span`
  user-select: all;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${fz.pResponsive};
  justify-content: center;
  align-items: center;
  padding: ${fz.pResponsive};
`;

export const OptionsContainer = styled.div.attrs(() => {})<{ show: boolean }>`
  position: relative;
  z-index: 2;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 460px;
  text-align: center;

  overflow: hidden;

  height: 0;

  opacity: 0;
  transition: all 300ms ease;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.show &&
    css`
      margin-bottom: ${fz.pResponsive};
      opacity: 1;

      & > div {
        transform: scale(1);
        filter: blur(0);
      }
    `}
`;

export const OptionsGroup = styled.div`
  padding: calc(${fz.h3Responsive});
  transform: scale(0);
  transition: all 300ms ease;

  background-color: ${(props) => props.theme.backgroundColor || "#fff"};
  box-shadow: 0 0 64px 0px rgb(0 0 0 / 25%);
  filter: blur(6px);
  border-radius: 10px;

  display: flex;
  gap: ${fz.h4Responsive};
  flex-wrap: wrap;
  justify-content: center;
`;

export const OptionContainer = styled.div`
  display: grid;
  text-align: center;
  gap: 8px;

  input[type="checkbox"] {
    margin: 0 auto;
  }
`;

export const LengthInput = styled(Input)`
  width: calc(${fz.pResponsive} * 4);
  padding: calc(${fz.smallResponsive} / 2) ${fz.smallResponsive};
  padding-right: calc(${fz.smallResponsive} / 2);
  font-size: ${fz.pResponsive};
  line-height: 1.2;
  text-align: center;
`;

export function OptionCheckbox(props: {
  id: string;
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <OptionContainer>
      <OptionLabel htmlFor={props.id}>{props.label}</OptionLabel>
      <Checkbox
        id={props.id}
        label={props.label}
        name={props.label}
        checked={props.checked}
        onChange={props.onChange}
      />
    </OptionContainer>
  );
}

export function OptionLabel(props: {
  htmlFor: string;
  children: React.ReactNode | string;
}) {
  return (
    <label htmlFor={props.htmlFor}>
      <Text>{props.children}</Text>
    </label>
  );
}

export const MessageContainer = styled.div`
  position: relative;
  top: calc(${fz.pResponsive} * -1); // "* -1" casts to negative value
  z-index: 1;
  width: 100%;
  text-align: center;
  pointer-events: none;
`;

const Msg = styled(Small)<{ active: boolean }>`
  display: inline-block;
  position: absolute;
  top: 0;
  margin: 0 auto;
  padding: calc(${fz.small} / 2) ${fz.pResponsive};
  background-color: #227551;
  box-shadow: 0 0 24px 0px rgb(0 0 0 / 25%);
  border-radius: 16px;
  white-space: nowrap;
  transform: translateX(-50%) translateY(0);
  opacity: 0;

  transition: all 200ms ease-in;

  ${(props) =>
    props.active &&
    css`
      transform: translateX(-50%) translateY(${fz.pResponsive});
      opacity: 1;
      transition: all 300ms ease-out;
    `}
`;

export const ClipboardMsg = styled(Msg)`
  background-color: #227551;
`;

export const ErrorMsg = styled(Msg)`
  background-color: #c8193c;
`;
