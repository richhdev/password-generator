import React from "react";

export default function IconSpinner(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      style={{
        enableBackground: "new 0 0 100 100",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M50,13.5c20.1,0,36.5,16.4,36.5,36.5S70.1,86.5,50,86.5S13.5,70.1,13.5,50S29.9,13.5,50,13.5 M50,0.5 C22.7,0.5,0.5,22.7,0.5,50S22.7,99.5,50,99.5S99.5,77.3,99.5,50S77.3,0.5,50,0.5L50,0.5z"
        style={{
          opacity: 0.5,
        }}
      />
      <path
        d="M50,6.9C73.8,6.9,93,26.5,93,50"
        style={{
          fill: "none",
          strokeWidth: 13,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
