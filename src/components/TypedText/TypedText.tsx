import { useState, useEffect, useRef } from "react";

const TypedText = ({
  text,
  callback,
}: {
  text: string;
  callback?: Function;
}) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    let currentText: string;
    let interval: NodeJS.Timeout | null;

    function typeWriter(string: string) {
      if (i <= string.length) {
        currentText = text.substring(0, i++);
        setTypedText(currentText);
        interval = setTimeout(() => {
          typeWriter(string);
        }, randomInteger(1, 75));
      } else {
        if (callback) callback();
      }
    }

    typeWriter(text);

    return () => {
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <>{typedText}</>;
};

export default TypedText;

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
