function sum(arr){
    return arr.reduce((ac,i)=> {return ac+i},0);
}


function dayOfProgrammer(year) {
    // Write your code here
    console.log(year)
    let leapdaysList = [31 , 29 , 31 , 30 , 31 , 30 , 31 , 31]
    let nonLeapdaysList = [31 , 28 , 31 , 30 , 31 , 30 , 31 , 31]
    let oneYearList = [31 , 15 , 31 , 30 , 31 , 30 , 31 , 31]
    let programmerDay = 256
    let totalDays = 0

    if(year>=1700 && year<=1917 && year%4 == 0){
       totalDays =  sum(leapdaysList)
    }
    else if(year>=1919 && year<=2700+1 && (year%400 == 0 || (year%4 == 0 && year%100 != 0))){
        totalDays = sum(leapdaysList)
    }
    else if(year==1918){
        totalDays = sum(oneYearList)
    }
    else{
       totalDays = sum(nonLeapdaysList)
    }
    let day = Math.abs(programmerDay-totalDays);
    let resArr = []
    let month = "09";
    resArr.push(day);
    resArr.push(month);
    resArr.push(year)
    return resArr.join('.')
}


//Calculating Time and space complexity
//Time complexity : No loops used. O(1) constant complexity
//space complexity: A new array has been created. O(n) 
