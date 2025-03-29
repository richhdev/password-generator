export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
  isValid?: boolean;
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
}
