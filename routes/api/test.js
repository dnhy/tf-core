function quickSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  if (arr.some((item) => typeof item !== 'number')) {
    throw new Error('All elements in the array must be numbers');
  }

  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort;
