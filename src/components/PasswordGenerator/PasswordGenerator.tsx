import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ff, fz } from "@/theme/text";
import Button from "@/components/Button";
import Text from "@/components/Text";
import TypedText from "@/components/TypedText";
import {
  // HeadingText,
  LengthInput,
  OptionContainer,
  OptionsGroup,
  OptionLabel,
  Outer,
  Option,
  MessageContainer,
  ErrorMsg,
  ClipboardMsg,
  ButtonGroup,
  Inner,
  OptionsContainer,
} from "./_components";
import {
  defaultLength,
  minLength,
  maxLength,
  validateLength,
} from "@/utils/generate-password";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const [clipboardMsg, setClipboardMsg] = useState(false);
  const clipMsgTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const optionGroupRef = useRef<HTMLDivElement>(null);

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
      {/* <HeadingText as="h1" ff={ff.mono} fz={fz.h4Responsive}>
        {`<PasswordGenerator />`}
      </HeadingText> */}

      <Inner>
        <Text ff={ff.mono} fz={fz.h1} style={{ textAlign: "center" }}>
          &nbsp;
          <TypedText
            text={password || `<PasswordGenerator />`}
            callback={() => {
              setIsGenerating(false);
            }}
          />
          &nbsp;
        </Text>

        <ButtonGroup>
          <Button
            onClick={() => {
              if (errorOption) return;

              setIsGenerating(true);

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
            loading={isGenerating}
          >
            Generate
          </Button>

          <Button
            outline
            onClick={() => {
              setShowOptions(!showOptions);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-theme"
              style={{ display: "block" }}
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </Button>
        </ButtonGroup>

        <OptionsContainer
          show={showOptions}
          style={
            showOptions
              ? {
                  height: optionGroupRef.current?.offsetHeight + "px",
                }
              : { height: "0px" }
          }
        >
          <OptionsGroup ref={optionGroupRef}>
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
        </OptionsContainer>

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
      </Inner>
    </Outer>
  );
};

export default PasswordGenerator;
