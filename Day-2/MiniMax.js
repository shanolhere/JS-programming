/* Aug 17 2022
Question:  https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
Level :   Basic
*/
function miniMaxSum(arr) {
    // Write your code here
    let max= arr[0]
    let min= arr[0]
    let sum = arr.reduce((acc, ele) => {return acc+ele },0)
    for(let i=0; i<arr.length;i++){
        if(arr[i]>max){
        max=arr[i]
        }
        if(arr[i]<min){
        min=arr[i]
        }

    }
    //console.log(max,min,sum)
    console.log(sum-max, sum-min)

}
