const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > min; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = min;
  }
  return arr;
};


console.log(insertionSort([5, 2, 3, 4, 1]));