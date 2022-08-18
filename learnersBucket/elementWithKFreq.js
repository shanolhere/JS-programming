/**
* @param {any []} arr
* @param {number} k
* @return {any}
*/

/**
* Do not change this function body
* Do your changes within the function
*/

return function kFrequency(arr, k) {
  // your code goes here
  const countObj = arr.reduce((acc,ele)=> {
    if(!acc[ele]){
      acc[ele]=1
    }
    else{
      acc[ele]+=1
    }
    return acc
  },{})

  for(const [key,value] of Object.entries(countObj)){
    if(value===k){
      return key
    }

  }
  return -1
};
