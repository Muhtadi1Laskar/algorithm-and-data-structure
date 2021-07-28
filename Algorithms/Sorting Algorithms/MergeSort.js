const merge = (left, right) => {
  let array = [];

  while (left.length && right.length) {
    left[0] < right[0] ? array.push(left.shift()) : array.push(right.shift());
  }
  return [...array, ...left, ...right];
};

const mergeSort = (array) => {
  const half = Math.floor(array.length / 2);

  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
};
