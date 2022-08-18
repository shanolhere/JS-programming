//https://bigfrontend.dev/problem/Find-the-largest-difference
/**
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
  // your code here
  if(arr.length===0)return 0
  else{
    return Math.abs(Math.max(...arr)-Math.min(...arr))
  }
}
