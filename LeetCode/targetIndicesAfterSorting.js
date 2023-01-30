/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let sortedNums = nums.sort((a, b) => a - b);
    let result = [];
    while(sortedNums.indexOf(target) != -1){
        result.push(sortedNums.indexOf(target));
        sortedNums[sortedNums.indexOf(target)] = "X";
    }
    return result;
};