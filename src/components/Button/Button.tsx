import { useEffect, useState } from "react";
import { ButtonProps } from "./types";
import { Inner, Label, LoadingIcon, Outer } from "./_components";

const Button = (props: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 300);
    }
  }, [isClicked]);

  return (
    <Outer $loading={props.loading} disabled={props.disabled}>
      <Inner
        as={props.as || (props.href && "a")}
        disabled={props.disabled}
        className={`${isClicked ? "isClicked" : ""}`}
        ghost={props.ghost}
        href={props.href}
        $loading={props.loading}
        onClick={() => {
          if (!props.loading || !props.disabled) setIsClicked(true);
          if (props.onClick) props.onClick();
        }}
        outline={props.outline}
        target={props.target}
      >
        {props.loading && <LoadingIcon />}
        {props.children && (
          <Label disabled={props.disabled}>{props.children}</Label>
        )}
      </Inner>
    </Outer>
  );
};

export default Button;
