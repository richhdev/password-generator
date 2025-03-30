export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a" | "input";
  ghost?: boolean;
  href?: string;
  $loading?: boolean;
  outline?: boolean;
  target?: "_self" | "_blank" | "_parent" | "_top";
  children: any;
}

export type ButtonOuterProps = {
  disabled?: boolean;
  loading?: boolean;
};

export type ButtonLabelProps = {
  disabled?: boolean;
};
