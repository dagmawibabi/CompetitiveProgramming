/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length > 1){
        let firstPTR = 0;
        let secondPTR = 1;
        let newArray = [];
        while(firstPTR < intervals.length - 1){
            if(intervals[firstPTR][0] <= intervals[secondPTR][0] && intervals[firstPTR][1] >= intervals[secondPTR][0] && intervals[firstPTR][1] <= intervals[secondPTR][1]){
                newArray.push([intervals[firstPTR][0], intervals[secondPTR][1]]);
            } else {
                newArray.push([intervals[secondPTR][0], intervals[secondPTR][1]]);
            }
            firstPTR++;
            secondPTR++;
        }
        return newArray;
    } else {
        return intervals;
    }
    

};