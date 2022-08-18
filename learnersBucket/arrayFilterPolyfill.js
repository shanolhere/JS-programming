/**
* @param {number[]} arr
* @param {function()} cb
* @return {number[]}
*/

/**
* Do not change this function body
* Do your changes within the function
*/

return function filter(arr, cb) {
  // your code goes here
  let res = []
  for(let i=0;i<arr.length;i++){
    if(cb(arr[i])){
    res.push(arr[i])
  }
  }
  return res
};
