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
// import OptionsIcon from "@/images/options-icon.svg";
import IconOptions from "@/icons/IconOptions";
import { copyToClipboard } from "@/utils/copy-to-clipboard";

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

    async function handleCopy() {
      const copySuccess = await copyToClipboard(password);

      if (copySuccess) {
        alert("Text copied");
        setClipboardMsg(true);
        if (clipMsgTimeout.current) clearTimeout(clipMsgTimeout.current);
        clipMsgTimeout.current = setTimeout(() => {
          setClipboardMsg(false);
        }, 1500);
      } else {
        alert("Failed to copy text.");
      }
    }

    handleCopy();
  }, [password]);

  useEffect(() => {
    // make sure at least one option is selected
    setErrorOption(!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial); // prettier-ignore
  }, [includeLowercase, includeUppercase, includeNumbers, includeSpecial]);

  return (
    <Outer>
      <PasswordText
        as="div"
        id="password"
        ff={ff.mono}
        fz={fz.h1Responsive}
        lh={lh.h1}
      >
        <TypedText
          text={password || `<PasswordGenerator />`}
          callback={() => {
            setIsGenerating(false);
          }}
        />
      </PasswordText>

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

            fetch(`/api?${queryString}`)
              .then((response) => {
                if (response.status === 200) return response.json();
                if (response.status === 400) setErrorOption(true);
              })
              .then((data) => {
                setPassword(data["password"]);
              });
            // .catch((error) => {});
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
          {/* <OptionsIcon /> */}
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
        <ClipboardMsg active={clipboardMsg && !errorOption} color="white">
          Copied to clipboard
        </ClipboardMsg>
        <ErrorMsg active={errorOption} color="white">
          One option must be selected
        </ErrorMsg>
      </MessageContainer>
    </Outer>
  );
};

export default PasswordGenerator;
