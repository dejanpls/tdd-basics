export default function caesarCipher(string, factor) {
  const shifted = string
    .split('')
    .map((char) => {
      return isLetter(char) ? shift(char, factor) : char;
    })
    .join('');
  return shifted;
}

function shift(letter, factor) {
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

  let index = getIndex(letters, letter, factor);

  return letter.toUpperCase() === letter
    ? letters[index].toUpperCase()
    : letters[index];
}

function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}

function getIndex(letters, letter, factor) {
  return (((letters.indexOf(letter.toLowerCase()) + factor) % 26) + 26) % 26;
}
