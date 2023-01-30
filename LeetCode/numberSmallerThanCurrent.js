/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let counter = [];
    for (eachNum of nums){
        let smallers = 0;
        for(everyOtherNum of nums){
            if (eachNum != everyOtherNum){
                if(eachNum > everyOtherNum){
                    smallers++;
                }
            }
        }
        counter.push(smallers);
    }
    return counter;
};