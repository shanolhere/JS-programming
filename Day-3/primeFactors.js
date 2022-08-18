/*
Aug 18 2022
Question:  https://www.30secondsofcode.org/js/s/prime-factors
Level :   Basic
*/
//Finds the prime factors of a given number using the trial division algorithm.
const primeFactors = (num) => {
  let res = []
  let f=2;
  while(num>1){
    if(num%f===0){
      res.push(f)
      num = num/f
    }
    else{
      f++;
    }
  }
  return res;
}
console.log(primeFactors(147))
