const insertionSort = (array) => {
  let start = 0;
  let end = array.length - 1;
  for(let i=start+1;i<=end;i++) {
    for(let j=i;j>start&&array[j-1] > array[j];j--) {
      [array[j-1], array[j]] = [array[j], array[j-1]];
    }
  }
  return array;
};


console.log(insertionSort([5, 2, 3, 4, 1]));