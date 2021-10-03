export function nameof<T extends Object>(
  nameFunction: ((obj: T) => any) | { new (...params: any[]): T }
): string {

  const fnStr = nameFunction.toString();

  if (fnStr.startsWith('class ') && !fnStr.startsWith('class =>')) {
    return fnStr.substring('class '.length, fnStr.indexOf(' {'));
  }

  if (fnStr.includes('=>')) {
    return fnStr.substring(fnStr.indexOf('.') + 1);
  }

  throw new Error('Invalid function.');
}
