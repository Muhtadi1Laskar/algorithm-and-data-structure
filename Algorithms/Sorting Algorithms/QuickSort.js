const quickSort = (arr) => {
    if(arr.length < 2) return arr;
    const pivot = arr[Math(floor(list.length / 2))]; // O(1)
    const less = arr.filter((item) => item < pivot); // O(n)
    const more = arr.filter((item) => item > pivot); // O(n)
    console.log("pivot", pivot);
    console.log("Less", less);
    console.log("More", more);
    // for(let i=1;i<arr.length;i++) {
    //   if(arr[i] <= pivot) {
    //     less.push(arr[i]);
    //   }
    // }
    // for(let i=1;i<arr.length;i++) {
    //   if(arr[i] > pivot) {
    //     more.push(arr[i]);
    //   }
    // }
    return [...quickSort(less), ...pivot,  ...quickSort(more)]
  }
  