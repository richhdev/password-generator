/**
 * Copies the given text to the user's clipboard.
 *
 * This function attempts to use the modern `navigator.clipboard.writeText()` API. If that fails
 * (e.g., due to browser incompatibility or permissions issues), it falls back to an older
 * method using a temporary `<textarea>` element and `document.execCommand('copy')`.
 *
 * @async
 * @function copyToClipboard
 * @param {string} text - The text to copy to the clipboard.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the text was successfully
 * copied, or `false` if the copy operation failed.
 *
 * @example
 * async function handleCopy() {
 * const textToCopy = 'This text will be copied!';
 * const success = await copyToClipboard(textToCopy);
 *
 * if (success) {
 * console.log('Text copied!');
 * } else {
 * console.error('Failed to copy text.');
 * }
 * }
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  // Clipboard API not available. Fallback to older method
  if (!navigator.clipboard) return fallbackCopyToClipboard(text);

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy text: ", err);
    return fallbackCopyToClipboard(text); // Try fallback if clipboard API fails
  }
}

/**
 * Fallback function to copy text to the clipboard using a temporary textarea.
 *
 * This function is used when the `navigator.clipboard.writeText()` API is not available or fails.
 *
 * @private
 * @function fallbackCopyToClipboard
 * @param {string} text - The text to copy.
 * @returns {boolean} - `true` if the text was successfully copied, `false` otherwise.
 */
function fallbackCopyToClipboard(text: string): boolean {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error("Fallback: Unable to copy", err);
    document.body.removeChild(textArea);
    return false;
  }
}
