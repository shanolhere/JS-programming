/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
    // Write your code here
   return (Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a))+1)
}


//Calculating Time and space complexity
//Time complexity : No loops used. O(1) constant complexity
//space complexity: No extra space has been created. O(1) 
