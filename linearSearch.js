//time complexity
//worst case O(n) 
//best case O(1)

const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) 
    if (arr[i] === value) return i;
  
  return -1;
}

const result = linearSearch([6,7,82,3,41,5,9,10], 5);
console.log(result);
