/*
Aug 18 2022
Question:  https://www.30secondsofcode.org/js/s/gcd or /lcm
Level :   Basic

*/

// method-1

function gcd(n1,n2){
  if(n2===0)return n1
  if(n1===0)return n2
  while(n2 != 0){
    if(n1>n2){
      n1=n1-n2
    }
    else{
      n2=n2-n1
    }
  }
  return n1
}

const lcm=(n1,n2)=> {
  return (n1*n2)/gcd(n1,n2)
}
console.log(lcm(24,36))


/*
//Method-2
const lcm=(n1,n2)=> {
  let large = Math.max(n1,n2)
  let small = Math.min(n1,n2)
  let i=large;
  while(i% small!==0){
    i+=large;
  }
  return i
}
console.log(lcm(24,36))
*/
