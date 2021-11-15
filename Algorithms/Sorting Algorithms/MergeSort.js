const merge = (left, right) => {
  let i = 0;
  let j = 0;
  let li=[];
  while(i < left.length && j < right.length) {
    left[i] < right[j] ? li.push(left[i++]) : li.push(right[j++]);
  }
  return [...li, ...left.slice(i, left.lenght), ...right.slice(j, right.lenght)];
}

const mergeSort = (array) => {
  if(array.length === 1) {
    return array;
  }
  let middleIndex = Math.floor(array.length/2);
  let leftArray = array.slice(0, middleIndex);
  let rightArray = array.slice(middleIndex, array.length);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(mergeSort([4, 3, 7, 2, 1, 6, 5, 9, 8]));