import { ChangeEventHandler } from "react";
import styled, { css } from "styled-components";
import { fz } from "@/settings/text";
import Text from "@/components/Text";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";

export const Outer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

export const HeadingText = styled(Text)`
  text-align: center;
  margin-bottom: ${fz.h3Responsive};
`;

export const ContentOuter = styled.div`
  position: relative;
  padding: 8px;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  background-color: ${(props) => props.theme.backgroundColor || "#fff"};
  padding: calc(${fz.pResponsive}*2);
  border-radius: 10px;
  box-shadow: 0 0 64px 0px rgb(0 0 0 / 25%);
  width: 100%;
  max-width: 460px;
  text-align: center;
`;

export const PasswordInputLabel = styled.label`
  display: block;
  font-size: ${fz.pResponsive};
  color: ${(props) => props.theme.backgroundColor};
`;

export const PasswordInput = styled(Input)`
  position: relative;
  z-index: 1;
  width: 100%;
  width: 100%;
  max-width: 370px;
  text-align: center;
  font-size: ${fz.h5Responsive};
  display: flex;
  justify-content: space-between;
`;

export const OptionsGroup = styled.div`
  width: 100%;
  max-width: 370px;
  margin-top: calc(${fz.pResponsive}*2);
  display: flex;
  justify-content: space-between;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
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

export function Option(props: {
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
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  max-width: 460px;
  text-align: center;
`;

const Msg = styled(Text).attrs(() => {})<{ active: boolean }>`
  display: inline-block;
  background-color: green;
  padding: 0 ${fz.pResponsive};
  border-radius: 16px;
  transform: translateY(0);
  opacity: 0;
  transition: all 200ms ease-in;

  ${(props) =>
    props.active &&
    css`
      transform: translateY(150%);
      opacity: 1;
      transition: all 300ms ease-out;
    `}
`;

export const ClipboardMsg = styled(Msg)`
  background-color: green;
`;

export const ErrorMsg = styled(ClipboardMsg)`
  background-color: #e74545;
`;
