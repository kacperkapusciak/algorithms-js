//in binary search provided array have to be sorted 
//because none of it would make sense

//time complexity
//worst case O(log_2 n) 
//best case O(1)

const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) 
      end = middle - 1;
    else 
      start = middle + 1;
    
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
}

module.exports = binarySearch;
