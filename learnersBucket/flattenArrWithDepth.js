/**
* @param {number[][]} arr
* @param {number} depth
* @return {number[]}
*/

/**
* Do not change this function body
* Do your changes within the function
*/

return function flattenArray(arr, depth) {
  // your code goes here
  const newArr = arr.reduce((acc,ele)=> {
     if(Array.isArray(ele)&&depth){
       acc.push(...flattenArray(ele,depth-1))
     }
    else{
      acc.push(ele)
    }
    return acc
  },[])
  return newArr;
};
