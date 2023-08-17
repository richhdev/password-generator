export type InputProps = {
  className?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  id?: string;
  initalFocus?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  max?: number;
  maxlength?: number;
  min?: number;
  minlength?: number;
  name?: string;
  onBlur?: Function;
  onChange?: Function;
  pattern?: string | number;
  placeholder?: string | number;
  readOnly?: boolean;
  required?: boolean;
  step?: number;
  style?: React.CSSProperties;
  type?:
    | "text"
    | "number"
    | "password"
    | "tel"
    | "email"
    | "datetime-local"
    | "date"
    | "time"
    | "search"
    | "url"
    | "tel";
  value?: string | number;
};
