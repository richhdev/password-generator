function generatePassword(
  options: OptionsType
): SuccessResponse | ErrorResponse {
  // normalise options
  const normalOptions = normaliseOptions(options);
  if (!normalOptions)
    return { error: "At least one option must be set to true" };

  // Create characterset for password
  const allowedChars = getAllowedChars(normalOptions);

  // generate a string to use as the password
  const password = generateString(
    normalOptions as OptionsTypeRequired,
    allowedChars
  );

  if (!password)
    return { error: "Couldnt generate a passsword with those options" };

  return { password };
}

export default generatePassword;
export { defaultLength, minLength, maxLength, validateLength };

// Types ///////////////////////////////////////////////////////////////////////

type OptionsType = {
  length?: number;
  lowercase?: boolean;
  uppercase?: boolean;
  numbers?: boolean;
  special?: boolean;
};

type OptionsTypeRequired = {
  length: number;
  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  special: boolean;
};

type SuccessResponse = {
  password: string;
};

type ErrorResponse = {
  error: string;
};

type CharactersType = typeof characters;

// Constants ///////////////////////////////////////////////////////////////////

// character sets
const characters = {
  lowercase: "qwertyuiopasdfghjklzxcvbnm",
  uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
  numbers: "1234567890",
  special: "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/",
};

// length settings
const defaultLength = 15;
const minLength = 8;
const maxLength = 99;

// Functions ////////////////////////////////////////////////////////////////////

/**
 * Normalizes the provided options for password generation.
 *
 * Options args are supplied from a front end form,
 * or a url querystring for the api.
 * This function validates each option and returns a new object with normalized values.
 *
 * @param {OptionsType} options - The input options object.
 * @returns {OptionsTypeRequired | false} - The normalized options object, or false if there was an error
 *
 */
function normaliseOptions(options: OptionsType): OptionsTypeRequired | false {
  options = {
    length: validateLength(options.length),
    lowercase: validateBoolean(options.lowercase),
    uppercase: validateBoolean(options.uppercase),
    numbers: validateBoolean(options.numbers),
    special: validateBoolean(options.special),
  };

  // check that at least one characterset option is true
  if (!Object.values(options).some((value) => value === true)) {
    // throw new Error("At least one option must be set to true");
    return false;
  }

  return options as OptionsTypeRequired;
}

/**
 * Generates character set based on provided options.
 *
 * @param {OptionsType} options - An object specifying which character sets to include.
 * @returns {string} A string containing all allowed characters.
 */
function getAllowedChars(options: OptionsType) {
  return `${options.lowercase ? characters.lowercase : ""}${options.uppercase ? characters.uppercase : ""}${options.numbers ? characters.numbers : ""}${options.special ? characters.special: ""}`; // prettier-ignore
}

/**
 * Generates a random string based on the provided options.
 *
 * @param {OptionsTypeRequired} options - The options for generating the string, including length and character sets.
 * @param {string} allowedChars - A string containing all allowed characters for the generated string.
 * @returns {string|false} - The generated string if successful, or `false` if the maximum recursion depth is exceeded.
 */
function generateString(
  options: OptionsTypeRequired,
  allowedChars: string
): string | false {
  let str = "";
  let isStrValid = false;
  let attempts = 0;
  let maxAttempts = 5; //limit the amounbt of attempts

  while (isStrValid == false || attempts > 50) {
    str = "";
    attempts++;

    for (let i = 0; i < options.length; i++) {
      const randomNum = getRandomNumberBetween(0, allowedChars.length - 1);
      str += allowedChars[randomNum];
    }

    // check that a character from each characterset is included in the string
    let isCharsIncluded = false;
    const charsArr = Object.keys(characters);
    for (let i = 0; i < charsArr.length; i++) {
      const option = options[charsArr[i] as keyof OptionsType];
      const characterSet = characters[charsArr[i] as keyof CharactersType];
      if (option && hasCharFromSet(str, characterSet)) isCharsIncluded = true;
    }
    if (isCharsIncluded == true) isStrValid = true;

    if (attempts > maxAttempts) {
      // throw new Error("Couldn't generate a password with those options");
      return false;
    }
  }

  return str;
}

/**
 * Checks if a string includes any of the characters from a character set.
 *
 * @param {string} str - The string to search within.
 * @param {string} chars - The string containing the characters to search for.
 * @returns {boolean} - Returns true if the string includes any of the specified characters, false otherwise.
 */
function hasCharFromSet(str: string, chars: string): boolean {
  // if (typeof str !== "string") return false; // Handle invalid input types
  if (typeof str !== "string" || typeof chars !== "string") return false; // Handle invalid input types
  // if (chars.length > str.length) return false; // chars cannot be longer than str

  for (let i = 0; i < chars.length; i++) {
    if (str.includes(chars[i])) {
      return true;
    }
  }

  return false;
}

/**
 * Validates a length value by making sure it is between min and max.
 * If val is below min, its is set to min.
 * if val is abpve max, it is be set to max.
 *
 * @param {any} val - The input value to validate.
 * @returns {number} - The validated number, between min and max constraints.
 */
function validateLength(val: any): number {
  let validatedNumber: number;

  if (typeof val === "string" && !isNaN(parseInt(val))) {
    validatedNumber = parseInt(val);
  } else if (typeof val === "number") {
    validatedNumber = val;
  } else {
    validatedNumber = defaultLength;
  }

  // make sure we are between minLength and maxLength
  validatedNumber = Math.min(Math.max(validatedNumber, minLength), maxLength);

  return validatedNumber;
}

/**
 * Converts a value to a boolean.
 * Treats "true" as true, "false" as false, and any other value as true.
 *
 * @param {boolean | "true" | "false" | undefined} val - The value to convert.
 * @returns {boolean} - Returns true if the value is true or "true", false if the value is false or "false", and true otherwise.
 */
function validateBoolean(val: boolean | "true" | "false" | undefined): boolean {
  const defaultValue = true;
  if (val === true || val === "true") return true;
  if (val === false || val === "false") return false;
  return defaultValue;
}

/**
 * Generates a random number between min and max.
 *
 * @param {number} min - Lowest possible value.
 * @param {number} max - Highest possible value.
 * @returns {number} A random integer between `min` and `max`.
 */
function getRandomNumberBetween(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
