/**
* @param {number[]} nums
* @param {number} target
* @return {boolean}
*/

/**
* Do not change this function body
* Do your changes within the function
*/

return function fourSum(nums, target) {
  // your code goes here
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      for(let k=i+2;k<nums.length;k++){
       for(let l=i+3;l<nums.length;l++){
        if(nums[i]+nums[j]+nums[k]+nums[l]===target){
          return true
        }
       }
      }
    }
  }
  return false
};
