export function generateString(length: number, allowedChars: string): string {
  let newPass = "";
  for (let i = 0; i < length; i++) {
    const randomNum = getRandomNumberBetween(1, allowedChars.length - 1);
    newPass += allowedChars[randomNum];
  }
  return newPass;
}

function getRandomNumberBetween(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
