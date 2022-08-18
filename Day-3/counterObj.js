//Link: https://bigfrontend.dev/problem/create-a-counter-object

//To bind an object property to a function we can use get() or getter.
function createCounter(): {count: number } {
  // your code here
  let counter=0
  return{
    get count(){
      return counter++;
    }
  }
}
