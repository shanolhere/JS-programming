/*
Aug 17 2022
Question:  https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true
Level :   Basic
*/

function extraLongFactorials(n) {
    // Write your code here
    var bigInt = BigInt(n);
    var factorial = 1n;

    for (let i = 0n; i < bigInt ; i++) {
        factorial *= bigInt - i;
    }

    console.log(factorial.toString());

}
