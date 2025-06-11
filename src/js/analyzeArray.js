export default function analyzeArray(array) {
  let sum = 0;
  let min = array[0];
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (min > array[i]) min = array[i];
    if (max < array[i]) max = array[i];
  }
  return {
    average: sum / array.length,
    min: min,
    max: max,
    length: array.length,
  };
}
