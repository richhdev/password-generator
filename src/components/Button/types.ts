export type ButtonProps = {
  as?: "button" | "a";
  children?: React.ReactNode | string;
  className?: string;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  id?: string;
  loading?: boolean;
  onClick?: Function;
  outline?: boolean;
  style?: React.CSSProperties;
  target?: "_self" | "_blank" | "_parent" | "_top";
};

export type ButtonOuterProps = {
  disabled?: boolean;
  loading?: boolean;
};

export type ButtonLabelProps = {
  disabled?: boolean;
};
