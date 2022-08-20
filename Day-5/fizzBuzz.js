let n=100;
for(let i=1;i<=n;i++){
  console.log(i,  i%3===0 && i%5==0 ?"FIZZBUZZ" : i%3===0? "FIZZ" : i%5===0?"BUZZ" :"")
}
