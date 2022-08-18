/*
Aug 18 2022
Question:  https://www.geeksforgeeks.org/hamming-distance-two-strings/
Level :   Basic
*/
/* hamming distance between 2 strings

*/

const hammingDistance=(str1,str2)=> {
  let i=0;
  let count=0;
  while(i<str1.length){
    if(str1[i]!==str2[i]){
      count+=1

    }
    i++;
  }
  return count
}
let str1 = "geekspractice";
let str2 = "nerdspractise";
console.log(hammingDistance(str1, str2));
