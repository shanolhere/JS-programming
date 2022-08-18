/*
Aug 18 2022
Question:  https://www.30secondsofcode.org/js/s/fibonacci
Level :   Basic
*/

// method-1 recursive approach
function fibonacci(n) {
  if(n==0)return 0
    if (n < 2){
        return 1;
    }else{
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

console.log(fibonacci(6));

/* method-2 Iterative approach
const fibonacci=(num)=> {

  let a=0
  let b=1
  let sum=0
  for(let i=2;i<num;i++){
    sum=a+b
    a=b
    b=sum
  }

  return b;
}
console.log(fibonacci(6))
*/
