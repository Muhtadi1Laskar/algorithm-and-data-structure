const linearSearch = (arr, item) => {
    for(let i=0;i<arr.length;i++) {
      if(arr[i] === item) {
        return true;
      }
    }
    return false;
  }
  
  console.log(linearSearch([1, 2, 3, 4, 6], 6))