/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let str = ""
    if((x1-x2) % (v2-v1) == 0 && v1>v2){
        str = "YES"
    }
    else{
        str = "NO"
    }
    return str

}

//Calculating Time and space complexity
//Time complexity : No loops used. O(1) constant complexity
//space complexity: Extra variable space has been created. O(1)
