/*
Question:  https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
Level :   Basic
*/

function simpleArraySum(ar) {
    // Write your code here
    let sum = 0
    for(let i=0; i<ar.length;i++){
        sum+=ar[i]
    }
    return sum


}
console.log(simpleArraySum([2,5,3]))
