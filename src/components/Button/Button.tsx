import { MouseEvent, useEffect, useState } from "react";
import { type ButtonProps } from "./types";
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
    <Outer loading={props.loading} disabled={props.disabled}>
      <Inner
        as={props.as || (props.href && "a")}
        className={`${isClicked ? "isClicked" : ""}`}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          if (!props.loading || !props.disabled) setIsClicked(true);
          if (props.onClick) props.onClick(event);
        }}
        {...props}
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
