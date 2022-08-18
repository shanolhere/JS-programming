/*
Aug 18 2022
Question:
Level :   Basic
*/
const fibonacciSeq=(num)=> {
  let res=[]
  let a=0
  let b=1
  let sum=0
  for(let i=1;i<=num;i++){
    res.push(a)
    sum=a+b
    a=b
    b=sum
  }

  return res;
}
console.log(fibonacciSeq(6))
