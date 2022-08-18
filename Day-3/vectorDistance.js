/*
Aug 18 2022
Question:  https://www.30secondsofcode.org/js/s/vector-distance
Level :   Basic
*/

//formula for vector distance of 2 vectors =
/* To find the distance d(v,w) between the two vectors

v=(1,3)

w=(5,2)

we make the following calculation

d(v,w)=(1−5)2+(3−2)2−−−−−−−−−−−−−−−√=16+1−−−−−√=17

*/

const vectorDistance= (x,y)=> {
  return Math.sqrt(x.reduce((acc,ele,i)=> acc+ Math.pow(ele-y[i],2),0))
}

console.log(vectorDistance([10, 0, 5], [20, 0, 10])); // 11.180339887498949
