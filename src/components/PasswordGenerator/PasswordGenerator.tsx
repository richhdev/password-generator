import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ff, fz, lh } from "@/theme";
import Button from "@/components/Button";
import TypedText from "@/components/TypedText";
import {
  Outer,
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
  PasswordText,
} from "./_components";
import {
  defaultLength,
  minLength,
  maxLength,
  validateLength,
} from "@/utils/generate-password";
import IconOptions from "@/icons/IconOptions";

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
  const [errorFetch, setErrorFetch] = useState(false);

  // copy password to clipboard
  useEffect(() => {
    if (!password || !navigator.clipboard) return;

    navigator.clipboard.writeText(password);
    setClipboardMsg(true);
    if (clipMsgTimeout.current) clearTimeout(clipMsgTimeout.current);
    clipMsgTimeout.current = setTimeout(() => {
      setClipboardMsg(false);
    }, 2000);
  }, [password]);

  // make sure at least one option is selected
  useEffect(() => {
    setErrorOption(!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial); // prettier-ignore
  }, [includeLowercase, includeUppercase, includeNumbers, includeSpecial]);

  function handleGenerateClick() {
    setErrorFetch(false);
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

    fetch(`/api?${queryString}`)
      .then((response) => {
        if (response.status === 200) return response.json();
        if (response.status === 400) setErrorOption(true);
      })
      .then((data) => {
        setPassword(data["password"]);
      })
      .catch(() => {
        setErrorFetch(true);
      });
  }

  return (
    <Outer>
      <PasswordText
        className="truncate"
        as="div"
        id="password"
        ff={ff.mono}
        fz={passwordLength < 50 ? fz.h1Responsive : fz.h2Responsive}
        lh={lh.h1}
      >
        <TypedText
          text={password || ` Password Generator`}
          callback={() => {
            setIsGenerating(false);
          }}
        />
      </PasswordText>

      <ButtonGroup>
        <Button
          id="button-generate"
          onClick={() => {
            handleGenerateClick();
          }}
          disabled={errorOption}
          $loading={isGenerating}
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
          <IconOptions />
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
        <ClipboardMsg active={clipboardMsg}>Copied to clipboard</ClipboardMsg>
        <ErrorMsg active={errorOption}>One option must be selected</ErrorMsg>
        <ErrorMsg active={errorFetch}>Could not fetch the password</ErrorMsg>
      </MessageContainer>
    </Outer>
  );
};

export default PasswordGenerator;
