/*
Aug 18 2022
Question:  https://www.30secondsofcode.org/js/s/factorial
Level :   Basic
*/
\/* how to find factorial of any larger number?
if you want that kind of output you need to use a library
that handles numbers differently than Javascript does. It's called BigNumber.js
*/
const factorial=(n) => {
  n=BigInt(n)
  if(n==1n||n==0n) return 1n
  else{
    return n*factorial(n-1n)
  }

}
console.log(String(factorial(125)))
