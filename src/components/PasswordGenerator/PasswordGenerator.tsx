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
import {
  defaultLength,
  minLength,
  maxLength,
  validateLength,
} from "@/utils/generate-password";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const [clipboardMsg, setClipboardMsg] = useState(false);
  const clipMsgTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [passwordLength, setPasswordLength] = useState<number>(defaultLength);
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
    // make sure at least one option is selected
    setErrorOption(!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial); // prettier-ignore
  }, [includeLowercase, includeUppercase, includeNumbers, includeSpecial]);

  return (
    <Outer>
      <HeadingText as="h1" ff={ff.mono} fz={fz.h4Responsive}>
        {`<PasswordGenerator />`}
      </HeadingText>

      <ContentOuter>
        <Content>
          <PasswordInput
            id="input-password"
            className="input-password"
            value={errorOption ? "" : password}
            readOnly
          />
          <PasswordInputLabel htmlFor="passwordInput">
            Password Input
          </PasswordInputLabel>

          <Button
            id="button-generate"
            className="button-generate"
            onClick={() => {
              if (errorOption) return;

              // cast values to string as `URLSearchParams` expects strings
              const options = {
                length: `${passwordLength}`,
                lowercase: `${includeLowercase}`,
                uppercase: `${includeUppercase}`,
                numbers: `${includeNumbers}`,
                special: `${includeSpecial}`,
              };

              const queryString = new URLSearchParams(options).toString();

              fetch(`/api/password-generator?${queryString}`)
                .then((response) => {
                  if (response.status === 200) return response.json();
                  if (response.status === 440) setErrorOption(true);
                })
                .then((data) => {
                  setPassword(data["password"]);
                })
                .catch((error) => {});
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
                defaultValue={passwordLength}
                min={minLength}
                max={maxLength}
                step={1}
                onBlur={(e: ChangeEvent<HTMLInputElement>) => {
                  const val = validateLength(e.target.value);
                  if (e.target.value !== val.toString())
                    e.target.value = val.toString();
                  setPasswordLength(Number(val));
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
