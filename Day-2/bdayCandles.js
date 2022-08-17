/*
Aug 17 2022
Question:  https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
Level :   Basic
*/
function birthdayCakeCandles(candles) {
    // Write your code here
    let max= candles[0]
    let count=0;
    for(let i=0; i<candles.length;i++){
        if(candles[i]>max){
        max=candles[i]
        }
    }
    //console.log(max)
    for(let i=0;i<candles.length;i++){
        if(max===candles[i]) count+=1
    }
    return count;

}
