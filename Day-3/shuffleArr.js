/*
Aug 18 2022
Question:  https://www.30secondsofcode.org/js/s/shuffle
Level :   Basic
*/
/* Shuffle an array
we have .shuffle() method

*/
/*method-1
const shuffleArr = (arr) => {
  return arr.sort(()=> Math.random() - 0.5)
}
console.log(shuffleArr([1,2,3]))
*/

//Method-2
const shuffleArr = (arr) => {
  for(let i=0;i<arr.length;i++){
    let randIndex = i+ Math.floor(Math.random()*(arr.length -i))
    let temp = arr[i]
    arr[i]=arr[randIndex]
    arr[randIndex] = temp
    //arr[i],arr[randIndex] = arr[randIndex],arr[i]
  }
  return arr
}
console.log(shuffleArr([1,2,3]))
