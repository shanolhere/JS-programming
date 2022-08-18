/*
Aug 18 2022
Question:  https://www.30secondsofcode.org/js/s/linear-search
Level :   Basic

*/
const linearSearch=(arr,item)=> {
  for(let i=0; i<arr.length;i++){
    if(arr[i]===item){
      return +i
    }
  }
  return -1
}


console.log(linearSearch([2, 19, 9], 9)); // 1
