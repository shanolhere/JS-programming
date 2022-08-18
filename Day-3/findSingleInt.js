//Link: https://bigfrontend.dev/problem/find-the-single-integer

/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  // your code here
  const countObj = arr.reduce((acc,ele)=> {
    if(!acc[ele]){
      acc[ele]=1
    }
    else{
      acc[ele]++
    }
    return acc
  },{})

  for(const [key,value] of Object.entries(countObj)){
    if(value===1){
      return +(key)
    }
  }
}
