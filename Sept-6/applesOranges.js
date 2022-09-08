/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesArr = apples.map((i)=> {return i+a})
    let orangesArr = oranges.map((i)=> {return i+b})
    // console.log(applesArr)
    let orangeRange = orangesArr.filter((i)=> {
        if(i>=s && i<=t){
           return i
        }
    })
    let appleRange = applesArr.filter((i)=> {
        if(i>=s && i<=t){
           return i
        }
    })
    console.log(appleRange.length)
    console.log(orangeRange.length)

}

//Calculating Time and space complexity
//Time complexity : No loops used. O(1) constant complexity
//space complexity: No extra space has been created. O(1)
