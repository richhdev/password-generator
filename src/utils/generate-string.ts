import getRandomNumberBetween from "./random-number";

export default function generateString(
  length: number,
  allowedChars: string
): string {
  let newPass = "";
  for (let i = 0; i < length; i++) {
    const randomNum = getRandomNumberBetween(1, allowedChars.length - 1);
    newPass += allowedChars[randomNum];
  }
  return newPass;
}
