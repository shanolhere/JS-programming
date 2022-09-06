/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    let charge = 0
    let hackos = 0
    if(y1===y2 && m1===m2){
        if(d2<d1){
        hackos = 15
       charge = hackos *(d1-d2)
       }
       else {
           charge = 0
       }
    }
    else if(y1>y2){
        hackos = 10000
        charge = 10000
    }
    else if(m1>m2 && y1==y2){
        hackos = 500
        charge = hackos *(m1-m2)
    }
    return charge;
}


//Calculating Time and space complexity
//Time complexity : No loops used. O(1) constant complexity
//space complexity: No extra space has been created. O(1)
