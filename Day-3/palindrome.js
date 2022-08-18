
/*

Method-1:
1. use split() reverse() and join()-- built-in methods.
let string="madam"
let revString = string.split('').reverse().join('')
console.log(string===revString);

*/
function checkPalindrome(string){
  let length = string.length;
  for(let i=0; i<length/2;i++){
    if(string[i]!==string[length-i-1]){
      return 'not palindrome'
    }
  }
  return 'palindrome'
}

const string = 'swews';
const value = checkPalindrome(string);

console.log(value);
