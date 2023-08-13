import { useState, useEffect, useRef } from "react";

const Tagline = (props: { text: string; callback?: Function }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    let currentText: string;
    let interval: NodeJS.Timeout | null;

    function typeWriter(text: string) {
      if (i <= text.length) {
        currentText = text.substring(0, i++);
        setTypedText(currentText);
        interval = setTimeout(() => {
          typeWriter(text);
        }, randomInteger(1, 100));
      } else {
        if (props.callback) props.callback();
      }
    }

    typeWriter(props.text);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [props.text]);

  return <>{typedText}</>;
};

export default Tagline;

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
