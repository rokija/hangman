export const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export const categories = [
  { key: 1, value: 'cities' },
  { key: 2, value: 'animals' },
];

export const isEqual = (a, b) => a === b;

export const generatePlaceHolder = word => {
  const arr = [];
  word.map((i, index) => arr.splice(index, 1, '_'));
  return arr;
};
