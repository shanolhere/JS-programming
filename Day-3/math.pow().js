/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
function pow(base, power){
  // your code here
  if(power===0)return 1
  if(power===1)return base
  if(power>1){
    return base* pow(base,power-1)
  }
  else{
    return 1/base*pow(base,power+1)
  }
}
