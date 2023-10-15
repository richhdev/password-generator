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
    <Outer
      loading={props.loading === true ? true : undefined}
      disabled={props.disabled}
    >
      <Inner
        {...props}
        as={props.as || (props.href && "a")}
        disabled={props.disabled}
        className={`${props.className ?? " "} ${isClicked ? "isClicked" : ""}`}
        ghost={props.ghost}
        href={props.href}
        id={props.id}
        loading={props.loading === true ? true : undefined}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          if (!props.loading || !props.disabled) setIsClicked(true);
          if (props.onClick) props.onClick(event);
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
