// We'll cache the result of isMac() and isTouchDevice(), since they shouldn't
// change during a session. That way repeated calls don't require any logic and
// are rapid.
let isMacResult: boolean | undefined;
let isTouchDeviceResult: boolean | undefined;

/**
 * Return true if the user is using a Mac (as opposed to Windows, etc.) device.
 */
export function isMac(): boolean {
  // if (typeof window === "undefined") return false;
  if (isMacResult === undefined) {
    isMacResult = navigator?.platform.includes("Mac");
  }
  return !!isMacResult;
}

export function getShortcutKey(key: string): string {
  if (`${key}`.toLowerCase() === "mod") {
    return isMac() ? "⌘" : "Ctrl";
  } else if (`${key}`.toLowerCase() === "alt") {
    return isMac() ? "⌥" : "Alt";
  } else if (`${key}`.toLowerCase() === "shift") {
    return isMac() ? "⇧" : "Shift";
  } else {
    return key;
  }
}
export function getShortcutKeys(keys: string[]): string {
  return keys.map(getShortcutKey).join(" ");
}

/** Return true if the user is using a touch-based device. */
export function isTouchDevice(): boolean {
  if (isTouchDeviceResult === undefined) {
    isTouchDeviceResult =
      (window && "ontouchstart" in window) ||
      navigator.maxTouchPoints > 0 ||
      // @ts-expect-error: msMaxTouchPoints is IE-specific, so needs to be ignored
      navigator.msMaxTouchPoints > 0;
  }

  return isTouchDeviceResult;
}
