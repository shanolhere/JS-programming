
//Problems list : https://practice.learnersbucket.com/problems
/**
* @param {number[]} nums
* @param {number} target
* @return {boolean}
*/

/**
* Do not change this function body
* Do your changes within the function
*/

return function twoSum(nums, target) {
  // your code goes here
  let sum = 0,i=0;
  for(i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i]+nums[j]===target){
        return true
      }
    }
  }
  return false
};
