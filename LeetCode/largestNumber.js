/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let sorted = nums.sort().reverse();
    let result = [];
    for (i of sorted) {
        let stringified = i.toString();
        if (stringified.length > 1) {
            let curNum = stringified.split("");
            let curNumSorted;
            if(curNum.includes("0") == true){
                curNumSorted = curNum.sort();
            } else {
                curNumSorted = curNum.sort();                            
            }
            let curNumInt = parseInt(curNumSorted.join(""));
            result.push(curNumInt);
        } else {
            result.push(i);
        }
    }
    let lastResult = result.join("");
    return lastResult;   
};