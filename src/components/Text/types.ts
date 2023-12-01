export type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  align?: "left" | "center" | "right" | "justify";
  className?: string;
  ff?: string;
  fz?: string;
  lh?: string | number;
  fw?: string | number;
  color?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | string;
};
