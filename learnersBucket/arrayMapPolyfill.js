/**
* @param {number[]} arr
* @param {function()} cb
* @return {number[]}
*/

/**
* Do not change this function body
* Do your changes within the function
*/

return function map(arr, cb) {
  // your code goes here
  let res = []
  for(let i=0;i<arr.length;i++){
    res.push(cb(arr[i]))
  }
  return res
};
