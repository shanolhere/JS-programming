/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
function isFactor(a,b){
    return a%b===0
}

function getTotalX(a, b) {
    // Write your code here
    let results = []
    for(let i=1;i <= 100;i++){
        if(a.every((x)=> isFactor(i,x)) && b.every((x)=> isFactor(x,i))){
            results.push(i)
        }
    }
    return results.length;

}


//Calculating Time and space complexity
//Time complexity :  O(n) constant complexity
//space complexity: Extra space has been created. O(n)
