/* Aug 17 2022
Question:  https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
Level :   Basic
*/
function staircase(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n));
}
