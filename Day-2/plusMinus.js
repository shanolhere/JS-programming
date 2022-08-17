/* Aug 17 2022
Question:  https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
Level :   Basic
*/
function plusMinus(arr) {
    // Write your code here
    let pos = 0
    let neg=0;
    let zero=0;
    let length = arr.length
    for(let i=0; i<length;i++){
        if(arr[i]>0) pos+=1
        else if(arr[i]<0) neg+=1
        else zero+=1
    }
    console.log(pos/length)
    console.log(neg/length)
    console.log(zero/length)

}
