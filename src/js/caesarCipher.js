export default function caesarCipher(string, factor) {
  const shifted = string
    .split('')
    .map((char) => shift(char, factor))
    .join('');
  return shifted;
}

function shift(letter, factor) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const letters = [
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

  let index = alphabet[letter] + factor;
  if (index > 26) index = index - 26;

  return letters[index - 1];
}

// Don’t forget to test case preservation.
// The shifted lettercase should follow the original lettercase.
// For example, caesarCipher('HeLLo', 3) should return 'KhOOr'.
// Don’t forget to test punctuation.
// Punctuation, spaces, and other non-alphabetical characters should remain unchanged.
// For example, caesarCipher('Hello, World!', 3)
// should return 'Khoor, Zruog!'.
