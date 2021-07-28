const binarySearch = (arr, item, start, end) => {
  if (start >= end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === item) {
    return arr[mid];
  }
  if (arr[mid] < item) {
    return binarySearch(arr, item, mid + 1, end);
  } else {
    return binarySearch(arr, item, start, mid - 1);
  }
};

let arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 4, 0, arr.length - 1));
