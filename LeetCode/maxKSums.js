/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0;
    let sums = [];
    for(i in nums){
        for(j in nums){
            exists = false;
            if (i != j && nums[i] + nums[j] == k){
                for (l of sums){
                    if (l[0] == nums[i] && l[1] == nums[j] || l[1] == nums[i] && l[0] == nums[j]){
                        exists = true;
                    }
                }
                if (exists == false){
                    count = count + 1;
                    // console.log(nums[i] + " and " + nums[j])
                    sums.push([nums[i], nums[j]])
                }
            }
        }
    }
    return count;
};