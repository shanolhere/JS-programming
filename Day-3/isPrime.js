/*
Aug 18 2022
Question:  https://www.30secondsofcode.org/js/s/is-prime
Level :   Basic
*/
const isPrime = (num) => {
  let isPrime = true
  if(num===1){
    console.log("Not prime nor Composite number")

  }
  else if(num>1){
    for(let i=2;i<num;i++){
      if(num%i===0){
        isPrime=false;
        break;
      }
    }
    if(isPrime) return "prime-true"
    else return "not prime-false"
  }
}
console.log(isPrime(11))
