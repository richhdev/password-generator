import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ff, fz } from "@/theme/text";
import Button from "@/components/Button";
import Text from "@/components/Text";
import TypedText from "@/components/TypedText";
import {
  Outer,
  Inner,
  PasswordContainer,
  ButtonGroup,
  LengthInput,
  OptionsContainer,
  OptionsGroup,
  OptionCheckbox,
  OptionContainer,
  OptionLabel,
  MessageContainer,
  ClipboardMsg,
  ErrorMsg,
} from "./_components";
import {
  defaultLength,
  minLength,
  maxLength,
  validateLength,
} from "@/utils/generate-password";
import OptionsIcon from "@/images/options-icon.svg";

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
      <Inner>
        <Text
          ff={ff.mono}
          fz={fz.h1}
          style={{ textAlign: "center", overflowWrap: "anywhere" }}
        >
          &nbsp;
          <PasswordContainer id="password">
            <TypedText
              text={password || `<PasswordGenerator />`}
              callback={() => {
                setIsGenerating(false);
              }}
            />
          </PasswordContainer>
          &nbsp;
        </Text>

        <ButtonGroup>
          <Button
            id="button-generate"
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
                  if (response.status === 400) setErrorOption(true);
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
            aria-label="Options"
            id="options"
            outline
            onClick={() => {
              setShowOptions(!showOptions);
            }}
          >
            <OptionsIcon />
            {/* <GithubSvg /> */}
          </Button>
        </ButtonGroup>

        <OptionsContainer
          show={showOptions}
          style={{
            height: showOptions
              ? optionGroupRef.current?.offsetHeight + "px"
              : "0px",
          }}
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
                  e.target.value = val.toString();
                  setPasswordLength(val);
                }}
              />
            </OptionContainer>

            <OptionCheckbox
              id="lowercase"
              label="abc"
              checked={includeLowercase}
              onChange={() => {
                setIncludeLowercase(!includeLowercase);
              }}
            />

            <OptionCheckbox
              id="uppercase"
              label="ABC"
              checked={includeUppercase}
              onChange={() => {
                setIncludeUppercase(!includeUppercase);
              }}
            />

            <OptionCheckbox
              id="numbers"
              label="123"
              checked={includeNumbers}
              onChange={() => {
                setIncludeNumbers(!includeNumbers);
              }}
            />

            <OptionCheckbox
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
          <ErrorMsg active={errorOption} color="white">
            One option must be selected
          </ErrorMsg>
        </MessageContainer>
      </Inner>
    </Outer>
  );
};

export default PasswordGenerator;
