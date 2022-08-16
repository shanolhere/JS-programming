/*
Question:  https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
Level :   Basic
*/

function compareTriplets(a, b) {
    // Write your code here
    let alice=0; let bob =0;
    for(let i=0; i<a.length;i++){
        if(a[i]>b[i]){
            alice+=1}
        else if(a[i]<b[i]){
            bob+=1}
        else{
            alice+=0
            bob+=0
        }
    }
    return [alice,bob]


}
console.log(compareTriplets(2,5))
