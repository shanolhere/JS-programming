/*
Question:  https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
Level :   Basic
*/

function aVeryBigSum(ar) {
    // Write your code here
    let result = ar.reduce((ac,ele) => {
        return ac+ele
        },0)
    return result

}
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))
