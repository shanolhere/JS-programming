/*
Aug 18 2022
Question:  https://www.30secondsofcode.org/js/s/distance
Level :   Basic
remained- powerset
*/

//use Math.hypot() to calculate the Euclidean distance between 2 points

const distance=(x0,y0,x1,y1)=> {
  return Math.hypot(x1-x0, y1-y0)
}
console.log(distance(1, 1, 2, 3))
