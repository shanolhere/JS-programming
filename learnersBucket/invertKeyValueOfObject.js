/**
* @param {object{}} obj
* @return {object{}}
*/

/**
* Do not change this function body
* Do your changes within the function
*/

return function invert(obj) {
  // your code goes here
  let res = {}
  for([key,value] of Object.entries(obj)){
    res[value]=key
  }
  return res
};
