export const replaceAll = (s, abs) =>
  abs.reduce((acc, [a, b]) => acc.replace(a, b), s)