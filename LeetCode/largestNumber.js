/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(   ) {
    let singleDigitSort = nums.sort().reverse();
    singleDigitSort = singleDigitSort.join("");
    singleDigitSort = singleDigitSort.split("");
    console.log(singleDigitSort);
  
};