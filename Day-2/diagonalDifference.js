/* Aug 17 2022
Question:  https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
Level :   Basic
*/

function diagonalDifference(arr) {
    // Write your code here
    let leftd = 0
    let rightd=0;
    let difference = 0
    for(let i=0; i<arr.length;i++){
        leftd+=arr[i][i]
        rightd+=arr[i][arr.length-i-1]
    }
    difference = Math.abs(leftd-rightd)
    return difference;

}
