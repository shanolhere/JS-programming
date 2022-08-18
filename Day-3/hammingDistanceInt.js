/*
Aug 18 2022
Question:  https://www.geeksforgeeks.org/hamming-distance-between-two-integers/
Level :   Basic
*/
/* hamming distance between 2 Integers
1. first calculate XOR of 2 integers
2. And then count the number of setbits

Input: n1 = 9, n2 = 14
Output: 3
9 = 1001, 14 = 1110
No. of Different bits = 3

Input: n1 = 4, n2 = 8
Output: 2

*/

const hammingDistance=(n1,n2)=> {
   let x= n1^n2
   let setBits = 0
   while(x>0){
     setBits+= x&1;
     x>>=1
   }
   return setBits
}
let n1 = 9, n2 = 14;
console.log(hammingDistance(n1, n2));
