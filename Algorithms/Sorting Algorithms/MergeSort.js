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


// Functional Approach
const mergeF = (a, b) => {
  if (a.length === 0) {
    return b;
  } else if (b.length === 0) {
    return a;
  } else if (a[0] < b[0]) {
    return [a[0], ...mergeF(a.slice(1), b)];
  } else {
    return [b[0], ...mergeF(a, b.slice(1))];
  }
};

const mergeSortF = (array) => {
  if (array.length < 2) {
    return array;
  }
  let middleIdx = Math.floor(array.length / 2);
  let left = array.slice(0, middleIdx);
  let right = array.slice(middleIdx);
  return mergeF(mergeSortF(left), mergeSortF(right));
};

console.log(mergeSortF([5, 4, 3, 2, 1]));
