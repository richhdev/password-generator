import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ff, fz } from "@/settings/text";
import Button from "@/components/Button";
import {
  Content,
  ContentOuter,
  HeadingText,
  LengthInput,
  OptionContainer,
  OptionsGroup,
  OptionLabel,
  Outer,
  PasswordInput,
  PasswordInputLabel,
  Option,
  MessageContainer,
  ErrorMsg,
  ClipboardMsg,
} from "./_components";
import { generateString } from "./_utils";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const [clipboardMsg, setClipboardMsg] = useState(false);
  const clipMsgTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lowercase = "qwertyuiopasdfghjklzxcvbnm";
  const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const numbers = "1234567890";
  const special = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
  const allChars = `${lowercase}${uppercase}${numbers}${special}`;
  const [allowedChars, setAllowedChars] = useState(allChars);

  const defaultLength = 15;
  const [passwordLength, setPasswordLength] = useState(defaultLength);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [errorOption, setErrorOption] = useState(false);

  useEffect(() => {
    if (!password) return;

    navigator.clipboard.writeText(password);

    setClipboardMsg(true);

    if (clipMsgTimeout.current) clearTimeout(clipMsgTimeout.current);
    clipMsgTimeout.current = setTimeout(() => {
      setClipboardMsg(false);
    }, 2000);
  }, [password]);

  useEffect(() => {
    setErrorOption(!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial); // prettier-ignore
    setAllowedChars(`${includeLowercase ? lowercase : ''}${includeUppercase ? uppercase : ''}${includeNumbers ? numbers : ''}${includeSpecial ? special : ''}`); // prettier-ignore
  }, [includeLowercase, includeUppercase, includeNumbers, includeSpecial]);

  function validateLengthInput(val: number) {
    if (isNaN(val)) val = defaultLength;
    if (val > 99) val = 99;
    if (val < 1) val = 1;
    return val;
  }

  return (
    <Outer>
      <HeadingText as="h1" ff={ff.mono} fz={fz.h4Responsive}>
        {`<PasswordGenerator />`}
      </HeadingText>

      <ContentOuter>
        <Content>
          <PasswordInput
            id="passwordInput"
            value={errorOption ? "" : password}
            readOnly
          />
          <PasswordInputLabel htmlFor="passwordInput">
            Password Input
          </PasswordInputLabel>

          <Button
            onClick={() => {
              if (errorOption) return;
              setPassword(generateString(passwordLength, allowedChars));
            }}
            disabled={errorOption}
          >
            Generate
          </Button>

          <OptionsGroup>
            <OptionContainer>
              <OptionLabel htmlFor="length">Length</OptionLabel>
              <LengthInput
                id="length"
                type="number"
                value={passwordLength}
                pattern="\d+"
                min={1}
                max={99}
                step={1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const val = validateLengthInput(parseInt(e.target.value));
                  setPasswordLength(val);
                }}
              />
            </OptionContainer>

            <Option
              id="lowercase"
              label="abc"
              checked={includeLowercase}
              onChange={() => {
                setIncludeLowercase(!includeLowercase);
              }}
            />

            <Option
              id="uppercase"
              label="ABC"
              checked={includeUppercase}
              onChange={() => {
                setIncludeUppercase(!includeUppercase);
              }}
            />

            <Option
              id="numbers"
              label="123"
              checked={includeNumbers}
              onChange={() => {
                setIncludeNumbers(!includeNumbers);
              }}
            />

            <Option
              id="special"
              label="!@#$"
              checked={includeSpecial}
              onChange={() => {
                setIncludeSpecial(!includeSpecial);
              }}
            />
          </OptionsGroup>
        </Content>

        <MessageContainer>
          <ClipboardMsg active={clipboardMsg && !errorOption} color="white">
            Copied to clipboard
          </ClipboardMsg>
        </MessageContainer>

        <MessageContainer>
          <ErrorMsg active={errorOption} color="white">
            One option must be selected
          </ErrorMsg>
        </MessageContainer>
      </ContentOuter>
    </Outer>
  );
};

export default PasswordGenerator;
