/* Aug 17 2022
Question:  https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
Level :   Basic
*/
function timeConversion(s) {
    // Write your code here
    let hh=Number(s.slice(0,2))
    if(s.slice(s.length-2,) =='AM' && s.slice(0,2)=="12"){
         return "00"+s.slice(2,s.length-2)
    }
    else if(s.slice(s.length-2,)=="AM" ){
        return s.slice(0,s.length-2)
    }
    else if(s.slice(s.length-2,) =='PM' && s.slice(0,2)=="12"){
        return s.slice(0,s.length-2)
    }
    else{
        hh=hh+12
        return String(hh)+s.slice(2,s.length-2)
    }
}
