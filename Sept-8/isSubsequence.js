/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s===t) return true
    let i=0;
    for(let j=0;j<t.length;j++){
       if(s[i]===t[j]) i++
    }
    return s.length===i
};
