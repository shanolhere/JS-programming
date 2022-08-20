/*Method-1

let n=100;
for(let i=1;i<=n;i++){
  console.log(i,  i%3===0 && i%5===0 ?"FIZZBUZZ" : i%3===0? "FIZZ" : i%5===0?"BUZZ" :"")
}
*/


//Method-2
function fizzBuzz(n){
  for(let i=1;i<=n;i++){
    if(i%3===0 && i%5===0){
      console.log(i, "FIZZBUZZ")
    }
    else if(i%3===0){
      console.log(i, "FIZZ")
    }
    else if(i%5===0){
      console.log(i,"BUZZ")
    }
    else{
      console.log(i)
    }
  }
}
fizzBuzz(100)
