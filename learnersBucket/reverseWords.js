//Link : https://practice.learnersbucket.com/problems/reverse-words-string
/**
* @param {string} str
* @return {string}
*/

/**
* Do not change this function body
* Do your changes within the function
*/

return function reverse(str) {
  // your code goes here
  let res=[]
  let arr = str.split(' ')
  const arrMap = arr.map((ele) => ele.split('').reverse().join(''))
  return arrMap.join(' ')
};
