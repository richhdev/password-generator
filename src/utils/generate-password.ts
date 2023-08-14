import getRandomNumberBetween from "./random-number";

export default function generatePassword(options: {
  length?: number;
  lowercase?: boolean;
  uppercase?: boolean;
  numbers?: boolean;
  special?: boolean;
}): string | false {
  const length = validateLength(options.length);
  const { lowercase, uppercase, numbers, special } = validateOptions(options);
  const allowedChars = `${lowercase ? characters.lowercase : ""}${uppercase ? characters.uppercase : ""}${numbers ? characters.numbers : ""}${special ? characters.special: ""}`; // prettier-ignore

  // error: `allowedChars` was empty because no options were set to true
  if (allowedChars.length === 0) return false;

  // success
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomNum = getRandomNumberBetween(1, allowedChars.length - 1);
    password += allowedChars[randomNum];
  }
  return password;
}

// character sets
const characters = {
  lowercase: "qwertyuiopasdfghjklzxcvbnm",
  uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
  numbers: "1234567890",
  special: "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/",
};

// length defaults
export const defaultLength = 15;
export const minLength = 8;
export const maxLength = 99;

// validate length
export function validateLength(val: any) {
  let newVal = validateNumber(val);
  if (typeof newVal === "undefined") newVal = defaultLength;
  if (isNaN(newVal)) newVal = defaultLength;
  if (newVal > maxLength) newVal = maxLength;
  if (newVal < minLength) newVal = minLength;
  return newVal;
}

// validate options
export function validateOptions(val: any) {
  const options = {
    length: validateNumber(val.length),
    lowercase: validateBoolean(val.lowercase),
    uppercase: validateBoolean(val.uppercase),
    numbers: validateBoolean(val.numbers),
    special: validateBoolean(val.special),
  };
  return options;
}

function validateNumber(val: any) {
  if (typeof val === "undefined") return defaultLength;
  if (typeof val === "string" && !isNaN(parseInt(val))) return parseInt(val);
  if (typeof val === "number") return val;
}

function validateBoolean(val: any) {
  if (typeof val === "undefined") return true;
  if (val === true || val === "true") return true;
  if (val === false || val === "false") return false;
}
