//Deeply nested array ;-;
/**
* @param {number[][]} arr
* @return {number[]}
*/

/**
* Do not change this function body
* Do your changes within the function
*/

return function flattenArray(arr) {
  // your code goes here
  const newArr = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flattenArray(item));
    } else {
     acc.push(item);
    }

    return acc;
  }, []);

  return newArr;
};
