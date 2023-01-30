export type InputProps = {
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
  id?: string;
  name?: string;
  defaultValue?: string | number;
  value?: string | number;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  isValid?: boolean;
  isInvalid?: boolean;
  min?: number;
  max?: number;
  minlength?: number;
  maxlength?: number;
  step?: number;
  placeholder?: string | number;
  pattern?: string | number;
  initalFocus?: boolean;
  readOnly?: boolean;
  onChange?: Function;
  onBlur?: Function;
};
